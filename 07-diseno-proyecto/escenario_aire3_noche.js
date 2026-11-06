// Escenario: consumo nocturno y Aire 3 de 5 h (sistema elegido). Uso: node 07-diseno-proyecto/escenario_aire3_noche.js
const P = require("path").join(__dirname, "..", "08-simulador") + "/";
const M = require(P + "motor.js"), D = require(P + "datos.json");
// 1) Horas sin sol: producción media por hora (cara este+oeste) y su % del pico
const pv = Buffer.from(D.pv_este, "base64"), po = Buffer.from(D.pv_oeste, "base64");
const prom = new Array(24).fill(0); let n = 0;
for (let i = 0; i < pv.length; i += 24) { n++; for (let h = 0; h < 24; h++) prom[h] += (pv[i + h] + po[i + h]) * 4 / 2; }
const pk = Math.max(...prom.map(v => v / n));
console.log("PV media por hora (% del pico):", prom.map((v, h) => `${h}h:${Math.round(v / n / pk * 100)}`).join(" "));
// 2) Escenarios
const R = (d, h, w) => ({ desde: d, hasta: h, w });
const fijos = (dia) => [
  { id: "nev", tipo: "base", rangos: [R(0, 24, 85)] }, { id: "cong", tipo: "base", rangos: [R(0, 24, 41)] }, { tipo: "base", rangos: [R(0, 24, 60)] },
  { tipo: "base", rangos: [R(18, 23, 150)] }, { tipo: "base", rangos: [R(9, 17, 120)] }, { tipo: "base", rangos: [R(19, 23, 250)] },
  { tipo: "base", rangos: dia ? [R(9, 10, 400), R(12, 13, 400)] : [R(7, 8, 400), R(12, 13, 400)] },
  { tipo: "base", rangos: dia ? [R(10, 11, 300)] : [R(9, 10, 300)] },
  { tipo: "base", rangos: dia ? [R(9, 15, 67)] : [R(10, 18, 50)] },
];
const A1 = { hoy: [R(13, 16, 750), R(21, 23, 850)], dia: [R(9, 12, 700), R(12, 15, 617)] };
const A2 = { hoy: [R(14, 17, 545), R(21, 23, 550)], dia: [R(9, 11, 550), R(12, 15, 545)] };
const A3 = { hoy: [R(23, 7, 440), R(14, 17, 500)], cinco: [R(23, 4, 470), R(14, 17, 500)], cincoDia: [R(23, 4, 470), R(12, 15, 500)] };
const air = (a1, a2, a3) => [{ tipo: "clima", rangos: a1 }, { tipo: "clima", rangos: a2 }, { tipo: "clima", rangos: a3 }];
const REF = [...fijos(false), ...air(A1.hoy, A2.hoy, A3.hoy)];
const tarifa = { cu: 936.4, cv: 133.39, bolsa: 300, alumbrado: 0.1, estrato: 3, subsidio: { 1: .407, 2: .259, 3: .15, 4: 0 }, contribucion: .2 };
const sis = { modo: "cero", nE: 6, nO: 6, panelW: 630, sombra: .10, eta: .96, idleW: 50, dod: .9, conmuta: false, calibrar: true, extras: [], tarifa, cargasRef: REF };
const ESC = [
  ["Hoy: Aire 3 8 h de noche (23-7)", REF],
  ["Aire 3 5 h de noche (23-4)", [...fijos(false), ...air(A1.hoy, A2.hoy, A3.cinco)]],
  ["Aire 3 5 h + plan 9am-3pm", [...fijos(true), ...air(A1.dia, A2.dia, A3.cincoDia)]],
];
// factor de ajuste mensual s (intensidad de uso de aires según facturas)
const bR = REF.filter(c => c.tipo === "base").reduce((s, c) => s + M.perfilDe([c]).reduce((a, b) => a + b, 0), 0);
const aR = REF.filter(c => c.tipo === "clima").reduce((s, c) => s + M.perfilDe([c]).reduce((a, b) => a + b, 0), 0);
const sm = D.facturas.map(f => Math.max(0.1, (f.kwh / f.dias - bR) / aR));
console.log("factor s por factura:", D.facturas.map((f, i) => f.mes.slice(2) + ":" + sm[i].toFixed(2)).join(" "), "| promedio", (sm.reduce((a, b) => a + b) / 12).toFixed(2));
for (const [nom, cargas] of ESC) {
  const out = [];
  for (const bat of [0, 5.12, 10]) {
    const r = M.simular(D, { ...sis, cargas, batKWh: bat });
    out.push(`bat ${bat}: paga ${(r.tot.despues / 1e6).toFixed(2)} M, ahorro ${((r.tot.antes - r.tot.despues) / 1e6).toFixed(2)} M`);
    if (bat === 0) out.unshift(`consumo ${r.tot.carga.toFixed(0)} kWh/año (ref ${5887}+idle)`);
  }
  console.log(nom.padEnd(34), out.join(" | "));
}
// Sin solar: cuánto ahorra solo el cambio del aire 3
const sinFV = { ...sis, nE: 0, nO: 0, idleW: 0 };
const r0 = M.simular(D, { ...sinFV, cargas: REF }), r1 = M.simular(D, { ...sinFV, cargas: ESC[1][1] });
console.log("Sin solar: consumo", r0.tot.carga.toFixed(0), "→", r1.tot.carga.toFixed(0), "kWh/año; factura", (r0.tot.despues / 1e6).toFixed(2), "→", (r1.tot.despues / 1e6).toFixed(2), "M");
