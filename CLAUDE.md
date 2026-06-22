# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server with Vite HMR
npm run build      # Production build (client + server bundles)
npm start          # Run production server (requires build first)
npm run lint       # ESLint with caching
npm run typecheck  # TypeScript type checking (no emit)
```

## Architecture

This is a **Remix + Vite + TypeScript** personal portfolio site with SSR and dark/light theme support.

### Routing

Remix file-based routing — all routes live in `app/routes/`. The `_index.tsx` naming convention marks the index route for `/`. The root layout (`app/root.tsx`) wraps all routes via `<Outlet />`.

Currently defined routes:
- `app/routes/_index.tsx` — Home page (`/`)

Navbar references `/blog` and `/projects` routes that don't exist yet.

### Theme System

Theme is stored in a cookie-based session (`app/utils/session.server.ts`) and persisted via `remix-themes`. The root loader reads the theme from the session, and `PreventFlashOnWrongTheme` prevents FOUC. Dark mode is toggled via CSS class + `data-theme` attribute — Tailwind's `dark:` utilities apply accordingly.

### Data Fetching

Loaders run server-side before render. Data flows to components via `useLoaderData<typeof loader>()`. The project has `graphql-request` and `@graphcms/rich-text-react-renderer` installed, indicating future CMS-driven content (blog posts, projects) via a GraphQL API.

### Path Aliases

`~/*` maps to `./app/*` — use this alias for all intra-app imports (configured in both `tsconfig.json` and resolved by `vite-tsconfig-paths`).

### Key Config Decisions

- Remix v3 future flags are all enabled in `vite.config.ts` (`v3_singleFetch`, `v3_lazyRouteDiscovery`, etc.)
- No `remix.config.js` — Remix is configured entirely through the Vite plugin
- Tailwind dark mode uses both `class` and `data-theme` selectors
- Production cookie domain is hardcoded in `app/utils/session.server.ts` — update before deploying
