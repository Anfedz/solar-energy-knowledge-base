# Clima cálido (seco/húmedo): temperatura, tecnologías de celda y degradación

> **Contexto Sabanalarga:** sabana tropical (Köppen Aw/BSh); ambiente diurno típico de 30–36 °C, mínimas de ~22–24 °C, humedad relativa alta en las noches (frecuentemente 80–100 %), radiación UV alta todo el año, polvo en la temporada seca y aerosol salino atenuado (~40 km del mar). Estas condiciones atacan al módulo de tres formas: **(1)** pérdida instantánea de potencia por temperatura, **(2)** degradación acelerada (calor + humedad + UV + voltaje) y **(3)** corrosión.

---

## 1. Pérdidas por temperatura

### 1.1 Ecuación básica
La potencia en el punto de máxima potencia varía casi linealmente con la temperatura de celda (Skoplaki y Palyvos, 2009a; Dubey et al., 2013):

$$P = P_{STC}\,\frac{G}{1000}\,\big[1 + \gamma\,(T_c - 25\,^{\circ}\mathrm{C})\big]$$

- γ = coeficiente de temperatura de Pmax (%/°C, negativo; viene en la ficha técnica).
- Análogamente: Voc(T) = Voc,STC·[1 + β·(Tc − 25)], con β ≈ −0,24 a −0,29 %/°C para el c-Si moderno.

### 1.2 Modelos de temperatura de celda (comparación numérica para Sabanalarga)

| Modelo | Ecuación | Parámetros típicos | Fuente |
|---|---|---|---|
| **NOCT / NMOT** (simple) | Tc = Ta + (NOCT − 20)/800 · G | NOCT ≈ 42–45 °C (o NMOT según IEC 61215) | Skoplaki y Palyvos (2009b) |
| **Sandia (SAPM)** | Tm = G·exp(a + b·WS) + Ta ; Tc = Tm + (G/1000)·ΔT | vidrio/polímero en rack abierto: a = −3,56, b = −0,075, ΔT = 3; vidrio/vidrio en montaje cercano: a = −2,98, b = −0,0471, ΔT = 1; vidrio/polímero con dorso aislado: a = −2,81, b = −0,0455, ΔT = 0 | King, Boyson y Kratochvil (2004) |
| **Faiman** (base de IEC 61853) | Tm = Ta + G/(U0 + U1·WS) | U0 = 25 W/m²K, U1 = 6,84 W/m³sK (rack abierto, desierto del Néguev) | Faiman (2008) |
| **PVsyst** | Tc = Ta + α·G·(1 − η)/(Uc + Uv·WS) | Uc = 29 (libre), 20 (semi-integrado), 15 (aislado) W/m²K; Uv = 0; α = 0,9 | Ayuda de PVsyst; documentación de pvlib |

**Cálculo con Ta = 33 °C, G = 900 W/m² y WS = 2 m/s (mediodía típico de temporada seca en Sabanalarga):**

| Modelo / montaje | Tc estimada |
|---|---|
| PVsyst, montaje libre (Uc = 29) | 55 °C |
| Sandia, vidrio/polímero en rack abierto | 58 °C |
| Faiman (rack abierto) | 56 °C (módulo) |
| NOCT = 45 °C | 61 °C |
| Sandia, vidrio/vidrio en montaje cercano (coplanar a <10 cm del techo) | 76 °C |
| PVsyst, aislado (Uc = 15) | 76 °C |
| Sandia, dorso aislado | 83 °C |

**Pérdida instantánea de potencia según tecnología:**

| Tc (°C) | PERC (γ = −0,35 %/°C) | TOPCon (−0,30) | HJT (−0,26) |
|---|---|---|---|
| 45 | −7,0 % | −6,0 % | −5,2 % |
| 55 | −10,5 % | −9,0 % | −7,8 % |
| 60 | −12,2 % | −10,5 % | −9,1 % |
| 65 | −14,0 % | −12,0 % | −10,4 % |
| 70 | −15,7 % | −13,5 % | −11,7 % |
| 75 | −17,5 % | −15,0 % | −13,0 % |

**Pérdida anual por temperatura y baja irradiancia (PVGIS, Sabanalarga):** ≈ **11,9 %** con montaje libre/ventilado frente a ≈ **15,5 %** con montaje integrado al edificio. Es decir, **una buena ventilación del dorso vale ≈4 % de energía anual** (cálculo propio con la API de PVGIS, ver `desempeno-fv-caribe-colombiano.md`).

**Medición local:** módulos policristalinos en Barranquilla a 46,4–46,7 °C con solo 529–585 W/m² (Audivet et al., 2021). Kurnik et al. (2011) muestran en campo que el modo de montaje (separación del techo) domina la temperatura de operación.

### 1.3 Recomendaciones de diseño derivadas
1. **Separar los módulos ≥10–15 cm de la cubierta** (idealmente más en techos de lámina de zinc o fibrocemento, que se calientan mucho) y dejar libres las entradas y salidas de aire.
2. Preferir módulos con **γ ≤ −0,30 %/°C** (TOPCon/HJT) si el sobrecosto es menor que ≈3–5 %.
3. Dimensionar los strings con la Vmp a 70–75 °C de celda (ver metodología).
4. No instalar el inversor bajo el sol directo ni en un ático sin ventilar: los inversores reducen su potencia (*derating*) por encima de ~40–45 °C de ambiente ⚠️ (dato de las fichas técnicas típicas).

---

## 2. PERC vs TOPCon vs HJT en clima cálido

| Tecnología | γ Pmax típico (ficha técnica) | Comportamiento en calor | Riesgos de confiabilidad relevantes en el trópico |
|---|---|---|---|
| **PERC (p-type, mono)** | −0,34 a −0,37 %/°C | Peor de las tres en calor | **LeTID** (degradación inducida por luz y temperatura elevada; ensayo IEC TS 63342), LID por boro-oxígeno, PID |
| **TOPCon (n-type)** | −0,29 a −0,32 %/°C | Intermedio; bifacialidad 70–85 % | Sensibilidad documentada a la **degradación inducida por UV** (UVID) y a la **corrosión por humedad + sodio** de la metalización frontal en ensayos de calor húmedo (Gebhardt et al., 2026; Pirot-Berson et al., 2026). Exigir ensayos extendidos (DH2000, UV60+) o garantías robustas. |
| **HJT (heterounión, n-type)** | −0,24 a −0,26 %/°C | El mejor en calor; Voc alto | Sensible a la humedad si el encapsulado/borde es deficiente; UVID; proceso a baja temperatura |

**Física y evidencia:**
- Dupré, Vaillon y Green (2015) muestran que el coeficiente de temperatura está ligado principalmente a la Voc: un mayor voltaje de circuito abierto implica una menor sensibilidad térmica. Esto explica la ventaja de HJT.
- Haschke et al. (2017, *Energy & Environmental Science*) comparan Al-BSF, PERC, PERT y HJT en climas cálidos y soleados. El coeficiente de temperatura del **módulo** es peor que el de la **celda** por la resistencia serie de las interconexiones, y las arquitecturas con alta "resistencia de carga característica" (HJT) minimizan este efecto. Para maximizar el rendimiento en calor importan tanto una Voc alta como una baja relación resistencia serie/resistencia de carga.
- La evidencia de campo comparativa TOPCon vs PERC proviene sobre todo de fabricantes (ganancias reportadas de 2–5 % en sitios cálidos) ⚠️: posible sesgo comercial y sin revisión por pares.

**Estimación propia (orden de magnitud):** con una temperatura de celda media ponderada por energía de ≈45–50 °C en Sabanalarga, la diferencia de γ entre PERC (−0,35) y HJT (−0,25) vale ≈ (0,10 %/°C × 20–25 °C) ≈ **2–2,5 % más energía anual** para HJT; entre PERC y TOPCon, ≈1–1,5 %. ⚠️ Inferencia; no hay medición local.

---

## 3. Degradación de largo plazo en trópicos

| Fuente | Hallazgo |
|---|---|
| Jordan y Kurtz (2013), *Prog. Photovolt.* 21:12–29 | ≈2.000 tasas de degradación: **mediana de 0,5 %/año**; la media es mayor por la cola de sistemas defectuosos. |
| Jordan, Kurtz, VanSant y Newmiller (2016), *Prog. Photovolt.* 24:978–989 | >11.000 tasas de 40 países: c-Si con **mediana de 0,5–0,6 %/año y media de 0,8–0,9 %/año**; indicios de mayor degradación en climas cálidos. |
| Jordan et al. (2022), *Prog. Photovolt.* 30:1166–1175 (flota de EE. UU., 7,2 GW) | Tasa de pérdida de desempeño global de −0,75 %/año; **−0,48 %/año en climas fríos frente a −0,88 %/año en climas cálidos**. |
| Luo et al. (2019), *IEEE J. Photovolt.* 9(1):266–271 (Singapur, tropical húmedo) | Módulos c-Si con tasas de **−0,03 a −0,47 %/año** (PR corregido por temperatura; 7 años) ⚠️ (rango tomado de fuente secundaria). |
| Ndiaye et al. (2013, revisión; 2014, Dakar) | Modos de falla dominantes en el trópico: decoloración del EVA, delaminación, corrosión, *hot spots*. |
| Köntges et al. (2014, 2017) — IEA PVPS Task 13 | Catálogo de fallas en campo. El **ácido acético** del EVA (que se forma con calor + humedad) corroe la metalización y favorece PID y delaminación; el encapsulante y el *backsheet* son decisivos. |

**Valor de diseño recomendado para Sabanalarga:** 0,5–0,7 %/año para módulos de primer nivel (Tier 1) con garantía lineal (típicamente ≤0,4–0,55 %/año en n-type) y 0,8–1,0 %/año en un escenario pesimista o con módulos de calidad dudosa. El primer año suma la LID/LeTID inicial (1–2 % en p-type).

### 3.1 PID (degradación inducida por potencial)
- Mecanismo: el alto voltaje entre las celdas y el marco aterrizado, combinado con humedad y temperatura, provoca la migración de iones Na⁺ del vidrio (Pingel et al., 2010; Luo et al., 2017). Es más severo en climas **cálidos y húmedos** y en los módulos del extremo negativo del string.
- Mitigación: módulos certificados según **IEC TS 62804-1** (ensayo de PID; buscar "PID-free" o "PID-resistant" con ensayo a 85 °C/85 % HR o 60 °C/85 % HR), inversores con función anti-PID o recuperación nocturna, y strings cortos en residencial (≤600 V reduce el riesgo).

### 3.2 Delaminación, decoloración y *hot spots*
- Causas: calor húmedo, UV y ciclos térmicos diarios. En Barranquilla la falla más observada fue la decoloración (Audivet et al., 2021).
- Mitigación: encapsulante POE o EPE en lugar de EVA puro en módulos vidrio-vidrio, *backsheet* de calidad (evitar PA/poliamida sin historial), cajas de conexión IP68 y diodos de bypass con margen térmico.

---

## 4. Corrosión: normas de ensayo que deben exigirse

| Norma | Qué ensaya | Relevancia en Sabanalarga |
|---|---|---|
| **IEC 61215-1/-2 (2021)** | Calificación del diseño de módulos terrestres: calor húmedo 85 °C/85 % HR por 1.000 h, ciclos térmicos (200), humedad-congelamiento, UV, carga mecánica, etc. | Requisito mínimo. Pedir el certificado de un laboratorio acreditado. |
| **IEC 61730-1/-2 (2023)** | Seguridad eléctrica y contra incendio del módulo (clase de aplicación, aislamiento) | Requisito (también lo exigen el RETIE y la NTC 2050). |
| **IEC 61701 (2020)** | **Niebla salina**, con severidades 1 a 8 (las altas simulan ambientes marinos y de descongelantes) | **Muy recomendable** por la cercanía al mar y la brisa marina; a 40 km basta una severidad intermedia ⚠️, pero muchos módulos Tier 1 ya certifican severidad 6. |
| **IEC 62716 (2013)** | Corrosión por **amoníaco** | Solo si el techo está cerca de establos, galpones avícolas o porquerizas (frecuentes en zonas rurales del Atlántico). |
| **IEC TS 62804-1 (2015)** | PID | Recomendable en clima húmedo. |
| **IEC TS 63342 (2022)** | LeTID | Relevante para PERC (p-type). |
| **ISO 9223 (2012)** | Clasificación de corrosividad atmosférica C1–CX | Para elegir la estructura y la tornillería. Barranquilla es C4 (Audivet et al., 2021); estudios caribeños advierten que ISO 9223 puede **subestimar** la corrosión en costas tropicales ⚠️. |

---

## 5. Baterías a alta temperatura (resumen; detalle en `baterias-tecnologia-y-vida-util.md`)
- Ley de Arrhenius: k = A·exp(−Ea/RT). Para LiFePO₄ con Ea ≈ 31,5 kJ/mol (modelo de ciclado de Wang et al., 2011), **pasar de 25 a 35 °C acelera la pérdida de capacidad ≈1,5×**, y a 40 °C ≈1,8×.
- Plomo-ácido (VRLA/AGM/gel): regla práctica de diseño de **vida en flotación reducida a la mitad por cada ≈8–10 °C sobre 25 °C** ⚠️ (regla de la industria recogida en las guías IEEE de mantenimiento; ver bibliografía). A 35 °C promedio, la vida esperada baja al ≈43–50 % de la nominal.
- **Implicación:** en Sabanalarga las baterías deben ir en un recinto **sombreado, ventilado y lejos del techo de zinc**; nunca en un cuarto cerrado bajo la cubierta.

---

## Referencias de este archivo
Ver [`bibliografia.md`](bibliografia.md) (secciones C, D y G).
