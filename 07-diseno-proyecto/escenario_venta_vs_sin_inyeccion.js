// Con venta de excedentes (CREG 174) vs sistema elegido sin inyección. Uso: node 07-diseno-proyecto/escenario_venta_vs_sin_inyeccion.js
const RAIZ = require("path").join(__dirname, "..");
const M = require(RAIZ + "/08-simulador/motor.js"), base = require(RAIZ + "/08-simulador/datos.json"), HZ = require(RAIZ + "/06-datos/pv_horizonte_estimado.json");
const D = { ...base, pv_este: HZ.este, pv_oeste: HZ.oeste, pv_sur: HZ.sur };
const R = (d, h, w) => ({ desde: d, hasta: h, w });
const fijos = (dia) => [{ tipo: "base", rangos: [R(0,24,85)] },{ tipo: "base", rangos: [R(0,24,41)] },{ tipo: "base", rangos: [R(0,24,60)] },{ tipo: "base", rangos: [R(18,23,150)] },{ tipo: "base", rangos: [R(9,17,120)] },{ tipo: "base", rangos: [R(19,23,250)] },
 { tipo: "base", rangos: dia ? [R(9,10,400),R(12,13,400)] : [R(7,8,400),R(12,13,400)] },{ tipo: "base", rangos: dia ? [R(10,11,300)] : [R(9,10,300)] },{ tipo: "base", rangos: dia ? [R(9,15,67)] : [R(10,18,50)] }];
const air = (a,b,c) => [{ tipo: "clima", rangos: a },{ tipo: "clima", rangos: b },{ tipo: "clima", rangos: c }];
const REF = [...fijos(false), ...air([R(13,16,750),R(21,23,850)],[R(14,17,545),R(21,23,550)],[R(23,7,440),R(14,17,500)])];
const PLAN = [...fijos(true), ...air([R(9,12,700),R(12,15,617)],[R(9,11,550),R(12,15,545)],[R(23,4,470),R(12,15,500)])];
const tarifa = (bolsa) => ({ cu: 936.4, cv: 133.39, bolsa, alumbrado: 0.1, estrato: 3, subsidio: { 1:.407,2:.259,3:.15,4:0 }, contribucion: .2 });
const run = (c, cargas, bolsa = 300) => { const r = M.simular(D, { nS: 0, panelW: 630, dod: .9, conmuta: false, calibrar: true, extras: [], cargasRef: REF, sombra: .03, tarifa: tarifa(bolsa), ...c, cargas }); return (r.tot.antes - r.tot.despues) / 1e6; };
const E = [
  ["Elegido sin inyección", { modo: "cero", nE: 6, nO: 6, eta: .96, idleW: 50, batKWh: 0 }],
  ["Elegido + 5 kWh", { modo: "cero", nE: 6, nO: 6, eta: .96, idleW: 50, batKWh: 5 }],
  ["On-grid 12 (inversor de red)", { modo: "ongrid", nE: 6, nO: 6, eta: 1, idleW: 0, batKWh: 0 }],
  ["On-grid 8 este", { modo: "ongrid", nE: 8, nO: 0, eta: 1, idleW: 0, batKWh: 0 }],
  ["Híbrido con venta 12 + 5 kWh", { modo: "ongrid", nE: 6, nO: 6, eta: .98, idleW: 30, batKWh: 5 }],
];
for (const [n, c] of E) console.log(n.padEnd(30), "hábitos", run(c, REF).toFixed(2), "| plan", run(c, PLAN).toFixed(2), "| plan, bolsa $0:", run(c, PLAN, 0).toFixed(2));
