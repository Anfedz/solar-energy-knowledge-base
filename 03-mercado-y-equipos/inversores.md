# Inversores: on-grid, híbridos, off-grid y microinversores — y compatibilidad con la red de Air-e

> Fecha de consulta: **2026-10-28**. Los inversores se venden **exentos de IVA** en las tiendas revisadas (Autosolar "Exento de IVA"; Solartex `ivaRate 0`). TRM: 3.191,47 COP/USD.

## 1. ¿Qué red llega a una casa en Sabanalarga? (Air-e)

### 1.1 Tensiones normalizadas por Air-e (documento oficial)
Air-e, *Especificaciones Particulares para Instalaciones de Conexión y Enlace*, código **DT.ID.ES.130, edición 02, aprobada 21/08/2024**, numeral 3.2.1 "Suministro en redes de distribución secundaria":
- **Monofásico bifilar a 120 V** (±10 %): fase + neutro.
- **Bifásico trifilar a 120/208 V** (±10 %): dos fases + neutro "de un sistema trifásico tetrafilar".
- **Trifásico tetrafilar a 120/208 V** (±10 %): tres fases + neutro.
- El mismo documento menciona **transformadores monofásicos con medida en BT 120/240 V** (Tabla 10) y medidores para "127/220 o 120/208 V" (Tabla 8), y define la red BT de Air-e como "Baja (120/240 V)" en la definición de su Centro de Operación de Red.

URL: https://www.air-e.com/assets/documents/normativas/Especificaciones%20Particulares/DT.ID.ES.130%20Esp_Part_para_intal_de_conex%20y%20enlace/DT.ID.ES.130%20Especificaciones%20Particulares%20para%20Instalaciones%20de%20Conexi%C3%B3n%20y%20Enlace.pdf (consultado 28-oct-2026; listado en https://www.air-e.com/normativas).

Límites de carga para conexión directa (Tabla 3 del mismo documento):

| Tipo de servicio | Protección | Acometida Cu (AWG) | kVA máx. |
|---|---|---|---|
| Monofásico bifilar 1F-2H-120 V | 1×50 A / 1×60 A | 2×8 / 2×6 | 6 / 8 |
| Bifásico trifilar 2F-3H-120/208 V | 2×50 / 2×60 / 2×80 A | 3×8 / 3×6 / 3×4 | 10 / 13 / 18 |
| Trifásico tetrafilar 3F-4H-120/208 V | 3×80 A | 4×4 | 28 |

### 1.2 Interpretación práctica para la casa

| Caso en la casa | Cómo identificarlo | Tensión entre fases | Qué inversor sirve |
|---|---|---|---|
| **A. Monofásico bifilar 120 V** (1 fase + neutro) | Medidor de 2 hilos; un solo breaker de fase | — (solo 120 V F-N) | Solo inversores de **120 V** (pocos on-grid; microinversores o cargadores 120 V). Para >2–3 kW conviene pedir a Air-e cambio a bifásico. ⚠️ |
| **B. Bifásico trifilar 120/208 V** (2 fases de un transformador trifásico + neutro) | Dos fases de ~120 V a neutro y **~208 V entre ellas** | 208 V | Inversores "split-phase/US" que admitan **208 V** (p. ej. Deye SG01LP1-US, ver tabla) o monofásicos 220/230 V con rango que incluya 208 V −10 % (≈187 V). ⚠️ Los Growatt MIN 2,5–6 kW TL-X2 (240 V, 211–264 V) **no cubren 208 V** sin ajuste de código de red |
| **C. Monofásico trifilar 120/240 V** ("fase partida", transformador monofásico con derivación central) | Dos "fases" de ~120 V y **~240 V entre ellas** | 240 V | Inversores split-phase 120/240 V (US) o monofásicos 220–240 V conectados entre las dos líneas |
| **D. Trifásico 120/208 V** | Tres fases | 208 V | Inversores trifásicos "LV" 127/220 o 120/208 V (p. ej. Deye SG04LP3-**LV**, SAJ T2-32-**LV**, Growatt MID-XL2 en versión de baja tensión ⚠️ verificar) — los trifásicos europeos 230/400 V **no sirven** |

**Medir antes de comprar**: con multímetro en el tablero, tensión F1-N, F2-N y F1-F2. Si F1-F2 ≈ 208 V → caso B; ≈ 240 V → caso C. En zonas rurales/semiurbanas como Sabanalarga existen ambos (transformadores monofásicos 120/240 V y trifásicos 120/208 V) ⚠️ no se encontró estadística por municipio. Los clientes en foros de tiendas preguntan justamente por "2 fases de 110 V y neutro" (Autosolar, ficha Growatt MIN 6000TL-X2, pregunta del 18-feb-2025 sin respuesta técnica: https://autosolar.co/inversores-on-grid-bifasicos/inversor-on-grid-6000w-growatt-min-6000tl-x2).

> Las tiendas colombianas llaman "**bifásico**" o "**fase dividida**" a inversores de ~220–240 V que se conectan entre dos líneas. Eso **no garantiza** que funcionen a 208 V. Verificar en la ficha el rango de tensión AC y el "grid code" seleccionable.

### 1.3 Requisitos de Air-e para conectar el inversor (cartilla AGPE, CREG 174/2021)
Air-e, *Cartilla de información AGPE/AGGE/GD* — https://www.air-e.com/assets/documents/autogeneracion/cartilla_de_informacion.pdf (consultada 28-oct-2026), página de trámite: https://www.air-e.com/autogeneracion
- Documentos al registrar (AGPE ≤100 kW con excedentes): certificado de capacitación/experiencia en la instalación tipo; manual del dispositivo que controla la inyección (si aplica); consulta de disponibilidad de red; **"Certificado de producto emitido por un organismo de certificación acreditado, donde se demuestre el cumplimiento de las normas para inversores"**; diagramas unifilares; esquema de puesta a tierra y protecciones; distancias de seguridad y cuadro de cargas.
- Para la visita de conexión: **certificado de conformidad RETIE** (dictamen de inspección y declaración de cumplimiento) y, si cambia el medidor, **certificado de conformidad de producto y de calibración del medidor**.
- Medición: AGPE que entrega excedentes requiere **medidor bidireccional con registro horario** (Código de Medida, CREG 038/2014).
- Plazos de revisión de Air-e: 2 días hábiles completitud; 3–5 días hábiles verificación técnica para <10 kW–100 kW; visita en 5 días hábiles.
- Memorias de cálculo exigidas (riesgo por rayos NTC 4552/IEC 62305, puesta a tierra IEEE 80, conductores NTC 2050, regulación ≤3 %/1 %, medida bidireccional CREG 038/2014 y 030/2018): Air-e *Instructivo memorias de cálculo GD-AGPE hasta 0,1 MW*, DT.ID.ES.130-AX.04 — https://www.air-e.com/assets/documents/normativas/Especificaciones%20Particulares/DT.ID.ES.130%20Esp_Part_para_intal_de_conex%20y%20enlace/DT.ID.ES.130-AX.04%20Instructivo-AGPE.pdf

### 1.4 Certificaciones del inversor
- RETIE vigente: Resolución MinEnergía 40117 de 2024 (Diario Oficial 52.716, 3-abr-2024) — https://normograma.dian.gov.co/dian/compilacion/docs/resolucion_minminas_40117_2024.htm. Según conceptos CREG, el RETIE (art. 2.3.23) menciona para inversores **IEC 62109-1, IEC 62109-2, IEC 62116 y UL 1741** — concepto CREG https://gestornormativo.creg.gov.co/gestor/entorno/docs/concepto_creg_0011440_2025.htm ⚠️ (detalle legal en `02-marco-legal-y-regulatorio`).
- Ejemplo de certificado real: Victron Energy publica un **certificado RETIE 40117 (esquema 5, art. 2.3.23)** para Colombia — https://www.victronenergy.com/upload/documents/Certificate-Safety-RETIE-40117-Inverter-VE.Direct-120V%2C-Inverter-RS-230V%2C-Inverter-VE.Bus-120V-%28Colombia%29.pdf
- MinEnergía mencionó que inversores y baterías FV podían transitoriamente demostrar conformidad por **declaración de proveedor**, modificado por la Res. 40304 de 2025 ⚠️ por verificar vigencia.
- **Regla práctica**: exigir al vendedor el **certificado de conformidad de producto RETIE** del modelo exacto (no de la familia) y la ficha con IEC 62116/UL 1741 (anti-isla). Sin eso, Air-e puede rechazar el trámite.

## 2. Inversores on-grid (string) — precios en Colombia

| Marca / modelo | Potencia | Red (según tienda/ficha) | Precio COP | Tienda | URL |
|---|---|---|---|---|---|
| Growatt MIC-2500TL-X2 | 2,5 kW | "fase dividida" | 1.680.000 | Solartex | https://solartex.co/tienda/producto/inversor-on-grid-2500w-fase-dividida-mic-2500tl-x2-growatt |
| Growatt MIC 1,5 kW | 1,5 kW | "240VAC 120VAC fase dividida" | 1.140.900 (internet) | Homecenter | https://www.homecenter.com.co/homecenter-co/product/585733 |
| Auxsol ASN-3.3SL | 3,3 kW | fase dividida | 1.270.700 | Solartex | https://solartex.co/tienda/producto/inversor-on-grid-3300w-fase-dividida-asn-3-3sl-auxsol |
| Livoltek GT1-3K3S1 | 3,3 kW | fase dividida | 1.998.100 | Solartex | https://solartex.co/tienda/producto/inversor-on-grid-3-300w-fase-dividida-gt1-3k3s1-livoltek |
| Growatt MIN-3600TL-X2 | 3,6 kW | fase dividida | 3.150.100 | Solartex | https://solartex.co/tienda/producto/inversor-on-grid-3600w-fase-dividida-min-3600tl-x2-growatt |
| Growatt MIN 4200TL-X2 | 4,2 kW | bifásico 240 V | 2.166.892 | Autosolar | https://autosolar.co/inversores-on-grid-bifasicos/inversor-on-grid-4200w-growatt-min-4200tl-x2 |
| Livoltek GT1-5KD1 | 5 kW | fase dividida | 2.882.300 | Solartex | https://solartex.co/tienda/producto/inversor-on-grid-5000w-fase-dividida-gt1-5kd1-livoltek |
| Growatt MIN 5000TL-X | 5 kW | bifásico | 4.678.612 ⚠️ (más caro que el de 6 kW: posible error de precio) | Autosolar | https://autosolar.co/inversores-on-grid-bifasicos/inversor-growatt-min-5000tl-x-doble-mppt |
| Growatt MIN 6000TL-X2 | 6 kW | bifásico, 240 V | 2.230.769 (dcto. 8 %) | Autosolar | https://autosolar.co/inversores-on-grid-bifasicos/inversor-on-grid-6000w-growatt-min-6000tl-x2 |
| SAJ R6-6K-S2-X | 6 kW | bifásico | 2.246.131 | Autosolar | https://autosolar.co/inversores-on-grid-bifasicos/inversor-on-grid-6000w-bifasico-saj-r6-6k-s2-x |
| Livoltek GT1-6KD2 | 6 kW | fase dividida | 2.906.600 | Solartex | https://solartex.co/tienda/producto/inversor-on-grid-6kw-fase-dividida-gt1-6kd2-livoltek |
| Sofar 8KTLM-G3 | 8 kW | fase dividida | 3.120.100 | Solartex | https://solartex.co/tienda/producto/inversor-on-grid-8000w-fase-dividida-8ktlm-g3-sofar |
| Growatt MIN 8000TL-X2 | 8 kW | fase dividida | 3.511.100 | Solartex | https://solartex.co/tienda/producto/inversor-on-grid-8000w-fase-dividida-min-8000tl-x2-growatt |
| Sofar 10KTLM-G3 | 10 kW | fase dividida | 3.050.400 | Solartex | https://solartex.co/tienda/producto/inversor-on-grid-10kw-fase-dividida-10ktlm-g3-sofar |
| Growatt MIN 10000TL-X2 | 10 kW | bifásico/fase dividida | 3.897.100 (Solartex) / 3.916.831 (Autosolar) | Solartex / Autosolar | https://solartex.co/tienda/producto/inversor-on-grid-10kw-fase-dividida-min-10000tl-x2-growatt |
| SAJ R6-10K-S2-X | 10 kW | bifásico | 2.480.896 ⚠️ | Autosolar | https://autosolar.co/inversores-on-grid-bifasicos/inversor-on-grid-10000w-bifasico-saj-r6-10k-s2-x |
| Growatt MID 8K TL3-XL2 | 8 kW | trifásico | 5.349.784 | Autosolar | https://autosolar.co/inversores-on-grid-trifasicos/inversor-on-grid-8000w-growatt-mid-8k-tl3-xl2 |
| SAJ R6-8K-T2-32-LV | 8 kW | trifásico LV | 4.657.231 | Autosolar | https://autosolar.co/inversores-on-grid-trifasicos/inversor-on-grid-8000w-trifasico-saj-r6-8k-t2-32-lv |
| Growatt MID 10TL3-XL2 | 10 kW | trifásico | 5.961.706 (Autosolar) / 4.805.900 internet (Homecenter, "MID 10K TL3-XL") | Autosolar / Homecenter | https://autosolar.co/inversores-on-grid-trifasicos/inversor-on-grid-10000w-growatt-mid-10tl3-xl2 · https://www.homecenter.com.co/homecenter-co/product/687086 |
| Solax 8K monofásico | 8 kW | monofásico | 4.200.031 | Integración Solar (Medellín) | https://integracionsolar.co/cuanto-cuesta-instalar-paneles-solares-en-colombia-en-2026/ (17-ago-2026) |

**Rango: 0,3 – 0,8 M COP/kW** para string residencial de 3–10 kW (≈ 300–800 COP/W); unidades de 6–10 kW "fase dividida" de Growatt/Sofar/SAJ/Livoltek en **2,2 – 3,9 M COP**.

Marcas pedidas sin precio público encontrado en Colombia (oct-2026): **Huawei SUN2000 (on-grid L1), Fronius Primo, SMA Sunny Boy, GoodWe, Solis (solo accesorios en Solartex)** ⚠️ vacío — se venden por cotización a instaladores (p. ej. vía distribuidores mayoristas como BayWa r.e. en Barranquilla).

### 2.1 Notas técnicas de compatibilidad (on-grid)
- **Growatt MIN 2500–6000TL-X2**: tensión AC nominal **240 V (211–264 V)** según ficha en español de la serie (vía resultado de búsqueda de la ficha de Exel Solar https://backupxlstore.exelsolar.com:443/Multimedia/FichaTecnica/GRW-MIN-5000TL-X2_FichaTecnica.pdf — la descarga directa falló; ⚠️ por verificar). → Apto para **caso C (240 V)**; para **caso B (208 V)** queda fuera del rango salvo que el código de red permita ajuste.
- **Growatt MIN 7000–10000TL-X2**: "Nominal AC voltage (range\*) 220V/160~300V" — ficha https://solarproof.com.au/datasheets/inverter_datasheet_growatt%20MIN_7000~10000TL-X2_datasheet-compressed.pdf (descargada 28-oct-2026). → Cubre 208 V y 240 V.
- Ficha antigua MIN 2500–6000TL-X (no X2): 230 V (180–280 V) — https://rexel.it/files/uploads/documenti/Schede%20tecniche%20Growatt/Growatt-MIN-TL-X-2500-6000.pdf
- El rango real depende del "country/grid code" configurado; Growatt advierte que "may vary depending on specific country grid standard".

## 3. Inversores híbridos (red + batería)

| Marca / modelo | Potencia | Batería | Red | Precio COP | Tienda | URL |
|---|---|---|---|---|---|---|
| **Deye SUN-5/6/7.6/8K-SG01LP1-US** | 5–8 kW | 48 V (40–60 V), Li o plomo, hasta 190 A | **120/240 V y 208 V split-phase (2L+N+PE), 0,88–1,1 Un, 60 Hz**; UL/IEEE 1547.1; AFCI opcional; garantía 5 años (hasta 10 según país) | Precio CO no encontrado ⚠️ | — | Ficha Deye (sep-2026): https://www.deyeinverter.com/deyeinverter/2026/09/14/BDatasheetSUN-5-8KK-SG01LP1-US20260911en.pdf |
| Deye SUN-8K-SG02LP2-US-AM2 | 8 kW | 48 V | "bifásico" (versión US) | 11.462.800 | Autosolar | https://autosolar.co/inversores-solares-hibridos/inversor-hibrido-bifasico-8000w-deye-sun-8k-sg02lp2-us-am2 |
| Deye SUN-10K-SG04LP3-EU-AM2-LV | 10 kW | 48 V | trifásico LV | 11.752.450 | Autosolar | https://autosolar.co/inversores-solares-hibridos/inversor-hibrido-trifasico-10000w-deye-sun-10k-sg04lp3-eu-am2-lv |
| Deye SUN-12K-SG04LP3-EU-AM2-LV | 12 kW | 48 V | trifásico LV | 12.162.850 | Autosolar | https://autosolar.co/inversores-solares-hibridos/inversor-hibrido-trifasico-12000w-deye-sun-12k-sg04lp3-eu-am2-lv |
| Growatt SPH3000TL BL-US | 3 kW | alta tensión | split-phase US | 6.922.900 (internet) | Homecenter | https://www.homecenter.com.co/homecenter-co/product/585728 |
| Growatt SPH4000TL BL-US | 4 kW | — | split-phase US | 7.924.118 | Autosolar | https://autosolar.co/inversores-solares-hibridos/inversor-hibrido-growatt-sph4000tl-bl-us-4000w |
| Growatt SPH 6000TL BL-US | 6 kW | — | split-phase US | 9.062.737 | Autosolar | https://autosolar.co/inversores-solares-hibridos/inversor-hibrido-growatt-sph-6000tl-bl-us |
| Huawei SUN2000-8K-LC0 | 8 kW | alta tensión (LUNA2000) | Huawei: monofásico 220/230/240 V L/N; Solartex lo vende como "fase dividida" | 4.020.300 | Solartex | https://solartex.co/tienda/producto/inversor-hibrido-on-grid-fase-dividida-8kw-sun2000-8k-lc0-huawei · spec Huawei https://solar.huawei.cn/ke/professionals/all-products/SUN2000-8-10K-LC0/specs |
| Must PV3300 TLV | 4 kW | 48 V | fase dividida | 2.650.100 | Solartex | https://solartex.co/tienda/producto/inversor-hibrido-4kw-48v-pv3300-tlv-fase-dividida-must |
| Must PV3900 TLV | 8 kW / 10 kW | 48 V | fase dividida | 7.148.300 / 7.545.200 | Solartex | https://solartex.co/tienda/producto/inversor-hibrido-8kw-48v-pv3900-tlv-fase-dividida-must |
| Powest PW6K48V / PW12K48V | 6 / 12 kW | 48 V | fase dividida on/off-grid | 4.683.100 / 9.589.700 | Solartex | https://solartex.co/tienda/producto/inversor-hibrido-fase-dividida-on-off-grid-6kw-48v-pw6k48v-powest |
| Felicity / Tensite IVGM8KLP2G1 | 8 kW | 48 V | ⚠️ ver ficha | 6.400.000 | Autosolar | https://autosolar.co/inversores-solares-hibridos/inversor-hibrido-felicity-solar-8000w-48v-ivgm8klp2g1 |
| Voltronic Infinisolar 10 kW | 10 kW | 48 V | ⚠️ | 16.859.755 | Autosolar | https://autosolar.co/inversores-solares-hibridos/inversor-hibrido-10kw-48v-80a-infinisolar |
| Victron MultiPlus-II 24/3000/70-50 **2×120 V (UL)** | 3 kVA | 24 V | 120/240 V split | 5.908.300 | Solartex | https://solartex.co/tienda/producto/inversor-multiplus-ii-24-3000-70-50-2x120v-ul-victron-energy |
| Victron Quattro II 24/3000 2×120 | 3 kVA | 24 V | 120/240 V split | 6.098.900 | Solartex | https://solartex.co/tienda/producto/inversor-quattro-ii-24-3000-70-50-50-2x120-victron-energy |

Victron MultiPlus-II 48/5000 y GoodWe ET: sin precio colombiano encontrado ⚠️ (referencia España: MultiPlus-II 48/5000 ~625–1.021 € según tienda, búsqueda 28-oct-2026; GoodWe ET es trifásico 230/400 V → no apto para red 120/208 sin transformador ⚠️).

**Rango híbridos split-phase 5–8 kW: ~4 – 11,5 M COP** (sin batería).

## 4. Inversores-cargadores off-grid (no inyectan a la red; pueden usar la red como respaldo)

| Modelo | Potencia | Batería | Salida | Precio COP | Tienda | URL |
|---|---|---|---|---|---|---|
| Growatt SPF 3000TL LVM 48V | 3 kW | 48 V | 120 V (LV) ⚠️ | 2.472.893 | Autosolar | https://autosolar.co/inversores-cargadores-48v/inversor-cargador-growatt-spf-3000tl-lvm-48v |
| Growatt SPF 6000T DVM-MPV | 6 kW | 48 V | **120/240 V split-phase** (fuentes de revendedores, p. ej. https://signaturesolar.com/content/documents/GROWATT/1519016-specs.pdf ⚠️) | 3.666.596 | Autosolar | https://autosolar.co/inversores-cargadores-48v/inversor-cargador-6000w-48v-growatt-spf-6000t-dvm-mpv |
| Growatt SPF 6000T DVM-G2 | 6 kW | 48 V | split-phase | 3.966.596 | Autosolar | https://autosolar.co/inversores-cargadores-48v/inversor-growatt-spf-6000t-dvm-g2 |
| Growatt SPF-10000T / 12000T DVM | 10 / 12 kW | 48 V | fase dividida | 9.900.000 / 6.819.900 (Solartex); 9.783.432 / 7.897.298 (Autosolar) ⚠️ precios invertidos | Solartex / Autosolar | https://solartex.co/tienda/producto/inversor-hibrido-fase-dividida-12kw-48v-spf-12000t-dvm-growatt |
| Felicity IVEM5048-LV | 5 kW | 48 V | ⚠️ | 2.750.000 | Autosolar | https://autosolar.co/inversores-cargadores-48v/inversor-cargador-5000w-48v-ivem5048-lv-felicitysolar |
| Voltronic Axpert MLV3II | 6 kW | 48 V | ⚠️ | 5.980.054 | Autosolar | https://autosolar.co/inversores-cargadores-48v/inversor-cargador-hibrido-6000w-48v-voltronic-axpert-mlv3ii |
| Tensite 10 kW 48 V bifásico 110/220 VAC con BMS | 10 kW | 48 V | 110/220 V | 6.194.763 | Autosolar | https://autosolar.co/inversores-cargadores-48v/inversor-cargador-10000w-48v-bifasico-110220vac-con-bms-tensite |
| Inversor off-grid 6 kW 48 V fase dividida 110/220 V (genérico) | 6 kW | 48 V | 110/220 V | 4.593.300 | Solartex | https://solartex.co/tienda/producto/inversor-off-grid-6000w-48v-fase-dividida-110-220v |

> Los equipos tipo Axpert/SPF/Must son "híbridos off-grid": **no están pensados para exportar a la red** ni suelen tener certificación anti-isla para AGPE. Si se usan conectados a la red, debe ser con transferencia (red como cargador/bypass) y **sin inyección**, y Air-e igual exige el trámite de "AGPE sin entrega de excedentes" con el manual del dispositivo de no inyección (cartilla Air-e, §1.3). ⚠️

## 5. Microinversores

| Modelo | Potencia | Red | Precio COP | Tienda | URL |
|---|---|---|---|---|---|
| Growatt NEO 2000M-X2 | 2 kW (4 módulos) | ⚠️ | 823.052 | Autosolar | https://autosolar.co/microinversores/microinversor-growatt-neo-2000m-x2 |
| Growatt NEO 2500M-X2 | 2,5 kW, 4 MPPT | "fase dividida" | 961.200 (Solartex) / 1.297.021 (Autosolar) | Solartex / Autosolar | https://solartex.co/tienda/producto/microinversor-on-grid-fase-dividida-2500w-4-mppt-neo2500m-x2-growatt |
| Hoymiles HMS-800-2T-LV | 800 W (2 módulos) | LV | 1.095.300 | Solartex | https://solartex.co/tienda/producto/microinversor-on-grid-800w-hms-800-2t-lv-hoymiles |
| Hoymiles HMS-1600-4T | 1,6 kW (4 módulos) | "fase dividida"; ficha EU 220/230/240 V (180–275 V) | 1.078.600 | Solartex | https://solartex.co/tienda/producto/microinversor-on-grid-fase-dividida-hms-1600-4t-hoymiles · ficha https://hoymiles-oss.yongsy.com/uploads/2025/04/Datasheet_HMS-1600&1800&2000-4T_EU_EN_V202402.pdf |
| APsystems QS1 split phase | 1,5 kW (4 módulos) | split-phase | 1.210.000 | Autosolar | https://autosolar.co/microinversores/microinversor-qs1-split-phase-1500w-apsystems |
| APsystems DS3D bifásico | 2 kW | 240 V | 1.793.179 | Autosolar | https://autosolar.co/microinversores/microinversor-bifasico-ds3d-2000w-240v-apsystems |
| Growatt MIC2500 (string pequeño) | 2,5 kW | — | 1.378.900 internet | Homecenter | https://www.homecenter.com.co/homecenter-co/product/585730 |

- **Enphase IQ8P** se lanzó en Colombia, Panamá y Costa Rica (ene-2025): 480 W pico, módulos hasta 670 W DC, **garantía 20 años** en Colombia; instalador citado Ingelnet de Colombia — https://investor.enphase.com/news-releases/news-release-details/enphase-energy-expands-latin-america-launch-iq8-microinverters . Sin precio público en COP ⚠️.
- Rango micro: **~0,45 – 1,4 M COP/kW** (más caros por W que un string, pero sin alta tensión DC y con MPPT por módulo — útil en techos con sombras o varias orientaciones).
- ⚠️ Verificar que el micro acepte la corriente de módulos de 600–720 W (Imp 15–18 A).

## 6. Matriz de compatibilidad resumida (Air-e)

| Equipo | Caso A 120 V | Caso B 120/208 V | Caso C 120/240 V | Caso D trifásico 120/208 |
|---|---|---|---|---|
| Deye SG01LP1-US (híbrido) | ✗ | ✓ (ficha: 208 V) | ✓ | ✗ (usar SG04LP3-LV) |
| Deye SG04LP3-EU-AM2-**LV** | ✗ | ✗ | ✗ | ✓ ⚠️ verificar 120/208 |
| Growatt MIN 2,5–6 kW TL-X2 | ✗ | ⚠️ fuera de rango (211–264 V) | ✓ | ✗ |
| Growatt MIN 7–10 kW TL-X2 | ✗ | ✓ (160–300 V) | ✓ | ✗ |
| Growatt SPH-TL BL-**US** | ✗ | ✓ ⚠️ (versión US 208/240) | ✓ | ✗ |
| Huawei SUN2000-LC0 (220–240 V L/N) | ✗ | ⚠️ posible con ajuste a 220 V | ✓ (L-L) ⚠️ | ✗ |
| Victron MultiPlus-II 2×120 V | ✓ (120 V) | ⚠️ | ✓ | ✗ |
| Microinversores "split-phase/240 V" | ✗ | ⚠️ según modelo (APsystems QS1/DS3: verificar 208) | ✓ | ✗ |
| Trifásicos europeos 230/400 V | ✗ | ✗ | ✗ | ✗ |

✓ = compatible según ficha/tienda; ⚠️ = depende de configuración/versión, confirmar con el fabricante; ✗ = no apto.

## 7. Recomendaciones
1. **Medir la tensión** F-N y F-F en la casa y revisar el tipo de acometida/medidor en la factura de Air-e antes de elegir el inversor.
2. Para un sistema **on-grid** ≤10 kW en 120/240 V: string "fase dividida" (Growatt MIN X2, Sofar, Livoltek, SAJ) ~2,2–3,9 M COP. Si la red es 120/208 V: preferir modelos con rango que incluya 187–229 V.
3. Para **híbrido con respaldo**: Deye SG01LP1-US (soporta 208 y 240 V; 48 V; 5 años garantía) es la referencia técnica más clara encontrada; alternativa Growatt SPH-US o Huawei LC0 + LUNA2000 (más caro en baterías).
4. Exigir certificado RETIE del producto y prueba anti-isla (IEC 62116 / UL 1741) para el trámite con Air-e.
5. Calor: el Deye US deratea por encima de 45 °C ambiente (ficha) → instalar en sombra y ventilado.
