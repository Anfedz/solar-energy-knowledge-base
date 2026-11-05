# 08 · Simulador interactivo

Página web que simula hora a hora el sistema solar de la casa con las 12 facturas reales, el inventario de aparatos y horarios, y la producción PVGIS-NSRDB 2011–2015 de cada cara del techo.

- **Página publicada (privada):** https://claude.ai/artifact/6KyXK2AtkLdh4rnYVdKXvg
- **Qué permite cambiar:**
  - el sistema: paneles en cada cara, potencia, sombra, batería, con o sin entrega de excedentes, eficiencia y consumo en vacío;
  - los costos y la tarifa: CU, estrato, crédito, bolsa, alumbrado, alza de tarifa, degradación;
  - los aparatos y sus horarios, incluidos los aires y los computadores;
  - consumos nuevos, como un carro eléctrico.
- **Modo "Ajustar a mis facturas":** el total de cada mes es el de la factura y los horarios solo deciden *a qué hora* se consume. Así, mover horas de aire al día cambia el horario sin cambiar el total.
- **Archivos:**

  | Archivo | Qué es |
  |---|---|
  | `motor.js` | El motor de cálculo, sin dependencias. Es el port de `07-diseno-proyecto/simulacion_horaria.py` y está validado contra él |
  | `plantilla.html` | La interfaz |
  | `construir.py` | Incrusta los datos (`06-datos/raw/pvgis_horario_*`, `07-diseno-proyecto/consumo-historico.csv`) y genera `simulador.html` y `datos.json` |

- **Reconstruir:** `cd 08-simulador && python3 -I construir.py`.
