// Escenario: orientación de los 12 paneles (este/oeste, este, sur con estructura). Uso: node 07-diseno-proyecto/escenario_orientacion.js
const P = require("path").join(__dirname, "..", "08-simulador") + "/";
const M = require(P + "motor.js"), D = require(P + "datos.json");
const R = (d, h, w) => ({ desde: d, hasta: h, w });
const fijos = (dia) => [
  { tipo: "base", rangos: [R(0, 24, 85)] }, { tipo: "base", rangos: [R(0, 24, 41)] }, { tipo: "base", rangos: [R(0, 24, 60)] },
  { tipo: "base", rangos: [R(18, 23, 150)] }, { tipo: "base", rangos: [R(9, 17, 120)] }, { tipo: "base", rangos: [R(19, 23, 250)] },
  { tipo: "base", rangos: dia ? [R(9, 10, 400), R(12, 13, 400)] : [R(7, 8, 400), R(12, 13, 400)] },
  { tipo: "base", rangos: dia ? [R(10, 11, 300)] : [R(9, 10, 300)] },
  { tipo: "base", rangos: dia ? [R(9, 15, 67)] : [R(10, 18, 50)] },
];
const air = (a1, a2, a3) => [{ tipo: "clima", rangos: a1 }, { tipo: "clima", rangos: a2 }, { tipo: "clima", rangos: a3 }];
const REF = [...fijos(false), ...air([R(13, 16, 750), R(21, 23, 850)], [R(14, 17, 545), R(21, 23, 550)], [R(23, 7, 440), R(14, 17, 500)])];
const PLAN = [...fijos(true), ...air([R(9, 12, 700), R(12, 15, 617)], [R(9, 11, 550), R(12, 15, 545)], [R(23, 4, 470), R(12, 15, 500)])];
const tarifa = { cu: 936.4, cv: 133.39, bolsa: 300, alumbrado: 0.1, estrato: 3, subsidio: { 1: .407, 2: .259, 3: .15, 4: 0 }, contribucion: .2 };
const sis = { modo: "cero", panelW: 630, sombra: .10, eta: .96, idleW: 50, dod: .9, conmuta: false, calibrar: true, extras: [], tarifa, cargasRef: REF };
const CONF = [["6 este + 6 oeste (techo)", 6, 6, 0], ["12 este (techo)", 12, 0, 0], ["12 sur 10° (estructura)", 0, 0, 12], ["12 oeste (techo)", 0, 12, 0], ["6 este + 6 sur", 6, 0, 6]];
const out = {};
for (const [hab, cargas] of [["Hábitos actuales", REF], ["Plan 9-15 + Aire 3 5 h", PLAN]]) {
  console.log("\n## " + hab);
  for (const [nom, nE, nO, nS] of CONF) {
    const cols = [];
    for (const bat of [0, 5, 10]) {
      const r = M.simular(D, { ...sis, cargas, nE, nO, nS, batKWh: bat });
      cols.push(`bat${bat}: ${((r.tot.antes - r.tot.despues) / 1e6).toFixed(2)}`);
      if (bat === 0) cols.unshift(`prod ${r.tot.pv.toFixed(0)} | usada ${(r.tot.pv - r.tot.desperdicio).toFixed(0)} | desperd ${r.tot.desperdicio.toFixed(0)}`);
      if (bat === 0 && hab === "Hábitos actuales") out[nom] = r;
    }
    console.log(nom.padEnd(28), cols.join(" | "));
  }
}
// curva de un día promedio anual (kW) por configuración, y meses con sol al norte
console.log("\nCurva promedio anual (kW) 6h..18h:");
for (const [nom] of CONF) {
  const r = out[nom], c = new Array(24).fill(0);
  r.meses.forEach(m => m.perfilPV.forEach((v, h) => c[h] += v / 12));
  console.log(nom.padEnd(28), c.slice(6, 19).map(v => v.toFixed(1)).join(" "));
}
for (const nom of ["6 este + 6 oeste (techo)", "12 sur 10° (estructura)", "12 este (techo)"]) {
  console.log(nom.padEnd(28), "prod por factura:", out[nom].meses.map(m => m.mes.slice(2) + ":" + m.pv.toFixed(0)).join(" "));
}
