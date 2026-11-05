# Cómo medir el techo y detectar sombras (guía práctica para el propietario)

> Casa en Sabanalarga, Atlántico (≈ 10.632 N, −74.921 O). Fecha de consulta de fuentes: **2026-10-28**.
> Objetivo: entregar al diseñador/instalador un **plano acotado del techo, su orientación e inclinación, y un inventario de sombras con fotos**, para que el diseño y las cotizaciones sean comparables.
> ⚠️ **Seguridad primero:** subir al techo es la actividad más peligrosa de todo el proyecto. Las tejas de fibrocemento ("eternit") y las láminas viejas **no soportan el peso de una persona** fuera de las correas. Si no hay acceso seguro (escalera amarrada, arnés, alguien acompañando), mida desde el suelo y con Google Earth, y deje la medición en el techo al instalador. No suba con lluvia, con viento fuerte (feb–mar son los meses más ventosos) ni al mediodía (calor extremo).

---

## 0. Lo que necesita

| Elemento | Uso |
|---|---|
| Computador con **Google Earth Pro** (gratis; la descarga de escritorio dejará de estar disponible desde el 25 jun 2027 [1]) o **Google Earth Web** | Medir el techo desde la imagen satelital, ver imágenes históricas |
| **Cinta métrica** (≥ 5 m; ideal 20–30 m) o medidor láser | Medidas reales |
| **Celular** con app de **brújula** e **inclinómetro/nivel** (vienen en muchos teléfonos; la app "Medidas"/"Measure" de iPhone tiene nivel) | Azimut e inclinación |
| App de trayectoria solar: **SunCalc.org** (gratis, en el navegador) [2]; opcional **Sun Seeker** (pago, realidad aumentada) [3] | Ver por dónde pasa el sol y estimar sombras |
| Libreta, lápiz, plantilla de croquis | Documentar |
| Cámara del celular | Fotos de todo |

---

## 1. Medir el techo desde Google Earth (antes de subir)

1. Abrir Google Earth Pro y buscar `10.632, -74.921` (o la dirección de la casa). Hacer zoom hasta ver el techo.
2. **Imágenes históricas** (reloj en la barra de herramientas de Earth Pro [1]): elegir la imagen **más reciente y más nítida**; comparar fechas para ver si los árboles vecinos crecieron.
3. **Herramienta Regla → Polígono**: dibujar el contorno de **cada agua del techo** por separado y anotar el **perímetro** y el **área** que muestra la herramienta. Repetir con "Línea" para largo y ancho de cada agua.
4. Anotar la **orientación aproximada** de cada agua: con la regla, trazar una línea perpendicular a la cumbrera (caballete) hacia el lado que "mira" el agua y leer el **rumbo** (heading) que da la herramienta (Google Earth trabaja con **norte geográfico**).
5. Marcar en la imagen: tanques de agua, árboles, casas o muros más altos, postes, antenas, y medir su **distancia** al borde del techo.
6. Hacer **captura de pantalla** con las medidas.

> Limitación: el área que mide Google Earth es la **proyección horizontal**. Si el techo tiene inclinación, el área real del agua es mayor: área real = área horizontal ÷ cos(inclinación). Con inclinaciones típicas de 10–20°, la diferencia es de 1.5 % a 6 % (cálculo trigonométrico).

---

## 2. Medir en sitio (cinta, brújula, inclinómetro)

### 2.1 Dimensiones
- Medir **largo (paralelo a la cumbrera)** y **ancho (de la cumbrera al alero)** de cada agua, sobre el techo o desde el alero con cinta/láser.
- Medir aleros, cumbrera, claraboyas, extractores, bajantes y cualquier elemento que impida poner módulos.
- Identificar el **tipo de cubierta**: fibrocemento, lámina de zinc/aluzinc, losa de concreto, teja de barro, termoacústica. Fotografiar un detalle y, si es posible, medir la **separación entre correas** (vigas) desde el interior: allí se anclará la estructura.
- Anotar el **estado** (fisuras, goteras, óxido, madera con comején) — un techo en mal estado debe repararse **antes** de instalar.

### 2.2 Orientación (azimut) con la brújula del celular
1. Quitar fundas magnéticas; alejarse de tanques metálicos, varillas, cables y del techo de zinc (desvían la brújula). Mejor medir **desde el suelo**, parado frente a la fachada paralela al agua del techo.
2. Apuntar el celular en la dirección **hacia la que "mira" la caída del agua** (perpendicular a la cumbrera, hacia abajo) y leer el rumbo.
3. **Corregir la declinación magnética:** en Sabanalarga la declinación es **≈ −8.9° (8.9° al oeste)**, con variación de ≈ −0.15°/año (modelo WMM-2025, NOAA, fecha 2026-10-28) [4].
   - Rumbo **verdadero** = rumbo **magnético** − 8.9°.
   - Ejemplo: la brújula marca 180° (sur magnético) → azimut verdadero ≈ 171° (sur-sureste).
   - Muchas apps permiten activar "norte verdadero" (usan GPS); si la app ya muestra norte verdadero, **no** restar.
4. Comparar con el rumbo medido en Google Earth (Paso 1.4). Si difieren más de ≈ 5°, repetir.

**Convenciones de azimut** (fuente de confusiones):
| Herramienta | Sur = | Este = | Oeste = |
|---|---|---|---|
| Brújula / Google Earth / PVWatts | 180° | 90° | 270° |
| **PVGIS** | **0°** | **−90°** | **+90°** |

### 2.3 Inclinación
- Con la app de nivel/inclinómetro: apoyar el celular **sobre una regla o perfil recto** colocado en el sentido de la pendiente (de cumbrera a alero) y leer los grados. Repetir en 3 puntos.
- Alternativa desde el suelo: medir la **altura de la cumbrera sobre el alero (h)** y la **distancia horizontal (d)** entre ambos → inclinación = arctan(h/d).
- Referencia: la inclinación óptima en Sabanalarga es **13–16°** (Global Solar Atlas 13° [5]; PVGIS 15–16° [6]). Techos de 5–25° funcionan bien; por debajo de ≈ 10° el agua lava peor el polvo ⚠️.

---

## 3. Detectar sombras

### 3.1 Qué hace especial a Sabanalarga (latitud 10.6° N)
- Entre **mediados/finales de abril y finales de agosto** el sol de mediodía pasa **al norte del cenit** (cálculo propio con la declinación solar: la declinación supera 10.6° aprox. entre el 18 abr y el 26 ago). **Los obstáculos ubicados al norte del techo también pueden dar sombra** en esos meses, sobre todo temprano y tarde.
- En diciembre el sol de mediodía está a ≈ 56° de altura hacia el **sur** (cálculo propio) → la sombra más larga al mediodía la dan los obstáculos ubicados **al sur** del techo en dic–ene, justamente la temporada de **mayor radiación**.
- En la mañana (este) y la tarde (oeste) el sol está bajo todo el año: **tanques elevados, árboles y casas vecinas al este y al oeste** son los que más sombrean.
- Las tardes son más nubladas que las mañanas (PVGIS sugiere azimut óptimo sur-sureste [6]) → una sombra en la **mañana** cuesta un poco más que una en la tarde ⚠️.

### 3.2 Inventario de obstáculos (hacer una tabla)
Para cada obstáculo: **qué es, dirección (azimut desde el centro del techo), distancia horizontal, altura por encima del plano del techo, ¿crece? (árbol), foto**.

Obstáculos típicos en Sabanalarga:
- **Tanques de agua** elevados (propios y de vecinos) y sus bases.
- **Árboles** (mango, almendro, neem, palma — crecen rápido; preguntar al vecino por podas ⚠️).
- **Casas vecinas** de dos pisos, muros y segundos pisos en construcción (y lotes vacíos donde podría construirse).
- **Postes** de energía, transformadores, cables, antenas de TV/internet, parabólicas.
- Elementos del propio techo: caballete, chimeneas/extractores, aire acondicionado, claraboyas.

### 3.3 Regla rápida de la sombra
- Ángulo de altura del obstáculo visto desde el borde del arreglo = arctan(altura sobre el techo ÷ distancia horizontal).
- Si ese ángulo es **mayor que la altura del sol** en la hora/fecha de interés, hay sombra.
- Use **SunCalc.org** [2]: fije la ubicación (10.632, −74.921), elija la fecha (probar **21 dic, 21 mar, 21 jun**), mueva la hora y lea **altura y azimut del sol**; SunCalc también calcula la **longitud de sombra** de un objeto de altura dada.
- Ejemplo ⚠️ ilustrativo: un tanque que sobresale 2 m sobre el techo, a 4 m al este → ángulo = arctan(2/4) ≈ 27°. Mientras el sol esté al este con altura < 27° (aprox. primeras ≈ 2 horas de la mañana, verificar en SunCalc), sombreará esa zona.

### 3.4 Método fotográfico / realidad aumentada
1. Párese (con seguridad) en el **centro y en las esquinas** de la zona donde irían los módulos.
2. Con **Sun Seeker** (u otra app AR) apunte al horizonte y recorra del **este al oeste pasando por el sur y el norte**: la app dibuja las trayectorias del sol de los solsticios y equinoccios sobre la imagen [3]. Tome **capturas de pantalla** mostrando qué obstáculos cortan las trayectorias.
3. Sin app de pago: tome una **foto panorámica** desde el mismo punto con la brújula visible y anote los rumbos y alturas de los obstáculos (inclinómetro apuntando a la punta del obstáculo).
4. Con estos datos se puede construir un **perfil de horizonte** (azimut vs altura angular) para cargarlo en **PVGIS** ("horizonte propio", archivo CSV) ⚠️ (formato a verificar en la ayuda de PVGIS).
5. Opción profesional: instalador con **Solar Pathfinder** (instrumento físico) [7] o software 3D (OpenSolar, SketchUp+Skelion, Aurora).

### 3.5 Observación directa
- Si es posible, **fotografiar el techo cada hora** (7:00–17:00) en un día despejado, idealmente en enero (seca, sol al sur) y repetir en junio–julio (sol al norte). Es la prueba más confiable para sombras de objetos cercanos.

---

## 4. Cómo documentarlo (entregable)

Cree una carpeta `07-diseno-proyecto/sitio/` con:

1. **Croquis acotado** (papel escaneado o dibujo) de cada agua: largo, ancho, inclinación, azimut verdadero, ubicación de correas, obstáculos del techo.
2. **Tabla de obstáculos** (copiar esta plantilla):

| # | Obstáculo | Azimut (°, verdadero) | Distancia horizontal (m) | Altura sobre el techo (m) | Ángulo de altura (°) | ¿Crece/cambia? | Foto |
|---|---|---|---|---|---|---|---|
| 1 | Tanque de agua vecino | | | | | No | IMG_… |
| 2 | Árbol de mango | | | | | Sí | IMG_… |

3. **Fotos** numeradas: fachada, cada agua del techo, cubierta en detalle, correas desde el interior, tablero eléctrico y medidor, lugar propuesto para inversor/baterías, cada obstáculo, panorámicas desde el techo.
4. **Capturas** de Google Earth (con medidas) y de SunCalc/Sun Seeker.
5. Datos de la factura (Paso 0 del flujo) y ubicación del medidor de Air-e.
6. Notas de riesgos del sitio: ¿zona de arroyo/inundación? ¿acceso fácil al techo (robo)? ¿cercanía de árboles con ramas sobre el techo (hojas en canales)?

Con este paquete, cualquier instalador puede hacer un diseño y una cotización **comparables**, y usted puede verificar las simulaciones con PVGIS/PVWatts (ver [`flujo-de-trabajo-recomendado.md`](flujo-de-trabajo-recomendado.md)).

---

## Referencias (consultadas 2026-10-28)

- [1] Google Earth — *Versions* (Earth Pro: imágenes históricas; descarga disponible hasta el 25 jun 2027). https://www.google.com/earth/about/versions/
- [2] SunCalc — https://www.suncalc.org/
- [3] Sun Seeker (App Store). https://apps.apple.com/app/sun-seeker-tracker-surveyor/id330247123
- [4] NOAA NCEI — Magnetic Field Calculator (WMM-2025), declinación para 10.632, −74.921 el 2026-10-28: −8.86° ± 0.33°, variación −0.15°/año. https://www.ngdc.noaa.gov/geomag/calculators/magcalc.shtml
- [5] Global Solar Atlas — punto del proyecto. https://globalsolaratlas.info/detail?c=10.632,-74.921,11
- [6] PVGIS 5.3 API (ERA5) y 5.2 (NSRDB) — optimización de ángulos para el sitio. https://re.jrc.ec.europa.eu/api/v5_3/PVcalc?lat=10.632&lon=-74.921&peakpower=1&loss=14&optimalangles=1&outputformat=json
- [7] Solar Pathfinder — https://solarpathfinder.com/product/solar-pathfinder-with-tripod-and-case/
