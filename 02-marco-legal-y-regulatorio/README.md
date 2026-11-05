# 02 – Marco legal, regulatorio, trámites e incentivos

Proyecto: sistema FV residencial en **Sabanalarga, Atlántico** (10,632 N; −74,921 W). Operador de red: **Air-e S.A.S. E.S.P. Intervenida**.
Fecha de corte de la investigación: **2026-10-28**. Convención: **[P]** fuente primaria · **[S]** secundaria · ⚠️ por verificar.

## Índice
| Archivo | Contenido |
|---|---|
| [leyes-y-resoluciones.md](leyes-y-resoluciones.md) | Mapa de vigencia: Ley 1715/2099, PND y comunidades energéticas, Colombia Solar, CREG 174 y modificaciones 2025-26, RETIE 40117 → 40284/2026, PH, licencias, NSR-10 |
| [conexion-air-e-y-autogeneracion-CREG-174.md](conexion-air-e-y-autogeneracion-CREG-174.md) | Situación de Air-e, reglas AGPE (límites, crédito 1:1, medición), plazos, **paso a paso en el portal de Air-e** y **checklist de documentos** |
| [retie-ntc2050-seguridad-electrica.md](retie-ntc2050-seguridad-electrica.md) | Cuándo hay dictamen o solo declaración, certificación de productos, requisitos FV (NTC 2050 secciones 690/705), rayos (NTC 4552), competencias CONTE/COPNIA, viento NSR-10 |
| [incentivos-tributarios-upme.md](incentivos-tributarios-upme.md) | Deducción del 50 %, IVA, aranceles; certificado UPME (Res. 563/2026), tarifas, límite del art. 336 ET |
| [tarifas-energia-atlantico.md](tarifas-energia-atlantico.md) | Tarifas por estrato de Air-e (oct-2026 y serie 2024-2026), subsidios, opción tarifaria, crisis |
| [financiacion.md](financiacion.md) | Bancos, Findeter, FENOGE, Colombia Solar, PPA |

---

## Resumen ejecutivo: qué necesito legalmente para instalar en Sabanalarga

### A. Requisitos comunes (on-grid, híbrido y off-grid)
1. **RETIE** (Res. 40117/2024 modificada por **40284/2026**, vigente desde 1-jul-2026):
   - Productos con **certificado de conformidad**: paneles ≥ 100 W, inversor, baterías, controlador y cable solar.
   - Instalación ejecutada por una **persona competente** con matrícula: técnico electricista (CONTE) o ingeniero (COPNIA).
   - **Declaración de cumplimiento** firmada.
   - Si el sistema es **≥ 10 kVA**: además **diseño** + **dictamen de inspección** de un organismo acreditado por ONAC. Por debajo de 10 kVA conectado a red, la 40284/2026 lo **exime de la certificación plena**.
   - Placas y rotulado FV, desconexión, AFCI (≥ 80 V DC on-grid), puesta a tierra, DPS y **evaluación de riesgo por rayos** (NTC 4552 / IEC TR 63227).
2. **Sin licencia de construcción** si los paneles no alteran la estructura ni la forma del inmueble (reparación locativa, Decreto 1077/2015). Si se modifica la estructura, se necesita **licencia de modificación** ante Planeación o la curaduría [P] MinVivienda 2026. ⚠️ Confirmar con la Secretaría de Planeación de Sabanalarga.
3. **Propiedad horizontal:** autorización de la **asamblea**. La cubierta es un bien común esencial; puede requerir el **70 %** de coeficientes.
4. **Estructura:** verificar cargas de viento con la NSR-10 (Fig. B.6.4-1, modificada por el Decreto 1711/2021). ⚠️ No se obtuvo el valor oficial para Sabanalarga.

### B. On-grid o híbrido (conectado a Air-e): además
5. **Trámite AGPE ante Air-e** (CREG 174/2021 con modificaciones 2025-26). Es gratis, por el portal **servicios.air-e.com/CREG174/**:
   - Consulta de disponibilidad del transformador (solo con excedentes; límite del 50 %).
   - Formulario simplificado + documentos B, C, D, E, F y G.
   - Verificación (plazos teóricos de 2 a 5 días hábiles por etapa).
   - **Aprobación vigente 6 meses** (+3 de prórroga).
   - Instalación → RETIE → visita de Air-e en 5 días hábiles → medidor bidireccional.
6. **Elegir el régimen:**
   - **Con excedentes:** crédito **1:1** contra el consumo del mes, pagando solo Cv ≈ $133/kWh. El excedente neto se paga a precio mayorista (MCm, o bolsa en transición).
   - **Sin excedentes (cero inyección):** trámite más simple y sin límite de penetración.
7. Inversor certificado **UL 1741 o IEC 61727** (exigencia de Air-e), además de IEC 62109 y 62116 del RETIE.

### C. Off-grid puro (sin ningún vínculo con la red de Air-e)
8. **No hay trámite ante Air-e.** Aplica solo el RETIE (certificación plena si es ≥ 10 kVA). Si la casa conserva el servicio de Air-e y el sistema puede alimentar las mismas cargas, es "AGPE sin excedentes" y **sí** se tramita.

### D. Incentivos (opcionales, recomendables)
9. **Certificado UPME** (Res. 563/2026): radicación del 1-feb al 15-dic, respuesta en ≤ 30 días hábiles; tarifa desde $62.849 (inversión < $14,4 M). Permite comprar **sin IVA**. Si se pagó IVA, se puede pedir devolución hasta 5 años después.
10. **Deducción de renta del 50 %** de la inversión en 15 años: la DIAN confirma que aplica a paneles en vivienda, pero **está sujeta al tope de 40 % / 1.340 UVT** ($70,2 M en 2026) del art. 336 ET.

### E. Datos clave del entorno
- **Tarifa Air-e oct-2026 (Nivel 1, activos del OR):**
  - Estrato 1: **$555,25** · Estrato 2: **$694,06** · Estrato 3: **$795,94** por kWh (0–173 kWh).
  - Estrato 4 y consumo > 173 kWh: **$936,40/kWh**. Estratos 5-6: **$1.123,67/kWh**.
  - El CU subió **17,6 %** desde ene-2026 ($795,93).
- **Air-e** sigue **intervenida con fines liquidatorios** (Superservicios, desde sep-2024). Habrá traspaso a un nuevo operador, sin fecha. Tiene rezago histórico de solicitudes AGPE.
- **Colombia Solar** (Decreto 972/2025; Res. 40159/2026): paneles para estratos 1-3 como sustituto del subsidio. Es focalizado y los equipos son del comercializador; arrancó en Barranquilla.
- La **ventanilla única nacional** (UPME) para conexiones AGPE estaba en pruebas (Circular 087, ago-2026).

### F. Principales incertidumbres ⚠️
- Si Air-e ya acepta la exención de dictamen para sistemas < 10 kVA (su cartilla es anterior a la 40284/2026).
- Qué valoración aplica a los excedentes netos de un AGPE nuevo (MCm o bolsa) e interacción del crédito con el subsidio de estratos 1-3.
- Sobretasa de ~$8/kWh a estratos 4-6 para Air-e: anunciada en abr-2026, sin confirmar expedición.
- Velocidad de viento NSR-10 y densidad de rayos para Sabanalarga; costos del dictamen RETIE; líneas bancarias verdes para hogares.
