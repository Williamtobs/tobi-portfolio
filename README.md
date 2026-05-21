# Tobi Portfolio

Lightweight Vite + TanStack Start portfolio built with TypeScript.

## Prerequisites
- Node runtime: this repo uses Bun as the package manager/runtime. Install Bun: https://bun.sh

## Quick start
From the repository root:

```bash
bun install
bun dev
```

Common tasks

```bash
# Type-check only
bunx tsc --noEmit

# Build production bundle
bun build

# Preview production build locally
bun preview

# Lint / format
bun run lint
bun run format
```

## Files to edit
- Add your CV (Google Docs) link in `src/routes/index.tsx` by replacing the `cvUrl` constant.
- To make a project open the App Store, add a `storeUrl` property to the project object in `src/routes/index.tsx`.

Example project entry:

```ts
{
  year: "2026",
  name: "Shop Society",
  role: "Mobile Engineer",
  summary: "...",
  stack: ["Flutter","Dio"],
  storeUrl: "https://apps.apple.com/app/id1234567890",
}
```

Notes
- The contact items are rendered via `ContactRow` and now forward `target`/`rel`. External links open in a new tab with `rel="noopener noreferrer"` for security.

If you want, I can run a type-check and start the dev server for you.
