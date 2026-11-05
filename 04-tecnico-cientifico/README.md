# 04 · Literatura técnico-científica y metodología de diseño

Repositorio de conocimiento para diseñar un sistema solar fotovoltaico residencial (on-grid, off-grid o híbrido) en **Sabanalarga, Atlántico, Colombia** (lat 10,632 N, lon −74,921, ~100 m s.n.m., sabana tropical Aw/BSh, ~40 km del mar).

> Convención: ✅ = dato verificado en la fuente primaria (DOI/PDF). ⚠️ = incierto, de fuente secundaria/prensa, o inferencia propia por verificar. Fecha de la investigación: 28-oct-2026.

## Índice

| Archivo | Contenido |
|---|---|
| [`desempeno-fv-caribe-colombiano.md`](desempeno-fv-caribe-colombiano.md) | Tabla de estudios del Caribe (Barranquilla, región Caribe, Magdalena, Parque Solar Atlántico); rendimiento kWh/kWp, PR, temperatura medida, *soiling*, polvo sahariano, salinidad; simulación PVGIS para Sabanalarga |
| [`clima-calido-temperatura-degradacion.md`](clima-calido-temperatura-degradacion.md) | Modelos de temperatura de celda (NOCT, Sandia, Faiman, PVsyst) con números para Sabanalarga; PERC vs TOPCon vs HJT; degradación en trópicos (NREL); PID, LeTID, UVID; normas IEC 61215/61730/61701/62716 |
| [`orientacion-inclinacion-sombras.md`](orientacion-inclinacion-sombras.md) | Geometría solar a 10,6° N; barrido de inclinación y azimut con PVGIS; autolimpieza; E–O; separación entre filas y sombras |
| [`metodologia-dimensionamiento.md`](metodologia-dimensionamiento.md) | Ecuaciones y 6 ejemplos resueltos: on-grid, strings, DC/AC, off-grid (cargas, batería, mes crítico, MPPT, inversor y arranque de motores), híbrido, conductores, protecciones (1,56·Isc), puesta a tierra, LCOE/VPN/TIR/payback |
| [`baterias-tecnologia-y-vida-util.md`](baterias-tecnologia-y-vida-util.md) | LFP vs NMC vs plomo-ácido; Arrhenius con datos de Wang et al. (2011); regla de la vida a la mitad para plomo-ácido; recomendaciones de ubicación; LCOS |
| [`consumo-residencial-caribe-y-eficiencia.md`](consumo-residencial-caribe-y-eficiencia.md) | Consumo per cápita del Caribe (UPME 2026), penetración del AA en el Atlántico, EER del parque (BEU 2019), evidencia sobre el AA inverter, medidas de eficiencia previas |
| [`rayos-y-puesta-a-tierra.md`](rayos-y-puesta-a-tierra.md) | DDT y nivel ceráunico de la Llanura Caribe (LINET, U. Nacional – Torres/Aranguren), ecuación Ng–Td, frecuencia de impactos, DPS, equipotencialidad, puesta a tierra |
| [`bibliografia.md`](bibliografia.md) | Todas las referencias en APA 7 con DOI/URL, con su estado de verificación |

---

## 10 lecciones clave de la literatura para diseñar en Sabanalarga

1. **Espere 1.450–1.550 kWh/kWp·año en un techo residencial (PR ≈ 0,75–0,80), no los 2.000+ de las plantas utility.** PVGIS da 1.476–1.488 kWh/kWp con pérdidas genéricas (PR ≈ 0,74); Ariza Taba et al. (2017) estiman 1.554 kWh/kWp y PR = 0,80 para la región Caribe. La planta de Enel vecina (≈2.050 kWh/kWp proyectados) usa una configuración utility que no es comparable con un techo.

2. **La temperatura es la mayor pérdida evitable: ≈12 % anual con buena ventilación frente a ≈15,5 % con el módulo pegado al techo.** Separe los módulos ≥10–15 cm de la cubierta. Barranquilla midió 46–47 °C de módulo con apenas 530–585 W/m² (Audivet et al., 2021); al mediodía se esperan 55–60 °C (ventilado) o 75–83 °C (sin ventilación).

3. **Prefiera módulos n-type (TOPCon/HJT) con γ ≤ −0,30 %/°C,** pero exija certificados de calor húmedo/UV extendidos. La física (Dupré et al., 2015; Haschke et al., 2017) favorece la Voc alta en calor (≈1–2,5 % más energía anual frente a PERC, estimación propia ⚠️). Los TOPCon han mostrado sensibilidad a UV y a la corrosión por humedad + sodio en ensayos recientes (2025–2026).

4. **Planifique una degradación de 0,5–0,7 %/año, no de 0,3 %.** Las flotas en climas cálidos degradan ≈0,88 %/año frente a ≈0,48 % en climas fríos (Jordan et al., 2022); la mediana histórica del c-Si es de 0,5–0,6 %/año (Jordan et al., 2016). Exija IEC 61215/61730 + **IEC 61701 (niebla salina)** + resistencia a PID (IEC TS 62804-1).

5. **Incline 10–15° hacia el sur o sur-sureste; la energía es casi la misma, pero la autolimpieza no.** El óptimo de PVGIS es de 15–16° y azimut ≈ −30° (SSE); de 10° a 20° se pierde ≤1,1 %, y en horizontal ≈2–3 % más el doble de suciedad (Cano et al., 2014). **Este > Oeste** (≈−2 % frente a ≈−5 %) por la nubosidad vespertina.

6. **El ensuciamiento importa en la temporada seca (dic–abr) y con el polvo sahariano (mar–sep): limpie cada 1–2 meses en sequía.** En Barranquilla, 33 días sin limpiar costaron 3.464 kWh en 180 kWp (Audivet et al., 2021); la suciedad ligera ya quita hasta ≈6 % al mediodía (Diazgranados-Garzón et al., 2020). El polvo africano llega sobre todo en marzo, junio, julio y agosto (Ramírez Hernández, 2014).

7. **Primero eficiencia, después paneles: el aire acondicionado es la carga que define el sistema.** El Caribe consume ≈698 kWh/hab·año frente a una mediana nacional de 459, y el 31 % de los hogares del Atlántico tiene AA (UPME, 2026). El EER promedio del parque es de apenas 2,7 W/W (BEU, 2019). Los AA inverter ahorran 28–68 % en climas tropicales (Gokarakonda et al., 2023; CLASP, 2026). Cambiar un AA viejo evita ≈1 kWp de paneles.

8. **En un sistema off-grid, dimensione para junio (≈4,9 kWh/m²·día en el plano) y para el arranque de motores.** El AA nocturno **duplica** batería y FV; los motores convencionales (neveras, AA, bombas) piden 3–8× su corriente nominal al arrancar ⚠️. Use equipos inverter o *soft-starters* e inversores con capacidad de pico ≥2× la nominal.

9. **Las baterías viven o mueren por la temperatura del cuarto.** Con LFP (E_a ≈ 31,5 kJ/mol, Wang et al., 2011), operar a 35 °C en vez de 25 °C acelera el envejecimiento ≈1,5×; el plomo-ácido pierde ≈50 % de vida a 35 °C. Instálelas a la sombra, ventiladas y lejos del techo de zinc; elija LFP con BMS y evite el reposo al 100 % de SoC (Naumann et al., 2018).

10. **Rayos: la Llanura Caribe tiene 13–32 descargas/km²·año y 111–204 días de tormenta (LINET 2012–2017; Cruz Bernal, 2019 – U. Nacional, Torres/Aranguren).** Esto es hasta 10× más que las tablas antiguas. Los DPS en DC y AC, un sistema de puesta a tierra único y equipotencial, y el tendido de + y − juntos (lazos mínimos) son imprescindibles. Haga el análisis de riesgo según NTC 4552-2 si la casa está aislada o es la más alta del entorno.

---

## Vacíos de la literatura (oportunidades de medición propia)
- No existe un estudio revisado por pares con **PR y kWh/kWp medidos durante ≥1 año en sistemas residenciales del Atlántico** (ni en Santa Marta, Cartagena, Montería o La Guajira). La mayoría de las cifras son modeladas o proyecciones.
- No hay **cuantificación local de la pérdida FV por polvo sahariano** ni de la **corrosividad (cloruros) a ~40 km de la costa**.
- No hay datos **municipales** de DDT para Sabanalarga, ni estudios locales sobre fallas de inversores por rayos.
- No hay caracterización publicada del **consumo de AA por estrato** en el Atlántico con submedición.
- **Recomendación:** monitorear el propio sistema (producción diaria, temperatura de módulo y eventos de limpieza) desde el primer día. Así se genera el dato local que hoy falta.
