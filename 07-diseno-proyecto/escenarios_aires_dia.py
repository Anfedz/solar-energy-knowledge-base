"""Sensibilidad: ¿qué pasa si los aires se usan más de día? Uso: python3 -I escenarios_aires_dia.py"""
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
import simulacion_horaria as sh

orig_aires = sh.AIRES[:]
orig_perfil = sh.perfil_mes

def correr(tag, extra=None):
    res = {}
    for nom, e, o, modo, eta, idle, bat in [("A cotización (sin inyección)", 6, 6, "cero", 0.96, 0.05, 0),
                                            ("A' si conmuta", 6, 6, "conmuta", 0.96, 0.05, 0),
                                            ("F 8×630 on-grid", 8, 0, "ongrid", 1.0, 0, 0),
                                            ("D 12×630 on-grid", 6, 6, "ongrid", 1.0, 0, 0)]:
        t = sh.simular(e, o, modo, eta, idle, bat)
        res[nom] = (t["antes"]/1e6, t["despues"]/1e6, (t["antes"]-t["despues"])/1e6, t["recortado"], t["consumo"])
    print(f"\n## {tag}")
    for k, (a, d, ah, rec, c) in res.items():
        print(f"{k:32s} factura sin solar {a:5.2f} M | con solar {d:5.2f} M | ahorro {ah:5.2f} M | desperdicio {rec:6.0f} kWh")

correr("Base: horario actual")

# Caso 1: mover las 2 h nocturnas de los Aires 1 y 2 (21-23 h) a 10-12 h (mismo consumo)
a = orig_aires[:]
a[21] -= 1.40; a[22] -= 1.40       # 0,85 + 0,55 en cada hora
a[10] += 1.40; a[11] += 1.40
sh.AIRES = a
correr("Caso 1: Aires 1 y 2 usan sus 2 h nocturnas a las 10-12 h (mismo consumo total)")

# Caso 2: horario actual + 4 h extra de día (11-15 h) del Aire 3 (LG 9 000 inverter, ~0,55 kW)
sh.AIRES = orig_aires[:]
def perfil_extra(kwh_dia):
    p = orig_perfil(kwh_dia)
    for h in range(11, 15): p[h] += 0.55
    return p
sh.perfil_mes = perfil_extra
correr("Caso 2: además, Aire 3 4 h extra de día (11-15 h, +2,2 kWh/día ≈ +800 kWh/año)")

# Caso 3: horario actual + los 3 aires 4 h extra de día (11-15 h)
def perfil_extra3(kwh_dia):
    p = orig_perfil(kwh_dia)
    for h in range(11, 15): p[h] += 0.55 + 0.65 + 0.90
    return p
sh.perfil_mes = perfil_extra3
correr("Caso 3: además, los 3 aires 4 h extra de día (11-15 h, +8,4 kWh/día ≈ +3 070 kWh/año)")
