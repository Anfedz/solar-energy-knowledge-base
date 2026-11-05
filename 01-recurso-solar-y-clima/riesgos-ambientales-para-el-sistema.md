# Riesgos ambientales para el sistema fotovoltaico — Sabanalarga (Atlántico)

> Alcance: amenazas del entorno físico (y de seguridad) que afectan el diseño, la vida útil y la operación de un sistema FV residencial en techo en 10.632, -74.921.
> Fecha de consulta de fuentes: **2026-10-28**. `[n]` = referencias al final. ⚠️ = por verificar / criterio propio. **Nada de este documento reemplaza el diseño estructural y eléctrico firmado por profesionales (RETIE exige diseño y certificación de la instalación).**

---

## 0. Matriz resumen

| Riesgo | Nivel para el sitio | Parámetro clave | Medida de diseño principal |
|---|---|---|---|
| **Viento** (vendavales, alisios, bordes de ciclones) | **Alto** | NSR-10 zona 5: **36 m/s (130 km/h)** B.2.3 / **46 m/s (165 km/h)** B.2.4 | Estructura certificada ≥ 46 m/s, anclaje a correas/vigas, evitar zonas de borde/esquina, inclinación baja |
| **Temperatura** | **Alto** (pérdidas, no daño) | T amb. máx. media 33–36 °C; récord regional 39.8 °C | Módulos de bajo coeficiente térmico, ventilación trasera, inversor a la sombra |
| **Rayos** | **Alto** | **10–30 descargas/km²·año** y 111–204 días de tormenta (LINET, Llanura Caribe, U. Nacional); tablas antiguas daban ≈1–2 (subestiman) | Puesta a tierra y equipotencialización, DPS en DC y AC, evaluación NTC 4552 |
| **Corrosión** | Medio (probable C3) | ≈ 31–40 km del mar; HR ≈ 80 % | Aluminio anodizado + inoxidable, aislar pares galvánicos, IP65 |
| **Inundación / encharcamiento** | Medio (urbano, por arroyos) | Eventos de 2022 con ≈ 30 barrios afectados | Inversor/baterías elevados, drenaje del techo, no instalar en suelo inundable |
| **Polvo y suciedad** (sequía, polvo del Sahara) | Medio | Temporada seca dic–mar; polvo sahariano may–ago | Plan de limpieza, inclinación ≥ 10° ⚠️ |
| **Robo / vandalismo** | Medio ⚠️ (sin estadística local) | — | Tornillería antirrobo, inversor/baterías en interior con llave, registro de seriales, monitoreo |
| **Ciclones tropicales (impacto directo)** | Bajo (pero no nulo) | Temporada 1 jun–30 nov | Cubierto por el diseño de viento + revisión de anclajes antes de la temporada |

---

## 1. Viento

### 1.1 Norma aplicable y valores
- **NSR-10, Título B, Capítulo B.6** (cargas de viento). La velocidad básica V es la ráfaga de 3 s a 10 m en exposición C, período de retorno de 50 años [1][2].
- La **Figura B.6.4-1** vigente es la del **Decreto 1711 de 2021** [1]:
  - Región 4: 33 m/s (120 km/h) para combinaciones B.2.3; 42 m/s (150 km/h) para B.2.4.
  - **Región 5: 36 m/s (130 km/h) para B.2.3; 46 m/s (165 km/h) para B.2.4.**
- **Sabanalarga queda sobre el límite entre las regiones 4 y 5** (lectura georreferenciada de la figura, ⚠️ criterio propio). **Recomendación: diseñar con Región 5.**
- La nota del mapa pide "ser conservador" porque las zonas "no han sido estudiadas" [1]; y la literatura señala que los valores vienen de estudios de 1987 [3].
- Viento cotidiano: medio de 6.5–13.5 km/h, más fuerte en feb–mar (alisios del N/NE) [4]; en Barranquilla se registran ráfagas habituales de ≈ 41 km/h [5]. Los **vendavales convectivos** de la temporada de lluvias y los efectos indirectos de ondas tropicales/ciclones son la amenaza real [6][7].

### 1.2 Orden de magnitud (sólo orientativo ⚠️)
Presión dinámica de referencia q = 0.613·V² (Pa), sin factores de exposición, topografía, ráfaga ni coeficientes de presión:
- V = 36 m/s → q ≈ 0.79 kPa
- V = 46 m/s → q ≈ 1.30 kPa

En esquinas y bordes de cubierta los coeficientes de succión pueden multiplicar varias veces estos valores; el cálculo formal (NSR-10 B.6 y/o el método específico para paneles en cubierta del fabricante de la estructura) lo debe hacer un ingeniero.

### 1.3 Recomendaciones de diseño
1. **Estructura de montaje con certificado/memoria de cálculo para V ≥ 46 m/s** (o el valor que fije el ingeniero) y la categoría de exposición del sitio.
2. **Anclar a la estructura portante** (correas, vigas, losa), nunca sólo a la teja. En techos de fibrocemento o lámina, usar ganchos/soportes que transmitan la carga a la correa y sellos EPDM.
3. **Retirar los módulos de los bordes y esquinas** de la cubierta (zonas de mayor succión); dejar franja perimetral (el ancho lo define el cálculo ⚠️).
4. **Inclinación baja** (10–15°, coherente con la óptima de 13–16° [8][9]) y montaje coplanar → menor carga de viento que estructuras elevadas.
5. Verificar en la ficha técnica del módulo las **cargas de ensayo estático (IEC 61215)** frontal y posterior y las **zonas de sujeción** permitidas por el fabricante.
6. Revisión de **par de apriete** y estado de anclajes cada año **antes del 1 de junio** (inicio de la temporada de ciclones [6]).
7. Si la cubierta es vieja o de madera, pedir **revisión estructural** previa (carga muerta adicional ≈ peso de módulos + estructura).

---

## 2. Rayos (descargas eléctricas atmosféricas)

### 2.1 Datos
- Tabla de SURA (fuente GeoSURA, áreas de ≈ 300 × 300 km): **Barranquilla: densidad promedio 1 (descargas/km²·año ⚠️ unidad no explícita) y 90 días de tormenta/año**; Cartagena 2 y 120; Magangué 5 y 180 [10]. Sabanalarga, entre Barranquilla y Cartagena, quedaría en **≈ 1–2 descargas/km²·año y 90–120 días de tormenta** (⚠️ interpolación propia).
- La **NTC 4552** (protección contra rayos) usa densidad de descargas a tierra (DDT), nivel ceráunico y severidad para evaluar el riesgo; un trabajo de la U. Nacional recalculó estos parámetros para Colombia con la red LINET 2012–2017 [11]. Keraunos SAS opera la red LINET en Colombia [12]. ⚠️ No se obtuvo el valor oficial puntual para Sabanalarga.

> **Nota de reconciliación (revisión del repo):** las mediciones LINET 2012–2017 para la Llanura Caribe dan **DDT = 13–32 flashes/km²·año y NC = 111–204 días** (Cruz Bernal, 2019, U. Nacional), hasta 10× más que la tabla SURA. **Para diseño se adopta DDT ≈ 10–30** (criterio conservador). Detalle y cálculo de probabilidad de impacto en [`../04-tecnico-cientifico/rayos-y-puesta-a-tierra.md`](../04-tecnico-cientifico/rayos-y-puesta-a-tierra.md).
- La actividad eléctrica es mayor en las temporadas de lluvia (abr–jun y ago–nov).

### 2.2 Recomendaciones
1. **Evaluación de riesgo por rayo según NTC 4552** (exigida por RETIE para instalaciones ⚠️ verificar artículo vigente del RETIE con el diseñador).
2. **Equipotencializar** marcos de módulos y estructura metálica y conectarlos al sistema de puesta a tierra de la vivienda (un único sistema de tierra).
3. **DPS (dispositivos de protección contra sobretensiones)**: lado DC a la entrada del inversor (y también junto al arreglo si el recorrido DC es largo ⚠️ criterio típico > 10 m), y lado AC en el tablero.
4. Tender los conductores positivo y negativo **juntos** (minimizar el área de los lazos inducidos).
5. Si la casa tiene pararrayos, respetar la **distancia de separación** o integrar el arreglo al sistema de protección según NTC 4552.
6. Elegir inversor con DPS integrados tipo II en DC/AC si es posible (verificar ficha técnica).

---

## 3. Corrosión (salinidad y humedad)

### 3.1 Contexto
- Distancia al mar: **≈ 31–33 km** en línea recta hacia Tubará/Juan de Acosta y ≈ 40 km hacia Puerto Colombia (cálculo propio, ver `contexto-sabanalarga.md`).
- Humedad relativa media ≈ 80–82 % todo el año (IDEAM) [13] y temperatura media ≈ 28 °C → tiempo de humectación alto.
- En Barranquilla costera se han medido contenidos altos de cloruros (trabajos de la Universidad de la Costa con vela húmeda ISO 9225 y alambre sobre tornillo) [14]; ⚠️ no hay mediciones publicadas para Sabanalarga.
- **No existe un mapa oficial de categorías ISO 9223 por municipio** para Colombia (no encontrado) [14].

### 3.2 Categoría ISO 9223 estimada
- Descripciones informativas de ISO 9223:2012 (según transcripciones de fabricantes ⚠️): **C3** incluye "zona subtropical y tropical, atmósfera con baja contaminación" y "zonas costeras con baja deposición de cloruros"; **C4** incluye zonas costeras con deposición moderada de sal y zona tropical con contaminación media [15].
- **Estimación: C3 (corrosividad media)**, con posibilidad de C2–C3 lejos de vías y C4 sólo si hay fuentes industriales cercanas. ⚠️ No medido; si se quiere certeza, instalar probetas (ISO 9226) un año, lo cual normalmente no se justifica para una vivienda.

### 3.3 Recomendaciones
1. **Rieles de aluminio anodizado** y **tornillería de acero inoxidable** (A2 mínimo; A4/316 si la estructura queda expuesta a salpicadura o ambiente agresivo ⚠️).
2. **Evitar pares galvánicos**: separar aluminio de acero galvanizado o cobre con arandelas/separadores EPDM o nylon; usar conectores de puesta a tierra bimetálicos aprobados.
3. Estructuras de acero: **galvanizado en caliente** con espesor acorde a la vida útil en C3 (ISO 14713 / ISO 9223 ⚠️ verificar espesor).
4. Equipos exteriores con **IP65 o superior**; conectores MC4 originales y del mismo fabricante en ambos lados.
5. Preferir módulos con certificación **IEC 61701 (niebla salina)** — no obligatoria a esta distancia del mar, pero es un margen barato.
6. Inspección anual de corrosión en grapas, tornillos y bornes de tierra.

---

## 4. Inundaciones y encharcamiento

### 4.1 Datos
- **13 de noviembre de 2022:** desbordamiento de arroyos inundó ≈ 30 barrios de Sabanalarga (Los Nogales, San Carlos Etapa II, Los Robles, Paraíso, Puerto Amor, 20 de Enero, Los Campanos, John F. Kennedy y otros 22 sectores), con agua hasta la rodilla o la cintura [16]. Reportes adicionales: arroyo Membrillar (barrio Las Mercedes) [17].
- **Canal del Dique / Guájaro:** en 2022 Manatí, Repelón y **Sabanalarga** decretaron calamidad pública por niveles altos del Canal del Dique [17]; residentes compararon la emergencia de 2022 con la de 2010 (ruptura del Canal del Dique) [17].
- La segunda temporada de lluvias (ago–nov) es la más intensa en el Atlántico [6]. **Con El Niño activo (declarado oct 2026)**, se esperan lluvias por debajo de lo normal en el corto plazo [18], pero el riesgo vuelve con la transición a neutral/La Niña.

### 4.2 Recomendaciones
1. Consultar en la **Secretaría de Planeación** el mapa de amenaza por inundación del POT/EOT y si el predio está en zona de arroyo ⚠️ (documento no encontrado en línea).
2. **Inversor, tablero DC/AC, medidor y baterías a ≥ 1.2 m sobre el piso** ⚠️ (criterio propio; ajustar al nivel máximo de agua histórico del barrio) y nunca en sótanos.
3. Techo: verificar que canales y bajantes funcionen; que los soportes no perforen zonas de escorrentía; sellar cada perforación.
4. Evitar instalaciones a nivel del suelo en patios inundables.
5. Baterías de litio (LFP) en sitio seco, ventilado y fuera de la ruta del agua; considerar interruptor de corte accesible.

---

## 5. Temperatura extrema

### 5.1 Datos
- Máxima media mensual: 33.7 °C (Juan de Acosta, abril) a **36.2 °C** (Manatí, marzo); récord regional **39.8 °C** (Aeropuerto E. Cortissoz, junio) [13][19].
- Temperatura media anual ≈ 27–28 °C (IDEAM; Global Solar Atlas 27 °C) [8][13].
- PVGIS estima pérdidas por temperatura y baja irradiancia de ≈ −12 % anuales para este punto [9].
- Mínimas: ≈ 23 °C en enero (medias), récords de 18 °C (ene–feb) y un extremo de 14.9 °C (octubre) en Soledad [19].

### 5.2 Implicaciones de diseño
- **Ejemplo orientativo** (⚠️ fórmula NOCT simplificada): T_celda ≈ T_amb + (NOCT − 20)/800 × G. Con T_amb = 34 °C, NOCT = 45 °C y G = 1 000 W/m² → T_celda ≈ 65 °C. Con un coeficiente de potencia de −0.35 %/°C, la potencia cae ≈ 14 % respecto a STC (25 °C).
- **Diseño de strings:**
  - **Voc máxima** (con la temperatura mínima): usar **≈ 18 °C** como mínima conservadora (con 14.9 °C como caso extremo) ⚠️.
  - **Vmp mínima** (con la temperatura máxima de celda ≈ 70 °C): verificar que quede **por encima del límite inferior del rango MPPT** del inversor.
- **Recomendaciones:**
  1. Módulos con **coeficiente de temperatura de potencia bajo** (comparar fichas técnicas; tecnologías n-type TOPCon/HJT suelen tener mejores coeficientes que PERC ⚠️).
  2. **Espacio de ventilación** bajo los módulos (no pegarlos a la teja); ⚠️ valor típico de 10 cm, confirmar con el fabricante de la estructura.
  3. **Inversor a la sombra** y ventilado; revisar la curva de **derrateo térmico** del fabricante (la app Victron Toolkit, por ejemplo, calcula el derrateo por temperatura de sus inversores [20]).
  4. Baterías LFP en el lugar más fresco disponible (la vida útil disminuye con temperatura alta ⚠️).
  5. Cables con aislamiento para 90 °C y factores de corrección por temperatura (NTC 2050) ⚠️.

---

## 6. Polvo, suciedad y polvo del Sahara
- Temporada seca dic–mar casi sin lluvia (ene 10 mm, feb 5 mm en la estación IDEAM de Sabanalarga) [13] → los módulos no se lavan solos durante ≈ 3–4 meses, justo cuando la radiación es máxima.
- Polvo del Sahara: episodios mayo–agosto con cielos opacos y aumentos de material particulado en el Caribe colombiano; el IDEAM incluye al Atlántico entre los departamentos más expuestos [21].
- **Recomendaciones:** limpieza con agua (sin detergentes abrasivos) al menos 1–2 veces durante la temporada seca y después de episodios de polvo ⚠️; inclinación ≥ 10° para favorecer el autolavado; monitorear la caída de producción para decidir cuándo limpiar.

---

## 7. Ciclones tropicales
- Temporada 1 jun–30 nov; Colombia continental tiene menor frecuencia de impacto directo que otros países del Caribe; los efectos indirectos (lluvias, viento, oleaje) se presentan cuando los sistemas transitan al sur de 15° N [6]. Antecedentes: Irene (1971), Joan (1988), Bret (1993) [22]; ningún ciclón tocó tierra en Colombia en 2025 [6].
- **Medida:** el diseño estructural por viento (sección 1) cubre este riesgo; agregar inspección de anclajes y limpieza de canales en mayo.

---

## 8. Robo de equipos y vandalismo
- ⚠️ **No se encontraron estadísticas ni noticias específicas de robo de paneles solares en el Atlántico** en la búsqueda (2026-10). Sí hay reportes en Colombia de robos de viviendas con ingreso por el techo [23], y la ola de robo de cables es frecuente ⚠️ (noticias de Bogotá, 2026 [23]).
- **Recomendaciones:**
  1. **Tornillería antirrobo** (cabeza especial) en las grapas de los módulos, al menos en los módulos accesibles desde el borde.
  2. Ubicar **inversor y baterías en el interior** o en un gabinete metálico con candado; los equipos de mayor valor por kg son inversores y baterías.
  3. **Registrar números de serie** de módulos, inversor y baterías (fotos) y guardarlos con la factura; útil para denuncia y garantía.
  4. **Monitoreo con alertas** (app del inversor): una caída abrupta de producción o desconexión es la primera señal de hurto.
  5. Limitar el acceso al techo (escaleras guardadas, iluminación nocturna con sensor, cámara si ya existe sistema de seguridad).
  6. Evaluar **póliza de seguro** del hogar que incluya los equipos FV (preguntar explícitamente).

---

## Referencias (consultadas 2026-10-28)

- [1] MinVivienda — *Decreto 1711 del 13 de diciembre de 2021*, nueva Figura B.6.4-1 (zonas de amenaza eólica). https://minvivienda.gov.co/sites/default/files/normativa/decreto-1711-del-13-de-diciembre-de-2021.pdf
- [2] NSR-10 Título B (copia IDRD). https://www.idrd.gov.co/sites/default/files/documentos/Construcciones/2titulo-b-nsr-100.pdf ; EIRD — *Evaluación de código por viento, Colombia (NSR-98)*. https://www.eird.org/cd/acs/Espanol/EvalCodi/HablaEsp/Vientos/COLOMecv.pdf
- [3] Recia 4(1), 2012 — *Criterio estadístico para la selección de velocidades de viento para el diseño de armaduras de techo*. https://dialnet.unirioja.es/descarga/articulo/3968812.pdf
- [4] Weather Spark — Sabanalarga. https://es.weatherspark.com/y/23464/Clima-promedio-en-Sabanalarga-Colombia-durante-todo-el-año
- [5] Windfinder — Aeropuerto E. Cortissoz. https://es.windfinder.com/windstatistics/barranquilla
- [6] CRA — Circular 0000003 de 2026 (11 may 2026). https://www.crautonoma.gov.co/documentos/cambio-climatico/circulares/2026/0000003%20-%20RECOMENDACIONES%20PREPARACION%20INICIO%20SEGUNDA%20TEMPORADA%20LLUVIAS%202026%20Y%20TEMPORADA%20CICLONES.pdf
- [7] Blu Radio — *Tormenta eléctrica y fuertes vientos causan emergencias en al menos cinco municipios del Atlántico*. https://www.bluradio.com/blu360/caribe/tormenta-electrica-y-fuertes-vientos-causan-emergencias-en-al-menos-cinco-municipios-del-atlantico-rg10
- [8] Global Solar Atlas — punto 10.632, -74.921. https://globalsolaratlas.info/detail?c=10.632,-74.921,11
- [9] PVGIS 5.3 API (PVGIS-ERA5). https://re.jrc.ec.europa.eu/api/v5_3/PVcalc?lat=10.632&lon=-74.921&peakpower=1&loss=14&optimalangles=1&outputformat=json
- [10] Seguros SURA — *Riesgos por rayos y sus medidas de protección* (2024). https://www.segurossura.com.co/empresasura/Documentacion%20Formacion/riesgos-por-rayos-y-sus-medidas-de-proteccion.pdf
- [11] U. Nacional — *Evaluación del riesgo por rayos para Colombia*. https://repositorio.unal.edu.co/handle/unal/75636
- [12] UIS — caracterización de hotspots de rayos con red LINET (Keraunos). https://noesis.uis.edu.co/entities/publication/acb0e3cd-6378-475f-a224-6a3b333d615c/full
- [13] IDEAM — *Normales Climatológicas Estándar 1991–2020*. https://bart.ideam.gov.co/meteorologia/CLIMA/CLIMATOLOGIA/NORMALES%20CLIMATOLOGICAS/NC_ESTANDAR_1991-2020/
- [14] Minciencias/Redcol — *Estimación de la velocidad de deposición de cloruros en la zona noreste de Barranquilla* y trabajos relacionados (U. de la Costa). https://redcol.minciencias.gov.co/Record/RCUC2_8f8e27b12ec7296c2ccd2ea0a3379559/Description ; Scientia et Technica (2007), corrosión en atmósferas colombianas: https://www.redalyc.org/pdf/496/49637154017.pdf
- [15] Transcripción de categorías ISO 9223:2012 (Performance in Lighting / GEWISS; fuente de fabricante ⚠️). https://www.performanceinlighting.com/ch/en/iso-92232012
- [16] Blu Radio (13 nov 2022) — *Emergencia en Sabanalarga: inundaciones en 30 barrios*. https://www.bluradio.com/blu360/caribe/emergencia-en-sabanalarga-atlantico-fuertes-lluvias-generaron-graves-inundaciones-en-30-barrios-rg10
- [17] Blu Radio — *"El agua nos llegaba hasta el cuello": damnificados tras emergencia en Sabanalarga*; El Heraldo (2022). https://www.bluradio.com/blu360/caribe/el-agua-nos-llegaba-hasta-el-cuello-damnificados-tras-emergencia-en-sabanalarga-atlantico-rg10 ; https://www.elheraldo.co/atlantico/2022/06/24/alerta-amarilla-en-atlantico-por-alto-nivel-del-rio-magdalena-918701/
- [18] Vanguardia (8 oct 2026) — declaración oficial de El Niño. https://www.vanguardia.com/colombia/2026/10/08/el-fenomeno-de-el-nino-ya-fue-declarado-oficialmente-en-colombia-hasta-cuando-se-extendera/
- [19] Wikipedia — *Barranquilla*, tabla climática 1991–2020 (fuente IDEAM). https://en.wikipedia.org/wiki/Barranquilla
- [20] Victron Energy — *Introducing the Victron Toolkit App* (2024). https://www.victronenergy.com/blog/2024/09/04/introducing-the-victron-toolkit-app/
- [21] RCN Radio — *Polvo del Sahara llega a Colombia: departamentos afectados y recomendaciones del Ideam*. https://newsroom.rcnradio.com/colombia/polvo-del-sahara-llega-a-colombia-departamentos-afectados-y-recomendaciones-del-ideam
- [22] Boletín Científico CIOH N.º 25 (2007) (extracto de buscador). https://ojs.dimar.mil.co/index.php/CIOH/article/download/162/366/658
- [23] El Espectador — *Intentaban robar una casa en Bogotá: uno cayó del techo…*; Publimetro (feb 2026) — robo de cables en Puente Aranda. https://www.elespectador.com/bogota/intentaban-robar-una-casa-en-bogota-uno-cayo-del-techo-y-el-otro-quedo-atrapado/ ; https://www.publimetro.co/bogota/2026/02/18/video-un-presunto-ladron-se-electrocuto-al-robar-cables-y-provoco-un-largo-apago-en-puente-aranda-bogota/
