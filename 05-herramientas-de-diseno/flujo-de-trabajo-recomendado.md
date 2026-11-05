# Flujo de trabajo recomendado: de la factura de luz a la cotización

> Proyecto: sistema FV residencial en Sabanalarga, Atlántico (10.632, -74.921).
> Prioridad: herramientas **gratuitas** (ver catálogo en [`README.md`](README.md)).
> Fecha de consulta de fuentes: **2026-10-28**. ⚠️ = criterio práctico o dato por verificar; las reglas de diseño definitivas las fija el diseñador eléctrico (RETIE) y la normativa en [`../02-marco-legal-y-regulatorio/`](../02-marco-legal-y-regulatorio/).

```
 F0 Factura ─► F1 Recurso ─► F2 Techo/sombras ─► F3 Prediseño ─► F4 Simulación ─► F5 Strings/cables ─► F6 Baterías (opcional) ─► F7 Cotización/trámite
  (Excel)      (GSA,PVGIS,     (Google Earth,      (cálculo a      (PVGIS ERA5 +    (calculadora del     (SAM / PVGIS          (≥3 ofertas, Air-e,
               PVWatts)        SunCalc, cinta)     mano, OpenSolar) NSRDB, PVWatts,  fabricante, Victron  aislado / hoja de     UPME Res. 174)
                                                                     SAM)             Toolkit)             cálculo)
```

---

## Paso 0 — Entender el consumo (factura de Air-e)

**Objetivo:** saber cuántos kWh al año y en qué horas se consumen.

1. Reunir las **últimas 12 facturas** (o el histórico que trae la factura) y anotar en una hoja de cálculo: mes, kWh consumidos, valor total, valor del kWh (tarifa), estrato/subsidio o contribución.
2. Calcular:
   - Consumo anual (kWh/año) = suma de los 12 meses.
   - Consumo medio diario = anual ÷ 365.
   - Mes de mayor consumo (en Sabanalarga suele coincidir con los meses más calurosos, mar–ago, por aire acondicionado y ventiladores ⚠️).
3. **Perfil horario** (importante en Colombia porque el autoconsumo directo vale más que el excedente ⚠️ ver `02-marco-legal-y-regulatorio`): listar los equipos grandes (aires acondicionados, nevera, bomba de agua, ducha eléctrica) con su potencia y horas de uso → estimar qué parte del consumo ocurre de día (≈ 7:00–17:00).
4. Si se piensa en baterías, separar las **cargas críticas** (nevera, luces, router, ventiladores) y su consumo diario.

**Herramientas:** hoja de cálculo (Excel / LibreOffice / Google Sheets). Opcional: medidor de enchufe para equipos.

---

## Paso 1 — Recurso solar y producción específica

**Objetivo:** cuántos kWh produce **1 kWp** instalado en el techo al año.

1. **Global Solar Atlas** → https://globalsolaratlas.info/detail?c=10.632,-74.921,11 → anotar PVOUT. Valor del sitio: **1 570 kWh/kWp·año**, inclinación óptima 13° (consultado 2026-10-28).
2. **PVGIS** (https://re.jrc.ec.europa.eu/pvg_tools/es/) → "Sistema FV conectado a red", 1 kWp, pérdidas 14 %, "optimizar ángulos". Para este punto: **≈ 1 476 kWh/kWp·año** (ERA5, v5.3) y **≈ 1 488** (NSRDB, v5.2).
3. **PVWatts** (https://pvwatts.nlr.gov/) → 1 kWp, 13°, azimut 180°: **≈ 1 430 kWh/kWp·año** (NSRDB TMY).
4. Usar como **rango de diseño 1 430–1 570 kWh/kWp·año** y, para dimensionar con prudencia, el valor bajo-medio (**≈ 1 450**). Ajustar luego con la orientación real del techo (Paso 2).
5. Validación cruzada: GHI anual del Global Solar Atlas (5.35 kWh/m²·día) ≈ medición IDEAM en Repelón (5.36). Detalle en [`../01-recurso-solar-y-clima/fuentes-de-datos-radiacion.md`](../01-recurso-solar-y-clima/fuentes-de-datos-radiacion.md).

---

## Paso 2 — Medir el techo y las sombras

Seguir la guía [`como-medir-techo-y-sombras.md`](como-medir-techo-y-sombras.md). Resultado esperado:
- Plano acotado de cada agua del techo (largo × ancho útil, descontando bordes de seguridad).
- **Azimut** (hacia dónde mira cada agua) e **inclinación** (°).
- Tipo de cubierta (fibrocemento/eternit, zinc/lámina, losa de concreto, teja de barro) y estado.
- Lista de obstáculos con altura y distancia (tanques, árboles, casas vecinas, postes, antenas), y fotos.

**Herramientas:** Google Earth Pro (gratis), cinta métrica, app de brújula e inclinómetro del celular, SunCalc.org.

---

## Paso 3 — Prediseño (tamaño del sistema)

1. **Potencia necesaria** (kWp) ≈ (consumo anual que se quiere cubrir, kWh) ÷ (producción específica, kWh/kWp·año).
   - Ejemplo ilustrativo ⚠️ (no es el consumo real del propietario): 300 kWh/mes = 3 600 kWh/año → 3 600 ÷ 1 450 ≈ **2.5 kWp**.
2. **Número de módulos** = kWp ÷ potencia del módulo (p. ej., módulos de 550–600 W ⚠️ según mercado; ver `03-mercado-y-equipos`).
3. **¿Cabe en el techo?** Área por módulo ≈ 2.0–2.6 m² según tamaño ⚠️ (tomar la ficha técnica). Verificar con el plano del Paso 2, dejando pasillos y bordes libres (viento: ver `01-recurso-solar-y-clima/riesgos-ambientales-para-el-sistema.md`).
4. **Orientación:** en Sabanalarga (latitud ≈ 10.6° N) la inclinación óptima es baja (13–16°) y el azimut óptimo calculado por PVGIS es sur-sureste (−26° a −32°). Un techo orientado al este u oeste con poca inclinación pierde relativamente poco ⚠️ (cuantificarlo en el Paso 4 en PVGIS/PVWatts cambiando el azimut).
5. Regla regulatoria a revisar antes de fijar el tamaño: límites y reglas de excedentes para AGPE (Resolución CREG 174 de 2021) → ver `02-marco-legal-y-regulatorio`.

**Herramientas:** hoja de cálculo; OpenSolar (gratis) para el layout 3D sobre imagen; Global Solar Atlas/PVWatts para el primer número.

---

## Paso 4 — Simulación de producción y autoconsumo

1. En **PVGIS**:
   - Ingresar la potencia del Paso 3, la **inclinación y el azimut reales** de cada agua (si hay dos aguas, simular cada una por separado y sumar).
   - Activar "horizonte calculado" y, si se midieron obstáculos, cargar un **horizonte propio** (CSV de azimut vs altura angular).
   - Comparar ERA5 (v5.3) con NSRDB (v5.2).
   - Descargar la serie horaria (para cruzarla con el perfil de consumo) — o usar las que ya se están descargando en `06-datos/`.
2. En **PVWatts**: repetir con los mismos parámetros (NSRDB TMY) para tener una segunda opinión.
3. **Autoconsumo vs excedentes:** cruzar la producción horaria con el perfil de consumo del Paso 0 (hoja de cálculo o **SAM**, que trae el modelo de facturación residencial).
4. Revisar la **producción mes a mes**: la mayor en dic–mar (temporada seca) y la menor en oct–nov (lluvias).
5. Ajustar las **pérdidas** a la realidad del Caribe: temperatura alta (PVGIS ya estima ≈ −12 % por temperatura/baja irradiancia), suciedad en temporada seca y polvo del Sahara (⚠️ asumir 2–5 % adicional si no se limpia).
6. Opcional (instalador): pedir la simulación en **PVsyst** e informe con P50/P90.

**Herramientas gratuitas:** PVGIS, PVWatts, SAM, pvlib-python (si se programa).

---

## Paso 5 — Diseño de strings, inversor y cables

1. **Elegir inversor** (on-grid o híbrido) con potencia AC acorde; relación DC/AC habitual 1.0–1.3 ⚠️ (criterio de mercado; verificar con el fabricante).
2. **Calcular strings** con la **calculadora del fabricante del inversor** (Huawei SmartDesign, SMA Sunny Design, Fronius Solar.creator, GoodWe Designer, Deye Assisted Design, Victron MPPT Calculator) y verificarlo a mano:
   - **Voc máxima** con la temperatura mínima: Voc_máx = Voc_STC × [1 + β_Voc × (T_mín − 25 °C)], con **T_mín ≈ 18 °C** (récords regionales; extremo 14.9 °C) ⚠️ → debe ser **< tensión máxima DC del inversor**.
   - **Vmp mínima** con la temperatura de celda máxima (≈ 65–70 °C en Sabanalarga ⚠️) → debe quedar **dentro del rango MPPT**.
   - **Corriente:** Isc del string (con el factor de seguridad que exija la norma ⚠️ NTC 2050 / RETIE) ≤ corriente máxima de entrada del MPPT.
3. **Cables y caída de tensión:** calcular sección del cable DC y AC con **Victron Toolkit** o una calculadora de caída de tensión; objetivo de diseño típico ≤ 1–2 % en DC ⚠️ y cumplir los límites de NTC 2050/RETIE.
4. **Protecciones:** fusibles/seccionador DC, DPS en DC y AC, interruptor AC, puesta a tierra y equipotencialización (ver riesgos de rayo en `01-recurso-solar-y-clima/riesgos-ambientales-para-el-sistema.md`).
5. **Estructura:** certificada para el viento de diseño (NSR-10 zona 5: 36 m/s B.2.3 / 46 m/s B.2.4) y anclada a la estructura del techo.

---

## Paso 6 — Baterías (sólo si se requiere respaldo o sistema híbrido)

1. Definir el **objetivo**: respaldo ante cortes (cargas críticas) o maximizar autoconsumo nocturno.
2. Energía de batería ≈ (consumo de cargas críticas en kWh/día × días u horas de respaldo) ÷ (profundidad de descarga útil × eficiencia) ⚠️ (fórmula de primer orden).
3. Simular en **SAM** (batería detrás del medidor) o en **PVGIS – sistema aislado** para ver con qué frecuencia la batería queda vacía en oct–nov.
4. Verificar compatibilidad batería ↔ inversor híbrido (lista de compatibilidad del fabricante).
5. Ubicar baterías en lugar **fresco, seco y elevado** (calor e inundaciones: ver riesgos).

---

## Paso 7 — Cotización y trámite

1. Preparar un **paquete de diseño** con: consumo anual, plano del techo, sombras, tamaño propuesto (kWp), simulación PVGIS/PVWatts, y requisitos (estructura para viento zona 5, DPS, puesta a tierra, tornillería antirrobo, inversor en interior).
2. Pedir **≥ 3 cotizaciones** comparables (mismo kWp y alcance) e insistir en que incluyan: marca/modelo de módulos, inversor y estructura; memoria de cálculo; simulación (idealmente PVsyst); garantías; trámite ante Air-e; certificación RETIE; mantenimiento.
3. Comparar el **kWh/kWp·año** que promete cada instalador contra el rango 1 430–1 570 de este repositorio: si prometen mucho más, pedir explicación.
4. **Trámite:**
   - Air-e → consulta de **disponibilidad de red** y radicación según su cartilla AGPE (https://www.air-e.com/autogeneracion).
   - Plataforma UPME de registro Resolución CREG 174 (https://automatizacion-upme.bizagi.com/).
   - Detalles regulatorios e incentivos en `02-marco-legal-y-regulatorio/`.
5. Guardar todo en `07-diseno-proyecto/`.

---

## Referencias (consultadas 2026-10-28)

- Global Solar Atlas — https://globalsolaratlas.info/detail?c=10.632,-74.921,11
- PVGIS (JRC) — https://re.jrc.ec.europa.eu/pvg_tools/es/ ; API v5.3/v5.2 https://re.jrc.ec.europa.eu/api/v5_3/
- PVWatts (NLR) — https://pvwatts.nlr.gov/ ; API https://developer.nlr.gov/api/pvwatts/v8.json
- SAM (NLR) — https://sam.nlr.gov/
- IDEAM normales 1991–2020 (temperaturas mínimas/máximas usadas para strings) — https://bart.ideam.gov.co/meteorologia/CLIMA/CLIMATOLOGIA/NORMALES%20CLIMATOLOGICAS/NC_ESTANDAR_1991-2020/
- Wikipedia, *Barranquilla* — tabla 1991–2020 con récords (fuente IDEAM) — https://en.wikipedia.org/wiki/Barranquilla
- NSR-10 Fig. B.6.4-1 (Decreto 1711 de 2021) — https://minvivienda.gov.co/sites/default/files/normativa/decreto-1711-del-13-de-diciembre-de-2021.pdf
- Victron Toolkit — https://www.victronenergy.com/blog/2024/09/04/introducing-the-victron-toolkit-app/
- Deye Assisted Design — https://www.deyeinverter.com/deye-assisted-design/
- Air-e, Autogeneración — https://www.air-e.com/autogeneracion
- UPME, Manual de usuario Registro Res. 174 (2026) — https://docs.upme.gov.co/Normatividad/Manual_de_usuario_resoluci%c3%b3n_174_24-03-2026.pdf
