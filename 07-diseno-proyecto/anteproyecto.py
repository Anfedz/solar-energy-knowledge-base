"""Simulación mensual del anteproyecto on-grid (CREG 174) con el consumo real del propietario.

Uso:  python3 -I anteproyecto.py [--sombra 0.10] [--diurno 0.35] [--bolsa 300]
Lee consumo-historico.csv (12 facturas) y la producción PVGIS-NSRDB del techo (cara este, 10°).
"""
import argparse
import csv
from pathlib import Path

HERE = Path(__file__).parent

# PVGIS-NSRDB v5.2, casco urbano de Sabanalarga (punto de la casa), 14 % pérdidas, kWh/kWp/día por mes calendario (consulta 2026-11-05)
YIELD = {
    "este_10": [4.26, 4.52, 4.37, 4.07, 3.97, 4.03, 4.18, 4.06, 3.84, 3.58, 3.42, 3.80],
    "oeste_10": [4.23, 4.48, 4.30, 3.95, 3.83, 3.88, 4.04, 3.93, 3.71, 3.48, 3.31, 3.71],
    "sur_10": [4.73, 4.84, 4.47, 3.99, 3.79, 3.79, 3.96, 3.94, 3.83, 3.68, 3.63, 4.19],
}
CU = 936.3955        # Air-e oct-2026, estrato 4 = costo unitario pleno (02-marco-legal/tarifas-energia-atlantico.md)
CV = 133.3886        # comercialización cobrada por kWh permutado
SUBSIDIO_E3 = 0.15   # estrato 3: 15 % sobre el consumo de subsistencia
ALUMBRADO = 0.10     # impuesto de alumbrado público de Sabanalarga = 10 % del valor del consumo (visto en facturas)


def costo_energia(kwh, kwh_sub):
    """Energía + alumbrado de un mes (sin tasa de seguridad, que es fija)."""
    kwh = max(kwh, 0)
    return kwh * CU * (1 + ALUMBRADO) - min(kwh, kwh_sub) * CU * SUBSIDIO_E3


def simular(n_pan, panel_w, cara, sombra, diurno, bolsa):
    kwp = n_pan * panel_w / 1000
    filas = [r for r in csv.DictReader(open(HERE / "consumo-historico.csv")) if r["fuente"] == "factura"]
    antes = despues = gen_tot = exced_neto_tot = 0
    for r in filas:
        mes_lectura = int(r["mes_factura"][5:7])
        mes_consumo = (mes_lectura - 2) % 12          # la factura cubre ~el mes anterior
        dias, kwh, sub = float(r["dias"]), float(r["kwh"]), float(r["kwh_subsidiados"])
        gen = kwp * YIELD[cara][mes_consumo] * dias * (1 - sombra)
        auto = min(diurno * kwh, gen)
        importado = kwh - auto
        exportado = gen - auto
        permutado = min(exportado, importado)
        exced_neto = exportado - permutado
        antes += costo_energia(kwh, sub)
        despues += costo_energia(importado - permutado, sub) + permutado * CV - exced_neto * bolsa
        gen_tot += gen
        exced_neto_tot += exced_neto
    return kwp, gen_tot, antes - despues, exced_neto_tot, antes


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--sombra", type=float, default=0.10, help="pérdida por sombra de árboles + suciedad adicional")
    ap.add_argument("--diurno", type=float, default=0.35, help="fracción del consumo que ocurre con sol")
    ap.add_argument("--bolsa", type=float, default=300, help="COP/kWh pagado por excedente neto (⚠️ supuesto)")
    ap.add_argument("--panel-w", type=float, default=620)
    ap.add_argument("--cara", default="este_10", choices=YIELD)
    ap.add_argument("--costo-fijo", type=float, default=9_300_000,
                    help="inversor+estructura+BOS+medidor+mano de obra (COP) para 5-8 paneles")
    ap.add_argument("--costo-panel", type=float, default=525_700)
    a = ap.parse_args()
    print(f"Supuestos: sombra {a.sombra:.0%}, consumo diurno {a.diurno:.0%}, excedente neto a {a.bolsa:.0f} COP/kWh, "
          f"cara {a.cara}, CU {CU:.0f}")
    print(f"{'paneles':>7} {'kWp':>5} {'gen kWh/a':>9} {'exced.neto':>10} {'ahorro M/a':>10} {'% factura':>9} "
          f"{'costo M':>7} {'payback':>7}")
    for n in range(4, 10):
        kwp, gen, ahorro, exc, antes = simular(n, a.panel_w, a.cara, a.sombra, a.diurno, a.bolsa)
        costo = a.costo_fijo + n * a.costo_panel
        print(f"{n:>7} {kwp:>5.2f} {gen:>9.0f} {exc:>10.0f} {ahorro/1e6:>10.2f} {ahorro/antes:>9.0%} "
              f"{costo/1e6:>7.1f} {costo/ahorro:>6.1f}a")


if __name__ == "__main__":
    main()
