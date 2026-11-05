# Tarifas de energía residencial – Air-e (Atlántico, incluye Sabanalarga)

> **[P]** fuente primaria · **[S]** secundaria · ⚠️ por verificar.
> Air-e publica **una sola tabla tarifaria** para Atlántico, Magdalena y La Guajira (mercado de comercialización Air-e). Las tarifas mensuales están en https://www.air-e.com/tarifas. Los PDF se descargan desde la API de su sitio (`apiweb.air-e.com/api/web/rates`) [P] [1].

## 1. Tarifa vigente: Octubre 2026 (COP/kWh) [P] [2]
**Nivel de tensión 1** (< 1 kV), que es el caso de casi todas las viviendas. La tarifa incluye subsidio o contribución. Consumo de subsistencia = **173 kWh/mes** (municipios por debajo de 1.000 m s. n. m.; Sabanalarga está a unos 100 m).

| Estrato | 0–173 kWh (activos del OR) | > 173 kWh (activos del OR) | 0–173 kWh (activos del cliente) | > 173 kWh (activos del cliente) | Subsidio (−) / contribución (+) implícita en 0–173 |
|---|---|---|---|---|---|
| 1 | **555,2485** | 936,3955 | 538,4619 | 915,2495 | −40,7 % |
| 2 | **694,0610** | 936,3955 | 673,0775 | 915,2495 | −25,9 % |
| 3 | **795,9362** | 936,3955 | 777,9621 | 915,2495 | −15,0 % |
| 4 | **936,3955** | 936,3955 | 915,2495 | 915,2495 | 0 % (tarifa plena = CU) |
| 5 y 6 | **1.123,6746** | 1.123,6746 | 1.098,2994 | 1.098,2994 | +20 % (contribución) |

- "Activos propiedad del OR" = el transformador y la red son de Air-e (caso típico). También hay columna de "propiedad compartida": e1 546,86 / e4 925,82. Revise en su factura qué columna le aplica.
- Los porcentajes de la última columna son cálculo propio (tarifa / CU − 1).

### Componentes del Costo Unitario (CU), oct-2026, Nivel 1 activos del OR [P] [2]
| G (generación) | T (STN) | PR (pérdidas) | D (distribución) | R (restricciones) | C (comercialización) | **CU** | COT* |
|---|---|---|---|---|---|---|---|
| 452,4845 | 49,6428 | 104,2761 | 118,7442 | 70,5642 | 140,6837 | **936,3955** | 7,2951 |

- *COT = componente de la **Opción Tarifaria** (CREG 119/2007 art. 11 par. 6, modificado por CREG 101 028/2023).
- **Cv** (componente variable de comercialización) = **133,3886 $/kWh**. Es lo que Air-e cobra por cada kWh acreditado (permutado) a un AGPE ≤ 100 kW (CREG 174 art. 25) [P] [2][7].
- Contribución estratos 5-6, comercial e industrial: **20 %**. Tarifa monomia horaria (doble o triple) solo para sector oficial y no residencial [P] [2].

## 2. Evolución reciente: estrato 4 = CU pleno, Nivel 1 activos del OR [P]
| Mes | Estrato 1 (0–173) | Estrato 2 (0–173) | Estrato 3 (0–173) | Estrato 4 / CU | Estrato 5-6 | Fuente |
|---|---|---|---|---|---|---|
| Ene-2024 | 466,23 | 582,78 | 990,73 | **1.165,56** | 1.398,68 | [3] |
| Ago-2024 | 488,30 | 610,38 | 911,87 | **1.072,78** | 1.287,34 | [3] |
| Feb-2025 | 504,35 | 630,43 | 801,94 | **943,46** | 1.132,15 | [3] |
| Oct-2025 | 522,42 | 653,02 | 676,54 | **795,93** | 955,11 | [3] |
| Ene-2026 | 525,14 | 656,43 | 676,54 | **795,93** | 955,11 | [3] |
| Jul-2026 | 550,1788 | 687,7240 | 756,7306 | **890,2712** | 1.068,3255 | [3] |
| **Oct-2026** | **555,2485** | **694,0610** | **795,9362** | **936,3955** | **1.123,6746** | [2] |

Lectura:
- El CU bajó de unos $1.166 (ene-2024) a **$795,93** (oct-2025), valor que se mantuvo hasta ene-2026. Luego **subió un 17,6 %** hasta $936,40 (oct-2026). En ene-2026 la generación era $317,97 y en oct-2026 $452,48.
- Las tarifas de **estratos 1 y 2** crecen gradualmente aunque el CU baje. El valor subsidiado sube por inflación mientras el subsidio porcentual se ajusta (en ene-2024 el estrato 1 pagaba el 40 % del CU; en oct-2025 el 65,6 %). La Ley 1117/2006 y sus prórrogas atan el aumento de las tarifas subsidiadas al IPC ⚠️ (norma no revisada en texto primario).
- Prensa de ene-2026: "Air-e mantendrá tarifas en 2026… $796/kWh" [S] [4]. Fue cierto solo para el primer trimestre. El Heraldo (sep-2026) reporta que el nuevo interventor quiere "detener el crecimiento de la tarifa" [S] [5].

## 3. Subsidios, contribuciones y consumo de subsistencia
- **Consumo de subsistencia:** **173 kWh/mes** por debajo de 1.000 m s. n. m. y 130 kWh/mes por encima (Res. UPME 355 de 2004; art. 87.3 Ley 142/1994) [P: documento CREG] [6].
- **Topes de subsidio** sobre el consumo de subsistencia: estrato 1 hasta **60 %**, estrato 2 hasta **50 %**, estrato 3 **15 %** [S] [6]. El consumo por encima de 173 kWh se cobra a **tarifa plena** (CU) en estratos 1-3 [P] [2].
- **Contribución** estratos 5-6: **+20 %** [P] [2].
- **Colombia Solar** (Decreto 972/2025) busca **sustituir** progresivamente el subsidio de estratos 1-3 por autogeneración solar, hasta el consumo de subsistencia. Ver `leyes-y-resoluciones.md` §2.3.

## 4. Opción tarifaria y crisis tarifaria del Caribe
- **Opción tarifaria (OT):** mecanismo de 2020 que difirió aumentos de tarifa. Los usuarios la pagan en el componente **COT**: $69,19/kWh en ene-2026 frente a $7,30/kWh en oct-2026 en la tabla de Air-e [P] [2][3]. ⚠️ No se encontró en fuente primaria la explicación de la caída del COT. Puede deberse a que se terminó de recuperar el saldo o a una decisión de la Nación.
- Según Asocodis, el pasivo nacional de la OT ronda **$4,5 billones**, y el gremio pidió definir el mecanismo para que **la Nación asuma** la deuda [S] La República [8]. ⚠️ No se confirmó el acto final.
- **Sobretasa a estratos 4, 5 y 6 para Air-e:** en abr-2026 MinEnergía anunció una resolución para cobrar unos **$8/kWh transportado** a estratos 4-6 de todo el país y recaudar unos **$235.000 millones** para la liquidez de Air-e [S] Portafolio 22-abr-2026; La República 24-abr-2026 [9]. ⚠️ **No se confirmó que la resolución se haya expedido** ni su fecha de inicio.
- **Contexto:** Air-e perdió buena parte de sus contratos de energía a fines de 2025, con riesgo de comprar más en bolsa. Se discutió que comprara directamente su demanda (Res. CREG 101 067/2024) [S] El Tiempo, Blu Radio [10]. La generación pasó de $317,97 a $452,48/kWh entre ene y oct-2026 [P] [2][3], lo que es consistente con ese riesgo.

## 5. Uso para el diseño (valor del kWh evitado)
| Perfil | Valor aproximado de 1 kWh evitado (oct-2026) |
|---|---|
| Estrato 4 (o cualquier estrato en el consumo > 173 kWh) | **$936/kWh** si es autoconsumo directo; **≈ $803/kWh** si es crédito de energía (CU − Cv) |
| Estrato 3 en el bloque 0–173 | $796/kWh |
| Estrato 1 en el bloque 0–173 | $555/kWh |
| Estrato 5-6 | $1.124/kWh |
| Excedente neto mensual (por encima de lo importado) | Precio mayorista **MCm** (o bolsa en transición), muy inferior al CU ⚠️ valor por consultar en XM |

Ejemplo de factura (solo el componente de energía, sin alumbrado público, aseo ni otros cobros), oct-2026, estrato 3, 300 kWh: 173 × 795,94 + 127 × 936,40 ≈ **$256.620**. Cálculo propio con [2].

**Conclusión de diseño:** el sistema rinde más cuando cubre el consumo **por encima de 173 kWh** (pagado a CU pleno) y cuando el usuario es estrato 4-6. Para estratos 1-2, la energía de subsistencia está subsidiada y el retorno es menor.

## Referencias
1. [P] Air-e, "Tarifas" y API pública de publicaciones tarifarias. https://www.air-e.com/tarifas ; https://apiweb.air-e.com/api/web/rates (consultado 2026-10-28)
2. [P] Air-e S.A.S. E.S.P. Intervenida, "Información de interés – Tarifas, Costo Unitario Octubre de 2026" (aviso publicado el 21-oct-2026). https://apiweb.air-e.com/api/uploads/08b7cd8d-7744-4ab7-ae91-1224158558f4.pdf
3. [P] Air-e, avisos tarifarios mensuales: ene-2024 https://apiweb.air-e.com/api/uploads/7dbd6a5a-ae1f-4d04-8b24-1a074a026087.pdf ; ago-2024 https://apiweb.air-e.com/api/uploads/7ec24611-5ef8-4187-b4b6-0b332f3880ae.pdf ; feb-2025 https://apiweb.air-e.com/api/uploads/b90e827d-2415-44cd-8579-9dc399a07ce0.pdf ; oct-2025 https://apiweb.air-e.com/api/uploads/753fbd27-3240-4ebc-b863-ace39600c0e6.pdf ; ene-2026 https://apiweb.air-e.com/api/uploads/dfd81665-ab9e-42d4-8080-7cf2df4cbec6.pdf ; jul-2026 https://apiweb.air-e.com/api/uploads/f56cc153-81a0-4afd-97c0-f6737e2b9d56.pdf
4. [S] Infobae, 9-ene-2026. https://www.infobae.com/colombia/2026/01/09/aire-e-mantendra-tarifas-de-energia-en-2026-para-atlantico-magdalena-y-la-guajira-esta-en-796-por-kilovatiohora/
5. [S] El Heraldo, 1-sep-2026. https://www.elheraldo.co/atlantico/2026/09/01/ramiro-castilla-sera-el-sexto-interventor-de-la-empresa-air-e/
6. [P] CREG, documento D-081-20 (consumo de subsistencia, cita la Res. UPME 355/2004). https://gestornormativo.creg.gov.co/Publicac.nsf/1c09d18d2d5ffb5b05256eee00709c02/9556f47aa83696120525857f0009b698/$FILE/D-081-20%20TARIFAS%20EN%20CONSUMO%20DE%20SUBSISTENCIA%20-%20MODIFICACION%20TEMPORAL.pdf ; [S] Infobae, 7-abr-2026 (porcentajes de subsidio): https://www.infobae.com/colombia/2026/04/07/que-estratos-tienen-derecho-a-subsidio-de-energia-electrica-en-2026-asi-puede-verificar-si-es-beneficiario/
7. [P] CREG 174/2021 art. 25 (texto modificado por CREG 101 072/2025). https://gestornormativo.creg.gov.co/gestor/entorno/docs/resolucion_creg_0174_2021.htm
8. [S] La República, "Recorte presupuestal inquieta a electrificadoras que esperan pago de opción tarifaria". https://www.larepublica.co/empresas/recorte-presupuestal-inquieta-a-electrificadoras-que-esperan-pago-de-opcion-tarifaria-3878293
9. [S] Portafolio, 22-abr-2026. https://www.portafolio.co/energia/saldra-la-resolucion-que-recaudara-235-000-millones-con-cobro-en-la-tarifa-de-energia-para-pagar-deuda-de-air-e-492498 ; [S] La República, 24-abr-2026: https://www.larepublica.co/economia/los-estratos-4-5-y-6-tendran-un-recibo-de-energia-mas-caro-por-una-nueva-sobretasa-4378441
10. [S] El Tiempo (contratos de Air-e). https://www.eltiempo.com/economia/sectores/tarifas-de-energia-en-atlantico-la-guajira-y-magdalena-podrian-subir-porque-air-e-perdera-la-mayoria-de-sus-contratos-en-diciembre-3494219 ; [S] Blu Radio: https://www.bluradio.com/regiones/caribe/air-e-contrataria-energia-de-manera-directa-para-garantizar-suministro-durante-2026-ex40
