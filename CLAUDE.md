# Pest Eliminators website

Marketing site for a locally owned Southern California pest control company
serving the Orange County / Riverside / Inland Empire corridor. Residential and
commercial. Services in scope: general pest, termite, rodent.

**Read `PLACEHOLDERS.md` before changing business data or publishing anything.**
Phone, address, license, reviews and photography are deliberate placeholders.

## Stack

Next.js 16 (App Router, Turbopack) - TypeScript - Tailwind v4 - Radix accordion
- Phosphor icons. No CSS-in-JS, no component library beyond the one Radix
primitive.

```bash
npm run dev     # http://localhost:3000
npm run build   # type-check + static generation of all 20 routes
npm run lint
```

## Design decisions (do not silently reverse these)

Built to the `design-taste-frontend` skill in `.agents/skills/`. Dials:
`DESIGN_VARIANCE 6 / MOTION_INTENSITY 5 / VISUAL_DENSITY 4`. This is a trust
category, so clarity outranks flourish.

**Palette.** Ink navy and warm charcoal neutrals with a single warm ember accent
(`#b8481a` light, `#e8703a` dark). Chosen deliberately against the category
default of green-and-blue-on-white that every competitor uses. One accent only,
used identically everywhere.

**Colour is CSS variables only.** Tokens live on `:root` in `app/globals.css`
and swap under `prefers-color-scheme` and `[data-theme]`. There are no `dark:`
utilities anywhere and there should not be. Never write a raw hex in a
component; the only exceptions are the fixed scrim colours over photography in
`services-bento.tsx` and `audience-split.tsx`, which sit on images rather than
on a themed surface.

**Radius rule** (documented, applied everywhere, no exceptions):
- `rounded-pill` - buttons, badges, chips
- `rounded-card` (16px) - cards, media, panels, accordion items
- `rounded-field` (12px) - form inputs

**Type.** Outfit for display, Geist for body. Not Inter, deliberately. Hierarchy
comes from weight and colour, not raw scale. Hero headline must stay at 2 lines
on desktop.

**One CTA label per intent.** The conversion action is `Free Inspection`
everywhere (`primaryCta` in `lib/site.ts`). Do not add "Book an inspection",
"Schedule now" or "Get started" as variants. The phone number is a different
contact modality, not a competing CTA.

**Motion is CSS only.** `components/reveal.tsx` uses
`animation-timeline: view()` behind `@supports` and `prefers-reduced-motion`.
It is inverted on purpose: content is visible by default and the animation is
added only where supported, so a failure can never hide content. Motion/Framer
was removed for exactly this reason. Do not reintroduce a JS reveal that ships
`opacity: 0` in the server-rendered HTML.

**Layout families.** No two sections on a page share a layout family, and no
more than two consecutive image-and-text splits. The homepage runs 11 distinct
sections. Check `app/page.tsx` before adding one.

**Eyebrows are rationed.** Max one per three sections. The homepage uses zero.
Prefer dropping the label entirely.

**No em-dashes.** Anywhere, in any visible string. Regular hyphen only. This is
enforced by review, not tooling, so check before committing copy.

## Content

All copy lives in `lib/content.ts` and `lib/site.ts`, not in JSX. This keeps a
copy audit to a single file and avoids apostrophe-escaping noise in components.
Edit copy there.

## Structure

```
app/                    routes (13 pages + sitemap/robots/not-found)
components/sections/    homepage sections, one file each
components/ui/          button, layout primitives, accordion
lib/site.ts             NAP, nav, CTA label, placeholder tokens
lib/content.ts          all site copy
lib/jsonld.tsx          LocalBusiness / FAQ structured data
```

`lib/site.ts` is the single source for name, address and phone. Header, footer,
contact page and JSON-LD all read from it. Change them together or local search
ranking suffers.
