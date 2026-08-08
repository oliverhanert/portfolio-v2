# Oliver Hanert — Portfolio

Personligt portfolio-site bygget med React, Vite og Tailwind CSS.

## Kom i gang

```bash
pnpm install
pnpm dev
```

Åbn [http://localhost:5173](http://localhost:5173).

## Scripts

| Kommando | Beskrivelse |
|----------|-------------|
| `pnpm dev` | Start udviklingsserver |
| `pnpm build` | Typecheck + produktionsbuild |
| `pnpm preview` | Forhåndsvis produktionsbuild |

## Projektstruktur

```
src/
  app/App.tsx          # Router og app-shell
  pages/               # Forside, projekt, kontakt, funbox
  components/          # UI-komponenter
  data/                # Projekter, kunder og kontaktdata
  assets/              # Billeder og logoer
  i18n/                # Dansk/engelsk tekster
  styles/              # Global CSS
```

## Hosting (dit setup)

Eksisterende infrastruktur:

- GitHub: [oliverhanert/portfolio-v2](https://github.com/oliverhanert/portfolio-v2)
- Vercel: [portfolio-sigma-plum-43.vercel.app](https://portfolio-sigma-plum-43.vercel.app)

Det nye site erstatter det gamle statiske HTML-site i samme repo. Vercel-projektet kan blive siddende — du skal bare opdatere build-indstillingerne én gang.

### Trin 1 — Push nyt site til `portfolio-v2`

```bash
cd /Users/oliverdyruphanert/peytz-custom-projects/portfolio
git init
git add .
git commit -m "Nyt React-portfolio"
git branch -M main
git remote add origin git@github.com:oliverhanert/portfolio-v2.git
git push -u origin main --force
```

`--force` overskriver det gamle HTML-site på `main`. Historikken ligger stadig på GitHub under tidligere commits, hvis du vil finde den igen.

### Trin 2 — Opdatér Vercel (ét projekt, samme URL)

1. Gå til [vercel.com/dashboard](https://vercel.com/dashboard) → projektet der peger på `portfolio-v2`
2. **Settings → General → Build & Development Settings**
3. Sæt:
   - **Framework Preset:** Vite
   - **Build Command:** `pnpm build`
   - **Output Directory:** `dist`
   - **Install Command:** `pnpm install`
4. **Deployments → Redeploy** seneste deployment (eller vent på auto-deploy efter push)

`vercel.json` i repoet matcher allerede disse værdier.

### Trin 3 — Domæne (Simply / anden udbyder)

Hvis du vil bruge et eget domæne (fx det du bestiller hos Simply):

1. Vercel → **Settings → Domains → Add**
2. Hos Simply: **DNS** → opret de poster Vercel viser (typisk `A` på `@` → `76.76.21.21` og `CNAME` på `www` → `cname.vercel-dns.com`)
3. Vercel viser grøn status når DNS er slået igennem (ofte 5–60 min, sjældent op til 24 t.)

`portfolio-sigma-plum-43.vercel.app` virker stadig som preview-URL, også med custom domæne.

### Fremover

Hvert `git push` til `main` deployer automatisk.

## Billeder og logoer

Kør `python3 scripts/fetch-assets.py` for at hente hero-billeder og logoer fra live sites. Rapporten gemmes i `scripts/fetch-report.json`.

Nogle sites blokerer bots (fx Enhedslisten) — de assets ligger manuelt i `src/assets/`.

### Tilføj eller erstat et projektbillede

1. Læg filen i `src/assets/projects/` (fx `005-hero.jpg`)
2. Opdatér import i `src/data/projects.base.ts`

Brug `.webp` eller `.jpg`. Anbefalet bredde: ca. 1600px.
