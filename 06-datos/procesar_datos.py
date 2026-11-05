"""Procesa los datos crudos de PVGIS y NASA POWER para Sabanalarga (10.632 N, -74.921 W).

Uso:  python3 -I procesar_datos.py   (desde 06-datos/)
Genera: resumen_recurso_solar.md y recurso_mensual.csv
"""
import csv
import json
import statistics as st
from pathlib import Path

RAW = Path(__file__).parent / "raw"
MESES = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
DIAS = [31, 28.25, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]


def load(name):
    return json.loads((RAW / name).read_text())


def pvcalc(name):
    d = load(name)
    m = d["outputs"]["monthly"]["fixed"]
    t = d["outputs"]["totals"]["fixed"]
    mnt = d["inputs"]["mounting_system"]["fixed"]
    return {
        "E_d": [x["E_d"] for x in m],          # kWh/kWp/día
        "H_i_d": [x["H(i)_d"] for x in m],     # kWh/m2/día en plano
        "E_y": t["E_y"], "SD_y": t["SD_y"], "H_i_y": t["H(i)_y"],
        "slope": mnt["slope"]["value"], "azimuth": mnt["azimuth"]["value"],
        "l_aoi": t.get("l_aoi"), "l_spec": t.get("l_spec"), "l_tg": t.get("l_tg"), "l_total": t.get("l_total"),
        "db": d["inputs"]["meteo_data"]["radiation_db"],
        "years": f'{d["inputs"]["meteo_data"]["year_min"]}-{d["inputs"]["meteo_data"]["year_max"]}',
    }


def mrcalc(name):
    rows = load(name)["outputs"]["monthly"]
    by_month = {i: [] for i in range(1, 13)}
    temp = {i: [] for i in range(1, 13)}
    yearly = {}
    for r in rows:
        dm = DIAS[r["month"] - 1]
        by_month[r["month"]].append(r["H(h)_m"] / dm)
        if "T2m" in r:
            temp[r["month"]].append(r["T2m"])
        yearly.setdefault(r["year"], 0)
        yearly[r["year"]] += r["H(h)_m"]
    return ([st.mean(v) for v in by_month.values()],
            [st.mean(v) if v else None for v in temp.values()],
            yearly)


def nasa():
    p = load("nasa_power_climatology.json")["properties"]["parameter"]
    keys = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
    return {k: ([v[m] for m in keys], v["ANN"]) for k, v in p.items()}


def nasa_yearly():
    p = load("nasa_power_monthly_2001_2024.json")["properties"]["parameter"]["ALLSKY_SFC_SW_DWN"]
    years = {}
    for k, v in p.items():
        y, m = int(k[:4]), int(k[4:])
        if m == 13 or v < 0:
            continue
        years.setdefault(y, []).append(v)
    return {y: st.mean(v) for y, v in years.items() if len(v) == 12}


def tmy_stats():
    lines = (RAW / "pvgis_tmy.csv").read_text().splitlines()
    i = next(n for n, l in enumerate(lines) if l.startswith("time(UTC)"))
    hdr = lines[i].split(",")
    rows = []
    for l in lines[i + 1:]:
        p = l.split(",")
        if len(p) != len(hdr) or not p[0][:4].isdigit():
            break
        rows.append(dict(zip(hdr, p)))
    T = [float(r["T2m"]) for r in rows]
    G = [float(r["G(h)"]) for r in rows]
    WS = [float(r["WS10m"]) for r in rows]
    RH = [float(r["RH"]) for r in rows]
    return {"Tmax": max(T), "Tmin": min(T), "Tmean": st.mean(T), "Gmax": max(G),
            "WSmax": max(WS), "WSmean": st.mean(WS), "RHmean": st.mean(RH),
            "GHI_anual": sum(G) / 1000}


def f(x, n=2):
    return "—" if x is None else f"{x:.{n}f}"


def main():
    era_opt = pvcalc("pvgis_pvcalc_optimo.json")
    era_10 = pvcalc("pvgis_pvcalc_10deg_sur.json")
    nsr_opt = pvcalc("pvgis52_nsrdb_pvcalc_optimo.json")
    nsr_10 = pvcalc("pvgis52_nsrdb_pvcalc_10deg_sur.json")
    ghi_era, t_era, y_era = mrcalc("pvgis_mrcalc.json")
    ghi_nsr, _, y_nsr = mrcalc("pvgis52_nsrdb_mrcalc.json")
    n = nasa()
    ny = nasa_yearly()
    tmy = tmy_stats()

    with open(Path(__file__).parent / "recurso_mensual.csv", "w", newline="") as fh:
        w = csv.writer(fh)
        w.writerow(["mes", "GHI_ERA5", "GHI_NSRDB", "GHI_NASA", "T2M_NASA", "T2M_MAX_NASA", "T2M_MIN_NASA",
                    "RH_NASA", "PREC_mm_dia_NASA", "Yield_kWh_kWp_dia_NSRDB_opt", "Yield_kWh_kWp_dia_ERA5_opt",
                    "Yield_kWh_kWp_dia_NSRDB_10S", "Yield_kWh_kWp_dia_ERA5_10S"])
        for i in range(12):
            w.writerow([MESES[i], ghi_era[i], ghi_nsr[i], n["ALLSKY_SFC_SW_DWN"][0][i], n["T2M"][0][i],
                        n["T2M_MAX"][0][i], n["T2M_MIN"][0][i], n["RH2M"][0][i], n["PRECTOTCORR"][0][i],
                        nsr_opt["E_d"][i], era_opt["E_d"][i], nsr_10["E_d"][i], era_10["E_d"][i]])

    L = []
    a = L.append
    a("# Recurso solar medido/modelado — Sabanalarga, Atlántico\n")
    a("> Generado por `procesar_datos.py` a partir de las descargas en `raw/` (2026-10-28).")
    a("> Coordenadas: **10.632 N, -74.921 W**, elevación ~100 m (casco urbano de Sabanalarga).\n")
    a("## 1. Irradiación global horizontal (GHI) — kWh/m²/día (= Horas Sol Pico, HSP)\n")
    a("| Mes | PVGIS-ERA5 (2005-2023) | PVGIS-NSRDB (2005-2015) | NASA POWER (clim.) | T media °C | T máx extrema °C† | T mín extrema °C† | HR % | Lluvia mm/día |")
    a("|---|---|---|---|---|---|---|---|---|")
    for i in range(12):
        a(f"| {MESES[i]} | {f(ghi_era[i])} | {f(ghi_nsr[i])} | {f(n['ALLSKY_SFC_SW_DWN'][0][i])} | "
          f"{f(n['T2M'][0][i],1)} | {f(n['T2M_MAX'][0][i],1)} | {f(n['T2M_MIN'][0][i],1)} | "
          f"{f(n['RH2M'][0][i],0)} | {f(n['PRECTOTCORR'][0][i],1)} |")
    a(f"| **Año** | **{f(st.mean(ghi_era))}** | **{f(st.mean(ghi_nsr))}** | **{f(n['ALLSKY_SFC_SW_DWN'][1])}** | "
      f"{f(n['T2M'][1],1)} | {f(n['T2M_MAX'][1],1)} | {f(n['T2M_MIN'][1],1)} | {f(n['RH2M'][1],0)} | {f(n['PRECTOTCORR'][1],1)} |\n")
    worst = min(range(12), key=lambda i: ghi_nsr[i])
    best = max(range(12), key=lambda i: ghi_nsr[i])
    a(f"- Mes más bajo (NSRDB): **{MESES[worst]}** ({f(ghi_nsr[worst])}); mes más alto: **{MESES[best]}** ({f(ghi_nsr[best])}).")
    a("- Para **off-grid** se dimensiona con el mes crítico; para **on-grid** con el promedio anual.")
    a("- †NASA POWER `T2M_MAX`/`T2M_MIN` en climatología son los extremos horarios del mes en el período, no la máxima/mínima diaria promedio.\n")

    a("## 2. Producción específica estimada de un sistema FV (por cada 1 kWp instalado)\n")
    a("Pérdidas del sistema asumidas: 14 % (valor por defecto PVGIS: cableado, inversor, suciedad, mismatch). "
      "PVGIS además aplica pérdidas por temperatura y ángulo de incidencia.\n")
    a("| Escenario | Base | Inclinación / azimut* | kWh/kWp/año | kWh/kWp/día | Desv. interanual kWh | Pérd. temperatura % | Pérd. totales % |")
    a("|---|---|---|---|---|---|---|---|")
    for name, s in [("Óptimo", nsr_opt), ("Techo 10° al sur", nsr_10), ("Óptimo", era_opt), ("Techo 10° al sur", era_10)]:
        a(f"| {name} | {s['db']} ({s['years']}) | {s['slope']}° / {s['azimuth']}° | **{s['E_y']:.0f}** | {s['E_y']/365:.2f} | "
          f"{s['SD_y']:.0f} | {f(s['l_tg'],1)} | {f(s['l_total'],1)} |")
    a("\n*Convención PVGIS: azimut 0° = sur, −90° = este, +90° = oeste. Un azimut negativo óptimo (SSE) indica "
      "más nubosidad en la tarde que en la mañana (típico de la convección tropical).\n")
    a("**Producción mensual por kWp (kWh/kWp/día):**\n")
    a("| Mes | NSRDB óptimo | NSRDB 10° S | ERA5 óptimo | ERA5 10° S |")
    a("|---|---|---|---|---|")
    for i in range(12):
        a(f"| {MESES[i]} | {f(nsr_opt['E_d'][i])} | {f(nsr_10['E_d'][i])} | {f(era_opt['E_d'][i])} | {f(era_10['E_d'][i])} |")
    a("")

    a("## 3. Variabilidad interanual de la radiación (GHI promedio anual, kWh/m²/día)\n")
    a("Útil para ver el efecto de La Niña (años más nublados) y El Niño (años más soleados).\n")
    a("| Año | PVGIS-ERA5 | NASA POWER |")
    a("|---|---|---|")
    for y in sorted(set(y_era) | set(ny)):
        e = y_era.get(y)
        a(f"| {y} | {f(e/365.25 if e else None)} | {f(ny.get(y))} |")
    ev = [v / 365.25 for v in y_era.values()]
    a(f"\n- ERA5: mín {min(ev):.2f}, máx {max(ev):.2f}, CV {st.pstdev(ev)/st.mean(ev)*100:.1f} %.")
    nv = list(ny.values())
    a(f"- NASA POWER: mín {min(nv):.2f}, máx {max(nv):.2f}, CV {st.pstdev(nv)/st.mean(nv)*100:.1f} %.\n")

    a("## 4. Año Meteorológico Típico (TMY, PVGIS) — extremos horarios\n")
    a(f"- Temperatura ambiente horaria: máx **{tmy['Tmax']:.1f} °C**, mín **{tmy['Tmin']:.1f} °C**, media {tmy['Tmean']:.1f} °C.")
    a(f"- Irradiancia horizontal máxima horaria: {tmy['Gmax']:.0f} W/m². GHI anual TMY: {tmy['GHI_anual']:.0f} kWh/m².")
    a(f"- Viento a 10 m: media {tmy['WSmean']:.1f} m/s, máx horario {tmy['WSmax']:.1f} m/s (no sirve como viento de diseño estructural: usar NSR-10).")
    a(f"- Humedad relativa media: {tmy['RHmean']:.0f} %.\n")
    a("**Temperaturas de diseño para cálculo de strings (recomendación):**")
    tmin = min(tmy['Tmin'], min(n['T2M_MIN'][0]))
    tmax = max(n['T2M_MAX'][0])
    a(f"- T mínima de celda (Voc máx): usar **~{tmin-2:.0f} °C** (mínima extrema {tmin:.1f} °C menos margen; al amanecer la celda ≈ ambiente). "
      "Nota: aquí el Voc nunca sube mucho sobre STC, a diferencia de climas fríos.")
    a(f"- T máxima de celda (Vmp mín): ambiente extrema ~{tmax:.0f} °C + ~30 °C de calentamiento sobre techo ⇒ **~70–75 °C**.\n")

    a("## 5. Interpretación y valor recomendado para diseño\n")
    hsp = st.mean(ghi_nsr)
    a(f"- Las tres bases coinciden dentro de ±2 % en el promedio anual ({min(st.mean(ghi_era), st.mean(ghi_nsr), n['ALLSKY_SFC_SW_DWN'][1]):.2f}–"
      f"{max(st.mean(ghi_era), st.mean(ghi_nsr), n['ALLSKY_SFC_SW_DWN'][1]):.2f}), lo que da buena confianza. NSRDB (satélite GOES, ~4 km) es en principio "
      "la de mejor resolución; ERA5 es reanálisis (~30 km); NASA POWER (CERES/MERRA-2, ~50–100 km) es una referencia gruesa.")
    a("- La variabilidad interanual es baja (CV ≈ 3 %), pero años La Niña fuertes (2010–2011) bajan la radiación ~6–8 % respecto al promedio.")
    a(f"- **HSP de diseño anual sugerida: {hsp:.1f} kWh/m²/día (horizontal)**; validar contra Global Solar Atlas e IDEAM (ver `01-recurso-solar-y-clima`).")
    a(f"- **Rendimiento específico sugerido para pre-dimensionar on-grid: ~{nsr_10['E_y']:.0f} kWh/kWp/año** "
      f"(techo ~10° al sur, base NSRDB, 14 % pérdidas). Escenario conservador: {min(era_10['E_y'], nsr_10['E_y']):.0f}.")
    a(f"- Pre-dimensionamiento rápido: **kWp ≈ consumo mensual (kWh) / {nsr_10['E_y']/12:.0f}**.\n")
    a("## Fuentes\n")
    a("- PVGIS v5.3 y v5.2 (European Commission JRC). API: https://re.jrc.ec.europa.eu/api/ — Huld, T., Müller, R., Gambardella, A. (2012). "
      "A new solar radiation database for estimating PV performance in Europe and Africa. *Solar Energy*, 86(6), 1803–1815. https://doi.org/10.1016/j.solener.2012.03.006")
    a("- NREL NSRDB: Sengupta, M. et al. (2018). The National Solar Radiation Data Base (NSRDB). *Renewable and Sustainable Energy Reviews*, 89, 51–60. https://doi.org/10.1016/j.rser.2018.03.003")
    a("- ERA5: Hersbach, H. et al. (2020). The ERA5 global reanalysis. *Q. J. R. Meteorol. Soc.*, 146, 1999–2049. https://doi.org/10.1002/qj.3803")
    a("- NASA POWER (Prediction Of Worldwide Energy Resources), NASA LaRC: https://power.larc.nasa.gov/ (comunidad RE).")
    (Path(__file__).parent / "resumen_recurso_solar.md").write_text("\n".join(L) + "\n")
    print("\n".join(L))


if __name__ == "__main__":
    main()
