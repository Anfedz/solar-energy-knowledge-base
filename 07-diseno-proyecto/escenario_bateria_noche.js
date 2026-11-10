// Batería para cubrir la noche con aires 2-3 h c/u + luces + PC. Uso: node 07-diseno-proyecto/escenario_bateria_noche.js
const RAIZ = require("path").join(__dirname, "..");
const M = require(RAIZ + "/08-simulador/motor.js"), base = require(RAIZ + "/08-simulador/datos.json"), HZ = require(RAIZ + "/06-datos/pv_horizonte_estimado.json");
const D = { ...base, pv_este: HZ.este, pv_oeste: HZ.oeste, pv_sur: HZ.sur };
const R = (d, h, w) => ({ desde: d, hasta: h, w });
const fijos = [{ tipo: "base", rangos: [R(0,24,85)] },{ tipo: "base", rangos: [R(0,24,41)] },{ tipo: "base", rangos: [R(0,24,60)] },{ tipo: "base", rangos: [R(18,23,150)] },{ tipo: "base", rangos: [R(9,17,120)] },{ tipo: "base", rangos: [R(19,23,250)] },{ tipo: "base", rangos: [R(7,8,400),R(12,13,400)] },{ tipo: "base", rangos: [R(9,10,300)] },{ tipo: "base", rangos: [R(10,18,50)] }];
const air = (a,b,c) => [{ tipo: "clima", rangos: a },{ tipo: "clima", rangos: b },{ tipo: "clima", rangos: c }];
const REF = [...fijos, ...air([R(13,16,750),R(21,23,850)],[R(14,17,545),R(21,23,550)],[R(23,7,440),R(14,17,500)])];
// Costumbre descrita: cada aire 2-3 h de noche (uso 3 h = caso exigente); de día igual que hoy
const NOCHE3 = [...fijos, ...air([R(13,16,750),R(21,24,850)],[R(14,17,545),R(21,24,600)],[R(23,2,550),R(14,17,500)])];
const NOCHE2 = [...fijos, ...air([R(13,16,750),R(21,23,850)],[R(14,17,545),R(21,23,600)],[R(23,1,580),R(14,17,500)])];
const tarifa = { cu: 936.4, cv: 133.39, bolsa: 300, alumbrado: 0.1, estrato: 3, subsidio: { 1:.407,2:.259,3:.15,4:0 }, contribucion: .2 };
const sis = { modo: "cero", nE: 6, nO: 6, nS: 0, panelW: 630, eta: .96, idleW: 50, dod: .9, conmuta: false, calibrar: true, extras: [], tarifa, cargasRef: REF, sombra: .03 };
for (const [nom, cargas] of [["Aires 3 h de noche c/u", NOCHE3], ["Aires 2 h de noche c/u", NOCHE2]]) {
  // consumo nocturno (18h-7h) en el mes más caluroso y en promedio
  const r0 = M.simular(D, { ...sis, cargas, batKWh: 0 });
  const noche = (m) => m.perfilCarga.reduce((s, v, h) => s + ((h >= 17 || h < 7) ? v : 0), 0);
  const ns = r0.meses.map(noche), prom = ns.reduce((a, b) => a + b) / 12, max = Math.max(...ns), min = Math.min(...ns);
  console.log(`\n## ${nom}: consumo de 5 pm a 7 am → promedio ${prom.toFixed(1)} kWh/noche, mes más caluroso ${max.toFixed(1)}, más fresco ${min.toFixed(1)} | consumo anual ${r0.tot.carga.toFixed(0)} kWh`);
  for (const [b, etiqueta, costo] of [[0, "sin batería", 0], [5.12, "1× Pytes 5,12", 4.30], [8.75, "Felicity 8,75", 6.74], [10.24, "2× Pytes 10,24", 8.59], [10.65, "3× Pylontech US3000C 10,65", 11.97], [15.36, "3× Pytes 15,36", 12.89]]) {
    const r = M.simular(D, { ...sis, cargas, batKWh: b });
    const cubre = r0.tot.carga ? r.tot.bateria / ns.reduce((s, v, i) => s + v * D.facturas[i].dias, 0) * 100 : 0;
    console.log(`${etiqueta.padEnd(28)} útil ${(b * 0.9 * 0.93).toFixed(1).padStart(4)} kWh | cubre ${cubre.toFixed(0).padStart(3)} % de la noche (año) | ahorro ${((r.tot.antes - r.tot.despues) / 1e6).toFixed(2)} M | pagas ${(r.tot.despues / 1e6).toFixed(2)} M | costo bat ${costo.toFixed(2)} M`);
  }
}
