# Fuentes de datos de radiación solar para Sabanalarga (10.632, -74.921)

> Objetivo: saber **qué base de datos usar, para qué, y cuánto confiar en ella** en Colombia.
> Las series numéricas (PVGIS, NASA POWER) las descarga otro proceso a `06-datos/`; aquí sólo se describen las fuentes y se reportan **valores resumen** útiles para validar.
> Fecha de consulta: **2026-10-28**. `[n]` = referencia al final. ⚠️ = por verificar.

---

## 1. Resumen ejecutivo

| Fuente | Tipo | Resolución espacial | Período | Costo | ¿Cubre Sabanalarga? | Uso recomendado en este proyecto |
|---|---|---|---|---|---|---|
| **IDEAM – estaciones con piranómetro** | Medición en tierra | Puntual (Repelón 27 km, Soledad 35 km, Las Flores 46 km) | ⚠️ período no indicado en el archivo ("actualizado a 2026") | Gratis | Indirectamente | **Validar** cualquier base satelital |
| **Atlas de Radiación Solar, UV y Ozono (IDEAM–UPME)** | Interpolación de estaciones + modelo Ångström | Mapas nacionales (resolución ⚠️) | Edición 2015–2018 | Gratis | Sí (mapa) | Contexto / orden de magnitud |
| **Global Solar Atlas** (Banco Mundial / Solargis) | Modelo satelital Solargis | ≈ 250 m (GHI/DNI) ⚠️ | "satregion"–2025 | Gratis | **Sí** | Primer número de producción (kWh/kWp) |
| **PVGIS 5.3** (JRC, Comisión Europea) | Reanálisis ERA5 (+ NSRDB en v5.2) | ERA5 ≈ 0.25° (~28 km); NSRDB ≈ 4 km | ERA5 2005–2023; NSRDB 2005–2015 | Gratis | **Sí, pero sólo ERA5 en v5.3** | Simulación horaria, TMY, horizonte |
| **NASA POWER** | Satélite CERES/SRB + reanálisis MERRA-2 | 1° × 1° radiación (~110 km); ½° × ⅝° meteo | Diario desde 1981 (meteo); horario desde 2001 | Gratis | Sí | Series largas, variabilidad interanual, temperatura |
| **NSRDB** (NLR, ex-NREL) | Satélite GOES (modelo PSM) | 4 km / 30 min (2 km en producto Full Disc) ⚠️ | 1998–2024 (agregado) ⚠️ | Gratis (API key) | **Sí** (cobertura −21° a +60° lat) | Serie satelital de mejor resolución gratuita |
| **Solcast** | Satélite (múltiples geoestacionarios) | ⚠️ | 2007–presente | Gratis limitado / pago | Sí | Pronóstico para el sistema ya instalado (cuenta "Home User") |
| **Meteonorm 9** (Meteotest) | Estaciones + satélite, interpolación | ⚠️ | Climatología 2001–2020 | Pago | Sí | TMY "estándar" dentro de PVsyst |
| **Solargis** (Prospect/Evaluate) | Modelo satelital propio | ≈ 90 m–250 m ⚠️ | 1999/2007–presente ⚠️ | Pago (suscripción) | Sí | Bancabilidad (proyectos grandes); no necesario aquí |

**Recomendación para una vivienda:** usar **Global Solar Atlas + PVGIS (ERA5 y, como contraste, NSRDB en v5.2)** para el diseño, **NASA POWER** para la variabilidad interanual y temperatura, y **validar contra la estación IDEAM de Repelón**. No hace falta pagar Meteonorm ni Solargis para un sistema residencial.

---

## 2. Valores resumen para el sitio (para validar las series que se descarguen)

### 2.1 Global Solar Atlas (consultado 2026-10-28)

Datos del servicio que alimenta la página `globalsolaratlas.info/detail?c=10.632,-74.921,11` (versión de datos 1.7; capas Solargis v2.2.68 actualizadas 2026-04-01; temperatura ERA5 1994–2025) [1]:

| Variable | Valor anual | Equivalente diario |
|---|---|---|
| **GHI** (irradiación global horizontal) | **1 951 kWh/m²·año** | **5.35 kWh/m²·día** |
| **DNI** (irradiación normal directa) | 1 447 kWh/m²·año | 3.96 kWh/m²·día |
| DIF (difusa horizontal) | 911 kWh/m²·año | 2.50 kWh/m²·día |
| **GTI a inclinación óptima** | 1 994 kWh/m²·año | 5.46 kWh/m²·día |
| **Inclinación óptima (OPTA)** | **13°** (hacia el ecuador, es decir, sur) | — |
| **PVOUT** (silicio cristalino, por kWp instalado) | **1 570 kWh/kWp·año** | **4.30 kWh/kWp·día** |
| Temperatura del aire | 27 °C | — |
| Elevación | 102 m | — |

Valores mensuales (Global Solar Atlas) [1] y comparación con piranómetros IDEAM [2]:

| Mes | GHI GSA (kWh/m²·mes) | GHI GSA (kWh/m²·día) | DNI (kWh/m²·mes) | DIF (kWh/m²·mes) | GTI opt (kWh/m²·mes) | PVOUT (kWh/kWp·mes) | PVOUT (kWh/kWp·día) | **IDEAM Repelón** GHI (kWh/m²·día) | **IDEAM Soledad** GHI (kWh/m²·día) |
|---|---|---|---|---|---|---|---|---|---|
| Ene | 172.8 | 5.58 | 179.6 | 60.7 | 195.7 | 153.5 | 4.95 | 5.59 | 5.72 |
| Feb | 169.2 | **6.04** | 157.3 | 63.1 | 183.7 | 142.6 | **5.09** | 5.76 | 5.95 |
| Mar | 181.9 | 5.87 | 129.5 | 85.8 | 186.5 | 144.8 | 4.67 | 5.80 | 5.64 |
| Abr | 164.5 | 5.48 | 101.0 | 85.7 | 161.0 | 125.8 | 4.19 | 5.75 | 5.09 |
| May | 162.8 | 5.25 | 99.8 | 84.6 | 153.9 | 121.4 | 3.92 | 4.96 | 4.28 |
| Jun | 160.0 | 5.33 | 105.5 | 78.7 | 148.4 | 117.3 | 3.91 | 5.49 | 4.72 |
| Jul | 172.1 | 5.55 | 116.6 | 81.9 | 160.8 | 126.7 | 4.09 | 5.58 | 4.86 |
| Ago | 171.7 | 5.54 | 112.6 | 82.3 | 165.6 | 130.5 | 4.21 | 5.48 | 4.89 |
| Sep | 157.1 | 5.24 | 100.4 | 78.3 | 158.3 | 125.0 | 4.17 | 5.31 | 4.95 |
| Oct | 148.8 | 4.80 | 97.2 | 77.3 | 156.4 | 124.4 | 4.01 | 4.60 | 4.29 |
| Nov | 137.2 | **4.57** | 101.5 | 69.2 | 150.3 | 120.0 | 4.00 | 4.72 | 4.43 |
| Dic | 153.3 | 4.94 | 145.3 | 63.5 | 173.9 | 138.0 | 4.45 | 5.33 | 5.38 |
| **Año** | **1 951** | **5.35** | 1 447 | 911 | 1 994 | **1 570** | **4.30** | **5.36** | **5.02** |

(Los valores diarios son cálculo propio = mensual / días del mes.)

**Lectura:** el GHI anual de Global Solar Atlas (5.35 kWh/m²·día) coincide casi exactamente con el promedio medido por el **IDEAM en Repelón (5.36)**, la estación con piranómetro más parecida a Sabanalarga (interior, 27 km al SO). Soledad (aeropuerto, más costero y nublado en mayo) mide 5.02. La estacionalidad también coincide: máximo en **febrero–marzo**, mínimo en **octubre–noviembre**.

### 2.2 PVGIS (API v5.3 y v5.2, consultado 2026-10-28)

Consulta de verificación (`PVcalc`, 1 kWp, pérdidas del sistema 14 %, ángulos óptimos, montaje libre) [3]:

| Versión / base de datos | Período | Inclinación óptima | Azimut óptimo (PVGIS: 0 = sur, negativo = hacia el este) | H(i) anual en el plano (kWh/m²) | E_y (kWh/kWp·año) | Desv. estándar interanual |
|---|---|---|---|---|---|---|
| **PVGIS 5.3 – PVGIS-ERA5** (por defecto) | 2005–2023 | 16° | −32° (SSE) | 2 000 | **1 476** | 46.6 kWh |
| PVGIS 5.2 – PVGIS-NSRDB | 2005–2015 | 15° | −26° (SSE) | 2 023 | **1 488** | 43.1 kWh |

Hallazgos importantes:
- En **PVGIS 5.3** la API sólo acepta `PVGIS-ERA5` o `PVGIS-SARAH3` para este punto, y **SARAH3 responde "fuera de cobertura"**; o sea, para Sabanalarga **la v5.3 usa reanálisis ERA5 (~25–28 km)**, no datos satelitales [3]. El manual de PVGIS lista NSRDB (2005–2015, ≈ 4 km) como base satelital por defecto de la v5.2 para las Américas al norte de 20° S [4]; la v5.3 (sept. 2024) actualizó SARAH-3 y ERA5(+Land) hasta 2023, sin mencionar NSRDB [5].
- Por eso conviene **descargar también la serie PVGIS-NSRDB desde la v5.2** (interfaz o API `api/v5_2/`) y compararla con ERA5.
- El **azimut óptimo hacia el SSE** (−26° a −32°) sugiere que las tardes son más nubladas que las mañanas (convección vespertina); Global Solar Atlas sólo reporta inclinación (13°). Para un techo real, la diferencia entre SSE y S es pequeña (verificar en simulación).
- PVGIS reporta pérdidas por temperatura y baja irradiancia de ≈ −12 % y pérdidas totales ≈ −26 % (incluyendo el 14 % de pérdidas de sistema supuesto) [3].
- E_y de PVGIS (≈ 1 476–1 488 kWh/kWp) es ≈ 5–6 % menor que el PVOUT de Global Solar Atlas (1 570), principalmente por el supuesto de pérdidas (14 % en PVGIS frente al modelo de pérdidas de Solargis ⚠️).

### 2.3 PVWatts v8 / NSRDB (consultado 2026-10-28)

Consulta a la API de PVWatts v8 (NLR) con 1 kWp, inclinación 13°, azimut 180° (sur), pérdidas 14 %, montaje fijo en techo abierto [37]:
- Archivo meteorológico asignado: **NSRDB PSM V3 GOES tmy-2020 3.2.0**, celda en 10.650 N, −74.940 O (a 2.9 km del sitio, elev. 66 m), ubicada por la API en "Atlántico, Colombia".
- Irradiación en el plano del arreglo: **5.63 kWh/m²·día** (≈ 2 056 kWh/m²·año).
- Producción AC: **≈ 1 430 kWh/kWp·año**.
→ Confirma que **NSRDB sí cubre Sabanalarga** con un TMY satelital de alta resolución y que PVWatts funciona para el sitio. El valor de producción es algo menor que PVGIS (≈ 1 476–1 488) y GSA (1 570) por diferencias de modelo (pérdidas, temperatura, inversor).

### 2.4 Otras referencias de orden de magnitud
- **Weather Spark** (MERRA-2): energía solar incidente diaria de 6.2 kWh/m² (mar) a 3.4 kWh/m² (oct), promedio ≈ 4.6 kWh/m²·día (cálculo propio) [6]. **Subestima ≈ 13 %** frente a IDEAM Repelón; no usar para dimensionar.
- **MinAmbiente (calculadora de carbono, módulo autogeneración):** valores promedio diarios mensuales de radiación en el país entre 4 y 6 kWh/m²·día [7] (contexto nacional).
- **IDEAM, mapa "Radiación global – promedio anual del acumulado diario" (promedios climatológicos actualizados 2024)**, leyenda en bandas de 0.5 kWh/m²·día [8].

---

## 3. Fichas por fuente

### 3.1 Atlas de Radiación Solar, Ultravioleta y Ozono de Colombia (IDEAM – UPME)
- **Qué es:** atlas nacional oficial con mapas mensuales y anual de irradiación global horizontal media diaria (kWh/m²·día), además de brillo solar, UV y ozono [9][10].
- **Ediciones:**
  - 2005 (UPME–IDEAM): primera versión con datos IDEAM 1980–1990 de 203 estaciones; segunda con ≈ 600 estaciones 1991–2002 [11].
  - Edición nueva (lanzamiento 2017–2018, desarrollo 2015–2018): seleccionó **149 estaciones IDEAM y 91 de otras entidades (≈ 240 sensores)** para los mapas de radiación; convierte brillo solar en radiación con el modelo **Ångström–Prescott** [10].
- **Resolución:** mapas interpolados nacionales; ⚠️ resolución de celda no confirmada.
- **Acceso:** visor/atlas interactivo del IDEAM (`atlas.ideam.gov.co`, ⚠️ no respondió desde este entorno); mapas PDF y Excel en `bart.ideam.gov.co` [2][8]; PDF de la edición 2005 en la hemeroteca UPME [11].
- **Validez:** es la referencia oficial y está anclada en estaciones colombianas, pero la densidad de piranómetros en el Caribe es baja y los mapas suavizan la variación local. Útil para **contexto y para el informe de factibilidad**; para simular hora a hora se necesitan series (PVGIS/NSRDB/NASA).
- **Datos en tierra relevantes para este proyecto** (archivo IDEAM *Promedios climatológicos de radiación global, actualizado a 2026*, en Wh/m²·día) [2]: Repelón (automática, 10 m, 10.49 N −75.13), Aeropuerto Ernesto Cortissoz (automática, 14 m), Las Flores–Barranquilla (automática, 8 m), Aeropuerto Rafael Núñez–Cartagena (convencional). ⚠️ El archivo no indica el período de cada estación.

### 3.2 Global Solar Atlas (GSA) – Banco Mundial / ESMAP / Solargis
- **Qué es:** atlas gratuito mundial con GHI, DNI, DIF, GTI, inclinación óptima, temperatura y **PVOUT (producción específica, kWh/kWp)** [1][12].
- **Datos:** modelo satelital Solargis (versión 2.2.68 en 2026), temperatura ERA5 (1994–2025), elevación SRTM [1]. El período satelital es "satregion"–2025 (es decir, desde el inicio de los datos satelitales disponibles para la región) ⚠️ (inicio exacto para las Américas no confirmado).
- **Resolución:** ≈ 9 arcosegundos (~250 m) para las capas de irradiación ⚠️ (según documentación general del GSA, no verificada en esta consulta).
- **Acceso:** web interactiva (clic en el mapa → "Site data"), descarga de capas GIS en energydata.info [12], informe PDF del sitio.
- **Validez para Colombia:** Solargis valida su modelo contra estaciones de alta calidad en todo el mundo [13]; en este proyecto el GHI del GSA coincide a < 1 % con el promedio IDEAM Repelón (sección 2.1). Limitación: entrega **promedios de largo plazo**, no series horarias (para eso: Solargis pago, o PVGIS/NSRDB gratis).

### 3.3 PVGIS (Photovoltaic Geographical Information System) – JRC, Comisión Europea
- **Qué es:** herramienta web y API gratuita que estima producción FV conectada a red y aislada, entrega series horarias, TMY, datos mensuales y perfil de horizonte (DEM) [4].
- **Bases de radiación (manual PVGIS 5):** SARAH3 (2005–2023, ~5 km; Europa, África, Asia, parte de Sudamérica), SARAH2 (2005–2020), **NSRDB (2005–2015, ~4 km, por defecto en v5.2 para las Américas al norte de 20° S)**, **ERA5 (2005–2023, ~0.25°, mundial)** [4]. La v5.3 es la versión de producción desde septiembre de 2024 (SARAH-3, ERA5+Land, datos hasta 2023) [5].
- **Para Sabanalarga:** en v5.3 **sólo ERA5** (verificado en la API) [3]. NSRDB disponible en v5.2.
- **Temperatura y viento:** de reanálisis (ERA5) [4].
- **Acceso:** https://re.jrc.ec.europa.eu/pvg_tools/es/ (interfaz en español) y API `https://re.jrc.ec.europa.eu/api/v5_3/` (y `v5_2`).
- **Validez para Colombia:** ERA5 tiende a errores mayores que los productos satelitales en zonas nubosas tropicales (hallazgo general en validaciones globales: en GHI horario, ERA5 y MERRA-2 tienen errores RMS mayores que productos satelitales como CAMS) [14]. Un trabajo de maestría de la U. Nacional (Zuluaga, 2022) validó ERA5-Land con estaciones horarias del IDEAM y encontró menor desempeño en zonas de topografía compleja y en temporadas muy nubosas/lluviosas [15]. Sabanalarga es plana, lo que favorece a ERA5; aun así, **contrastar con NSRDB y con IDEAM**.
- Nota: un trabajo mexicano (ANES 2022) compara específicamente NSRDB vs ERA5 dentro de PVGIS [16] — útil como metodología.

### 3.4 NASA POWER (Prediction Of Worldwide Energy Resources) – NASA LaRC
- **Qué es:** datos meteorológicos y solares globales gratuitos, orientados a energía renovable, edificaciones y agricultura [17].
- **Fuentes:** flujos de energía de CERES SYN1deg, FLASHFlux y GEWEX SRB R4-IP; meteorología de MERRA-2 (1981 → hasta pocos meses antes del presente) y GEOS (período más reciente) [17].
- **Resolución:** radiación **1° × 1°** (≈ 110 km); meteorología ½° × ⅝° [17]. Datos horarios desde 2001 (según presentación NASA 2021) [18].
- **Acceso:** Data Access Viewer (https://power.larc.nasa.gov/data-access-viewer/) y API REST; ⚠️ la página de Earthdata indica que algunas funciones/descargas pueden requerir Earthdata Login [19].
- **Validez para Colombia:** la celda de 1° mezcla costa, ciénagas y tierra firme → sirve para **tendencias y variabilidad interanual**, no para el valor absoluto fino. NASA valida contra BSRN/GSOD (cifras de error no extraídas ⚠️) [17][20]. Una tesis de la U. del Rosario comparó el Performance Ratio de una planta FV en Colombia calculado con NASA (82.6 %), PVGIS (81.2 %), Meteonorm (80.9 %) y datos in situ (80 %) ⚠️ (datos tomados del resumen; repositorio no disponible al consultar) [21].

### 3.5 NSRDB (National Solar Radiation Database) – NLR (antes NREL)
- **Cambio de nombre:** el DOE renombró a NREL como **National Laboratory of the Rockies (NLR)** el 1 de diciembre de 2025 [22]; los sitios ahora funcionan bajo `*.nlr.gov` (p. ej., https://nsrdb.nlr.gov/data-viewer). Los dominios `*.nrel.gov` no respondieron desde este entorno ⚠️.
- **Cobertura:** el producto principal (PSM, imágenes GOES Este/Oeste) cubre ≈ **−21° a +60° de latitud** y −180° a −22.5° de longitud, sólo tierra y ≈ 5 píxeles mar adentro [23] → **Colombia está cubierta**.
- **Resolución / período:** producto agregado GOES ≈ 4 km, 1998–2024; producto **GOES Full Disc ≈ 2 km, 2018–2024** con pasos de 10/30/60 min ⚠️ (fuente secundaria: documentación de H2Integrate) [24]. Desde 2018, resolución temporal de 10 min para Centro y Sudamérica [25].
- **Acceso:** NSRDB Data Viewer; API con clave gratuita (developer.nlr.gov); también vía PVGIS v5.2 (2005–2015) y SAM/PVWatts.
- **Validez para Colombia:** el informe de ISES 2025 indica que el desempeño al sur de 20° S no había sido evaluado [25]; ⚠️ no se encontró una validación publicada específica del Caribe colombiano. Algunas evaluaciones globales reportan sesgos positivos de NSRDB en ciertas estaciones BSRN [14]. **Usarla como contraste satelital de ERA5.**

### 3.6 Solcast
- **Qué es:** proveedor de datos satelitales históricos, TMY y pronósticos (origen australiano).
- **Período:** histórico desde **2007** hasta ≈ 7 días antes del presente [26].
- **Acceso gratuito:**
  - Cuenta **"Home User"**: pronósticos gratuitos para el sistema solar de techo propio, uso personal no comercial; no incluye datos de radiación ni los últimos 3 meses [27].
  - Evaluación comercial: hasta **15 solicitudes de series históricas (15 sitio-mes)** gratis [26]; programa de datos para investigadores [28].
- **Validez:** ⚠️ no se encontró validación pública en Colombia. **Uso recomendado:** una vez instalado el sistema, para comparar producción real vs pronóstico.

### 3.7 Meteonorm (Meteotest, Suiza)
- **Qué es:** generador de años meteorológicos típicos a partir de ≈ 8 000 estaciones + satélites, integrado en PVsyst y otras herramientas [29][30].
- **Versión 9:** nuevo período climático principal **2001–2020** para radiación y temperatura; satélites MSG 2008–2023 e IODC, Himawari y **GOES-E 2018–2023**; pasó de aplicación de escritorio a aplicación web [29]. La versión 8 (1996–2015 para radiación) ya no se vende [29][30].
- **Costo:** ⚠️ precio v9 no encontrado. (Un distribuidor listaba la v8 a 709 € + IVA; dato desactualizado [31].)
- **Validez para Colombia:** depende de la interpolación de estaciones; en el Caribe colombiano las estaciones con radiación son pocas, así que el componente satelital pesa más. Útil si el instalador trabaja en PVsyst.

### 3.8 Solargis (Prospect / Evaluate / Analyst)
- **Qué es:** el modelo satelital que alimenta el Global Solar Atlas; ofrece versiones pagas con series temporales y TMY [32].
- **Productos:** *Prospect* (promedios de largo plazo, para prefactibilidad), *Evaluate* (series y TMY con incertidumbre P90). Los valores de Prospect pueden diferir hasta ±1 % del GHI anual de Evaluate [32]. Mejoras en las Américas usando GOES-R desde 2018 [33].
- **Costo:** ⚠️ una reseña de terceros (2026) cita ≈ 2 400 €/año (Prospect Basic) a 12 000 € (Evaluate) — no verificado en el sitio oficial [34].
- **Validez:** Solargis publica validaciones con estaciones de alta precisión [13]. Para una vivienda **no se justifica pagar**: el GSA ya entrega su valor de largo plazo.

---

## 4. Validaciones publicadas en Colombia (lo que se encontró)

| Estudio | Qué compara | Resultado relevante | Referencia |
|---|---|---|---|
| Zuluaga (U. Nacional, Medellín, 2022) — *Variabilidad espacial y temporal de la radiación solar en Colombia 1997–2019* | ERA5-Land vs estaciones horarias IDEAM | Desempeño menor en topografía compleja y en temporadas muy nubosas/lluviosas (métricas numéricas no visibles en el resumen ⚠️) | [15] |
| Tesis U. Nacional — Orinoquía | Radiación estimada con imágenes satelitales vs estación La Libertad | Error 2.4 % en el promedio semestral, hasta 13 % en promedios mensuales, R² = 0.7 diario | [35] |
| Tesis U. del Rosario | PR de planta FV con NASA, PVGIS, Meteonorm vs in situ | NASA 82.6 %, PVGIS 81.2 %, Meteonorm 80.9 %, in situ 80 % ⚠️ | [21] |
| Cano et al. (2022), Valle de Aburrá | ERA5 por fase ENSO | ≈ +10 % de radiación en El Niño (dic–feb) | [36] |
| **Comparación propia (este repositorio)** | Global Solar Atlas vs IDEAM Repelón y Soledad | GHI anual GSA 5.35 vs Repelón 5.36 (−0.2 %) y Soledad 5.02 (+6.6 %) kWh/m²·día | Sección 2.1 |

⚠️ **Vacío:** no se encontró un estudio publicado que valide PVGIS-ERA5, NSRDB o NASA POWER específicamente contra piranómetros del departamento del Atlántico. La comparación propia de la sección 2.1 es el mejor indicador disponible. Recomendación para `06-datos`: comparar mes a mes las series descargadas contra la columna "IDEAM Repelón".

---

## Referencias (consultadas 2026-10-28)

- [1] Global Solar Atlas 2.0 — punto 10.632, -74.921. Página: https://globalsolaratlas.info/detail?c=10.632,-74.921,11 ; servicio de datos: https://api.globalsolaratlas.info/data/lta?loc=10.632,-74.921
- [2] IDEAM — *Promedios climatológicos de radiación global, actualizado a 2026* (xlsx, Wh/m²·día). https://bart.ideam.gov.co/meteorologia/CLIMA/CLIMATOLOGIA/PROMEDIOS%20CLIMATOLOGICOS/1.%20RADIACION%20GLOBAL/
- [3] PVGIS API — `PVcalc` para lat 10.632, lon -74.921 (v5.3 por defecto; v5.2 con `raddatabase=PVGIS-NSRDB`). https://re.jrc.ec.europa.eu/api/v5_3/PVcalc?lat=10.632&lon=-74.921&peakpower=1&loss=14&optimalangles=1&outputformat=json
- [4] JRC — *PVGIS user manual*. https://joint-research-centre.ec.europa.eu/photovoltaic-geographical-information-system-pvgis/getting-started-pvgis/pvgis-user-manual_en
- [5] JRC — *PVGIS 5.3* (notas de versión). https://joint-research-centre.ec.europa.eu/photovoltaic-geographical-information-system-pvgis/pvgis-releases/pvgis-53_en
- [6] Weather Spark — Sabanalarga, Atlántico. https://es.weatherspark.com/y/23464/Clima-promedio-en-Sabanalarga-Colombia-durante-todo-el-año
- [7] MinAmbiente — Calculadora de carbono, módulo autogeneración solar. https://calculadoracarbono.minambiente.gov.co:443/assets/onepage/9.pdf
- [8] IDEAM — mapa *Radiación global, promedio anual del acumulado diario* (promedios actualizados 2024). https://bart.ideam.gov.co/meteorologia/CLIMA/CLIMATOLOGIA/PROMEDIOS%20CLIMATOLOGICOS/1.%20RADIACION%20GLOBAL/MAPAS/PROMEDIOS%20CLIMATOL%c3%93GICOS%20ACTUALIZADOS%202024/MAPAS%20PDF/Radiaci%c3%b3n%20global_Promedio%20Anual%20del%20Acumulado%20Diario.pdf
- [9] MinAmbiente — lanzamiento del *Atlas de Radiación Solar, Ultravioleta y Ozono de Colombia*. https://www.minambiente.gov.co/?p=33515
- [10] H. Benavides (IDEAM), presentación de lanzamiento del Atlas (ExpoSolar 2018; enlace devolvió 404 al abrirlo, datos del extracto del buscador ⚠️). https://feriaexposolar.com/wp-content/uploads/2018/06/Henry-Benavides-Lanzamiento-ATLAS-de-Radiaci%C3%B3n.pdf
- [11] UPME–IDEAM — *Atlas de Radiación Solar de Colombia* (2005). https://www1.upme.gov.co/Hemeroteca/Impresos/Atlas_Radiacion_Solar_2005/0-Primera_Parte.pdf
- [12] energydata.info — *World – high resolution solar resource GIS data (Global Solar Atlas)*. https://energydata.info/dataset/dashboard/world-high-resolution-solar-resource-ghi-dif-gti-dni-gis-data-global-solar-atlas
- [13] Solargis KB — *Validation of solar irradiance data*. https://kb.solargis.com/docs/validation-of-solar-irradiance-data
- [14] *Worldwide validation of 8 satellite-derived and reanalysis solar radiation products* (57 estaciones BSRN; RMS horario GHI de 17.3 % CAMS a 38.9 % MERRA-2). https://www.researchgate.net/publication/340920559 ; y *Evaluation of global horizontal irradiance estimates from ERA5 and COSMO-REA6*, Solar Energy (2018). https://www.sciencedirect.com/science/article/pii/S0038092X18301920
- [15] Zuluaga Pulgarín, D. P. (2022). *Variabilidad espacial y temporal de la radiación solar en Colombia 1997–2019*. U. Nacional, Medellín. https://repositorio.unal.edu.co/handle/unal/83296
- [16] ANES 2022 — *Estimación de recurso solar usando PVGIS: análisis comparativo entre NSRDB y ERA5*. https://repositorio-energia.conahcyt.mx/jspui/bitstream/1000/169/1/
- [17] NASA POWER — *Methodology*. https://power.larc.nasa.gov/docs/methodology/
- [18] Stackhouse et al., Solar World Congress 2021 (NASA NTRS). https://ntrs.nasa.gov/api/citations/20210022944/downloads/SolarWorldCongress_2021_Stackhouse_final.pdf
- [19] NASA Earthdata — *POWER Data Access Viewer*. https://www.earthdata.nasa.gov/data/tools/power-dav
- [20] NASA NTRS — póster del proyecto POWER (validación BSRN/GSOD). https://ntrs.nasa.gov/citations/20260004310
- [21] Universidad del Rosario — tesis sobre PR de planta FV con NASA/PVGIS/Meteonorm (repositorio devolvió 503; datos del resumen ⚠️). https://repository.urosario.edu.co/bitstreams/0c1c8edf-00f6-4dbb-a4ff-bd15096ace78/download
- [22] DOE — *Energy Department Renames NREL "National Lab of the Rockies"* (1 dic 2025). https://www.energy.gov/eere/articles/energy-department-renames-nrel-national-lab-rockies
- [23] *Unofficial PSM3 user guide — Spatial extent*. https://unofficial-psm3-userguide.readthedocs.io/en/latest/pages/spatial-extent.html
- [24] H2Integrate docs — *Solar Resource: GOES PSM v4*. https://h2integrate.readthedocs.io/en/latest/resource/goes_solar_v4_api.html
- [25] Silvero et al., ISES SWC 2025. https://proceedings.ises.org/conference/swc2025/papers/swc2025-0053-Silvero.pdf
- [26] Solcast — *Historical time series pricing*. https://solcast.com/pricing/historical-time-series
- [27] Solcast KB — *Free forecasting data for your home rooftop solar system*. https://kb.solcast.com.au/free-forecasting-data-for-your-home-rooftop-solar-system
- [28] Solcast — *Solar radiation data for researchers*. https://solcast.com/data-for-researchers
- [29] Meteonorm docs — *General: What's new (v9)*. https://docs.meteonorm.com/knowledge/climate/general-whats_new
- [30] Meteonorm — *Version 8*. https://meteonorm.com/en/meteonorm-version-8
- [31] AIGUASOL — *METEONORM 8* (precio de distribuidor, desactualizado). https://aiguasol.coop/?p=10724
- [32] Solargis — *Differences between Climdata and Prospect*. https://solargis.com/technology/documentation/product-guides/time-series-and-tmy-data/differences-between-climdata-and-prospect
- [33] Solargis — *Release notes* (GOES-R, 2019). https://solargis.com/technology/release-notes?page=10
- [34] Heaven Green Energy — *Solargis Review 2026* (fuente de terceros, posible sesgo comercial). https://www.heavengreenenergy.com/blog/solargis-review
- [35] U. Nacional — *Validación de la radiación solar en superficie para la región Orinoquía a partir de imágenes de satélite*. https://repositorio.unal.edu.co/items/5f914baa-bf0a-434b-af67-e208f213029b/full
- [36] Cano et al. (2022), Rev. Acad. Colomb. Cienc. 46(179). https://raccefyn.co/index.php/raccefyn/article/view/estimacion_pronostico_de_radiacion_solar_en_el_vall_aburra_colom
- [37] PVWatts v8 API (NLR, antes NREL) — consulta con `DEMO_KEY` para lat 10.632, lon -74.921. Endpoint: https://developer.nlr.gov/api/pvwatts/v8.json ; calculadora web: https://pvwatts.nlr.gov/
