# Metodología de dimensionamiento: ecuaciones y ejemplos resueltos

> **Referencias provisionales de recurso (Sabanalarga):** HSP ≈ **5,0–5,5 kWh/m²·día** (PVGIS: 5,33–5,42 en horizontal y ≈5,5 en el plano de 15°). **Mes crítico: junio**, con ≈4,9 kWh/m²·día en el plano. Temperatura ambiente de diseño: **máxima 37 °C** (celda 70–75 °C) y **mínima de celda 15 °C** (conservadora; las mínimas nocturnas rondan 21–23 °C ⚠️, confirme con datos de `01-recurso-solar-y-clima`).
>
> Los equipos de los ejemplos (módulo de 550 W, inversor de 4 kW, etc.) son **genéricos/hipotéticos**: reemplace sus parámetros por los de la ficha técnica del equipo que vaya a comprar (ver `03-mercado-y-equipos`).
>
> Marco normativo citado: NTC 2050 (Código Eléctrico Colombiano, basado en NFPA 70/NEC), RETIE (Res. MinEnergía 40117 de 2024 ⚠️ confirme la versión vigente en `02-marco-legal-y-regulatorio`), NEC Art. 690, IEC 62548, IEEE 1562 e IEEE 1013.

---

## 0. Flujo general

```
Consumo (facturas 12 meses + inventario de cargas)
   └─► Medidas de eficiencia primero (aire acondicionado inverter, nevera eficiente, LED)  → consumo de diseño
        └─► Tipo de sistema: on-grid | off-grid | híbrido
             ├─► Potencia FV (kWp) por balance energético
             ├─► Strings (Voc a Tmin, Vmp a Tmax, corriente MPPT)
             ├─► Inversor (relación DC/AC; en off-grid: continua + pico)
             ├─► Baterías (si aplica): autonomía, DoD, temperatura
             ├─► Conductores (ampacidad + caída de tensión) y protecciones
             ├─► Puesta a tierra y SPD (ver rayos-y-puesta-a-tierra.md)
             └─► Finanzas: LCOE, VPN, TIR, payback
```

---

## 1. Sistema conectado a red (on-grid / AGPE)

### 1.1 Potencia pico

$$P_{FV}\,[\mathrm{kWp}] = \frac{E_{anual}\,[\mathrm{kWh}] \cdot f_{cob}}{HSP \cdot 365 \cdot PR}$$

- f_cob = fracción del consumo que se quiere cubrir (1,0 = 100 %).
- PR (performance ratio) = 0,75 conservador; 0,80 con buena ventilación, limpieza y equipos eficientes (ver `desempeno-fv-caribe-colombiano.md`).

**Tabla de dimensionamiento rápido (f_cob = 1):**

| Consumo anual | Consumo mensual | HSP 5,0 / PR 0,75 | HSP 5,0 / PR 0,80 | HSP 5,3 / PR 0,75 | HSP 5,3 / PR 0,80 | HSP 5,5 / PR 0,75 | HSP 5,5 / PR 0,80 |
|---|---|---|---|---|---|---|---|
| 3.600 kWh | 300 kWh | 2,63 kWp | 2,47 | 2,48 | 2,33 | 2,39 | 2,24 |
| 6.000 kWh | 500 kWh | 4,38 kWp | 4,11 | 4,14 | 3,88 | 3,99 | 3,74 |
| 9.000 kWh | 750 kWh | 6,58 kWp | 6,16 | 6,20 | 5,82 | 5,98 | 5,60 |

### 1.2 Ejemplo resuelto 1 — casa con aire acondicionado, 500 kWh/mes

**Datos:** E_anual = 6.000 kWh; HSP = 5,3; PR = 0,78.

1. P_FV = 6.000 / (5,3 × 365 × 0,78) = 6.000 / 1.509 = **3,98 kWp**.
2. Módulos de 550 W: 3.980 / 550 = 7,2 → **8 módulos = 4,40 kWp** (se redondea hacia arriba para compensar la degradación).
3. Verificación con PVGIS (1.476 kWh/kWp con 14 % de pérdidas): 4,40 × 1.476 = **6.494 kWh/año** (≈108 % del consumo). Con degradación de 0,5 %/año, cubre ≈100 % hasta el año ~15.
4. Área: 8 × 2,58 m² (módulo de 2,28 × 1,13 m) ≈ **21 m²** de módulos; ≈25–30 m² de techo con pasillos.

### 1.3 Dimensionamiento de strings

**Ecuaciones** (NEC 690.7; IEC 62548):

$$V_{oc}(T_{min}) = V_{oc,STC}\,[1 + \beta_{Voc}(T_{min} - 25)]$$
$$N_{max} = \left\lfloor \frac{V_{DC,max,inv}}{V_{oc}(T_{min})} \right\rfloor$$
$$V_{mp}(T_{c,max}) = V_{mp,STC}\,[1 + \beta_{Vmp}(T_{c,max} - 25)]$$
$$N_{min} = \left\lceil \frac{V_{MPPT,min}}{V_{mp}(T_{c,max})} \right\rceil$$

Además: N·Vmp(25 °C) debe estar dentro de la ventana MPPT; I_mp,string ≤ I_max,MPPT; I_sc,string ≤ I_sc,max admitida por el MPPT.

**Ejemplo resuelto 2 — strings para el sistema de 4,4 kWp**

*Módulo genérico de 550 W (TOPCon/PERC de 144 medias celdas):* Voc = 49,6 V; Vmp = 41,9 V; Isc = 14,0 A; Imp = 13,1 A; β_Voc = −0,25 %/°C; β_Vmp ≈ −0,30 %/°C (si la ficha no lo da, use γ_Pmax como aproximación conservadora).
*Inversor genérico de 4 kW:* V_DC,max = 600 V; MPPT de 80–550 V (arranque a 100 V); 2 MPPT de 16 A (Isc máx. de 20 A).

| Paso | Cálculo | Resultado |
|---|---|---|
| Voc a 15 °C | 49,6 × [1 − 0,0025 × (15 − 25)] = 49,6 × 1,025 | 50,84 V |
| N_max | ⌊600 / 50,84⌋ | **11 módulos** |
| Vmp a 75 °C de celda | 41,9 × [1 − 0,0030 × (75 − 25)] = 41,9 × 0,85 | 35,6 V |
| N_min (MPPT de 80 V; usando 120 V con margen) | ⌈120 / 35,6⌉ | **4 módulos** |
| String elegido: 8 en serie | Voc,max = 8 × 50,84 = 406,7 V < 600 V ✔ ; Vmp a 75 °C = 285 V > 100 V ✔ ; Vmp a 25 °C = 335 V dentro de 80–550 V ✔ | 1 string × 8 |
| Corriente | Imp = 13,1 A < 16 A ✔ ; Isc = 14,0 A < 20 A ✔ | OK |

> **Nota tropical:** como en Sabanalarga nunca hace frío, la restricción de Voc máximo es holgada; la restricción crítica es la **Vmp mínima a alta temperatura** (los strings cortos pueden salir del MPPT en las tardes calurosas). Prefiera strings que dejen Vmp(75 °C) ≥ 1,2 × V_MPPT,min.

### 1.4 Relación DC/AC (ILR)

$$ILR = \frac{P_{FV,STC}}{P_{AC,inv}}$$

- Valor por defecto de PVWatts: **1,2** (Dobos, 2014). En clima cálido el arreglo rara vez entrega su potencia STC (la temperatura le quita entre 10 y 17 % al mediodía), así que **1,1–1,3 produce recortes (*clipping*) despreciables** ⚠️ (inferencia; verifíquelo con una simulación horaria en PVsyst o SAM).
- Ejemplo: 4,40 kWp / 4,0 kW = **1,10** ✔. Con orientación E–O se puede subir a 1,3–1,4.
- Verifique el límite de potencia de inyección del AGPE y las condiciones del operador de red (Air-e) en `02-marco-legal-y-regulatorio`.

---

## 2. Sistema aislado (off-grid)

### 2.1 Balance de cargas (Ejemplo resuelto 3 — vivienda sin aire acondicionado)

| Carga | Potencia | Horas/día | Energía (Wh/día) |
|---|---|---|---|
| Nevera inverter de 300 L (etiqueta RETIQ A) | ~1,0 kWh/día (dato de la etiqueta) | — | 1.000 |
| Iluminación LED, 8 × 9 W | 72 W | 5 | 360 |
| TV LED de 43" | 100 W | 5 | 500 |
| 2 ventiladores | 120 W | 10 | 1.200 |
| Router + cargadores | 30 W | 24 | 720 |
| Lavadora | 500 W | 1 | 500 |
| Bomba de agua de 0,5 HP | 750 W | 0,5 | 375 |
| **Total E_d** | | | **4.655 Wh/día ≈ 4,66 kWh/día** |

### 2.2 Banco de baterías

$$C_{kWh} = \frac{E_d \cdot N_{aut}}{DoD \cdot \eta_{inv} \cdot k_T}
\qquad C_{Ah} = \frac{C_{kWh}\cdot 1000}{V_{banco}}$$

- N_aut = días de autonomía (1–2 en Sabanalarga, donde rara vez hay más de 2 días seguidos muy nublados ⚠️; 3 si la carga es crítica).
- DoD: **LiFePO₄ 0,80–0,90**; plomo-ácido 0,50 (0,30–0,40 para que dure más ciclos).
- η_inv ≈ 0,93. k_T = factor de capacidad por temperatura (≈1,0 a 25–35 °C; el calor **no** reduce la capacidad disponible, reduce la **vida**: ver `baterias-tecnologia-y-vida-util.md`).

| Autonomía | LiFePO₄ (DoD 0,8) | Ah a 48 V | Plomo-ácido (DoD 0,5) | Ah a 48 V |
|---|---|---|---|---|
| 1 día | 6,3 kWh | 130 Ah | 10,0 kWh | 209 Ah |
| **2 días** | **12,5 kWh** | **261 Ah** | 20,0 kWh | 417 Ah |
| 3 días | 18,8 kWh | 391 Ah | 30,0 kWh | 626 Ah |

**Elección:** 2 días con LiFePO₄ → **≈12,5 kWh útiles a 48 V** (p. ej., 2–3 módulos de 5,12 kWh / 100 Ah de 51,2 V ⚠️ según el catálogo).

### 2.3 Generador FV (método del mes crítico)

$$P_{FV} = \frac{E_d}{HSP_{crit} \cdot PR_{off}} \times F_s$$

- HSP_crit = 4,9 kWh/m²·día (junio, plano de 15°; PVGIS).
- PR_off ≈ 0,60–0,70. Ejemplo de desglose: temperatura 0,88 × suciedad 0,97 × cableado 0,98 × MPPT 0,97 × ida y vuelta de la batería 0,95 (LFP; 0,80–0,85 para plomo-ácido) × inversor 0,93 ≈ **0,68**.
- F_s = factor de seguridad de 1,1–1,25 (crecimiento de carga y degradación).

Cálculo: 4,66 / (4,9 × 0,65) = 1,46 kWp; × 1,2 = **1,75 kWp → 4 módulos de 550 W = 2,2 kWp** (la holgura sirve también para recargar tras días nublados).

**Comprobación de recarga:** tras 2 días de autonomía, el excedente diario de 2,2 kWp × 4,9 × 0,65 − 4,66 ≈ 2,35 kWh/día recarga los 9,3 kWh consumidos en ≈4 días soleados. Es aceptable; si quiere recargar en 2 días, use ≈3 kWp.

### 2.4 Regulador MPPT

$$I_{MPPT} \ge 1{,}25 \cdot \frac{P_{FV}}{V_{bat}} \qquad V_{oc,string}(T_{min}) < V_{max,MPPT}$$

- 2.200 W / 48 V = 45,8 A × 1,25 = **57 A → regulador de 60 A a 48 V** (o 2 × 30–40 A).
- Strings: con un MPPT de 150 V máx., 2 en serie × 2 en paralelo: Voc a 15 °C = 2 × 50,84 = 101,7 V < 150 V ✔; Vmp a 75 °C = 71 V > V_bat + ~5 V (~58 V) ✔. Con un MPPT de 250 V se pueden poner 4 en serie (203 V ✔).

### 2.5 Inversor: potencia continua y pico de arranque

$$P_{cont} \ge 1{,}25 \cdot \sum P_{simultáneas} \qquad S_{pico} \ge \sum P_{otras} + k_{arr}\cdot P_{motor}$$

| Carga con motor | Corriente de arranque típica (k_arr = I_arranque / I_nominal) | Comentario |
|---|---|---|
| Nevera **convencional** (compresor de velocidad fija) | 3–7× ⚠️ | Pico de 0,5–1,5 kVA por algunos cientos de ms |
| Nevera **inverter** | ≈1–1,5× (arranque suave) | Ideal para off-grid |
| Aire acondicionado **convencional** de 12.000 BTU/h | LRA de la placa típicamente 4–8× la corriente nominal ⚠️ | Pico de 4–7 kVA; exige un inversor de baja frecuencia o un *soft-starter* |
| Aire acondicionado **inverter** de 12.000 BTU/h | ≈1× (rampa electrónica) | Recomendado; potencia de 0,3–1,2 kW según la carga térmica |
| Bomba de 0,5–1 HP (motor de inducción) | 5–7× ⚠️ | Pico de 3–5 kVA; un variador o *soft-start* lo reduce |
| Lavadora | 2–3× | — |

> ⚠️ Los multiplicadores son rangos típicos de la industria (LRA = *locked-rotor amps*). **Verifique siempre el LRA en la placa del equipo** o mida con una pinza con función *inrush*.

**Ejemplo 3 (continuación):** potencias simultáneas probables ≈ 150 + 72 + 100 + 120 + 30 + 500 = 972 W → P_cont ≥ 1,25 × 972 ≈ 1,2 kW; con la bomba arrancando: 972 + 6 × 750 ≈ 5,5 kVA de pico. → **Inversor-cargador de 3 kVA continuos con capacidad de pico ≥ 6 kVA (≥ 5 s)** (típico de los inversores de baja frecuencia con transformador) o uno de alta frecuencia de 5 kVA. Un *soft-starter* en la bomba permite un inversor menor.

### 2.6 ¿Y si se agrega el aire acondicionado en off-grid? (Ejemplo 4)

Un minisplit **inverter** de 12.000 BTU/h usado 8 h por la noche consume ≈0,5–0,7 kW de promedio → **≈4–5,6 kWh/noche** ⚠️ (depende del aislamiento, el *setpoint* y la eficiencia; ver `consumo-residencial-caribe-y-eficiencia.md`).

- E_d sube de 4,66 a ≈9,5 kWh/día (**se duplica**).
- Batería (2 días, LFP): ≈25 kWh; PV: 9,5 / (4,9 × 0,65) × 1,2 ≈ **3,6 kWp**.
- Conclusión: **el aire acondicionado nocturno es el factor que más encarece el sistema aislado**. Las alternativas son un híbrido con red, usar el aire solo de día (cuando lo alimenta directamente el FV) o un aislamiento térmico del cuarto + ventilador de techo con un *setpoint* de 26–28 °C.

---

## 3. Sistema híbrido / respaldo

### 3.1 Lógica
- La red sigue siendo la fuente principal; la batería cubre **cargas críticas** durante los cortes (frecuentes en la Costa por fallas de distribución ⚠️; ver los indicadores SAIDI/SAIFI de Air-e en `02-marco-legal-y-regulatorio`) y/o desplaza energía solar a la noche (autoconsumo).
- **Autoconsumo vs. inyección:** bajo la CREG 174/2021, los excedentes de un AGPE se reconocen con reglas de permuta/venta cuyo valor es **menor** que la tarifa plena (se descuenta al menos el componente de comercialización) ⚠️ (detalles en `02-marco-legal-y-regulatorio`). Si el valor del excedente es mucho menor que la tarifa, guardar energía en batería para la noche puede tener sentido; con los precios actuales de las baterías, en general **el respaldo (resiliencia) es la principal justificación económica** ⚠️ (inferencia; compruébelo con el modelo financiero §8).

### 3.2 Ejemplo resuelto 5 — respaldo para cargas críticas

Cargas críticas: nevera (150 W), 4 luces (36 W), router (30 W), 2 ventiladores (120 W), TV (100 W) ≈ **436 W → 500 W de diseño**. Duración de corte a cubrir: 8 h.

$$C = \frac{P_{crit}\cdot t}{DoD \cdot \eta_{inv}} = \frac{0{,}5 \times 8}{0{,}9 \times 0{,}93} = 4{,}8\ \mathrm{kWh}$$

→ **Batería LFP de 5 kWh** (o 10 kWh si se quiere además autoconsumo nocturno parcial). Inversor híbrido de 5 kW con salida de respaldo (EPS/*backup*), tablero de cargas críticas separado y transferencia ≤20 ms ⚠️.

---

## 4. Conductores

### 4.1 Ampacidad (NEC 690.8 / NTC 2050)

$$I_{diseño,DC} = 1{,}25 \times 1{,}25 \times I_{sc} = 1{,}56\,I_{sc}$$

(1,25 por la irradiancia >1.000 W/m² y 1,25 por la operación continua.) Ejemplo: 1,56 × 14,0 = **21,8 A** → el cable PV de 4 mm² (≈ AWG 12) cumple con holgura incluso con factores de corrección por temperatura de 40–50 °C ⚠️ (aplique la tabla de corrección de la NTC 2050 Art. 310 y la corrección por cubierta si el ducto va expuesto al sol sobre el techo).

### 4.2 Caída de tensión

$$\Delta V\,(\%) = \frac{2\,L\,I\,\rho_T}{S\,V}\times 100$$

ρ_T(Cu, 70 °C) ≈ 0,0216 Ω·mm²/m; ρ(Cu, 50 °C) ≈ 0,0206.

| Tramo | Datos | Sección | ΔV | ΔV % | Criterio |
|---|---|---|---|---|---|
| DC (string → inversor) | L = 25 m; I = 13,1 A; V = 394 V (Vmp a 45 °C) | 4 mm² | 3,5 V | **0,90 %** ✔ | ≤1–1,5 % |
| DC | igual | 6 mm² | 2,4 V | 0,60 % | — |
| AC (inversor → tablero), 240 V | L = 20 m; P = 5 kW; I = 20,8 A | 6 mm² | 2,9 V | 1,19 % ✔ | ≤1,5–2 % (NTC 2050: ≤3 % en el ramal, ≤5 % en total, como nota informativa) |
| AC, 240 V | igual | 10 mm² | 1,7 V | 0,72 % | — |
| AC, 120 V (monofásico) | L = 20 m; I = 41,7 A | 10 mm² | 3,4 V | 2,86 % ✘ | → mejor usar 240 V o 16 mm² (1,79 %) |

**Regla:** en el lado DC apunte a ≤1–1,5 %; en el AC a ≤1,5–2 %. El costo extra de cobre es menor que la energía perdida en 25 años.

---

## 5. Protecciones

| Elemento | Criterio | Ejemplo |
|---|---|---|
| **Fusible de string** (gPV) | Solo es obligatorio con **≥3 strings en paralelo** en un mismo MPPT (cuando (N_p − 1)·I_sc puede superar la corriente inversa máxima del módulo). NEC 690.9: In ≥ 1,56·Isc e In ≤ "max series fuse" del módulo. IEC 62548: 1,5·Isc ≤ In ≤ 2,4·Isc. | 1,56 × 14 = 21,8 A → **fusible gPV de 25 A, 1.000 V DC** (si el módulo admite un máximo de 25–30 A) |
| Seccionador DC | ≥ Voc,max a T_min y ≥ 1,25·Isc; con corte bajo carga | 600 V / 32 A |
| **DPS/SPD DC** | IEC 61643-31/-32: U_CPV ≥ Voc,max del arreglo; tipo 2 (tipo 1+2 si hay pararrayos externo y no se cumple la distancia de separación) | U_CPV ≥ 410 V → SPD de 600 V DC |
| Interruptor AC de salida del inversor | ≥ 1,25 × I_AC,max del inversor | 4 kW/240 V → 16,7 A × 1,25 = 20,8 → **25 A** bipolar |
| Diferencial (RCD) | Según el inversor (con o sin transformador): tipo A o B, de 30 mA en circuitos de uso final | — |
| SPD AC | Tipo 2 en el tablero principal (tipo 1+2 si hay SIPRA) | — |
| Baterías (off-grid/híbrido) | Fusible de clase T/NH o un interruptor DC con alta capacidad de ruptura **junto al banco**; cable dimensionado a 1,25 × la corriente continua máxima del inversor | 3 kVA / 48 V / 0,93 ≈ 67 A × 1,25 = 84 A → fusible de 100 A y cable de 25–35 mm² ⚠️ |

---

## 6. Puesta a tierra (resumen; detalle en `rayos-y-puesta-a-tierra.md`)
- Conexión equipotencial de **todos los marcos y estructuras** con un conductor de cobre (típicamente ≥6 mm² en residencial, o según NEC 690.45/250.122 ⚠️) y arandelas dentadas o grapas WEEB para perforar el anodizado.
- **Un solo sistema de puesta a tierra** (unir el electrodo del FV con el de la acometida; nunca electrodos aislados).
- Valor de referencia del RETIE para el neutro de la acometida en baja tensión: **≤25 Ω** ⚠️ (verifique la tabla vigente).

---

## 7. Resumen de fórmulas clave

| Magnitud | Fórmula |
|---|---|
| Potencia FV on-grid | P = E_anual / (HSP·365·PR) |
| Energía anual esperada | E = P·HSP·365·PR ≈ P·Y_esp |
| Voc a temperatura mínima | Voc·[1 + β(T_min − 25)] |
| Vmp a temperatura máxima | Vmp·[1 + β_Vmp(T_c,max − 25)] |
| Temperatura de celda (NOCT) | Ta + (NOCT − 20)·G/800 |
| Batería | C = E_d·N_aut / (DoD·η_inv) |
| PV off-grid | P = E_d·F_s / (HSP_crit·PR_off) |
| Regulador | I = 1,25·P_FV / V_bat |
| Corriente DC de diseño | 1,56·Isc |
| Caída de tensión | ΔV% = 200·L·I·ρ / (S·V) |

---

## 8. Análisis financiero

### 8.1 Indicadores (Short, Packey y Holt, 1995 — manual de NREL; Branker et al., 2011)

$$VPN = -I_0 + \sum_{t=1}^{N}\frac{B_t - C_t}{(1+r)^t}$$

$$TIR:\ \ 0 = -I_0 + \sum_{t=1}^{N}\frac{B_t - C_t}{(1+TIR)^t}$$

$$LCOE = \frac{I_0 + \sum_{t=1}^{N} \frac{C_t}{(1+r)^t}}{\sum_{t=1}^{N}\frac{E_1(1-d)^{t-1}}{(1+r)^t}}$$

$$B_t = E_t\,[f_{auto}\,T_t + (1-f_{auto})\,k_{exc}\,T_t],\qquad T_t = T_1(1+e)^{t-1}$$

- d = degradación anual; e = escalamiento de la tarifa; f_auto = fracción autoconsumida; k_exc = valor relativo del excedente frente a la tarifa (por la CREG 174/2021 es <1 ⚠️).
- Payback simple: el primer año en que el flujo acumulado (sin descontar) ≥ 0. Payback descontado: el mismo criterio con flujos descontados.

### 8.2 Ejemplo resuelto 6 — 4 kWp en Sabanalarga (supuestos ILUSTRATIVOS ⚠️)

| Supuesto | Valor | Nota |
|---|---|---|
| Potencia | 4,0 kWp | — |
| CAPEX | 4,2 M COP/kWp → 16,8 M COP | ⚠️ reemplazar con las cotizaciones de `03-mercado-y-equipos` |
| Rendimiento del año 1 | 1.500 kWh/kWp → 6.000 kWh | PVGIS + PR realista |
| Degradación | 0,6 %/año | clima cálido (Jordan et al., 2022) |
| Tarifa del año 1 | 900 COP/kWh | ⚠️ reemplazar con la tarifa real de Air-e por estrato |
| Escalamiento de la tarifa | 6 %/año nominal | ⚠️ |
| Tasa de descuento | 12 % nominal | ⚠️ |
| Autoconsumo / valor del excedente | 70 % / 85 % de la tarifa | ⚠️ |
| O&M | 1 % del CAPEX/año (+4 %/año) | limpieza e inspección |
| Reemplazo del inversor | año 12, 3,0 M COP | — |
| Horizonte | 25 años | — |

**Resultados (cálculo propio):**

| Indicador | Base | Tarifa 700 | Tarifa 1.100 | CAPEX 3,4 M/kWp | CAPEX 5,0 M/kWp | Escalamiento 3 % | Rendimiento 1.400 | Autoconsumo 40 % |
|---|---|---|---|---|---|---|---|---|
| Ahorro del año 1 | 4,99 M COP | — | — | — | — | — | — | — |
| VPN (12 %) | **41,5 M COP** | 28,0 M | 55,0 M | 45,0 M | 38,0 M | 28,6 M | 37,4 M | 38,6 M |
| TIR | **34,9 %** | 27,9 % | 41,8 % | 42,2 % | 29,9 % | 31,8 % | 32,8 % | 33,4 % |
| Payback simple | **4 años** | 5 | 3 | 3 | 4 | 4 | 4 | 4 |
| Payback descontado | 5 años | 6 | 4 | 4 | 6 | 5 | 5 | 5 |
| LCOE (nominal, r = 12 %) | **≈428 COP/kWh** | 428 | 428 | 350 | 506 | 428 | 458 | 428 |

**Lectura:** mientras el LCOE (~350–500 COP/kWh) sea claramente menor que la tarifa (~700–1.100 COP/kWh en estratos 3–6 del Caribe ⚠️), el sistema on-grid es rentable. Las variables más sensibles son la tarifa y el CAPEX. Agregar baterías sube el LCOE efectivo y alarga el payback, porque su valor principal es el respaldo.

> Script reproducible del cálculo: replique estas fórmulas en una hoja de cálculo de `05-herramientas-de-diseno`; los supuestos marcados con ⚠️ **deben** reemplazarse por datos reales.

---

## Referencias de este archivo
Ver [`bibliografia.md`](bibliografia.md) (secciones F, G y H).
