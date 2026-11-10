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
