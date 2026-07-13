# Iron Lions FTC website

Official website for **Iron Lions — FTC Team 24089**. It is a static React application built with
Vite, TypeScript, Tailwind CSS, and React Router, then deployed to GitHub Pages.

## Quick start

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

The local site is available at <http://localhost:5173>.

Before pushing a change, run the complete project check:

```bash
npm run check
```

This performs a strict TypeScript check and a production build.

Run `npm run format` after editing to apply the repository's standard formatting.

## Project map

```text
src/
  app/
    App.tsx                 Application shell, lazy page imports, and routes
  components/
    layout/                 Header, footer, logo, and route-level behavior
    ui/                     Small reusable presentation components
    content/                Reusable domain components such as robot heroes
  data/                     Editable navigation and site content
  lib/                      Shared helpers
  pages/                    Route components
    robots/                 Valor, Mufasa, and Surge pages
  index.css                 Global Tailwind layers and site-wide styles
  main.tsx                  Browser entry point

public/
  images/                   Optimized files shipped directly to the browser
  404.html                  GitHub Pages SPA route fallback
  CNAME                     Custom domain configuration

source-assets/              Originals and archived files excluded from deployment
```

## Where to make common changes

- Team name, number, email, social links, and season cards: `src/data/site.ts`
- Header and footer navigation: `src/data/navigation.ts`
- Sponsor details and logos: `src/data/sponsors.ts`
- Homepage timeline events: `src/data/seasonTimeline.ts`
- Route registration and redirects: `src/app/App.tsx`
- Shared robot hero layout: `src/components/content/RobotHero.tsx`
- Reusable cards and page sections: `src/components/ui/`

Page-specific content should stay in its route component. Content shared by multiple pages, or
content that non-developers will update regularly, should live in `src/data/`.

## Code conventions

- Route components use a `Page` suffix, for example `SponsorsPage.tsx`.
- Use `Link` or `NavLink` for internal routes. Use `<a>` for external URLs and downloads.
- Use the `@/` alias for imports from `src/`.
- Resolve files from `public/` with `publicAsset()` from `src/lib/publicAsset.ts`.
- Reuse `Section`, `Callout`, `StatCard`, and `FeaturePill` instead of duplicating their markup.
- Keep configuration and editable lists typed and centralized in `src/data/`.
- Avoid `any`; the TypeScript configuration checks unused code and parameters.

## Asset workflow

`public/` is copied directly into every production build, so only browser-ready assets belong there.

1. Keep editable or full-resolution originals in `source-assets/`.
2. Resize images close to their maximum displayed dimensions.
3. Export genuine WebP files with descriptive kebab-case names.
4. Place deployed images in the relevant `public/images/` folder.
5. Reference them with `publicAsset("images/...")`.
6. Add `width`, `height`, `loading`, and `decoding` attributes as appropriate.

Large downloads such as STEP and PDF files live in `public/images/resources/` because visitors can
download them directly; they are not fetched during normal page loading.

## Available scripts

| Command                | Purpose                                         |
| ---------------------- | ----------------------------------------------- |
| `npm run dev`          | Start the Vite development server               |
| `npm run typecheck`    | Run strict TypeScript validation                |
| `npm run format`       | Format supported project files with Prettier    |
| `npm run format:check` | Verify formatting without changing files        |
| `npm run build`        | Create the production site in `dist/`           |
| `npm run preview`      | Serve the production build locally on port 5173 |
| `npm run check`        | Run typecheck and production build together     |

## Deployment

The workflow in `.github/workflows/deploy.yml` builds and deploys the site whenever `main` is
updated. Client-side routes are preserved on GitHub Pages through `public/404.html` and the matching
redirect decoder in `index.html`.

For concise automation-specific instructions, see `AGENTS.md`.
