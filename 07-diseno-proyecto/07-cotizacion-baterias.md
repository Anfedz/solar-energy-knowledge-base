# Cotización de baterías para el SRNE ASP4865U140-H

> Consulta: 2026-11-10. Precios publicados en tiendas colombianas; confirmar IVA, stock y envío antes de comprar.
> Las baterías llevan 19 % de IVA, salvo que se tramite el certificado UPME (ver `02-marco-legal-y-regulatorio/incentivos-tributarios-upme.md`).

## 1. Qué exige el inversor (manual oficial SRNE, ASP 4–6,5 kW serie U, V1.1)
- **Batería:** 48 V nominal (rango 40–60 V). Admite litio LFP de 15 o 16 celdas (L15/L16), plomo-ácido o tipo definido por el usuario.
- **Sin batería:** puede funcionar sin ella (parámetro 08, opción "NOb – No battery") ✅.
- **Comunicación con el BMS:** por RS485 o CAN (parámetro 32). El protocolo se elige en el parámetro 33 entre:
  **PACE, Ruida, Aoguan, Oliter, Sunwoda, Daqin, SRNE (WOW), Pylontech (PYL) y Vilion**.
- **Carga:** máximo 140 A combinando solar y red (80 A desde la red), es decir ~6,7 kW a 48 V. Una batería de 5 kWh se llena en pocas horas de sol.
- **Por qué importa la comunicación:** con BMS conectado, el inversor lee el % de carga real y limita la corriente según lo que pida la batería. Sin comunicación se puede usar por voltaje (modo L16), pero es menos preciso.
- **Regla práctica:** comprar una batería cuyo BMS hable el **protocolo Pylontech** (el más común) o el de SRNE, y **pedir al vendedor que confirme por escrito la compatibilidad con el SRNE ASP**.

Fuente: [SRNE, manual ASP 4–6,5 kW serie U V1.1](https://www.srnesolar.com/userfiles/files/2025/09/01/ASP%204-6.5KW%20%20U%20series_solar%20storage%20inverter_V1.1.pdf), parámetros 08, 32 y 33, y hoja de datos.

## 2. Opciones (LiFePO4 de 48–51,2 V)

| Batería | kWh | Precio COP | COP/kWh | Garantía | Comunicación con SRNE | Tienda |
|---|---|---|---|---|---|---|
| **Pylontech US2000C** | 2,4 | 2 403 800 | 1,00 M | — | ✅ Pylontech, nativo | [Autosolar](https://autosolar.co/baterias-de-litio-48v) |
| **Pylontech US3000C** | 3,55 | 3 991 600 (en stock) | 1,12 M | vida de diseño 15 años | ✅ Pylontech, nativo (CAN/RS485) | [Solartex](https://solartex.co/tienda/producto/bateria-de-litio-us3000c-51-2v-74ah-pylontech) |
| **Pytes E-BOX 48100R** | 5,12 | 4 297 000 (en stock) | 0,84 M | **10 años** | ⚠️ CAN/RS485, "16 inversores compatibles" sin lista; confirmar protocolo Pylontech | [Solartex](https://solartex.co/tienda/producto/bateria-de-litio-e-box-48100r-51-2v-100ah-pytes) |
| Must LP16-48100 | 5,12 | 4 350 000 (con IVA) | 0,85 M | 5 años | ⚠️ protocolo seleccionable en pantalla; confirmar | [Ineldec](https://ineldec.com/producto/bateria-de-litio-lifepo4-100ah-48v-must/) |
| Must LP16-48100 | 5,12 | 5 624 250 | 1,10 M | 5 años | ⚠️ ídem | [Energía Solar](https://energiasolar.com.co/producto/bateria-de-litio-51-2v-100ah-must-lp16-48100-5-12kwh/) |
| Deye SE-F5 | 5,12 | 4 800 000 (con IVA) | 0,94 M | 5 años | ⚠️ confirmar (Deye suele usar protocolo Pylontech) | [Ineldec](https://ineldec.com/producto/bateria-de-litio-lifepo4-100ah-48v-deye/) |
| Felicity FLA-EU (100 Ah) | 5,12 | 4 930 000 | 0,96 M | hasta 10 años | ⚠️ confirmar | [ISAT Colombia](https://www.isatcolombia.co/producto/bateria-litio-48v-100ah/) |
| Tensite TS-L5000/LV | 4,8 | 5 052 690 | 1,05 M | — | ⚠️ sin dato | [Autosolar](https://autosolar.co/baterias-de-litio-48v) |
| **Felicity FLA48171-EU** | **8,75** | **6 743 314** | **0,77 M** | — | ⚠️ confirmar | [Autosolar](https://autosolar.co/baterias-de-litio-48v) |
| SRNE 51,2 V 100 Ah | 5,12 | 11 244 000 (con IVA) | 2,20 M | 3 años | ✅ SRNE, nativo | [Sunbits](https://sunbits.com.co/producto/bateria-100ah-51-2v-marca-srne/) |
| Pylontech US5000 | 4,8 | 12 749 999 | 2,66 M | — | ✅ | [Autosolar](https://autosolar.co/baterias-de-litio-48v) |

Las dos últimas aparecen solo como referencia: están muy por encima del mercado.

## 3. Combinaciones recomendadas

| Opción | Capacidad | Equipos | Costo de equipo | + instalación ⚠️ | Ahorro extra/año* | Se paga en |
|---|---|---|---|---|---|---|
| **A. Compatibilidad asegurada** | 7,1 kWh | 2 × Pylontech US3000C | 7,98 M | ~0,4 M | ~+1,9 M | ~4,4 años |
| A'. Arranque más barato, misma marca | 4,8 kWh | 2 × Pylontech US2000C | 4,81 M | ~0,4 M | ~+1,4 M | ~3,7 años |
| **B. Mejor precio con 10 años de garantía** | 5,12 kWh | 1 × Pytes E-BOX 48100R | 4,30 M | ~0,4 M | ~+1,5 M | **~3,2 años** |
| B+. Crecer después | 10,24 kWh | 2 × Pytes E-BOX | 8,59 M | ~0,4 M | ~+2,1 M | ~4,3 años |
| **C. Más kWh por peso** | 8,75 kWh | 1 × Felicity FLA48171-EU | 6,74 M | ~0,4 M | ~+2,1 M | ~3,4 años |

\* Con el plan de 9 am–3 pm y la sombra de árboles estimada (sección 10 del plan de implementación): +$0,79 M con 2,5 kWh, +1,48 M con 5 kWh, +2,0 M con 7,5 kWh y +2,13 M con 10 kWh. Los valores intermedios están interpolados.
La instalación cubre el cable de batería (~35–50 mm²), el breaker DC de ~160–200 A, el cable de comunicación y la configuración. Es un estimado ⚠️ que debe cotizar el instalador.

## 4. Recomendación
1. **Si quieres cero riesgo de compatibilidad:** Pylontech US3000C. Usa el protocolo Pylontech de forma nativa y el SRNE lo trae en su lista. Empieza con 1–2 módulos y agrega más del mismo modelo.
2. **Si quieres el mejor precio por kWh con buena garantía:** Pytes E-BOX 48100R (5,12 kWh, 10 años, en stock), **solo si Solartex confirma por escrito** que comunica con el SRNE ASP (protocolo Pylontech).
3. **Para llegar al óptimo de 7,5–10 kWh en una sola compra:** Felicity FLA48171-EU (8,75 kWh), confirmando el protocolo.
4. **No mezclar** marcas ni modelos en el mismo banco. Si vas a crecer, compra desde el inicio una marca que puedas repetir.
5. **Ubicación:** bajo techo, a la sombra y ventilada, junto al inversor. El calor es lo que más acorta la vida de la batería.

## 5. Preguntas para el vendedor
- ¿El BMS comunica con inversores **SRNE ASP** (protocolo Pylontech o SRNE, por CAN o RS485)? ¿Incluye el cable de comunicación?
- ¿El precio incluye IVA? ¿Hay stock en Barranquilla, o cuánto cuesta el envío a Sabanalarga?
- ¿Garantía en Colombia? ¿Con quién se tramita?
- ¿Cuántos módulos se pueden poner en paralelo y hasta cuándo seguirá disponible el modelo?

## 6. Elección según el consumo nocturno (consulta del 2026-11-10)
**Criterio del propietario:** buena garantía, buena relación precio/kWh, y que cubra **como mínimo la noche con las costumbres actuales**: cada aire 2–3 h, más iluminación y computadores.

Consumo de **5 pm a 7 am** (simulación `escenario_bateria_noche.js`, ajustada a las facturas e incluyendo nevera, congelador, módem y el inversor en vacío):

| Costumbre | Noche promedio | Mes más caluroso | Mes más fresco |
|---|---|---|---|
| Aires 3 h c/u | 9,0 kWh | 14,4 kWh | 5,3 kWh |
| Aires 2 h c/u | 7,7 kWh | 11,4 kWh | 5,1 kWh |

Energía útil ≈ capacidad × 90 % (profundidad de descarga) × 93 % (inversor). Así, 10,24 kWh nominales entregan ~8,6 kWh a la casa.

| Batería | Costo | Noches del año cubiertas (3 h / 2 h) | Pagas/año (3 h / 2 h) | Ahorro extra frente a sin batería | Se paga en |
|---|---|---|---|---|---|
| 1× Pytes 5,12 kWh | 4,30 M | 50 % / 58 % | 1,68 / 1,24 M | +1,6 M | 2,9 años |
| Felicity FLA48171 8,75 kWh | 6,74 M | 81 % / 91 % | 0,75 / 0,41 M | +2,5 M | 2,9 años |
| **2× Pytes E-BOX 48100R (10,24 kWh)** | **8,59 M** | **88 % / 97 %** | **0,52 / 0,25 M** | **+2,6–2,8 M** | **~3,3 años** |
| 3× Pylontech US3000C (10,65 kWh) | 11,97 M | 90 % / 98 % | 0,47 / 0,22 M | +2,6–2,8 M | ~4,5 años |
| 3× Pytes (15,36 kWh) | 12,89 M | 100 % | 0,13 / 0,06 M | +2,7–3,1 M | ~4,5 años |

Los tiempos de pago incluyen ~$0,4 M de instalación ⚠️.

**Recomendación: 2 × Pytes E-BOX 48100R (10,24 kWh, ~$8,6 M + instalación).**
- **Garantía:** 10 años del fabricante, la mejor del grupo.
- **Precio:** 0,84 M/kWh, de los mejores con garantía documentada.
- **Cobertura:** el 88–97 % de las noches del año. Solo en las noches más calurosas (11–14 kWh) entra algo de red al final.
- **Un tercer módulo** cubre el 100 %, pero suma solo ~$0,3–0,4 M/año por $4,3 M más: no se justifica al inicio. Se puede agregar después si hace falta.
- Con 2 módulos, la corriente disponible de la batería (~200 A) alcanza para los picos del inversor de 6,5 kW.
- ⚠️ **Condición:** Solartex debe confirmar por escrito que el BMS de Pytes comunica con el SRNE ASP (protocolo Pylontech por CAN o RS485).
- **Si no lo confirma:** 2 × Felicity FLA-EU 5,12 kWh (~9,9 M, hasta 10 años de garantía; confirmar el protocolo igual) o 3 × Pylontech US3000C (compatibilidad nativa, ~12 M).

**Medición recomendada para afinar:** leer el medidor de Air-e a las **5–6 pm** y a las **6–7 am** durante al menos 5–7 noches, anotando las horas de aire de cada noche. La diferencia es el consumo nocturno real.

