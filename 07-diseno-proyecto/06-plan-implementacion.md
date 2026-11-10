# Plan de implementación: sistema elegido

> Decisión del propietario (2026-11-05): **contratar la cotización recibida**. Son 12 paneles Ronma de 630 W (7,56 kWp) con el inversor SRNE ASP4865U140-H de 6,5 kW, sin batería y sin inyección a la red, por $14 395 000.
> **Estrategia:**
> 1. Instalar.
> 2. Medir qué equipos consumen más.
> 3. Mover el consumo a **9 am–3 pm**.
> 4. Ahorrar para la **batería**.
>
> Cifras: simulación hora a hora (`08-simulador/motor.js`), con 10 % de sombra, CU de $936/kWh y estrato 3.

## 1. Qué esperar, etapa por etapa

| Etapa | Ahorro/año | Pagarías a Air-e/año (energía + alumbrado) | Energía solar desperdiciada |
|---|---|---|---|
| Hoy, sin solar | — | 5,77 M | — |
| **Instalado, hábitos actuales** | 2,5 M (2,1 M si el SRNE conmuta) | 3,3 M | ~6 800 kWh/año |
| **Instalado + consumo movido a 9 am–3 pm** | **3,5 M** (3,1 M si conmuta) | 2,3 M | ~5 800 kWh/año |
| + batería de 5 kWh | 5,0 M | 0,8 M | ~4 000 kWh/año |
| + batería de 10 kWh | 5,6 M | 0,1 M | ~3 100 kWh/año |
| + batería de 15 kWh | 5,7 M | 0,1 M | casi sin cambio frente a 10 kWh |

**El tamaño de batería con mejor retorno, una vez movidos los hábitos, es de 5 a 10 kWh:**
- **5 kWh** agrega ~1,5 M/año por ~5,2 M. La batería se paga en ~3,4 años.
- **10 kWh** agrega ~2,2 M/año por ~9,6 M. Se paga en ~4,4 años.
- **Más de 10 kWh casi no suma:** ya no queda energía del día para guardar.

## 2. Antes de firmar: pedir por escrito al instalador ✍️

| # | Punto | Por qué |
|---|---|---|
| 1 | **Medir la tensión entre fases.** El SRNE es de fase partida 120/240 V. Si la red es **120/208 V**, el instalador debe confirmar por escrito que el equipo funciona así (o cambiar de modelo) | Si no es compatible, el bypass a la red puede fallar |
| 2 | Confirmar que el SRNE **funciona sin batería** y si **mezcla** solar y red o **conmuta** | Es la diferencia entre 2,5 y 2,1 M/año de ahorro |
| 3 | **Módulo Wi-Fi del SRNE incluido** y configurado en tu celular | Es la herramienta principal de tu plan de medir; en la cotización es opcional |
| 4 | **DPS (protección contra rayos) en DC y en AC + puesta a tierra** | Tu zona tiene 10–30 descargas/km²·año. No aparecen en la cotización |
| 5 | **Protecciones DC reales:** breakers DC de ≥ 500 V con certificado RETIE (no breakers AC) | $75 000 por protección DC parece bajo |
| 6 | **Certificados RETIE** de paneles e inversor, **memoria de diseño** y **declaración de cumplimiento RETIE** firmada por un profesional con matrícula | Lo exige el RETIE; sin esto no hay trámite válido |
| 7 | **Trámite ante Air-e como "AGPE sin entrega de excedentes"**, con el manual de la función de no inyección. ¿Quién lo radica? | Aun sin inyectar, si la casa sigue conectada a Air-e **hay que tramitarlo** (CREG 174) |
| 8 | **Qué circuitos van detrás del inversor** (ver §3) y quién resuelve el tablero lleno | El bypass del SRNE es de 40 A |
| 9 | **Cableado listo para la batería:** espacio, canalización y breaker DC dimensionados para 48 V y ~140 A, cable de 35–50 mm² ⚠️ (que lo confirme el instalador) | Ahorra rehacer obra cuando compres la batería |
| 10 | **Garantías:** inversor (la ficha dice 2 años), paneles (15 años de producto y 30 de potencia) e instalación. Servicio técnico local | El inversor es lo que más falla |
| 11 | **Consumo en vacío del SRNE** (W) | Lo pagas 24 h al día. Asumí 50 W, unos 440 kWh/año |
| 12 | Desglose de "acometidas DC" (2 × $800 000): metros, calibre y tubería | Parece alto |

## 3. Durante la instalación

- **Ubicación del inversor:** bajo techo, ventilado, a la sombra y lejos del alcance de niños. Es IP20 y reduce su potencia por encima de 45 °C. Debe quedar cerca del tablero y con espacio al lado para la batería futura.
- **Paneles:** 6 en la cara este y 6 en la oeste, cada grupo de 6 en su propia entrada MPPT. Una estructura metálica mirando al sur produce 2,7 % más pero ahorra lo mismo con este sistema (ver `09-orientacion/`). Esto ya está verificado: 307 V de Voc máximo y 16,3 A, dentro de los límites del SRNE. Separación de 10–15 cm del techo para ventilar. Fijación a las **correas**, no solo a la lámina de eternit. Si el techo es anterior a 2021, perforar en húmedo y con protección (posible asbesto).
- **Circuitos detrás del inversor** (los que podrán usar la energía solar): los **3 aires**, la nevera y el congelador, la lavadora, los tomas de computadores e impresora 3D, y la iluminación.
  - Si la casa completa pasa por el inversor, hay que verificar que la carga total no supere los **40 A del bypass**.
- **Configuración:** prioridad "solar primero" (en el SRNE suele llamarse SOL o SUB ⚠️, según el manual) y la red como respaldo.
- **Rotulado:** marcar cada circuito en el tablero, incluido el nuevo.
- **Entrega:** pedir el diagrama unifilar, las fotos de la instalación y la configuración del inversor.

## 4. El primer mes: medir

1. **App del SRNE:** producción solar, consumo de la casa y energía tomada de la red, hora a hora. Anota el consumo de la casa a las 9 am, a las 3 pm y por la noche.
2. **Qué aparato consume qué:**
   - **Aires** (220 V, conectados directo): un medidor de pinza en el tablero (tipo Shelly EM o Emporia Vue ⚠️, precio por verificar). Instalarlo con un electricista.
   - **Computadores, impresora 3D, TV, lavadora:** enchufes inteligentes con medición de energía ⚠️.
3. **Medidor de Air-e:** lee el medidor a las 7 am y a las 7 pm durante 2 semanas. Así sabes cuánto compras de día y cuánto de noche.
4. **Compara cada factura** con el mismo mes del año anterior en `consumo-historico.csv`. Mándame las facturas y yo las agrego.

## 5. Mover el consumo a 9 am–3 pm (+1,0 M/año)

| Equipo | Qué hacer | Efecto |
|---|---|---|
| **Aires 1 y 2** | Usarlos de día (9 am–3 pm) y evitar sus 2 h nocturnas | Es lo que más rinde: su consumo nocturno pasa a ser solar |
| **Aire 3 (tu cuarto)** | **Preenfriar la alcoba de 1 a 3 pm** con la puerta cerrada, y por la noche subir 1–2 °C el termostato o usar el modo sueño | Reduce algo el consumo nocturno, que hoy es el mayor de la casa |
| **Lavadora y plancha** | Solo entre 9 am y 3 pm | Pequeño, pero fácil |
| **Impresora 3D** | Impresiones largas de día | 1–3 kWh por impresión larga |
| **Microondas y cocina** | Lo que se pueda, al mediodía | Pequeño |
| **Cargar** portátiles, celulares y baterías de herramientas | De día | Pequeño |
| **Nevera y congelador** | No se mueven | Son 24 h y consumen poco |

- **Día nublado:** el sol rinde menos y conviene no forzar los aires. La app del SRNE muestra cuánto está produciendo.
- **Ojo con el pico:** el sistema da hasta ~6 kW en un mediodía despejado. Los 3 aires a la vez (~3 kW), más la lavadora y los PC, caben.

## 6. Ahorrar para la batería

| Meta | Costo aprox. (oct-2026) | Ahorro extra/año | Con el ahorro de ~3,5 M/año, se junta en |
|---|---|---|---|
| **Batería de 5 kWh** (LiFePO4 48 V, p. ej. Felicity 5,12 kWh) | ≈ 5,2 M con instalación | +1,5 M | **≈ 1,5 años** |
| Segundo módulo hasta 10 kWh | ≈ 4,5–5 M más | +0,6 M | ≈ 1,5 años más |

- **Recomendación:** empezar con 5 kWh de una marca **apilable**, para agregar después otro módulo igual.
- **Compatibilidad:** debe comunicarse con el SRNE (CAN/RS485) y estar en la **lista de baterías compatibles de SRNE** ⚠️. Pedir que el instalador lo confirme.
- **Respaldo en cortes:** la batería también te da respaldo. Con 5 kWh, la nevera, el congelador, el módem, los abanicos y el PC aguantan ~8–10 h.
- **Precios:** las baterías de litio vienen bajando (BNEF: ~70 USD/kWh mayorista en 2026). Cotizar de nuevo al momento de comprar.

## 7. Indicadores para revisar cada mes
- **kWh comprados a Air-e**, frente al mismo mes del año anterior.
- **Producción solar del mes** (app) y **autoconsumo**: qué fracción de la producción se usó.
- **Consumo de 9 am a 3 pm** frente al consumo nocturno.
- **Plata ahorrada acumulada**, para la meta de la batería.

## 8. Consumo en las horas sin sol (consulta del 2026-11-06)

Según PVGIS, los paneles producen de **7 am a 5 pm**: a las 7 am y a las 5 pm, apenas el 15–17 % del pico; de 9 am a 3 pm, el 60–100 %. **De 6 pm a 6 am la producción es cero**: unas 13 horas por noche que salen de la red, o de la batería cuando la tengas.

| Equipo | Consumo de 6 pm a 7 am | Al mes | Costo/mes (≈ $1 030/kWh con alumbrado) |
|---|---|---|---|
| Nevera LG (etiqueta 45,9 kWh/mes; +30 % por calor) | 0,8–1,1 kWh | 25–33 kWh | $26 000–34 000 |
| Congelador Electrolux (etiqueta 24 kWh/mes; +30 %) | 0,4–0,6 kWh | 13–17 kWh | $13 000–17 000 |
| Aire 1 Olimpo, 2 h (velocidad fija, ~0,85–1,05 kW) | 1,7–2,1 kWh | 51–63 kWh* | $53 000–65 000 |
| Aire 2 LG 12 000 inverter, 2 h (~0,55–0,8 kW) | 1,1–1,6 kWh | 33–48 kWh* | $34 000–49 000 |
| **Subtotal: nevera + congelador + Aires 1 y 2 de noche** | **4,0–5,4 kWh** | **120–160 kWh*** | **$125 000–165 000** |
| Aire 3 LG 9 000, 8 h (23–7 h; ~0,44 kW) | 3,2–3,8 kWh | 95–115 kWh* | $100 000–120 000 |
| Aire 3, **5 h** (23–4 h) | 2,2–2,5 kWh | 65–75 kWh* | $67 000–77 000 |
| Resto: módem, luces, TV/PC de noche | ≈ 2,5 kWh | ≈ 75 kWh | ≈ $77 000 |

\* En meses de calor con uso todas las noches. En meses frescos o lluviosos tus facturas muestran menos uso de aire: según el ajuste con las facturas, el uso real promedio es ~65 % de ese horario.

**Lectura:** una **batería de 5 kWh** (≈ 4,4 kWh útiles) cubre justo la nevera, el congelador y las 2 h nocturnas de los Aires 1 y 2. Si además mueves esas 2 h al día, la batería alcanza para buena parte del Aire 3.

### Escenario: Aire 3 solo 5 h de noche (23–4 h) en vez de 8 h
Simulación hora a hora con el sistema elegido (12 × 630 W + SRNE), en modo "partir de mis facturas":

| Escenario | Consumo/año | Pagas sin batería | Con 5 kWh | Con 10 kWh |
|---|---|---|---|---|
| Hoy: Aire 3 8 h de noche | 5 887 kWh | 3,31 M | 1,70 M | 0,59 M |
| **Aire 3 5 h de noche** | **5 612 kWh (−275)** | **3,03 M (−0,28 M)** | 1,43 M | 0,41 M |
| **Aire 3 5 h + plan 9 am–3 pm** (Aires 1 y 2 de día, lavadora, plancha e impresora 3D de día) | 5 612 kWh | **2,21 M (−1,10 M)** | **0,69 M** | 0,09 M |

- Sin paneles, el cambio del Aire 3 bajaría tu factura de 5,77 a 5,49 M/año.
- El consumo no incluye el del inversor en vacío, que se asumió de 50 W.
- Apagar el aire a las 4 am suele ser cómodo: es la hora más fresca de la noche. Para que no se caliente la alcoba, ayuda dejar el abanico o el modo sueño del LG.

### Iluminación: ¿bombillos inteligentes para medirla?
**No hace falta.** La iluminación se estimó en ~150 W durante 5 h, unos 0,75 kWh por noche: ≈ 23 kWh/mes, unos $23 000/mes.
- **Para saber cuánto gasta:** cuenta los bombillos y lee los vatios impresos en cada uno. Vatios × horas = consumo.
- **Si queda algún bombillo que no sea LED** (incandescente o ahorrador espiral), cámbialo por LED de 7–12 W: es la mejora más barata.
- **Los bombillos inteligentes no consumen menos** que un LED normal, y suman un pequeño consumo en espera, ~0,2–0,5 W cada uno ⚠️. Sirven para automatizar, no para ahorrar.
- **Si quieres medir el circuito de luces completo,** un medidor de pinza en el tablero (el mismo tipo que para los aires) lo hace sin cambiar bombillos.

## 9. Sombra de árboles y estado del techo (fotos del 2026-11-09)

**Lo observado:** a las 4:10 pm de noviembre la sombra de los árboles cubre todo el techo. A esa hora el sol está a solo **18°** de altura, desde el oeste-suroeste (247°), y un árbol de 12 m a 8 m del alero proyecta sombra hasta ~25 m. En marzo, a la misma hora, el sol está a 29° y la sombra es más corta.

**Impacto (simulación hora a hora, sistema elegido de 12 paneles sin inyección):**

| Sombra de la tarde | Producción/año | Ahorro con hábitos actuales | Ahorro con plan 9 am–3 pm | Plan + 5 kWh |
|---|---|---|---|---|
| Sin sombra de árboles | 10 650 kWh | 2,50 M | 3,58 M | 5,06 M |
| **Desde las 4 pm** (observado) | 9 749 kWh | **2,25 M** | **3,53 M** | 5,01 M |
| Desde las 3 pm | 9 092 kWh | 1,96 M | 3,52 M | 4,98 M |
| Desde las 2 pm | 8 241 kWh | 1,70 M | 3,28 M | 4,83 M |

**Lectura:**
- **Después de las 4 pm se produce solo ~7 % de la energía del día.** La sombra desde esa hora es tolerable.
- **Refuerza el plan de usar los equipos de 9 am a 3 pm.** Con los hábitos actuales (aires de 2 a 5 pm) la sombra quita ~$210 000/año; con el plan, casi nada.
- **Lo que hay que confirmar es si la sombra empieza antes,** a las 2–3 pm, o si también hay sombra en la mañana.

**Recomendaciones:**
1. **Podar** las ramas que pasan sobre el techo, en especial la del árbol junto a la canal. Las hojas ensucian los paneles y tapan la canal, y una rama que caiga puede romper el vidrio de un panel.
2. **Si los árboles altos están al oeste,** poner más paneles en la cara **este**: por ejemplo los 12 al este (dos grupos de 6, uno en cada MPPT, caben en ~6,9 × 4,8 m). La cara oeste es la que más pierde en la tarde.
3. **Estado del eternit:** las láminas se ven antiguas y con varios remiendos.
   - Antes de instalar, revisar por debajo el estado de las láminas y las correas, y **cambiar las láminas rotas que van a quedar debajo de los paneles**. Después será difícil hacerlo sin desmontar todo: los paneles duran 25–30 años, más que lo que le queda a un techo viejo.
   - ⚠️ Si el techo es anterior a 2021 puede contener **asbesto** (Ley 1968 de 2019). No lijar, cepillar ni lavar a presión; perforar en húmedo y con protección respiratoria; no caminar directamente sobre las láminas, porque se rompen y causan caídas.
   - Si el eternit está muy deteriorado, gana sentido la idea de una estructura que **se apoye en muros o columnas** y no en las láminas, o cambiar las láminas de esa zona por cubierta nueva.

### Actualización: horizonte de árboles estimado con fotos (2026-11-09, ~4:40 pm)
Las fotos desde el centro del techo hacia el **oeste** muestran el sol detrás de los árboles. A esa hora el sol está a ~12° de altura (azimut 249°). Con el campo de visión típico de un celular, las copas llegan a ~**26–30°** entre el suroeste y el noroeste, y a ~15–20° hacia el sur-suroeste. El lado este no se midió: se asumió un horizonte de 10°.
Ese perfil (`06-datos/raw/horizonte_estimado_fotos_2026-11-09.txt`) se cargó en PVGIS (`userhorizon`):

| Cara (10°) | Sin árboles | Con árboles estimados | Pérdida |
|---|---|---|---|
| **Este** | 1 491 kWh/kWp | **1 465** | −1,7 % |
| Sur (estructura) | 1 513 | 1 462 | −3,4 % |
| Oeste | 1 453 | 1 388 | −4,5 % |

Simulación hora a hora con el sistema elegido y el horizonte de árboles (`07-diseno-proyecto/escenario_horizonte_arboles.js`):

| Montaje | Producción/año | Hábitos actuales | Plan 9–15 | Plan + 5 kWh |
|---|---|---|---|---|
| 6 este + 6 oeste | 10 009 kWh | 2,42 M | 3,57 M | 5,05 M |
| 8 este + 4 oeste | 10 099 kWh | 2,42 M | 3,57 M | 5,05 M |
| 12 este | 10 279 kWh | 2,41 M | 3,57 M | 5,05 M |
| 12 sur (estructura) | 10 259 kWh | 2,42 M | 3,57 M | 5,05 M |

**Conclusiones:**
- Los árboles del oeste quitan **~3 %** de la producción anual (6E+6O), sobre todo después de las 4 pm. Las tablas incluyen además un 3 % de pérdidas varias, que antes se había agrupado como "~6 %". En total es menos que el 10 % parejo que se había supuesto.
- Con los árboles, **la cara este es la mejor**, incluso un poco más que el sur con estructura.
- **El ahorro es igual en todos los montajes**, porque en el sistema sin inyección sobra energía al mediodía. La estructura al sur sigue sin justificarse por energía.
- **Sugerencia práctica:** si da igual, preferir la cara **este** para los paneles cercanos al níspero del alero oeste, por ejemplo 8 este + 4 oeste, con los 4 del oeste lejos del árbol. Además, **podar** las ramas sobre el techo.
- ⚠️ Es una estimación con fotos: depende de la hora exacta y del lente del celular. Para confirmarla: capturas de una app de trayectoria solar hacia el oeste y el este.

#### Cuánto baja el ahorro por la sombra de los árboles (`escenario_resumen_sombra.js`)

| Escenario | Producción sin → con árboles | Ahorro sin árboles | Ahorro con árboles | Diferencia |
|---|---|---|---|---|
| Elegido, hábitos actuales | 10 330 → 10 009 kWh (−3,1 %) | 2,49 M | 2,42 M | −$65 000 (−2,6 %) |
| **Elegido, plan 9–15 + Aire 3 5 h** | 10 330 → 10 009 (−3,1 %) | 3,58 M | **3,57 M** | **−$5 000 (−0,1 %)** |
| Elegido + 5 kWh, plan | 10 330 → 10 009 | 5,06 M | 5,05 M | −$12 000 (−0,2 %) |
| Elegido + 10 kWh, plan | 10 330 → 10 009 | 5,70 M | 5,70 M | −$5 000 (−0,1 %) |
| Elegido + 5 kWh, hábitos actuales | 10 330 → 10 009 | 4,06 M | 3,98 M | −$77 000 (−1,9 %) |
| On-grid 8 este (hipotético) | 7 268 → 7 139 (−1,8 %) | 5,64 M | 5,58 M | −$52 000 (−0,9 %) |
| On-grid 12 (hipotético) | 10 761 → 10 426 (−3,1 %) | 6,81 M | 6,70 M | −$107 000 (−1,6 %) |

"Sin árboles" incluye el 3 % de pérdidas varias. Con el horizonte de las fotos, todos los escenarios quedan **igual o un poco mejor** que con el supuesto anterior del 10 % parejo.

## 10. ¿Qué tamaño de batería? (consulta del 2026-11-10)
Simulación hora a hora del sistema elegido, con el horizonte de árboles de las fotos (`escenario_tamano_bateria.js`). Costo supuesto: ~$960 000/kWh más $300 000 de instalación ⚠️ (cotizar al comprar).

| Batería | Costo | Plan 9–15: ahorro/año | Pagas/año | Se paga en | Hábitos actuales: ahorro/año | Se paga en |
|---|---|---|---|---|---|---|
| 0 | — | 3,57 M | 2,20 M | — | 2,42 M | — |
| 2,5 kWh | 2,7 M | 4,36 M | 1,41 M | 3,4 años | 3,23 M | 3,3 años |
| **5 kWh** | 5,1 M | **5,05 M** | 0,72 M | **3,5 años** | 3,98 M | 3,3 años |
| **7,5 kWh** | 7,5 M | **5,57 M** | 0,20 M | 3,8 años | 4,66 M | 3,3 años |
| 10 kWh | 9,9 M | 5,70 M | 0,07 M | 4,7 años | 5,16 M | 3,6 años |
| 15 kWh | 14,7 M | 5,72 M | 0,05 M | 6,8 años | 5,60 M | 4,6 años |

**Lectura:**
- La batería **sí es la forma de aprovechar lo que sobra al mediodía**: con el plan, sin batería se desperdician ~6 400 kWh/año.
  - Con 5 kWh, la batería entrega ~4,4 kWh cada noche y el desperdicio baja a ~4 600 kWh/año.
  - Con 7,5 kWh entrega ~6 kWh por noche.
- **Punto óptimo con el plan: 5 a 7,5 kWh.** Por encima de 7,5 kWh casi no suma, porque el consumo nocturno ya quedó cubierto.
- **Si los hábitos no cambian** (más consumo nocturno), conviene llegar a ~10 kWh.
- **Ruta sugerida:** primero 5 kWh de una marca **apilable**; después del primer año, ver en la app cuánto se descarga cada noche. Si llega vacía a la mañana, agregar ~2,5–5 kWh.
- **Vida útil:** una LiFePO4 hace ~1 ciclo por día; con ~6 000 ciclos dura más de 15 años, mucho más que los 3,5 años en que se paga. Para que dure, debe ir **a la sombra y ventilada**: el calor es lo que más la envejece.
- **El SRNE carga hasta 140 A (~6,7 kW).** Al mediodía sobran 2–4 kW, así que una batería de 5 kWh se llena hacia la 1–2 pm de un día despejado.
- Aun con batería sigue sobrando energía en días de poco consumo. Otras formas de usarla al mediodía:
  - preenfriar las alcobas;
  - congelar botellas de agua en el congelador para que el compresor trabaje menos de noche;
  - bombear agua al tanque, si hay bomba;
  - a futuro, cargar un carro eléctrico.

## 11. ¿Y si se vendieran excedentes? (consulta del 2026-11-10)
Costos que reporta el propietario para la opción con venta: **~7 M de instalación y certificación** y **~10 M de inversor** ⚠️ (fuente no documentada). Ahorros de la simulación hora a hora con el horizonte de árboles (`escenario_venta_vs_sin_inyeccion.js`):

| Opción | Inversión aprox. | Ahorro/año (hábitos actuales) | Ahorro/año (plan 9–15) | Plan, si la bolsa no paga | Se paga en (plan) | Neto 10 años* |
|---|---|---|---|---|---|---|
| Elegido, sin inyección | ~15,5 M | 2,42 M | 3,57 M | 3,57 M | 4,3 años | ~20 M |
| Elegido + 5 kWh | ~20,6 M | 3,98 M | 5,05 M | 5,05 M | 4,1 años | ~30 M |
| Con venta, inversor de 10 M (cifra del propietario) + 7 M | ~23,2 M | 6,70 M | 6,93 M | 5,48 M | 3,3 años | ~46 M |
| Con venta, inversor de red sencillo de fase partida (2,2–3,9 M, ver `03-mercado-y-equipos`) + 7 M | ~15,4–17,1 M | 6,70 M | 6,93 M | 5,48 M | 2,4 años | ~53 M |
| Híbrido con venta + 5 kWh | ~28,3 M | 6,70 M | 6,93 M | 5,68 M | 4,1 años | ~41 M |

\* Ahorro de 10 años menos la inversión, sin alzas de tarifa ni degradación.

**Lectura:**
- **Sí: con venta se ahorra casi el doble** que sin inyección (6,9 frente a 3,6 M/año), aun con los costos reportados. El crédito 1:1 convierte en ahorro casi toda la energía del mediodía que hoy se pierde.
- **Un inversor de ~10 M es probablemente un híbrido** (venta + batería). Para solo vender basta un inversor de red de fase partida de 2,2–3,9 M, verificando si la red es 208 o 240 V.
- **Con venta, la batería casi no suma** (6,93 M con o sin ella): la red hace de batería.
- **Ventajas reales del sistema elegido:**
  - no depende de que Air-e apruebe la entrega de excedentes (empresa intervenida, trámites lentos, capacidad del circuito);
  - no depende del pago del excedente neto a bolsa: sin ese pago, la opción con venta baja de 6,93 a 5,48 M;
  - con batería da **respaldo en cortes**, cosa que un inversor de red sencillo no hace (se apaga cuando se va la luz).
- **Ruta de mejora futura ⚠️ (a diseñar con el instalador):** conservar el SRNE con batería para las cargas críticas y agregar un **inversor de red pequeño** del lado de la red para una parte de los paneles, con trámite AGPE con excedentes y medidor bidireccional. Así se combina crédito 1:1 con respaldo.

