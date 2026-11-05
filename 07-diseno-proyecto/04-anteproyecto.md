# Anteproyecto: sistema solar para la casa (Sabanalarga, estrato 3)

> Versión 1 · 2026-11-05 · Basado en 12 facturas reales, PVGIS para la ubicación exacta y precios de mercado de oct-2026.
> Es un **anteproyecto**: las cifras se ajustan cuando lleguen los datos pendientes (sección 8).
> Simulación reproducible: `python3 -I anteproyecto.py` (ver opciones con `--help`).

## 1. Recomendación en una frase

**Fase 1 (≈ 13 M COP):** sistema **on-grid de 7 paneles de ~620 W (4,3 kWp)** en la cara **este** del techo, con inversor de 2 MPPT,
monitoreo por celular y entrega de excedentes a Air-e (crédito 1:1, CREG 174). **Ahorra ≈ 4,8 M COP/año (~84 % de la factura de energía)**
y **se paga en ≈ 2,7 años**.
**Fase 2 (≈ 5 M COP, pagada con el ahorro del primer año):** respaldo con batería para nevera, congelador, módem, abanicos y PC.

## 2. Por qué esta ruta y no otra (con tu presupuesto de 15 M)

| Alternativa | Qué cubre | Costo estimado | ¿Cabe en 15 M? | Comentario |
|---|---|---|---|---|
| **A. On-grid + respaldo modular por fases** ✅ | (a) ahorro ahora; (b) respaldo en fase 2 | **≈ 13 M** + ≈ 5 M después | ✅ fase 1 | Máximo ahorro por peso invertido. El respaldo se agrega sin cambiar nada de lo instalado |
| B. Híbrido con un solo inversor (Deye 8 kW / Growatt SPH-US) + 5 kWh | (a) + (b) desde el día 1 | ≈ 25–27 M | ❌ | Inversor híbrido split-phase de 9–11,5 M (precios en `03-mercado-y-equipos`) |
| C. Aislado (off-grid) | (c) independencia total | ≈ 40–50 M | ❌ | Tus 3 aires de noche exigen ≥ 20–25 kWh de batería. Además perderías la red como respaldo |

La independencia total (c) no es viable con 15 M. Lo más cercano es la ruta A completa: produce en el año ~el 85–95 % de tu energía y cubre las cargas críticas en un corte.

## 3. Fase 1: on-grid 4,3 kWp

### 3.1 Configuración
- **Ubicación:** cara **este** del techo de eternit (pendiente asumida de ~10°). PVGIS da 1 463 kWh/kWp·año en el este, frente a 1 424 en el oeste y 1 484 si mirara al sur. La cara este pierde solo 1,4 % y además produce en la mañana, cuando hay menos nubes.
- **7 módulos TOPCon bifaciales Tier 1 de 600–650 W** (2,38 × 1,13 m, unos 20 m² de techo). Caben de sobra en una cara de ~15 × 5 m. Van en una fila horizontal (≈ 8 m) o en 2 filas.
- **Inversor on-grid de 5–6 kW con 2 MPPT** (relación DC/AC ≈ 0,75–0,85). Tiene margen para crecer a 9–10 paneles si llega el carro eléctrico.
- Separación de 10–15 cm entre panel y techo para ventilar (evita ≈ 3–4 % de pérdida por calor) y protecciones contra rayos (DPS) en DC y AC.

### 3.2 Lista de materiales y presupuesto (compras tú + técnico)

| Ítem | Referencia de mercado (oct-2026) | COP |
|---|---|---|
| 7 módulos 620 W TOPCon bifacial | Astronergy 620 W @ 525 700 (Solartex) o equivalente | 3 680 000 |
| Inversor on-grid 5–6 kW, 2 MPPT, Wi-Fi | **Depende de la tensión (ver 3.3):** Growatt MIN 6000TL-X2 2,23 M (solo 240 V) · modelo apto para 208 V 2,9–3,9 M | 2 230 000 – 3 900 000 |
| Estructura para fibrocemento | 4 rieles de aluminio de 4,8 m (551 k) + ~16 tornillos en L de 250 mm a correa (482 k) + grapas y empalmes (~200 k ⚠️) | ≈ 1 230 000 |
| Cable solar 4 mm² (≈ 60 m) + conectores MC4 | 4 521 $/m; 6 324 $/MC4 | ≈ 350 000 |
| Protecciones DC/AC + DPS DC y AC | Kit de protecciones para 1 arreglo (832 k), +DPS si el kit no los trae (278 k) | 830 000 – 1 110 000 |
| Puesta a tierra (varilla de cobre, cable, conexión) | Si la casa no la tiene ⚠️ estimado | 300 000 – 600 000 |
| Cable AC, breaker y canalización hasta el tablero | ⚠️ estimado | ≈ 200 000 |
| Medidor bidireccional (lo exige Air-e) | 200 000 – 800 000 | ≈ 500 000 |
| Mano de obra, diseño y memoria firmada por ingeniero/técnico con matrícula, declaración RETIE y radicación en Air-e | ⚠️ sin precio publicado; estimado | 2 500 000 – 3 500 000 |
| **Total fase 1** | | **≈ 11,5 – 15,4 M (típico ≈ 13 M)** |

Precios y enlaces: [`../03-mercado-y-equipos/precios-referencia-2025-2026.md`](../03-mercado-y-equipos/precios-referencia-2025-2026.md).
Módulos e inversor están exentos de IVA en las tiendas. Estructura, cables, protecciones y medidor llevan 19 % (incluido arriba).

### 3.3 Decisión crítica pendiente: la tensión de tu red
Tienes aires de 220 V, así que llegan 2 fases. Hay que medir el voltaje entre las dos fases:
- **≈ 240 V** (transformador monofásico de fase partida): sirve cualquier inversor "fase dividida" de 240 V. La opción más barata es Growatt MIN 6000TL-X2.
- **≈ 208 V** (dos fases de un transformador trifásico): hace falta un inversor cuyo rango AC incluya 187–229 V. Por ejemplo Growatt MIN 7000–10000TL-X2 (160–300 V), un modelo US de 208/240 V o un monofásico de 220 V con rango amplio. ⚠️ Esta opción cuesta 0,7–1,7 M más.

### 3.4 Producción, ahorro y retorno (simulación mes a mes con tus 12 facturas)

Supuestos base: 10 % de pérdida por sombra de árboles (⚠️ el mayor factor incierto), 35 % del consumo de día, CU de $936/kWh (oct-2026), crédito 1:1 pagando Cv = $133/kWh, alumbrado del 10 % y excedente neto mensual a $300/kWh (⚠️).

| Paneles | kWp | Producción kWh/año | Excedente neto kWh/año | Ahorro M COP/año | % de la factura de energía | Costo M | Payback |
|---|---|---|---|---|---|---|---|
| 5 | 3,10 | 4 071 | 99 | 3,76 | 65 % | 11,9 | 3,2 años |
| 6 | 3,72 | 4 885 | 241 | 4,35 | 75 % | 12,5 | 2,9 años |
| **7** | **4,34** | **5 699** | 565 | **4,84** | **84 %** | **13,0** | **2,7 años** |
| 8 | 4,96 | 6 513 | 1 044 | 5,25 | 91 % | 13,5 | 2,6 años |

**Sensibilidad (7 paneles):**

| Escenario | Supuestos | Ahorro/año | Payback |
|---|---|---|---|
| Pesimista | 25 % de sombra, 25 % de consumo diurno | 4,2 M | 3,1 años |
| Base | 10 % de sombra, 35 % diurno | 4,8 M | 2,7 años |
| Optimista | 5 % de sombra, 45 % diurno | 5,1 M | 2,6 años |

- **Por qué 7 y no 8:** con 8 paneles el excedente neto se duplica (≈ 1 000 kWh/año pagados a precio de bolsa) y, si bajas el consumo con eficiencia, sobraría aún más. El inversor de 5–6 kW permite agregar el panel 8 o 9 después si el consumo se mantiene alto o llega el carro eléctrico.
- Lo que **no** ahorra: la tasa de seguridad (fija, $16–17 k/mes) y el Cv que se paga por cada kWh permutado.
- A 25 años, con degradación de 0,5–0,9 %/año y un cambio de inversor (~año 12–15), el sistema produce del orden de **100 M COP** en ahorro a precios de hoy. Cálculo grueso ⚠️, se refina en el diseño de detalle.

### 3.5 Trámite (resumen; detalle en [`../02-marco-legal-y-regulatorio/`](../02-marco-legal-y-regulatorio/README.md))
1. Consultar en el portal de Air-e la **disponibilidad del circuito o transformador** (la factura indica circuito, transformador y código del trafo).
2. Radicar la solicitud **AGPE con entrega de excedentes, menor de 100 kW**, con el diagrama unifilar, las fichas técnicas y los certificados RETIE de producto.
3. Como el sistema es **menor de 10 kVA**, la Res. 40284/2026 exige solo la **declaración de cumplimiento RETIE** firmada por el instalador. ⚠️ Confirmar que Air-e ya la acepta, porque su cartilla anterior pedía dictamen.
4. Air-e cambia o programa el **medidor bidireccional** y aprueba la conexión. Antes de eso **no se debe energizar con inyección a la red**.

## 4. Fase 2: respaldo para cortes

**Buenas noticias:** una nevera cerrada conserva los alimentos seguros ~4 h, y un congelador lleno ~48 h (24 h si está a medias)
([FoodSafety.gov, "Food Safety During Power Outage"](https://www.foodsafety.gov/food-safety-charts/food-safety-during-power-outage)).
En cortes de 1 a 4 horas, lo que más te afecta es el **módem, el PC y los abanicos**, no la comida.

| Opción | Qué respalda | Autonomía aprox. | Costo | Cuándo |
|---|---|---|---|---|
| R1. UPS de onda senoidal 1–1,5 kVA | Módem + PC | 30–90 min ⚠️ | ≈ 0,5–1,5 M ⚠️ (precio por verificar) | Cabe ya dentro de los 15 M |
| **R2. Inversor-cargador Growatt SPF 3000TL LVM 48 V (120 V) + batería LiFePO4 Pylontech US2000C 2,4 kWh + subtablero de cargas críticas** | Nevera + congelador + módem + abanicos + PC (≈ 400–700 W) | ≈ 3–5 h; ampliable con más módulos de batería | ≈ 5,3 M (2,47 + 2,40 + ~0,4 de instalación) | Fase 2 |

- R2 es independiente del inversor on-grid: un subtablero de "cargas críticas" se alimenta del SPF, y este se carga de la red, que de día alimentan tus paneles. La misma arquitectura usa el kit híbrido de Autosolar (MIN + SPF + Pylontech).
- ⚠️ El SPF consume en vacío del orden de 30–50 W (0,7–1,2 kWh/día). Hay que usar su modo de ahorro o pasar las cargas a bypass cuando hay red.
- **¿El módem funciona en un corte?** Depende de la red del proveedor. En fibra óptica (FTTH) la central suele tener respaldo, y en cable (HFC) los amplificadores de calle tienen baterías de pocas horas. **Prueba barata:** en el próximo corte, conecta el módem a un power bank con salida de 12 V (o a la UPS) y verifica si hay internet.
- Para el trámite: un sistema con batería sigue siendo AGPE. Si R2 solo toma energía de la red, no cambia la solicitud. Hay que mencionarlo en el diseño ⚠️.

## 5. Riesgos específicos de tu casa

| Riesgo | Qué hacer |
|---|---|
| 🌳 **Sombra de árboles** (el árbol grande junto a la casa) | Es la mayor incertidumbre: con 25 % de sombra el ahorro cae ~13 %. Necesito fotos y la ubicación de los árboles respecto al techo. Si son tuyos, una poda puede valer más que un panel extra. Con sombra parcial fuerte, conviene evaluar optimizadores o microinversores |
| 🏚️ **Techo de eternit** | No se camina sobre las láminas: se usan tablones apoyados en las correas. La fijación va a las **correas**, no solo a la lámina (tornillo en L de 250 mm con sello). ⚠️ **Si el techo es anterior a 2021 podría contener asbesto** (prohibido en Colombia por la Ley 1968 de 2019 desde 2021): no cortar ni perforar en seco, perforar en húmedo y con protección respiratoria. Confirmar la edad del techo y si las correas son de madera o metal |
| ⚡ **Rayos** (10–30 descargas/km²·año) | DPS tipo 2 en DC y AC, puesta a tierra común y equipotencialización. Si la casa no tiene tierra, hay que hacerla (ya está en el presupuesto) |
| 🌬️ **Viento** (NSR-10 zona 5, hasta 46 m/s) | Anclar a las correas con la cantidad de fijaciones que indique el fabricante de la estructura. No usar soluciones "pegadas" a la lámina |
| 🔌 **Tensión 208 vs 240 V** | Medir antes de comprar el inversor (sección 3.3) |

## 6. Beneficios tributarios (declaras renta)
- Con el **certificado UPME** (Res. 563/2026; la tarifa arranca en ~1,2 UVT; se radica entre el 1-feb y el 15-dic) puedes:
  - **excluir el IVA** de estructura, protecciones y batería (≈ 0,5–1,3 M según la fase);
  - **deducir de la renta el 50 % de la inversión**, sujeto al tope de rentas exentas y deducciones de personas naturales (40 % / 1 340 UVT, art. 336 ET; Concepto DIAN 17277/2025).
- ⚠️ Vale la pena **consultar con tu contador** antes de comprar: el certificado debe tramitarse **antes** de la compra para excluir el IVA. Si ya estás cerca del tope de deducciones, el beneficio de renta puede ser pequeño. Ver [`../02-marco-legal-y-regulatorio/incentivos-tributarios-upme.md`](../02-marco-legal-y-regulatorio/incentivos-tributarios-upme.md).

## 7. Eficiencia antes que paneles
- Revisar los **3 aires**: si alguno no es inverter, cambiarlo ahorra 30–60 % de su consumo (Gokarakonda et al., 2023). Cada 125 kWh/mes ahorrados equivalen a ~1 kWp menos de paneles.
- Termostato a 24–25 °C, filtros limpios y la unidad exterior a la sombra.
- **Impresora 3D:** hacer las impresiones largas de día, cuando producen los paneles.

## 8. Lo que necesito para pasar al diseño de detalle
1. 🔴 **Voltaje medido** entre fase 1 y fase 2, y entre cada fase y el neutro. Define el inversor.
2. 🔴 **Fotos del medidor** (con la placa legible), de la **acometida** (cuántos cables llegan) y del **tablero** abierto.
3. 🔴 **Techo:** confirmar hacia dónde caen las dos aguas, la **edad del techo** y si las correas son de madera o metal. Una foto del techo desde arriba si se puede.
4. 🔴 **Árboles:** dónde están respecto al techo (norte, sur, este u oeste), qué altura tienen y si son tuyos. Fotos desde el techo hacia los 4 lados.
5. 🟡 **Placas de los 3 aires:** BTU, si son inverter, potencia de entrada, y a qué horas se usan.
6. 🟡 ¿Qué cambió en 2026 para que el consumo subiera 28 %?
7. ⚪ ¿Tu proveedor de internet es por fibra, cable o antena? (Para la prueba del módem en un corte.)
