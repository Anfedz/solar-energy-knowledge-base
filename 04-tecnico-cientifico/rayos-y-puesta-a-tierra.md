# Rayos, sobretensiones y puesta a tierra para FV en Sabanalarga

> **Por qué importa:** Colombia está entre los países con más actividad eléctrica atmosférica del mundo, y la **Llanura Caribe** (que incluye el Atlántico) aparece en estudios recientes de la Universidad Nacional como una de las subregiones con **mayor densidad de descargas y mayor riesgo por rayos** del país. Un arreglo FV en el techo es una antena de gran área conectada por cables largos a equipos electrónicos sensibles (el inversor). La causa más común de daño no es el impacto directo, sino las **sobretensiones inducidas** por rayos cercanos.

---

## 1. Densidad de descargas a tierra (DDT) en el Atlántico: lo que dice la literatura

| Fuente | Datos | Valor para el Atlántico / Llanura Caribe |
|---|---|---|
| **Cruz Bernal (2019)**, tesis de maestría, Universidad Nacional de Colombia, dirigida por **Horacio Torres Sánchez** y Daniel Aranguren. Datos de la red **LINET** 2012–2017, celdas de 3×3 km, con corrección por eficiencia de detección | DDT promedio y nivel ceráunico (NC) por subregión natural. Promedio multianual nacional de ≈14 rayos/km²·año. | **Llanura Caribe (LLC): DDT = 13–32 flashes/km²·año** (2012: 32; 2013: 16; 2014: 13; 2015: 22; 2016: 24; 2017: 26). **NC = 111–204 días de tormenta/año.** La LLC está entre las subregiones de mayor actividad (junto con Catatumbo, Montaña Noroeste, Pacífico, Serranía del Baudó y Magdalena Medio) y fue la de **mayor mortalidad por rayos (292 muertes, 1997–2017)** y una de las de mayor riesgo. ✅ |
| Younes-Velosa (2020), *Rev. Acad. Colomb. Cienc.* 44(173):960–973 — revisión de 20 años del grupo PAAS-UN | Ecuación tropical **Ng = 0,0017·Td^1,56** (flashes/km²·año), propuesta por Younes y Torres (2002) e incorporada en la norma IEEE (2011). Los máximos del país están en el Bajo Cauca antioqueño, el Magdalena Medio y el Catatumbo. | Con Td = 90–204 días → **Ng ≈ 1,9–6,8** (cálculo propio). ✅ ecuación |
| Herrera, Younes y Porras (2018), *Atmospheric Research* 203:164–174 | Estudio de 14 años de descargas nube-tierra en Colombia con datos de una red de localización. | No se pudo acceder al texto completo para extraer el valor del Atlántico ⚠️ |
| Aranguren, López, Inampués, Torres y Betz (2017), *J. Atmos. Solar-Terr. Phys.* 154:182–189 | Influencia de la topografía en la actividad de rayos: los máximos están en piedemontes y valles interandinos. | La Llanura Caribe es plana; su actividad es alta pero sin los extremos de los piedemontes ⚠️ |
| Albrecht et al. (2016), *BAMS* 97(11):2051–2068 | Mapa global de puntos calientes (LIS/TRMM). El Lago de Maracaibo (Venezuela, cerca de la frontera) es el **punto con más rayos del planeta**, y varios de los principales *hotspots* de Suramérica están en Colombia. | Contexto regional ✅ |
| Fernández, Villamil, Barreto, Rojas, Santamaría (U. Distrital), Holle y Brooks (Vaisala): GLD360 Colombia 2013–2018 | Mapas de DDT con GLD360 y promedios por región. | Resumen de congreso; sin cifras accesibles para el Atlántico ⚠️ |
| Tabla de Seguros SURA (sin fuente primaria explícita; posiblemente derivada de tablas normativas antiguas ⚠️) | Áreas de 300×300 km | **Barranquilla: DDT = 1; 90 días de tormenta/año**; Cartagena y Santa Marta: 2 y 120. **Valores antiguos y muy inferiores a los de LINET**: no usar para diseño sin verificar. |

**Valor de diseño recomendado (inferencia):** a falta de un dato puntual para Sabanalarga, use **DDT ≈ 10–30 flashes/km²·año** (rango de la LLC según LINET, Cruz Bernal 2019) para el análisis de riesgo según NTC 4552-2 / IEC 62305-2. Para un valor oficial del sitio, consulte el mapa de DDT de la NTC 4552 o datos comerciales (Keraunos/LINET) ⚠️.

> ⚠️ **Discrepancia importante:** las tablas antiguas (~1–3 rayos/km²·año para la Costa) y las mediciones recientes de LINET (13–32) difieren hasta 10×. Esto se debe a la tecnología y la eficiencia de detección de las redes y, posiblemente, a la inclusión de distintos tipos de descarga. El diseño debe ser **conservador**.

---

## 2. Frecuencia esperada de impactos directos en una casa (IEC 62305-2 / NTC 4552-2)

$$N_D = N_G \cdot A_D \cdot C_D \cdot 10^{-6}\quad[\text{impactos/año}]$$
$$A_D = L\,W + 2\,(3H)(L+W) + \pi(3H)^2$$

Casa de 15 m × 10 m × 6 m de altura (con el arreglo FV en el techo): A_D ≈ 2.068 m². C_D = 0,5 si está rodeada de construcciones de altura similar y 1 si está aislada.

| N_G (flashes/km²·año) | C_D = 0,5 | C_D = 1 |
|---|---|---|
| 2 (tabla antigua) | 0,0021/año (1 cada ~480 años) | 0,0041 (1 cada ~240 años) |
| 13 | 0,013 (1 cada ~74 años) | 0,027 (1 cada ~37 años) |
| 20 | 0,021 (1 cada ~48 años) | 0,041 (1 cada ~24 años) |
| 32 | 0,033 (1 cada ~30 años) | 0,066 (1 cada ~15 años) |

(Cálculo propio.) Con los valores de LINET, la probabilidad de un impacto directo **durante la vida del sistema (25 años)** es del orden de **50–80 % para una casa aislada** (C_D = 1) y de ≈30–55 % rodeada de construcciones similares (C_D = 0,5), según P = 1 − e^(−25·N_D). Además, los **impactos cercanos** (a <0,5–1 km, que inducen sobretensiones en los cables) son mucho más frecuentes: el área de captura para efectos inducidos es de decenas de hectáreas.

**Conclusión práctica:**
- La **protección contra sobretensiones (DPS/SPD)** en DC y AC es **obligatoria en la práctica** para cualquier sistema FV en Sabanalarga.
- La **protección externa (pararrayos/SIPRA)** depende del análisis de riesgo. En viviendas rurales aisladas, en casas que son la estructura más alta del entorno, o si hay personas en el techo, es recomendable hacer el análisis formal con NTC 4552-2. Verifique en `02-marco-legal-y-regulatorio` cuándo lo exige el RETIE.

---

## 3. Implicaciones de diseño para el sistema FV

Basado en IEC TR 63227:2020 (protección contra rayos y sobretensiones de sistemas FV), IEC 62305-3/-4, IEC 61643-31/-32 y NTC 4552-3/-4 ⚠️ (partes según la edición vigente):

1. **Equipotencialidad:** unir los marcos de todos los módulos, la estructura, las canaletas metálicas y la carcasa del inversor a una **barra equipotencial** conectada al **único** sistema de puesta a tierra de la casa.
2. **Minimizar los lazos de inducción:** llevar los conductores **+ y − de cada string juntos** (paralelos, trenzados o en la misma canaleta) y junto al conductor de tierra; evitar los lazos grandes en el cableado de los módulos. La tensión inducida es proporcional al área del lazo.
3. **DPS en DC:** tipo 2 (clase II) en la entrada DC del inversor; un segundo DPS cerca del arreglo si el cable DC mide más de ~10 m (criterio habitual de IEC TR 63227 / guía CLC/TS 50539-12 ⚠️). U_CPV ≥ Voc,max del string a T_min, e I_n ≥ 20 kA (8/20 µs) típico.
4. **DPS en AC:** tipo 2 en el tablero de conexión del inversor y tipo 1+2 en el tablero principal si existe un SIPRA externo o si la acometida es aérea en zona rural.
5. **Si hay un pararrayos (SIPRA):** mantener la **distancia de separación *s*** entre las puntas/bajantes y el arreglo FV (IEC 62305-3). Si no se puede cumplir, conectar el arreglo directamente al SIPRA y usar DPS **tipo 1** en DC. Las puntas no deben proyectar sombra sobre los módulos.
6. **Canalización metálica** (tubería EMT/IMC) para el tramo DC dentro de la casa, aterrizada en ambos extremos, que actúa como pantalla.
7. **Comunicaciones:** el inversor conectado por cable Ethernet/RS485 también necesita DPS de datos; preferir el wifi para el monitoreo.

---

## 4. Puesta a tierra

| Aspecto | Recomendación | Base |
|---|---|---|
| Sistema único | Un solo sistema de puesta a tierra para la acometida, el FV y el SIPRA (interconectados) | NTC 2050 Art. 250; RETIE; IEC 62305-3 |
| Electrodo | Varilla de cobre o *copperweld* de ≥2,4 m (5/8") o malla/anillo si hay SIPRA; soldadura exotérmica | RETIE ⚠️ verificar los requisitos de material vigentes |
| Resistencia | Referencia del RETIE para el neutro de la acometida en BT: **≤25 Ω** ⚠️. Con un SIPRA, lo prioritario es la geometría y la equipotencialidad más que un valor bajo. | RETIE (tabla de valores de referencia) ⚠️ |
| Suelos de sabana | En la temporada seca la resistividad sube: medir (método de Wenner) y, si hace falta, varillas múltiples separadas ≥2× su longitud o tratamiento del suelo con un mejorador certificado | Práctica de ingeniería |
| Conductor de puesta a tierra de equipos (marcos) | Cobre de ≥6 mm² (AWG 10) en residencial típico, o según la tabla de NEC 250.122 por la protección aguas arriba; en un tramo expuesto al daño mecánico, ≥AWG 6 ⚠️ | NEC 690.45; NTC 2050 |
| Conexión al aluminio | Usar grapas de puesta a tierra listadas (bimetálicas o WEEB) para evitar la corrosión galvánica Al–Cu en un ambiente C3–C4 | — |

---

## 5. Vacíos
- No hay una DDT oficial publicada **para el municipio de Sabanalarga**; los valores de LINET son de subregión.
- No se encontraron estudios colombianos sobre **fallas de inversores FV residenciales por rayos** en la Costa.

---

## Referencias de este archivo
Ver [`bibliografia.md`](bibliografia.md) (sección J).
