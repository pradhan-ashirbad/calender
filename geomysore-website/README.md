# Geomysore Services India — Website Redesign

A ground-up redesign of **geomysore.com** for Geomysore Services (India) Pvt. Ltd. (GMSI) — a gold
exploration and development company, developer of the Jonnagiri Gold Project, India's first
private-sector gold mine with an integrated processing facility in 70 years.

Built as a **dependency-free static site** (semantic HTML5, modern CSS, vanilla JS). Open
`index.html` in a browser, or deploy the folder to any static host (GitHub Pages, Netlify,
Vercel, S3, shared hosting).

> **Note on research method:** the live site (geomysore.com) blocks automated crawlers
> (HTTP 403), so the audit and content reconstruction were performed via search-engine
> indexes of the site's pages and corroborating public sources (regulatory filings, press
> coverage, partner sites). All figures and names should be verified by the client before
> launch, and bios/photos replaced with official material.

---

## 1. UI/UX audit of the existing website

What the audit of the indexed site revealed:

| # | Finding | Impact |
|---|---------|--------|
| 1 | **Two technology stacks live at once** — legacy `.php` pages (`about_us.php`, `team.php`, `mining.php`, `contact.php`, `statutory.php`, `career.php`, `board_directors.php`, `resources-geo.php`, `background-history.php`) mixed with WordPress permalinks (`/executive-summary/`). | Inconsistent design, duplicated navigation, broken mental model for users; maintenance burden. |
| 2 | **Broken/duplicate page titles** — multiple pages are indexed as "New Home - Geomysore" (including the Board of Directors page); others use bare titles like "Mining" or "GMSI – Geomysore Services". | Severe SEO penalty; poor SERP click-through; confusing browser tabs/bookmarks. |
| 3 | **Unresolved canonical domain** — both `www.geomysore.com` and `geomysore.com` are indexed separately. | Split link equity, duplicate-content risk. |
| 4 | **Aggressive bot-blocking (403)** on the origin. | Risks blocking legitimate crawlers, link previews (WhatsApp/LinkedIn) and accessibility tools. |
| 5 | **Flat, dated information architecture** — 10+ top-level `.php` pages with no grouping; project content (executive summary, resources & geology, mining, statutory clearances) scattered across 4 separate pages. | Users hunting for the flagship project story across pages; weak narrative for investors. |
| 6 | **No conversion design** — contact is a bare email (`reception@geomysore.com`); careers page is essentially "upload your resume". | Lost investor/partner/talent leads. |
| 7 | **The company's biggest news is invisible** — Jonnagiri entering production (a 70-year national first) is not the centrepiece of the homepage. | Missed brand and PR opportunity. |

## 2. Proposed sitemap & information architecture

Old structure (11 scattered pages, two stacks) consolidated to **7 purposeful pages**:

```
Home (index.html)
├── About (about.html)                ← about_us.php + background-history.php merged
│   └── Leadership (leadership.html)  ← team.php + board_directors.php merged
├── Jonnagiri Project (jonnagiri.html)← executive-summary + resources-geo.php
│                                       + mining.php + statutory.php merged,
│                                       with #geology #mining #processing #clearances anchors
├── Exploration (exploration.html)    ← exploration/tenement content
├── Sustainability & CSR (sustainability.html)
├── Careers (careers.html)            ← career.php, upgraded with interest-registration form
└── Contact (contact.html)            ← contact.php, upgraded with structured enquiry form
```

Rationale: investors land → flagship project is one click away with the full story on one
scrollable page; the About cluster (story + people) builds trust; Sustainability addresses the
licence-to-operate audience; every page funnels to Contact/Careers CTAs.

## 3. Design system

| Token | Value | Use |
|-------|-------|-----|
| Ink `#10161a → #0b0f11` | charcoal scale | headers, dark sections, footer |
| Gold `#c9a227` (+`#d9b544`, `#ecd07c`, `#a8841c`) | brand accent | CTAs, icons, highlights — literal nod to the product |
| Sand `#faf8f2`, `#f4efe3` | warm neutrals | page backgrounds (premium, not clinical white) |
| Display type | **Fraunces** (serif) | headlines — authority + heritage |
| Body type | **Inter** (sans) | body, UI — clarity |
| Type scale | fluid `clamp()` from 0.81rem → 4.5rem | responsive without breakpoint jumps |
| Spacing | 4 px base scale (`--sp-1…10`) | consistent rhythm |
| Radii | 6 / 12 / 20 px + pill buttons | modern softness |
| Motion | 0.25–0.7 s ease curves, scroll-reveal, counters | restrained, `prefers-reduced-motion` respected |

Components: sticky glass header, mobile drawer nav, hero with geological contour SVG artwork,
stats strip with animated counters, icon cards, split feature panels, flagship spotlight,
timeline, accordion, data table, people cards, chip lists, CTA bands, validated forms with
success states, 4-column footer, back-to-top.

Brand mark: a hexagonal crest (mineral crystal) containing a ridgeline and gold sun-dot —
provided as inline SVG and favicon. Replace with the official logo if preferred.

## 4. Accessibility

- Semantic landmarks (`header/nav/main/footer`), one `h1` per page, skip-to-content link
- Visible focus states, `aria-current` nav highlighting, `aria-expanded` on toggles/accordions
- Form fields with explicit labels, `aria-invalid`, inline error text, `role="status"` success
- Color contrast meets WCAG AA on text; decorative SVGs `aria-hidden`
- Fully keyboard operable; `prefers-reduced-motion` honoured

## 5. Images & content reuse

All factual content (history, ownership, tenements, Jonnagiri figures, statutory clearances,
CSR programmes, leadership names, contact details) was reused from the existing site's indexed
content and public records. Because the origin blocks automated download, photography could not
be copied; the design uses branded SVG/gradient art in **clearly-marked visual panels**
(`.visual-panel`) that are drop-in slots for the client's existing photos:

| Slot | Page | Suggested existing image |
|------|------|--------------------------|
| About teaser panel | Home | Field exploration / drilling photo |
| Sustainability panel | Home + Sustainability | Village water-supply photos |
| Executive summary panel | Jonnagiri | Open-pit or plant construction photo |
| Mining / Processing panels | Jonnagiri | Bench mining & plant photos |
| Leadership cards | Leadership | Portraits from old team.php |

To swap: replace the `.visual-panel` inner SVG with `<img src="…" alt="…">` — the caption bar
overlays automatically. Recommend WebP/AVIF at ≤200 KB, `loading="lazy"`, real `alt` text.

## 6. Recommendations (performance · SEO · engagement)

**Performance**
- Self-host the two fonts as WOFF2 with `font-display: swap` (removes 2 third-party requests)
- Serve photography as AVIF/WebP with `srcset`; lazy-load below the fold
- Single CSS/JS file each, no frameworks — keep it that way; enable Brotli + HTTP caching on host
- Target: Lighthouse ≥ 95 across the board (current structure supports it)

**SEO**
- 301-redirect all legacy `.php` URLs and `/executive-summary/` to the new pages; pick one
  canonical host (`www` or apex) and redirect the other
- Unique titles/descriptions are already in place; add `Organization` + `Article` JSON-LD,
  `sitemap.xml` and a `robots.txt` that allows legitimate crawlers (fix the blanket 403)
- Publish news/milestone posts (the "Newsroom" section is ready) — Jonnagiri production is a
  press-magnet topic with high-authority backlink potential

**Engagement & conversion**
- Wire forms to a backend or service (Formspree/Netlify Forms/Google Forms API) — the front-end
  validation and success states are already built; see the `NOTE` in `js/main.js`
- Add an investor-relations download (executive summary PDF) gated by the contact form
- Embed a Google Map on Contact; add WhatsApp click-to-chat for the site office
- Add Hindi/Telugu language toggle for community-facing pages (CSR, Careers)

## 7. File manifest

```
geomysore-website/
├── index.html            Home
├── about.html            Company story, ownership, values, timeline
├── leadership.html       Board of directors + management
├── jonnagiri.html        Flagship project (geology, mining, processing, clearances)
├── exploration.html      Tenements, belts, methods
├── sustainability.html   CSR pillars & programmes
├── careers.html          Culture + application form
├── contact.html          Offices + enquiry form
├── css/styles.css        Design system (tokens + components)
├── js/main.js            Nav, reveals, counters, accordions, forms
└── README.md             This document
```
