# Geomysore Services India — Website

A complete redesign of [geomysore.com](https://www.geomysore.com) as a modern Next.js 14 + Tailwind CSS application.

## Stack

- **Next.js 14** (App Router, TypeScript, static prerendering)
- **Tailwind CSS 3** — all styling via utility classes, no inline styles
- **Google Fonts** via `next/font`: Fraunces (headings), Inter (body), JetBrains Mono (stats/labels)
- No animation libraries — scroll reveals and stat counters use `IntersectionObserver` and respect `prefers-reduced-motion`

## Design system

Brand maroon + gold palette, matching the company logo:

| Token | Value | Use |
| --- | --- | --- |
| `sidebar` | `#310a0c` | Navbar, footer, dark sections (deep maroon-ink) |
| `canvas` | `#faf7f0` | Page background (warm sand) |
| `accent` | `#7a1115` | Maroon — CTAs, links, active states |
| `accent-light` | `#dcb054` | Gold accents on dark backgrounds |
| `ink` | `#1f0506` | Body text, darkest sections |
| `muted` | `#6f5a52` | Secondary text (warm taupe) |
| `line` | `#eadfc7` | Borders, dividers (also the default border colour) |
| `gold` | `#a3790f` / `#c9971c` | Gold stats, highlights and hero CTA |

## Development

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build (all routes prerender statically)
```

## Site map

```
/                       Home (hero, stats, services, Jonnagiri feature, CSR teaser)
/about                  Company overview + image grid
/about/team             Site team
/about/board            Board of directors
/about/shareholders     Shareholders & partners
/project                Jonnagiri project landing
/project/executive-summary
/project/background-history
/project/statutory-clearances
/project/exploration
/project/resources-geology
/project/mining
/project/processing
/project/{consulting,marketing,development-operations}   (coming-soon stubs)
/sustainability         Landing
/sustainability/overview          4-step framework + tree translocation
/sustainability/green-initiatives
/sustainability/community-integration
/sustainability/waste-management
/sustainability/innovations
/sustainability/net-zero
/sustainability/recycle-rebuild
/csr                    Six CSR pillars
/careers                31 open positions + resume form
/contact                Contact form + map
/gallery                Image grid with lightbox
```

## Notes

- **Images** are hotlinked from `www.geomysore.com` and Cloudinary. `next.config.mjs` sets
  `images.unoptimized: true` because the origin rejects server-side fetches from the Next
  image optimizer. To self-host, download the assets into `public/` and update `lib/site.ts`.
- **Forms** (contact, resume) validate client-side and show a success state, but are not wired
  to a backend. Connect them to an API route, Formspree, or similar to actually deliver
  submissions.
- **Logo** in the navbar loads `new-logo.png` from the live site, with a white Playfair
  "GEOMYSORE" wordmark as a fallback if the image fails to load.
- Per-page `<title>`, meta description and Open Graph tags are set throughout via the
  Next.js Metadata API.

## Deployment

Pushing to the connected Vercel project builds automatically — Vercel detects Next.js with
no extra configuration.
