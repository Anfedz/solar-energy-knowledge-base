# Análisis de consumo (facturas Air-e nov-2025 → oct-2026)

> Datos: [`consumo-historico.csv`](consumo-historico.csv), extraídos de 12 facturas en PDF; el histórico desde may-2025 sale de la gráfica de la factura de nov-2025.
> Cada factura cubre aproximadamente del día 12 o 13 del mes anterior al día 12 o 13 del mes indicado.

## 1. Resumen

| Indicador | Valor |
|---|---|
| Consumo últimos 12 meses | **5 887 kWh** (364 días) → **16,2 kWh/día ≈ 485 kWh/mes** |
| Rango mensual | 291 kWh (abr-2026) – **804 kWh** (ago-2026) |
| Promedio últimos 6 meses (may–oct 2026) | **578 kWh/mes**, frente a 453 en los mismos meses de 2025 (**+28 %**) |
| Pagado en 12 meses | **$5 289 350** (promedio $440 779/mes; máximo $780 250 en ago-2026) |
| Estrato | 3: subsidio del 15 % sobre la subsistencia (173 kWh/mes, prorrateada por días) |
| kWh subsidiados / a tarifa plena | 2 094 / **3 793 kWh** (64 % del consumo se paga a tarifa plena) |

## 2. Serie mensual

| Factura | Días | kWh | kWh/día | Tarifa $/kWh | Total factura |
|---|---|---|---|---|---|
| nov-25 | 30 | 403 | 13,4 | 795,93 | 348 180 |
| dic-25 | 29 | 323 | 11,1 | 795,93 | 278 850 |
| ene-26 | 32 | 421 | 13,2 | 795,93 | 362 510 |
| feb-26 | 27 | 330 | 12,2 | 795,93 | 286 300 |
| mar-26 | 31 | **649** | 20,9 | 795,93 | 563 560 |
| abr-26 | 32 | 291 | 9,1 | 795,93 | 248 690 |
| may-26 | 29 | 512 | 17,7 | 795,93 | 444 330 |
| jun-26 | 30 | 572 | 19,1 | 795,93 | 496 140 |
| jul-26 | 32 | 508 | 15,9 | 840,15 | 462 160 |
| ago-26 | 30 | **804** | **26,8** | 890,27 | 780 250 |
| sep-26 | 29 | 635 | 21,9 | 873,69 | 604 380 |
| oct-26 | 33 | 439 | 13,3 | 873,69 | 414 000 |

## 3. Cómo se arma tu factura (hallazgos)

1. **Tarifa:** pagas el costo unitario pleno (CU) de Air-e por todo el consumo. El subsidio del estrato 3 es un descuento del 15 % solo sobre los primeros ~173 kWh. El CU pasó de **$795,93** (nov-25 a jun-26) a **$873,69** (oct-26). La tabla de Air-e de oct-2026 ya marca **$936,40**, que llegará a las próximas facturas (ver [`../02-marco-legal-y-regulatorio/tarifas-energia-atlantico.md`](../02-marco-legal-y-regulatorio/tarifas-energia-atlantico.md)).
2. **Impuesto de alumbrado público = 10 % del valor del consumo** (Acuerdo Municipal 005 de 2012, Sabanalarga). Por eso **cada kWh que dejas de comprar vale ~1,1 × la tarifa**: ≈ $961 a tarifa plena y ≈ $830 en la franja subsidiada (con el CU de $873,69).
   - ⚠️ Por verificar: si con autogeneración el alumbrado se calcula sobre el consumo neto. Es lo lógico, pero hay que confirmarlo con Air-e o la Alcaldía.
3. **Tasa de seguridad y convivencia:** fija ($16 000–17 000/mes). No cambia con la solar.
4. **Programa de "meta individual de consumo"** (Res. CREG 101 120 de 2026, mencionado en la factura de oct-2026, asociado a El Niño): si superas tu meta pagas un cobro adicional y si ahorras puedes recibir un reconocimiento ⚠️ (detalles en www.air-e.com/fenomeno-del-nino). La solar ayuda directamente a quedar por debajo de la meta.

## 4. Lectura del perfil

- **Los picos (mar-26, ago-26, sep-26) coinciden con calor y temporada seca o veranillo**, lo que es típico del uso de aire acondicionado. Con 3 aires, los aires probablemente son el **50–70 %** del consumo.
- **El aumento del 28 % en 2026** puede venir del calor (El Niño fue declarado en oct-2026), de más horas de aire, del congelador nuevo o de la impresora 3D (una impresión larga puede gastar 1–3 kWh). ⚠️ Pregunta abierta.
- **Abr-26 (9,1 kWh/día)** es el piso: probablemente casa con menos uso (¿viaje?). Sirve como estimado de la carga base sin aires: ~**8–10 kWh/día**.
- **Fracción diurna estimada: 25–45 %.** Si los aires se usan sobre todo de noche (lo típico en alcobas), el sistema exportará mucho de día y usará el crédito 1:1 de noche. Ese esquema funciona bien con CREG 174.

## 5. Implicaciones para el diseño

- Para el on-grid, dimensionar **para ~480–580 kWh/mes** sin pasarse en los meses bajos, porque el excedente que supera el consumo del mes se paga a precio de bolsa.
- La **eficiencia** es la medida más barata. Revisar si los aires son inverter, mantenerlos limpios y ponerlos a 24–25 °C. Cambiar un aire convencional de 12 000 BTU por uno inverter ahorra ~30–60 % de su consumo (Gokarakonda et al., 2023; ver [`../04-tecnico-cientifico/consumo-residencial-caribe-y-eficiencia.md`](../04-tecnico-cientifico/consumo-residencial-caribe-y-eficiencia.md)).

## 6. Aires acondicionados (placas recibidas el 2026-11-05)

| Aire | Equipo | BTU | Tipo | Entrada nominal / máx. | Voltaje |
|---|---|---|---|---|---|
| 1 | Olimpo OLACI12-110MA21 | 12 000 | Clase C, EER 3,25; probablemente de **velocidad fija** ⚠️ | 1 082 W | 115 V ⚠️ (por el "110" del modelo) |
| 2 | LG VM122C7 | 12 000 | **DUAL Inverter** | 1 060 / 1 460 W | 220 V |
| 3 | LG VM092C6 | 9 000 | **DUAL Inverter** | 790 / 1 270 W | 220 V |

### Estimación de consumo por aire (⚠️ supuesto: 9 h por noche, todos los días, en temporada de calor)
Un aire de velocidad fija trabaja ~75–85 % del tiempo a plena potencia. Un inverter, una vez que la habitación se enfría, trabaja a carga parcial (~40–55 % de la potencia nominal) ⚠️.

| Aire | Potencia media estimada | kWh/noche | kWh/mes |
|---|---|---|---|
| 1 Olimpo (fijo) | 0,80–0,90 kW | 7,2–8,1 | **≈ 220–245** |
| 2 LG 12 000 inverter | 0,45–0,60 kW | 4,1–5,4 | ≈ 125–165 |
| 3 LG 9 000 inverter | 0,35–0,45 kW | 3,2–4,1 | ≈ 95–120 |
| **Los 3, todas las noches** | | | **≈ 440–530** |

**Lectura:**
- Si los 3 se usaran 9 h todas las noches, sumarían casi toda la factura promedio (485 kWh/mes). Como la carga base sin aires ronda 200–270 kWh/mes (abr-2026), lo más probable es que **no se usen los 3 todas las noches**.
  Los picos de mar, ago y sep 2026 (650–800 kWh) sí son consistentes con un uso intenso de los 3.
- **El Aire 1 es el menos eficiente.** Con el mismo uso, gasta ≈ 80–110 kWh/mes más que el LG de 12 000. Eso equivale a ≈ 1,0–1,3 M COP/año (a ≈ $960/kWh), o a 1–2 paneles.
  - Reemplazarlo por un inverter de 12 000 BTU podría pagarse en ~2–3 años si se usa a diario ⚠️ (precio de aires inverter no investigado aún).
  - **Recomendación provisional:** primero la solar, que tiene mejor retorno y ya está presupuestada. Cambiar el Aire 1 cuando falle, o antes si es el que más horas trabaja.
- **Mientras tanto:** usar más el Aire 2 o 3 que el 1, con el termostato a 24–25 °C, filtros limpios y la puerta cerrada.
- **Para afinar:** necesito las horas reales de uso de cada aire (⏳). Con eso recalibro la fracción diurna y el balance mensual del anteproyecto.

