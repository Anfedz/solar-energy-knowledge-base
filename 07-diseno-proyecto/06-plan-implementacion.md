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

