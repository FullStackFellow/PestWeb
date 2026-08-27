# Placeholders: what must be filled in before this site goes live

Everything below is **unconfirmed business data**. It was deliberately left as an
obvious placeholder rather than invented, because a plausible-looking fake phone
number, license number or customer review is worse than an empty field: it can
be dialled, checked against a regulator, or read as a real endorsement.

Nothing in this list is a bug. The pages, layouts and schema around each item
are finished and working.

---

## 1. Critical, blocks launch

| Item | Where to edit | Current value |
|---|---|---|
| Phone number | `lib/site.ts` -> `phoneDisplay`, `phoneHref` | `(XXX) XXX-XXXX`, non-dialable `tel:` |
| Business address | `lib/site.ts` -> `address` | `[STREET ADDRESS]`, `[CITY]`, `[ZIP]` |
| Email address | `lib/site.ts` -> `email` | `[EMAIL ADDRESS]` |
| CA structural pest control license number | `lib/site.ts` -> `license` | `[LICENSE #]` |
| Business hours | `lib/site.ts` -> `hours` | `[BUSINESS HOURS]` |
| Founding year / "serving since" | `lib/site.ts` -> `foundedYear`, `yearsInBusiness` | `[YEAR]`, `[YEARS]` |
| Live domain | `lib/site.ts` -> `url` | `https://www.pesteliminators.example` (reserved TLD, intentionally not a real domain) |

Editing `lib/site.ts` updates the header, footer, contact page and the
`LocalBusiness` JSON-LD schema together. They are wired to one source on purpose,
because inconsistent name/address/phone across a site damages local search
ranking.

**Do not submit the site to Google Business Profile or a sitemap ping until the
address, phone and license are real.** The schema shape is correct but the values
are not.

---

## 2. Contact form is not connected

`components/inspection-form.tsx` validates every field properly (required
fields, 10 digit phone, email shape, 5 digit ZIP) and then tells the visitor
plainly that nothing was sent, pointing them at the phone number instead.

It does **not** deliver anywhere. Wire the submit handler to the real
destination (CRM, inbox, or a Next.js route handler) and replace the
"not connected to a destination yet" success panel with a real confirmation.

This was left honest rather than faking a success message, so that no real
customer lead can silently disappear during the period before it is connected.

---

## 3. Customer reviews are placeholders

`lib/content.ts` -> `sampleReviews`.

Every review card is labelled **Sample** on the page and attributed to
`[Customer name], [City]`. The body text says outright that it is placeholder
copy.

`/reviews` is set to `noindex` in its metadata and disallowed in `robots.ts`.

**Replace with genuine reviews from customers who have given permission to
publish**, then remove the `robots` disallow in `app/robots.ts` and the
`robots: { index: false }` line in `app/reviews/page.tsx`.

Do not substitute realistic invented names. A fabricated endorsement presented
as real is the one thing on this list that is not just incomplete but dishonest.

---

## 4. The guarantee needs real terms

`components/sections/guarantee.tsx`.

"The Pest Eliminators Promise" is a **proposed name**, and the re-treatment
concept is standard for the category. The specific terms are a real commercial
commitment only the owner can make:

- How long coverage lasts
- Which pests are included and excluded
- Whether it applies to residential only or commercial too

The section currently shows a visible placeholder note about this. Remove that
note once the terms are set.

---

## 5. Photography is all placeholder

Every image is a `picsum.photos` seeded placeholder, marked with a
`PLACEHOLDER PHOTO` comment at each usage. No image-generation tool was
available in this environment, so seeded placeholders were used rather than
hand-drawn SVG or fake screenshot mockups.

Replace at these placements:

- Home hero (technician at a Southern California home) - this is the LCP image, keep `priority`
- Service tiles: general pest, termite, rodent
- Residential and commercial audience panels
- Service detail pages (one per service)
- City pages: Orange, Riverside, Corona
- Residential page interior shot
- Commercial page interior shot
- About page team or service vehicle photo

Swap `placeholderImage(...)` calls in `lib/site.ts` consumers for real `/public`
assets or a real CDN. `next.config.ts` currently allowlists `picsum.photos`;
remove that allowlist once real images are in.

---

## 6. Content that needs owner confirmation

| Item | Where | Note |
|---|---|---|
| Commercial industries served | `lib/content.ts` -> `industries` | Six reasonable categories, drafted not confirmed. Cut any the business does not actually serve. |
| Full list of cities covered | `lib/content.ts` -> `cities` | Only Orange, Riverside and Corona exist as pages, and they are real cities in the confirmed corridor. The template supports more. **Do not publish a long city list as "areas we serve" until the owner confirms the real coverage area.** |
| Service scope | `lib/content.ts` -> `services` | Confirmed as general pest, termite, rodent. Bed bugs, mosquitoes and wildlife were explicitly out of scope for v1 and have no pages. |
| Promotional offer | not built | A dollar-amount promo module is category standard (every competitor runs one) but no discount was authorised, so none was invented. Add once the owner sets a real offer and terms. |

---

## 7. Brand identity is proposed, not existing

`components/brand.tsx` is a typographic monogram lockup (accent tile, `PE`
monogram, wordmark). No logo was supplied. It is intentionally CSS and type
rather than a hand-drawn SVG mark.

Replace with the real logo if one exists, or treat this as a starting point for
a designed identity. The accent colour and type choices are documented in
`CLAUDE.md`.

---

## 8. Before launch, also

- [ ] Run Lighthouse against a production build (`npm run build && npm start`). Structure targets LCP < 2.5s, INP < 200ms, CLS < 0.1, but real numbers depend on the real images.
- [ ] Add analytics and call tracking if the business wants attribution on phone leads.
- [ ] Confirm the `noindex` on `/reviews` is lifted once real reviews land.
- [ ] Point `metadataBase` at the real domain so Open Graph URLs resolve.
