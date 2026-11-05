# Datos de entrada para diseñar tu sistema solar

> Llena lo que puedas. Lo marcado con 🔴 es **indispensable**, 🟡 es importante y ⚪ es opcional
> (mejora la precisión). Donde no sepas algo, escribe "no sé": lo resolvemos juntos.
> Plantillas para llenar: [`plantilla-inventario-cargas.csv`](plantilla-inventario-cargas.csv) y
> [`02-respuestas-propietario.md`](02-respuestas-propietario.md).

---

## A. Objetivo del sistema 🔴

1. **¿Qué buscas principalmente?** (ordénalo por prioridad)
   - [ ] Bajar la factura de Air-e (ahorro) → normalmente **on-grid** (conectado a la red)
   - [ ] Tener luz cuando se va la energía (respaldo ante cortes) → **híbrido** con baterías
   - [ ] Independizarte por completo de la red → **off-grid** (aislado)
   - [ ] Vender excedentes a la red
2. **¿Con qué frecuencia y por cuánto tiempo se va la luz** en tu sector? (veces/mes, horas por corte)
3. **¿Qué cargas deben seguir funcionando en un corte?** (nevera, abanicos, internet/router, luces, bomba de agua, un aire...)
4. **Presupuesto aproximado** y si contemplas financiación (crédito verde, leasing).
5. **Horizonte**: ¿piensas vivir ahí >5 años? ¿Planeas ampliaciones (más aires, carro eléctrico, piscina, segundo piso)?

## B. Factura de energía (Air-e) 🔴

La factura es el dato más valioso. Envíame **foto o PDF de las últimas 12 facturas** (mínimo 3, ideal
12 para ver la temporada seca vs lluviosa). De ellas necesito:

| Dato | Dónde aparece en la factura |
|---|---|
| Consumo mensual kWh de los últimos 6–12 meses | Gráfico de barras "histórico de consumo" |
| Valor del kWh (COP/kWh) y valor total pagado | Detalle de liquidación |
| **Estrato** | Encabezado |
| Número de cuenta / NIC / NIU | Encabezado (para el trámite de conexión) |
| **Tipo de servicio**: monofásico, bifásico o trifásico | Datos del suministro / tipo de conexión |
| Nivel de tensión (casi seguro Nivel 1, baja tensión) | Datos técnicos |
| Código del transformador / circuito | A veces aparece; si no, la placa del poste |
| Subsidio o contribución aplicada | Detalle de liquidación |
| Deudas / "opción tarifaria" | Detalle de liquidación |

## C. Instalación eléctrica de la casa 🔴

Fotos claras de:
1. **El medidor** (marca, modelo, si es electromecánico o digital, la placa con tensión y corriente: p. ej. "120/240 V, 15(100) A").
2. **La acometida** (cable que llega del poste: ¿cuántos cables? 2 = monofásico bifilar 120 V; 3 = monofásico trifilar 120/240 V; 4 = trifásico).
3. **El tablero de breakers** abierto (cuántos circuitos, de qué amperaje, si hay breakers de 2 polos para aires).
4. **Puesta a tierra**: ¿existe varilla de cobre enterrada? ¿El tablero tiene barra de tierra con cable verde?
5. **Mide con un multímetro el voltaje entre fases y entre fase y neutro** (o pídeselo a un electricista). Esto es
   crítico: la norma de Air-e (DT.ID.ES.130) admite redes **120 V**, **120/240 V** y **120/208 V**, y muchos inversores
   "bifásicos" solo funcionan a 240 V y fallan a 208 V (ver `03-mercado-y-equipos/inversores.md`).
   Dime también si tienes aires de 220 V.
6. ¿La instalación tiene certificado RETIE? ¿Año aproximado de construcción de la casa?

## D. Inventario de cargas (aparatos) 🔴 para off-grid / híbrido, 🟡 para on-grid

Llena [`plantilla-inventario-cargas.csv`](plantilla-inventario-cargas.csv). Para cada aparato:
- Nombre, cantidad, **potencia en vatios (W)** (está en la etiqueta/placa; en aires, busca "potencia de entrada" o "input power"), si es **inverter** o no.
- **Horas de uso al día** y **en qué franja** (mañana / tarde / noche / madrugada). Esto define cuánto se aprovecha directo del sol y cuánto necesita batería.
- Si es **crítico** (debe funcionar en un corte).
- Para motores (aires no inverter, bomba de agua, nevera vieja, lavadora): si tienes, la **corriente de arranque** o los "LRA" de la placa.

**Los aires acondicionados son lo más importante**: tipo (ventana/split), BTU (9 000, 12 000, 18 000, 24 000),
si son inverter, cuántas horas al día y a qué hora se prenden. En Sabanalarga suelen ser el 50–70 % del consumo.

## E. El techo o el sitio de instalación 🔴

1. **Ubicación**: dirección o un pin de Google Maps (coordenadas). Con eso miro la orientación y las sombras en imagen satelital.
2. **Tipo de techo**: losa de concreto (plancha), teja de fibrocemento (eternit), teja de barro, zinc/termoacústica, otro.
   ¿Estado y edad? ¿Tiene goteras? ¿Hay acceso fácil (escalera, terraza)?
3. **Medidas útiles** de cada agua/plano del techo (largo × ancho) y **hacia dónde cae** (orientación: N, S, E, O).
4. **Inclinación** del techo (el celular la mide: app nivel/inclinómetro), o "plano".
5. **Sombras**: árboles, tanque de agua, antenas, casas vecinas más altas, postes. Ideal: fotos desde el techo hacia los 4 puntos cardinales, a las 8 am, 12 m y 4 pm.
   Ver guía [`../05-herramientas-de-diseno/como-medir-techo-y-sombras.md`](../05-herramientas-de-diseno/como-medir-techo-y-sombras.md).
6. ¿Hay **espacio en piso/patio** como alternativa (estructura en el suelo o pérgola/parqueadero solar)?
7. Distancia aproximada desde el techo hasta el tablero/medidor (para el cableado).
8. ¿Dónde se pondrían el **inversor y las baterías**? Sitio ventilado, a la sombra, protegido de lluvia y fuera del alcance de los niños (las baterías sufren mucho con el calor).

## F. Preferencias y restricciones 🟡

- Marcas que te gusten o que quieras evitar; si prefieres comprar equipos tú mismo e instalar con un técnico, o llave en mano.
- ¿Te interesa **monitorear desde el celular**?
- Estética (paneles negros "full black", que no se vean desde la calle).
- Seguridad contra robo (en algunas zonas roban paneles y baterías).
- ¿Vivienda propia, arrendada o en propiedad horizontal? (Cambia los permisos.)
- ¿Declaras renta? (Define si te sirven los beneficios tributarios de la Ley 1715.)

## G. Opcional, mejora mucho el diseño ⚪

- Curva de carga real: un medidor inteligente tipo enchufe/pinza (p. ej. Shelly EM, Emporia, Sonoff POW) durante 1–2 semanas, o la lectura del medidor a las 6 am y a las 6 pm durante una semana.
- Cotizaciones que ya hayas recibido (para compararlas).
- Planos de la casa o del techo.

---

## ¿Qué haré con cada dato?

| Dato | Uso en el diseño |
|---|---|
| Consumo kWh/mes (12 meses) | Tamaño del arreglo FV (kWp) on-grid: `kWp ≈ kWh/mes ÷ 123` en Sabanalarga (ver `06-datos`) |
| Tarifa COP/kWh, estrato | Ahorro, retorno de inversión, conveniencia de inyectar excedentes |
| Tipo de acometida (120 V / 120-240 V / trifásica) | Selección del inversor (monofásico, split-phase o trifásico) |
| Inventario de cargas + horario | Autoconsumo diurno, tamaño de baterías, potencia del inversor, picos de arranque |
| Cargas críticas + duración de cortes | Banco de baterías del híbrido (kWh) y tablero de respaldo |
| Techo (área, orientación, inclinación, tipo) | Número de paneles, estructura, pérdidas por orientación, layout |
| Sombras | Ubicación de paneles, optimizadores o microinversores |
| Puesta a tierra / tablero | Adecuaciones RETIE necesarias (suelen costar extra) |
| Presupuesto / objetivo | On-grid vs híbrido vs off-grid; gama de equipos |
| Datos de la cuenta Air-e | Trámite AGPE (CREG 174 de 2021) |

## Siguientes pasos después de recibir los datos

1. **Análisis de consumo** y propuesta de eficiencia (lo más barato es el kWh que no consumes).
2. **Pre-dimensionamiento** de 2–3 alternativas (on-grid / híbrido / off-grid) con producción mensual.
3. **Diseño de detalle**: strings, inversor, baterías, protecciones, cableado, puesta a tierra, layout en techo.
4. **Simulación** (PVGIS/SAM) y análisis financiero (VPN, TIR, payback).
5. **Lista de materiales y cotización** con proveedores en Colombia.
6. **Ruta legal**: RETIE, trámite con Air-e, incentivos UPME.
