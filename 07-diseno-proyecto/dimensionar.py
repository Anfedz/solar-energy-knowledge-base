"""Pre-dimensionamiento FV para Sabanalarga (on-grid, híbrido y off-grid).

Usa la producción mensual por kWp de PVGIS (06-datos/recurso_mensual.csv) y el inventario
de cargas (plantilla-inventario-cargas.csv). Es una herramienta de anteproyecto: el diseño
final se valida con strings reales, fichas técnicas y simulación (PVGIS/SAM).

Uso:
  python3 -I dimensionar.py --cargas plantilla-inventario-cargas.csv
  python3 -I dimensionar.py --kwh-mes 450 --tarifa 1000 --costo-kwp 3800000
  python3 -I dimensionar.py --cargas mis_cargas.csv --autonomia 1.5 --panel-w 620
"""
import argparse
import csv
import math
from pathlib import Path

HERE = Path(__file__).parent
RECURSO = HERE.parent / "06-datos" / "recurso_mensual.csv"
DIAS_MES = [31, 28.25, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

# Tarifas Air-e oct-2026, Nivel 1, activos del OR (COP/kWh) — 02-marco-legal-y-regulatorio/tarifas-energia-atlantico.md
CU = 936.3955
CV = 133.3886            # comercialización cobrada por kWh permutado (CREG 174 art. 25, AGPE <= 100 kW)
SUBSISTENCIA = 173       # kWh/mes, municipios < 1000 m s.n.m.
TARIFA_SUB = {1: 555.2485, 2: 694.0610, 3: 795.9362, 4: CU, 5: 1123.6746, 6: 1123.6746}


def factura(kwh, estrato, cu=CU):
    """Costo mensual de energía (sin cargos fijos) según estrato."""
    kwh = max(kwh, 0)
    if estrato <= 3:
        return min(kwh, SUBSISTENCIA) * TARIFA_SUB[estrato] * cu / CU + max(kwh - SUBSISTENCIA, 0) * cu
    return kwh * TARIFA_SUB[estrato] * cu / CU


def leer_recurso(col="Yield_kWh_kWp_dia_NSRDB_10S"):
    with open(RECURSO) as fh:
        return [float(r[col]) for r in csv.DictReader(fh)]


def leer_cargas(path):
    cargas = []
    with open(path) as fh:
        for r in csv.DictReader(fh):
            try:
                n, w, h = float(r["cantidad"]), float(r["potencia_W"]), float(r["horas_dia"])
            except (ValueError, KeyError):
                continue
            dias = float(r.get("dias_semana") or 7)
            franja = (r.get("franja_horaria(manana/tarde/noche/madrugada)") or "").lower()
            cargas.append({
                "nombre": r["aparato"], "w": n * w, "wh_dia": n * w * h * dias / 7,
                "critico": (r.get("critico_en_corte_si_no") or "").strip().lower() == "si",
                "inverter": (r.get("inverter_si_no") or "").strip().lower() == "si",
                # fracción del consumo que ocurre con sol (aprox.)
                "frac_dia": 0.9 if franja in ("manana", "tarde", "manana/tarde")
                else 0.5 if "todo" in franja or ("manana" in franja or "tarde" in franja) else 0.1,
            })
    return cargas


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--cargas", help="CSV de inventario de cargas")
    ap.add_argument("--kwh-mes", type=float, help="Consumo mensual promedio (si no hay inventario)")
    ap.add_argument("--estrato", type=int, default=4, choices=range(1, 7))
    ap.add_argument("--cu", type=float, default=CU, help="Costo unitario Air-e COP/kWh (oct-2026 = 936.4)")
    ap.add_argument("--costo-kwp", type=float, default=3_300_000,
                    help="COP/kWp llave en mano on-grid (mercado oct-2026: 2.8-4.7 M; Barranquilla 2.8-3.8 M)")
    ap.add_argument("--costo-kwh-bat", type=float, default=1_300_000,
                    help="COP/kWh batería LiFePO4 48 V con IVA e instalación (equipo 0.68-1.34 M, oct-2026)")
    ap.add_argument("--panel-w", type=float, default=600)
    ap.add_argument("--autonomia", type=float, default=1.0, help="Días de autonomía off-grid")
    ap.add_argument("--dod", type=float, default=0.8, help="Profundidad de descarga (LiFePO4 0.8-0.9; plomo 0.5)")
    ap.add_argument("--horas-corte", type=float, default=4, help="Horas de respaldo deseadas (híbrido)")
    ap.add_argument("--cobertura", type=float, default=1.0, help="Fracción del consumo a cubrir on-grid")
    a = ap.parse_args()

    yld = leer_recurso()
    yld_anual = sum(y * d for y, d in zip(yld, DIAS_MES))
    yld_min = min(yld)

    cargas = leer_cargas(a.cargas) if a.cargas else []
    if cargas:
        wh_dia = sum(c["wh_dia"] for c in cargas)
        kwh_mes = wh_dia * 30.4 / 1000
        p_simult = sum(c["w"] for c in cargas)
        crit = [c for c in cargas if c["critico"]]
        p_crit = sum(c["w"] for c in crit)
        wh_crit_h = p_crit  # Wh por hora de corte si todo lo crítico estuviera prendido
        frac_dia = sum(c["wh_dia"] * c["frac_dia"] for c in cargas) / wh_dia
        motores = [c for c in cargas if not c["inverter"] and any(k in c["nombre"].lower() for k in
                   ("aire", "bomba", "nevera", "lavadora", "congelador", "compresor"))]
        p_arranque = max((c["w"] * 4 for c in motores), default=0)
    elif a.kwh_mes:
        kwh_mes, wh_dia = a.kwh_mes, a.kwh_mes * 1000 / 30.4
        p_simult = p_crit = wh_crit_h = p_arranque = 0
        frac_dia = 0.35
    else:
        ap.error("Indica --cargas o --kwh-mes")

    print(f"\n=== Consumo ===\n  {kwh_mes:.0f} kWh/mes  ({wh_dia/1000:.1f} kWh/día); fracción diurna estimada {frac_dia:.0%}")
    if cargas:
        print("  Mayores consumidores:")
        for c in sorted(cargas, key=lambda c: -c["wh_dia"])[:5]:
            print(f"   - {c['nombre'][:45]:45s} {c['wh_dia']/1000:5.2f} kWh/día ({c['wh_dia']/wh_dia:.0%})")

    print(f"\n=== Recurso (PVGIS-NSRDB, techo 10° sur, 14 % pérdidas) ===\n"
          f"  {yld_anual:.0f} kWh/kWp/año; mes crítico {yld_min:.2f} kWh/kWp/día")

    # On-grid
    kwp = kwh_mes * 12 * a.cobertura / yld_anual
    n_pan = math.ceil(kwp * 1000 / a.panel_w)
    kwp_r = n_pan * a.panel_w / 1000
    gen = kwp_r * yld_anual
    inv = kwp_r / 1.2
    costo = kwp_r * a.costo_kwp
    autoc = min(frac_dia * kwh_mes * 12, gen)
    exced = min(gen, kwh_mes * 12) - autoc        # permutado 1:1 (paga Cv por kWh)
    ahorro = 12 * (factura(kwh_mes, a.estrato, a.cu) - factura(kwh_mes - (autoc + exced) / 12, a.estrato, a.cu)) \
        - exced * CV * a.cu / CU
    print(f"\n=== ON-GRID (cubrir {a.cobertura:.0%}) ===\n"
          f"  {n_pan} paneles de {a.panel_w:.0f} W = {kwp_r:.2f} kWp; inversor ~{inv:.1f} kW AC (DC/AC 1.2)\n"
          f"  Generación {gen:.0f} kWh/año ({gen/12:.0f} kWh/mes); área de techo ~{n_pan*2.8:.0f} m²\n"
          f"  Autoconsumo directo aprox. {autoc/gen:.0%}; resto se inyecta y se permuta 1:1 pagando Cv ~{CV:.0f} COP/kWh\n"
          f"  Factura actual (energía, estrato {a.estrato}) ~{factura(kwh_mes, a.estrato, a.cu)/1e3:.0f} mil COP/mes\n"
          f"  Costo ~{costo/1e6:.1f} M COP; ahorro ~{ahorro/1e6:.1f} M COP/año; payback simple ~{costo/ahorro:.1f} años")

    # Híbrido
    if p_crit:
        bat_kwh = wh_crit_h * a.horas_corte / 1000 / a.dod * 0.6  # 0.6 = factor de simultaneidad
        print(f"\n=== HÍBRIDO (respaldo {a.horas_corte:.0f} h de cargas críticas) ===\n"
              f"  Cargas críticas {p_crit:.0f} W; batería útil ~{bat_kwh*a.dod:.1f} kWh -> nominal ~{bat_kwh:.1f} kWh (DoD {a.dod:.0%})\n"
              f"  Inversor híbrido >= {max(inv, p_crit/1000*1.25):.1f} kW; costo baterías ~{bat_kwh*a.costo_kwh_bat/1e6:.1f} M COP adicionales")

    # Off-grid
    kwp_off = wh_dia / 1000 / yld_min * 1.10  # 10 % margen extra por pérdidas de batería
    bat_off = wh_dia * (1 - frac_dia * 0.7) * a.autonomia / 1000 / a.dod / 0.95
    p_inv = max(p_simult * 0.7, p_arranque, 1000) / 1000
    print(f"\n=== OFF-GRID (mes crítico, {a.autonomia} días autonomía) ===\n"
          f"  FV ~{kwp_off:.2f} kWp ({math.ceil(kwp_off*1000/a.panel_w)} paneles); "
          f"batería ~{bat_off:.1f} kWh nominal; inversor >= {p_inv:.1f} kW continuo"
          + (f" (pico de arranque estimado {p_arranque/1000:.1f} kW)" if p_arranque else "") +
          f"\n  Costo indicativo ~{(kwp_off*a.costo_kwp*1.1 + bat_off*a.costo_kwh_bat)/1e6:.1f} M COP")
    if a.estrato <= 3 and kwh_mes > SUBSISTENCIA:
        kwp_sub = (kwh_mes - SUBSISTENCIA) * 12 / yld_anual
        print(f"\n  Estrato {a.estrato}: los primeros {SUBSISTENCIA} kWh/mes son subsidiados. Un sistema de ~{kwp_sub:.1f} kWp "
              f"cubre solo el consumo a tarifa plena y suele dar el mejor retorno por peso invertido.")
    print("\n  Nota: cifras de anteproyecto. Ajustar tarifas y costos con 03-mercado-y-equipos y 02-marco-legal.\n")


if __name__ == "__main__":
    main()
