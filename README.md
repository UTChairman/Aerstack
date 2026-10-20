# Aerstack

The Aerstack marketing site — a hand-coded Next.js rebuild of what previously ran on Framer.

## Requirements

- **Node.js 20.9 or newer** (`next` declares `>=20.9.0`; developed on 24.11)
- npm (a `package-lock.json` is committed, so `npm ci` gives you the exact tree)

## Getting started

```bash
npm ci
npm run dev
```

Then open <http://localhost:3000>.

No environment variables are needed to run or build — everything has a working default. The first
`dev` or `build` does need network access, because `next/font/google` fetches Unbounded and Inter at
build time and caches them. Satoshi is self-hosted and committed under `src/fonts/`.

```bash
npm run build   # production build
npm start       # serve the production build
npm run lint    # eslint
```

## Environment variables

Both are optional; set them in `.env.local` for local use, or in your host's dashboard.

| Variable | Default | What it does |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://www.aerstack.com` | Absolute base for `robots.txt`, `sitemap.xml`, canonical tags and Open Graph URLs. Set this to the real domain on any deployment, or the SEO metadata will point at the fallback. |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | the project's Formspree form | Where the contact and newsletter forms post. |

Form submissions are rejected by Formspree unless the sending domain is registered in its dashboard,
so forms will fail from a teammate's `localhost` until that domain is added — the rest of the site is
unaffected.

## Project layout

```
src/app/              routes (App Router) + robots.ts + sitemap.ts
src/components/
  sections/           page-level blocks (Hero, Timeline, Contact, …)
  site/               chrome: Navbar, Footer, SiteBackground, SiteChrome
  ui/                 reusable pieces (cards, pills, accordions)
src/lib/              content data, fonts, Formspree helpers, site config
src/fonts/            self-hosted Satoshi woff2
public/images/        site imagery
scripts/              Puppeteer tooling used to measure the original site
```

### Breakpoints

Tailwind's breakpoints are redefined in `src/app/globals.css` to mirror the original design's:

| Token | Width | Original breakpoint |
| --- | --- | --- |
| (base) | `< 810px` | Phone |
| `md:` | `>= 810px` | Tablet |
| `lg:` | `>= 1200px` | Desktop |

This matters: the tablet band frequently keeps the phone layout rather than the desktop one, so a
layout that should only apply on desktop belongs under `lg:`, not `md:`.

## `scripts/`

Development-only tooling, not part of the build. These drive Puppeteer to compare a running local
copy against a reference URL — computed styles, element rects, section offsets and page heights.
`scripts/rwd.mjs` is the main one: it reports per-route height deltas at 390/810/1440 and flags any
horizontal overflow.

```bash
npm run dev                 # in one terminal
node scripts/rwd.mjs        # in another
```

Puppeteer is a devDependency. `.puppeteerrc.cjs` skips its Chromium download only when `CI=true` or
`VERCEL=1`, so hosted builds stay small while a local install fetches the browser the scripts need.
That download is ~200MB and is most of the wait on a first `npm ci`. If you are not going to run the
audit scripts, skip it:

```bash
PUPPETEER_SKIP_DOWNLOAD=true npm ci
```

## Deploying

Import the repository on Vercel; the framework and build command are detected automatically and the
repo root is the app root. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
