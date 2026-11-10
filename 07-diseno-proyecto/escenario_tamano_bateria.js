// Tamaño de batería óptimo (sistema elegido, con horizonte de árboles). Uso: node 07-diseno-proyecto/escenario_tamano_bateria.js
const RAIZ = require("path").join(__dirname, "..");
const M = require(RAIZ + "/08-simulador/motor.js"), base = require(RAIZ + "/08-simulador/datos.json"), HZ = require(RAIZ + "/06-datos/pv_horizonte_estimado.json");
const D = { ...base, pv_este: HZ.este, pv_oeste: HZ.oeste, pv_sur: HZ.sur };
const R = (d, h, w) => ({ desde: d, hasta: h, w });
const fijos = (dia) => [{ tipo: "base", rangos: [R(0,24,85)] },{ tipo: "base", rangos: [R(0,24,41)] },{ tipo: "base", rangos: [R(0,24,60)] },{ tipo: "base", rangos: [R(18,23,150)] },{ tipo: "base", rangos: [R(9,17,120)] },{ tipo: "base", rangos: [R(19,23,250)] },
 { tipo: "base", rangos: dia ? [R(9,10,400),R(12,13,400)] : [R(7,8,400),R(12,13,400)] },{ tipo: "base", rangos: dia ? [R(10,11,300)] : [R(9,10,300)] },{ tipo: "base", rangos: dia ? [R(9,15,67)] : [R(10,18,50)] }];
const air = (a,b,c) => [{ tipo: "clima", rangos: a },{ tipo: "clima", rangos: b },{ tipo: "clima", rangos: c }];
const REF = [...fijos(false), ...air([R(13,16,750),R(21,23,850)],[R(14,17,545),R(21,23,550)],[R(23,7,440),R(14,17,500)])];
const PLAN = [...fijos(true), ...air([R(9,12,700),R(12,15,617)],[R(9,11,550),R(12,15,545)],[R(23,4,470),R(12,15,500)])];
const tarifa = { cu: 936.4, cv: 133.39, bolsa: 300, alumbrado: 0.1, estrato: 3, subsidio: { 1:.407,2:.259,3:.15,4:0 }, contribucion: .2 };
const sis = { modo: "cero", nE: 6, nO: 6, nS: 0, panelW: 630, eta: .96, idleW: 50, dod: .9, conmuta: false, calibrar: true, extras: [], tarifa, cargasRef: REF, sombra: .03 };
const COSTO = (k) => k === 0 ? 0 : k * 960000 + 300000; // equipo ~0,96 M/kWh + instalación
for (const [hab, cargas] of [["Plan 9-15 + Aire 3 5 h", PLAN], ["Hábitos actuales", REF]]) {
  console.log(`\n## ${hab}`);
  let prev = null;
  for (const k of [0, 2.5, 5, 7.5, 10, 12.5, 15]) {
    const r = M.simular(D, { ...sis, cargas, batKWh: k }), ah = (r.tot.antes - r.tot.despues) / 1e6;
    const marg = prev ? `marginal +${((ah - prev.ah) * 1000).toFixed(0)} mil/año por +${((COSTO(k) - COSTO(prev.k)) / 1e6).toFixed(1)} M` : "";
    console.log(`bat ${String(k).padEnd(4)} ahorro ${ah.toFixed(2)} M | pagas ${(r.tot.despues/1e6).toFixed(2)} M | desperdicio ${r.tot.desperdicio.toFixed(0)} kWh | batería entrega ${r.tot.bateria.toFixed(0)} kWh/año (${(r.tot.bateria/365).toFixed(1)}/día) | costo ${(COSTO(k)/1e6).toFixed(1)} M | payback batería ${k ? (COSTO(k)/1e6/(ah - base0)).toFixed(1) + " años" : "-"} | ${marg}`);
    if (!k) var base0 = ah;
    prev = { k, ah };
  }
}
