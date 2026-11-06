// Motor de simulación hora a hora (port de 07-diseno-proyecto/simulacion_horaria.py).
// Entradas: DATOS (producción PVGIS horaria por cara + facturas) y una configuración.
// Sin dependencias; se ejecuta en el navegador y en Node (pruebas).

function decodificarPV(b64) {
  const bin = typeof atob === "function" ? atob(b64) : Buffer.from(b64, "base64").toString("binary");
  const out = new Float32Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = (bin.charCodeAt(i) * 4) / 1000; // kW por kWp
  return out;
}

function prepararDatos(D) {
  if (D._listo) return D;
  D.pvE = decodificarPV(D.pv_este);
  D.pvO = decodificarPV(D.pv_oeste);
  D._listo = true;
  return D;
}

// Perfil horario (kW) de una lista de cargas con rangos [desde, hasta) que pueden cruzar la medianoche.
function perfilDe(cargas, tipo) {
  const p = new Array(24).fill(0);
  for (const c of cargas) {
    if (c.activo === false) continue;
    if (tipo && c.tipo !== tipo) continue;
    for (const r of c.rangos) {
      const kw = (Number(r.w) || 0) / 1000;
      let d = Number(r.desde), h = Number(r.hasta);
      if (h <= d) h += 24;
      for (let x = d; x < h; x++) p[x % 24] += kw;
    }
  }
  return p;
}

function sumar(a) { return a.reduce((s, v) => s + v, 0); }

// Perfil del mes: si "calibrar", los aires (tipo clima) se escalan para que el día promedio iguale la factura.
// Con cfg.cargasRef (modo "cambio de hábitos"), el ajuste mensual se calcula con el horario de referencia
// (el de las facturas) y se aplica al horario nuevo: quitar o agregar horas cambia el total del mes.
function perfilMes(cfg, kwhDia) {
  const base = perfilDe(cfg.cargas, "base");
  const clima = perfilDe(cfg.cargas, "clima");
  const extra = perfilDe(cfg.extras || [], null);
  let p;
  if (cfg.calibrar && cfg.cargasRef) {
    const bR = sumar(perfilDe(cfg.cargasRef, "base")), aR = sumar(perfilDe(cfg.cargasRef, "clima"));
    const s = aR > 0 ? (kwhDia - bR) / aR : 0;
    if (aR > 0 && s >= 0.1) p = base.map((v, i) => v + s * clima[i]);
    else {
      const k = kwhDia / (bR + 0.1 * aR || 1);
      p = base.map((v, i) => k * (v + 0.1 * clima[i]));
    }
  } else if (!cfg.calibrar) {
    p = base.map((v, i) => v + clima[i]);
  } else {
    const b = sumar(base), a = sumar(clima);
    const s = a > 0 ? (kwhDia - b) / a : 0;
    if (a > 0 && s >= 0.1) p = base.map((v, i) => v + s * clima[i]);
    else {
      const k = kwhDia / (b + 0.1 * a || 1);
      p = base.map((v, i) => k * (v + 0.1 * clima[i]));
    }
  }
  return p.map((v, i) => v + extra[i]);
}

function costoMes(kwh, kwhSub, t) {
  kwh = Math.max(kwh, 0);
  const e = Number(t.estrato);
  if (e >= 5) return kwh * t.cu * (1 + t.contribucion) * (1 + t.alumbrado);
  return kwh * t.cu * (1 + t.alumbrado) - Math.min(kwh, kwhSub) * t.cu * (t.subsidio[e] || 0);
}

function simular(D, cfg) {
  D = prepararDatos(D);
  const t = cfg.tarifa;
  const kwp = { e: (cfg.nE * cfg.panelW) / 1000, o: (cfg.nO * cfg.panelW) / 1000 };
  const factorPV = (1 - cfg.sombra) * cfg.eta;
  const hayFV = cfg.nE + cfg.nO > 0;
  const idle = hayFV || cfg.batKWh > 0 ? (cfg.idleW || 0) / 1000 : 0;
  const bat = cfg.batKWh || 0;
  const socMin = bat * (1 - cfg.dod), socMax = bat, etaB = 0.95;
  const meses = [];
  const tot = { carga: 0, pv: 0, directo: 0, bateria: 0, credito: 0, comprado: 0, bolsa: 0, desperdicio: 0, antes: 0, despues: 0 };

  for (const f of D.facturas) {
    const kwhDia = f.kwh / f.dias;
    const carga = perfilMes(cfg, kwhDia);
    const mes = ((Number(f.mes.slice(5, 7)) - 2 + 12) % 12) + 1; // la factura cubre ~el mes anterior
    const acc = { carga: 0, pv: 0, directo: 0, bateria: 0, imp: 0, exp: 0, desperdicio: 0 };
    const pvProm = new Array(24).fill(0);
    let nDias = 0;
    for (const bloque of D.indice[mes]) { // [inicio, días] por año
      let soc = bat * 0.5;
      for (let d = 0; d < bloque[1]; d++) {
        nDias++;
        const o = (bloque[0] + d) * 24;
        for (let h = 0; h < 24; h++) {
          const pv = (kwp.e * D.pvE[o + h] + kwp.o * D.pvO[o + h]) * factorPV;
          const ld = carga[h] + idle;
          pvProm[h] += pv;
          acc.carga += ld; acc.pv += pv;
          if (cfg.modo === "cero" && bat === 0 && cfg.conmuta) {
            if (pv >= ld) { acc.directo += ld; acc.desperdicio += pv - ld; }
            else { acc.imp += ld; acc.desperdicio += pv; }
            continue;
          }
          const dir = Math.min(pv, ld);
          let sobra = pv - dir, falta = ld - dir;
          acc.directo += dir;
          if (bat > 0) {
            const c = Math.min(sobra * etaB, socMax - soc);
            if (c > 0) { soc += c; sobra -= c / etaB; }
            const dsc = Math.min(falta / etaB, soc - socMin);
            if (dsc > 0) { soc -= dsc; falta -= dsc * etaB; acc.bateria += dsc * etaB; }
          }
          acc.imp += falta;
          if (cfg.modo === "ongrid") acc.exp += sobra; else acc.desperdicio += sobra;
        }
      }
    }
    const k = f.dias / nDias; // promedio diario × días de la factura
    const c = {
      carga: acc.carga * k, pv: acc.pv * k, directo: acc.directo * k, bateria: acc.bateria * k,
      imp: acc.imp * k, exp: acc.exp * k, desperdicio: acc.desperdicio * k,
    };
    let credito = 0, bolsa = 0, despues;
    if (cfg.modo === "ongrid") {
      credito = Math.min(c.exp, c.imp);
      bolsa = c.exp - credito;
      despues = costoMes(c.imp - credito, f.sub, t) + credito * t.cv - bolsa * t.bolsa;
    } else {
      despues = costoMes(c.imp, f.sub, t);
    }
    const cargaRef = cfg.cargasRef ? perfilMes({ ...cfg, cargas: cfg.cargasRef, cargasRef: null, extras: [] }, kwhDia) : carga;
    const antes = costoMes(sumar(cargaRef) * f.dias, f.sub, t); // factura sin solar con los hábitos de referencia
    const m = {
      mes: f.mes, mesConsumo: mes, dias: f.dias, carga: c.carga, pv: c.pv, directo: c.directo, bateria: c.bateria,
      credito, comprado: c.imp - credito, bolsa, desperdicio: c.desperdicio, antes, despues,
      perfilCarga: carga.map((v) => v + idle), perfilPV: pvProm.map((v) => v / nDias),
    };
    meses.push(m);
    for (const key of Object.keys(tot)) tot[key] += m[key];
  }
  return { meses, tot };
}

function costoSistema(cfg) {
  const n = cfg.nE + cfg.nO;
  return n * (cfg.precioPanel + cfg.precioEstructura) + (n > 0 || cfg.batKWh > 0 ? cfg.precioInversor + cfg.otros : 0)
    + cfg.batKWh * cfg.precioBatKWh;
}

// Flujo a N años: ahorro con aumento de tarifa y degradación; reemplazo de inversor (y batería) en el año indicado.
function finanzas(cfg, res) {
  const costo = costoSistema(cfg);
  const ahorro1 = res.tot.antes - res.tot.despues;
  const flujo = [];
  let acum = -costo, payback = null;
  for (let y = 1; y <= cfg.anios; y++) {
    let a = ahorro1 * Math.pow(1 + cfg.alzaTarifa, y - 1) * Math.pow(1 - cfg.degradacion, y - 1);
    if (y === cfg.anioReemplazo && costo > 0) a -= cfg.precioInversor + cfg.batKWh * cfg.precioBatKWh * 0.6;
    const prev = acum;
    acum += a;
    if (payback === null && acum >= 0 && costo > 0) payback = y - 1 + (a > 0 ? -prev / a : 0);
    flujo.push({ anio: y, ahorro: a, acumulado: acum });
  }
  return { costo, ahorro1, payback, neto: acum, flujo };
}

if (typeof module !== "undefined") module.exports = { simular, finanzas, costoSistema, perfilDe, perfilMes };
