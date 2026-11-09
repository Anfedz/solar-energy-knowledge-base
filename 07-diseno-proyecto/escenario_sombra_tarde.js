// Escenario: sombra de árboles en la tarde (sistema elegido). Uso: node 07-diseno-proyecto/escenario_sombra_tarde.js
const P = require("path").join(__dirname, "..", "08-simulador") + "/";
const M = require(P + "motor.js"), D = require(P + "datos.json");
const R = (d, h, w) => ({ desde: d, hasta: h, w });
const fijos = (dia) => [{ tipo: "base", rangos: [R(0,24,85)] },{ tipo: "base", rangos: [R(0,24,41)] },{ tipo: "base", rangos: [R(0,24,60)] },{ tipo: "base", rangos: [R(18,23,150)] },{ tipo: "base", rangos: [R(9,17,120)] },{ tipo: "base", rangos: [R(19,23,250)] },
 { tipo: "base", rangos: dia ? [R(9,10,400),R(12,13,400)] : [R(7,8,400),R(12,13,400)] },{ tipo: "base", rangos: dia ? [R(10,11,300)] : [R(9,10,300)] },{ tipo: "base", rangos: dia ? [R(9,15,67)] : [R(10,18,50)] }];
const air = (a,b,c) => [{ tipo: "clima", rangos: a },{ tipo: "clima", rangos: b },{ tipo: "clima", rangos: c }];
const REF = [...fijos(false), ...air([R(13,16,750),R(21,23,850)],[R(14,17,545),R(21,23,550)],[R(23,7,440),R(14,17,500)])];
const PLAN = [...fijos(true), ...air([R(9,12,700),R(12,15,617)],[R(9,11,550),R(12,15,545)],[R(23,4,470),R(12,15,500)])];
const tarifa = { cu: 936.4, cv: 133.39, bolsa: 300, alumbrado: 0.1, estrato: 3, subsidio: { 1:.407,2:.259,3:.15,4:0 }, contribucion: .2 };
const sis = { modo: "cero", nE: 6, nO: 6, panelW: 630, eta: .96, idleW: 50, dod: .9, conmuta: false, calibrar: true, extras: [], tarifa, cargasRef: REF };
const desde = (h0, f = 0.25) => Array.from({ length: 24 }, (_, h) => (h >= h0 ? f : 1));
const ESC = [["Sin sombra de árboles", 0, null], ["10 % pareja (supuesto anterior)", .10, null], ["Sombra desde 4 pm (solo difusa 25 %)", .03, desde(16)], ["Sombra desde 3 pm", .03, desde(15)], ["Sombra desde 2 pm", .03, desde(14)]];
for (const [hab, cargas] of [["Hábitos actuales", REF], ["Plan 9-15 + Aire 3 5 h", PLAN]]) {
  console.log("\n## " + hab);
  for (const [nom, sombra, sh] of ESC) {
    const c = []; let prod;
    for (const bat of [0, 5]) { const r = M.simular(D, { ...sis, cargas, sombra, sombraHoras: sh, batKWh: bat }); if (bat === 0) prod = r.tot.pv; c.push(`bat${bat}: ${((r.tot.antes - r.tot.despues) / 1e6).toFixed(2)} M`); }
    console.log(nom.padEnd(38), `prod ${prod.toFixed(0)} kWh |`, c.join(" | "));
  }
}
// sol a las 4:10 pm en noviembre
const RAD = Math.PI / 180, LAT = 10.63 * RAD;
for (const [mes, dia] of [["nov", 313], ["dic", 344], ["mar", 75], ["jun", 162]]) for (const hora of [15, 16 + 10/60]) {
  const B = (360/365)*(dia-81)*RAD, eot = 9.87*Math.sin(2*B)-7.53*Math.cos(B)-1.5*Math.sin(B), ts = hora + (4*0.08+eot)/60;
  const dec = 23.45*Math.sin((360/365)*(284+dia)*RAD)*RAD, H = 15*(ts-12)*RAD;
  const alt = Math.asin(Math.sin(LAT)*Math.sin(dec)+Math.cos(LAT)*Math.cos(dec)*Math.cos(H));
  const az = (Math.atan2(Math.sin(H), Math.cos(H)*Math.sin(LAT)-Math.tan(dec)*Math.cos(LAT))/RAD+180+360)%360;
  console.log(`${mes} ${hora.toFixed(2)}h: altura ${(alt/RAD).toFixed(0)}°, azimut ${az.toFixed(0)}° | un árbol de 12 m a 8 m del alero (techo ~3,5 m) da sombra hasta ${((12-3.5)/Math.tan(alt)).toFixed(1)} m`);
}
