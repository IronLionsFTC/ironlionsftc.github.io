# Iron Lions FTC — Website

A fast, modern, and fully responsive website for **FTC Team 24089 — Iron Lions**.
Built with React + TypeScript, styled with Tailwind CSS, animated with Framer Motion, and deployed via GitHub Pages.

---
## Tech Stack

* **Framework:** React 18 + TypeScript
* **Bundler/Dev server:** Vite
* **Routing:** react-router-dom
* **Styling:** Tailwind CSS
* **Animation:** Framer Motion
* **Icons:** lucide-react (+ custom outline Discord icon)
* **Hosting:** GitHub Pages (workflow in `.github/workflows/deploy.yml`)

---

## Quick Start

```bash
# 1) Install
npm install

# 2) Run locally
npm run dev
# -> http://localhost:5173

# 3) Build static site
npm run build

# 4) Preview the prod build locally
npm run preview
```

> The site is deployed automatically to GitHub Pages on pushes to `main` via the included workflow.

---

## Project Structure

```
public/
  images/
    robots/          # robot renders, pipeline/regression images, iterations, etc.
    team/            # team photos
    sponsors/        # sponsor logos
  404.html
  CNAME              # custom domain (if used)

src/
  components/
    Footer.tsx
    Logo.tsx
    NavBar.tsx
    Section.tsx
    SeasonTimeline.tsx
    Slideshow.tsx             # used on some pages (About page shows a single hero image now)
    FtcQuickStats.tsx
    icons/
      Discord.tsx             # outline Discord icon matching Lucide style
  data/
    site.ts                   # team info, socials, seasons, sponsor tiers
  pages/
    About.tsx
    Robots.tsx                # Valor v3 with CV content & engineering highlights
    Mufasa.tsx                # Mufasa v1 (2025-26 robot)
    Achievements.tsx
    Outreach.tsx
    Sponsors.tsx
    Contact.tsx
    NotFound.tsx
  App.tsx
  main.tsx
  index.css
```

---

## Routing & Navigation

* The top nav lives in `src/components/NavBar.tsx`.
* Pages are in `src/pages/`.
* New pages should be registered in `App.tsx` routes and optionally added to the nav.

---

## Images & Public Path (important for GitHub Pages)

Static assets in `public/` are served from the site’s **base URL**.
To ensure images work both **locally** and on **GitHub Pages/custom domains**, reference them using Vite’s base:

```ts
const PUB = import.meta.env.BASE_URL;

// Example
<img src={`${PUB}images/robots/valorv3render.webp`} alt="Valor v3" />
```

If you use a leading `/images/...`, it may break when the site is served from a subpath.

---

## Configurable Content

Most editable site content is centralized in `src/data/site.ts`.

* **TEAM** — name, number, tagline, email
* **SOCIALS** — YouTube, Instagram, GitHub, Discord

  * Discord uses a local outline icon at `src/components/icons/Discord.tsx`
* **SEASONS** — list of seasons with titles, summaries, and helpful links
* **SPONSOR\_TIERS** — tier names, amounts, and perks

Update values, redeploy, done.

---

## Components You’ll Touch Often

* **Section** — standard page block with `kicker` and `title`
* **SeasonTimeline** — themed vertical timeline (with countdowns)
* **Footer** — includes social links (reads from `SOCIALS`)
* **NavBar** — main site navigation
* **Robots page** — structured content for Valor v3, including:

  * Stats cards
  * Feature pills
  * CV pipeline and regression visuals
  * Engineering highlights (PID, FSM, FTClib, Pedro Pathing)

* **Mufasa page** — structured content for Mufasa v1, including:
  * Stats cards (Close Zone, Farzone, Rapid Fire)
  * Feature pills (Full Metal, Auto Align, Variable Hood)
  * Tech highlights (Airsort, Shooting While Moving)


---

## Scripts

* `npm run dev` — start dev server
* `npm run build` — production build to `dist/`
* `npm run preview` — locally preview the production build
