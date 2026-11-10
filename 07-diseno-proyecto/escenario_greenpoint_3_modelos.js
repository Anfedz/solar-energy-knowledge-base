// GreenPoint 5 / 10 / 14,34 kWh con distintas costumbres. Uso: node 07-diseno-proyecto/escenario_greenpoint_3_modelos.js
const RAIZ = require("path").join(__dirname, "..");
const M = require(RAIZ + "/08-simulador/motor.js"), base = require(RAIZ + "/08-simulador/datos.json"), HZ = require(RAIZ + "/06-datos/pv_horizonte_estimado.json");
const D = { ...base, pv_este: HZ.este, pv_oeste: HZ.oeste, pv_sur: HZ.sur };
const R = (d, h, w) => ({ desde: d, hasta: h, w });
const fijos = (dia) => [{ tipo: "base", rangos: [R(0,24,85)] },{ tipo: "base", rangos: [R(0,24,41)] },{ tipo: "base", rangos: [R(0,24,60)] },{ tipo: "base", rangos: [R(18,23,150)] },{ tipo: "base", rangos: [R(9,17,120)] },{ tipo: "base", rangos: [R(19,23,250)] },
 { tipo: "base", rangos: dia ? [R(9,10,400),R(12,13,400)] : [R(7,8,400),R(12,13,400)] },{ tipo: "base", rangos: dia ? [R(10,11,300)] : [R(9,10,300)] },{ tipo: "base", rangos: dia ? [R(9,15,67)] : [R(10,18,50)] }];
const air = (a,b,c) => [{ tipo: "clima", rangos: a },{ tipo: "clima", rangos: b },{ tipo: "clima", rangos: c }];
const REF = [...fijos(false), ...air([R(13,16,750),R(21,23,850)],[R(14,17,545),R(21,23,550)],[R(23,7,440),R(14,17,500)])];
const N3 = [...fijos(false), ...air([R(13,16,750),R(21,24,850)],[R(14,17,545),R(21,24,600)],[R(23,2,550),R(14,17,500)])];
const N2 = [...fijos(false), ...air([R(13,16,750),R(21,23,850)],[R(14,17,545),R(21,23,600)],[R(23,1,580),R(14,17,500)])];
const PLAN = [...fijos(true), ...air([R(9,12,700),R(12,15,617)],[R(9,11,550),R(12,15,545)],[R(23,4,470),R(12,15,500)])];
const tarifa = { cu: 936.4, cv: 133.39, bolsa: 300, alumbrado: 0.1, estrato: 3, subsidio: { 1:.407,2:.259,3:.15,4:0 }, contribucion: .2 };
const sis = { modo: "cero", nE: 6, nO: 6, nS: 0, panelW: 630, eta: .96, idleW: 50, conmuta: false, calibrar: true, extras: [], tarifa, cargasRef: REF, sombra: .03 };
const noche = (m) => m.perfilCarga.reduce((s, v, h) => s + ((h >= 17 || h < 7) ? v : 0), 0);
for (const [hab, cargas] of [["Aires 3 h c/u de noche", N3], ["Aires 2 h c/u de noche", N2], ["Hábitos de hoy (Aire 3 toda la noche)", REF], ["Plan 9-15 + Aire 3 5 h", PLAN]]) {
  const r0 = M.simular(D, { ...sis, cargas, batKWh: 0, dod: .9 });
  const nTot = r0.meses.reduce((s, m, i) => s + noche(m) * D.facturas[i].dias, 0);
  console.log(`\n## ${hab}: noche prom ${(nTot / 364).toFixed(1)} kWh | sin batería ahorro ${((r0.tot.antes - r0.tot.despues) / 1e6).toFixed(2)} M`);
  for (const dod of [.9, .8]) for (const b of [5.12, 10.24, 14.34]) {
    const r = M.simular(D, { ...sis, cargas, batKWh: b, dod });
    const ah = (r.tot.antes - r.tot.despues) / 1e6, ah0 = (r0.tot.antes - r0.tot.despues) / 1e6;
    console.log(`DoD ${dod * 100}% ${String(b).padEnd(5)} kWh | cubre ${(r.tot.bateria / nTot * 100).toFixed(0).padStart(3)} % noche | pagas ${(r.tot.despues / 1e6).toFixed(2)} M | ahorro ${ah.toFixed(2)} M (+${(ah - ah0).toFixed(2)}) | bat entrega ${(r.tot.bateria / 364).toFixed(1)} kWh/día`);
  }
}
