# Estructuras, cableado, protecciones, medidor y monitoreo

> Fecha de consulta: **2026-10-28**. Precios **con IVA 19 %** (estructuras, cables, protecciones y medidores no están exentos en las tiendas consultadas; Autosolar muestra precio final, Solartex base + IVA y aquí se reporta el total).

## 1. Condiciones del sitio que afectan la selección (Sabanalarga)

Fuente: Air-e, *Anexo A1 – Características generales zonas de influencia* (DE.MA.020-AX01, 07/01/2022), mapas del Atlántico — https://www.air-e.com/assets/documents/normativas/Proyectos%20Tipo/DE-MA-020%20PT%20LAMT%20SN/Anexos-A/DE-MA-020-AX01-Caracter%C3%ADsticas-Generales-Zonas-Influencia.pdf (consultado 28-oct-2026)

| Parámetro | Valor para Sabanalarga según mapas de Air-e | Implicación |
|---|---|---|
| Viento (todo el Atlántico) | **Zona I: viento extremo 130 km/h, reducido 78 km/h** | Calcular anclajes y número de fijaciones; preferir estructuras certificadas a ≥2.400 Pa y fijar a correas, no solo a la teja |
| Contaminación (salinidad/industrial) | El casco urbano de Sabanalarga queda **en el límite** entre "altamente contaminado" (norte y occidente del departamento) y "contaminación normal" (sur-oriente) ⚠️ lectura del mapa | Tratar como ambiente corrosivo moderado-alto: aluminio anodizado + tornillería inoxidable A2/A4; módulos con IEC 61701 (niebla salina) |
| Densidad de rayos a tierra | **1–5 rayos/km²/año** | Análisis de riesgo NTC 4552/IEC 62305 exigido por Air-e; DPS tipo 2 en DC y AC |

## 2. Estructuras de montaje

### 2.1 Material
- **Aluminio anodizado (6005/6063-T5/T6) + tornillería inoxidable**: estándar en kits residenciales (Autosolar "Riel Aluminio Anodizado", Falcat, K2 Systems, Chiko, SOEN en Solartex). Ventajas: liviano, no requiere retoque en cortes, buen desempeño en ambientes marinos. Riesgo: **corrosión galvánica** si toca acero galvanizado o zinc sin aislante — usar separadores/EPDM.
- **Acero galvanizado en caliente**: más barato y rígido para estructuras elevadas o de piso; requiere espesor de zinc adecuado y protección de cortes y perforaciones. Una tesis en ambiente salino (Salinas, Ecuador) concluye que el galvanizado tiene buena relación precio/resistencia si se controla el acoplamiento galvánico — https://www.dspace.espol.edu.ec/bitstream/123456789/57068/1/T-112999%20CHUNGA%20GIOVANNY-GAIBOR%20FERNANDO-2023-03-02-JP-signed-signed.pdf
- **Acero Zn-Al-Mg (Magnelis/MAC)**: alternativa con 3–4× la resistencia del galvanizado según ArcelorMittal citado en https://renovable-anes.unison.mx/index.php/articulos/article/download/7/7 ⚠️ poco disponible al detal en Colombia.
- Resumen comparativo (fuentes comerciales y académicas, sin ensayo ISO 9223 específico para Sabanalarga ⚠️): Wattuneed https://www.wattuneed.com/en/galvanised-steel-vs-aluminium-which-metal-for-your-photovoltaic-structures.htm

### 2.2 Tipologías de techo comunes y solución de montaje

| Techo | Fijación típica | Productos con precio en Colombia | Cuidados |
|---|---|---|---|
| **Fibrocemento ondulado ("eternit")** | Espárrago/tornillo de doble rosca (hanger bolt) o tornillo autoperforante largo **anclado a la correa** (madera o metálica), con arandela EPDM + riel de aluminio | Solartex: "Tornillo autoperforante con L para fijación a riel #7R 250 mm Chiko" 30.107 COP/u (https://solartex.co/tienda/producto/tornillo-autoperforante-con-l-para-fijacion-a-riel-7r-250mm-chiko); rieles (abajo) | **No pisar** las láminas (frágiles); láminas antiguas pueden contener asbesto (no cortar/perforar sin protección ⚠️ normativa de asbesto en Colombia, Ley 1968 de 2019, verificar con la carpeta 02); verificar estado y capacidad de correas (módulo ~25–38 kg + ~3 kg/m² de estructura) |
| **Teja de barro** | Ganchos (hooks) de acero inoxidable/aluminio bajo la teja, atornillados a la estructura de madera; riel encima | Autosolar "Estructura Teja de barro" 1–6 paneles KHT915: 276.104 (1) · 325.144 (2) · 465.528 (3) · 637.395 (4) · 704.992 (5) · 845.376 (6) — https://autosolar.co/estructura-teja-de-barro/estructura-teja-de-barro-6-panel-kht915-1 ; "Soporte Teja de Barro" 36.394/u (https://autosolar.co/accesorios-de-estructuras/soporte-teja-de-barro); K2 "Universal hook +2" 55.335/u (https://solartex.co/tienda/producto/soporte-para-estructura-solar-universal-hook-2-k2-systems) | Recortar/ranurar teja para el gancho; reemplazar tejas rotas |
| **Zinc / lámina metálica trapezoidal** | Soporte trapezoidal o "L" con sello EPDM atornillado a cresta/correa; riel corto o mini-riel | Autosolar "Estructura Cubierta Metálica" (kits por N.º de paneles): 1 panel 134.731 · 4 paneles 393.769 · 6 paneles 573.449 · 8 paneles 759.003 · 10 paneles 967.828–1.130.251 · 12 paneles 1.152.409 · 16 paneles 1.546.786 · 20 paneles 1.922.264 — https://autosolar.co/estructura-cubierta-metalica/estructura-cubierta-metalica-12-panel-kh915 ; Solartex soporte trapezoidal Chiko #025 36.890/u; soporte en L con sello 14.518/u | Zinc delgado/oxidado: anclar a correas; aislar aluminio del zinc |
| **Losa de concreto (plana)** | Estructura triangular con inclinación 10–15° (Sabanalarga ~10,6° N), anclada con chazos químicos/expansivos o lastrada | Autosolar "Estructura Suelo 15–30°" Falcat: 7 paneles 858.855 · 10 paneles 1.238.587 · 12 paneles 1.470.754 · 15 paneles 1.850.486 — https://autosolar.co/estructura-suelo/estructura-suelo-15o-30o-12-paneles-falcat ; piso 1 panel 227.502; Alurack (Solartex) central 105.791 / extremo 48.076 | Impermeabilizar perforaciones; considerar viento 130 km/h si es lastrada |
| **Poste / estructura elevada (patio)** | Poste galvanizado o estructura de piso | Autosolar "Estructura Poste 30°" 1 panel 739.330 · 2 paneles 1.155.203 | Cimentación; puesta a tierra |

**Componentes sueltos** (para cotizar a medida):
- Rieles aluminio anodizado (Autosolar): 2,5 m 63.885 · 2,8 m 75.078 · 3,6 m 91.366 · 4,8 m 137.765 — https://autosolar.co/accesorios-de-estructuras/riel-de-48m-aluminio-anodizado
- Riel Chiko 4,7 m 179.452; SOEN B2 4,9 m 130.186; K2 CrossRail 48-X 192.423 (Solartex)
- Clamps Falcat: intermedio 6.318 · final 6.645 · unión 6.818 · L 7.921 (Autosolar); mid clamp SOEN 5.712 (Solartex)
- Puesta a tierra de estructura: conector 6.292 (Autosolar); clip Chiko 2.023; ground lug K2 24.633 (Solartex)

**Costo de estructura por kWp (cálculo propio)**: kit de cubierta metálica 12 paneles (12 × 610–710 W ≈ 7,3–8,5 kWp) = 1,15 M COP → **≈ 135.000–160.000 COP/kWp**; teja de barro 6 paneles (≈3,7–4,3 kWp) = 0,85 M → ≈ 200.000–230.000 COP/kWp; piso/losa 12 paneles 1,47 M → ≈ 170.000–200.000 COP/kWp.

## 3. Cableado

| Tipo | Norma | Uso | Precio Colombia (con IVA) | Tienda / URL |
|---|---|---|---|---|
| **Cable solar 4 mm² (12 AWG) 1.500 VDC** (rojo/negro) | Tipo PV1-F / H1Z2Z2-K (EN 50618 / IEC 62930) ⚠️ la tienda no indica norma | Strings DC | 4.521 COP/m (Autosolar); 6.069 COP/m (Solartex) | https://autosolar.co/cable-fotovoltaico-dc/cable-solar-14mm2-rojo-1500vdc · https://solartex.co/tienda/producto/cable-solar-4mm-12-awg-1500vdc-por-metros |
| Cable solar 6 mm² (10 AWG) | ídem | Strings largos / corriente alta (módulos de 17–18 A) | 6.221 COP/m (Autosolar) | https://autosolar.co/cable-fotovoltaico-dc/cable-solar-16mm2-rojo-1500vdc |
| Cable solar 10 mm² (6 AWG) | ídem | Batería/MPPT | 11.285 COP/m (Autosolar); 14.042 (Solartex) | Autosolar categoría https://autosolar.co/cable-fotovoltaico-dc |
| Cable solar 16 / 35 mm² | ídem | Banco de baterías | 15.895 / 29.294 COP/m (Autosolar) | ídem |
| Cable soldador 4 AWG / 6 AWG (baterías) | — | Batería–inversor | 34.510 / 19.397 COP/m (Solartex) | https://solartex.co/tienda/producto/cable-soldador-para-baterias-por-metros-4-awg-600v-procables |
| Extensiones con MC4 (4 mm², 10 m) | — | — | 131.971–138.873 COP (Solartex) | https://solartex.co/tienda/producto/cable-fotovoltaico-de-10-metros-4mm-con-conectores-mc4-en-ambos-extremos |
| Conector MC4 4/6 mm² 1.500 VDC | — | — | 6.324 COP (Autosolar) | https://autosolar.co/accesorios-de-paneles-solares/conector-mc4-para-paneles-solares-46mm2-1500vdc |

- **H1Z2Z2-K (EN 50618)**: conductor de cobre estañado clase 5, aislamiento reticulado libre de halógenos, hasta 1.800 VDC, −40 a +90 °C, vida esperada ≥25 años — ficha Lapp https://static.chipdip.ru/lib/350/DOC041350417.pdf (ejemplo de fabricante europeo). PV1-F es la designación anterior (TÜV 2 PfG 1169). En Colombia (NTC 2050, basada en NEC) también se acepta **PV Wire (UL 4703)** ⚠️ verificar con la carpeta 02/04.
- AC: cable THHN/THWN-2 de cobre (Autosolar "Cable AWG 10/8"); dimensionamiento según NTC 2050 y regulación ≤1 % hasta el medidor (Air-e instructivo AGPE).
- Ductos: tubería EMT o PVC, coraza metálica (Autosolar las vende; precios en su sitio).

## 4. Protecciones DC/AC y DPS

| Producto | Especificación | Precio COP (con IVA) | Tienda | URL |
|---|---|---|---|---|
| Breaker DC 2P 16 A 600 VDC Suntree (marcado "RETIE") | Seccionamiento string | 103.173 | Solartex | https://solartex.co/tienda/producto/breaker-dc-2p-600vdc-16a-suntree-retie |
| Breaker DC 2P 20 A 600 V Suntree | ídem | 76.066 | Autosolar | https://autosolar.co/breakers-dc/breaker-solar-dc-2x20a-600v-suntree |
| Breaker DC 4P 20 A 1.000 VDC Leader LDM7 | 2 strings | 136.612 | Solartex | https://solartex.co/tienda/producto/breaker-termomagnetico-dc-20a-1000vdc-4p-leader-ldm7 |
| Fusible gPV 10×38 15 A 1.000 VDC | Protección string | 10.472 (Autosolar) / 17.255 (Solartex) | Autosolar | https://autosolar.co/fusibles/fusible-dc-15a-10x38-1000vdc-moreday |
| Portafusible DC 10×38 1.000 V 32 A | — | 16.065 | Solartex | https://solartex.co/tienda/producto/porta-fusible-dc-10x38mm-1000v-hasta-32a-yro |
| **DPS DC** 2P 600 VDC 20/40 kA Moreday | Tipo 2 DC | 175.753 | Autosolar | https://autosolar.co/descargador-de-sobretension/dps-solar-dc-2p-600vdc-2040ka-moreday |
| DPS DC 2P 800 VDC 20/40 kA Suntree | Tipo 2 DC | 109.242 | Autosolar | https://autosolar.co/descargador-de-sobretension/dps-solar-dc-2p-800vdc-2040ka-suntree |
| DPS Clamper 1.040 V 40 kA Clase II | Tipo 2 DC | 229.001 | Autosolar | https://autosolar.co/descargador-de-sobretension/dps-solar-clamper-1040v-40ka-clase-ii |
| **DPS AC** 2P 240 VAC 20/40 kA Moreday | Tipo 2 AC (bifásico/fase partida) | 168.980 | Autosolar | https://autosolar.co/descargador-de-sobretension/dps-solar-ac-2p-240vac-2040ka-moreday |
| DPS AC 2P 275 V 40 kA Leader | Tipo 2 AC | 104.482 | Solartex | https://solartex.co/tienda/producto/supresor-de-sobretension-dps-ac-2p-275v-40ka-leader |
| DPS AC 1P 175 V 20 kA Clamper | Para 120 V F-N | 92.225 | Solartex | https://solartex.co/tienda/producto/supresor-sobretension-dps-175v-20ka-clamper |
| Breaker AC 2P 32 A Leader | Salida inversor | 22.967 | Solartex | https://solartex.co/tienda/producto/breaker-termomagnetico-ac-2p-32a-leader |
| Breaker AC/DC 2P 32 A WEG MDW | — | 79.254 | Solartex | https://solartex.co/tienda/producto/breaker-termomagnetico-2p-32a-230-400v-ac-dc-weg |
| **Kit de protecciones fotovoltaicas 1 arreglo** | DC+AC armado | 831.810 | Solartex | https://solartex.co/tienda/producto/kit-de-protecciones-fotovoltaicas-para-1-arreglo |
| Caja protección DC Clamper 2 strings 2E/2S 32 A | Combiner con DPS | 1.512.609 | Solartex | https://solartex.co/tienda/producto/caja-proteccion-dc-para-2-strings-2e-2s-kit-32a-clamper |
| Caja metálica IP65 exterior 40×30×15 | Tablero | 178.500 | Autosolar | https://autosolar.co/caja-de-protecciones/caja-de-proteccion-metalica-ip65-para-exterior-40x30x15 |

**Costo típico de BOS eléctrico residencial (cálculo propio con estos precios)**: 1 kit de protecciones (~0,83 M) + 40 m de cable 6 mm² (~0,25 M) + conectores/canalización/puesta a tierra (~0,3–0,6 M) ≈ **1,4 – 1,7 M COP por sistema de 3–10 kWp** ⚠️ estimado.

## 5. Medidor bidireccional

- **Exigencia**: AGPE que entrega excedentes debe tener **medidor bidireccional con registro horario**, cumpliendo el Código de Medida (CREG 038/2014); si se cambia el medidor, presentar **certificado de conformidad de producto y certificados de calibración vigentes** (cartilla Air-e, https://www.air-e.com/assets/documents/autogeneracion/cartilla_de_informacion.pdf). El instructivo AGPE de Air-e pide especificar el medidor (directo/semidirecto, monofásico/bifásico/trifásico) en planos y memorias.
- **Tipos aceptados por Air-e para conexión directa** (DT.ID.ES.130, Tabla 8): monofásico bifilar 120 V; bifásico trifilar 127/220 o 120/208 V; trifásico tetrafilar; 5(60–100) A; clase 1 activa; "ambiente tropical y marino".
- **¿Quién lo suministra/paga?** No se encontró regla explícita de Air-e para autogeneradores ⚠️. Para el programa de **medición avanzada**, MinEnergía/Air-e indicaron en 2021 que el operador asume el costo del medidor (El Heraldo, 6-jun-2021: https://www.elheraldo.co/economia/2021/06/06/lo-que-debe-saber-sobre-la-medicion-inteligente-de-energia-823361/). Colombia Tramita (15-oct-2026) señala que "en algunos operadores el usuario paga la instalación y en otros la asume la empresa" (https://colombiatramita.co/servicios-publicos/paneles-solares-colombia/). En la práctica de mercado el instalador suele incluirlo en la oferta llave en mano (Solartech: "incluye radicación, medidor bidireccional y puesta en servicio").
- **Precios**:
  - Vexta Energy (Barranquilla, oct-2026): **200.000 – 800.000 COP** según el operador — https://www.vextaenergy.com/blog/costos-paneles-solares-colombia.html
  - Medidor bidireccional ISKRA MT-174 directo (trifásico): **1.441.090 COP** (sin IVA 1.211.000) — Autosolar https://autosolar.co/medidor-bidireccional/medidor-bidireccional-iskra-mt-174-directa
  - ⚠️ Mercado Libre no se pudo consultar (bloqueo 403 al acceso automatizado).

## 6. Monitoreo y medición de autoconsumo
- Dongles Wi-Fi del fabricante (Growatt Shine Wi-Fi-X, Deye/Solarman, Huawei FusionSolar) suelen venir con el inversor o se compran aparte; vienen incluidos en los kits de Autosolar (ver composición en `precios-referencia-2025-2026.md`).
- Medidor de autoconsumo / control de inyección cero: Eastron SDM630 Modbus (incluido en kits Autosolar); Solis smart meter trifásico DTSD1352 + CTs 829.906 COP (Solartex https://solartex.co/tienda/producto/smart-meter-trifasico-dtsd1352-cts-para-inversores-solares-solis); Growatt TPM trifásico (Autosolar). El "manual del dispositivo que controla la inyección" es documento obligatorio ante Air-e si se limita la exportación.

## 7. Recomendaciones
1. Aluminio anodizado + inoxidable A2/A4 con aislamiento contra zinc/galvanizado; fijación a correas; cálculo de viento para 130 km/h.
2. En fibrocemento, evaluar el estado de las láminas (y asbesto) antes de decidir; a veces conviene estructura independiente o reemplazar la cubierta.
3. DPS tipo 2 en DC (lado string) y en AC (salida del inversor), puesta a tierra equipotencial de marcos y estructura (Air-e exige diseño de puesta a tierra y análisis de riesgo por rayos).
4. Cable solar de 6 mm² si se usan módulos de 17–18 A o tramos >20 m.
5. Pedir que el medidor bidireccional, su certificado de calibración y la instalación estén **incluidos** en la oferta llave en mano.
