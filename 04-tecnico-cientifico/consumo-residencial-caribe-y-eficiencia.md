# Consumo residencial en la Costa Caribe y eficiencia antes de dimensionar

> **Idea central:** en Sabanalarga el **aire acondicionado (AA) y la refrigeración dominan la factura**. Cada kWh que se ahorra con eficiencia es más barato que un kWh solar, y además reduce los kWp, las baterías y el inversor necesarios. **Primero eficiencia, después paneles.**

---

## 1. Evidencia sobre el consumo en el Caribe colombiano

| Fuente | Dato | Notas |
|---|---|---|
| UPME (2026), *Proyección de la demanda de energía eléctrica y potencia máxima 2026–2040* (Rev. jul-2026), con base en datos del SUI de 2025 | Los departamentos del **Caribe (Magdalena, Atlántico, Bolívar, Cesar) superan los 640 kWh/hab·año** de consumo residencial per cápita; la región Caribe promedia **≈698 kWh/hab·año** frente a una **mediana nacional de ≈459**. La región Caribe es la de mayor consumo residencial total (≈8.524 GWh/año). | ✅ (presentación en PDF) |
| UPME (2026), ídem | En el país, refrigeración (43 %), iluminación (15 %) y televisión (14 %) explican >70 % del consumo residencial; **en el Caribe el uso distintivo es la climatización (ventilador y aire acondicionado)**. **Penetración del AA: Atlántico 31 %**, Cesar 21 %. Los estratos 1–3 concentran >85 % del consumo residencial; el consumo por hogar crece con el estrato. | ✅ |
| UPME / Corpoema (2019), *Primer Balance de Energía Útil (BEU) – sector residencial* | Refrigeración + AA = **48 %** de la energía final residencial (nacional). Parque estimado: ≈594.635 equipos de AA y ≈11,56 millones de neveras (2015). **EER promedio nacional del AA = 2,7 W/W (9,2 BTU/h/W)**; el mejor del mercado colombiano (RETIQ A) = 3,75 W/W (12,8 BTU/h/W); el mejor tecnológicamente disponible (BAT) = 5,86 W/W. Las neveras del parque promedian 2,16 kWh/año por litro (2,85 si tienen >20 años) frente a ≈1,0 de las mejores del mercado. | ✅ |
| Resolución UPME 0355 de 2004 | **Consumo de subsistencia: 173 kWh/mes** para municipios a <1.000 m s.n.m. (Sabanalarga aplica) y 130 kWh/mes por encima. Es el umbral hasta el que se subsidia a los estratos 1–3. | ✅ (texto en el gestor normativo de la CREG); sigue vigente en los pliegos tarifarios de 2026 |
| Tesis de Uninorte (repositorio Manglar), *Variables que inciden en el consumo eléctrico residencial en Barranquilla* | Las variables significativas son el **número de personas, el estrato y el número de aires acondicionados y televisores por horas de uso**. | ⚠️ solo se verificó el registro: https://manglar.uninorte.edu.co/handle/10584/8311 |
| Portafolio (prensa) | Un hogar de estrato 1 en Santa Marta consumió ≈170 kWh en octubre, por encima de ciudades de clima menos cálido. | ⚠️ prensa, sin fecha verificada |

### 1.1 Órdenes de magnitud para una casa en Sabanalarga (⚠️ estimaciones propias para orientar; reemplazar con las facturas reales)

| Perfil | kWh/mes típico | Comentario |
|---|---|---|
| Hogar sin AA (estratos 1–2) | 150–250 | Nevera, ventiladores, TV, iluminación |
| Hogar con 1 AA nocturno | 300–450 | El AA aporta 120–270 kWh/mes según su eficiencia |
| Hogar con 2–3 AA (estratos 3–5) | 500–900+ | El AA representa ≥50 % de la factura |

---

## 2. Cuánto consume un aire acondicionado (ejemplo resuelto)

12.000 BTU/h = 3,517 kW de capacidad térmica. Uso nocturno de 8 h × 30 noches = 240 h/mes.

| Equipo | Eficiencia | Potencia eléctrica a plena carga | Consumo mensual estimado | Nota |
|---|---|---|---|---|
| Convencional antiguo (promedio nacional) | EER 2,7 W/W | 1,30 kW | 1,30 × 0,85 (ciclo del compresor) × 240 ≈ **265 kWh** | BEU 2019 |
| Convencional nuevo, RETIQ A | EER 3,75 W/W | 0,94 kW | ≈ **190 kWh** | BEU 2019 / RETIQ |
| Inverter de alta eficiencia | eficiencia estacional ≈5–6 W/W ⚠️ | promedio de ≈0,5–0,65 kW en carga parcial ⚠️ | ≈ **120–155 kWh** | estimación propia |

**Evidencia de campo sobre el AA inverter en climas tropicales:**
- **Gokarakonda, van Treeck, Rawal y Thomas (2023, *Energies* 16:6807):** en 15 edificios residenciales de modo mixto en India, los AA con **compresor inverter usaron 34–68 % menos energía** que los de velocidad fija. Subir el *setpoint* a **28 °C y 30 °C (con ventilador de techo a velocidad 1) ahorró 44 % y 67 %** frente a 24 °C, manteniendo el confort según el modelo adaptativo IMAC-R.
- **CLASP (2026), Indonesia:** en un ensayo de campo de 6 meses con viviendas pareadas en Yakarta, Medan y Bali, el AA inverter ahorró **≈28 %** en Yakarta ⚠️ (resumen de una ONG, sin el informe técnico publicado).

**Impacto en el sistema FV:** pasar de un AA convencional antiguo (265 kWh/mes) a uno inverter (≈140 kWh/mes) ahorra ≈125 kWh/mes = 1.500 kWh/año ≈ **1,0 kWp menos** de paneles (con 1.500 kWh/kWp·año). Eso equivale a ≈4 M COP de inversión FV evitada ⚠️ (con un CAPEX ilustrativo de 4,2 M COP/kWp). En un sistema **aislado**, también evita ≈5 kWh de batería por cada noche de autonomía.

---

## 3. Lista de medidas de eficiencia previas al dimensionamiento (prioridad para Sabanalarga)

| # | Medida | Impacto esperado | Base |
|---|---|---|---|
| 1 | **Reemplazar los AA convencionales por inverter** (etiqueta RETIQ A o mejor; preferir R32/R290) | −30 a −60 % del consumo del AA | Gokarakonda et al. (2023); CLASP (2026); BEU (2019) |
| 2 | **Setpoint de 25–27 °C + ventilador de techo** | Cada grado más alto ahorra energía; 24→28 °C ahorró 44 % en el estudio indio | Gokarakonda et al. (2023) |
| 3 | **Aislar el techo** del cuarto climatizado (cielo raso con aislamiento, pintura reflectiva/"cool roof" sobre el zinc o el fibrocemento) | Reduce la carga térmica del AA ⚠️ (sin estudio local cuantitativo) | práctica de ingeniería; vacío local |
| 4 | Sellar puertas y ventanas del cuarto con AA; sombrear las ventanas al oeste | Reduce las infiltraciones y la carga solar | — |
| 5 | **Reemplazar las neveras de >10–15 años** | De ≈2,4–2,85 a ≈1,0 kWh/año·L: en una nevera de 300 L, de ≈800 a ≈300 kWh/año | BEU (2019), Tabla 9 |
| 6 | Iluminación 100 % LED | Pequeño en kWh, pero fácil | — |
| 7 | Bombas con variador/presurizador eficiente; temporizar la bomba de agua en horas solares | Desplaza la carga al día (autoconsumo) | — |
| 8 | **Desplazar cargas al mediodía** (lavadora, plancha, bomba, preenfriar la casa con AA de 12 a 16 h) | Mejora el autoconsumo del FV y reduce la batería | — |

---

## 4. Cómo levantar el consumo de diseño

1. **Facturas de 12 meses** (Air-e): kWh por mes. Identificar el mes de **mayor** consumo (probablemente may–sep, por el calor) y el promedio.
2. **Inventario de cargas** (tabla de potencia × horas). Para el AA, medir con un vatímetro o una pinza al menos 24 h, o estimar con el EER de la placa.
3. **Ajustar por eficiencia** (sección 3): consumo de diseño = consumo actual − ahorros esperados.
4. **Perfil horario:** ¿qué fracción se consume entre 8 y 16 h? Define el autoconsumo (on-grid) y la batería (híbrido/off-grid).
5. Llevar el consumo de diseño a la metodología: [`metodologia-dimensionamiento.md`](metodologia-dimensionamiento.md).

---

## 5. Vacíos de información
- No se encontró un estudio de **caracterización del consumo con submedición por uso final** para viviendas del Atlántico (kWh/mes de AA por estrato). La UPME tiene caracterizaciones regionales antiguas; el BEU es nacional.
- No hay datos locales publicados sobre el ahorro por **aislamiento de techos** en viviendas de la Costa.
- Recomendación: medir durante 1–2 semanas con un monitor de energía (por ejemplo, un medidor con pinzas en el tablero) antes de comprar el sistema.

---

## Referencias de este archivo
Ver [`bibliografia.md`](bibliografia.md) (sección I).
