"""Construye orientacion.html incrustando las curvas PVGIS promedio (mes × hora) de este, oeste y sur a 10°.
Uso: python3 -I construir.py   (desde 09-orientacion/). Las curvas salen de 06-datos/raw/pvgis_horario_*_10deg_2011_2015.csv."""
from pathlib import Path
HERE = Path(__file__).parent
html = (HERE / "plantilla.html").read_text().replace("/*__CURVAS__*/", "const CURVAS = " + (HERE / "curvas_pvgis_10deg.json").read_text().strip() + ";")
(HERE / "orientacion.html").write_text(html)
print(f"orientacion.html: {len(html)/1024:.0f} KB")
