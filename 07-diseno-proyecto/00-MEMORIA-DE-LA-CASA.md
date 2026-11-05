# Memoria de la casa

> Registro vivo de **todo** lo que el propietario comparte sobre la casa y el proyecto solar.
> Se actualiza con cada dato nuevo: la ficha (secciones 1–7) guarda el **estado actual** y la bitácora (sección 9), el **historial fechado**.
> 🔒 **El repositorio es público:** no se anotan nombre, dirección, NIU/cuenta, número de medidor, teléfonos ni coordenadas exactas.
> Las fotos no se suben; se describe aquí lo que muestran.
> Leyenda: ✅ confirmado · ⚠️ supuesto o por confirmar · ⏳ pendiente.

---

## 1. Datos generales
| Dato | Valor | Estado |
|---|---|---|
| Municipio | Sabanalarga, Atlántico (casco urbano, ~100 m s. n. m.) | ✅ |
| Tenencia | Vivienda propia | ✅ |
| Estrato | 3 (residencial) | ✅ factura |
| Operador de red | Air-e (intervenida por la Superservicios) | ✅ |
| Propiedad del activo (factura) | "PE" | ⚠️ confirmar si el transformador es de Air-e |
| Entorno (imagen satelital) | Calle este-oeste, casas alargadas norte-sur, árbol grande junto al punto marcado | ⚠️ imagen de baja resolución |

## 2. Objetivos y restricciones del propietario
| Tema | Respuesta | Estado |
|---|---|---|
| Prioridades | 1) bajar la factura · 2) respaldo en cortes · 3) independencia de la red | ✅ |
| Presupuesto | Máximo **15 M COP** | ✅ |
| Modalidad | Comprar equipos y contratar técnico | ✅ |
| Monitoreo | Sí, desde el celular | ✅ |
| Robo | No le preocupa | ✅ |
| Declara renta | Sí (evaluar certificado UPME con el contador) | ✅ |
| Ampliaciones | Ninguna por ahora; quizá carro eléctrico; una piscina tendría su propio sistema | ✅ |

## 3. Servicio de energía y cortes
| Dato | Valor | Estado |
|---|---|---|
| Consumo 12 meses (nov-25 a oct-26) | **5 887 kWh** ≈ 485 kWh/mes (rango 291–804) | ✅ 12 facturas |
| Tendencia | +28 % en may–oct 2026 frente a 2025 | ✅ (causa ⏳) |
| Pago anual | $5 289 350 (promedio $440 779/mes) | ✅ |
| Tarifa (CU) | $795,93 → $873,69 (oct-26); la tabla de Air-e ya marca $936,40 | ✅ |
| Subsidio | 15 % sobre la subsistencia (~173 kWh/mes, prorrateada por días) | ✅ |
| Alumbrado público | 10 % del valor del consumo | ✅ factura |
| Tasa de seguridad | $16 000–17 000/mes (fija) | ✅ |
| Programa de meta de consumo | Res. CREG 101 120 de 2026 (El Niño): cobro adicional si se supera la meta | ✅ mencionado en la factura |
| Cortes | Según la temporada: a veces > 3 por mes, de 1 h a más de 3–4 h | ✅ |
| Detalle | [`consumo-historico.csv`](consumo-historico.csv), [`03-analisis-consumo.md`](03-analisis-consumo.md) | |

## 4. Instalación eléctrica
| Dato | Valor | Estado |
|---|---|---|
| Fases | Dos fases: **confirmado por el Aire 2 (220 V)**. El Aire 1 parece de 115 V | ✅ |
| Tensión entre fases | 240 V o 208 V | ⏳ **medir con multímetro** (define el inversor) |
| Medidor | Energía activa, lectura real | ✅ factura · ⏳ foto de la placa |
| Acometida | — | ⏳ foto |
| Tablero | Probable ubicación del inversor y las baterías: cerca del tablero | ⏳ foto |
| Puesta a tierra | No sabe | ⏳ |

## 5. Cargas (aparatos)
Inventario detallado: [`inventario-cargas-propietario.csv`](inventario-cargas-propietario.csv).

**Aires: 3 en total.** Dos LG DUAL Inverter de 220 V (12 000 y 9 000 BTU) y un Olimpo de 12 000 BTU clase C, probablemente de velocidad fija y 115 V. Análisis en [`03-analisis-consumo.md`](03-analisis-consumo.md) §6.

**Frío (nevera + congelador): 69,9 kWh/mes según etiqueta ≈ 14 % del consumo promedio.** Las dos cargas críticas suman ≈ 100 W de promedio y son muy eficientes.

| Aparato | Datos | Crítico en corte | Estado |
|---|---|---|---|
| **Nevera LG LS65SXTX** | Side-by-side, 592 L, etiqueta RETIQ **A**, **45,9 kWh/mes** (≈ 1,5 kWh/día, ≈ 64 W promedio), ahorro del 56 %, deshielo automático, T ambiente 16–38 °C | **Sí (primordial)** | ✅ foto de la etiqueta 2026-11-05 |
| **Congelador Electrolux EFUP17P3HRG** | Vertical, 163 L, etiqueta RETIQ **A**, **24 kWh/mes** (≈ 0,8 kWh/día, ≈ 33 W promedio), ahorro del 56 %, **deshielo manual**, T ambiente 16–43 °C | Sí | ✅ foto de la etiqueta 2026-11-05 |
| **Aire 1 (habitación) — Olimpo OLACI12-110MA21** | Mini split **12 000 BTU** (3 517 W de frío), etiqueta RETIQ **C**, EER **3,25 W/W** → **≈ 1,08 kW** de entrada; 142,83 kWh/mes a 132 h/mes (etiqueta); T ambiente 18–43 °C. ⚠️ El "110" del modelo sugiere **115 V**, no 220 V. ⚠️ Falta confirmar si es inverter (la placa de la unidad exterior lo dice) | No | ✅ foto de la etiqueta 2026-11-05 · ⏳ horas reales de uso |
| **Aire 2 (habitación) — LG VM122C7, DUAL Inverter** | Split **12 000 BTU**: nominal 3 517 W de frío / **1 060 W** de entrada / 4,8 A; rango de frío 703–4 044 W; entrada máx. **1 460 W** / 6,6 A; **220 V** monofásico, 50/60 Hz; R410A 0,85 kg; fusible máx. 15 A. Compresor inverter (arranque suave, consumo bajo en carga parcial) | No | ✅ fotos de la placa y el frente 2026-11-05 · ⏳ horas de uso |
| **Aire 3 (habitación) — LG VM092C6, DUAL Inverter** | Split **9 000 BTU**: nominal 2 638 W de frío / **790 W** de entrada / 4,30 A; rango de frío 879–3 311 W; entrada máx. **1 270 W** / 7,20 A; **220 V** monofásico; R410A 0,60 kg; fusible máx. 15 A | No | ✅ fotos de la placa y el frente 2026-11-05 · ⏳ horas de uso |
| Módem / router | ¿El internet sigue durante un corte? | Deseable | ⏳ prueba en el próximo corte |
| Abanicos | — | Deseable | ⏳ cantidad |
| Computador(es) | — | Deseable (PC) | ⏳ ¿escritorio o portátil? |
| Impresora 3D | — | No | ⏳ horas/semana |
| Lavadoras, microondas, plancha, televisores, impresora | — | No | ⏳ |

## 6. Techo y sitio
| Dato | Valor | Estado |
|---|---|---|
| Material | Eternit (fibrocemento), en buen estado | ✅ |
| Forma | Dos aguas, ≈ 10 × 15 m | ⚠️ medidas aproximadas |
| Orientación de las aguas | Probablemente este y oeste | ⚠️ por confirmar |
| Pendiente | ~10° asumida | ⚠️ |
| Edad del techo / asbesto | — | ⏳ (si es anterior a 2021, podría tener asbesto) |
| Correas (vigas) | ¿Madera o metal? | ⏳ |
| Sombras | Principalmente árboles | ✅ · ⏳ posición, altura y si son propios |

## 7. Decisiones tomadas
| Fecha | Decisión |
|---|---|
| 2026-11-05 | El repositorio se actualiza directamente en `main` |
| 2026-11-05 | Anteproyecto v1: **on-grid de 7 × ~620 W (4,3 kWp) en la cara este (~13 M COP)** + respaldo en fase 2 (inversor-cargador 48 V + batería de 2,4 kWh, ≈ 5,3 M). Ver [`04-anteproyecto.md`](04-anteproyecto.md) — *propuesta, pendiente de aprobación del propietario* |

## 8. Pendientes del propietario
1. ⏳ Voltaje entre fases y entre cada fase y el neutro.
2. ⏳ Fotos del medidor, la acometida y el tablero.
3. ⏳ Techo: orientación de las aguas, edad, tipo de correas; foto desde arriba.
4. ⏳ Árboles: posición respecto al techo, altura, si son propios; fotos hacia los 4 lados.
5. ⏳ Placa de la unidad exterior del Aire 1 (voltaje, inverter); horas de uso de los 3 aires.
6. ⏳ Causa del aumento de consumo en 2026.
7. ⏳ Tipo de internet (fibra, cable o antena).

---

## 9. Bitácora
| Fecha | Qué compartió el propietario | Dónde quedó |
|---|---|---|
| 2026-10-28 | Pidió la base de conocimiento solar para Sabanalarga y la lista de datos de entrada | Carpetas 01–06, [`01-DATOS-QUE-NECESITO.md`](01-DATOS-QUE-NECESITO.md) |
| 2026-11-05 | Repo de GitHub; actualizar en `main` | §7 |
| 2026-11-05 | Respuestas al cuestionario (objetivos, cortes, presupuesto de 15 M, aires de 220 V, 3 aires, aparatos, techo de eternit a dos aguas ≈ 10 × 15 m, árboles, vivienda propia, declara renta, compra de equipos con técnico, monitoreo) | §2–6, [`02-respuestas-propietario.md`](02-respuestas-propietario.md) |
| 2026-11-05 | 12 facturas Air-e (nov-25 a oct-26) en ZIP | §3, [`consumo-historico.csv`](consumo-historico.csv) |
| 2026-11-05 | Enlace de Google Maps de la casa (coordenadas no se publican) | §1, §6 |
| 2026-11-05 | Foto de la etiqueta de energía de la nevera: LG LS65SXTX, 592 L, clase A, 45,9 kWh/mes | §5, [`inventario-cargas-propietario.csv`](inventario-cargas-propietario.csv) |
| 2026-11-05 | Pidió anotar todo lo que comparta en esta memoria de la casa | Este archivo + `CLAUDE.md` |
| 2026-11-05 | Foto de la etiqueta de energía del congelador: Electrolux EFUP17P3HRG, vertical 163 L, clase A, 24 kWh/mes, deshielo manual | §5, [`inventario-cargas-propietario.csv`](inventario-cargas-propietario.csv) |
| 2026-11-05 | Foto de la etiqueta del Aire 1 (habitación): Olimpo OLACI12-110MA21, 12 000 BTU, clase C, EER 3,25, ≈ 1,08 kW | §5, [`inventario-cargas-propietario.csv`](inventario-cargas-propietario.csv) |
| 2026-11-05 | Fotos del Aire 2 (habitación): LG VM122C7 DUAL Inverter, 12 000 BTU, 1 060 W nominal (máx. 1 460 W), 220 V | §4, §5, [`inventario-cargas-propietario.csv`](inventario-cargas-propietario.csv) |
| 2026-11-05 | Fotos del Aire 3 (habitación): LG VM092C6 DUAL Inverter, 9 000 BTU, 790 W nominal (máx. 1 270 W), 220 V | §5, [`inventario-cargas-propietario.csv`](inventario-cargas-propietario.csv) |
