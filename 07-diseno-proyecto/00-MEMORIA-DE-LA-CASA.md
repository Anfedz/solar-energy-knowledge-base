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
| Tablero | **Bifásico de 12 circuitos, con los 12 espacios ocupados** (breakers de 1 polo, rótulos escritos a mano, entre ellos nevera/cocina, lavadora, aire, terraza ⚠️ lectura parcial). En la foto no se ve breaker principal ni barra de tierra. Probable ubicación del inversor y las baterías: cerca del tablero | ✅ foto 2026-11-05 · ⏳ etiqueta de corriente de barras, breaker principal, rótulos legibles |
| Puesta a tierra | No sabe | ⏳ |

## 5. Cargas (aparatos)
Inventario detallado: [`inventario-cargas-propietario.csv`](inventario-cargas-propietario.csv).

**Aires: 3 en total.** Dos LG DUAL Inverter de 220 V (12 000 y 9 000 BTU) y un Olimpo de 12 000 BTU clase C, probablemente de velocidad fija y 115 V. Análisis en [`03-analisis-consumo.md`](03-analisis-consumo.md) §6.

**Frío (nevera + congelador): 69,9 kWh/mes según etiqueta ≈ 14 % del consumo promedio.** Las dos cargas críticas suman ≈ 100 W de promedio y son muy eficientes.

| Aparato | Datos | Crítico en corte | Estado |
|---|---|---|---|
| **Nevera LG LS65SXTX** | Side-by-side, 592 L, etiqueta RETIQ **A**, **45,9 kWh/mes** (≈ 1,5 kWh/día, ≈ 64 W promedio), ahorro del 56 %, deshielo automático, T ambiente 16–38 °C | **Sí (primordial)** | ✅ foto de la etiqueta 2026-11-05 |
| **Congelador Electrolux EFUP17P3HRG** | Vertical, 163 L, etiqueta RETIQ **A**, **24 kWh/mes** (≈ 0,8 kWh/día, ≈ 33 W promedio), ahorro del 56 %, **deshielo manual**, T ambiente 16–43 °C | Sí | ✅ foto de la etiqueta 2026-11-05 |
| **Aire 1 (habitación) — Olimpo OLACI12-110MA21** | Mini split **12 000 BTU** (3 517 W de frío), etiqueta RETIQ **C**, EER **3,25 W/W** → **≈ 1,08 kW** de entrada; 142,83 kWh/mes a 132 h/mes (etiqueta); T ambiente 18–43 °C. ⚠️ El "110" del modelo sugiere **115 V**, no 220 V. ⚠️ Falta confirmar si es inverter (la placa de la unidad exterior lo dice) | No | ✅ foto de la etiqueta 2026-11-05 · ✅ uso: **2–3 h de día + 2 h de noche** |
| **Aire 2 (habitación) — LG VM122C7, DUAL Inverter** | Split **12 000 BTU**: nominal 3 517 W de frío / **1 060 W** de entrada / 4,8 A; rango de frío 703–4 044 W; entrada máx. **1 460 W** / 6,6 A; **220 V** monofásico, 50/60 Hz; R410A 0,85 kg; fusible máx. 15 A. Compresor inverter (arranque suave, consumo bajo en carga parcial) | No | ✅ fotos de la placa y el frente 2026-11-05 · ✅ uso: **2–3 h de día + 2 h de noche** |
| **Aire 3 (habitación) — LG VM092C6, DUAL Inverter** | Split **9 000 BTU**: nominal 2 638 W de frío / **790 W** de entrada / 4,30 A; rango de frío 879–3 311 W; entrada máx. **1 270 W** / 7,20 A; **220 V** monofásico; R410A 0,60 kg; fusible máx. 15 A | No | ✅ fotos de la placa y el frente 2026-11-05 · ✅ uso: **toda la noche, ~23 h a 7 h (a veces más) + 2–3 h de día** → es el aire que más horas trabaja |
| Módem / router | ¿El internet sigue durante un corte? | Deseable | ⏳ prueba en el próximo corte |
| Abanicos | — | Deseable | ⏳ cantidad |
| Computador(es) | — | Deseable (PC) | ⏳ ¿escritorio o portátil? |
| Impresora 3D | — | No | ⏳ horas/semana |
| **Lavadora Mabe LMC70203WDAB0** | Automática, 20 kg, etiqueta RETIQ **A**, **9,4 kWh/mes** (14 ciclos/mes ≈ 0,67 kWh/ciclo), factor 121 l/kWh/ciclo. Conviene lavar en horas de sol | No | ✅ foto de la etiqueta 2026-11-05 · ⏳ ¿hay una segunda lavadora? |
| **Impresora Epson L4260** (EcoTank) | En espera: **0,733 kWh/mes** (clase B, norma chilena NCh 3107). Despreciable | No | ✅ foto de la etiqueta 2026-11-05 |
| Microondas, plancha, televisores | — | No | ⏳ |

## 6. Techo y sitio
| Dato | Valor | Estado |
|---|---|---|
| Material | Eternit (fibrocemento), en buen estado | ✅ |
| Forma | Dos aguas, ≈ 10 × 15 m | ⚠️ medidas aproximadas |
| Orientación de las aguas | **Este y oeste** | ✅ confirmado por el propietario (2026-11-08) |
| Pendiente | ~10° asumida | ⚠️ |
| Edad del techo / asbesto | — | ⏳ (si es anterior a 2021, podría tener asbesto) |
| Correas (vigas) | ¿Madera o metal? | ⏳ |
| Sombras | **Árboles altos alrededor de la casa** (frondosos y palmas); uno muy cerca del alero, con ramas sobre la canal. **A las 4:10 pm (noviembre) la sombra cubre todo el techo** (sol a 18° de altura desde el oeste-suroeste) | ✅ fotos 2026-11-09 · **Lado oeste** ("izquierdo" en las fotos, donde se pone el sol): copas a ~**26–30°** sobre el horizonte entre el suroeste y el noroeste, ~15–20° hacia el sur-suroeste; un níspero con el tronco junto al alero oeste. ⏳ Lado este sin medir (se asumió 10°) |
| Estado del eternit (fotos) | Láminas onduladas **antiguas**, con líquenes/musgo; **varias láminas remendadas o reemplazadas** (piezas traslúcidas, parches blancos, un tramo de teja de otro color cerca de la cumbrera). Hay un panel solar pequeño existente sobre la cumbrera ⚠️ (¿lámpara o cámara?) | ✅ fotos 2026-11-09 · ⚠️ por su edad podría contener asbesto: no lijar, cepillar ni lavar a presión |

## 7. Decisiones tomadas
| Fecha | Decisión |
|---|---|
| 2026-11-08 | ⏳ **Montaje en discusión:** propuesta familiar de una estructura metálica sobre el techo con los 12 paneles al **sur a 10°**, en lugar de 6 este + 6 oeste. Análisis: con el sistema sin inyección el ahorro es igual en las tres opciones y la estructura no se paga con energía. Recomendación: 6 E + 6 O sobre el techo, salvo que el eternit no aguante. Ver [`../09-orientacion/README.md`](../09-orientacion/README.md) |
| 2026-11-05 | ✅ **DECISIÓN: contratar la cotización recibida** (12 × Ronma 630 W + SRNE ASP4865U140-H 6,5 kW, sin batería ni inyección, $14 395 000). Plan: medir el consumo por equipo, mover el uso a **9 am–3 pm** y ahorrar para una **batería** (5 kWh apilable, luego 10 kWh). Ver [`06-plan-implementacion.md`](06-plan-implementacion.md) |
| 2026-11-05 | El repositorio se actualiza directamente en `main` |
| 2026-11-05 | Cotización recibida (12 × Ronma 630 W + SRNE 6,5 kW off-grid, sin batería, $14,4 M): análisis en [`05-analisis-cotizacion.md`](05-analisis-cotizacion.md). **Recomendación:** pedir versión on-grid de 8 × Ronma 630 (≈ 12,1–13,8 M, ahorro ≈ 5,4 M/año) — *no elegida: el propietario decidió la cotización tal cual* |
| 2026-11-05 | Anteproyecto v1: **on-grid de 7 × ~620 W (4,3 kWp) en la cara este (~13 M COP)** + respaldo en fase 2 (inversor-cargador 48 V + batería de 2,4 kWh, ≈ 5,3 M). Ver [`04-anteproyecto.md`](04-anteproyecto.md) — *propuesta superada por la decisión del 2026-11-05* |

## 8. Pendientes del propietario
0c. ⏳ **Lecturas del medidor de Air-e** a las 5–6 pm y a las 6–7 am durante 5–7 noches (con horas de aire de cada noche), para dimensionar la batería con el consumo nocturno real.
0b. ⏳ **Sombra:** fotos del techo a las 8–9 am, 1 pm, 2 pm y 3 pm (un día despejado), para saber a qué hora empieza la sombra y de qué lado vienen los árboles. ⏳ Foto del techo por debajo (láminas y correas) y edad aproximada del techo.
0. ⏳ **Antes de firmar:** revisar con el instalador los 12 puntos de [`06-plan-implementacion.md`](06-plan-implementacion.md) §2 (tensión 120/240 vs 208 V, funcionamiento sin batería, Wi-Fi, DPS y tierra, RETIE, trámite Air-e, cableado listo para batería, garantías).
1. ⏳ Voltaje entre fases y entre cada fase y el neutro.
2. ⏳ Fotos del medidor y la acometida. Del tablero: la etiqueta interior de cerca (corriente nominal de barras), dónde está el breaker principal y su amperaje, y una foto legible de los rótulos de cada breaker.
3. ⏳ Techo: orientación de las aguas, edad, tipo de correas; foto desde arriba.
4. ⏳ Árboles: posición respecto al techo, altura, si son propios; fotos hacia los 4 lados.
5. ⏳ Placa de la unidad exterior del Aire 1 (voltaje, inverter). ⏳ ¿A qué hora del día se usan los aires (mañana o tarde)?
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
| 2026-11-05 | Foto del tablero: bifásico, 12 circuitos, lleno; rótulos poco legibles | §4; presupuesto del anteproyecto +0,3–0,8 M (tablero solar adicional) |
| 2026-11-05 | Fotos de etiquetas: lavadora Mabe LMC70203WDAB0 (9,4 kWh/mes, clase A) e impresora Epson L4260 (0,73 kWh/mes en espera) | §5, [`inventario-cargas-propietario.csv`](inventario-cargas-propietario.csv) |
| 2026-11-05 | Horario de aires: Aires 1 y 2, 2–3 h de día + 2 h de noche cada uno; Aire 3, de ~23 h a 7 h (a veces más) + 2–3 h de día | §5, [`inventario-cargas-propietario.csv`](inventario-cargas-propietario.csv) |
| 2026-11-05 | Cotización de un instalador local (22-oct-2026): 12 × Ronma RM-630W TOPCon bifacial + inversor SRNE ASP4865U140-H 6,5 kW (off-grid, 48 V, fase partida 120/240 V) sin batería, $14 395 000; fichas técnicas de panel e inversor. Le recomendaron no vender a Air-e | §7, [`05-analisis-cotizacion.md`](05-analisis-cotizacion.md) |
| 2026-11-05 | Preguntó por el área de los 12 paneles (32,4 m² de paneles; ~35–40 m² de techo) y qué pasa si usa los aires de día | Respuesta en el chat; sensibilidad en [`05-analisis-cotizacion.md`](05-analisis-cotizacion.md) §9 |
| 2026-11-05 | Aclaró que "usar los aires de día" significa **mover** horas (prenderlos de día y usarlos menos de noche), no agregar horas. Pidió un simulador interactivo basado en las facturas y que tenga en cuenta los computadores y demás aparatos | Simulador en [`../08-simulador/`](../08-simulador/README.md); sensibilidad en [`05-analisis-cotizacion.md`](05-analisis-cotizacion.md) §9 (caso 1) |
| 2026-11-05 | **Decidió contratar la cotización** (12 × Ronma 630 W + SRNE 6,5 kW, sin batería). Quiere ver el comportamiento de la casa, identificar los equipos que más consumen, usarlos entre 9 am y 3 pm, e ir ahorrando para una batería | §7, §8, [`06-plan-implementacion.md`](06-plan-implementacion.md) |
| 2026-11-06 | Preguntó el consumo en horas sin sol de la nevera, el congelador y 2 h de aire; si conviene usar bombillos inteligentes para medir la iluminación; y pidió un escenario con el Aire 3 encendido 5 h de noche | [`06-plan-implementacion.md`](06-plan-implementacion.md) §8; simulador v2 (modo "partir de mis facturas", botón Aire 3 5 h) |
| 2026-11-08 | Confirmó que el techo cae al este y al oeste. En la familia se propone una estructura metálica sobre el techo con los paneles al sur a 10° (en vez de 6 + 6). Preguntó si yo había recomendado ponerlos todos al este y pidió un modelo visual | §6, §7; [`../09-orientacion/`](../09-orientacion/README.md) (maqueta 3D publicada) |
| 2026-11-09 | 3 fotos del techo a las 4:10 pm: la sombra de los árboles cubre todo el techo. Se ven láminas de eternit antiguas con líquenes y varios remiendos, árboles altos muy cerca (uno sobre la canal) y un panel solar pequeño existente | §6; [`06-plan-implementacion.md`](06-plan-implementacion.md) §9; simulador v3 (selector de sombra en la tarde) |
| 2026-11-09 | Pidió volver privado el repositorio de GitHub. Desde la sesión no se pudo (el entorno no permite cambiar la configuración del repo): lo hace el propietario en GitHub → Settings → Danger Zone → Change visibility → Private. Mientras tanto se mantienen las reglas de privacidad de `CLAUDE.md` | ⏳ propietario |
| 2026-11-09 | 4 fotos desde el centro del techo hacia el lado izquierdo (oeste), enviadas ~4:40 pm. Las anteriores eran del mismo lado, tomadas desde el borde. Se ve el sol detrás de los árboles: con el sol a ~12° y el campo de visión de la cámara se estimó un horizonte de árboles de ~26–30° al oeste | §6; perfil `06-datos/raw/horizonte_estimado_fotos_2026-11-09.txt`; [`06-plan-implementacion.md`](06-plan-implementacion.md) §9 |
| 2026-11-09 | Preguntó cuánto baja la sombra de los árboles en los escenarios analizados | [`06-plan-implementacion.md`](06-plan-implementacion.md) §9 (tabla resumen) |
| 2026-11-10 | Preguntó si conviene la batería para aprovechar la energía del mediodía | [`06-plan-implementacion.md`](06-plan-implementacion.md) §10: sí; óptimo 5–7,5 kWh con el plan (se paga en ~3,5–3,8 años) |
| 2026-11-10 | Preguntó si con venta de energía se ahorraría más. Informó costos de esa opción: ~7 M de instalación y certificación y ~10 M de inversor ⚠️ (fuente no indicada) | [`06-plan-implementacion.md`](06-plan-implementacion.md) §11 |
| 2026-11-10 | Pidió cotización de baterías | [`07-cotizacion-baterias.md`](07-cotizacion-baterias.md): según el manual, el SRNE acepta los protocolos PACE, Ruida, Aoguan, Oliter, Sunwoda, Daqin, SRNE, Pylontech y Vilion, y funciona sin batería (NOb); 11 opciones con precio; recomendadas Pylontech US3000C, Pytes E-BOX 5,12 kWh y Felicity 8,75 kWh |
| 2026-11-10 | Criterio para la batería: buena garantía y buena relación precio/kWh, que cubra como mínimo la noche con las costumbres actuales (aires 2–3 h c/u + iluminación + computadores). Propuso leer el medidor a las 6 pm y a las 6 am | [`07-cotizacion-baterias.md`](07-cotizacion-baterias.md) §6: recomendado 2 × Pytes E-BOX 48100R (10,24 kWh, ~8,6 M), sujeto a confirmar compatibilidad. ⏳ Lecturas del medidor de varias noches |
| 2026-11-10 | Pidió más información sobre la Pytes E-BOX 48100R | [`07-cotizacion-baterias.md`](07-cotizacion-baterias.md) §7: 50 A (2,56 kW) por módulo, así que hacen falta **mínimo 2**; garantía con operación a 0–45 °C, sin cobertura por rayos; el SRNE ASP no está en la lista oficial de Pytes (sí los SRNE HF/HES): ⏳ confirmar |
