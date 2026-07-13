# Repository guide

This is a Vite + React + TypeScript static site deployed to GitHub Pages.

## Before changing code

1. Read `README.md` for the architecture and content locations.
2. Keep page behavior and URLs stable unless the task explicitly changes them.
3. Run `npm run format` after editing and `npm run check` before handing work back.

## Structure

- `src/app/` owns application composition and routes.
- `src/components/layout/` owns site-wide header, footer, logo, and navigation behavior.
- `src/components/ui/` contains small reusable presentation components.
- `src/components/content/` contains larger domain-specific reusable components.
- `src/data/` contains editable content and navigation definitions.
- `src/lib/` contains framework-independent helpers.
- `src/pages/` contains route-level components; robot pages live in `src/pages/robots/`.
- `public/` contains files shipped as-is to the website.
- `source-assets/` contains originals that must not be deployed.

## Conventions

- Name route components with a `Page` suffix.
- Use `Link` or `NavLink` for internal navigation and `<a>` for external/download links.
- Resolve public files with `publicAsset()` from `src/lib/publicAsset.ts`.
- Put repeated editable content in `src/data/` rather than duplicating it in components.
- Prefer existing UI components (`Section`, `Callout`, `StatCard`, `FeaturePill`) before creating new markup.
- Use descriptive kebab-case filenames for assets.
- Do not reintroduce full-resolution originals into `public/`.
