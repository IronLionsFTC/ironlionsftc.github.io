/**
 * Resolve a file from `public/` against Vite's configured base URL.
 *
 * Keeping this in one place prevents pages from mixing absolute paths with
 * hand-built `import.meta.env.BASE_URL` strings.
 */
export function publicAsset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}
