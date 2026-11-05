# Conexión con Air-e y régimen de autogeneración (CREG 174 de 2021)

> Aplica a un sistema **on-grid o híbrido** (conectado a la red de Air-e). Un sistema **off-grid puro** (sin conexión a la red) no hace este trámite: ver §8.
> **[P]** fuente primaria · **[S]** secundaria · ⚠️ por verificar.

## 1. El operador de red: Air-e S.A.S. E.S.P. (Intervenida)

| Hecho | Detalle | Fuente |
|---|---|---|
| OR y comercializador incumbente en Atlántico, Magdalena y La Guajira | Air-e S.A.S. E.S.P. Intervenida. Sede en Cra 57 No 99A-65, Barranquilla. Línea 115, PBX Atlántico (605) 361 1000 | [P] air-e.com [1] |
| Toma de posesión | Res. SSPD-20241000531665 del **11-sep-2024** | [S] Noticias RCN [11] |
| Modalidad liquidatoria | Res. SSPD 20251000004725 del **9-ene-2025** según prensa y firmas. Air-e dice que la finalidad de liquidación quedó "definida desde febrero de 2025" ⚠️ | [S] Pérez Llorca, El Universal [12]; [S] El Tiempo [13] |
| Estado a oct-2026 | Sigue operando como "Air-e Intervenida". La empresa dice que antes de cerrar la liquidación el servicio pasará a un **nuevo operador**. No se conoce el operador ni la fecha. Las tarifas no cambian por la liquidación | [S] El Tiempo, 17-jun-2026 [13] |
| Interventor actual | **Ramiro Castilla Andrade** (posesionado ~1-sep-2026). Es el sexto agente especial tras Diago, Palma, Bustamante, Vásquez y Mesa | [S] El Heraldo, 1-sep-2026 [14] |
| Cambio de nombre | **No hay cambio de nombre ni de operador** confirmado al 28-oct-2026 | — |
| Control | La Procuraduría pidió cuentas en may-2026 ("no se evidencian resultados estructurales") | [S] Procuraduría / El Tiempo [15] |

**Rezago de solicitudes de autogeneración:** en may-2025 Air-e Intervenida dijo que había asumido **1.989 solicitudes** de AGPE/GD: 487 finalizadas y 1.502 en proceso. Añadió 500 solicitudes nuevas con respuesta formal, 23 personas más en Nuevas Conexiones, unos 1.200 usuarios conectados y unos 70 MW conectados durante la intervención [S] Valora Analitik, 2-may-2025 [16]. ⚠️ No hay estadísticas públicas de tiempos reales en 2026. Hay que contar con la posibilidad de demoras mayores que los plazos regulatorios.

## 2. Clasificación y reglas de fondo (CREG 174/2021, texto compilado) [P] [2]

- **AGPE (autogenerador a pequeña escala):** capacidad instalada o nominal ≤ **1 MW** (Res. UPME 281/2015). Con inversores, la capacidad es la **suma de las potencias AC nominales de los inversores**. Puede ser persona natural.
  - Subgrupos: **≤ 100 kW** (procedimiento simplificado, sin estudio de conexión) y **> 100 kW a 1 MW** (con estudio de conexión simplificado).
- **Con o sin entrega de excedentes:** el AGPE **sin excedentes** (cero inyección) también hace el trámite. Es más corto y no le aplican los límites de penetración (art. 6 par. 1). Basta con el inversor con función de cero inyección o un relé de potencia inversa (Anexo 5, num. 2.d).

### 2.1 Límites de penetración en la red de baja tensión (art. 6, nivel de tensión 1)
Aplican solo si **se entregan excedentes** [P] [2]:
1. La suma de la potencia máxima declarada de todos los GD/AGPE con excedentes en el mismo circuito o transformador de NT1 debe ser **≤ 50 % de la capacidad nominal del transformador** (kVA, con fp = 1).
2. Para **FV sin almacenamiento**, la energía horaria entregada por todos no debe superar el **50 % del promedio anual de las horas de mínima demanda diaria entre 6 a.m. y 6 p.m.** del año anterior.
3. Para otras tecnologías (p. ej., **FV con baterías**), el mismo 50 % se calcula sobre la mínima demanda diaria **de todo el día**.
4. Si el OR no tiene información, **debe aceptar** la conexión (par. 2). Si no hay disponibilidad, se sigue el art. 17.

Air-e muestra la disponibilidad con un **semáforo**: verde = disponible; amarillo-naranja = en el límite, puede requerir modificaciones; rojo = sin disponibilidad. La consulta se hace con el **NIC (número de cuenta)** o el **código del transformador** que aparece en la factura [P] Air-e, cartilla [3].

### 2.2 Tratamiento de excedentes (arts. 23 y 25, modificados por CREG 101 072/2025) [P] [2]
Para un **AGPE con FNCER ≤ 100 kW** que vende al comercializador que lo atiende (Air-e):
- **Crédito de energía (permuta 1:1):** al cierre de cada periodo de facturación, los excedentes acumulados **hasta igualar la importación** se **permutan kWh por kWh** contra la energía importada. Por cada kWh permutado el comercializador cobra **solo el componente de comercialización Cv** (Res. CREG 119/2007).
  - En la tarifa de Air-e de **oct-2026**, Cv = **$133,3886/kWh** [P] [5].
  - Para un usuario a tarifa plena (estrato 4), un kWh acreditado ahorra ≈ CU − Cv ≈ 936,40 − 133,39 ≈ **$803/kWh** (cálculo propio con [5]).
  - ⚠️ No se confirmó cómo se combina con el subsidio de subsistencia en estratos 1-3. Hay que preguntarlo a Air-e.
- **Excedentes netos** (lo que supera la importación del mes): se liquidan a la variable **MCm** (art. 6 Res. CREG 119/2007; la publica el ASIC/XM). Desde la CREG 101 097/2026 tiene tope cuando supera el precio de escasez de activación.
  - **Transición:** los AGPE con contratos vigentes **siguen a precio de bolsa** hasta que la CREG expida la metodología de traslado al MCm (parágrafo modificado por CREG 101 087/2025).
  - ⚠️ No es claro qué valoración aplica Air-e a un AGPE nuevo en 2026 (MCm o bolsa). Hay que pedirla por escrito en el contrato o acuerdo especial (Res. CREG 135/2021).
- Para AGPE **> 100 kW**, por el kWh permutado se cobran T + D + Cv + PR + R, no solo Cv.
- Alternativa: vender a otro comercializador o generador a precio pactado. Esa energía se destina a usuarios no regulados (art. 23 num. 2a).
- **Factura:** el comercializador debe detallar importaciones, excedentes, créditos y valoración (art. 26).

**Implicación de diseño:** como el crédito se compensa **por periodo de facturación (mensual)** y el excedente neto se paga a precio mayorista (muy inferior al CU), conviene dimensionar el sistema **para no superar el consumo mensual**. El excedente neto rinde poco.

### 2.3 Medición (art. 19) [P] [2]
- **AGPE sin excedentes:** no debe cambiar el medidor hasta que entre en el plan de AMI.
- **AGPE con excedentes:** frontera de generación según el Código de Medida (CREG 038/2014), **sin** medidor de respaldo, **sin** verificación inicial por firma y **sin** reporte de lecturas al ASIC si vende al comercializador integrado. No se le puede exigir telemedición si no es obligatoria.
- En la práctica se exige un **medidor bidireccional** que registre **cada hora** la energía importada y la exportada por separado [P] Air-e cartilla [3].
- Air-e pide **certificado de conformidad de producto y certificados de calibración vigentes** del medidor cuando se cambia. Su portal incluye un subproceso "**Equipo de medida – En laboratorio**": el cliente envía el medidor, el módem y la antena al laboratorio de Air-e [P] [3][4].

### 2.4 Pruebas en sitio (art. 12 lit. b) [P] [2]
- **< 10 kW:** el OR solo hace inspección visual o de verificación de los parámetros declarados, la configuración de inversores y el esquema de protecciones.
- **10–100 kW:** además, pruebas de protecciones y del tiempo de reconexión según el Acuerdo CNO.
- Debe cumplirse el **Acuerdo de Protecciones del CNO**. Air-e publica los Acuerdos CNO 1862, 1522 y 1549 como anexos [P] [1]. ⚠️ No se verificó si hay un acuerdo CNO más reciente que los reemplace.

## 3. Plazos regulatorios (Anexo 5 CREG 174) [P] [2][3]

| Etapa | Quién | AGPE ≤ 100 kW **con** excedentes (NT1) | AGPE **sin** excedentes < 10 kW | AGPE sin excedentes 10–100 kW |
|---|---|---|---|---|
| Revisión de completitud | OR | 2 días hábiles | 2 | 2 |
| Subsanación | Usuario | 5 | 5 | 5 |
| Revisión tras subsanación | OR | 2 | 2 | 2 |
| Verificación técnica | OR | 5 | 3 | 5 |
| Subsanación técnica | Usuario | 5 | 5 | 5 |
| Revisión tras subsanación | OR | 5 | 2 | 3 |
| Visita de energización tras solicitar entrada en operación | OR | 5 días hábiles (aviso con 2 días) | 5 (+7 si hay reajustes) | idem |
| Vigencia de la aprobación | — | **6 meses**, prorrogables **3 meses** sin costo (pedir ≥ 1 mes antes) | idem | idem |

- Teórico total para una casa: **≈ 2–5 semanas** de trámite, más la obra. La solicitud **no tiene costo**. La **primera visita es gratis**. Visitas adicionales pueden costar lo equivalente a una conexión (CREG 225/1997), cobrables en la factura [P] [2].
- El OR **no puede pedir documentos adicionales** a los listados. La subsanación se pide **una sola vez**. Si el usuario no subsana todo, se entiende que **desistió** y puede radicar de nuevo cuando quiera [P] [2].

## 4. Paso a paso con Air-e (AGPE residencial ≤ 100 kW)

**Paso 0. Antes de comprar equipos**
1. Revise la factura: **NIC**, **estrato**, **código del transformador** y nivel de tensión. Casi todas las casas son NT1, "activos propiedad del OR".
2. Defina: ¿**con** excedentes (crédito 1:1) o **sin** excedentes (cero inyección)? ¿Habrá baterías (híbrido)?
3. Si es PH, obtenga la autorización de la asamblea (ver `leyes-y-resoluciones.md` §2.6).

**Paso 1. Consulta de disponibilidad (solo con excedentes)**
- En https://www.air-e.com/autogeneracion → "Consulta disponibilidad" → portal **https://servicios.air-e.com/CREG174/** [P] [1][4].
- Descargue el **archivo de resultado** (PDF/JPG). Es el documento tipo **E**.
- ⚠️ La página de Air-e anunció una "ventana de mantenimiento del 18 al 27 de agosto" (año no indicado).

**Paso 2. Radicación en el "Portal de Solicitudes de Autogeneración" (Kairos)**
- Se radica en https://servicios.air-e.com/CREG174/. Las etapas siguientes (subsanar, cargar documentos, prórroga, ver estado) se hacen **con los botones de los correos de notificación**, con el número de radicado [P] Manual Kairos, ago-2026 [4].
- El correo **autogeneracionygd@air-e.com** solo atiende **consultas ajenas** al trámite [P] [4].
- Archivos: PDF, JPG, PNG, DOC o DOCX de máximo **10 MB** cada uno. **No** acepta ZIP/RAR ni enlaces externos [P] [4].
- Se diligencia el **Formato simplificado de solicitud de conexión** (Anexo 3 de Air-e) con el instructivo (Anexo 1) [P] [6].

**Paso 3. Completitud → Verificación técnica**
- Estados en el portal: "Pendiente documentación cliente" → "En estudio" → "**Conforme**" o "No conforme" [P] [4].
- En "En estudio" el portal permite **cargar por anticipado** los documentos de la visita.

**Paso 4. "Conforme" = aprobación**
- Descargue la **carta de conformidad**. Desde ahí corre la vigencia de **6 meses**.
- Instale el sistema dentro de ese plazo. Si va a necesitar prórroga, solicítela con el botón "Solicitar Prórroga".

**Paso 5. Requisitos para la visita (puesta en servicio)**
- **Certificación RETIE**: dictamen de inspección + declaraciones de cumplimiento (ver §5).
  - ⚠️ La Res. 40284/2026 eximió de dictamen a los AGPE < 10 kVA sin diseño. La cartilla de Air-e es anterior y aún pide "dictamen de inspección y declaración de cumplimiento". Confirme con Air-e qué aceptará.
- Medidor bidireccional con certificado de producto y de calibración.
- Subproceso de **facturación**: Air-e emite una factura (p. ej., revisión o calibración del medidor), el usuario paga y **carga el soporte**. Luego viene el envío del medidor al laboratorio, si aplica [P] [4]. ⚠️ El valor no se publica en el manual.

**Paso 6. Visita de conexión y energización**
- Air-e debe presentarse en **5 días hábiles** desde la solicitud de entrada en operación. Si hay ajustes, hace una segunda visita sin costo en **7 días hábiles** [P] [3].

**Paso 7. Contrato / acuerdo especial**
- **Contrato de conexión** (Anexo 2 Air-e) y acuerdo especial de excedentes (Res. CREG 135/2021) [P] [1][2]. Air-e también publica una "**Minuta Contrato de Respaldo 2025**" (Anexo 10). ⚠️ No se pudo descargar (el enlace devolvió HTML) y no se sabe si aplica a AGPE residenciales.

**Si se modifica un sistema existente** (más paneles, baterías): hay que **repetir el procedimiento** e informar que ya existe un sistema [P] [3].

## 5. Checklist de documentos (AGPE ≤ 100 kW)

Documentación "tipo" según art. 14 CREG 174 (texto vigente modificado por CREG 101 113/2026 ⚠️ número) y la cartilla de Air-e [P] [2][3].

| # | Documento | Con excedentes | Sin excedentes | Notas |
|---|---|---|---|---|
| B | **Formulario de conexión simplificado** (Anexo 3 Air-e) | ✅ | ✅ | NIC, cédula, coordenadas WGS84, código del transformador, potencia y número de paneles, kWdc, kWac, número de inversores, fabricante y modelo, **UL 1741-2010 o IEC 61727-2004** (si no, rechazo), relé de flujo inverso, baterías (kW/kWh) |
| C | **Certificado de capacitación o experiencia** del instalador o empresa (≥ 1 año de experiencia específica o curso en la tecnología) | ✅ | ✅ | Transitoriamente: certificado de institución educativa, educación no formal o experiencia certificada por empresa |
| D | **Manual del dispositivo que controla la inyección** (cero o nivel fijo) | Solo si se limita la inyección | ✅ obligatorio | Si el inversor tiene la función, basta su manual. Con baterías: explicar el control y demostrar que no se supera la potencia máxima declarada |
| E | **Archivo de consulta de disponibilidad de red** (portal Air-e) | ✅ (NT1) | ❌ | |
| F | **Certificado de producto del inversor** (organismo acreditado con reconocimiento internacional) | ✅ | ✅ | Según el RETIE: certificado de conformidad (IEC 62109-1/-2, IEC 62116, UL 1741) |
| G | **Diagrama unifilar** + esquema de **puesta a tierra** y **protecciones** + **distancias de seguridad** a redes existentes + **cuadro de cargas** | ✅ | ✅ | |
| — | Cédula del titular, factura reciente | ✅ | ✅ | La cuenta debe ser definitiva, no provisional de obra |
| — | Para la visita: **certificación RETIE** (declaraciones de cumplimiento de diseño y construcción + dictamen de inspección cuando aplique) | ✅ | ✅ | Ver `retie-ntc2050-seguridad-electrica.md` |
| — | Para la visita: **certificado de producto y calibración del medidor** (si se cambia) | ✅ | — | |
| — | Autorización de la asamblea (PH) | si aplica | si aplica | No la exige la CREG; es una obligación civil |

## 6. Problemas conocidos y recomendaciones
- **Rezago y cambios de interventor** (6 interventores en 2 años): guarde todos los radicados y correos. Si hay incumplimiento de plazos, puede presentar un PQR ante Air-e y luego queja ante la **Superservicios**. La SSPD audita los sistemas de trámite (art. 11) [P] [2].
- **Cartilla desactualizada:** la guía de Air-e menciona URLs antiguas (`/nuestra-empresa/normatividad/...`) que hoy redirigen a `/autogeneracion` [P] [3].
- **Ventanilla única UPME:** al lanzarse, las solicitudes nuevas se harán allí y el sitio del OR redirigirá (CREG 174 art. 10). A ago-2026 estaba en pruebas [P] [7].
- **Transformadores saturados** (semáforo rojo): opte por **cero inyección** (no le aplican los límites del art. 6) o por un sistema con baterías y control de exportación.
- **Liquidación de Air-e:** el contrato y los créditos de energía deberían pasar al nuevo operador por la continuidad del servicio. ⚠️ No hay reglas publicadas sobre cómo se trasladarán los AGPE.

## 7. Sistemas híbridos (con baterías)
- Se tramitan igual (AGPE). La capacidad a declarar depende del **recurso primario de generación**: las baterías **no** aumentan la capacidad solicitada. Se debe demostrar el control para no superar la potencia máxima declarada [P] art. 14, documento D [2].
- Hay un campo adicional para **pruebas del sistema de almacenamiento** (art. 14, modificado por "CREG 101 113 de 2026" ⚠️ número por verificar) [P] [2].
- Para el límite de penetración, la FV con baterías se evalúa con la regla de **24 h** (art. 6 lit. b), no la de 6-18 h.

## 8. Sistemas off-grid
- Un sistema **sin ningún punto de conexión** con la red de Air-e no es AGPE conectado al SIN y **no requiere trámite ante el OR**.
- Si la casa sigue con servicio de Air-e y el sistema puede alimentar las mismas cargas mediante una transferencia (aunque no exporte), es **autogeneración sin entrega de excedentes** y debe hacer el trámite (art. 5).
- El RETIE aplica siempre. La autogeneración no conectada ≥ 10 kVA requiere **certificación plena** (ver archivo RETIE).

## Referencias
1. [P] Air-e, "Autogeneración y Generación Distribuida" (página y anexos 1-11). https://www.air-e.com/autogeneracion (consultado 2026-10-28)
2. [P] CREG, Res. 174 de 2021, texto compilado con modificaciones (CREG 101 072/2025, 101 087/2025, 101 097/2026, 101 099/2026, 101 113/2026). https://gestornormativo.creg.gov.co/gestor/entorno/docs/resolucion_creg_0174_2021.htm
3. [P] Air-e, "Cartilla AGPE, AGGE y GD – Resolución CREG 174 de 2021". https://www.air-e.com/assets/documents/autogeneracion/cartilla_de_informacion.pdf
4. [P] Air-e Intervenida Superservicios, "Manual de usuarios – clientes externos, Portal Kairos", v1.0, ago-2026. https://www.air-e.com/assets/documents/autogeneracion/Manual%20Usuario_Portal_Kairos_clientes_externos_24.08.2026_Air-e-2.pdf
5. [P] Air-e, publicación de tarifas, Costo Unitario Octubre 2026. https://apiweb.air-e.com/api/uploads/08b7cd8d-7744-4ab7-ae91-1224158558f4.pdf
6. [P] Air-e, Anexo 1 (instructivo) y Anexo 3 (formato simplificado). https://www.air-e.com/assets/documents/autogeneracion/anexo_1.pdf ; https://www.air-e.com/assets/documents/autogeneracion/anexo_3.pdf
7. [P] UPME, Circular 087 de 2026-08-24 (ventanilla única en pruebas). https://docs.upme.gov.co/Normatividad/Circular_087_2026.pdf
8. [P] Res. CREG 135 de 2021 y 038 de 2014 (citadas en [2]).
9. [P] Res. CREG 101 072 de 2025. https://gestornormativo.creg.gov.co/gestor/entorno/docs/originales/Resoluci%C3%B3n_CREG_101_072_2025/Resoluci%C3%B3n_CREG_101_072_2025.pdf
10. [S] Enel Colombia, guía AGPE 2026 (para comparar con otro OR). https://www.enel.com.co/content/dam/enel-co/espa%C3%B1ol/personas/1-11-9-resoluci%C3%B3n-creg-174-del-2021/guia-de-agpe-dg-y-agge-2026.pdf
11. [S] Noticias RCN, "Superservicios tomó posesión de Air-e" (sep-2024). https://www.noticiasrcn.com/colombia/superservicios-tomo-posesion-de-air-e-en-barranquilla-747544
12. [S] Pérez Llorca, boletín sobre modalidad de toma de posesión (ene-2025). https://www.perezllorca.com/es-co/actualidad/boletin/la-superintendencia-de-servicios-publicos-domiciliarios-determino-la-modalidad-de-toma-de-posesion-de-la-empresa-air-e-sas-esp/ ; [S] El Universal, 9-ene-2025: https://www.eluniversal.com.co/colombia/2025/01/09/superservicios-toma-control-de-air-e-inicia-proceso-de-liquidacion/
13. [S] El Tiempo, "Air-e aclara que su proceso de liquidación está definido desde 2025…", 17-jun-2026. https://www.eltiempo.com/amp/economia/sectores/air-e-aclara-que-su-proceso-de-liquidacion-esta-definido-desde-2025-y-garantiza-la-continuidad-del-servicio-3565075
14. [S] El Heraldo, "Ramiro Castilla será el sexto interventor de Air-e", 1-sep-2026. https://www.elheraldo.co/atlantico/2026/09/01/ramiro-castilla-sera-el-sexto-interventor-de-la-empresa-air-e/
15. [P] Procuraduría. https://www.procuraduria.gov.co/Pages/procuraduria-pide-cuentas-superservicios-air-e-tras-intervencion-electrificadora.aspx ; [S] El Tiempo: https://www.eltiempo.com/colombia/barranquilla/procuraduria-pondra-la-lupa-sobre-los-seis-interventores-de-air-e-busca-establecer-si-la-intervencion-termino-agravando-la-crisis-de-la-empresa-3579948
16. [S] Valora Analitik, "¿Cómo va la gestión de Air-e para agilizar conexión de proyectos de autogeneración?", 2-may-2025. https://www.valoraanalitik.com/como-va-la-gestion-de-air-e-para-agilizar-conexion-de-proyectos-de-autogeneracion-de-energia/
