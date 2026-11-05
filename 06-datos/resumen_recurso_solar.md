# Recurso solar medido/modelado — Sabanalarga, Atlántico

> Generado por `procesar_datos.py` a partir de las descargas en `raw/` (2026-10-28).
> Coordenadas: **10.632 N, -74.921 W**, elevación ~100 m (casco urbano de Sabanalarga).

## 1. Irradiación global horizontal (GHI) — kWh/m²/día (= Horas Sol Pico, HSP)

| Mes | PVGIS-ERA5 (2005-2023) | PVGIS-NSRDB (2005-2015) | NASA POWER (clim.) | T media °C | T máx extrema °C† | T mín extrema °C† | HR % | Lluvia mm/día |
|---|---|---|---|---|---|---|---|---|
| Ene | 5.54 | 5.73 | 5.65 | 28.1 | 39.2 | 20.0 | 70 | 0.1 |
| Feb | 6.02 | 6.08 | 6.03 | 28.9 | 40.3 | 20.7 | 64 | 0.1 |
| Mar | 6.10 | 5.86 | 5.90 | 29.4 | 41.2 | 22.3 | 64 | 0.2 |
| Abr | 5.72 | 5.52 | 5.58 | 29.6 | 41.5 | 22.9 | 68 | 1.2 |
| May | 5.23 | 5.38 | 5.22 | 28.9 | 41.0 | 20.7 | 76 | 4.0 |
| Jun | 5.26 | 5.48 | 5.39 | 28.9 | 40.4 | 23.3 | 77 | 2.9 |
| Jul | 5.38 | 5.66 | 5.57 | 28.9 | 40.3 | 23.3 | 76 | 3.5 |
| Ago | 5.24 | 5.53 | 5.53 | 28.7 | 40.2 | 22.6 | 78 | 3.5 |
| Sep | 5.18 | 5.17 | 5.33 | 28.0 | 39.2 | 22.5 | 82 | 4.3 |
| Oct | 4.76 | 4.86 | 4.86 | 27.4 | 38.1 | 22.1 | 84 | 5.7 |
| Nov | 4.51 | 4.64 | 4.71 | 27.3 | 37.3 | 22.5 | 84 | 4.2 |
| Dic | 5.06 | 5.07 | 5.17 | 27.7 | 38.5 | 21.5 | 77 | 1.0 |
| **Año** | **5.33** | **5.42** | **5.41** | 28.5 | 41.5 | 20.0 | 75 | 2.6 |

- Mes más bajo (NSRDB): **Nov** (4.64); mes más alto: **Feb** (6.08).
- Para **off-grid** se dimensiona con el mes crítico; para **on-grid** con el promedio anual.
- †NASA POWER `T2M_MAX`/`T2M_MIN` en climatología son los extremos horarios del mes en el período, no la máxima/mínima diaria promedio.

## 2. Producción específica estimada de un sistema FV (por cada 1 kWp instalado)

Pérdidas del sistema asumidas: 14 % (valor por defecto PVGIS: cableado, inversor, suciedad, mismatch). PVGIS además aplica pérdidas por temperatura y ángulo de incidencia.

| Escenario | Base | Inclinación / azimut* | kWh/kWp/año | kWh/kWp/día | Desv. interanual kWh | Pérd. temperatura % | Pérd. totales % |
|---|---|---|---|---|---|---|---|
| Óptimo | PVGIS-NSRDB (2005-2015) | 15° / -26° | **1488** | 4.08 | 43 | -12.0 | -26.4 |
| Techo 10° al sur | PVGIS-NSRDB (2005-2015) | 10° / 0° | **1481** | 4.06 | 43 | -11.9 | -26.4 |
| Óptimo | PVGIS-ERA5 (2005-2023) | 16° / -32° | **1476** | 4.04 | 47 | -11.9 | -26.2 |
| Techo 10° al sur | PVGIS-ERA5 (2005-2023) | 10° / 0° | **1464** | 4.01 | 47 | -11.9 | -26.3 |

*Convención PVGIS: azimut 0° = sur, −90° = este, +90° = oeste. Un azimut negativo óptimo (SSE) indica más nubosidad en la tarde que en la mañana (típico de la convección tropical).

**Producción mensual por kWp (kWh/kWp/día):**

| Mes | NSRDB óptimo | NSRDB 10° S | ERA5 óptimo | ERA5 10° S |
|---|---|---|---|---|
| Ene | 4.76 | 4.66 | 4.61 | 4.52 |
| Feb | 4.87 | 4.81 | 4.84 | 4.77 |
| Mar | 4.41 | 4.39 | 4.61 | 4.57 |
| Abr | 3.97 | 3.98 | 4.11 | 4.12 |
| May | 3.77 | 3.81 | 3.65 | 3.70 |
| Jun | 3.77 | 3.82 | 3.62 | 3.67 |
| Jul | 3.91 | 3.96 | 3.74 | 3.77 |
| Ago | 3.95 | 3.97 | 3.77 | 3.77 |
| Sep | 3.82 | 3.81 | 3.88 | 3.84 |
| Oct | 3.75 | 3.71 | 3.73 | 3.67 |
| Nov | 3.74 | 3.66 | 3.70 | 3.60 |
| Dic | 4.24 | 4.13 | 4.31 | 4.17 |

## 3. Variabilidad interanual de la radiación (GHI promedio anual, kWh/m²/día)

Útil para ver el efecto de La Niña (años más nublados) y El Niño (años más soleados).

| Año | PVGIS-ERA5 | NASA POWER |
|---|---|---|
| 2001 | — | 5.35 |
| 2002 | — | 5.65 |
| 2003 | — | 5.26 |
| 2004 | — | 5.46 |
| 2005 | 5.21 | 5.26 |
| 2006 | 5.23 | 5.43 |
| 2007 | 5.18 | 5.27 |
| 2008 | 5.19 | 5.29 |
| 2009 | 5.28 | 5.47 |
| 2010 | 4.93 | 4.95 |
| 2011 | 5.01 | 5.21 |
| 2012 | 5.35 | 5.52 |
| 2013 | 5.29 | 5.39 |
| 2014 | 5.39 | 5.61 |
| 2015 | 5.50 | 5.61 |
| 2016 | 5.34 | 5.36 |
| 2017 | 5.52 | 5.41 |
| 2018 | 5.55 | 5.63 |
| 2019 | 5.57 | 5.54 |
| 2020 | 5.48 | 5.56 |
| 2021 | 5.37 | 5.57 |
| 2022 | 5.27 | 5.27 |
| 2023 | 5.62 | 5.57 |
| 2024 | — | 5.26 |

- ERA5: mín 4.93, máx 5.62, CV 3.4 %.
- NASA POWER: mín 4.95, máx 5.65, CV 3.1 %.

## 4. Año Meteorológico Típico (TMY, PVGIS) — extremos horarios

- Temperatura ambiente horaria: máx **37.3 °C**, mín **22.7 °C**, media 27.3 °C.
- Irradiancia horizontal máxima horaria: 998 W/m². GHI anual TMY: 1916 kWh/m².
- Viento a 10 m: media 2.0 m/s, máx horario 7.2 m/s (no sirve como viento de diseño estructural: usar NSR-10).
- Humedad relativa media: 81 %.

**Temperaturas de diseño para cálculo de strings (recomendación):**
- T mínima de celda (Voc máx): usar **~18 °C** (mínima extrema 20.0 °C menos margen; al amanecer la celda ≈ ambiente). Nota: aquí el Voc nunca sube mucho sobre STC, a diferencia de climas fríos.
- T máxima de celda (Vmp mín): ambiente extrema ~41 °C + ~30 °C de calentamiento sobre techo ⇒ **~70–75 °C**.

## 5. Interpretación y valor recomendado para diseño

- Las tres bases coinciden dentro de ±2 % en el promedio anual (5.33–5.42), lo que da buena confianza. NSRDB (satélite GOES, ~4 km) es en principio la de mejor resolución; ERA5 es reanálisis (~30 km); NASA POWER (CERES/MERRA-2, ~50–100 km) es una referencia gruesa.
- La variabilidad interanual es baja (CV ≈ 3 %), pero años La Niña fuertes (2010–2011) bajan la radiación ~6–8 % respecto al promedio.
- **HSP de diseño anual sugerida: 5.4 kWh/m²/día (horizontal)**; validar contra Global Solar Atlas e IDEAM (ver `01-recurso-solar-y-clima`).
- **Rendimiento específico sugerido para pre-dimensionar on-grid: ~1481 kWh/kWp/año** (techo ~10° al sur, base NSRDB, 14 % pérdidas). Escenario conservador: 1464.
- Pre-dimensionamiento rápido: **kWp ≈ consumo mensual (kWh) / 123**.

## Fuentes

- PVGIS v5.3 y v5.2 (European Commission JRC). API: https://re.jrc.ec.europa.eu/api/ — Huld, T., Müller, R., Gambardella, A. (2012). A new solar radiation database for estimating PV performance in Europe and Africa. *Solar Energy*, 86(6), 1803–1815. https://doi.org/10.1016/j.solener.2012.03.006
- NREL NSRDB: Sengupta, M. et al. (2018). The National Solar Radiation Data Base (NSRDB). *Renewable and Sustainable Energy Reviews*, 89, 51–60. https://doi.org/10.1016/j.rser.2018.03.003
- ERA5: Hersbach, H. et al. (2020). The ERA5 global reanalysis. *Q. J. R. Meteorol. Soc.*, 146, 1999–2049. https://doi.org/10.1002/qj.3803
- NASA POWER (Prediction Of Worldwide Energy Resources), NASA LaRC: https://power.larc.nasa.gov/ (comunidad RE).
