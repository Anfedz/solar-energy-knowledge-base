# Catálogo de herramientas de diseño FV — proyecto Sabanalarga

> Para qué sirve esta carpeta: elegir **qué herramienta usar en cada paso** del diseño de un sistema fotovoltaico residencial en Sabanalarga, Atlántico (10.632, -74.921), priorizando herramientas **gratuitas**.
> Precios y disponibilidad consultados el **2026-10-28**. `[n]` = referencias al final. ⚠️ = no verificado en fuente oficial.
> Archivos relacionados: [`flujo-de-trabajo-recomendado.md`](flujo-de-trabajo-recomendado.md) · [`como-medir-techo-y-sombras.md`](como-medir-techo-y-sombras.md) · [`../01-recurso-solar-y-clima/`](../01-recurso-solar-y-clima/)

## Fases del proyecto (códigos usados en la tabla)

| Código | Fase |
|---|---|
| **F0** | Consumo: leer la factura y construir el perfil de carga |
| **F1** | Recurso solar: irradiación y producción específica (kWh/kWp) |
| **F2** | Sitio: medir techo, orientación, inclinación y sombras |
| **F3** | Prediseño: tamaño del sistema (kWp), número de módulos, distribución en el techo |
| **F4** | Simulación de producción y pérdidas (horaria / anual), autoconsumo y excedentes |
| **F5** | Diseño eléctrico: strings vs inversor, cables, caída de tensión, protecciones |
| **F6** | Baterías / sistema híbrido u off-grid |
| **F7** | Cotización, trámites con el operador de red (Air-e) y UPME |

> **Nota de nombres:** el laboratorio NREL de EE. UU. fue renombrado **National Laboratory of the Rockies (NLR)** el 1 dic 2025 [1]; PVWatts, SAM y NSRDB ahora están en dominios `*.nlr.gov` (verificado: responden) [2][3].

---

## 1. Tabla comparativa

### 1.1 Recurso solar y simulación de producción

| Herramienta | Gratis / pago (precio) | Qué hace | Nivel | ¿Sirve para Colombia? | URL | Fase |
|---|---|---|---|---|---|---|
| **Global Solar Atlas** (Banco Mundial / Solargis) | Gratis | GHI, DNI, inclinación óptima, temperatura y **PVOUT (kWh/kWp)** para cualquier punto; informe PDF | Principiante | **Sí** — verificado para el sitio: GHI 1 951 kWh/m²·año, PVOUT 1 570 kWh/kWp·año, inclinación óptima 13° [4] | https://globalsolaratlas.info/detail?c=10.632,-74.921,11 | F1, F3 |
| **PVGIS 5.3** (JRC, Comisión Europea) | Gratis | Producción FV en red y aislada, series horarias, **TMY**, horizonte por relieve, optimiza inclinación/azimut; interfaz en español y API | Principiante → intermedio | **Sí, con matiz**: en v5.3 sólo base **ERA5** para este punto; base satelital **NSRDB** disponible en v5.2 (2005–2015) [5][6] | https://re.jrc.ec.europa.eu/pvg_tools/es/ | F1, F4, F6 (off-grid) |
| **PVWatts v8** (NLR) | Gratis | Producción AC mensual/horaria de un sistema en red con supuestos simples; rango por variabilidad de 30 años | Principiante | **Sí** — verificado: usa **NSRDB PSM v3 TMY** a 2.9 km del sitio; ≈ 1 430 kWh/kWp·año (13°, sur, 14 % pérdidas) [7] | https://pvwatts.nlr.gov/ | F1, F3, F4 |
| **SAM – System Advisor Model** (NLR) | Gratis (escritorio) | Simulación técnica-económica detallada: módulos e inversores de base de datos, sombras, **baterías** (Li-ion, plomo-ácido, flujo), tarifas, flujo de caja residencial [3] | Intermedio → pro | Sí (descarga clima NSRDB/archivo propio; tarifas colombianas hay que ingresarlas a mano ⚠️) | https://sam.nlr.gov/ | F4, F6, F7 (económico) |
| **PVsyst 8** | Pago: **CHF 700/año** licencia Professional; prueba gratis 1 mes; sólo Windows [8] | Estándar de la industria para simulación detallada, sombras 3D, pérdidas, informes "bancables"; importa Meteonorm 9, NASA POWER, PVGIS-TMY, NSRDB, Solcast, Solargis [8] | Pro | Sí | https://www.pvsyst.com/en/products/pvsyst/ | F4, F5 (verificación final) |
| **pvlib-python** | Gratis, código abierto (BSD-3) [9] | Librería Python para modelar FV (posición solar, transposición, temperatura de celda, inversor); descarga datos de PVGIS/NSRDB/etc. vía `iotools` ⚠️ | Pro (programador) | Sí | https://pvlib-python.readthedocs.io/ | F1, F4 (análisis propio de `06-datos`) |
| **NASA POWER – Data Access Viewer** | Gratis | Series diarias/horarias de irradiación, temperatura, viento (1°×1° radiación) [10] | Principiante → intermedio | Sí (resolución gruesa) | https://power.larc.nasa.gov/data-access-viewer/ | F1 (variabilidad interanual) |
| **HOMER Pro** (UL Solutions) | Pago: Base US$1 575/año (o US$187.50/mes), Professional US$3 100/año, Expert US$4 650/año; prueba gratis [11] | Optimiza microrredes/sistemas **off-grid e híbridos** (FV + baterías + generador) por costo mínimo | Pro | Sí | https://homerenergy.com/homer-pro | F6 (sólo si se evalúa aislado/respaldo con planta) |
| **HOMER Grid** (UL Solutions) | Pago: US$4 200/año (anual) o US$665/mes [12] | Optimización de sistemas **detrás del medidor** conectados a red (tarifas, demanda, baterías) | Pro | Sí, pero sobredimensionado para una casa | https://homerenergy.com/homer-grid | F6 (no recomendado para este proyecto) |

### 1.2 Diseño 3D, techo y propuestas

| Herramienta | Gratis / pago (precio) | Qué hace | Nivel | ¿Sirve para Colombia? | URL | Fase |
|---|---|---|---|---|---|---|
| **OpenSolar** | **Gratis** ("100 % gratis"; se financia con socios de equipos y financiación) [13][14] | Diseño 3D automático, lista de materiales, diagramas unifilares, propuestas, CRM | Intermedio (orientado a instaladores) | Probablemente: dice operar en 185+ países y tiene sitio en español; ⚠️ calidad de imagen satelital y base de equipos para Colombia por verificar | https://www.opensolar.com/es/ | F3, F4, F7 |
| **Aurora Solar** | Pago: Basic US$135/usuario/mes (anual) o US$159 mensual; Premium US$220 (anual) / US$259 mensual; 50 proyectos/mes [15] | Diseño 3D, sombras con LIDAR (Premium), propuestas comerciales | Pro | ⚠️ Enfocado en EE. UU./Europa; cobertura de imágenes/LIDAR en Colombia no verificada | https://aurorasolar.com/pricing/ | F3, F4, F7 |
| **HelioScope** (Aurora) | Pago: Basic US$159/mes (US$1 620/año), Pro US$259/mes (US$2 640/año); 10 proyectos/mes; prueba gratis [16] | Diseño y simulación comercial/industrial; afirma estimaciones a ±1 % de PVsyst | Pro | Sí (diseño sobre imagen), ⚠️ sobredimensionado para una casa | https://helioscope.aurorasolar.com/pricing/ | F3, F4, F5 |
| **SketchUp** (Trimble) | Pago: Go US$129/año (web, **sin extensiones**), Pro US$399/año, Studio US$859/año [17] | Modelado 3D de la casa, techos, tanques y vecinos para estudiar sombras | Intermedio | Sí | https://sketchup.trimble.com/en/plans-and-pricing | F2, F3 |
| **Skelion** (extensión de SketchUp) | Pago ⚠️: foros reportan licencia anual de ≈ US$200; versión gratuita limitada a ≈ 10 módulos (fuente de competidor) [18][19] | Inserta módulos automáticamente en superficies, sombras, layout | Intermedio | Sí | https://skelion.com/ | F3 |
| **Google Earth Pro (escritorio) / Google Earth Web / Google Maps** | Gratis ⚠️ (la página oficial no indica precio); **la descarga de Earth Pro dejará de estar disponible desde el 25 jun 2027** [20] | Medir techo (regla, polígonos), ver **imágenes históricas** (Pro), orientación | Principiante | Sí (calidad de imagen variable en Sabanalarga ⚠️) | https://www.google.com/earth/about/versions/ · https://earth.google.com/web/ | F2 |

### 1.3 Sombras y trayectoria solar

| Herramienta | Gratis / pago (precio) | Qué hace | Nivel | ¿Sirve para Colombia? | URL | Fase |
|---|---|---|---|---|---|---|
| **SunCalc.org** | Gratis (donaciones opcionales) [21] | Trayectoria solar por día y lugar, azimut/altura, **longitud de sombra para una altura dada** | Principiante | Sí | https://www.suncalc.org/ | F2 |
| **Sun Seeker** (Ajnaware) | Pago: ≈ US$10–15 en iOS según tienda/país ⚠️; también en Android [22] | Brújula y **realidad aumentada 3D** con trayectorias del sol (solsticios, equinoccios) sobre la cámara | Principiante | Sí | https://apps.apple.com/app/sun-seeker-tracker-surveyor/id330247123 · https://play.google.com/store/apps/details?id=com.ajnaware.sunseeker | F2 |
| **Sun Surveyor** | Pago ⚠️ (precio no verificado) | Similar a Sun Seeker (AR, mapa, efemérides) | Principiante | Sí | https://www.sunsurveyor.com/ | F2 |
| **Solar Pathfinder** | Pago: kit (unidad + trípode + estuche) US$299–349 según la página del fabricante [23] | Instrumento físico de reflexión que muestra las sombras de todo el año sobre un diagrama solar; funciona con cielo nublado | Intermedio | Sí (usar diagrama de latitud ≈ 10–11° N ⚠️) | https://solarpathfinder.com/ (el sitio bloqueó la consulta automática) | F2 (opcional; un instalador puede tenerlo) |
| **PVGIS (horizonte)** | Gratis | Perfil de horizonte por relieve (DEM) y carga de horizonte propio (CSV) | Intermedio | Sí; en Sabanalarga el relieve lejano casi no sombrea, lo crítico son obstáculos cercanos | https://re.jrc.ec.europa.eu/pvg_tools/es/ | F2, F4 |

### 1.4 Diseño eléctrico (strings, inversor, cables) — calculadoras de fabricantes

| Herramienta | Gratis / pago (precio) | Qué hace | Nivel | ¿Sirve para Colombia? | URL | Fase |
|---|---|---|---|---|---|---|
| **Huawei SmartDesign 2.0** (portal FusionSolar) | ⚠️ Gratis según reseña de terceros; requiere cuenta FusionSolar (instalador) [24] | Diseño del sistema con equipos Huawei: disposición, strings, reporte | Intermedio | Sí, si el inversor es Huawei; sólo equipos Huawei | https://eu5.smartdesign.huawei.com/ (servidor EU; ⚠️ verificar servidor para Latinoamérica) | F5 |
| **SMA Sunny Design (Web)** | ⚠️ Gratuito con registro (versiones anteriores eran gratuitas; no confirmado en sitio) [25] | Propone inversor y strings, **dimensiona cables**, estima **autoconsumo y baterías** | Intermedio | Sí (con equipos SMA) | https://www.sunnydesignweb.com/ | F5, F6 |
| **Fronius Solar.creator** | **Gratis** (Fronius lo describe como herramienta online gratuita) [26] | Configuración con componentes Fronius compatibles, conexión a base meteorológica, exporta configuraciones | Intermedio | Sí (con equipos Fronius) | https://www.fronius.com/en/solar-energy/solar-solutions/apps-software/solar-creator · https://creator.fronius.com/ | F5 |
| **GoodWe Designer** | Gratis (anunciado como gratuito en oct–nov 2024) [27][28] | Planeación 3D web, simulación, análisis de sombras, viabilidad financiera; login con cuenta SEMS | Intermedio | Sí (con equipos GoodWe) | https://en.goodwe.com/ (⚠️ URL directa de la herramienta no confirmada) | F3–F5 |
| **Growatt** | ⚠️ No se encontró herramienta oficial de diseño de strings | — | — | — | https://www.growatt.com/ | — |
| **Deye Assisted Design** (calculadora de strings) | ⚠️ Precio no indicado (acceso web abierto) | Ingresa datos del inversor (MPPT, Vmáx, rango) y del módulo (Voc, Vmp, coef. de Voc, **temperatura mínima en 30 años**) y propone la conexión [29] | Intermedio | Sí (inversores Deye, muy comunes en híbridos) | https://www.deyeinverter.com/deye-assisted-design/ | F5 |
| **Deye – calculadora de sistemas híbridos** | ⚠️ | Dimensionamiento de sistemas híbridos (enlazada desde Deye; sitio de Brasil, en portugués) [29] | Intermedio | ⚠️ | https://calculadora.app.deyeinversores.com.br/pt-BR | F6 |
| **Victron MPPT Calculator** | Gratis | Verifica compatibilidad paneles ↔ controlador MPPT Victron (Voc a baja temperatura, corriente) ⚠️ (la página no cargó el contenido en la consulta automática) [30] | Intermedio | Sí (sistemas off-grid/híbridos Victron) | https://www.victronenergy.com/mppt-calculator | F5, F6 |
| **Victron Toolkit (app)** | Gratis, código abierto [31] | **Caída de tensión / sección de cable**, derrateo por temperatura de inversores/cargadores, códigos de error | Principiante | Sí | https://www.victronenergy.com/blog/2024/09/04/introducing-the-victron-toolkit-app/ (iOS/Android) | F5 |
| **Calculadoras de caída de tensión genéricas** (Southwire, Calculator.net) | Gratis | Caída de tensión por calibre AWG, longitud y corriente | Principiante | Sí (Colombia usa calibres AWG en NTC 2050 ⚠️); verificar límites con RETIE/NTC 2050 | https://www.southwire.com/calculator-vdrop · https://www.calculator.net/voltage-drop-calculator.html | F5 |

### 1.5 Baterías

| Herramienta | Gratis / pago | Qué hace | Nivel | URL | Fase |
|---|---|---|---|---|---|
| **SAM** | Gratis | Simula batería detrás del medidor con perfil de carga y tarifa | Intermedio | https://sam.nlr.gov/ | F6 |
| **PVGIS – sistema aislado** | Gratis | Estima días con batería llena/vacía para un consumo diario dado | Principiante | https://re.jrc.ec.europa.eu/pvg_tools/es/ | F6 |
| **SMA Sunny Design / Deye calculadora híbrida / Victron** | Gratis ⚠️ | Dimensionamiento con equipos de la marca | Intermedio | ver tabla 1.4 | F6 |
| **HOMER Pro** | Pago (desde US$1 575/año) | Optimización económica FV+batería+generador | Pro | https://homerenergy.com/homer-pro | F6 |
| ⚠️ Calculadora independiente de baterías | — | No se verificó ninguna calculadora independiente confiable; para una casa basta una **hoja de cálculo** (kWh de cargas críticas × horas de respaldo ÷ profundidad de descarga ÷ eficiencia) | Principiante | — | F6 |

### 1.6 Herramientas y trámites colombianos

| Herramienta | Gratis / pago | Qué hace | ¿Es simulador? | URL | Fase |
|---|---|---|---|---|---|
| **UPME – plataforma de registro Resolución CREG 174 de 2021** (Bizagi) | Gratis | Radicación y seguimiento de solicitudes de autogeneración (AGPE) y generación distribuida: completitud, estudios de conexión, visita técnica, entrada en operación (manual de usuario de marzo 2026) [32] | **No** (trámite) | https://automatizacion-upme.bizagi.com/ | F7 |
| **Air-e – Autogeneración y Generación Distribuida** | Gratis | Clasificación AGPE (≤ 1 MW), **consulta de disponibilidad de red**, cartilla/guía, manual de radicación, formularios, requisitos del estudio de conexión [33] | **No** (no se encontró calculadora) | https://www.air-e.com/autogeneracion | F7 |
| **Celsia – "Cotiza tu sistema solar"** | Gratis (cotización comercial) | Formulario de cotización (lista de departamentos incluye Atlántico); financiación hasta 8 años [34] | No (cotizador comercial) | https://www.celsia.com/es/retail-solar/ | F7 (para comparar ofertas) |
| **"Simulador de autogeneración UPME"** | — | ⚠️ **No se encontró** un simulador oficial de la UPME para dimensionar sistemas solares en la búsqueda de 2026-10 | — | — | — |
| **Simulador web UNAD (colombiarenovable.ga)** | Gratis (académico, 2020) | Factibilidad on-grid a partir de ubicación y factura [35] | Sí | ⚠️ dominio **no responde** (2026-10) | — |
| **MinAmbiente – calculadora de carbono, módulo autogeneración** | Gratis | Proyección de escenarios de emisiones; **no** es para dimensionar una casa [36] | No | https://calculadoracarbono.minambiente.gov.co/ | — |
| Enel Colombia / Air-e (calculadoras para hogares) | — | ⚠️ No se encontró calculadora solar pública de Enel ni de Air-e para el Atlántico | — | — | — |

---

## 2. ¿Cuál usar en cada momento? (resumen práctico para el propietario)

| Paso | Herramienta gratuita recomendada | Alternativa / validación |
|---|---|---|
| F0 — Consumo | Hoja de cálculo con 12 facturas de Air-e | — |
| F1 — Recurso | **Global Solar Atlas** (PVOUT) | PVGIS, PVWatts, NASA POWER; validar contra IDEAM Repelón (ver `01-recurso-solar-y-clima/fuentes-de-datos-radiacion.md`) |
| F2 — Techo y sombras | **Google Earth Pro** + cinta métrica + **SunCalc** + app de brújula/inclinómetro | Sun Seeker (pago), SketchUp |
| F3 — Prediseño | Cálculo a mano (kWh/año ÷ kWh/kWp) + **OpenSolar** o PVWatts | Global Solar Atlas |
| F4 — Simulación | **PVGIS** (ERA5 y NSRDB v5.2) + **PVWatts** (NSRDB) | SAM (gratis, detallado); PVsyst (lo usa el instalador) |
| F5 — Strings y cables | Calculadora del **fabricante del inversor elegido** + **Victron Toolkit** (caída de tensión) | Verificación manual con fichas técnicas |
| F6 — Baterías | SAM o PVGIS aislado + hoja de cálculo | HOMER Pro (sólo si se evalúa off-grid serio) |
| F7 — Cotización / trámite | Air-e (disponibilidad de red), plataforma UPME Res. 174 | Comparar ≥ 3 cotizaciones (Celsia u otros instaladores) |

---

## Referencias (consultadas 2026-10-28)

- [1] DOE — *Energy Department Renames NREL "National Lab of the Rockies"*. https://www.energy.gov/eere/articles/energy-department-renames-nrel-national-lab-rockies
- [2] PVWatts Calculator (NLR), versión web 8.7.4 / API 8.5. https://pvwatts.nlr.gov/
- [3] SAM — System Advisor Model (NLR). https://sam.nlr.gov/
- [4] Global Solar Atlas — punto del proyecto. https://globalsolaratlas.info/detail?c=10.632,-74.921,11
- [5] JRC — PVGIS user manual. https://joint-research-centre.ec.europa.eu/photovoltaic-geographical-information-system-pvgis/getting-started-pvgis/pvgis-user-manual_en
- [6] PVGIS API v5.3 / v5.2 — consulta del sitio (ver `01-recurso-solar-y-clima/fuentes-de-datos-radiacion.md`). https://re.jrc.ec.europa.eu/api/v5_3/
- [7] PVWatts v8 API — consulta del sitio. https://developer.nlr.gov/api/pvwatts/v8.json
- [8] PVsyst — página de producto PVsyst 8 (precio, prueba, bases meteorológicas). https://www.pvsyst.com/en/products/pvsyst/
- [9] pvlib-python — documentación (licencia BSD 3-clause). https://pvlib-python.readthedocs.io/en/stable/
- [10] NASA POWER — Methodology. https://power.larc.nasa.gov/docs/methodology/
- [11] HOMER Pro — precios. https://homerenergy.com/homer-pro/pricing
- [12] HOMER Grid — precios. https://homerenergy.com/homer-grid/pricing
- [13] OpenSolar (sitio en español). https://www.opensolar.com/es/
- [14] pv magazine Australia — financiación de OpenSolar (modelo de negocio). https://www.pv-magazine-australia.com/?p=7493
- [15] Aurora Solar — Pricing. https://aurorasolar.com/pricing/
- [16] HelioScope — Pricing. https://helioscope.aurorasolar.com/pricing/
- [17] SketchUp — Plans and pricing. https://sketchup.trimble.com/en/plans-and-pricing
- [18] SketchUcation (foro) — discusión de licencia Skelion. https://community.sketchucation.com/post/1482910
- [19] SurgePV — *SketchUp for solar* (reseña de un competidor). https://www.surgepv.com/reviews/sketchup-for-solar
- [20] Google Earth — Versions. https://www.google.com/earth/about/versions/
- [21] SunCalc. https://www.suncalc.org/
- [22] Apple App Store — Sun Seeker; App Pricing Lab. https://apps.apple.com/app/sun-seeker-tracker-surveyor/id330247123 ; https://apppricinglab.com/app/apple/330247123
- [23] Solar Pathfinder — *Solar Pathfinder with tripod and case* (extracto del buscador; el sitio bloquea consultas automáticas). https://solarpathfinder.com/product/solar-pathfinder-with-tripod-and-case/
- [24] Heaven Green Energy — *Huawei FusionSolar Design Review 2026* (terceros); documento Huawei con URL SmartDesign 2.0. https://www.heavengreenenergy.com/blog/huawei-fusionsolar-design-review
- [25] SMA America — *SMA releases online version of Sunny Design*; Solar Builder. https://www.sma-america.com/newsroom/news-details/sma-releases-online-version-of-sunny-design-for-pv-system-configuration ; https://solarbuildermag.com/news/sma-releases-online-version-of-sunny-design-software/
- [26] Fronius — *Solar.creator*. https://www.fronius.com/en/solar-energy/solar-solutions/apps-software/solar-creator
- [27] Energías Renovables (29 nov 2024) — *GoodWe lanza un software gratuito para diseño*. https://www.energias-renovables.com/fotovoltaica/goodwe-lanza-un-software-gratuito-para-diseo-20241129
- [28] Krannich Solar — Design tools (GoodWe Designer, KACO, KOSTAL). https://shop.krannich-solar.com/en-de/Services/Design-Tools
- [29] Deye — *Deye Assisted Design* (PV String Calculator). https://www.deyeinverter.com/deye-assisted-design/
- [30] Victron Energy — MPPT Calculator. https://www.victronenergy.com/mppt-calculator
- [31] Victron Energy — *Introducing the Victron Toolkit App* (sep 2024). https://www.victronenergy.com/blog/2024/09/04/introducing-the-victron-toolkit-app/
- [32] UPME — *Manual de usuario – Registro resolución 174* (24-03-2026). https://docs.upme.gov.co/Normatividad/Manual_de_usuario_resoluci%c3%b3n_174_24-03-2026.pdf
- [33] Air-e — Autogeneración y Generación Distribuida. https://www.air-e.com/autogeneracion
- [34] Celsia — Energía solar para hogares. https://www.celsia.com/es/soluciones-para-hogares-y-unidades-residenciales/energia-solar-para-hogares/
- [35] UNAD — *Manual técnico simulador web* (2020). https://repository.unad.edu.co/jspui/bitstream/10596/36629/3/ManualTecnicoSimuladorWeb.pdf
- [36] MinAmbiente — calculadora de carbono, módulo autogeneración solar. https://calculadoracarbono.minambiente.gov.co:443/assets/onepage/9.pdf
