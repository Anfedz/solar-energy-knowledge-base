# Baterías para sistemas híbridos y aislados (Colombia, 2026)

> Fecha de consulta: **2026-10-28**. TRM 3.191,47 COP/USD.
> **IVA**: a diferencia de módulos e inversores, las baterías **se venden con IVA del 19 %** en las tiendas consultadas (Autosolar muestra precio final y "Sin IVA"; Solartex `ivaRate 0.19`). Los precios de abajo son **con IVA**. ⚠️ Si el proyecto accede a la exclusión de IVA por certificación UPME (Ley 1715), el precio podría bajar ~16 %; ver `02-marco-legal-y-regulatorio`.

## 1. Referencias globales
- BloombergNEF (9-dic-2025): paquete Li-ion promedio **USD 108/kWh**; **almacenamiento estacionario USD 70/kWh (≈ 223.000 COP/kWh)**; LFP USD 81/kWh — https://about.bnef.com/insights/clean-energy/lithium-ion-battery-pack-prices-fall-to-108-per-kilowatt-hour-despite-rising-metal-prices-bloombergnef/
- IRENA (jul-2026): baterías a escala de servicios de 4 h ≈ **USD 140/kWh instalado** en 2025 (≈ 447.000 COP/kWh) — https://www.irena.org/-/media/Files/IRENA/Agency/Publication/2026/Jul/IRENA_TEC_RPGC_in_2025_2026.pdf
- En Colombia, el precio al público de baterías LFP de 48 V está en **0,68 – 1,34 M COP/kWh** (3–6× el mayorista global) y los sistemas de alta tensión de marca (Huawei LUNA2000) en **1,6 – 2,0 M COP/kWh**.

## 2. Tecnologías

| Tecnología | Uso típico | Profundidad de descarga útil | Ciclos (fabricante) | Comentario |
|---|---|---|---|---|
| **LiFePO4 48 V (51,2 V) "baja tensión" en rack/pared** (Pylontech, Felicity, Pytes, BSLBatt, Deye SE-G, Dyness, Must) | Híbridos Deye/Growatt SPF/Must/Victron | 80–95 % | ≥6.000 ciclos (Pylontech US2000C: >6.000 a 25 °C; Felicity 10 kWh: ~6.000; Deye SE-G5.1 Pro: ~6.000 al 90 % DoD) | Estándar de facto en Colombia; comunicación CAN/RS485 con el inversor |
| **LiFePO4 alta tensión** (Huawei LUNA2000, BYD HVS, Felicity FLH, Livoltek BHF) | Híbridos de alta tensión (Huawei SUN2000-LC0, Growatt SPH) | ~100 % (LUNA2000 según revendedor) | ⚠️ no publicado en las fuentes consultadas | Más caras por kWh; requieren módulo de control (LUNA2000-5-C0) |
| **Plomo-ácido gel / AGM** | Off-grid pequeño, respaldo económico | ~50 % para buena vida | Pocos cientos a ~1.500 ciclos según DoD ⚠️ (ver ficha) | Barata por kWh nominal pero cara por kWh útil y muy sensible al calor |
| **OPzV (plomo-gel tubular 2 V)** | Off-grid de larga vida | 50–60 % | Mayor que gel plano ⚠️ | Pesada; precio alto por kWh |

Fuentes de ciclos: Autosolar ficha Pylontech US2000C (">6000, 25 ℃", 0–50 °C) https://autosolar.co/baterias-de-litio-48v/bateria-litio-pylontech-us2000c-48v-24kwh ; Felicity 10 kWh https://autosolar.co/baterias-de-litio/bateria-litio-felicity-solar-10kwh-512v-200a-lpbf48200-h ; Deye SE-G5.1 Pro (5,12 kWh, 51,2 V, 10 años de garantía, ~6.000 ciclos al 90 % DoD) https://sun.store/en/product/deye-se-g5.1-pro-9698 y ficha LATAM https://deye.com/product/se-g5-1/

## 3. Precios en Colombia (con IVA, consulta 2026-10-28)

### 3.1 LiFePO4 48–51,2 V

| Batería | kWh nominal | Precio COP | **COP/kWh** | Tienda | URL |
|---|---|---|---|---|---|
| Felicity FLA48314-EU 51,2 V 314 Ah | 16 | 10.818.231 | **676.000** | Autosolar | https://autosolar.co/baterias-de-litio/bateria-litio-felicity-solar-16kwh-512v-314a-fla48314-eu |
| Felicity FLA48230-EU 51,2 V | 11,8 | 8.870.915 | 752.000 | Autosolar | https://autosolar.co/baterias-de-litio/bateria-litio-felicity-solar-118kwh-512v-fla48230-eu |
| Felicity FLA48171-EU 48 V | 8,75 | 6.743.314 | 771.000 | Autosolar | https://autosolar.co/baterias-de-litio-48v/bateria-litio-felicity-solar-875kwh-48v-171a-fla48171-eu |
| Felicity FLA48300 51,2 V | 15 | 11.708.064 | 781.000 | Autosolar | https://autosolar.co/baterias-de-litio/bateria-litio-felicity-solar-15kwh-512v-300a-fla48300 |
| Felicity FLA48500 51,2 V 500 Ah | 25,6 | 20.081.250 | 784.000 | Solartex | https://solartex.co/tienda/producto/bateria-de-litio-51-2v-500ah-fla48500-felicity |
| Felicity FLA48500 (Autosolar, 25 kWh) | 25 | 21.618.334 | 865.000 | Autosolar | https://autosolar.co/baterias-de-litio/bateria-litio-felicity-solar-25kwh-512v-500a-fla48500 |
| Felicity FLA48250 | 12,5 | 10.908.334 | 873.000 | Autosolar | https://autosolar.co/baterias-de-litio/bateria-litio-felicity-solar-125kwh-512v-250a-fla48250 |
| Felicity LPBF48200-H 51,2 V 200 Ah | 10 | 9.321.666 (sin IVA 7.833.333) | 932.000 | Autosolar | https://autosolar.co/baterias-de-litio/bateria-litio-felicity-solar-10kwh-512v-200a-lpbf48200-h |
| Felicity FLA48100-EU 51,2 V 100 Ah | 5,12 | 4.868.231 / 4.980.269 | 951.000 / 973.000 | Autosolar / Solartex | https://autosolar.co/baterias-de-litio/bateria-litio-felicity-solar-512kwh-512v-100a-fla48100-eu |
| BSLBatt B-LFP48-100E 3U | 4,8 | 4.723.229 | 984.000 | Solartex | https://solartex.co/tienda/producto/bateria-de-litio-3u-48v-100ah-b-lfp48-100e-bslbatt |
| Pytes E-BOX-48100R 51,2 V 100 Ah | 5,12 | 5.113.430 | 999.000 | Solartex | https://solartex.co/tienda/producto/bateria-de-litio-e-box-48100r-51-2v-100ah-pytes |
| Pylontech US2000C 48 V | 2,4 | 2.403.800 (dcto. 19 %; sin IVA 2.020.000) | 1.002.000 | Autosolar | https://autosolar.co/baterias-de-litio-48v/bateria-litio-pylontech-us2000c-48v-24kwh |
| Tensite TS-L5000/LV 48 V | 4,8 | 5.052.690 | 1.053.000 | Autosolar | https://autosolar.co/baterias-de-litio-48v/bateria-litio-48kwh-48v-ts-l5000lv-tensite |
| Rack 100 Ah 51,2 V (marca no indicada) | ~5,12 | 5.402.200 | ~1.055.000 | Integración Solar (17-ago-2026) | https://integracionsolar.co/cuanto-cuesta-instalar-paneles-solares-en-colombia-en-2026/ |
| Pylontech US2000C 51,2 V 50 Ah | 2,4 | 2.932.160 | 1.222.000 | Solartex | https://solartex.co/tienda/producto/bateria-de-litio-us2000c-51-2v-50ah-pylontech |
| Pylontech US3000C 51,2 V 74 Ah | 3,55 | 4.750.004 | 1.338.000 | Solartex | https://solartex.co/tienda/producto/bateria-de-litio-us3000c-51-2v-74ah-pylontech |

### 3.2 LiFePO4 alta tensión / marcas premium

| Batería | kWh | Precio COP | COP/kWh | Tienda | URL |
|---|---|---|---|---|---|
| Huawei LUNA2000-5-E0 (módulo; requiere módulo de control LUNA2000-5-C0, no incluido ⚠️) | 5 | 9.028.054 | 1.806.000 | Solartex | https://solartex.co/tienda/producto/modulo-de-bateria-de-litio-5kw-luna2000-5-e0-huawei |
| Huawei batería de litio 5 kW (LUNA2000) | 5 | 8.168.900 (internet; normal 8.874.900) | 1.634.000 | Homecenter | https://www.homecenter.com.co/homecenter-co/product/758845 |
| Livoltek BLF51-5 51,2 V 100 Ah | 5,12 | 10.097.626 | 1.972.000 | Solartex | https://solartex.co/tienda/producto/bateria-de-litio-51-2v-100ah-blf51-5-livoltek |
| Felicity FLH48100UG1 alta tensión | 5,12 | 4.027.692 | 787.000 | Autosolar | https://autosolar.co/baterias-de-litio/bateria-de-litio-felicity-512kwh-100ah-flh48100ug1-alto-voltaje |

Vexta Energy (Barranquilla) indica que una batería de 5 kWh tipo Huawei LUNA2000 o BYD HVS añade **8–14 M COP** a un sistema (≈1,6–2,8 M COP/kWh instalada) — https://www.vextaenergy.com/blog/costos-paneles-solares-colombia.html (oct-2026).

Sin precio público en COP encontrado para: **BYD HVS/HVM, Deye SE-G5.1 Pro, Dyness, Must (48 V rack)** ⚠️ vacío. Referencia externa Deye SE-G5.1 Pro: 829 € (Leroy Merlin Portugal, promoción vencida) — https://www.leroymerlin.pt/produtos/bateria-deye-48v-se-g5-1-pro-b-5-1kwh-89341219.html

### 3.3 Plomo-ácido (gel / AGM / OPzV)

| Batería | kWh nominal | Precio COP | COP/kWh nominal | COP/kWh útil (50 % DoD) | Tienda | URL |
|---|---|---|---|---|---|---|
| Gel Tensite 6 V 600 Ah | 3,6 | 1.188.930 | 330.000 | 661.000 | Autosolar | https://autosolar.co/baterias-gel-6v/bateria-gel-6v-600ah-tensite |
| Gel Tensite 12 V 300 Ah | 3,6 | 1.515.941 | 421.000 | 842.000 | Autosolar | https://autosolar.co/baterias-gel-12v/bateria-gel-12v-300ah-tensite |
| Gel Tensite 12 V 100 Ah | 1,2 | 615.409 | 513.000 | 1.026.000 | Autosolar | https://autosolar.co/baterias-gel-12v/bateria-gel-12v-100ah-tensite |
| Gel Maxpower MP200-12 12 V 200 Ah | 2,4 | 1.306.025 | 544.000 | 1.088.000 | Solartex | https://solartex.co/tienda/producto/bateria-de-gel-12v-200ah-mp200-12-maxpower |
| AGM Kaise KBL122000 12 V 200 Ah | 2,4 | 1.606.500 | 669.000 | 1.339.000 | Solartex | https://solartex.co/tienda/producto/bateria-agm-12v-200ah-kbl122000-kaise |
| OPzV Tensite 2 V 1.110 Ah (C100) | 2,22 | 3.371.666 | 1.519.000 | 3.038.000 | Autosolar | https://autosolar.co/baterias-estacionarias-opzv-2v/bateria-estacionaria-opzv-2v-1110ah-c100-tensite |

**Conclusión de precio**: por kWh **útil**, el gel (0,66–1,1 M COP) ya no es más barato que el LiFePO4 48 V (0,68–1,0 M COP por kWh nominal, con 80–95 % utilizable) y dura muchos menos ciclos, sobre todo con calor. Para Sabanalarga, **LiFePO4 es la opción por defecto**; el plomo sólo tiene sentido para respaldos muy pequeños y de uso esporádico.

## 4. Comportamiento a alta temperatura (relevante en Sabanalarga)
- **LiFePO4**: Pylontech US2000C opera 0–50 °C (ficha en Autosolar); Pylontech US5000 carga 0–50/55 °C según revendedores (https://www.solartraders.com/en/products/batteries/pylontech-us5000-4-8-kwh ⚠️); Huawei LUNA2000-5-E0 −10 a +55 °C (revendedores, p. ej. https://www.solartraders.com/es/products/acumulador/modulos-de-acumulacion/huawei-luna2000-5-e0 ⚠️). Los ciclos declarados (≥6.000) son **a 25 °C**: a temperaturas sostenidas de 35–40 °C la degradación se acelera ⚠️ (el fabricante no publica curva en las fuentes consultadas).
- **Plomo-ácido VRLA**: regla práctica de la industria — la vida útil se **reduce a la mitad por cada ~8 °C** por encima de la temperatura de referencia (~25 °C) — APC/Schneider FAQ https://www.se.com/au/en/faqs/FA158934/ y Valen https://valen.com.au/what-are-the-effects-of-temperature-on-vrla-batteries/ (regla empírica, no norma ⚠️). A 33 °C promedio, una gel de "10 años" duraría ~5.
- **Recomendaciones de instalación**: cuarto interior ventilado y sombreado, nunca bajo teja de zinc ni en fachada al sol; separación según manual; evitar >35 °C sostenidos; algunos inversores (Deye US) deratean >45 °C.

## 5. Garantías típicas
- Pylontech: 10 años (7 + 3 al registrar, según revendedor ⚠️).
- Deye SE-G5.1 Pro: 10 años (sun.store).
- Huawei LUNA2000: 10 años (revendedor ⚠️).
- Felicity / Tensite: ⚠️ no consultado en ficha; pedir por escrito años y ciclos/energía garantizada (MWh throughput).
- Exigir **compatibilidad certificada (lista del fabricante del inversor)** batería–inversor para la comunicación BMS.

## 6. Cuánta batería para una casa (orientativo)
- Respaldo nocturno de cargas esenciales (nevera, luces, ventiladores, router, ~3–5 kWh/noche): **5–10 kWh nominales LFP → 4–10 M COP** (tienda, con IVA).
- Off-grid completo de una casa de 10 kWh/día con 1,5 días de autonomía: ~15–20 kWh LFP → 11–16 M COP solo en baterías.
- El dimensionamiento formal va en `07-diseno-proyecto`.
