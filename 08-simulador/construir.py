"""Construye simulador.html: incrusta la producción PVGIS horaria, las facturas y el motor en la plantilla.

Uso:  python3 -I construir.py   (desde 08-simulador/)
"""
import base64
import calendar
import csv
import json
from pathlib import Path

HERE = Path(__file__).parent
RAW = HERE.parent / "06-datos" / "raw"
AÑOS = range(2011, 2016)


def serie(nombre):
    """Bytes (W/kWp ÷ 4) ordenados por año, mes, día y hora local (UTC-5)."""
    vals = {}
    for line in open(RAW / nombre):
        if not line[:4].isdigit() or ":" not in line[:14]:
            continue
        t, p = line.split(",")[:2]
        y, m, d, hh = int(t[:4]), int(t[4:6]), int(t[6:8]), int(t[9:11])
        if hh - 5 >= 0:
            vals[(y, m, d, hh - 5)] = float(p)
    out = bytearray()
    indice = {m: [] for m in range(1, 13)}
    dia = 0
    for y in AÑOS:
        for m in range(1, 13):
            nd = calendar.monthrange(y, m)[1]
            indice[m].append([dia, nd])
            for d in range(1, nd + 1):
                for h in range(24):
                    out.append(min(255, round(vals.get((y, m, d, h), 0.0) / 4)))
            dia += nd
    return base64.b64encode(bytes(out)).decode(), indice


def facturas():
    rows = [r for r in csv.DictReader(open(HERE.parent / "07-diseno-proyecto" / "consumo-historico.csv")) if r["fuente"] == "factura"]
    return [{"mes": r["mes_factura"], "dias": int(r["dias"]), "kwh": float(r["kwh"]), "sub": float(r["kwh_subsidiados"]),
             "total": float(r["total_factura_cop"]), "tarifa": float(r["tarifa_cop_kwh"])} for r in rows]


def main():
    este, indice = serie("pvgis_horario_este_10deg_2011_2015.csv")
    oeste, _ = serie("pvgis_horario_oeste_10deg_2011_2015.csv")
    sur, _ = serie("pvgis_horario_sur_10deg_2011_2015.csv")
    datos = {"pv_este": este, "pv_oeste": oeste, "pv_sur": sur, "indice": indice, "facturas": facturas()}
    (HERE / "datos.json").write_text(json.dumps(datos))
    html = (HERE / "plantilla.html").read_text()
    html = html.replace("/*__DATOS__*/", "const DATOS = " + json.dumps(datos) + ";")
    html = html.replace("/*__MOTOR__*/", (HERE / "motor.js").read_text())
    (HERE / "simulador.html").write_text(html)
    print(f"simulador.html: {len(html)/1024:.0f} KB")


if __name__ == "__main__":
    main()
