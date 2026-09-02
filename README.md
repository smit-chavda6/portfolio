# Smit Chavda — Portfolio

Single-file personal portfolio. No build step: `index.html` contains all markup, styles and JS.
It loads Tailwind (CDN), Font Awesome, Google Fonts and `three.js` (ambient particle
background) from CDNs — the page still works if `three.js` fails to load.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The site |
| `404.html` | Not-found page (used by GitHub Pages / Netlify) |
| `og-image.svg` | Social share card (`og:image`) |
| `Smit-Chavda-Resume.pdf` | CV, linked from the hero "Download CV" button |

## Deploy

### GitHub Pages
1. Push this folder to a repo (e.g. `portfolio`).
2. Repo → **Settings → Pages** → Source: `Deploy from a branch` → `main` / root.
3. Live at `https://<username>.github.io/portfolio/`.

### Netlify / Vercel
Drag the folder onto the dashboard, or connect the repo. No build command; publish directory
is the project root.

## To personalise

- **Project links** — the "Code" links and modal "Source code" buttons currently point at the
  GitHub profile. Set real repo URLs in the `DATA` object inside `index.html` (`repo` / `live`
  fields) and the matching `href` on each card's `.link[data-role="repo"]`.
- **`og:image`** — some platforms prefer PNG. Export `og-image.svg` to a 1200×630 PNG and
  update the `og:image` / `twitter:image` meta tags if link previews look off.
- **Canonical URL** — update `<link rel="canonical">` to the final domain.
