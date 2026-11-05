# Contexto geográfico y climático de Sabanalarga (Atlántico)

> Sitio de referencia del proyecto: **lat 10.632, lon -74.921** (cabecera urbana de Sabanalarga, Atlántico, Colombia).
> Fecha de consulta de todas las fuentes: **2026-10** (salvo que se indique otra).
> Convención: los números entre corchetes `[n]` remiten a la sección **Referencias** al final del archivo. ⚠️ = dato no verificado o con contradicciones entre fuentes.

---

## 1. Resumen para el diseñador (lo esencial en 10 líneas)

| Parámetro | Valor de trabajo recomendado | Fuente principal |
|---|---|---|
| Altitud del sitio | ≈ 100 m s. n. m. (fuentes entre 87 y 102 m) | IDEAM estación Sabana Larga 100 m [1]; Global Solar Atlas 102 m [9]; Weather Spark 102 m [6] |
| Clima Köppen | **Aw** (tropical de sabana, invierno seco) | [3] |
| Temperatura media anual | ≈ 27.8–28.1 °C (estaciones IDEAM vecinas) | IDEAM normales 1991–2020 [1] |
| Máxima media del mes más cálido | 33.7 °C (Juan de Acosta, abr) a **36.2 °C** (Manatí, mar) | [1] |
| Mínima media del mes más fresco | ≈ 22.9–23.1 °C (ene) | [1] |
| Récord de máxima (región) | 39.8 °C (Aeropuerto E. Cortissoz, jun) | Wikipedia citando IDEAM [4] |
| Precipitación anual (estación en Sabanalarga) | **≈ 1 198 mm**, ≈ 75 días con lluvia ≥ 1 mm | IDEAM 29045000 [1] |
| Temporada seca | **dic–mar** (ene ≈ 10 mm, feb ≈ 5 mm); abril es transición | [1] |
| Humedad relativa media | ≈ 80–82 % (máx. oct–nov ≈ 84 %) | [1] |
| Brillo solar | 5.9 h/día (Manatí) a 7.1 h/día (Soledad) | [1] |
| Viento medio | 6.5 km/h (sep) a 13.5 km/h (mar); dominante N/NE (alisios) | Weather Spark (MERRA-2) [6]; Windfinder [7] |
| **Viento básico de diseño (NSR-10)** | **Zona 5: 36 m/s (130 km/h)** combinaciones B.2.3 / **46 m/s (165 km/h)** combinaciones B.2.4 — el sitio queda sobre el límite entre zonas 4 y 5; se recomienda usar zona 5 (conservador) | NSR-10 Fig. B.6.4-1 modificada por Decreto 1711 de 2021 [10] |
| Fase ENSO actual | **El Niño declarado por el IDEAM el 8 oct 2026**, con alta probabilidad de persistir hasta el 1er trimestre de 2027 | [13] |

---

## 2. Geografía

### 2.1 Ubicación y municipio
- **Municipio:** Sabanalarga, departamento del Atlántico, región Caribe colombiana. Coordenadas de la cabecera ≈ 10°37′48″N 74°55′25″O [2]. Nominatim/OpenStreetMap ubica el centroide administrativo en 10.6307, -74.9209 [5], prácticamente el punto de diseño.
- **Superficie:** ≈ 399 km² (Wikipedia ES) [2]; Wikipedia EN da 395.9 km² de municipio y 7.36 km² de área urbana [3].
- **Altitud:** las fuentes difieren: 87 m (Wikipedia EN) [3], 99 m (Wikipedia ES) [2], 100 m (estación IDEAM 29045000 "Sabana Larga – AUT", ubicada en 10.6367, -74.9189, a < 1 km del punto de diseño) [1], 102 m (Global Solar Atlas, modelo SRTM) [9] y 102 m (Weather Spark) [6]. **Usar 100 m.**
- **Población:**
  - 104 983 habitantes (78 819 urbanos), según la infobox de Wikipedia ES, que cita el Censo DANE 2018 ajustado ⚠️ (la infobox dice "2025" pero la nota remite al censo 2018) [2].
  - 100 049 habitantes (estimación 2020; 74 713 urbanos) según Wikipedia EN [3].
  - 105 157 habitantes en 2025 según Telencuestas, que dice citar proyecciones DANE ⚠️ (fuente secundaria, no es publicación directa del DANE) [16].

### 2.2 Distancias relevantes (calculadas en línea recta)
Cálculo propio con coordenadas de OpenStreetMap/Nominatim [5] (método: distancia sobre esfera, ±1 km):

| Referencia | Coordenadas | Distancia aprox. desde el sitio |
|---|---|---|
| Costa Caribe más cercana (Playa Mendoza – Tubará / Santa Verónica – Juan de Acosta) | 10.905, -75.037 / 10.883, -75.078 | **≈ 31–33 km al NNO/NO** |
| Puerto Colombia (costa) | 10.989, -74.955 | ≈ 40 km al N |
| Galerazamba (costa de Bolívar) | 10.790, -75.262 | ≈ 41 km al ONO |
| Barranquilla (centro) | ≈ 10.96, -74.80 | ≈ 39 km al NNE |
| Aeropuerto E. Cortissoz (estación IDEAM 29045190) | 10.918, -74.780 | ≈ 35 km al NNE [1] |
| Embalse del Guájaro (centro del espejo de agua) | 10.51, -75.03 [17] | ≈ 18 km al SO (Sabanalarga es municipio ribereño) |

> Nota: la instrucción inicial del proyecto suponía "≈ 40 km del mar"; con la geometría de la costa del Atlántico, la distancia mínima real está más cerca de **30–33 km** (hacia Tubará/Juan de Acosta). Para efectos de corrosión (ver `riesgos-ambientales-para-el-sistema.md`) no cambia la conclusión, pero conviene registrarlo.

### 2.3 Embalse del Guájaro
- Embalse/ciénaga de ≈ 160 km² y ≈ 400 hm³ de capacidad, en 10°31′N 75°02′O; municipios ribereños: Repelón, Manatí, **Sabanalarga** y Luruaco; recibe aguas del Canal del Dique (sector Las Compuertas) [17].
- Relevancia para el proyecto: fuente local de humedad; el sur del Atlántico (Manatí, Repelón, Sabanalarga) ha decretado calamidad pública por niveles altos del Canal del Dique (2022) [18]. Ver riesgos de inundación.

### 2.4 Contexto solar local
- El **Parque Solar Atlántico (Enel, 180 MW AC, 403 920 módulos, ≈ 415 ha)** está entre Sabanalarga y Usiacurí y ya entrega energía al SIN (nota de marzo de 2026) [19]. Esto confirma que el recurso solar local es de calidad "utility-scale".

---

## 3. Clima

### 3.1 Clasificación
- **Köppen Aw** (tropical seco / sabana con invierno seco) [2]. Climate-Data indica que el departamento del Atlántico está dominado por Aw [8].
- Régimen de lluvias **bimodal**: la segunda temporada (ago–nov) es la más intensa y coincide con la temporada de ciclones del Caribe [12].

### 3.2 Estaciones IDEAM disponibles (normales climatológicas estándar 1991–2020)

Fuente: archivo oficial IDEAM `Normales_Climatologicas_Estandar__1991-2020.xlsx` (cumplen directriz OMM N.º 1203 de 2017) [1].

| Código | Estación | Municipio | Categoría | Dist. al sitio | Variables con normal 1991–2020 |
|---|---|---|---|---|---|
| **29045000** | **Sabana Larga – AUT** | Sabanalarga | CP (climatológica principal) | **< 1 km** | Precipitación, días de lluvia (**no** tiene normal de temperatura publicada ⚠️) |
| 29040290 | Los Campanos | Sabanalarga | PM (pluviométrica) | ≈ 10 km | Precipitación |
| 29035080 | Normal Manatí | Manatí | CP | ≈ 20 km S | Temperatura, HR, brillo solar (106 meses, marca M10) |
| 29045110 | Juan de Acosta | Juan de Acosta | CO | ≈ 26 km NO | Temperatura, HR |
| 29035200 | Repelón – AUT | Repelón | CP | ≈ 27 km SO | T mínima, HR; **radiación global medida** (ver archivo de fuentes) |
| 29045190 | Aeropuerto Ernesto Cortissoz – AUT | Soledad | SP (sinóptica principal) | ≈ 35 km NNE | Todas (T, HR, brillo solar, evaporación) |

> **Conclusión:** Sí existe estación IDEAM en Sabanalarga (29045000), pero sólo tiene normal oficial de **precipitación**. Para temperatura se interpolan Manatí (interior, más cálida) y Juan de Acosta / Soledad (más cercanas a la costa, más frescas). Sabanalarga, a 100 m de altitud y 30+ km del mar, debería quedar **entre ambos grupos**.

### 3.3 Temperatura (°C) — normales IDEAM 1991–2020 [1]

**Temperatura máxima media**

| Estación | Ene | Feb | Mar | Abr | May | Jun | Jul | Ago | Sep | Oct | Nov | Dic | Anual* |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Normal Manatí (20 km S) | 35.5 | 36.0 | **36.2** | 35.7 | 34.5 | 34.5 | 34.6 | 34.5 | 33.7 | 33.2 | 33.2 | 34.2 | 34.7 |
| Juan de Acosta (26 km NO) | 32.5 | 33.0 | 33.3 | 33.7 | 33.1 | 33.0 | 33.1 | 33.1 | 32.6 | 31.8 | 31.8 | 32.2 | 32.7 |
| Aerop. E. Cortissoz (35 km NNE) | 31.6 | 31.8 | 32.4 | 33.4 | 33.5 | 33.3 | 33.1 | 33.5 | 33.3 | 32.8 | 32.4 | 32.1 | 32.8 |

\*Promedio aritmético de los 12 meses (cálculo propio; el archivo IDEAM trae la fórmula sin valor).

**Temperatura media**

| Estación | Ene | Feb | Mar | Abr | May | Jun | Jul | Ago | Sep | Oct | Nov | Dic | Anual |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Normal Manatí | 27.8 | 28.0 | 28.1 | 28.2 | 27.9 | 27.9 | 27.9 | 27.8 | 27.6 | 27.2 | 27.3 | 27.5 | 27.8 |
| Juan de Acosta | 27.7 | 27.8 | 28.1 | 28.5 | 28.4 | 28.3 | 28.3 | 28.3 | 28.0 | 27.7 | 27.7 | 27.8 | 28.1 |
| Aerop. E. Cortissoz | 28.5 | 28.7 | 29.1 | 29.9 | 30.0 | 29.9 | 29.8 | 29.9 | 29.7 | 29.1 | 29.1 | 29.0 | 29.4 ⚠️ |

⚠️ La media de 29.4 °C del aeropuerto es alta frente a (máx+mín)/2 ≈ 28.6 °C; puede deberse al método de cálculo (promedio de lecturas sinópticas). Se reporta tal como lo publica el IDEAM.

**Temperatura mínima media**

| Estación | Ene | Feb | Mar | Abr | May | Jun | Jul | Ago | Sep | Oct | Nov | Dic | Anual |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Normal Manatí | 22.9 | 23.4 | 23.9 | 24.5 | 24.4 | 24.5 | 24.3 | 24.3 | 24.1 | 23.9 | 23.9 | 23.4 | 24.0 |
| Juan de Acosta | 23.1 | 23.4 | 24.1 | 24.8 | 24.9 | 24.6 | 24.4 | 24.5 | 24.1 | 23.7 | 23.8 | 23.4 | 24.1 |
| Repelón – AUT | 22.9 | 23.4 | 23.7 | 24.5 | 24.7 | 24.7 | 24.3 | 24.6 | 24.4 | 24.2 | 24.2 | 23.7 | 24.1 |
| Aerop. E. Cortissoz | 23.8 | 24.1 | 24.4 | 25.0 | 25.1 | 25.0 | 24.8 | 24.8 | 24.3 | 24.1 | 24.3 | 24.4 | 24.5 |

**Extremos absolutos (Aeropuerto E. Cortissoz, 1991–2020):** récord de máxima 39.8 °C (junio); récord de mínima 14.9 °C (octubre) — tabla de Wikipedia que atribuye los datos al IDEAM [4]. ⚠️ No se encontraron extremos absolutos para Sabanalarga.

**Fuentes complementarias (modelos, no estaciones):**
- **Weather Spark** (reconstrucción con reanálisis MERRA-2 1980–2016, ponderando 75 % SKBQ Barranquilla y 25 % SKCG Cartagena): temperatura típica entre 23 °C y 34 °C, rara vez < 22 °C o > 36 °C; temporada calurosa 13 mar–9 may (abril, máx 34 °C / mín 25 °C); temporada "fresca" 1 oct–7 dic (máx < 32 °C) [6].
- **Global Solar Atlas** (ERA5, 1994–2025): temperatura del aire media anual **27 °C**; mensual de 26.0 °C (nov) a 27.8 °C (mar) [9].
- **Population Review** (normales 1970–2000): media anual 27.6 °C, ≈ 1 125 mm/año ⚠️ (sitio no oficial; no se pudo abrir la página, sólo el extracto del buscador) [15].

**Valores de diseño de temperatura recomendados para el FV** (para el cálculo de strings y pérdidas térmicas; ver flujo en `05-herramientas-de-diseno`):
- Temperatura mínima de diseño (para Voc máx.): usar **≈ 18 °C** como mínima absoluta conservadora (récords regionales de 18.0 °C en ene–feb y 14.9 °C excepcional en oct en Soledad [4]). ⚠️ Criterio de diseño propio, no norma.
- Temperatura máxima ambiente de diseño: **≈ 38–40 °C** (récord regional 39.8 °C [4]; Manatí con máximas medias de 36 °C en marzo [1]).

### 3.4 Precipitación y días de lluvia — estación IDEAM 29045000 Sabana Larga – AUT (1991–2020) [1]

| | Ene | Feb | Mar | Abr | May | Jun | Jul | Ago | Sep | Oct | Nov | Dic | **Anual** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Precipitación (mm) | 10.0 | 5.1 | 35.4 | 101.5 | 142.2 | 125.5 | 143.1 | 138.6 | 134.0 | **189.6** | 133.7 | 38.8 | **1 197.6** |
| Días con lluvia ≥ 1 mm | 1.2 | 0.7 | 2.3 | 6.7 | 8.8 | 8.3 | 8.1 | 9.0 | 9.8 | 9.9 | 7.7 | 2.8 | **75.3** |

(305 meses de datos, 85 % de cumplimiento.) Estación Los Campanos (Sabanalarga rural, 10 km SO): 1 528.5 mm/año, 54 días de lluvia [1].

**Temporadas:**
- **Seca principal:** diciembre (final) a marzo; enero–febrero prácticamente sin lluvia (≤ 1.2 días/mes). Es la temporada de **mayor radiación**.
- **Primera temporada de lluvias:** abril–junio (pico mayo).
- **"Veranillo de San Juan":** leve disminución en junio (125 mm), poco marcada en esta estación.
- **Segunda temporada de lluvias (la más intensa):** agosto–noviembre (pico octubre ≈ 190 mm). Coincide con la temporada de ciclones (1 jun–30 nov) [12].
- Weather Spark da temporada de lluvia 11 abr–23 dic y temporada seca 23 dic–11 abr; sus totales de lluvia (máx. 111 mm en oct) son menores que los del IDEAM porque Weather Spark reporta lluvia acumulada en ventana móvil de 31 días a partir de reanálisis [6]. **Usar IDEAM.**

### 3.5 Humedad relativa (%) — IDEAM 1991–2020 [1]

| Estación | Ene | Feb | Mar | Abr | May | Jun | Jul | Ago | Sep | Oct | Nov | Dic | Anual |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Normal Manatí | 81.3 | 79.9 | 79.6 | 79.8 | 82.0 | 81.7 | 82.2 | 82.0 | 83.1 | 83.6 | 83.7 | 82.4 | 81.8 |
| Juan de Acosta (M10) | 78.4 | 77.4 | 76.9 | 77.3 | 80.6 | 81.2 | 80.7 | 81.3 | 84.2 | 84.7 | 83.9 | 80.6 | 80.6 |
| Aerop. E. Cortissoz | 77.6 | 76.4 | 76.7 | 78.0 | 80.6 | 81.4 | 80.3 | 81.1 | 83.0 | 84.9 | 83.7 | 79.9 | 80.3 |

Weather Spark califica la humedad como "bochornosa u opresiva" prácticamente el 100 % del tiempo todo el año (punto de rocío alto) [6]. Implicación: condensación nocturna sobre módulos, ambiente favorable a corrosión y a crecimiento biológico en juntas/canaletas.

### 3.6 Brillo solar y evaporación — IDEAM 1991–2020 [1]

| Estación | Variable | Ene | Feb | Mar | Abr | May | Jun | Jul | Ago | Sep | Oct | Nov | Dic | Anual |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Normal Manatí (M10) | Brillo solar (h/día) | 7.9 | 7.1 | 6.0 | 5.6 | 5.1 | 5.4 | 6.7 | 6.2 | 4.6 | 4.8 | 5.3 | 6.6 | 5.9 |
| Aerop. E. Cortissoz | Brillo solar (h/día) | 9.1 | 8.9 | 7.8 | 6.9 | 6.1 | 6.7 | 7.2 | 6.7 | 5.7 | 5.4 | 6.2 | 7.9 | 7.1 |
| Aerop. E. Cortissoz (M10) | Evaporación (mm/día) | 5.5 | 6.2 | 6.6 | 6.2 | 5.3 | 5.0 | 5.3 | 5.5 | 4.6 | 4.1 | 3.9 | 4.4 | 5.2 |

Nubosidad (Weather Spark, MERRA-2): mes más despejado **enero** (cielo despejado/parcialmente nublado ≈ 50 % del tiempo); mes más nublado **septiembre** (nublado/mayormente nublado ≈ 95 % del tiempo) [6].

### 3.7 Viento: brisas, alisios y velocidades

**Climatología (no es viento de diseño):**

| Mes | Ene | Feb | Mar | Abr | May | Jun | Jul | Ago | Sep | Oct | Nov | Dic |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Viento medio horario (km/h), Weather Spark [6] | 11.9 | 13.2 | **13.5** | 11.5 | 8.1 | 7.3 | 7.7 | 7.3 | **6.5** | 6.6 | 8.0 | 10.1 |

- Período ventoso: diciembre–abril (alisios del NE intensificados en la temporada seca); el más calmado: septiembre–octubre. Dirección predominante **norte** todo el año según Weather Spark [6].
- **Windfinder** (estación del aeropuerto E. Cortissoz, observaciones 11/2003–09/2026): viento medio anual ≈ 8 nudos (≈ 15 km/h), dirección dominante **NE**, ráfagas típicas registradas hasta ≈ 22 nudos (≈ 41 km/h) [7]. (Barranquilla es más expuesta que Sabanalarga.)
- Contexto: los alisios del NE son "muy intensos en febrero y marzo" y limitan la lluvia en la franja litoral (fuente secundaria) [20].
- **IDEAM** publica promedios climatológicos de viento en `bart.ideam.gov.co/.../PROMEDIOS CLIMATOLOGICOS/2. VIENTO/`, pero el directorio no mostró archivos en la consulta ⚠️ [1b].

**Viento de diseño estructural (NSR-10, Título B, Capítulo B.6):**
- La velocidad básica del viento V es la ráfaga de 3 s a 10 m de altura en exposición C, periodo de retorno medio de 50 años (definición heredada de ASCE 7; NSR-98/NSR-10) [10][11].
- La **Figura B.6.4-1 "Zonas de amenaza eólica – Velocidad del viento básico"** fue modificada por el **Decreto 1711 del 13 de diciembre de 2021** (MinVivienda) [10]. Tabla de la figura:

| Región | V (combinaciones B.2.3) | V (combinaciones B.2.4) |
|---|---|---|
| 1 | 17 m/s (60 km/h) | 22 m/s (75 km/h) |
| 2 | 22 m/s (80 km/h) | 28 m/s (100 km/h) |
| 3 | 28 m/s (100 km/h) | 35 m/s (125 km/h) |
| 4 | 33 m/s (120 km/h) | 42 m/s (150 km/h) |
| **5** | **36 m/s (130 km/h)** | **46 m/s (165 km/h)** |
| 6 | 44 m/s (160 km/h) | 56 m/s (200 km/h) |
| 7 | 49 m/s (175 km/h) | 61 m/s (220 km/h) |

- **Ubicación de Sabanalarga en el mapa:** georreferenciando la figura (Barranquilla cae donde corresponde), el punto 10.63 N / 74.92 O queda **justo sobre la línea que separa la Región 5 (franja Barranquilla–Cartagena) de la Región 4**. Dada la resolución del mapa, se recomienda **adoptar la Región 5** (36 m/s para B.2.3; 46 m/s para B.2.4). ⚠️ Lectura propia de la figura; confirmar con un ingeniero estructural.
- La nota de la figura dice: "Estas zonas no han sido estudiadas y se recomienda ser conservador…; mientras no se disponga de datos confiables se calcularán con base en una velocidad de 28 m/s (100 km/h) para las combinaciones de B.2.3 y de 35 m/s (125 km/h) para las de B.2.4" [10].
- Estudios académicos señalan que estas velocidades provienen de estudios de 1987 y no se han actualizado desde la NSR-98 [21]. Ver recomendaciones de anclaje en `riesgos-ambientales-para-el-sistema.md`.
- Nota de interpretación: B.2.3 corresponde a combinaciones de carga para esfuerzos de trabajo y B.2.4 a combinaciones mayoradas (método de resistencia) en el Título B de la NSR-10 ⚠️ (verificar en el texto vigente del Título B [11]).

---

## 4. Variabilidad interanual: El Niño / La Niña (ENSO)

- **Estado actual (oct 2026):** el IDEAM declaró oficialmente **El Niño** el **8 de octubre de 2026**, tras registrar una anomalía récord de temperatura superficial del mar de +3.49 °C; comunicados previos daban probabilidades > 90 % de persistencia hasta el primer trimestre de 2027 y una probabilidad alta de intensidad fuerte/muy fuerte (81 % en julio; 69 % en agosto; ≈ 83 % según prensa en octubre ⚠️) [13]. La CRA (Corporación Autónoma Regional del Atlántico) advirtió en mayo 2026 que la predicción de la temporada podía variar según el desarrollo de El Niño [12].
- **Efecto típico en el Caribe colombiano:**
  - **El Niño:** menos lluvia y más temperatura. El IDEAM lo caracteriza por "incremento de las temperaturas y reducción de las precipitaciones"; para oct–dic 2023 (El Niño) se proyectaron déficits de 10–20 % en el norte de Bolívar, Magdalena, Sucre, Cesar y La Guajira [14].
  - **La Niña:** más lluvia y menos temperatura en las regiones Andina, Pacífica y Caribe [14].
- **Efecto en la radiación solar (evidencia publicada en Colombia):**
  - Valle de Aburrá (Medellín): con ERA5, la radiación fue ≈ **10 % mayor durante El Niño** frente a condiciones neutras o La Niña, sobre todo en dic–ene–feb [22].
  - La Guajira (2023): El Niño alteró la radiación sólo en la Baja Guajira y La Niña no produjo cambios significativos [23] ⚠️ (artículo no accesible directamente; datos del resumen indexado).
  - Tumaco (Pacífico, 2006): más horas de radiación activa en El Niño y menos en La Niña [23b].
  - ⚠️ No se encontró un estudio específico para el Atlántico. Hipótesis de trabajo: **El Niño ⇒ más brillo solar y producción FV algo mayor, pero también más calor (mayores pérdidas térmicas del módulo) y más polvo/suciedad por menos lluvia; La Niña ⇒ más nubosidad y lluvia, producción menor en los meses lluviosos.** Para dimensionar, usar el **año típico (TMY)** y revisar la variabilidad interanual (P90) con las series de PVGIS/NASA POWER que se descargan en `06-datos`.

---

## 5. Ciclones tropicales (huracanes)

- Temporada de ciclones del Atlántico/Caribe: **1 de junio – 30 de noviembre** [12].
- Riesgo **directo bajo pero no nulo** en la costa continental del Atlántico. Un estudio del Boletín Científico CIOH (2007) señala que, salvo San Andrés y Providencia, el Caribe colombiano se ha considerado zona de baja probabilidad de tormentas tropicales según la NOAA; aun así, cruzaron cerca de la costa Irene (1971), Joan (1988) y Bret (1993) [24] ⚠️ (citado a partir del extracto del buscador; el PDF devolvió 403). Joan (1988) fue el primer huracán documentado pasando frente a las costas continentales colombianas [25].
- Según la CRA (circular 0000003 del 11 may 2026), el NHC identifica a La Guajira y San Andrés como zonas de impacto directo, pero el centro, norte y nororiente continental se afectan **indirectamente** (lluvias, vientos, oleaje) cuando los sistemas transitan al sur de 15° N; en 2025 ningún ciclón tocó tierra en Colombia [12].
- En la práctica, para Sabanalarga el peligro relevante es: **vendavales y tormentas eléctricas convectivas, ondas tropicales, lluvias intensas** y, ocasionalmente, tornados/trombas (hay reportes en el área metropolitana de Barranquilla) [26].

---

## 6. Polvo del Sahara

- Las nubes de polvo sahariano llegan al Caribe colombiano sobre todo entre **mayo/junio y agosto**; el IDEAM emite comunicados especiales (p. ej., finales de mayo 2026) alertando de aumentos leves de material particulado; los departamentos más expuestos citados son La Guajira, **Atlántico**, Magdalena, Bolívar, Sucre y Córdoba, con cielos opacos/grisáceos [27].
- Efecto en el FV: reducción temporal de la irradiancia directa (mayor fracción difusa) y depósito de polvo sobre los módulos (pérdidas por suciedad) justo al final de la primera temporada de lluvias. ⚠️ No se encontró cuantificación local del impacto en producción.

---

## 7. Salinidad, rayos y otros (resumen; detalle en `riesgos-ambientales-para-el-sistema.md`)

- **Salinidad:** a ≈ 30–40 km del mar el aporte de cloruros es bajo frente a Barranquilla costera; sin embargo, la alta humedad (≈ 80 %) y temperatura sostienen tiempos de humectación largos. Categoría ISO 9223 probable **C3** (⚠️ estimación; no hay mapa oficial de corrosividad para el municipio).
- **Rayos:** tabla de densidad de descargas a tierra (Seguros SURA / GeoSURA) da **≈ 1 descarga/km²·año y 90 días de tormenta/año para Barranquilla** y 2 / 120 para Cartagena (promedios sobre áreas de ≈ 300 × 300 km) [28]; Sabanalarga quedaría en ese rango (⚠️ interpolación). **Atención:** las mediciones recientes LINET (U. Nacional) dan 13–32 descargas/km²·año para la Llanura Caribe; ese es el valor que se adopta para diseño (ver `04-tecnico-cientifico/rayos-y-puesta-a-tierra.md`).
- **Inundaciones:** episodios de desbordamiento de arroyos urbanos en Sabanalarga (p. ej., 13 nov 2022: ≈ 30 barrios afectados) [29].

---

## 8. Fuentes institucionales que **no** se pudieron consultar / vacíos

| Fuente pedida | Resultado |
|---|---|
| Alcaldía de Sabanalarga / POT–EOT municipal | ⚠️ No se encontró en línea el documento técnico de soporte del POT con diagnóstico climático. Recomendación: solicitarlo a la Secretaría de Planeación municipal. |
| Gobernación del Atlántico | ⚠️ No se localizó un perfil climático municipal. La **CRA** (autoridad ambiental del Atlántico) sí publica circulares de temporada de lluvias/ciclones [12]. |
| Climate-Data.org (página de Sabanalarga) | ⚠️ La página municipal no apareció en el buscador y el sitio devolvió 403; sólo se obtuvo la descripción regional (Aw) [8]. |
| Normal de temperatura IDEAM en Sabanalarga | ⚠️ La estación 29045000 no tiene normal de temperatura 1991–2020 publicada; se usan estaciones vecinas. Los datos crudos pueden solicitarse en DHIME (IDEAM). |
| Viento IDEAM | ⚠️ Directorio de promedios de viento sin archivos visibles en la consulta. |

---

## Referencias

Fecha de consulta: 2026-10-28 para todas.

- [1] IDEAM — *Normales Climatológicas Estándar 1991–2020* (archivo `Normales_Climatologicas_Estandar__1991-2020.xlsx`, hojas de precipitación, días de lluvia, T máx/media/mín, brillo solar, evaporación, HR). https://bart.ideam.gov.co/meteorologia/CLIMA/CLIMATOLOGIA/NORMALES%20CLIMATOLOGICAS/NC_ESTANDAR_1991-2020/
- [1b] IDEAM — directorio *Promedios climatológicos* (radiación global y viento). https://bart.ideam.gov.co/meteorologia/CLIMA/CLIMATOLOGIA/PROMEDIOS%20CLIMATOLOGICOS/
- [2] Wikipedia (ES) — *Sabanalarga (Atlántico)*. https://es.wikipedia.org/wiki/Sabanalarga_(Atl%C3%A1ntico)
- [3] Wikipedia (EN) — *Sabanalarga, Atlántico*. https://en.wikipedia.org/wiki/Sabanalarga,_Atl%C3%A1ntico
- [4] Wikipedia (EN) — *Barranquilla*, tabla "Climate data for Barranquilla (Ernesto Cortissoz International Airport) 1991–2020", fuente citada: IDEAM. https://en.wikipedia.org/wiki/Barranquilla
- [5] OpenStreetMap Nominatim — geocodificación de Sabanalarga, Santa Verónica, Playa Mendoza, Puerto Colombia, Galerazamba, Aeropuerto E. Cortissoz. https://nominatim.openstreetmap.org/
- [6] Weather Spark — *El clima en Sabanalarga, Colombia* (Atlántico; 10.630, -74.921; MERRA-2, 1980–2016). https://es.weatherspark.com/y/23464/Clima-promedio-en-Sabanalarga-Colombia-durante-todo-el-año
- [7] Windfinder — *Estadísticas del viento, Aeropuerto Internacional Ernesto Cortissoz*. https://es.windfinder.com/windstatistics/barranquilla
- [8] Climate-Data.org — región Atlántico (extracto de buscador; sitio devolvió 403). https://es.climate-data.org/region/86/
- [9] Global Solar Atlas 2.0 (Banco Mundial / Solargis) — punto 10.632, -74.921 (datos obtenidos del servicio de datos del atlas, `api.globalsolaratlas.info/data/lta`, versión de datos 1.7, actualizada 2026-04-01). Página: https://globalsolaratlas.info/detail?c=10.632,-74.921,11
- [10] MinVivienda — *Decreto 1711 del 13 de diciembre de 2021* (modifica parcialmente NSR-10; nueva Figura B.6.4-1). https://minvivienda.gov.co/sites/default/files/normativa/decreto-1711-del-13-de-diciembre-de-2021.pdf
- [11] NSR-10 Título B (copia publicada por IDRD). https://www.idrd.gov.co/sites/default/files/documentos/Construcciones/2titulo-b-nsr-100.pdf ; evaluación del código de viento NSR-98 (EIRD): https://www.eird.org/cd/acs/Espanol/EvalCodi/HablaEsp/Vientos/COLOMecv.pdf
- [12] CRA — Circular 0000003 de 2026 (11 may 2026), *Recomendaciones preparación inicio segunda temporada de lluvias 2026 y temporada de ciclones*. https://www.crautonoma.gov.co/documentos/cambio-climatico/circulares/2026/0000003%20-%20RECOMENDACIONES%20PREPARACION%20INICIO%20SEGUNDA%20TEMPORADA%20LLUVIAS%202026%20Y%20TEMPORADA%20CICLONES.pdf
- [13] Vanguardia (8 oct 2026), *El fenómeno de El Niño ya fue declarado oficialmente en Colombia*; comunicados IDEAM 074 (jul) y 087 (ago) 2026 citados en búsqueda. https://www.vanguardia.com/colombia/2026/10/08/el-fenomeno-de-el-nino-ya-fue-declarado-oficialmente-en-colombia-hasta-cuando-se-extendera/ ; https://www.ideam.gov.co/file-download/download/public/22172
- [14] El Tiempo, *Fenómeno de La Niña: regiones más vulnerables*; DIMAR/CCO boletín CNERFEN 10-2023. https://www.eltiempo.com/vida/medio-ambiente/fenomeno-de-la-nina-estas-son-las-regiones-de-colombia-que-podrian-ser-mas-vulnerables-ante-este-evento-climatico-3355753 ; https://cecoldodigital.dimar.mil.co//3356/1/cco_cnerfen_10_2023.pdf
- [15] Population Review — clima de Sabanalarga (extracto de buscador; la página devolvió error 526). https://www.populationreview.org/climate/colombia/sabanalarga
- [16] Telencuestas — *Población de Sabanalarga en 2025* (dice basarse en proyecciones DANE). https://telencuestas.com/censos-de-poblacion/colombia/2025/atlantico/sabanalarga
- [17] Wikipedia (ES) — *Embalse del Guájaro*. https://es.wikipedia.org/wiki/Embalse_del_Gu%C3%A1jaro
- [18] El Heraldo (24 jun 2022), *Alerta amarilla en Atlántico por alto nivel del río Magdalena* / calamidad Canal del Dique (extracto de buscador). https://www.elheraldo.co/atlantico/2022/06/24/alerta-amarilla-en-atlantico-por-alto-nivel-del-rio-magdalena-918701/
- [19] pv magazine (5 mar 2026), *Enel Colombia's 180 MW Atlántico solar park starts supplying national grid*. https://www.pv-magazine.com/?p=67189
- [20] EcuRed — *Departamento de Atlántico (Colombia)* (fuente secundaria). https://www.ecured.cu/Departamento_de_Atl%C3%A1ntico_(Colombia)
- [21] Revista Colombiana de Ciencia Animal (Recia) 4(1), 2012 — *Criterio estadístico para la selección de velocidades de viento para el diseño de armaduras de techo*. https://dialnet.unirioja.es/descarga/articulo/3968812.pdf
- [22] Cano, Carmona, Martínez y Arias (2022), *Estimación y pronóstico de radiación solar en el valle de Aburrá – Colombia*, Rev. Acad. Colomb. Cienc. Ex. Fis. Nat. 46(179):529-549. https://raccefyn.co/index.php/raccefyn/article/view/estimacion_pronostico_de_radiacion_solar_en_el_vall_aburra_colom
- [23] International Journal of Sustainable Energy (dic 2023), artículo sobre ENSO y radiación en La Guajira (resumen en DOAJ; acceso 403). https://doaj.org/article/c9053172c7e341ce8f28dd30dc6efaf3
- [23b] Advances in Geosciences 6:195 (2006), estudio en Tumaco. https://adgeo.copernicus.org/articles/6/195/2006/
- [24] Boletín Científico CIOH N.º 25 (2007), DIMAR (extracto de buscador; PDF 403). https://ojs.dimar.mil.co/index.php/CIOH/article/download/162/366/658
- [25] Semana — *Joan* (archivo). https://www.semana.com/nacion/articulo/joan/10983-3/
- [26] Documento *Tornados en Barranquilla y Área Metropolitana en el contexto del Cambio Climático* (alojado en gub.uy; extracto). https://www.gub.uy/sistema-nacional-emergencias/sites/sistema-nacional-emergencias/files/documentos/publicaciones/Tornados%20en%20Baranquilla%20y%20Area%20Metropolitana%20en%20el%20contexto%20del%20Cambio%20Climatico.pdf
- [27] RCN Radio, *Polvo del Sahara llega a Colombia: departamentos afectados y recomendaciones del Ideam*; El País (Cali). https://newsroom.rcnradio.com/colombia/polvo-del-sahara-llega-a-colombia-departamentos-afectados-y-recomendaciones-del-ideam ; https://www.elpais.com.co/colombia/el-polvo-del-sahara-vuelve-a-colombia-esto-dice-el-ideam-sobre-su-impacto-en-el-aire-y-el-clima-2056.html
- [28] Seguros SURA — *Riesgos por rayos y sus medidas de protección* (PDF, 2024; tabla de densidad de descargas y días de tormenta). https://www.segurossura.com.co/empresasura/Documentacion%20Formacion/riesgos-por-rayos-y-sus-medidas-de-proteccion.pdf
- [29] Blu Radio (13 nov 2022), *Emergencia en Sabanalarga, Atlántico: fuertes lluvias generaron graves inundaciones en 30 barrios*. https://www.bluradio.com/blu360/caribe/emergencia-en-sabanalarga-atlantico-fuertes-lluvias-generaron-graves-inundaciones-en-30-barrios-rg10
