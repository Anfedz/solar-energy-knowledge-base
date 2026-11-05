# Orientación, inclinación y sombras a latitud 10,6° N (Sabanalarga)

> **Resumen:** en Sabanalarga la inclinación casi no importa para la energía (entre 10° y 20° hacia el sur la pérdida frente al óptimo es ≤1,1 %; horizontal pierde ≈2–3 %), pero **sí importa para la autolimpieza**. Use **10–15° hacia el sur o el sur-sureste**. Si el techo es a dos aguas este–oeste, ambas caras son viables con una penalización pequeña en la cara este (≈2 %) y moderada en la cara oeste (≈4,5–5 % a 10°). **Las sombras sí son críticas**: evítelas entre las 8:00 y las 16:00.

---

## 1. Geometría solar en Sabanalarga

Con latitud φ = 10,63° N y declinación δ entre −23,44° y +23,44°:

| Fecha | Altura solar al mediodía | Posición al mediodía | Altura a las 9:00 (hora solar) | Azimut a las 9:00 |
|---|---|---|---|---|
| 21-dic (solsticio de invierno boreal) | 55,9° | **al sur** | 34,3° | 52° al este del sur |
| Equinoccios | 79,4° | casi cenital (sur) | 44,0° | 80° al este del sur |
| 21-jun | 77,2° | **al norte** | 45,3° | 113° desde el sur (ENE) |

**Consecuencia:** como δ > φ entre ~22-abr y ~20-ago, el sol del mediodía pasa **por el norte** durante unos 4 meses. Un módulo muy inclinado hacia el sur pierde en esa época, y por eso la inclinación óptima anual es baja (≈ latitud o algo más).

Fórmula de la altura solar: sen α = sen φ·sen δ + cos φ·cos δ·cos ω, con ω = 15°·(hora solar − 12). (Cálculo propio.)

---

## 2. Inclinación óptima: teoría vs. simulación local

### 2.1 Reglas de la literatura
- **Jacobson y Jadhav (2018, *Solar Energy* 169:55–66):** ajuste mundial de la inclinación óptima en función de la latitud; para latitudes tropicales bajas el óptimo queda cerca de la latitud o un poco por debajo, y la ganancia frente a horizontal es pequeña (pocos %).
- **Lave y Kleissl (2011, *Renewable Energy* 36:1145–1152):** la inclinación óptima es menor que la latitud donde el clima es nublado en la temporada de sol bajo, y la penalización por desviarse ±10–15° del óptimo es de pocos %.
- **Regla práctica de instaladores:** latitudes de 0–15° → 10–15° (mínimo por autolimpieza) ⚠️ (regla común de la industria, sin un paper único detrás).

### 2.2 Barrido local con PVGIS (consulta propia, 28-oct-2026; 1 kWp c-Si, 14 % de pérdidas, montaje libre)

| Inclinación | Azimut (0 = S, −90 = E, +90 = O) | E_y ERA5 (kWh/kWp) | E_y NSRDB (kWh/kWp) | vs. óptimo |
|---|---|---|---|---|
| 0° (horizontal) | — | 1.436 | 1.455 | −2,2 a −2,7 % |
| 5° | S | 1.454 | 1.472 | −1,1 a −1,5 % |
| 10° | S | 1.464 | 1.481 | −0,5 a −0,8 % |
| **15°** | **S** | **1.466** | **1.482** | **−0,4 a −0,7 %** |
| 20° | S | 1.460 | 1.475 | −0,9 a −1,1 % |
| 30° | S | 1.424 | 1.439 | −3,3 a −3,5 % |
| 10° | SSE (−30°) | 1.470 | 1.485 | −0,2 a −0,4 % |
| **15°** | **SSE (−30°)** (≈ óptimo de PVGIS) | **1.476** | **1.488** | **0 %** |
| 10° | Este (−90°) | 1.446 | 1.460 | −1,9 a −2,0 % |
| 20° | Este (−90°) | 1.431 | 1.443 | −3,0 a −3,1 % |
| 10° | Oeste (+90°) | 1.401 | 1.421 | −4,5 a −5,1 % |
| 20° | Oeste (+90°) | 1.345 | 1.367 | −8,1 a −8,9 % |
| 10° | Norte (180°) | 1.376 | 1.398 | −6,0 a −6,8 % |
| 15° | S, **integrado al techo** (sin ventilación) | 1.408 | 1.420 | −4,6 % (por temperatura) |

**Hallazgos:**
1. **El óptimo es de 15–16° con azimut ≈ −26° a −32° (sur-sureste).** La preferencia por la mañana se explica por la nubosidad convectiva vespertina típica del Caribe (las tardes son más nubladas).
2. **Este > Oeste:** por la misma razón, una cara este pierde ≈2 % y una cara oeste ≈4,5–5 % (a 10°). Si debe escoger una sola cara de un techo E–O, **prefiera la cara este**.
3. **Distribución E–O (mitad y mitad):** la energía total cae ≈3,5 % frente al óptimo (promedio de ≈−2 % y ≈−5 %), pero la curva diaria se ensancha (más producción temprano y tarde). Esto mejora el **autoconsumo** en horas de aire acondicionado vespertino y reduce el recorte (*clipping*) del inversor, lo que permite una relación DC/AC más alta. ⚠️ Beneficio de autoconsumo por cuantificar con el perfil de carga real.
4. **Cara norte:** a 10° pierde ≈6–7 %; es aceptable si no hay otra superficie, pero conviene inclinarla lo menos posible (5–10°).

### 2.3 Inclinación mínima por autolimpieza
- **Cano (2011, tesis ASU) / Cano et al. (2014, IEEE PVSC):** en Arizona, con 9 inclinaciones de 0° a 40°, la pérdida por suciedad fue de ≈2,0 % a 0° frente a ≈1,0 % a 23° y 33° en un trimestre seco. Las superficies horizontales acumulan el doble.
- En el Caribe, con lluvias intensas pero una estación seca de 3–4 meses, **10° es el mínimo práctico** para que el agua arrastre el polvo y no se formen charcos en el borde inferior del marco; **12–15° es el punto dulce** (energía casi óptima + autolimpieza). (Inferencia combinando Cano et al. y el barrido de PVGIS.)
- Los módulos con marco acumulan una línea de lodo en el borde inferior a baja inclinación; esto crea sombra parcial sobre la última fila de celdas y puede activar los diodos de bypass ⚠️ (observación común en O&M, con poca literatura cuantitativa).

---

## 3. Sombras

### 3.1 Por qué son críticas
- En un string en serie, la celda más sombreada limita la corriente; los diodos de bypass protegen pero "apagan" 1/3 del módulo (o 1/2 en módulos de media celda). Por eso la pérdida es **no lineal**: una sombra en el 5 % del área puede costar el 20–30 % de un string ⚠️ (orden de magnitud típico).
- Deline et al. (2013, *Solar Energy* 96:274–282) proponen un modelo simplificado de pérdida por sombra uniforme entre filas; MacAlpine et al. (2013, IEEE PVSC) midieron en 27 arreglos residenciales la dispersión entre módulos y la energía recuperable con electrónica distribuida (MLPE).

### 3.2 Fuentes típicas de sombra en una casa de Sabanalarga
- **Árboles** (mango, almendro, níspero, matarratón), que crecen rápido en este clima: prever poda.
- Tanques de agua elevados, antenas, muros de terraza, casas vecinas de dos pisos.
- Cables de servicio público y postes.

### 3.3 Criterio de diseño
- **Ventana libre de sombra: 8:00–16:00 todo el año** (como mínimo de 9:00 a 15:00). Recuerde que en junio el sol sale por el ENE y pasa por el norte: un obstáculo **al norte** del arreglo también puede sombrear.
- **Separación entre filas** en techo plano (módulo de 2,28 m en vertical, criterio: sin sombra a las 9:00 del 21-dic):

| Inclinación | Altura del borde (h) | Proyección horizontal | Espacio libre entre filas | Paso (pitch) | GCR |
|---|---|---|---|---|---|
| 10° | 0,40 m | 2,25 m | 0,36 m | 2,60 m | 0,88 |
| 15° | 0,59 m | 2,20 m | 0,53 m | 2,74 m | 0,83 |

Fórmula: d = h / tan(α)·cos(ψ), con α la altura solar y ψ el azimut solar relativo a la normal de las filas. (Cálculo propio; agregue un margen de 10–20 cm para mantenimiento.)

- **Si hay sombra inevitable:** use optimizadores o microinversores (MLPE) solo en los módulos afectados, o separe las orientaciones/sombras en MPPT distintos del inversor. Haga el estudio de sombras con una foto de horizonte o con las herramientas de `05-herramientas-de-diseno` (PVGIS con horizonte, PVsyst, SAM).

---

## 4. Recomendación consolidada para Sabanalarga

| Situación del techo | Recomendación |
|---|---|
| Techo plano (losa) | Estructura a **12–15°**, azimut **sur a sur-sureste (0° a −30°)**, filas con paso ≥2,7 m (para módulos de ~2,3 m) y separación del piso ≥30 cm para ventilación. |
| Techo inclinado con cara sur/SE | Coplanar si la pendiente está entre 8° y 25°, con un **espaciador ≥10–15 cm** para ventilación. |
| Techo a dos aguas E–O | Llenar primero la cara **este**; usar la oeste si se necesita más potencia o se quiere más producción vespertina (MPPT separado). |
| Techo de pendiente muy baja (<5°) | Elevar a ≥10° con estructura (autolimpieza), o aceptar un plan de limpieza más frecuente. |

---

## Referencias de este archivo
Ver [`bibliografia.md`](bibliografia.md) (sección E).
