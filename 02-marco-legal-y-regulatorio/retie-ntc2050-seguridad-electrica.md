# RETIE, NTC 2050, protección contra rayos y estructura

> **[P]** fuente primaria · **[S]** secundaria · ⚠️ por verificar.
> Texto base: RETIE adoptado por la Res. MinEnergía 40117 de 2024, según el **texto compilado con las modificaciones de la Res. 40284 de 2026** (D.O. 53.539, 1-jul-2026) [1].

## 1. Qué RETIE aplica a mi obra
| Situación | Reglamento aplicable | Fuente |
|---|---|---|
| Obra iniciada **antes del 1-ene-2026** (con acta o contrato firmado con fecha exacta) | Puede demostrar conformidad con la Res. 90708/2013, usando los **formatos nuevos** de dictamen con nota en la sección f | [P] Res. 40284/2026 [1] |
| Obra iniciada **desde el 1-ene-2026** | **Res. 40117/2024 modificada por 40284/2026** | [P] [1][2] |
| Productos | Desde el 1-ene-2026 no hay procesos nuevos bajo la 90708. Los productos ya certificados bajo la 90708 pueden instalarse | [P] [1] |

## 2. ¿Necesito diseño, dictamen o solo declaración? (casa unifamiliar)

### 2.1 Diseño (art. 3.3.1, Libro 3)
- Requieren **diseño** (elaborado por un profesional según su matrícula) los "procesos de generación con FNCER con **capacidad instalable ≥ 10 kVA**" (lit. j) y las instalaciones básicas individuales > 15 kVA (lit. q) [P] [1].
- Por debajo de esos umbrales, una vivienda uni o bifamiliar de **≤ 15 kVA y ≤ 240 V** puede construirse con un **esquema constructivo** elaborado por un **técnico electricista** con matrícula (la Res. 40304/2025 mencionaba matrículas **TE-1 y/o TE-4**) [P] [1][2].
- ⚠️ No se confirmó en el texto 40284 si un SSFV < 10 kVA puede ir solo con esquema constructivo o requiere diseño básico. El art. 3.3.1 lo sugiere, pero conviene confirmarlo con el organismo de inspección.

### 2.2 Certificación plena (= declaraciones de cumplimiento + dictamen de inspección) — art. 4.3.2 [P] [1]
Requieren certificación plena, entre otras:
- **(h)** Instalaciones de **AGPE, FNCER y generación distribuida** con **capacidad instalable ≥ 10 kVA** que **se conecten a la red** para entregar excedentes.
- **(i)** **Autogeneración asociada al uso final que NO se conecta a la red** (off-grid) con capacidad **≥ 10 kVA**.
- **(c)** Residencias con capacidad individual > 15 kVA.

**Res. 40284/2026:** las instalaciones de autogeneración conectadas a la red **< 10 kVA** que no requieran diseño **quedan exentas de certificación plena**. Deben cumplir los requisitos técnicos y ser ejecutadas por personas competentes [P] [1].
**Art. 4.3.5:** las instalaciones exentas de dictamen **no** se libran de la **Declaración de Cumplimiento** firmada por la persona competente responsable del diseño y la construcción [P] [1].

### Resumen práctico
| Sistema en la casa | Documentos RETIE |
|---|---|
| On-grid/híbrido **< 10 kVA** (p. ej., inversor de 5 o 8 kW) | Declaración de cumplimiento de construcción (y de diseño, si hubo diseño). Formatos de los arts. 4.3.6.1 y 4.3.6.2. ⚠️ Air-e todavía cita "dictamen de inspección" en su cartilla |
| On-grid/híbrido **≥ 10 kVA** | Diseño + declaraciones de diseño y construcción + **dictamen de inspección** de un organismo de inspección **acreditado por ONAC** (ISO/IEC 17020) |
| Off-grid **≥ 10 kVA** | Igual que la fila anterior |
| Off-grid **< 10 kVA** | Declaración de cumplimiento |

- La **declaración de cumplimiento** se firma **bajo juramento**. Incluye la matrícula profesional, el consejo que la expide y la constancia de que los productos tienen **certificado de conformidad** verificado contra lo instalado [P] art. 4.3.6 [1].
- El **dictamen de inspección** lo emite un **Organismo de Inspección** acreditado por **ONAC** bajo ISO/IEC 17020. El OR **no debe aceptar dictámenes con alcances parciales** [P] [1].
- **Costo del dictamen:** no hay tarifa oficial; cada organismo fija su precio [S] [8]. ⚠️ No se encontraron cifras confiables para el Atlántico en 2026. Pida al menos 3 cotizaciones (directorio ONAC: https://onac.org.co).

## 3. Certificación de productos (Libro 2) [P] [1]
Todo producto del RETIE debe tener **certificado de conformidad** de un organismo de certificación acreditado (ISO/IEC 17065), o de uno extranjero con reconocimiento multilateral, o declaración del proveedor cuando se permite (art. 4.1.2). Para un SSFV:

| Producto | Artículo RETIE | Normas de referencia | Requisitos destacados |
|---|---|---|---|
| **Paneles FV** (≥ 100 W) | 2.3.25 | IEC 61215, IEC 61730-1/-2, IEC 61701 (niebla salina), NTC 5899-1/-2, NTC 2883, UL 1703 | Diodos bypass. Ensayo de carga mecánica por **viento**. Calor húmedo ("trópico húmedo"). Granizo. Si se declara apto para salinidad, ensayo IEC 61701 (**relevante a 30 km del mar**, como Sabanalarga) |
| **Inversores** | 2.3.23 | IEC 62109-1, IEC 62109-2, **IEC 62116** (anti-isla), **UL 1741** | Eficiencia ≥ 90 %. Inyección de DC ≤ 1 % de la corriente nominal. **fp > 0,9** si opera por encima del 50 % de potencia. Rango de frecuencia según CREG/CNO. Marcado permanente |
| **Baterías** | 2.3.3 | IEC 61427-1/-2, IEC 62619, IEC 62133, UL 1973, UL 9540, entre otras | Eficiencia ≥ 75 % (plomo) y ≥ 90 % (otras químicas). Rotulado (Ah/kWh, tensión, fecha) |
| **Reguladores / controladores de carga** | 2.3.28 | IEC 62109-1, UL 1741 | Protección contra sobrecarga y descarga profunda. Bloqueo de corriente inversa nocturna |
| **Cables para energía renovable** | 2.3.10.7 | IEC 62930, UL 4703, UNE-EN 50618, NTC 6404 | Cable "solar" certificado |

Air-e además exige que el inversor cumpla **UL 1741-2010 o IEC 61727-2004** (o superiores), alineadas con IEEE 1547. Si no los cumple, rechaza la solicitud [P] Air-e, Anexo 3 [3].

## 4. Requisitos de instalación de un SSFV (art. 3.17.23 y otros) [P] [1]
Lista resumida de obligaciones del RETIE vigente. Las referencias a la **NTC 2050 Segunda Actualización** son del propio RETIE:
1. **Placa de identificación** en la zona de desconexión que indique que hay generación FV, con: tensión nominal, potencia máxima AC, tensión máxima DC y corriente máxima DC.
2. Canalizaciones, cajas y conduits con DC rotulados "**ADVERTENCIA: FUENTE DE ALIMENTACIÓN FOTOVOLTAICA**" (NTC 2050 sec. **690.31(G)(4)**).
3. **Medio de desconexión** del sistema FV fácilmente accesible (sec. **690.13**). Seccionamiento simultáneo de todas las fuentes (inversor, baterías, controladores).
4. Conectores **MC4 o equivalentes** (familia IEC 60998), polarizados y con bloqueo.
5. Los circuitos FV **no comparten** canalización ni cajas con circuitos no FV. Los circuitos DC **dentro de la edificación** van en **canalización metálica** o cable MC.
6. Evitar **corrientes inversas** entre strings, con fusibles o diodos si es necesario. Protección de sobrecorriente según sec. **690.9**.
7. **AFCI (protección contra falla de arco FV)** obligatoria en sistemas interactivos on-grid que operan a **≥ 80 V DC**. Puede venir integrada en el inversor.
8. **Evaluación del riesgo por rayos** de los paneles en cubierta según el **Título 13 del Libro 3** y la **IEC TR 63227 / GTC-IEC-TR 63227**.
9. La estructura **no debe dañar la edificación**. El diseño debe prever **accesos y pasillos seguros** para montaje, inspección y mantenimiento.
10. No instalar módulos con fisuras o defectos.
11. **Puesta a tierra:** partes metálicas (marcos, estructuras) puestas a tierra con conductor y un punto equipotencial común. El conductor de tierra de equipos FV debe ser de **cobre**, dimensionado según sec. **690.45**. Si se requiere electrodo DC, sec. **690.47**.
12. **DPS:** coordinación según **IEC 61643-32** (FV) e IEC 61643-12 (AC). Si el inversor tiene protecciones internas contra sobretensión, no es obligatorio poner DPS externos, salvo que el análisis de riesgo lo exija.
13. **Interconexión:** el punto de conexión de la fuente interconectada sigue la sec. **705.12 (A) o (B)**. Se rotula el medio de desconexión según la sec. **705.10**.
14. **Código de colores DC** (Tabla 3.5.b). En FV depende de si el inversor tiene transformador de aislamiento.

## 5. NTC 2050
- El RETIE vigente cita la **"NTC 2050 Segunda Actualización"** (ICONTEC) como norma de instalación para FV (secciones 690.9, 690.13, 690.31, 690.45, 690.47) e interconexión (705.10, 705.12) [P] [1].
- ⚠️ No se verificó en fuente primaria (ICONTEC) el año de ratificación ni la edición NEC de la que deriva. Fuentes secundarias la asocian a la NEC 2017. Comprar o consultar en ICONTEC.

## 6. Protección contra rayos (NTC 4552) y nivel ceráunico
- El RETIE exige una **evaluación del nivel de riesgo frente a rayos** basada en la **NTC 4552-2** o la IEC 62305-2. El diseño del SIPRA se hace con la **NTC 4552-3** o la IEC 62305-3 con el **método electrogeométrico**. Los valores de puesta a tierra se adoptan de ANSI/IEEE 80, NTC 2050 y **NTC 4552-1** [P] [1]. Para FV en cubierta aplica además la **IEC TR 63227** [P] [1].
- ⚠️ **Densidad de descargas a tierra (DDT) o nivel ceráunico de Sabanalarga:** no se obtuvo un valor de fuente primaria en esta investigación. Debe tomarse del mapa de la NTC 4552-1 o de los datos que use el diseñador, y documentarse en la memoria de cálculo. (Cruzar con la carpeta `01-recurso-solar-y-clima`.)
- ⚠️ El valor de referencia de resistencia de puesta a tierra (Tabla 3.12.3.a) está en imagen en la fuente consultada. Verificar en el PDF del Diario Oficial.

## 7. Quién puede diseñar, instalar y firmar
- **Persona competente** (definición RETIE): persona natural con **matrícula profesional vigente** que la autorice como **técnico, tecnólogo o ingeniero** en electrotecnia [P] [1].
  - **Técnicos electricistas:** matrícula del **CONTE** (Consejo Nacional de Técnicos Electricistas). Pueden hacer **esquemas constructivos** de instalaciones básicas de hasta 4 cuentas, **≤ 15 kVA y ≤ 240 V**, sin ambientes especiales [P] Res. 40284/2026 [1].
  - **Ingenieros electricistas o afines:** matrícula del **COPNIA**. Se requieren para **diseño detallado** (art. 3.3.1.1: "elaborado por un profesional de la ingeniería de acuerdo con la competencia otorgada por su matrícula").
  - ⚠️ Leyes de base (Ley 19 de 1990 para técnicos electricistas y CONTE; Ley 842 de 2003 para ingeniería y COPNIA): no se revisó su texto en esta investigación.
- **CREG 174 (documento C):** el instalador o la empresa debe acreditar **≥ 1 año de experiencia específica** o un **certificado de capacitación** en la tecnología [P] [4].
- **Recomendación:** pida al instalador copia de la matrícula y verifíquela en las consultas públicas de CONTE y COPNIA. Exija **declaración de cumplimiento firmada** y, si el sistema es ≥ 10 kVA, el **dictamen**.

## 8. Estructura sobre cubierta y cargas de viento (NSR-10)
- La NSR-10 (Título B) define las cargas de viento. El **Decreto 1711 de 2021** modificó la **Figura B.6.4-1** (velocidad básica del viento y zonas de amenaza eólica) [P] [5].
- ⚠️ **Velocidad básica de viento para Sabanalarga:** no se pudo leer el valor en el mapa oficial. Memorias de cálculo de cubiertas en la región usan 100 km/h (≈ 27,8 m/s) [S] [6], pero eso **no es un dato oficial**. El valor debe salir de la figura vigente.
- La certificación del panel incluye el ensayo de **carga mecánica por viento** según su norma (art. 2.3.25) [P] [1]. **La estructura de soporte y la cubierta no están cubiertas por esa certificación.**
- Si la estructura **modifica la estructura portante** o el diseño, se requiere **licencia de modificación**. Si no, es reparación locativa sin licencia (ver `leyes-y-resoluciones.md` §2.6) [P] [7].
- Recomendación: memoria de cálculo de anclajes y verificación de la cubierta (teja de fibrocemento, losa, etc.) por un ingeniero civil o estructural. La costa Caribe tiene temporada de huracanes (jun–nov). Cruzar con `04-tecnico-cientifico`.

## 9. Seguros
- ⚠️ No se encontró ninguna obligación legal de asegurar un SSFV residencial. Se recomienda revisar si la **póliza de hogar** cubre equipos en cubierta (rayo, vendaval, hurto) y exigir al instalador **pólizas de responsabilidad civil y de garantía**. No se investigaron productos específicos de aseguradoras.

## Referencias
1. [P] MinEnergía, Res. 40284 de 2026 (y texto compilado del RETIE, Res. 40117/2024), D.O. 53.539 de 1-jul-2026. https://gestornormativo.creg.gov.co/gestor/entorno/docs/resolucion_minminas_40284_2026.htm
2. [P] MinEnergía, Res. 40304 de 2025, D.O. 53.170 de 3-jul-2025. https://gestornormativo.creg.gov.co/gestor/entorno/docs/resolucion_minminas_40304_2025.htm
3. [P] Air-e, Anexo 3 "Formato simplificado para solicitud de conexión". https://www.air-e.com/assets/documents/autogeneracion/anexo_3.pdf
4. [P] CREG, Res. 174 de 2021 compilada, art. 14 (documentación tipo C). https://gestornormativo.creg.gov.co/gestor/entorno/docs/resolucion_creg_0174_2021.htm
5. [P] Decreto 1711 de 2021 (modifica NSR-10). https://sidn.ramajudicial.gov.co/SIDN/NORMATIVA/TEXTOS_COMPLETOS/5_DECRETOS/DECRETOS%202021/Decreto%201711%20de%202021%20(Modifica%20parcialmente%20la%20Norma%20Sismo%20Resistente%20NSR-10).pdf (enlace del buscador; la descarga falló)
6. [S] Memorias de cálculo de viento NSR-10 (Corpacero, 2015), en repositorio U. La Gran Colombia. https://repository.ugc.edu.co/server/api/core/bitstreams/77458f61-f2d3-4adc-897b-a20d906241be/content
7. [P] MinVivienda, concepto sobre paneles solares (rad. 2026ER0031847). https://www.minvivienda.gov.co/sites/default/files/conceptos_juridicos/2026ee0022954_1.pdf
8. [S] Colombia Move, "Certificación RETIE…" (sin tarifa oficial). https://colombiamove.com/blog/certificacion-retie-instalaciones-electricas-colombia-requisitos-inspeccion/
9. [P] MinEnergía, página RETIE. https://www.minenergia.gov.co/es/misional/energia-electrica-2/reglamentos-tecnicos/reglamento-t%C3%A9cnico-de-instalaciones-eléctricas-retie/
