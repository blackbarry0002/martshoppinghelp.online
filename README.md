# Mart Shopping Assist

Conversion-focused marketing site for an independent, paid, phone-based shopping-assistance service.
Next.js (App Router) · React · TypeScript · Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck
```

Requires Node.js 18.18+ (20 LTS or newer recommended).

## Deployment (GitHub Pages)

The site is a static export (`output: "export"` in `next.config.ts`); `npm run build` writes plain HTML to `out/`.
Every push to `main` runs [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the site and publishes
`out/` to GitHub Pages. `public/CNAME` keeps the custom domain `martshoppingassist.online` attached.

One-time setup: in the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.

## Where things live

| Path | What it is |
| --- | --- |
| `src/config/site.ts` | **Single source of truth** for phone number, contact details, pricing summary, disclosures, and the `prelaunch` flag |
| `src/config/routes.ts` | Navigation and sitemap routes |
| `src/content/` | FAQ entries and shopping categories |
| `src/components/sections/` | Homepage sections (also reused on inner pages) |
| `src/app/` | Pages, sitemap, robots, icon |
| `public/` | Static files: `og.png` share image, `CNAME`, `.nojekyll` |

Every call button is a `tel:` link carrying `data-cta="call"` and a `data-placement` attribute, so call-tracking or
Google Ads conversion tags can tell which placement drove the call.

## Launch checklist

While `prelaunch` is `true`, the site shows a "preview" banner, legal pages carry a template notice, and robots/meta tags
block indexing. Before launch:

- [ ] Replace `site.phone` with the real, tested number and set `isPlaceholder: false`.
- [ ] Fill in `legalName`, and optionally `email`, `hours`, `mailingAddress`.
- [ ] Add an accurate `pricing.summary`, or confirm the "quoted before you commit" wording matches your practice.
- [ ] Have Privacy, Terms, and Refund policies reviewed by counsel and edited to match your actual practices
      (call recording, payment handling, refunds).
- [ ] Set `prelaunch: false` and redeploy.
- [ ] Confirm ads match the landing page: independent, paid, no retailer tasks (orders, refunds, accounts).

## Brand-safety rules baked into the copy

- Never named or styled as any retailer's support; independence disclosure in the header strip, hero, footer, FAQ, and terms.
- Paid nature disclosed next to the primary call buttons.
- Explicit list of what the service cannot do (accounts, orders, refunds, payments).
- No testimonials, ratings, customer counts, credentials, discounts, or guarantees. Add these only if real and verifiable.
