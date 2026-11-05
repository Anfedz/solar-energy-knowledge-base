# Módulos fotovoltaicos disponibles en Colombia (2026)

> Fecha de consulta de precios: **2026-10-28**. TRM usada: 3.191,47 COP/USD (22-oct-2026, ver `panorama-mercado-colombia.md`).
> En Colombia los módulos se venden **exentos de IVA** en las tiendas consultadas (Autosolar los marca "Exento de IVA"; Solartex con `ivaRate 0`), por lo que el precio publicado es el precio final.

## 1. Tecnologías que se consiguen hoy

| Tecnología | Situación en el mercado colombiano (oct-2026) | Coef. temp. Pmax típico | Comentario para clima de Sabanalarga (calor) |
|---|---|---|---|
| **PERC (p-type) monofacial** | En retirada: quedan pocos modelos (JA 340 W, Canadian 445 W) y **a precios por W mucho más altos** que los N-type (1.800–2.600 COP/W) | ≈ −0,34 a −0,35 %/°C (valor típico de la industria ⚠️ por verificar en ficha) | No recomendable: más pérdida por calor y más caro hoy |
| **TOPCon n-type (mono o bifacial vidrio-vidrio)** | **Dominante**: JA DeepBlue 4.0, Jinko Tiger Neo, Risen, Astronergy, OSDA, ZNShine, Tensite, Sylvania T1 | −0,29 a −0,30 %/°C (JA DeepBlue 4.0 Pro, listados de revendedores); Jinko Tiger Neo 3.0: −0,26 %/°C según Jinko | Opción de mejor relación precio/desempeño |
| **HJT (heterounión)** | Disponible: Risen Hyper-ion / Hyper-link 725 W | −0,24 %/°C (Risen 730 W, PV Tech) | Mejor comportamiento térmico; precio similar a TOPCon en Solartex |
| **Back-contact (HPBC 2.0 / ABC)** | LONGi Hi-MO X10 650 W | −0,26 %/°C (listados de revendedores) | Prima global de +0,02–0,03 USD/W sobre TOPCon (OPIS, ago-2026) |
| **Bifacial** | La mayoría de los módulos ≥600 W que se venden son bifaciales vidrio-vidrio | — | En techo residencial casi coplanar, la ganancia bifacial es pequeña; vidrio-vidrio sí ayuda con humedad/salinidad |

Fuentes de coeficientes y garantías:
- LONGi Hi-MO X10: −0,26 %/°C, garantía de potencia 30 años, degradación 1 % año 1 y 0,35 %/año — listados de revendedores (heatable.co.uk, solarboss.ie), p. ej. https://heatable.co.uk/solar/advice/longi-solar-panels ⚠️ verificar ficha oficial.
- Jinko Tiger Neo 3.0: −0,26 %/°C — página del producto https://jinkosolar.com/en/site/tigerneo_3 ; garantía 25 años producto / 30 años potencia según distribuidores (p. ej. https://solarboss.ie/products/455w-3-0-n-type-black-jkm455n-48hl4m-db). Modelos Tiger Neo anteriores: −0,29 %/°C (https://fronus.com/products/modules/JinkoSolar/Tiger-neo/580W/).
- JA Solar DeepBlue 4.0 Pro (JAM66D45): −0,29 a −0,30 %/°C; garantía de producto 12 años; potencia 25 años ≥89,4 % y 30 años ≥87,4 % — listados sun.store, p. ej. https://sun.store/en/product/ja-solar-jam66d45-605-lb-595-620-1500v-black-frame-mc4-evo2a-40246 ⚠️.
- Risen HJT 700–725 W: 15 años producto / 30 años potencia (90,3 % al año 30, 0,3 %/año) — ficha https://solarmagazine.nl/u/webshop/datasheetrisen-rsm132-8-700-725bhdg.pdf ; coef. −0,24 %/°C (730 W) — https://www.pv-tech.org/risen-energy-unveils-730w-hjt-solar-module-with-anti-glare-optical-design/

### Efecto del calor (cálculo ilustrativo)
Con celdas a ~60 °C en techo (35 °C sobre STC; ⚠️ valor típico, el cálculo térmico va en `04-tecnico-cientifico`):
- PERC (−0,35 %/°C): −12,3 % de potencia
- TOPCon (−0,29 %/°C): −10,2 %
- HJT/BC (−0,24/−0,26 %/°C): −8,4 % / −9,1 %

La diferencia TOPCon vs HJT (~2 puntos) vale ~2 % más de energía anual; a igual precio por W, HJT/BC conviene en Sabanalarga.

## 2. Potencias y formatos típicos (550–730 W)

- Los módulos de **600–730 W** (formatos 2.384 × 1.303 mm, ~38 kg) dominan las tiendas. Ejemplo JA Solar DeepBlue 4.0 715 W (Autosolar): eficiencia 23,0 %, Vmp 41 V, **Imp 17,44 A, Isc 20,03 A**, 2.384 × 1.303 × 33 mm, 38,2 kg, garantía de producto 12 años, resistente a niebla salina y amoníaco — https://autosolar.co/paneles-solares/panel-solar-bifacial-715w-deep-blue-40-n-type-ja-solar (consulta 28-oct-2026).
- Tensite 610 W bifacial: Imp 15,34 A, IP68 (descripción en kit Autosolar https://autosolar.co/kits-solares-red/kit-solar-ongrid-5000w-25620whdia-growatt).
- ⚠️ **Compatibilidad de corriente**: muchos inversores residenciales admiten 13–16 A por MPPT/string (p. ej. Deye SUN-5K-SG01LP1-US: 13+13 A por MPPT, ver `inversores.md`). Con módulos de 17–18 A de Imp habrá recorte (clipping) de corriente o habrá que usar inversores con entradas de 20–26 A. Para techos pequeños y fibrocemento, los módulos de **~580–630 W (Imp ~13–15 A, ~1,1 × 2,3 m, 28–33 kg)** suelen ser más manejables. Verificar Imp/Isc vs la entrada del inversor en el diseño.
- Formatos de 400–500 W (Qcells 490 W, Canadian 445 W) existen pero son 1,5–2,6 veces más caros por W.

## 3. Marcas Tier 1 (BNEF 3T-2026) y su presencia en tiendas colombianas

Lista BNEF Tier 1 3T-2026 (44 fabricantes, publicada 25-ago-2026), vía Vico Export https://www.vicoexport.com/en/?p=68446 (fuente secundaria ⚠️; BNEF advierte que Tier 1 indica bancabilidad, no calidad).

| Fabricante (Tier 1 3T-2026) | ¿Precio publicado en tienda colombiana (oct-2026)? | Dónde |
|---|---|---|
| Jinko Solar | Sí (Tiger Neo 590 W) | Solartex |
| LONGi | Sí (Hi-MO X10 650 W) | Solartex |
| Trina Solar | No encontrado en las tiendas revisadas ⚠️ | — |
| JA Solar | Sí (DeepBlue 4.0 620–720 W; 340 W PERC) | Autosolar |
| Canadian Solar | Sí (445 W PERC, caro) | Autosolar |
| Chint / Astronergy | Sí (TOPCon 620 W) | Solartex |
| Risen Energy | Sí (TOPCon 630 W, HJT 725 W) | Solartex (Autosolar lo lista sin precio) |
| ZNShine Solar | Sí (600–730 W) | Solartex, Homecenter |
| OSDA / Austa | Sí (630 W) | Solartex |
| Qcells | Sí (490 W) | Solartex |
| AESolar | Sí (630 W) | Solartex |
| ReneSola | Sí (730 W) — **retirada de la lista Tier 1 en 3T-2026** | Solartex |
| Tensite, Sylvania, Restar | No figuran en la lista Tier 1 consultada (marcas de distribuidor/OEM) ⚠️ | Autosolar (Tensite), Homecenter (Sylvania) |

## 4. Precios por W en tiendas colombianas (consulta 2026-10-28)

| Módulo | Tecnología | Precio COP (final) | COP/Wp | Tienda | URL |
|---|---|---|---|---|---|
| ZNShine 730 W HC BF DV | Mono bifacial vidrio-vidrio | 519.800 | **712** | Solartex | https://solartex.co/tienda/producto/panel-solar-monocristalino-730w-hc-bf-dv-znshine |
| ZNShine 650 W ZXNR-BD132 | Bifacial | 464.500 | 715 | Solartex | https://solartex.co/tienda/producto/panel-solar-monocristalino-650w-bifacial-zxnr-bd132-650-znshine |
| Sylvania T1 585 W | TOPCon bifacial | 444.900 (precio internet) | 761 | Homecenter | https://www.homecenter.com.co/homecenter-co/product/3071409 |
| ZNShine 650 WP bifacial | N bifacial | 499.900 (precio internet) | 769 | Homecenter | https://www.homecenter.com.co/homecenter-co/product/3093067 |
| JA Solar DeepBlue 4.0 715 W | N-type bifacial | 555.000 (con 17 % dcto.) | 776 | Autosolar | https://autosolar.co/paneles-solares/panel-solar-bifacial-715w-deep-blue-40-n-type-ja-solar |
| ZNShine 650 W HC N DV BF | N bifacial | 509.900 | 784 | Solartex | https://solartex.co/tienda/producto/panel-solar-monocristalino-650w-hc-n-dv-bf-znshine |
| OSDA 630 W | N-type bifacial | 506.100 | 803 | Solartex | https://solartex.co/tienda/producto/panel-solar-monocristalino-bifacial-n-type-630w-osda |
| Risen Hyper-link 725 W | HJT bifacial | 588.300 | 811 | Solartex | https://solartex.co/tienda/producto/panel-solar-bifacial-hyper-link-725-watts-risen |
| ZNShine 600 W HC N DV BF | N bifacial | 490.900 | 818 | Solartex | https://solartex.co/tienda/producto/panel-solar-monocristalino-600w-hc-n-dv-bf-znshine |
| LONGi Hi-MO X10 650 W (bifacial o monofacial) | HPBC 2.0 | 545.900 | 840 | Solartex | https://solartex.co/tienda/producto/panel-solar-monocristalino-650w-bifacial-hi-mo-x10-lr8-66hvd-650w-longi |
| Astronergy 620 W | TOPCon bifacial | 525.700 | 848 | Solartex | https://solartex.co/tienda/producto/panel-solar-monocristalino-bifacial-topcon-620w-astronergy |
| Risen 630 W | TOPCon bifacial | 541.000 | 859 | Solartex | https://solartex.co/tienda/producto/panel-solar-bifacial-topcon-tipo-n-630-watts-risen |
| JA Solar DeepBlue 4.0 625 W | N bifacial | 553.850 | 886 | Autosolar | https://autosolar.co/paneles-solares-24v/panel-solar-bifacial-625w-deep-blue-40-n-type-ja-solar |
| Tensite 710 W (unidad o pack) | N bifacial | 638.000 | 899 | Autosolar | https://autosolar.co/paneles-solares-24v/panel-solar-bifacial-710w-n-type-tensite |
| Tensite 620 W | N bifacial | 558.000 | 900 | Autosolar | https://autosolar.co/paneles-solares/panel-solar-bifacial-620w-n-type-tensite |
| JA Solar DeepBlue 4.0 720 W | N bifacial | 666.000 | 925 | Autosolar | https://autosolar.co/paneles-solares/panel-solar-bifacial-720w-deep-blue-40-n-type-ja-solar |
| Tensite 610 W | N bifacial | 570.452 | 935 | Autosolar | https://autosolar.co/paneles-solares-24v/panel-solar-bifacial-610w-n-type-tensite |
| JA Solar DeepBlue 4.0 620 W | N bifacial | 592.795 | 956 | Autosolar | https://autosolar.co/paneles-solares-24v/panel-solar-bifacial-620w-deep-blue-40-n-type-ja-solar |
| Jinko Tiger Neo 590 W | TOPCon | 567.200 | 961 | Solartex | https://solartex.co/tienda/producto/panel-solar-monoperc-tiger-neo-590-tipo-n-jinko |
| AE Solar 630 W | N bifacial | 626.600 | 995 | Solartex | https://solartex.co/tienda/producto/panel-solar-monocristalino-bifacial-tipo-n-630w-ae-solar |
| ReneSola 730 W | N bifacial | 734.400 | 1.006 | Solartex | https://solartex.co/tienda/producto/panel-solar-730wp-monocristalino-bifacial-tipo-n-renesola |
| Qcells DUO ML-G11.2 490 W | Monofacial | 567.200 | 1.158 | Solartex | https://solartex.co/tienda/producto/panel-solar-monofacial-duo-ml-g11-2-490-watts-qcells |
| JA Solar 340 W | PERC | 615.938 | 1.812 | Autosolar | https://autosolar.co/paneles-solares-24v/panel-solar-340w-24v-monocristalino-perc-ja-solar |
| Canadian Solar 445 W | PERC | 1.164.574 | 2.617 | Autosolar | https://autosolar.co/paneles-solares-24v/panel-solar-445w-24v-monocristalino-perc-canadian-solar |

**Rango de referencia oct-2026 para módulos ≥580 W N-type: 710 – 1.000 COP/Wp** (mediana ≈ 840 COP/Wp ≈ USD 0,26/Wp). Comparado con el FOB China (~0,109 USD/W ≈ 348 COP/W, jul-2026) el precio al público es ~2,0–2,9× (flete, nacionalización, distribución y margen).

Otras referencias: Solartex indica en su FAQ que los paneles de 500–730 W "cuestan entre unos $420.000 y $640.000 más IVA según marca" (https://solartex.co/tienda/paneles-solares, 28-oct-2026) — aunque en las fichas el panel aparece "Exento de IVA" ⚠️ incoherencia del sitio. Solartech (Bogotá) da 440.000–750.000 COP para 600–715 W bifacial tipo N (https://solartech.com.co/precios-paneles-solares-colombia/).

⚠️ Los precios publicados en línea pueden no reflejar disponibilidad real; varios tienen descuentos temporales. Pida cotización por volumen (8–16 módulos).

## 5. Garantías típicas
- Producto: 12 años (JA, Autosolar), 12–15 años (Risen), 25 años (Jinko Tiger Neo 3.0 según distribuidores), 15 años (LONGi X10 en algunos mercados).
- Potencia: 25–30 años lineal; ~87–90 % al año 30 en N-type.
- En Colombia la garantía se gestiona vía el distribuidor/importador: exigir factura, número de serie y certificado RETIE del producto (ver `inversores.md` §5 y `02-marco-legal-y-regulatorio`).

## 6. Recomendaciones de compra para Sabanalarga
1. Preferir N-type (TOPCon/HJT/BC) vidrio-vidrio con certificación de niebla salina (IEC 61701) y amoníaco (IEC 62716) — Sabanalarga está en el límite entre zona "altamente contaminada" y "contaminación normal" del mapa de Air-e (ver `estructuras-cableado-protecciones.md`).
2. Tier 1 BNEF + distribuidor local con respaldo de garantía.
3. Verificar compatibilidad Imp/Isc con el inversor y el peso/tamaño frente al tipo de techo (fibrocemento).
4. Comparar en COP/Wp, no por panel.
