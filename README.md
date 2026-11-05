# Energía solar en Sabanalarga, Atlántico — Repositorio de conocimiento

Base de conocimiento para **diseñar, cotizar y legalizar un sistema solar fotovoltaico residencial**
(on-grid, híbrido u off-grid) en Sabanalarga, Atlántico, Colombia (10,632 N, −74,921 W, ~100 m s. n. m.).

Investigación hecha el **28 de octubre de 2026**. Las fuentes son normas oficiales (CREG, MinEnergía, UPME, DIAN, Air-e),
literatura revisada por pares (48 DOI verificados), bases de datos de radiación (PVGIS, NASA POWER, Global Solar Atlas, IDEAM)
y precios de mercado publicados en Colombia. Convención: **[P]** fuente primaria · **[S]** secundaria · **⚠️** por verificar.

> 👉 **Para empezar el diseño:** llena [`07-diseno-proyecto/01-DATOS-QUE-NECESITO.md`](07-diseno-proyecto/01-DATOS-QUE-NECESITO.md).

---

## Estructura

| Carpeta | Qué contiene |
|---|---|
| [`01-recurso-solar-y-clima/`](01-recurso-solar-y-clima/README.md) | Radiación, clima, viento, rayos, corrosión, fuentes de datos |
| [`02-marco-legal-y-regulatorio/`](02-marco-legal-y-regulatorio/README.md) | Ley 1715/2099, CREG 174/2021, RETIE 2024/2026, NTC 2050, trámite con Air-e, tarifas, incentivos UPME/DIAN, financiación |
| [`03-mercado-y-equipos/`](03-mercado-y-equipos/README.md) | Mercado colombiano, módulos, inversores, baterías, estructuras, proveedores, **precios de referencia oct-2026**, costos y payback |
| [`04-tecnico-cientifico/`](04-tecnico-cientifico/README.md) | Desempeño FV en el Caribe, temperatura, degradación, orientación, **metodología de dimensionamiento con ejemplos resueltos**, baterías, consumo, rayos, bibliografía APA |
| [`05-herramientas-de-diseno/`](05-herramientas-de-diseno/README.md) | Catálogo de herramientas (PVGIS, SAM, PVsyst, OpenSolar, HOMER, calculadoras de fabricantes…), flujo de trabajo, cómo medir el techo y las sombras |
| [`06-datos/`](06-datos/resumen_recurso_solar.md) | Datos crudos descargados de las API de PVGIS y NASA POWER + script de procesamiento reproducible |
| [`07-diseno-proyecto/`](07-diseno-proyecto/01-DATOS-QUE-NECESITO.md) | **Datos que necesito**, plantillas y la calculadora `dimensionar.py` |

---

## Las cifras que más importan

### Recurso solar
- **HSP ≈ 5,4 kWh/m²·día** en el promedio anual: cinco fuentes independientes coinciden en ±2 %. El mes peor es noviembre (≈4,6) y el mejor, febrero (≈6,1).
- **Producción esperada: ~1 480 kWh por kWp al año** en techo (rango 1 430–1 570). Regla rápida: **kWp ≈ consumo mensual (kWh) ÷ 123**.
- **Inclinación de 10–15° mirando al sur**, para facilitar la autolimpieza con la lluvia. Mirar al este cuesta ≈2 % de producción y al oeste ≈5 %.
- **El calor quita ≈12 % de energía**, y hasta 15,5 % si el panel va pegado al techo sin ventilación. Dejar ≥10–15 cm de separación.
- El **polvo** (incluido el del Sahara, entre marzo y septiembre) quita entre 3 y 6 %: limpiar en temporada seca.

### Tarifa y regulación (oct-2026)
- **Air-e** (intervenida por la Superservicios) cobra un **CU de $936/kWh**. Estratos 1–3 tienen subsidio solo en los primeros **173 kWh/mes**; por encima pagan tarifa plena. El CU osciló entre $796 y $1 166 en 2024–2026.
- **CREG 174/2021**:
  - Hasta 100 kW, los excedentes se **permutan 1:1** con lo que consumes de la red, pagando solo la comercialización (≈$133/kWh).
  - El excedente neto anual se paga a precio mayorista.
  - Límite de penetración: 50 % del transformador.
- **RETIE** (Res. 40117/2024, modificada por la 40284/2026):
  - Sistemas conectados a red de **menos de 10 kVA** quedan exentos de dictamen de inspección y solo requieren declaración de cumplimiento.
  - Desde 10 kVA se exigen diseño y dictamen de un organismo acreditado ante ONAC.
  - ⚠️ Confirmar si Air-e ya aplica la exención.
- **Incentivos Ley 1715/2099**: exclusión de IVA y deducción de renta (Res. UPME 563/2026). Para personas naturales, la deducción está limitada por el tope del art. 336 del Estatuto Tributario (Concepto DIAN 17277/2025).

### Mercado (oct-2026, TRM ≈ $3 191)
| Ítem | Rango |
|---|---|
| Módulo N-type ≥580 W | 710–1 000 COP/Wp (sin IVA) |
| Batería LiFePO4 48 V | 0,68–1,34 M COP/kWh (con IVA) |
| On-grid llave en mano | 2,8–4,7 M COP/kWp (Barranquilla: 2,8–3,8 M) |
| Sistema on-grid 3 / 5 / 10 kWp | ~8–16 / 14–25 / 28–45 M COP |
| Híbrido 5 kW + 10 kWh | 26–35 M COP (48 V) · 37–50 M (alta tensión) |
| Payback on-grid | **≈3–5 años** con las tarifas actuales |

### Riesgos de diseño específicos del sitio
- ⚡ **Rayos**: el sitio está en una de las zonas de mayor actividad de Colombia (10–30 descargas/km²·año). Hay que poner DPS en DC y AC, puesta a tierra y equipotencialización, y hacer la evaluación NTC 4552.
- 🌬️ **Viento**: zona 5 de la NSR-10 (36–46 m/s). Las estructuras deben ir ancladas y calculadas, sobre todo en techos de fibrocemento o zinc.
- 🔌 **Tensión de red**: Air-e tiene redes de 120 V, 120/240 V y **120/208 V**. Hay que medir antes de elegir inversor, porque muchos "bifásicos" no funcionan a 208 V.
- 🔋 **Calor**: las baterías deben ir a la sombra y ventiladas, porque la vida útil cae con la temperatura.

---

## Calculadora de pre-dimensionamiento

```bash
cd 07-diseno-proyecto
python3 -I dimensionar.py --kwh-mes 450 --estrato 3
python3 -I dimensionar.py --cargas plantilla-inventario-cargas.csv --estrato 4 --horas-corte 6
```

Usa la producción mensual de PVGIS para este punto exacto, las tarifas de Air-e de oct-2026 (con la lógica de subsistencia
por estrato) y los costos de mercado. Entrega alternativas on-grid, híbrida y off-grid con su costo y payback.

Para regenerar los datos de radiación: `cd 06-datos && python3 -I procesar_datos.py`.

## Vacíos conocidos (⚠️)
- No hay estudios con producción medida durante un año completo en techos residenciales del Atlántico. Las cifras son modeladas y validadas contra el piranómetro IDEAM de Repelón.
- No hay densidad de rayos oficial para el municipio, ni medición de corrosividad o cloruros a ~32 km del mar.
- Falta el costo publicado del dictamen RETIE y de la mano de obra desglosada, y no hay precios en COP para Fronius, SMA, Enphase ni BYD.
- Está pendiente saber cuándo se traspasa Air-e a un nuevo operador y si se expidió la sobretasa de ≈$8/kWh a estratos 4–6.

## Estado del proyecto

| Etapa | Estado |
|---|---|
| Base de conocimiento | ✅ oct-2026 |
| Datos del propietario y 12 facturas | ✅ [`02-respuestas-propietario.md`](07-diseno-proyecto/02-respuestas-propietario.md), [`03-analisis-consumo.md`](07-diseno-proyecto/03-analisis-consumo.md) |
| Anteproyecto y alternativas | ✅ v1 [`04-anteproyecto.md`](07-diseno-proyecto/04-anteproyecto.md): on-grid de 7 × 620 W (≈13 M, ahorro ≈4,8 M/año) + respaldo en fase 2 |
| Diseño de detalle (strings, unifilar, protecciones, estructura) | ⏳ falta: voltaje medido, fotos del medidor, el tablero, el techo y los árboles |
| Cotización final con proveedores | ⏳ |
| Trámites (RETIE, Air-e, UPME) | ⏳ |
