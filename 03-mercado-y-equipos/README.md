# 03 · Mercado, equipos, precios y proveedores

Repositorio de conocimiento para diseñar y cotizar un sistema solar fotovoltaico residencial (on-grid, híbrido u off-grid) en **Sabanalarga, Atlántico, Colombia** (red de **Air-e**).
Fecha de elaboración y de consulta de precios: **2026-10-28**. TRM usada: **3.191,47 COP/USD** (22-oct-2026).

## Índice

| Archivo | Contenido |
|---|---|
| [panorama-mercado-colombia.md](panorama-mercado-colombia.md) | Capacidad instalada (XM, SER, MinEnergía/UPME), autogeneración, Colombia Solar, precios llave en mano, tendencias globales (OPIS/pv magazine, IRENA, BNEF), TRM |
| [modulos-fotovoltaicos.md](modulos-fotovoltaicos.md) | Tecnologías (PERC, TOPCon, HJT, BC, bifacial), coeficientes de temperatura, garantías, Tier 1 BNEF 3T-2026 vs. presencia local, 24 precios por Wp |
| [inversores.md](inversores.md) | **Configuración de red de Air-e (120 V / 120/208 V / 120/240 V / trifásico)** y matriz de compatibilidad; requisitos de conexión y certificación; precios on-grid, híbridos, off-grid y microinversores |
| [baterias.md](baterias.md) | LiFePO4 48 V y alta tensión, plomo-gel/AGM/OPzV; COP/kWh; ciclos; garantías; efecto del calor |
| [estructuras-cableado-protecciones.md](estructuras-cableado-protecciones.md) | Viento/contaminación/rayos en Sabanalarga (mapas Air-e); estructuras por tipo de techo (fibrocemento, teja de barro, zinc, losa); cable solar; DPS y protecciones; medidor bidireccional; monitoreo |
| [proveedores-e-instaladores.md](proveedores-e-instaladores.md) | Tiendas con precios (Autosolar, Solartex, Homecenter…), mayoristas (BayWa r.e. Barranquilla), instaladores en Barranquilla/Atlántico, lista de chequeo de ofertas |
| [precios-referencia-2025-2026.md](precios-referencia-2025-2026.md) | **Tablas consolidadas**: producto, especificación, precio COP, tienda, URL, fecha; kits; llave en mano; referencias internacionales convertidas a COP |
| [costos-sistemas-tipicos-y-payback.md](costos-sistemas-tipicos-y-payback.md) | Desglose de costos, benchmarks 3/5/10 kWp on-grid, híbrido 5 kW + 10 kWh, off-grid, O&M, payback y casos del Caribe |

## Resumen ejecutivo

### Rangos de precio clave (Colombia, al público, oct-2026)

| Ítem | Rango | Notas |
|---|---|---|
| **Módulo N-type ≥580 W** | **710 – 1.000 COP/Wp** (mediana ≈ 840; ≈ USD 0,22–0,31/Wp) | Exentos de IVA. FOB China: 0,109 USD/W ≈ 348 COP/W (OPIS, 28-jul-2026) |
| Inversor on-grid 3–10 kW | 300 – 800 COP/W (2,2–3,9 M COP por equipo de 6–10 kW) | Exentos de IVA |
| Inversor híbrido 5–8 kW split-phase | 4,0 – 11,5 M COP | Deye SG01LP1-US admite 208 y 240 V |
| **Batería LiFePO4 48 V** | **0,68 – 1,34 M COP/kWh** | Con IVA 19 %. Huawei LUNA2000: 1,6–1,8 M COP/kWh. BNEF mayorista: USD 70/kWh ≈ 0,22 M COP/kWh |
| Batería gel/AGM | 0,33 – 0,67 M COP/kWh nominal (0,66 – 1,34 M por kWh útil) | Vida muy sensible al calor |
| Estructura aluminio | ≈ 135.000 – 230.000 COP/kWp | Según techo |
| Kit de equipos on-grid (sin instalar) | 1,6 – 2,25 M COP/kWp | Kits Autosolar |
| **Llave en mano on-grid** | **2,8 – 4,7 M COP/kWp** | Instalador de Barranquilla (Vexta): 2,8–3,8 M |
| On-grid 3 / 5 / 10 kWp | ≈ 8,4–16 M / 14–25 M / 28–45 M COP | Payback simple ~3–5 años (tarifa 800–950 COP/kWh, 1.450 kWh/kWp·año) |
| Híbrido 5 kW + 10 kWh | ≈ 26–35 M (48 V) / 37–50 M (alta tensión de marca) | Batería = respaldo; payback incremental 8–24 años |
| Off-grid casa mediana | ≈ 25–36 M COP | No competitivo si hay red |
| Medidor bidireccional | 0,2 – 0,8 M COP (rango de mercado); ISKRA trifásico 1,44 M | Air-e exige registro horario y certificado de calibración |

### Hallazgos importantes
1. **Red de Air-e**: su especificación DT.ID.ES.130 (2024) normaliza **120 V monofásico bifilar, 120/208 V bifásico trifilar y 120/208 V trifásico**, y además existen transformadores monofásicos **120/240 V**. Muchos inversores vendidos como "bifásicos/fase dividida" son de 240 V nominal; **a 208 V algunos quedan fuera de rango** (p. ej. Growatt MIN 2,5–6 kW TL-X2: 211–264 V). Medir F-F en la casa antes de comprar.
2. Air-e exige para el inversor un **certificado de producto de organismo acreditado** (normas de inversores), **dictamen RETIE** de la instalación, medidor bidireccional horario y memorias de cálculo firmadas (riesgo por rayos, puesta a tierra, regulación).
3. Sabanalarga está en **zona de viento I (130 km/h extremo)**, **1–5 rayos/km²/año** y en el **límite de la zona "altamente contaminada"** de los mapas de Air-e → aluminio anodizado + inoxidable, DPS DC/AC, módulos con certificación de niebla salina.
4. Los N-type (TOPCon/HJT/BC) dominan y ya son **más baratos por W que PERC**; HJT/BC pierden ~2 puntos menos por calor.
5. En tiendas, módulos e inversores van **sin IVA**; baterías, estructuras y protecciones **con IVA 19 %**.
6. Mercado: 24.447 sistemas AGPE/GD registrados (may-2026), 9.360 nuevos en 2025; recursos distribuidos >1,3 GW (SER); Air-e con 1.989 solicitudes acumuladas (mar-2025).

### Vacíos de información (⚠️)
- Sin precios públicos en COP para inversores Huawei on-grid, Fronius, SMA, GoodWe, Solis; baterías BYD, Dyness, Deye SE-G; Victron MultiPlus-II 48/5000; Enphase.
- **Mercado Libre no accesible** (403). Enertik/Hybrytec sin precios.
- Sin desglose público de mano de obra, dictamen RETIE ni limpieza/O&M local.
- Sin CU de Air-e de oct-2026 por estrato ni valor de excedentes confirmado (ver carpeta 02).
- Sin dato OPIS/InfoLink de sep–oct 2026; sin estadística de autogeneración residencial por municipio.
- El estudio Emergente/UNAL (payback ~3 años en la costa) solo se conoce por prensa.

## Convenciones
- Cada dato lleva URL, fuente y fecha (de publicación o de consulta). Precios de tiendas: consulta 2026-10-28.
- "⚠️ por verificar" = dato de fuente secundaria, ambiguo o no confirmado.
- "Cálculo propio" = estimación de este repositorio a partir de datos citados.
- Datos crudos de las tiendas se extrajeron del HTML/JSON público de cada sitio el 2026-10-28; los precios pueden cambiar.

## Relación con otras carpetas
- Recurso solar: `../01-recurso-solar-y-clima/` · Marco legal (CREG 174, Ley 1715, RETIE): `../02-marco-legal-y-regulatorio/` · Técnico: `../04-tecnico-cientifico/` · Diseño: `../07-diseno-proyecto/`
