#!/usr/bin/env python3
"""Fetch hero images and logos from project websites with scoring heuristics."""

from __future__ import annotations

import json
import re
import subprocess
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
HERO_DIR = ROOT / "src/assets/projects"
LOGO_DIR = ROOT / "src/assets/logos"

UA = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
)

PROJECTS = {
    "001": "https://dtusciencepark.com",
    "002": "https://folkeskolen.dk",
    "003": "https://www.profil-rejser.dk",
    "004": "https://kf.wp.prod.combell.peytz.dk",
    "005": "https://www.pulsen.dk",
    "007": "https://diabetes.wp.prod.combell.peytz.dk",
    "008": "https://www.gigtforeningen.dk",
    "009": "https://www.scleroseforeningen.dk",
    "010": "https://aftryk.maryfonden.dk",
    "011": "https://visitgreenland.com",
    "012": "https://enhedslisten.dk",
    "013": "https://www.royalarcticline.com",
    "014": "https://vaerdibyg.dk",
    "015": "https://holdet.dk",
    "016": "https://bjornparfume.dk",
    "017": "https://www.skills4reuse.com",
}

LOGOS = {
    "dtusciencepark": "https://dtusciencepark.com",
    "folkeskolen": "https://folkeskolen.dk",
    "profil-rejser": "https://www.profil-rejser.dk",
    "pulsen": "https://www.pulsen.dk",
    "diabetes": "https://diabetes.wp.prod.combell.peytz.dk",
    "visitgreenland": "https://visitgreenland.com",
    "royalarcticline": "https://www.royalarcticline.com",
    "enhedslisten": "https://enhedslisten.dk",
    "vaerdibyg": "https://vaerdibyg.dk",
    "maryfonden": "https://www.maryfonden.dk",
    "kf": "https://kf.wp.prod.combell.peytz.dk",
    "gigtforeningen": "https://www.gigtforeningen.dk",
    "scleroseforeningen": "https://www.scleroseforeningen.dk",
    "aftryk": "https://aftryk.maryfonden.dk",
}

FALLBACK_HEROES: dict[str, str] = {
    "016": "https://bjornparfume.dk/wp-content/uploads/2024/10/holy-i-aeske-scaled.jpg",
    "017": "https://www.skills4reuse.com/Media/638452297563818103/Skills4reuse_hero%20billede_02.svg?width=1600",
}
# Known-good logo URLs when heuristics pick the wrong asset (e.g. partner logos in page body).
FALLBACK_LOGOS: dict[str, str] = {
    "folkeskolen": "https://www.folkeskolen.dk/wp-content/themes/folkeskolen/assets/dist/img/folkeskolen-logo.svg",
    "dtusciencepark": "https://dtusciencepark.com/wp-content/uploads/2023/06/dtu_logo_dark.svg",
    "visitgreenland": "https://visitgreenland.com/wp-content/themes/visitgreenland/assets/dist/img/logo.svg",
    "kf": "https://kf.wp.prod.combell.peytz.dk/wp-content/themes/kf/assets/dist/img/logo.svg",
    "vaerdibyg": "https://vaerdibyg.dk/wp-content/themes/vaerdibyg/assets/dist/img/logo.svg",
    "gigtforeningen": "https://www.gigtforeningen.dk/wp-content/themes/gigtforeningen/assets/dist/img/logo.svg",
    "scleroseforeningen": "https://www.scleroseforeningen.dk/wp-content/themes/scleroseforeningen/assets/dist/img/logo.svg",
    "royalarcticline": "https://www.ral.gl/wp-content/themes/ral/assets/dist/img/logo.svg",
}


def fetch_html(url: str) -> tuple[str, str]:
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "text/html,*/*"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        final = resp.geturl()
        return resp.read().decode("utf-8", errors="ignore"), final


def meta_content(html: str, key: str) -> str | None:
    patterns = [
        rf'<meta[^>]+(?:property|name)=["\']{key}["\'][^>]+content=["\']([^"\']+)["\']',
        rf'<meta[^>]+content=["\']([^"\']+)["\'][^>]+(?:property|name)=["\']{key}["\']',
    ]
    for pat in patterns:
        m = re.search(pat, html, re.I)
        if m:
            return m.group(1)
    return None


def all_urls(html: str, base: str) -> list[str]:
    urls: list[str] = []
    for m in re.finditer(r'(?:src|href|content)=["\']([^"\']+)["\']', html, re.I):
        u = urllib.parse.urljoin(base, m.group(1).strip())
        if u.startswith(("http://", "https://", "/")):
            urls.append(urllib.parse.urljoin(base, m.group(1).strip()))
    return urls


def is_bad_hero(url: str) -> bool:
    low = url.lower()
    bad = [
        "logo", "icon", "favicon", "sprite", "avatar", "1x1", "pixel", "emoji",
        "share-image", "facebook", "og-default", "placeholder", "arrow", "slider-arrow",
        "badge", "flag", "svg", "gravatar", "blank", "spinner", "loading",
        "thumb", "thumbnail", "yoast", "watermark", "overlay",
    ]
    return any(b in low for b in bad) or not re.search(r"\.(jpg|jpeg|png|webp|avif)(\?|$)", low)


def is_good_logo(url: str) -> bool:
    low = url.lower()
    if any(x in low for x in ["hero", "banner", "mockup", "thumb", "background", "portrait"]):
        return False
    return bool(re.search(r"\.(svg|png|webp|jpg|jpeg|ico)(\?|$)", low))


def score_hero(url: str) -> int:
    low = url.lower()
    score = 0
    if "hero" in low or "forside" in low or "front" in low:
        score += 40
    if "io-focal" in low or "focal" in low:
        score += 25
    if "wp-content/uploads" in low:
        score += 20
    for dim in re.findall(r"(\d{3,4})x(\d{3,4})", low):
        w, h = map(int, dim)
        area = w * h
        if area > 400_000:
            score += 35
        elif area > 150_000:
            score += 20
    if "scaled" in low or "large" in low or "1920" in low:
        score += 15
    if is_bad_hero(url):
        score -= 100
    return score


def score_logo(url: str, html: str) -> int:
    low = url.lower()
    score = 0
    if low.endswith(".svg"):
        score += 50
    if "logo" in low or "brand" in low or "site-logo" in low:
        score += 40
    if any(x in low for x in ["pressenaevnet", "partner", "sponsor", "advert"]):
        score -= 80
    if "apple-touch-icon" in low:
        score += 10
    if "favicon" in low:
        score += 5
    if url in html and re.search(r'class=["\'][^"\']*logo', html, re.I):
        score += 15
  # penalize huge raster likely wrong
    if re.search(r"\.(jpg|jpeg|png)", low) and any(x in low for x in ["relation", "portrait", "hero", "banner"]):
        score -= 50
    if not is_good_logo(url):
        score -= 100
    return score


def download(url: str, dest: Path) -> bool:
    try:
        req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "image/*,*/*"})
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = resp.read()
        if len(data) < 8_000:
            return False
        dest.write_bytes(data)
        return True
    except Exception:
        return False


def optimize_image(path: Path, max_px: int = 1600) -> None:
    subprocess.run(["sips", "-Z", str(max_px), str(path), "--out", str(path)], capture_output=True)


def optimize_logo(path: Path) -> None:
    if path.suffix.lower() == ".svg":
        return
    subprocess.run(["sips", "-Z", "256", str(path), "--out", str(path)], capture_output=True)


def pick_ext(url: str, path: Path) -> Path:
    low = url.lower()
    for ext in [".webp", ".avif", ".jpg", ".jpeg", ".png", ".svg"]:
        if ext in low.split("?")[0]:
            return path.with_suffix(ext if ext != ".jpeg" else ".jpg")
    return path.with_suffix(path.suffix or ".jpg")


def best_hero(html: str, base: str) -> str | None:
    candidates: list[tuple[int, str]] = []
    for key in ("og:image", "twitter:image"):
        val = meta_content(html, key)
        if val:
            u = urllib.parse.urljoin(base, val)
            candidates.append((score_hero(u) + 30, u))
    for u in all_urls(html, base):
        if re.search(r"\.(jpg|jpeg|png|webp|avif)(\?|$)", u, re.I) and not is_bad_hero(u):
            candidates.append((score_hero(u), u))
    candidates.sort(key=lambda x: x[0], reverse=True)
    for score, url in candidates[:12]:
        if score > 10:
            return url
    return candidates[0][1] if candidates else None


def best_logo(html: str, base: str) -> str | None:
    candidates: list[tuple[int, str]] = []
    for u in all_urls(html, base):
        if is_good_logo(u):
            candidates.append((score_logo(u, html), u))
    candidates.sort(key=lambda x: x[0], reverse=True)
    for score, url in candidates[:15]:
        if score > 15:
            return url
    return candidates[0][1] if candidates else None


def main() -> None:
    HERO_DIR.mkdir(parents=True, exist_ok=True)
    LOGO_DIR.mkdir(parents=True, exist_ok=True)
    report: dict[str, object] = {"heroes": {}, "logos": {}}

    for pid, url in PROJECTS.items():
        out = HERO_DIR / f"{pid}-hero"
        chosen = FALLBACK_HEROES.get(pid)
        try:
            html, final = fetch_html(url)
            chosen = best_hero(html, final) or chosen
        except Exception as e:
            report["heroes"][pid] = {"error": str(e), "url": url}
            continue
        if not chosen:
            report["heroes"][pid] = {"error": "no candidate", "url": url}
            continue
        dest = pick_ext(chosen, out)
        if download(chosen, dest):
            if dest.suffix.lower() != ".svg":
                optimize_image(dest)
            report["heroes"][pid] = {"ok": True, "source": chosen, "file": dest.name, "bytes": dest.stat().st_size}
            print(f"HERO {pid}: {dest.name} <- {chosen[:90]}")
        else:
            report["heroes"][pid] = {"error": "download failed", "source": chosen}

    for slug, url in LOGOS.items():
        out = LOGO_DIR / slug
        chosen = FALLBACK_LOGOS.get(slug)
        try:
            html, final = fetch_html(url)
            chosen = best_logo(html, final) or chosen
        except Exception as e:
            if chosen:
                pass
            else:
                report["logos"][slug] = {"error": str(e), "url": url}
                continue
        if not chosen:
            report["logos"][slug] = {"error": "no candidate", "url": url}
            continue
        dest = pick_ext(chosen, out)
        if download(chosen, dest):
            optimize_logo(dest)
            if dest.stat().st_size > 120_000 and dest.suffix.lower() != ".svg":
                report["logos"][slug] = {"warn": "large file", "source": chosen, "bytes": dest.stat().st_size}
            else:
                report["logos"][slug] = {"ok": True, "source": chosen, "file": dest.name, "bytes": dest.stat().st_size}
            print(f"LOGO {slug}: {dest.name} ({dest.stat().st_size // 1024}KB)")
        else:
            report["logos"][slug] = {"error": "download failed", "source": chosen}

    (ROOT / "scripts/fetch-report.json").write_text(json.dumps(report, indent=2))
    print("Report written to scripts/fetch-report.json")


if __name__ == "__main__":
    main()
