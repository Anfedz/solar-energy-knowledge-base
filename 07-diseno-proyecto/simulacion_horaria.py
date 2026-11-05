"""Simulación hora a hora: on-grid (CREG 174) vs. cotización híbrida off-grid sin inyección (SRNE + Ronma).

Uso:  python3 -I simulacion_horaria.py
Entradas:
  - 06-datos/raw/pvgis_horario_{este,oeste}_10deg_2011_2015.csv  (PVGIS-NSRDB, W por kWp, hora UTC)
  - consumo-historico.csv  (12 facturas reales)
  - Perfil horario de cargas construido con el inventario y el horario de aires reportado (2026-11-05).
Supuestos marcados ⚠️ en 05-analisis-cotizacion.md.
"""
import csv
from collections import defaultdict
from pathlib import Path

HERE = Path(__file__).parent
RAW = HERE.parent / "06-datos" / "raw"

CU, CV, SUB, ALUMBRADO = 936.3955, 133.3886, 0.15, 0.10
BOLSA = 300            # COP/kWh por excedente neto (⚠️ supuesto)
SOMBRA = 0.10          # pérdida por árboles + suciedad adicional (⚠️ supuesto, igual que anteproyecto.py)
P_PANEL = 0.63         # kWp por módulo Ronma RM-630

# ---------- Perfil de cargas (kW por hora local 0..23) ----------
def perfil_base():
    h = [0.0] * 24
    for i in range(24):
        h[i] += 0.126          # nevera LG + congelador Electrolux (etiquetas +30 % por calor)
        h[i] += 0.06           # módem, standby, cargadores
    for i in range(18, 23): h[i] += 0.15     # iluminación
    for i in range(9, 17): h[i] += 0.12      # PC de día
    for i in range(19, 23): h[i] += 0.25     # TV/PC noche
    for i in (7, 12): h[i] += 0.40           # cocina: microondas, plancha
    h[9] += 0.30                             # lavadora (0,67 kWh/ciclo, ~día por medio)
    for i in range(10, 18): h[i] += 0.05     # impresora 3D (⚠️ supuesto)
    return h


def perfil_aires():
    """Horario reportado: Aire 3 de 23 a 7 h + 2-3 h de día; Aires 1 y 2: 2-3 h de día + 2 h de noche.
    Horas de día asumidas en la tarde (13-16 h) ⚠️."""
    h = [0.0] * 24
    # Aire 3 LG 9 000 BTU inverter: arranque 0,70 kW y luego carga parcial 0,40 kW
    h[23] += 0.70
    for i in range(0, 7): h[i] += 0.40
    h[14] += 0.60; h[15] += 0.60; h[16] += 0.30
    # Aire 1 Olimpo 12 000 BTU velocidad fija (~85 % de ciclo de trabajo de 1,08 kW)
    h[13] += 0.90; h[14] += 0.90; h[15] += 0.45
    h[21] += 0.85; h[22] += 0.85
    # Aire 2 LG 12 000 BTU inverter
    h[14] += 0.65; h[15] += 0.65; h[16] += 0.33
    h[21] += 0.55; h[22] += 0.55
    return h


BASE, AIRES = perfil_base(), perfil_aires()


def perfil_mes(kwh_dia):
    """Escala los aires (y la base si hace falta) para igualar el consumo diario de la factura."""
    b, a = sum(BASE), sum(AIRES)
    s = (kwh_dia - b) / a
    if s >= 0.1:
        return [BASE[i] + s * AIRES[i] for i in range(24)]
    k = kwh_dia / (b + 0.1 * a)
    return [k * (BASE[i] + 0.1 * AIRES[i]) for i in range(24)]


# ---------- Producción horaria PVGIS ----------
def leer_pv(nombre):
    """dict[(año, mes)] -> lista de días, cada día = 24 valores kW/kWp en hora local (UTC-5)."""
    horas = {}
    with open(RAW / nombre) as fh:
        for line in fh:
            if not line[:4].isdigit() or ":" not in line[:14]:
                continue
            t, p = line.split(",")[:2]
            y, m, d, hh = int(t[:4]), int(t[4:6]), int(t[6:8]), int(t[9:11])
            horas[(y, m, d, hh)] = float(p) / 1000
    dias = defaultdict(dict)
    for (y, m, d, hh), p in horas.items():
        # hora local = UTC - 5: la hora UTC hh corresponde a la hora local (hh-5) del mismo día (o del anterior)
        lh = hh - 5
        key = (y, m, d) if lh >= 0 else None
        if key is None:
            continue  # las horas UTC 0-4 son 19-23 h locales del día anterior: de noche, P = 0
        dias[key][lh] = p
    out = defaultdict(list)
    for (y, m, d), hs in dias.items():
        out[(y, m)].append([hs.get(i, 0.0) for i in range(24)])
    return out


PV_E = leer_pv("pvgis_horario_este_10deg_2011_2015.csv")
PV_O = leer_pv("pvgis_horario_oeste_10deg_2011_2015.csv")
AÑOS = range(2011, 2016)


def costo_mes(kwh_neto, kwh_sub):
    kwh_neto = max(kwh_neto, 0)
    return kwh_neto * CU * (1 + ALUMBRADO) - min(kwh_neto, kwh_sub) * CU * SUB


# ---------- Simulación ----------
def simular(n_este, n_oeste, modo, eta=1.0, idle_kw=0.0, bat_kwh=0.0):
    """modo: 'ongrid' (CREG 174 con permuta mensual), 'cero' (sin inyección, mezcla PV+red ideal),
    'conmuta' (sin inyección y sin batería: si PV < carga, toda la carga pasa a la red)."""
    filas = [r for r in csv.DictReader(open(HERE / "consumo-historico.csv")) if r["fuente"] == "factura"]
    tot = defaultdict(float)
    for r in filas:
        mes_cons = (int(r["mes_factura"][5:7]) - 2) % 12 + 1
        dias, kwh, sub = float(r["dias"]), float(r["kwh"]), float(r["kwh_subsidiados"])
        carga = perfil_mes(kwh / dias)
        acum = defaultdict(float); n = 0
        for y in AÑOS:
            soc = bat_kwh * 0.5
            for de, do in zip(PV_E[(y, mes_cons)], PV_O[(y, mes_cons)]):
                n += 1
                for h in range(24):
                    pv = (n_este * de[h] + n_oeste * do[h]) * P_PANEL * eta * (1 - SOMBRA)
                    ld = carga[h] + idle_kw
                    acum["pv"] += pv
                    if modo == "ongrid":
                        acum["imp"] += max(ld - pv, 0); acum["exp"] += max(pv - ld, 0)
                    elif modo == "conmuta":
                        if pv >= ld:
                            acum["usado"] += ld; acum["recortado"] += pv - ld
                        else:
                            acum["imp"] += ld; acum["recortado"] += pv
                    else:  # 'cero' con o sin batería
                        directo = min(pv, ld); acum["usado"] += directo
                        sobra, falta = pv - directo, ld - directo
                        if bat_kwh:
                            carga_b = min(sobra * 0.95, bat_kwh * 0.95 - soc)
                            soc += carga_b; sobra -= carga_b / 0.95
                            desc = min(falta / 0.95, soc - bat_kwh * 0.10) if soc > bat_kwh * 0.10 else 0
                            desc = max(desc, 0); soc -= desc; falta -= desc * 0.95
                        acum["imp"] += falta; acum["recortado"] += sobra
        f = dias / n  # promedio diario × días de la factura
        imp, exp = acum["imp"] * f, acum["exp"] * f
        tot["antes"] += costo_mes(kwh, sub)
        if modo == "ongrid":
            perm = min(exp, imp)
            tot["despues"] += costo_mes(imp - perm, sub) + perm * CV - (exp - perm) * BOLSA
            tot["exced_neto"] += exp - perm
        else:
            tot["despues"] += costo_mes(imp, sub)
        tot["pv"] += acum["pv"] * f; tot["recortado"] += acum["recortado"] * f; tot["consumo"] += kwh
        tot["imp"] += imp
    return tot


ESCENARIOS = [
    # nombre, este, oeste, modo, eta, idle_kW, batería kWh, costo M COP
    ("A. Cotización tal cual: 12×630 + SRNE sin batería, sin inyección (mezcla ideal)", 6, 6, "cero", 0.96, 0.05, 0, 14.4),
    ("A'. Ídem, si el SRNE conmuta (no mezcla PV + red sin batería)", 6, 6, "conmuta", 0.96, 0.05, 0, 14.4),
    ("B. Cotización + batería 5,12 kWh (Felicity)", 6, 6, "cero", 0.96, 0.05, 5.12, 14.4 + 5.2),
    ("C. Cotización + batería 10 kWh (Felicity)", 6, 6, "cero", 0.96, 0.05, 10.0, 14.4 + 9.6),
    ("D. 12×630 on-grid con excedentes (sobredimensionado)", 6, 6, "ongrid", 1.0, 0, 0, 13.0),
    ("E. 7×630 on-grid con excedentes, cara este", 7, 0, "ongrid", 1.0, 0, 0, 11.7),
    ("F. 8×630 on-grid con excedentes, cara este", 8, 0, "ongrid", 1.0, 0, 0, 12.2),
]


def main():
    print("| Escenario | kWp | Producción útil kWh/año | Energía desperdiciada kWh/año | Excedente neto a bolsa kWh/año | "
          "Compra a la red kWh/año | Ahorro M COP/año | % de la factura | Costo M COP | Payback |")
    print("|---|---|---|---|---|---|---|---|---|---|")
    for nom, e, o, modo, eta, idle, bat, costo in ESCENARIOS:
        t = simular(e, o, modo, eta, idle, bat)
        ahorro = t["antes"] - t["despues"]
        util = t["pv"] - t["recortado"] - t["exced_neto"]
        print(f"| {nom} | {(e+o)*P_PANEL:.2f} | {util:,.0f} | {t['recortado']:,.0f} | {t['exced_neto']:,.0f} | "
              f"{t['imp']:,.0f} | {ahorro/1e6:.2f} | {ahorro/t['antes']:.0%} | {costo:.1f} | "
              f"{(costo/(ahorro/1e6)) if ahorro > 0 else float('inf'):.1f} años |")
    b, a = sum(BASE), sum(AIRES)
    print(f"\nPerfil: base {b:.1f} kWh/día; aires a horario completo {a:.1f} kWh/día. "
          f"Consumo de 12 meses: {t['consumo']:,.0f} kWh; factura de energía + alumbrado sin solar: {t['antes']/1e6:.2f} M COP/año (CU {CU:.0f}).")


if __name__ == "__main__":
    main()
