# Costos de sistemas típicos, instalación, O&M y payback (Caribe colombiano)

> Fecha de elaboración: **2026-10-28**. TRM 3.191,47 COP/USD. Precios de equipos: ver `precios-referencia-2025-2026.md`.
> Las cifras marcadas "cálculo propio" son estimaciones de este repositorio a partir de fuentes citadas, **no** datos publicados. El diseño definitivo va en `07-diseno-proyecto`.

## 1. Supuestos comunes

| Supuesto | Valor usado | Fuente / comentario |
|---|---|---|
| Producción específica en Sabanalarga | **1.450 kWh/kWp·año** (PVGIS: 1.463,8 kWh/kWp·año con 10° de inclinación, azimut sur, 14 % de pérdidas) | PVGIS v5.3, base ERA5 2005–2023, lat 10,633 / lon −74,921, consulta API 28-oct-2026: https://re.jrc.ec.europa.eu/api/v5_3/PVcalc?lat=10.633&lon=-74.921&peakpower=1&loss=14&angle=10&aspect=0&outputformat=json — el análisis del recurso está en `01-recurso-solar-y-clima` ⚠️ |
| Tarifa Air-e | **800 COP/kWh** (base) y **950 COP/kWh** (alternativa) | Infobae, 9-ene-2026: Air-e "mantendrá tarifas en 2026… $796 por kWh" https://www.infobae.com/colombia/2026/01/09/aire-e-mantendra-tarifas-de-energia-en-2026-para-atlantico-magdalena-y-la-guajira-esta-en-796-por-kilovatiohora/ ; El Universal, 22-mar-2025: costo unitario 943 COP/kWh https://www.eluniversal.com.co/regional/atlantico/2025/03/22/atencion-no-habra-aumento-en-la-tarifa-de-energia-del-mes-de-abril/ ⚠️ no se encontró el CU de oct-2026; estrato 4 paga el CU, estratos 5–6 +20 %, estratos 1–3 tienen subsidio en el consumo de subsistencia. Verificar con la factura. |
| Valor de la energía generada | **Escenario A**: 90 % de la tarifa (sistema ≤ consumo; excedentes compensados como créditos de energía). **Escenario B**: 60 % autoconsumo a tarifa + 40 % excedentes a 400 COP/kWh | Excedentes valorados ~300–450 COP/kWh según precio de bolsa (Colombia Tramita, 15-oct-2026 https://colombiatramita.co/servicios-publicos/paneles-solares-colombia/). Reglas exactas (CREG 174/2021) en `02-marco-legal-y-regulatorio` ⚠️ |
| Degradación, escalamiento tarifario, impuestos | No incluidos en el payback simple | El payback simple es conservador si la tarifa sube; optimista si se ignora el reemplazo del inversor |

## 2. Estructura de costos de un sistema on-grid residencial

### 2.1 Equipos (cálculo propio, precios de tienda oct-2026, 5 kWp, red 120/240 V)

| Componente | Base | COP |
|---|---|---|
| Módulos: 5.000 Wp × ~840 COP/Wp (N-type Tier 1, mediana) | `modulos-fotovoltaicos.md` | ≈ 4,2 M |
| Inversor string 5–6 kW "fase dividida" | Growatt MIN 6000TL-X2 2,23 M · Livoltek 5 kW 2,88 M | 2,2 – 2,9 M |
| Estructura aluminio (zinc/teja/losa) | Autosolar kits | 0,75 – 1,15 M |
| Protecciones DC/AC + DPS + cable + conectores + canalización + puesta a tierra | `estructuras-cableado-protecciones.md` §4 | 1,4 – 1,7 M |
| **Subtotal equipos** | | **≈ 8,6 – 10,0 M (≈ 1,7 – 2,0 M COP/kWp)** |

Coherente con los **kits on-grid de Autosolar: 1,6 – 2,25 M COP/kWp** (equipos sin instalación, 6 kits, ver `precios-referencia-2025-2026.md` §5).

### 2.2 Costos "blandos" (instalación, ingeniería, trámites, RETIE)
- **No se encontró un desglose publicado** de mano de obra, ingeniería, inspección RETIE ni trámites en Colombia ⚠️ vacío. Los instaladores los incluyen en el precio llave en mano (Solartech: "incluye radicación, medidor bidireccional y puesta en servicio"; NodoSolar: diseño, puesta en marcha y mano de obra tienen un componente fijo que encarece los sistemas pequeños).
- **Estimación por diferencia (cálculo propio)**: llave en mano (2,8 – 4,7 M COP/kWp) − equipos (1,7 – 2,0 M COP/kWp) ⇒ **≈ 1,1 – 2,7 M COP/kWp** para mano de obra, diseño y memorias firmadas, inspección RETIE, trámite AGPE con Air-e, medidor bidireccional, transporte, imprevistos y margen. En un sistema de 5 kWp: ≈ 5,5 – 13,5 M COP.
- Datos puntuales:
  - Medidor bidireccional: 200.000 – 800.000 COP según operador (Vexta, oct-2026); ISKRA MT-174 trifásico 1,44 M (Autosolar).
  - Dictamen de inspección RETIE: obligatorio (Air-e lo exige para la visita de conexión); **sin tarifa pública encontrada** ⚠️ — cotizar con organismos de inspección acreditados por ONAC. CIDET describe el proceso (visita, informe de no conformidades, dictamen) https://content.voltimum.com/co/727/boletin02.pdf.
  - Instalación en sitio: 1–3 días (Vexta). Trámite de conexión: 30–90 días según operador (Vexta); Air-e tiene plazos de revisión de 2–10 días hábiles por etapa (cartilla Air-e https://www.air-e.com/assets/documents/autogeneracion/cartilla_de_informacion.pdf), pero en 2025 acumulaba 1.989 solicitudes (El Universal, 22-mar-2025).
  - Solartech: el panel representa solo **25–35 %** del costo total llave en mano.
  - Referencia argentina descartada: un artículo de iProfesional (23-oct-2026) con "kits on-grid de 3 kW por $2.577.929" es de **Argentina (pesos argentinos)**, no de Colombia — no usar.

## 3. Benchmarks de sistemas típicos (Sabanalarga, oct-2026)

### 3.1 On-grid (sin baterías)

| Sistema | Costo llave en mano (rango fuentes) | Central usado | Producción anual (1.450 kWh/kWp) | Ahorro anual Esc. A / B (tarifa 800) | **Payback simple** (bajo/central/alto costo) Esc. A · B, tarifa 800 | Ídem con tarifa 950 |
|---|---|---|---|---|---|---|
| **3 kWp** | 8,4 M (Vexta 2,8 M/kWp) – 16 M (Solartech/Mundo SOS) | 12 M | 4.350 kWh | 3,13 M / 2,78 M | 2,7 / 3,8 / 5,1 años · 3,0 / 4,3 / 5,7 | 2,3 / 3,2 / 4,3 · 2,6 / 3,8 / 5,0 |
| **5 kWp** | 14 M (Vexta) – 25 M (Solartech, Integración Solar) | 19 M | 7.250 kWh | 5,22 M / 4,64 M | 2,7 / 3,6 / 4,8 · 3,0 / 4,1 / 5,4 | 2,3 / 3,1 / 4,0 · 2,6 / 3,6 / 4,7 |
| **10 kWp** | 28 M (Vexta) – 45 M (Solartech; NodoSolar ~42 M) | 35 M | 14.500 kWh | 10,44 M / 9,28 M | 2,7 / 3,4 / 4,3 · 3,0 / 3,8 / 4,8 | 2,3 / 2,8 / 3,6 · 2,6 / 3,3 / 4,3 |

Fuentes de costo: Vexta https://www.vextaenergy.com/blog/costos-paneles-solares-colombia.html ; Solartech https://solartech.com.co/precios-paneles-solares-colombia/ ; NodoSolar https://www.nodosolar.co/precios ; Integración Solar https://integracionsolar.co/cuanto-cuesta-instalar-paneles-solares-en-colombia-en-2026/ ; Mundo SOS https://mundosos.com/cuanto-cuesta-instalar-paneles-solares-colombia/ (todas 2026). Payback = cálculo propio.

**Lectura**: en el Caribe, con tarifas de 800–950 COP/kWh y ~1.450 kWh/kWp·año, un on-grid bien dimensionado se paga en **~3–5 años** (payback simple). Esto coincide con lo reportado para la costa (≈3 años) — ver §5.

### 3.2 Híbrido 5 kW + 10 kWh (respaldo)

| Ruta | Composición (cálculo propio con precios de tienda) | Costo llave en mano estimado |
|---|---|---|
| **48 V "económica"** | 5 kWp módulos (~4,2 M) + híbrido split-phase 5–8 kW 48 V (Deye SG01LP1-US/Must/Powest/Growatt: ~4–11,5 M) + 10 kWh LFP 48 V (Felicity 10 kWh 9,3 M; 2 × Pytes 5,12 kWh 10,2 M; Felicity 16 kWh 10,8 M) + estructura (~1 M) + BOS DC/AC/batería (~2–2,5 M) + costos blandos (~6–10 M) | **≈ 26 – 35 M COP** ⚠️ |
| **Alta tensión de marca** (Huawei SUN2000-LC0 + 2 × LUNA2000, o similar) | On-grid 5 kWp (~16,5 M) + sobrecosto inversor híbrido (+3–8 M, Vexta) + 2 × batería de 5 kWh (+8–14 M c/u, Vexta) | **≈ 37 – 50 M COP** ⚠️ |
| Regla de mercado | Solartech: híbrido = on-grid × 1,4–1,8 → 5 kWp: 20 – 45 M; Mundo SOS: baterías +30–50 % | — |

Referencias de kits de equipos (sin instalación, Autosolar): Growatt híbrido 3 kW + 6,1 kWp + 7,2 kWh Pylontech = **22,9 M**; Deye 10 kW trifásico + 9,92 kWp + 8,75 kWh Felicity = **32,6 M**.

**Payback del híbrido**: el ahorro en factura es prácticamente el mismo que el del on-grid de igual kWp (la batería no produce energía). Con costo 26–50 M y ahorro de 4,6–6,2 M/año ⇒ **4,2 – 10,8 años** (cálculo propio). El **incremento** por baterías + inversor híbrido (≈12–25 M) solo se recupera por la diferencia entre autoconsumir y exportar: desplazando ~8 kWh/día útiles (≈2.630 kWh/año con 90 % de eficiencia) y valorando la diferencia en 400–550 COP/kWh ⇒ 1,05–1,45 M/año ⇒ **payback incremental 8–24 años**, comparable o superior a la vida útil de la batería (≥6.000 ciclos ≈ 15+ años teóricos a 25 °C, menos con calor). **La batería se justifica por respaldo ante cortes, no por ahorro**, salvo que cambie la remuneración de excedentes o haya incentivos.

### 3.3 Off-grid (aislado)
- Kit Autosolar aislado: 6 × 710 W (4,26 kWp) + Growatt SPF 6000T DVM-MPV + Felicity 16 kWh + estructura y material eléctrico = **21,18 M COP** sin instalación (https://autosolar.co/kits-solares-aislada/kit-aislado-14910whdia-6000w-48v-growatt); kits Victron/PHVolt de 3–5 kW: **14 – 28 M COP** (categoría https://autosolar.co/kits-solares-aislada, 28-oct-2026).
- Llave en mano estimado (cálculo propio, kit + 4–8 M de instalación/ingeniería/RETIE): **≈ 25 – 36 M COP** para ~15–20 kWh/día ⚠️.
- Kits pequeños para cargas básicas: Homecenter Sylvania off-grid 5 kWh/día litio 6,7 M; MAGOM 800 Wh/día 5,5 M (precios internet, 28-oct-2026).
- Con red de Air-e disponible en Sabanalarga, el off-grid total **no es competitivo** frente a on-grid o híbrido; solo para fincas sin red o como respaldo aislado de cargas críticas.

### 3.4 Programa Colombia Solar (referencia de costo público)
4,2 billones COP para >563.000 usuarios en el Caribe ⇒ ≈ 7,46 M COP por beneficiario con kits de ~1,5 kW (incluye estructuración, interventoría y O&M hasta 25 años) — cálculo propio con Valora Analitik (29-dic-2025) https://www.valoraanalitik.com/gobierno-42-billones-caribe-solares/ ⚠️.

## 4. Operación y mantenimiento (O&M)

| Ítem | Referencia | Fuente |
|---|---|---|
| O&M residencial (benchmark EE. UU.) | 28,94 USD/kWdc·año ≈ **92.000 COP/kWp·año** (≈ 0,46 M COP/año para 5 kWp) — probablemente menor en Colombia por mano de obra ⚠️ | NREL PV O&M benchmark 2020 (https://nrel.gov/docs/fy20osti/77808.pdf, vía búsqueda; no descargado) |
| Limpieza de módulos | **Sin precio público en Colombia** ⚠️. Referencia España: ~8 €/panel (Habitissimo). Estudio Javeriana (Bogotá): pérdidas de 10–30 % por polvo en paneles sin limpiar | https://www.habitissimo.es/presupuestos/reparar-placas-solares ; https://vitela.javerianacali.edu.co/items/094b3dfc-d10b-43c7-b6cd-2454e211c3a9/full |
| Reemplazo de inversor (año ~10–12) | 2,2 – 3,9 M COP (string 6–10 kW a precios oct-2026) — cálculo propio | `inversores.md` |
| Garantía inversor | Deye US: 5 años (hasta 10 según país); Growatt MIN X2: 2 años en la ficha de Autosolar ⚠️ | fichas citadas en `inversores.md` |
| Monitoreo | Incluido con dongle Wi-Fi (Growatt Shine, Solarman, FusionSolar) | kits Autosolar |
| Programa Colombia Solar | Contempla O&M hasta por 25 años | El Heraldo, 19-mar-2026 |

Recomendación de presupuesto O&M (cálculo propio): **≈ 0,5–1,0 % del CAPEX/año** + fondo para reemplazo de inversor a mitad de vida; limpieza 2–4 veces/año (temporada seca con polvo y época de quemas) ⚠️ frecuencia por validar con datos locales de ensuciamiento.

## 5. Casos de estudio y payback reportados en el Caribe

| Caso / fuente | Ubicación | Datos | Fecha |
|---|---|---|---|
| Estudio Emergente Energía Sostenible + Universidad Nacional (citado por El Colombiano) | Santa Marta, **Barranquilla**, Riohacha | Payback **≈ 3 años**; TIR **hasta 59 %** en ciudades costeras (alta radiación y tarifas altas); ciudades andinas TIR >20 % | 12-jul-2026 — https://www.elcolombiano.com/negocios/paneles-solares-colombia-cuanto-cuestan-ahorro-como-instalar-IK38760910 (estudio original no encontrado ⚠️) |
| Vexta Energy, ejemplo 4 kWp | Barranquilla | Costo ≈ 13,2 M COP; ahorro ≈ 3,84 M/año (factura de 400.000 COP/mes reducida 80 %); payback ≈ 3,4 años (≈3 con Ley 1715); >110 M de ahorro en 25 años con alzas de 5–8 %/año | oct-2026 — https://www.vextaenergy.com/blog/costos-paneles-solares-colombia.html (cifras del vendedor) |
| Grupo Brilla (Promigas) | Barranquilla | Sistema de 5 M COP financiado a 3–4 años en la factura; ahorro estimado 40–45 % | 8-mar-2024 — https://www.noticiascaracol.com/colombia/con-paneles-solares-ciudadanos-de-barranquilla-han-logrado-ahorrar-energia-en-sus-hogares-so35 |
| Mundo SOS (nacional) | Colombia | Residencial 4–6 años; comercial 3–5 años (asume alza tarifaria ~10 %/año) | 2026 |
| Colombia Tramita (nacional) | Colombia | 3 kWp: 5–8 años; 6 kWp: 4–7 años | 15-oct-2026 |
| Integración Solar | Medellín | Residencial 5–7 años | 17-ago-2026 |
| Canchas solares Barranquilla (MinEnergía) | Barranquilla | 519 paneles, 313,6 kWp, ~470.000 kWh/año, inversión 4.894 M COP (incluye obras de canchas; **no comparable** con residencial) | MinEnergía https://www.minenergia.gov.co/es/sala-de-prensa/noticias-index/gobierno-invierte-4894-millones-en-canchas-solares-en-barranquilla-para-bajar-costos-de-energia-200-familias/ (vía búsqueda ⚠️) |

Nota: 470.000 kWh / 313,6 kWp ≈ 1.500 kWh/kWp·año, consistente con el supuesto de 1.450 kWh/kWp·año de PVGIS para Sabanalarga.

## 6. Conclusiones para el propietario
1. **On-grid** de 3–10 kWp: presupuesto **2,8 – 4,7 M COP/kWp** llave en mano; payback simple **~3–5 años** con tarifas de 800–950 COP/kWh.
2. **Híbrido 5 kW + 10 kWh**: **≈26–35 M COP** (48 V) o **37–50 M** (alta tensión de marca); la batería es un seguro contra cortes, con payback incremental de 8–24 años.
3. **Off-grid**: ~25–36 M COP para una casa mediana; no recomendable si hay red.
4. Los costos blandos (instalación, RETIE, trámites, margen) pesan **35–55 %** del total; ahí está la mayor dispersión entre ofertas.
5. Pedir ≥3 cotizaciones desglosadas y validar la producción con el estudio de recurso (`01-recurso-solar-y-clima`) y la tarifa real de la factura.

## 7. Vacíos y supuestos críticos
- Tarifa vigente de Air-e (oct-2026) por estrato y valor regulado de excedentes ⚠️.
- Precio del dictamen RETIE y de la mano de obra por separado ⚠️.
- Precio local de limpieza/O&M ⚠️.
- Estudio Emergente/UNAL original no localizado ⚠️.
