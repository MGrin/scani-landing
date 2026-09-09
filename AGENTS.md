<!-- agents-md ceiling: 50 lines -->
# AGENTS.md — scani-landing

The marketing landing page: a Vite + React + TypeScript SPA, Tailwind, deployed to Render.
There is no README; this file is the only documentation.

## Commands, run 2026-09-09

```sh
npm install       # rc=0
npm run build     # rc=0 — tsc -b then vite build; 1827 modules, dist/ ~278 kB JS (89 kB gzip)
npm run dev       # vite dev server — NOT exercised in this pass
npm run preview   # serves the built output — NOT exercised
```

**`npm run build` typechecks.** `tsc -b` runs before `vite build`, so a type error fails
the build — there is no separate `typecheck` script and none is needed. **There is no test
suite**; the build is the whole automatic gate.

`.github/workflows/deploy.yml` installs with **bun** (`bun install`, `bun run build`) to
match Render's own configuration, then triggers the Render deploy. So CI and a local
`npm install` resolve the same lockfile-less tree with two different package managers — if
a dependency behaves differently between them, CI is the one that matches production.

## Layout

| path | what it is |
|---|---|
| `index.html` | the Vite entry; the SPA mounts from here |
| `src/` | the page — components, copy, styles |
| `public/` | favicons, the PWA icon set, and `SKILL.md` served as a static file |
| `tailwind.config.js`, `postcss.config.js` | styling config |
| `tsconfig.json` + `tsconfig.app.json` + `tsconfig.node.json` | the standard Vite three-file split; edit the one that owns the files you changed |

## Conventions that differ from the defaults

- **The copy is the product here, and it is positioning, not decoration.** The last
  substantive commits rewrote the page for agency positioning and removed every AI
  reference. A wording change is a decision about how the business presents itself — take
  it to mgrin rather than improving the prose on your own judgement.
- **`public/SKILL.md` is served, not built.** It is a public artifact at a stable URL;
  renaming or removing it breaks whatever links to it.
- **Icons are a matched set.** The PWA manifest expects every size in `public/icons/`;
  adding one format without the rest gives a partially broken install prompt on mobile.

**Nothing about who may merge, how agents are spawned, or how the maintainer's
machine handles secrets belongs in this file, and none of it is stated here.**
Those are properties of a working environment, not of this project; if you are
contributing, your own conventions apply and nothing in this repo depends on
the maintainer's.
