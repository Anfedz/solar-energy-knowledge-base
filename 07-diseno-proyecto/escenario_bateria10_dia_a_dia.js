// Batería de 10,24 kWh día por día: en qué noches no alcanza. Uso: node 07-diseno-proyecto/escenario_bateria10_dia_a_dia.js
const RAIZ = require("path").join(__dirname, "..");
const M = require(RAIZ + "/08-simulador/motor.js"), base = require(RAIZ + "/08-simulador/datos.json"), HZ = require(RAIZ + "/06-datos/pv_horizonte_estimado.json");
const dec = (b) => { const s = Buffer.from(b, "base64"); const o = new Float32Array(s.length); for (let i = 0; i < s.length; i++) o[i] = s[i] * 4 / 1000; return o; };
const pvE = dec(HZ.este), pvO = dec(HZ.oeste);
const R = (d, h, w) => ({ desde: d, hasta: h, w });
const fijos = [{ tipo: "base", rangos: [R(0,24,85)] },{ tipo: "base", rangos: [R(0,24,41)] },{ tipo: "base", rangos: [R(0,24,60)] },{ tipo: "base", rangos: [R(18,23,150)] },{ tipo: "base", rangos: [R(9,17,120)] },{ tipo: "base", rangos: [R(19,23,250)] },{ tipo: "base", rangos: [R(7,8,400),R(12,13,400)] },{ tipo: "base", rangos: [R(9,10,300)] },{ tipo: "base", rangos: [R(10,18,50)] }];
const air = (a,b,c) => [{ tipo: "clima", rangos: a },{ tipo: "clima", rangos: b },{ tipo: "clima", rangos: c }];
const REF = [...fijos, ...air([R(13,16,750),R(21,23,850)],[R(14,17,545),R(21,23,550)],[R(23,7,440),R(14,17,500)])];
const N3 = [...fijos, ...air([R(13,16,750),R(21,24,850)],[R(14,17,545),R(21,24,600)],[R(23,2,550),R(14,17,500)])];
const N2 = [...fijos, ...air([R(13,16,750),R(21,23,850)],[R(14,17,545),R(21,23,600)],[R(23,1,580),R(14,17,500)])];
const MES = ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];
const BAT = 10.24, DOD = 0.8, KWP = 7.56, F = 0.97 * 0.96, IDLE = 0.05, ETA = 0.95;
for (const [nom, cargas] of [["Aires 3 h c/u", N3], ["Aires 2 h c/u", N2], ["Hoy (Aire 3 toda la noche)", REF]]) {
  console.log(`\n## ${nom} — batería 10,24 kWh al ${DOD*100}% (útil ≈ ${(BAT*DOD*ETA).toFixed(1)} kWh)`);
  let totDias = 0, totCortos = 0, totNoLlena = 0;
  for (const f of base.facturas) {
    const mes = ((+f.mes.slice(5, 7) - 2 + 12) % 12) + 1;
    const carga = M.perfilMes({ cargas, extras: [], calibrar: true, cargasRef: REF }, f.kwh / f.dias).map(v => v + IDLE);
    const nocheKwh = carga.reduce((s, v, h) => s + ((h >= 17 || h < 7) ? v : 0), 0);
    let dias = 0, cortos = 0, noLlena = 0, faltaTot = 0;
    for (const [ini, nd] of base.indice[mes]) {
      let soc = BAT * 0.5, min = BAT * (1 - DOD);
      for (let d = 0; d < nd; d++) {
        let falta = 0;
        for (let h = 0; h < 24; h++) {
          const o = (ini + d) * 24 + h, pv = KWP / 2 * (pvE[o] + pvO[o]) * F, ld = carga[h];
          let net = pv - ld;
          if (net > 0) soc = Math.min(BAT, soc + net * ETA);
          else { const need = -net / ETA, dsc = Math.min(need, soc - min); soc -= dsc; if (need - dsc > 1e-6 && (h >= 17 || h < 7)) falta += (need - dsc) * ETA; }
          if (h === 16 && soc < BAT * 0.98) noLlena++;
        }
        dias++; if (falta > 0.3) { cortos++; faltaTot += falta; }
      }
    }
    totDias += dias; totCortos += cortos; totNoLlena += noLlena;
    console.log(`factura ${f.mes} (consumo de ${MES[mes-1]}): noche ${nocheKwh.toFixed(1)} kWh | noches que no alcanza ${(cortos/dias*100).toFixed(0).padStart(3)} % (faltan ~${cortos ? (faltaTot/cortos).toFixed(1) : "0.0"} kWh) | días que no se llena a las 5 pm ${(noLlena/dias*100).toFixed(0)} %`);
  }
  console.log(`TOTAL: no alcanza en ${(totCortos/totDias*100).toFixed(0)} % de las noches; batería sin llenar a las 5 pm en ${(totNoLlena/totDias*100).toFixed(0)} % de los días`);
}
