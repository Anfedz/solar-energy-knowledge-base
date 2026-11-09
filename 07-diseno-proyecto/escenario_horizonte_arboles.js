// Escenario: horizonte de árboles estimado con fotos del 2026-11-09 (~4:40 pm). Uso: node 07-diseno-proyecto/escenario_horizonte_arboles.js
const P = require("path").join(__dirname, "..", "08-simulador") + "/";
const M = require(P + "motor.js"), base = require(P + "datos.json"), HZ = require(require("path").join(__dirname, "..", "06-datos", "pv_horizonte_estimado.json"));
const conHz = { ...base, pv_este: HZ.este, pv_oeste: HZ.oeste, pv_sur: HZ.sur };
const R = (d, h, w) => ({ desde: d, hasta: h, w });
const fijos = (dia) => [{ tipo: "base", rangos: [R(0,24,85)] },{ tipo: "base", rangos: [R(0,24,41)] },{ tipo: "base", rangos: [R(0,24,60)] },{ tipo: "base", rangos: [R(18,23,150)] },{ tipo: "base", rangos: [R(9,17,120)] },{ tipo: "base", rangos: [R(19,23,250)] },
 { tipo: "base", rangos: dia ? [R(9,10,400),R(12,13,400)] : [R(7,8,400),R(12,13,400)] },{ tipo: "base", rangos: dia ? [R(10,11,300)] : [R(9,10,300)] },{ tipo: "base", rangos: dia ? [R(9,15,67)] : [R(10,18,50)] }];
const air = (a,b,c) => [{ tipo: "clima", rangos: a },{ tipo: "clima", rangos: b },{ tipo: "clima", rangos: c }];
const REF = [...fijos(false), ...air([R(13,16,750),R(21,23,850)],[R(14,17,545),R(21,23,550)],[R(23,7,440),R(14,17,500)])];
const PLAN = [...fijos(true), ...air([R(9,12,700),R(12,15,617)],[R(9,11,550),R(12,15,545)],[R(23,4,470),R(12,15,500)])];
const tarifa = { cu: 936.4, cv: 133.39, bolsa: 300, alumbrado: 0.1, estrato: 3, subsidio: { 1:.407,2:.259,3:.15,4:0 }, contribucion: .2 };
const sis = { modo: "cero", panelW: 630, eta: .96, idleW: 50, dod: .9, conmuta: false, calibrar: true, extras: [], tarifa, cargasRef: REF, sombra: 0.03 };
const CONF = [["6 este + 6 oeste", 6, 6, 0], ["8 este + 4 oeste", 8, 4, 0], ["12 este", 12, 0, 0], ["12 sur 10° (estructura)", 0, 0, 12]];
for (const [hab, cargas] of [["Hábitos actuales", REF], ["Plan 9-15 + Aire 3 5 h", PLAN]]) {
  console.log("\n## " + hab + " (con árboles estimados de las fotos + 3 % pérdidas varias)");
  for (const [nom, nE, nO, nS] of CONF) {
    const c = []; let prod;
    for (const bat of [0, 5, 10]) { const r = M.simular(conHz, { ...sis, cargas, nE, nO, nS, batKWh: bat }); if (!bat) prod = r.tot.pv; c.push(`bat${bat}: ${((r.tot.antes - r.tot.despues) / 1e6).toFixed(2)}`); }
    console.log(nom.padEnd(26), `prod ${prod.toFixed(0)} kWh |`, c.join(" | "));
  }
}
const r1 = M.simular(conHz, { ...sis, cargas: REF, nE: 6, nO: 6, nS: 0, batKWh: 0 });
const r0 = M.simular(base, { ...sis, cargas: REF, nE: 6, nO: 6, nS: 0, batKWh: 0 });
console.log("\nPerfil horario promedio anual 6E+6O (kW), 12h..18h: sin árboles", (()=>{const c=Array(24).fill(0);r0.meses.forEach(m=>m.perfilPV.forEach((v,h)=>c[h]+=v/12));return c.slice(12,19).map(v=>v.toFixed(2)).join(" ")})(), "| con árboles", (()=>{const c=Array(24).fill(0);r1.meses.forEach(m=>m.perfilPV.forEach((v,h)=>c[h]+=v/12));return c.slice(12,19).map(v=>v.toFixed(2)).join(" ")})());
