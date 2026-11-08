# 09 · Orientación de los paneles

**Página publicada (privada):** https://claude.ai/artifact/HXGwZU6WJPozVnCEPFHNAk

Maqueta 3D de la casa (techo a dos aguas, caras este y oeste) con la posición del sol según el mes y la hora, y la producción PVGIS de tres montajes:
- 6 paneles en la cara este y 6 en la oeste, sobre el techo (propuesta del contratista);
- los 12 en la cara este;
- los 12 mirando al sur a 10° sobre una estructura metálica (propuesta familiar).

| Montaje | kWh/año (10 % sombra) | Ahorro hoy | Plan 9–15 | Plan + 5 kWh | Si inyectara a la red |
|---|---|---|---|---|---|
| 6 este + 6 oeste | 9 585 | 2,46 M | 3,56 M | 5,05 M | 6,57 M |
| 12 este | 9 711 | 2,45 M | 3,56 M | 5,05 M | 6,61 M |
| 12 sur 10° (estructura) | 9 846 | 2,46 M | 3,56 M | 5,05 M | 6,65 M |

**Conclusión:** con el sistema elegido (sin inyección), el sur produce 2,7 % más, pero esa energía cae en horas en que ya sobra y se desperdicia: el ahorro es el mismo. La estructura metálica no se paga con energía. Solo se justificaría si el eternit no soporta perforaciones o peso, o para salir de la sombra de árboles, y en ese caso con diseño estructural (NSR-10, zona de viento 5).

**Archivos:**
- `plantilla.html` + `construir.py` → `orientacion.html`;
- `curvas_pvgis_10deg.json`: promedio mes × hora de PVGIS-NSRDB 2011–2015;
- la simulación anual está en `07-diseno-proyecto/escenario_orientacion.js`.
