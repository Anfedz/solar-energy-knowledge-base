# Baterías: tecnología, vida útil y efecto de la temperatura en Sabanalarga

> **Conclusión:** para un clima de 30–36 °C, **LiFePO₄ (LFP)** es la elección técnica por defecto: tolera mejor la profundidad de descarga, tiene más ciclos, es más eficiente y químicamente más estable que NMC. El plomo-ácido solo se justifica por presupuesto inicial muy bajo y uso esporádico, y en el calor pierde la mitad de su vida o más. **El factor que más controla la vida de cualquier batería en Sabanalarga es la temperatura del recinto.**

---

## 1. Comparación técnica

| Parámetro | LiFePO₄ (LFP) | NMC / NCA | Plomo-ácido VRLA (AGM/gel) | Plomo-ácido inundado (OPzS/tubular) |
|---|---|---|---|---|
| Profundidad de descarga (DoD) recomendada | 80–90 % | 80–90 % | 30–50 % | 50 % |
| Ciclos hasta el 80 % de capacidad (25 °C, DoD 80 %) | 3.000–6.000+ ⚠️ (fichas técnicas; Preger et al. 2020 muestran que LFP retiene mejor la capacidad que NCA/NMC en ciclado) | 1.000–3.000 ⚠️ | 300–800 a DoD 50 % ⚠️ | 1.200–2.000 a DoD 50 % ⚠️ |
| Eficiencia de ida y vuelta | 92–96 % | 92–95 % | 75–85 % | 70–80 % |
| Estabilidad térmica | Alta (el cátodo de fosfato no libera O₂ fácilmente) | Menor; mayor riesgo de fuga térmica | Riesgo de H₂ (ventilación) | Riesgo de H₂; requiere relleno de agua |
| Sensibilidad a la carga parcial (PSoC) | Baja | Baja | **Alta** (sulfatación) | Media |
| Mantenimiento | Ninguno (BMS) | Ninguno (BMS) | Bajo | Alto (agua, ecualización) |
| Rango de carga típico (ficha técnica) | 0–45/55 °C ⚠️ | 0–45 °C | −20–50 °C | −20–50 °C |

**Normas a exigir:** IEC 62619 (seguridad de baterías de litio industriales/estacionarias), IEC 62620 (desempeño), UL 1973 / UL 9540A (ensayo de propagación de fuego), UN 38.3 (transporte). Para plomo-ácido: IEC 60896-21/-22 (VRLA) o IEC 61427-1 (baterías para sistemas FV).

---

## 2. Envejecimiento y temperatura: ley de Arrhenius

La velocidad de las reacciones de degradación crece exponencialmente con la temperatura:

$$k(T) = A\,e^{-E_a/(R\,T)} \quad\Rightarrow\quad \frac{k(T)}{k(25\,^{\circ}\mathrm{C})} = \exp\!\left[\frac{E_a}{R}\left(\frac{1}{298{,}15} - \frac{1}{T}\right)\right]$$

### 2.1 LiFePO₄
- **Wang et al. (2011, *J. Power Sources* 196:3942–3948):** con celdas de grafito-LFP ensayadas en una matriz de temperatura (−30 a 60 °C), DoD (10–90 %) y tasa de descarga (C/2–10C), la pérdida de capacidad sigue Q_loss = B·exp[−(31.700 − 370,3·C_rate)/(R·T)]·(Ah)^0,55. Es decir: **depende sobre todo de la temperatura y del Ah acumulado**, con E_a ≈ 31,5 kJ/mol a C/2, y la DoD influye poco a tasas bajas.
- **Naumann et al. (2018, *J. Energy Storage* 17:153–169):** el envejecimiento **calendario** de LFP/grafito crece con la temperatura **y con el estado de carga (SoC)** almacenado; la pérdida sigue aproximadamente √t. Implicación: no mantener la batería al 100 % de SoC por largos periodos en un recinto caliente.
- **Preger et al. (2020, *J. Electrochem. Soc.* 167:120532; Sandia):** en un estudio de varios años con LFP, NCA y NMC comerciales variando la temperatura (15–35 °C), la DoD y la tasa, **las condiciones de operación cambiaron en miles de ciclos el tiempo hasta el 80 % de capacidad**. Los datos son abiertos (batteryarchive.org).
- **Leng, Tan y Pecht (2015, *Sci. Rep.* 5:12967):** confirman, para Li-ion (cátodo de LCO) entre 25 y 55 °C, que la tasa de envejecimiento crece con la temperatura por el crecimiento de películas superficiales (SEI) en los electrodos. (Química distinta a LFP; útil como evidencia del mecanismo.)

**Factor de aceleración calculado (E_a = 31,5 kJ/mol, Wang et al., 2011; cálculo propio):**

| Temperatura media de la celda | Factor vs. 25 °C | Vida relativa |
|---|---|---|
| 30 °C | 1,23× | ≈81 % |
| 35 °C | 1,51× | ≈66 % |
| 40 °C | 1,84× | ≈54 % |
| 45 °C | 2,22× | ≈45 % |

(Con una E_a "pesimista" de 50 kJ/mol, como en algunos estudios de envejecimiento calendario ⚠️, los factores serían 1,39×, 1,92×, 2,63× y 3,55×.)

### 2.2 Plomo-ácido
- **Ruetschi (2004, *J. Power Sources* 127:33–44):** los mecanismos dominantes son la corrosión de la rejilla positiva, la sulfatación, la pérdida de agua y el desprendimiento de la masa activa. Todos se aceleran con la temperatura y con la operación en carga parcial.
- **Regla de diseño de la industria:** la vida en flotación de VRLA **se reduce a la mitad por cada ≈8–10 °C sobre 25 °C** ⚠️ (recogida en las guías IEEE de baterías estacionarias, como IEEE 1188 para VRLA, y en las fichas de los fabricantes; verifique la cifra exacta en la norma).

| Temperatura media | Vida relativa (mitad cada 8,3 °C) | Vida relativa (mitad cada 10 °C) |
|---|---|---|
| 30 °C | 66 % | 71 % |
| 35 °C | 43 % | 50 % |
| 40 °C | 29 % | 35 % |

**Ejemplo:** una batería AGM "de 10 años" a 25 °C, instalada en un cuarto a 35 °C promedio, durará ≈**4–5 años**, y menos si además trabaja en ciclos profundos.

---

## 3. Recomendaciones para Sabanalarga

1. **Ubicación:** recinto interior, sombreado, ventilado y lejos de la cubierta metálica. Objetivo: **≤30 °C promedio**. Un cuarto que da al norte o al oriente y está en la planta baja es mejor que un ático o un garaje con techo de zinc.
2. **Nunca a la intemperie** ni en un gabinete metálico al sol (ni siquiera los modelos con IP65).
3. **LFP con BMS** que tenga sensores de temperatura y corte de carga a >45–55 °C (según la ficha técnica). Verifique que el inversor-cargador se comunique con el BMS (CAN/RS485) para cargar con el perfil correcto.
4. **SoC de reposo moderado:** en sistemas híbridos de respaldo, configure el SoC de mantenimiento en 80–90 % en vez de 100 % si el inversor lo permite (Naumann et al., 2018).
5. **Plomo-ácido (si el presupuesto obliga):** compensación de temperatura del voltaje de carga (−3 a −5 mV/°C/celda ⚠️ según el fabricante), DoD ≤50 %, recarga completa frecuente para evitar sulfatación y ventilación para el H₂.
6. **Garantía:** exija una garantía por **años y por energía acumulada (MWh)**, con la condición de temperatura explícita; muchas garantías de LFP se invalidan si la batería opera por encima de 40–45 °C ⚠️.

---

## 4. Costo nivelado del almacenamiento (orden de magnitud)

$$LCOS \approx \frac{C_{bat}}{N_{ciclos}\cdot E_{útil}\cdot \eta_{rt}}$$

Ejemplo ilustrativo ⚠️: LFP de 5 kWh útiles, a 6 M COP, con 4.000 ciclos y η_rt = 0,94 → 6.000.000 / (4.000 × 5 × 0,94) ≈ **320 COP por kWh desplazado**, que se suma al costo de la energía FV. Si en Sabanalarga la batería trabaja a 35 °C (vida de ≈66 %), el costo sube a ≈480 COP/kWh. Por eso, desde el punto de vista económico, en un sistema on-grid la batería se justifica sobre todo por el **respaldo** ante cortes, no por arbitraje.

---

## Referencias de este archivo
Ver [`bibliografia.md`](bibliografia.md) (sección G).
