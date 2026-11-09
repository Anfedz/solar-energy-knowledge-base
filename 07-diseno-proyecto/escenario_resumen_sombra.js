// Resumen: efecto del horizonte de árboles en todos los escenarios. Uso: node 07-diseno-proyecto/escenario_resumen_sombra.js
const path = require("path"), RAIZ = path.join(__dirname, "..");
const M = require(RAIZ + "/08-simulador/motor.js"), base = require(RAIZ + "/08-simulador/datos.json");
const HZ = require(RAIZ + "/06-datos/pv_horizonte_estimado.json");
const conHz = { ...base, pv_este: HZ.este, pv_oeste: HZ.oeste, pv_sur: HZ.sur };
const R = (d, h, w) => ({ desde: d, hasta: h, w });
const fijos = (dia) => [{ tipo: "base", rangos: [R(0,24,85)] },{ tipo: "base", rangos: [R(0,24,41)] },{ tipo: "base", rangos: [R(0,24,60)] },{ tipo: "base", rangos: [R(18,23,150)] },{ tipo: "base", rangos: [R(9,17,120)] },{ tipo: "base", rangos: [R(19,23,250)] },
 { tipo: "base", rangos: dia ? [R(9,10,400),R(12,13,400)] : [R(7,8,400),R(12,13,400)] },{ tipo: "base", rangos: dia ? [R(10,11,300)] : [R(9,10,300)] },{ tipo: "base", rangos: dia ? [R(9,15,67)] : [R(10,18,50)] }];
const air = (a,b,c) => [{ tipo: "clima", rangos: a },{ tipo: "clima", rangos: b },{ tipo: "clima", rangos: c }];
const REF = [...fijos(false), ...air([R(13,16,750),R(21,23,850)],[R(14,17,545),R(21,23,550)],[R(23,7,440),R(14,17,500)])];
const PLAN = [...fijos(true), ...air([R(9,12,700),R(12,15,617)],[R(9,11,550),R(12,15,545)],[R(23,4,470),R(12,15,500)])];
const tarifa = { cu: 936.4, cv: 133.39, bolsa: 300, alumbrado: 0.1, estrato: 3, subsidio: { 1:.407,2:.259,3:.15,4:0 }, contribucion: .2 };
const cot = { modo: "cero", nE: 6, nO: 6, eta: .96, idleW: 50 }, on = { modo: "ongrid", eta: 1, idleW: 0 };
const ESC = [
  ["Elegido, hábitos actuales", { ...cot, batKWh: 0 }, REF],
  ["Elegido, plan 9-15 + Aire 3 5 h", { ...cot, batKWh: 0 }, PLAN],
  ["Elegido + bat 5 kWh, plan", { ...cot, batKWh: 5 }, PLAN],
  ["Elegido + bat 10 kWh, plan", { ...cot, batKWh: 10 }, PLAN],
  ["Elegido + bat 5 kWh, hábitos actuales", { ...cot, batKWh: 5 }, REF],
  ["On-grid 8 este (hipotético)", { ...on, nE: 8, nO: 0, batKWh: 0 }, REF],
  ["On-grid 12 (6E+6O) (hipotético)", { ...on, nE: 6, nO: 6, batKWh: 0 }, REF],
];
const run = (D, c, cargas, sombra) => M.simular(D, { panelW: 630, dod: .9, conmuta: false, calibrar: true, extras: [], tarifa, cargasRef: REF, nS: 0, ...c, cargas, sombra });
console.log("| Escenario | Prod. sin árboles | Prod. con árboles | Ahorro sin árboles | Ahorro con árboles (fotos) | Diferencia | Supuesto anterior 10 % |");
for (const [n, c, cargas] of ESC) {
  const a = run(base, c, cargas, 0.03), b = run(conHz, c, cargas, 0.03), z = run(base, c, cargas, 0.10);
  const ah = (r) => (r.tot.antes - r.tot.despues) / 1e6;
  console.log(`| ${n} | ${a.tot.pv.toFixed(0)} | ${b.tot.pv.toFixed(0)} (${((b.tot.pv/a.tot.pv-1)*100).toFixed(1)} %) | ${ah(a).toFixed(2)} | ${ah(b).toFixed(2)} | ${((ah(b)-ah(a))*1000).toFixed(0)} mil (${((ah(b)/ah(a)-1)*100).toFixed(1)} %) | ${ah(z).toFixed(2)} |`);
}
