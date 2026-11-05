# Desempeño fotovoltaico en el Caribe colombiano

> **Para qué sirve este archivo:** reúne la evidencia publicada (y verificable) sobre cuánta energía produce realmente un sistema FV en la Costa Caribe colombiana, y qué la reduce: temperatura, suciedad (*soiling*), polvo sahariano y salinidad. Sirve para pasar del valor teórico (HSP × kWp) a una expectativa realista para Sabanalarga (lat 10,632 N, lon −74,921, ~100 m s.n.m.).
>
> **Convenciones:** ✅ = dato verificado en la fuente primaria (DOI o PDF consultado). ⚠️ = dato incierto, de fuente secundaria/prensa o por verificar.

---

## 1. Resumen ejecutivo (cifras para usar en el diseño)

| Indicador | Valor de referencia para Sabanalarga | Base |
|---|---|---|
| Irradiación horizontal (GHI) | ≈ 5,3–5,4 kWh/m²·día (1.947–1.977 kWh/m²·año) | PVGIS-ERA5 y PVGIS-NSRDB, consulta propia (ver §3) |
| Irradiación en plano óptimo (15°, ligeramente hacia el SE) | ≈ 5,45–5,55 kWh/m²·día (≈2.000 kWh/m²·año) | PVGIS (ver §3) |
| Rendimiento específico residencial (techo, fijo, monofacial) | **≈ 1.400–1.600 kWh/kWp·año** | PVGIS (1.476–1.488 con 14 % de pérdidas), Ariza Taba et al. (2017): 1.554; FENOGE (Magdalena): ≈1.578 ⚠️ |
| Performance ratio (PR) anual esperado | **0,74–0,80** (0,70–0,72 si el módulo va pegado al techo sin ventilación) | PVGIS: 0,736–0,738 (montaje libre) y 0,705–0,708 (integrado); Ariza Taba et al.: 0,796 |
| Pérdida anual por temperatura | **≈ 12 %** (montaje ventilado) a **≈ 15,5 %** (montaje pegado/integrado) | PVGIS para Sabanalarga |
| Pérdida por ensuciamiento (soiling) | 2–6 % típica; picos de 6 % a mediodía con suciedad ligera; ~3.000 kWh perdidos en 33 días sin lluvia en una planta de 180 kWp | Diazgranados-Garzón et al. (2020); Audivet et al. (2021) |
| Ambiente corrosivo | Barranquilla clasificada **C4** (alta) para la estructura de aluminio | Audivet et al. (2021) |
| Planta utility vecina (Parque Solar Atlántico, Sabanalarga–Usiacurí) | 525 GWh/año proyectados / 256 MWp ≈ **2.050 kWh/kWp·año** (proyección de diseño, escala utility; probablemente módulos bifaciales ⚠️) | Enel Colombia (2026), pv magazine (2026) |

**Lectura práctica:** para un techo residencial en Sabanalarga, use **1.450–1.550 kWh/kWp·año** como base conservadora en la etapa de prefactibilidad (equivale a HSP ≈ 5,3 × 365 × PR ≈ 0,75–0,80). El valor de la planta de Enel no es extrapolable a un techo: los proyectos utility suelen usar seguidores y módulos bifaciales y tienen operación y mantenimiento (O&M) profesional.

---

## 2. Tabla de estudios (Caribe colombiano y Colombia)

| # | Autor(es), año | Lugar | Tipo de estudio | Hallazgo cuantitativo | DOI / URL |
|---|---|---|---|---|---|
| 1 | Audivet, Romero, García, Fonseca, Pinzón, Bula y Sanjuan (2021), *CT&F – Ciencia, Tecnología y Futuro* 11(1):11–20 | **Barranquilla** (techo de 180,8 kWp, 574 módulos policristalinos, 1.360 m²; Uninorte + Promigas) | Medición en campo: 33 días (17-feb a 21-mar-2019, temporada seca) e inspección visual | Eficiencia de diseño 15,3 %. La eficiencia real cayó de 10,91 % (día 1) a 8,65 % (día 26) por suciedad; tras la limpieza subió a 11,72 % (+2,98 puntos). **3.464 kWh dejados de generar por ensuciamiento** en el periodo (≈346 USD/mes a 0,1 USD/kWh). Degradación temprana aparente de 0,05 %/día en los días de más suciedad. **Temperatura de módulo ≈ 46,4–46,7 °C** con irradiancias de 529–585 W/m² y ambiente de 22–37 °C; humedad relativa 45–100 %. Falla más común: decoloración. No se observó delaminación ni corrosión de *busbars* (sistema joven). **Atmósfera clasificada C4** (alta corrosividad): cloruros y sulfuros sobre la estructura de aluminio, con una pérdida estimada de 2–5 mg/m²·año. No reporta PR ni kWh/kWp. | ✅ https://doi.org/10.29047/01225383.254 |
| 2 | Diazgranados-Garzón, Romero-Bravo, Navarro-Estrada, Castillo-Sierra, Soto-Ortiz y Pardo-González (2020), *Rev. Fac. Ing. Univ. Antioquia* (97):22–29 | **Barranquilla** (laboratorio Uninorte; paneles policristalinos de ~13,4 % de eficiencia, inclinados 11° hacia el sur) | Experimento controlado: 2 paneles idénticos con suciedad artificial (arena de río con la granulometría del polvo local), 11 días, ANOVA multivariado | La suciedad reduce la eficiencia **hasta ≈6 % en las horas de máxima radiación**; el efecto relativo crece en baja irradiancia (−12 % a 65 W/m², pero con poca energía en juego). El mayor salto ocurre al pasar de "limpio" a "ligeramente sucio"; de "ligero" a "pesado" el efecto adicional es pequeño. Los autores sugieren que la limpieza puede esperar a que la acumulación sea pesada. | ✅ https://doi.org/10.17533/udea.redin.20191156 |
| 3 | Mejía Ruiz, Vanegas Chamorro, Valencia Ochoa, Fábregas Villegas y Acevedo Peñaloza (2021), *IJASEIT* 11(5):2031– | **Barranquilla** (estación de medición, Univ. del Atlántico) | Análisis estadístico de variables ambientales vs. potencia (paneles policristalinos) | La **temperatura del panel** y la **irradiancia** son las variables más influyentes en la generación. La temperatura reduce el voltaje y aumenta levemente la corriente. En los periodos calurosos baja la eficiencia instantánea, pero la energía diaria total es mayor por la mayor irradiación; por eso recomiendan evaluar la producción **diaria total** y no la eficiencia instantánea. | ✅ https://doi.org/10.18517/ijaseit.11.5.9335 |
| 4 | Ariza Taba, Mwanza, Çetin y Ülgen (2017), *Periodicals of Engineering and Natural Sciences* 5(1) | **Región Caribe colombiana** (modelado con datos NASA SSE, SIG) | Estimación del potencial (no medición) | **1.554,47 kWh/kWp·año** y **PR = 79,63 %** para la región Caribe. | ✅ https://doi.org/10.21533/pen.v5.i1.1972 |
| 5 | Ospino-Castro, Robles-Algarín, Tobón-Pérez, Peña-Gallardo y Acosta-Coll (2020), *Int. J. Energy Economics and Policy* 10(6):337–346 | **Región Caribe** (datos meteorológicos 2013–2017) | Análisis financiero (flujo de caja descontado) de FV residencial en techo con medición neta | Los sistemas **≥ 3 kWp** alcanzan rentabilidad y autosostenibilidad cuando se financian con deuda (3 escenarios). | ✅ https://doi.org/10.32479/ijeep.9560 |
| 6 | Moreno Rocha, Milanés Batista, Arguello Rodríguez, Fontalvo Ballesteros y Núñez Álvarez (2022), *IJECE* 12(5):4521–4528 (Universidad de la Costa – CUC) | Colombia (proyectos registrados ante la UPME hasta sep-2020) | Revisión y estadística de proyectos | Panorama de los proyectos FV registrados, las zonas de mayor radiación (Caribe/La Guajira) y los incentivos tributarios (Ley 1715). Útil como contexto, sin datos de desempeño medidos. | ✅ https://doi.org/10.11591/ijece.v12i5.pp4521-4528 |
| 7 | FENOGE (2025), boletín de prensa "Comunidades Energéticas de Salud" | **Ciénaga y Santa Marta** (Magdalena): 3 instituciones de salud | Proyección del proyecto (no medición publicada) | 155,78 kWp y ≈245.796 kWh/año → **≈1.578 kWh/kWp·año** (cálculo propio a partir del boletín). | ⚠️ prensa: https://fenoge.gov.co/documentos-noticias/2025/Boletin_CESALUD_Magdalena.pdf |
| 8 | Enel Colombia (2026); pv magazine (2026) | **Parque Solar Atlántico, entre Sabanalarga y Usiacurí** | Proyección de una planta utility (180 MWac / 256 MWp; 403.920 módulos en 415 ha) | 525 GWh/año → **≈2.050 kWh/kWp·año** y ≈2.917 kWh/kWac (factor de capacidad AC ≈33 %). El Heraldo describe los módulos como bifaciales; Enel no lo confirma en su comunicado ⚠️. No se conoce si usa seguidores ⚠️. | ⚠️ https://www.pv-magazine.com/2026/03/05/enel-colombias-180-mw-atlantico-solar-park-begins-delivering-power-to-national-grid/ ; https://www.enel.com.co/content/dam/enel-co/español/7-prensa/2026/febrero/cluster-solar/enel-colombia-confirma-la-consolidacion-del-cluster-solar.pdf |
| 9 | Ramírez Hernández (2014), *Gestión y Ambiente* 17(2):11–29 | **Región Caribe colombiana** | Modelos de polvo (GEOS-5, SKIRON, NAAPS, CALIPSO), MODIS y redes de calidad del aire, año 2012 | Se confirman **intrusiones de polvo africano (sahariano)** en el Caribe colombiano; las concentraciones más altas ocurren **entre marzo y septiembre**, sobre todo en marzo, junio, julio y agosto. No cuantifica el efecto sobre la generación FV. | ✅ PDF: https://revistas.unal.edu.co/index.php/gestion/article/download/43057/50040/239116 |
| 10 | Vargas Campo y López Juvinao (2021), *Prospectiva* (Universidad de La Guajira) | Dibulla, La Guajira | Propuesta de diseño de sistema conectado a red para la alcaldía | Diseño, sin datos medidos. ⚠️ No se verificó el DOI. | ⚠️ citado vía búsqueda; por verificar |

### Estudios buscados y **no encontrados** (vacíos de la literatura)

- No se encontró ningún estudio revisado por pares con **PR o kWh/kWp medidos durante ≥1 año** en sistemas residenciales del Atlántico, Santa Marta, Cartagena, Montería o La Guajira. La mayoría de las cifras regionales son modeladas (NASA, PVGIS, PVsyst) o proyecciones de proyectos.
- No hay mediciones publicadas de **pérdidas FV atribuibles a polvo sahariano** en Colombia; la magnitud debe tomarse de estudios de otras regiones (p. ej., Mediterráneo: Varga et al., 2026, *Renewable Energy* 256:124337, que reportan caídas de producción del 25–40 % en promedio durante episodios intensos, con causas tanto de atenuación por polvo como de nubosidad inducida). ⚠️ No es transferible directamente al Caribe.
- No se halló un estudio que cuantifique la **velocidad de deposición de cloruros a ~40 km del mar** (como en Sabanalarga). Existe una tesis de la Universidad de la Costa sobre la deposición de cloruros en el noreste de Barranquilla (2019, método de vela húmeda ISO 9225); la mayor concentración se midió en la estación más cercana al mar ⚠️ (registro: https://redcol.minciencias.gov.co/Record/RCUC2_8f8e27b12ec7296c2ccd2ea0a3379559/Description).

---

## 3. Simulación de referencia para Sabanalarga (PVGIS, consulta propia)

Se consultó la API de **PVGIS (JRC, Comisión Europea)** el 28-oct-2026 para lat 10,632 / lon −74,921, con 1 kWp de silicio cristalino y 14 % de pérdidas de sistema (cableado, inversor, *mismatch*, suciedad: valor por defecto de PVGIS). Las pérdidas por temperatura y baja irradiancia (`l_tg`) y por ángulo de incidencia (`l_aoi`) se calculan aparte.

| Base de datos | Ángulos óptimos según PVGIS | E_y (kWh/kWp·año) | H(i)_y (kWh/m²·año) | Pérdida por temperatura y baja irradiancia | PR calculado |
|---|---|---|---|---|---|
| PVGIS-ERA5 (2005–2023), v5.3 | inclinación 16°, azimut −32° (SSE) | 1.476 | 2.000 | −11,9 % | 0,738 |
| PVGIS-NSRDB (2005–2015), v5.2 | inclinación 15°, azimut −26° (SSE) | 1.488 | 2.023 | −12,0 % | 0,736 |

Producción mensual (ERA5, plano óptimo): el **mes crítico es junio** (E_d = 3,62 kWh/kWp·día; H(i)_d = 4,91 kWh/m²·día); también son bajos mayo, octubre y noviembre (≈3,7). El mejor mes es febrero (4,84 kWh/kWp·día; 6,59 kWh/m²·día). La relación entre el mejor y el peor mes es ≈1,34, una estacionalidad moderada que favorece los sistemas autónomos frente a latitudes altas.

> **Cómo interpretar el PR de PVGIS (0,74):** incluye 14 % de pérdidas genéricas + ≈12 % por temperatura + ≈2,6 % por ángulo de incidencia. Con equipos modernos (inversor de 97–98 %, cableado de 1 %, *mismatch* de 1–2 %) y limpieza periódica, las pérdidas "de sistema" pueden bajar a 8–10 %, lo que elevaría el PR a ≈0,78–0,80, coherente con Ariza Taba et al. (2017). Use 0,75 para un escenario conservador y 0,80 para un escenario optimista bien ejecutado.

Detalle del barrido de inclinación y orientación: ver [`orientacion-inclinacion-sombras.md`](orientacion-inclinacion-sombras.md).

---

## 4. Temperaturas de módulo medidas y esperadas

- **Medida en Barranquilla:** 46,4–46,7 °C con 529–585 W/m² (Audivet et al., 2021). Si se extrapola linealmente a 1.000 W/m² (factor ≈ ΔT/G ≈ 0,02–0,03 K·m²/W), la temperatura de celda al mediodía en temporada seca estaría entre 55 y 65 °C ⚠️ (inferencia, no medida).
- **Modelos (ver archivo de clima cálido):** con un ambiente de 33 °C, 900 W/m² y viento de 2 m/s, la temperatura de celda resulta de ≈55–61 °C para un módulo bien ventilado y de ≈75–83 °C para uno pegado a la cubierta.
- **Consecuencia:** a 60 °C de celda, un módulo PERC (γ ≈ −0,35 %/°C) pierde ≈12 % de su potencia instantánea; uno TOPCon (−0,30 %/°C), ≈10,5 %; y uno HJT (−0,26 %/°C), ≈9 %.

---

## 5. Ensuciamiento (soiling): qué esperar en Sabanalarga

1. **Régimen de lluvias bimodal con una estación seca marcada (dic–abr):** es en estos meses cuando se acumula más polvo. El estudio de Audivet et al. (2021) se hizo justamente en febrero–marzo y midió una caída de eficiencia relativa de ≈20 % (de 10,9 % a 8,65 %) en 26 días. Parte de esa caída se debe también a la variación de la irradiancia y la temperatura, así que no es atribuible solo a la suciedad ⚠️.
2. **Factores agravantes locales:** vías sin pavimentar, quemas agrícolas, polvo sahariano (mar–sep), excrementos de aves y la humedad nocturna, que "cementa" el polvo.
3. **Predictores según la literatura internacional:** la concentración media de material particulado (PM10/PM2.5) y la **duración de los periodos secos** son los mejores predictores de la pérdida por suciedad (Micheli y Muller, 2017, R² hasta 0,82–0,90).
4. **Inclinación:** las superficies casi horizontales acumulan más suciedad (Cano et al., 2014). Ver la recomendación de 10–15°.
5. **Escala global:** el ensuciamiento es el factor más influyente en el rendimiento después de la irradiancia; en 2018 causó entre 3 y 4 % de pérdida de la producción mundial (IEA PVPS T13-21:2022; Ilse et al., 2019).

**Recomendación operativa (inferencia de la evidencia):**
- Inspección visual mensual y **limpieza con agua (preferiblemente desmineralizada o de lluvia) cada 1–2 meses en la temporada seca**. En la temporada de lluvias la limpieza natural suele bastar.
- Limpiar después de episodios de polvo sahariano visibles (cielo lechoso, avisos del IDEAM).
- Monitorear la producción (app del inversor): una caída de >5 % frente a días soleados comparables indica que hay que limpiar.

---

## 6. Salinidad y corrosión (Sabanalarga, ~40 km del mar)

- Barranquilla (≈ 5–15 km del mar) se clasificó como **C4** para la estructura de aluminio (Audivet et al., 2021). La deposición de cloruros cae rápido tierra adentro. Es razonable esperar que Sabanalarga quede en **C3–C4** ⚠️, pero no hay medición publicada.
- Implicaciones de diseño: módulos certificados en **IEC 61701** (niebla salina), estructura de aluminio anodizado o acero galvanizado en caliente con tornillería de acero inoxidable A2/A4, aislamiento galvánico entre aluminio y acero, conectores MC4 originales del mismo fabricante, y cajas IP65+. Ver [`clima-calido-temperatura-degradacion.md`](clima-calido-temperatura-degradacion.md).

---

## 7. Factibilidad de sistemas residenciales/AGPE en el Atlántico

- **Evidencia académica:** Ospino-Castro et al. (2020) concluyen que en la región Caribe los sistemas residenciales ≥3 kWp son rentables con financiación. Su análisis es anterior a la Resolución CREG 174 de 2021, por lo que hay que revisar las reglas actuales de entrega de excedentes (ver carpeta `02-marco-legal-y-regulatorio`).
- **Tesis regional:** la Universidad Simón Bolívar tiene un trabajo de diseño y selección de un sistema FV conectado a red para una comunidad de bajos recursos del Atlántico (software Solarius) ⚠️ (https://bonga.unisimon.edu.co/bitstreams/4cb16456-2088-47a8-a962-c329485d7a1b/download).
- **Contexto de consumo:** el Atlántico tiene uno de los consumos residenciales per cápita más altos del país (>640 kWh/hab·año) por la climatización. Ver [`consumo-residencial-caribe-y-eficiencia.md`](consumo-residencial-caribe-y-eficiencia.md).
- El ejemplo financiero resuelto está en [`metodologia-dimensionamiento.md`](metodologia-dimensionamiento.md) §8.

---

## Referencias de este archivo
Ver [`bibliografia.md`](bibliografia.md) (secciones A y B).
