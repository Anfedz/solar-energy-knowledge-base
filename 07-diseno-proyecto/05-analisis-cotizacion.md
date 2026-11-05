# Análisis de la cotización recibida (híbrido de 6,5 kW, oct-2026)

> Fecha del análisis: 2026-11-05. Cotización de un instalador local, fechada el 22-oct-2026 (no se publican el nombre del cliente ni datos personales).
> Simulación hora a hora reproducible: `python3 -I simulacion_horaria.py`. Usa la producción horaria PVGIS-NSRDB 2011–2015 de cada cara del techo, tus 12 facturas y el horario de aires que reportaste.

## 1. Qué cotizaron

| Ítem | Cant. | Precio unit. | Total |
|---|---|---|---|
| Panel 630 W (Ronma RM-630W-182R/132TB, TOPCon bifacial) | 12 | 400 000 | 4 800 000 |
| Estructura de aluminio | 12 | 120 000 | 1 440 000 |
| Inversor "híbrido" 6 kW (SRNE ASP4865U140-H, 6,5 kW) | 1 | 3 600 000 | 3 600 000 |
| Acometida DC paneles → inversor | 2 | 800 000 | 1 600 000 |
| Acometida AC al tablero general | 1 | 600 000 | 600 000 |
| Protecciones DC / AC | 2 + 1 | 75 000 / 35 000 | 185 000 |
| Tablero DC + tablero AC | 2 | 85 000 | 170 000 |
| Transporte | 1 | 500 000 | 500 000 |
| Mano de obra | 1 | 1 500 000 | 1 500 000 |
| **Total** | | | **14 395 000** |

**No incluye batería**, aunque el sistema se llama "híbrido".

## 2. Los equipos

### Paneles Ronma RM-630W (ficha técnica) ✅ buenos
- **Datos eléctricos:** 630 W, eficiencia de 23,3 %, Voc 50,3 V, Vmp 42,0 V, Isc 15,94 A, Imp 15,01 A.
- **Comportamiento con calor:** coeficiente de potencia de **−0,30 %/°C**, mejor que un PERC (−0,35 %/°C), lo que conviene en Sabanalarga.
- **Certificaciones:** IEC 61215/61730, además de **IEC 61701 (niebla salina)** e **IEC 62716 (amoníaco)**, adecuadas para la costa.
- **Garantía:** 15 años de producto y 30 años de potencia lineal (87,4 % al año 30; 0,40 %/año).
- **Físico:** 2 382 × 1 134 × 30 mm, 33,5 kg.
- **Precio:** **635 COP/Wp, por debajo del rango de mercado** (710–1 000 COP/Wp, ver `03-mercado-y-equipos`). Es un buen precio.
- ⚠️ Ronma no figura en las listas Tier 1 consultadas en el repo. No es una falla, pero conviene pedir la factura del importador y el certificado de conformidad RETIE del producto.

### Inversor SRNE ASP4865U140-H (ficha técnica) ⚠️ es un inversor para sistemas aislados
| Característica | Valor | Comentario |
|---|---|---|
| Tipo | **"Off-grid Solar Storage Inverter"** | **No inyecta a la red** (no sirve para el crédito 1:1 de la CREG 174). Está pensado para trabajar **con batería de 48 V** |
| Salida | 6,5 kW nominal, 13 kVA pico, 120 V / **240 V fase partida** | Suficiente para la casa |
| Entrada FV | 2 MPPT; 5 000 W y 18 A por MPPT; Voc máx. 550 V; MPPT 150–450 V | ✅ compatible con 2 strings de 6 paneles Ronma (ver §2.1) |
| Entrada de red | 65–140 Vac por línea; bypass de 40 A | ⚠️ **Hay que confirmar que funcione si tu red es 120/208 V.** Los inversores de fase partida esperan 120/240 V |
| Eficiencia máx. | **93 %** | Un inversor on-grid ronda 97–98 % |
| Consumo en vacío | No aparece en la ficha | ⚠️ En equipos de esta clase suele ser de 40–80 W, es decir 0,35–0,7 kWh/día. En la simulación asumí 50 W |
| Protección | **IP20 (solo interior)**; reduce potencia por encima de 45 °C | Debe ir en un sitio cubierto y ventilado |
| Garantía | **2 años** | Growatt y Deye dan 5–10 años |
| Certificados | IEC 62109-1/2, UL1741, FCC | ⚠️ Pedir el certificado RETIE |
| Monitoreo Wi-Fi | **Opcional (no incluido)** | Querías monitorear desde el celular |

### 2.1 Verificación de strings (Ronma + SRNE)
Temperaturas de diseño: 18 °C mínima y 70 °C máxima en la celda.

| Panel Ronma | A 18 °C | A 70 °C |
|---|---|---|
| Voc | 51,2 V | — |
| Vmp | 42,9 V | 36,5 V |
| Isc | — | 16,3 A |

Con **2 strings de 6 paneles** (uno por cara del techo, cada uno en su MPPT):

| Parámetro | Valor | Límite del SRNE | ¿Cumple? |
|---|---|---|---|
| Voc máx. | 307 V | 550 V | ✅ |
| Vmp | 219–257 V | 150–450 V | ✅ |
| Potencia por MPPT | 3 780 W | 5 000 W | ✅ |
| Corriente | 16,3 A | 18 A | ✅ (margen justo) |

**Eléctricamente el diseño es correcto.** El problema no es técnico sino **económico**: el modo de operación.

## 3. El problema: sin batería y sin inyección se desperdicia la mayor parte de la energía

Tu consumo es sobre todo **de noche**: el Aire 3 trabaja de 11 pm a 7 am, y los otros dos aires 2 h cada noche. Los paneles producen **de día**.
Sin batería y sin poder inyectar a la red, lo que los paneles producen y la casa no consume en ese momento **se pierde**.

### Resultados de la simulación (10 % de sombra; CU $936/kWh; alumbrado 10 %)

| Escenario | kWp | Energía aprovechada kWh/año | **Energía desperdiciada** kWh/año | Ahorro M COP/año | % de la factura | Costo M COP | Payback |
|---|---|---|---|---|---|---|---|
| **A. Cotización tal cual** (12 × 630 + SRNE sin batería, mezcla ideal de FV + red) | 7,56 | 2 844 | **6 741 (70 %)** | **2,48** | 43 % | 14,4 | **5,8 años** |
| A'. Ídem, si el SRNE sin batería **conmuta** (no mezcla FV + red) ⚠️ | 7,56 | 2 512 | 7 073 (74 %) | 2,14 | 37 % | 14,4 | 6,7 años |
| B. Cotización + batería de 5,12 kWh | 7,56 | 4 552 | 5 033 | 4,01 | 70 % | ≈ 19,6 | 4,9 años |
| C. Cotización + batería de 10 kWh | 7,56 | 5 878 | 3 707 | 5,12 | 89 % | ≈ 24,0 | 4,7 años |
| **F. 8 × Ronma 630 on-grid con excedentes** (cara este, inversor on-grid) | 5,04 | 5 557 | 0 | **5,42** | 94 % | **≈ 12,2** | **2,3 años** |
| E. 7 × Ronma 630 on-grid con excedentes | 4,41 | 5 235 | 0 | 5,00 | 87 % | ≈ 11,7 | 2,3 años |
| D. 12 × Ronma 630 on-grid con excedentes | 7,56 | 5 887 | 0 (4 098 a precio de bolsa) | 6,57 | 114 % ⚠️ | ≈ 13,0 | 2,0 años |

**Con 25 % de sombra:**

| Escenario | Ahorro M COP/año | Payback |
|---|---|---|
| A | 2,40 | 6,0 años |
| A' | 1,92 | 7,5 años |
| F | 4,85 | 2,5 años |
| E | 4,40 | 2,7 años |

**Conclusiones:**
1. **La cotización tal cual ahorra unos 2,1–2,5 M/año** y se paga en 6–7 años. Además desperdicia **unos 7 000 kWh/año**, más de lo que consume toda la casa.
2. **Con la misma plata o menos**, un on-grid de 8 paneles Ronma ahorra **unos 5,4 M/año, más del doble**, porque la energía del día se "guarda" en la red como crédito para la noche.
3. Volver la cotización rentable con baterías la saca del presupuesto: con 10 kWh son unos 24 M.
4. El escenario D (12 paneles on-grid) depende de que Air-e pague el excedente neto a ~$300/kWh ⚠️. Con un pago bajo o demorado, rinde casi lo mismo que F, pero cuesta más. Se puede crecer después: el inversor de 5–6 kW admite hasta 9–10 paneles.

## 4. Sobre la recomendación de que "vender a Air-e no es rentable"

Es **cierto a medias**, porque mezcla dos cosas distintas que la CREG 174/2021 trata diferente:

| Concepto | Cómo se paga | ¿Rentable? |
|---|---|---|
| **Crédito de energía (permuta 1:1):** lo que inyectas de día hasta igualar lo que consumes de la red en el mes | Cada kWh inyectado compensa un kWh consumido y solo pagas la comercialización (**$133/kWh**). Equivale a recibir unos $800–960 por kWh | ✅ **Muy rentable.** Es lo que cubre tu consumo nocturno |
| **Excedente neto:** lo que supera tu consumo del mes | Precio de bolsa o MCm (~$200–400/kWh ⚠️) | ❌ Poco rentable. Por eso no conviene sobredimensionar |

La conclusión correcta es **dimensionar el sistema a tu consumo y conectarlo a la red con crédito**, no "no inyectar".
Precisamente por eso recomendé 7–8 paneles, y no 12 sin inyección.

## 5. Lo que le falta a la cotización (aunque se mantenga el diseño)
- **Protección contra rayos:** DPS en DC y AC. En tu zona caen 10–30 descargas/km²·año.
- **Puesta a tierra** (no sabemos si la casa tiene).
- **Ingeniería:** memoria de diseño y declaración RETIE.
- **Trámite ante Air-e:** con un sistema "sin excedentes" **también hay que tramitarlo** (AGPE sin entrega de excedentes) y presentar el manual de la función de no inyección. Ver `02-marco-legal-y-regulatorio/conexion-air-e-y-autogeneracion-CREG-174.md`.
- **Módulo Wi-Fi** para el monitoreo.
- **Precios bajos de protecciones:** 75 000 por protección DC parece bajo. Hay que confirmar que sean breakers DC de ≥ 500 V con certificado RETIE.
- **Acometida DC (2 × 800 000) parece alta.** Pedir metros, calibre del cable solar y tipo de tubería.
- **Qué circuitos alimenta el inversor:** con este tipo de equipo la casa queda "detrás" del inversor, que tiene bypass de 40 A. Hay que definir qué circuitos pasan por él. El tablero actual está lleno.
- **Garantía de 2 años del inversor** y servicio técnico local.

## 6. Recomendación

**Pedirle al mismo instalador una versión on-grid**, porque los paneles y su precio son buenos:

| Cambio | Detalle |
|---|---|
| Paneles | **8 × Ronma 630 W** (5,04 kWp) en la cara este. Si la sombra lo exige, 4 al este y 4 al oeste |
| Inversor | **On-grid de fase partida, 5–6 kW, 2 MPPT, con Wi-Fi**, certificado RETIE y anti-isla (UL1741 / IEEE 1547). Ejemplos: Growatt MIN 6000TL-X2 (2,23 M, **solo si la red es 240 V**), o uno con rango que incluya 208 V si la red es 120/208 V |
| Agregar | DPS DC/AC, puesta a tierra, tablero solar adicional, medidor bidireccional, memoria de diseño y declaración RETIE, trámite AGPE con excedentes ante Air-e |
| Respaldo | Se agrega en la **fase 2** (ver `04-anteproyecto.md` §4): inversor-cargador pequeño + batería de 2,4 kWh para nevera, congelador, módem, abanicos y PC |

Estimado con los precios unitarios de esta cotización:

| Ítem | M COP |
|---|---|
| Paneles 8 × 400 k | 3,2 |
| Estructura 8 × 120 k | 0,96 |
| Inversor on-grid | 2,2–3,9 |
| Acometidas DC + AC | 1,4 |
| Protecciones, tableros y DPS | 0,6 |
| Puesta a tierra | 0,45 |
| Medidor | 0,5 |
| Transporte | 0,5 |
| Mano de obra | 1,5 |
| Diseño y trámites ⚠️ | 0,8 |
| **Total** | **≈ 12,1–13,8 M** |

Ahorro de **≈ 5,4 M/año**, con 1–3 M de margen dentro de tu presupuesto para el respaldo inicial.

**Alternativa si quieres que el respaldo venga desde ya con este instalador:** reemplazar el SRNE por un **híbrido que sí inyecte a la red** (Deye SUN-8K-SG02LP2-US, Growatt SPH-US). Así tienes crédito 1:1 y la opción de batería, pero el inversor solo cuesta 9–11,5 M y el total pasa de 20 M.

## 7. Preguntas para el instalador
1. ¿El SRNE ASP4865U140-H funciona **sin batería**? ¿Mezcla FV y red al mismo tiempo, o conmuta?
2. ¿Funciona con red **120/208 V**, o solo 120/240 V? (Antes hay que medir la tensión de tu red.)
3. ¿Cuál es su **consumo en vacío** (W)?
4. ¿Los equipos tienen **certificado RETIE**? ¿Quién firma la memoria y la declaración, y quién hace el trámite ante Air-e?
5. ¿Qué incluyen las "protecciones" y las "acometidas"? ¿Hay DPS y puesta a tierra?
6. ¿Pueden cotizar la versión **on-grid con 8 paneles** de la sección 6?

## 8. Supuestos ⚠️
- **Horario de aires:**
  - Aire 3: 23–7 h, más 2,5 h en la tarde.
  - Aires 1 y 2: 2,5 h en la tarde (asumí 13–16 h) y 2 h de noche (21–23 h).
- **Potencias medias:** aire fijo al 85 % de su potencia; aires inverter a carga parcial (0,40–0,65 kW).
- **El resto de la carga** se ajustó para que cada mes coincida con tu factura.
- **Excedente neto** pagado a $300/kWh. **Consumo en vacío del SRNE**: 50 W. **Eficiencia del SRNE**: 4 puntos menos que la de un inversor on-grid.
- **Costo de las baterías:** Felicity 5,12 kWh (4,87 M) y 10 kWh (9,32 M), más instalación.

## 9. Sensibilidad: ¿y si los aires se usan de día? (consulta del 2026-11-05)
Simulación: `python3 -I escenarios_aires_dia.py`. Lo que se paga al año por energía + alumbrado (hoy, sin solar: **5,77 M**).

| Caso | Cotización tal cual (sin inyección) | 8 × 630 on-grid | 12 × 630 on-grid |
|---|---|---|---|
| Horario actual | 3,29 M | **0,35 M** | −0,80 M ⚠️ (pago de bolsa) |
| 1. Mover las 2 h nocturnas de los Aires 1 y 2 a las 10–12 h (mismo consumo) | 2,62 M | 0,27 M | −0,89 M |
| 2. Agregar 4 h de día al Aire 3 (+800 kWh/año; sin solar costarían +0,8 M) | 3,36 M | 0,75 M | −0,55 M |
| 3. Agregar 4 h de día a los 3 aires (+3 070 kWh/año; sin solar costarían +3,2 M) | 3,83 M (5,23 M si conmuta) | 2,39 M | 0,30 M |

**Lectura:**
- **Mover consumo al día casi no cambia nada en on-grid** (−0,08 M/año): el crédito 1:1 ya "lleva" la energía del día a la noche pagando solo $133/kWh. En la cotización sin inyección sí ayuda (−0,67 M/año), pero sigue muy por detrás del on-grid.
- **Con un sistema sin inyección, el aire de día sale casi gratis**, porque usa energía que de otro modo se desperdicia. Pero eso no compensa los ~7 000 kWh/año que siguen perdiéndose.
- **Si vas a usar mucho más aire de día** (por ejemplo, trabajo en casa), conviene **más paneles on-grid** (10–12). En el caso 3, 12 paneles on-grid dejan la factura en ~0,3 M/año.
- El inversor on-grid de 5–6 kW recomendado permite crecer de 8 a 10–12 paneles sin cambiar de equipo (≈ 0,52 M por panel adicional, con estructura).

