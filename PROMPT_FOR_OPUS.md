# BUILD BRIEF: Pest Eliminators Website
Prepared by: Sonnet (strategic research + design brief pass), for execution by: Opus
Date: 2026-08-26

---

## 0. HOW TO USE THIS BRIEF

You are building the marketing website for **Pest Eliminators**, a Southern California pest control company. This is a **greenfield build** (no existing site to preserve or audit).

Before writing any code:

1. Read `.agents/skills/design-taste-frontend/SKILL.md` in this project and follow it as your primary design-system-of-record. Everything in Sections 4 through 14 of that skill overrides your default instincts. Its Final Pre-Flight Check (its Section 14) is mandatory before you declare this done, run every box in that checklist explicitly.
2. Read this brief in full. It contains the business context, the competitive research that justifies the design and content decisions below, the information architecture, section-by-section specs, and a set of hard placeholder rules you must not violate (Section 12 below). The placeholder rules matter: this is a real business, not a demo, so do not invent facts that look real.
3. State your Design Read (per skill Section 0.B) before generating anything. A draft is provided in Section 4 below, use it, adjust it if you disagree, but don't skip stating it.
4. Build. Test in an actual browser (use the `run` skill to launch the dev server and click through the golden path, not just a visual read of the code). Run the skill's Pre-Flight Check. Then report back what's built and what's still a placeholder.

---

## 1. BUSINESS CONTEXT

**Company:** Pest Eliminators
**Category:** Pest control / extermination services
**Service area:** Southern California, specifically the Orange County / Riverside / Inland Empire corridor (same general region as the competitor references below, which is intentional, they're the direct competitive set)
**Audience:** Both residential (homeowners) and commercial (business) customers
**Core services in scope for v1:**
- General household pest control (ants, roaches, spiders, silverfish, earwigs, and similar common pests)
- Termite control (inspection and treatment)
- Rodent control (rats and mice)

Bed bugs, mosquitoes/ticks, and wildlife trapping are explicitly **out of scope for v1**. Do not build dedicated pages for them. If it's natural to mention pest control handles "and more" in passing copy, that's fine, but don't invent a bed bug or mosquito service page.

**Positioning (the strategic decision that should shape every copy and design choice below):** Local and personal. Pest Eliminators wins by being the opposite of the national call-center experience: technicians who actually live in the neighborhoods they service, direct accountability, a team the customer can build a relationship with over years, not a rotating cast dispatched by a national scheduling system. This is the single biggest lever for differentiating from Terminix (a national brand doing local-flavored marketing at a corporate scale) and Western Exterminator (a 100+ year old brand now owned by Rentokil Initial plc, using "local branch" pages to simulate localness). Kilter is the closest true peer (independently-feeling, SoCal-based, family-run tone), so Pest Eliminators needs to match Kilter's warmth while feeling more current and less dated in execution.

---

## 2. COMPETITIVE LANDSCAPE

Three sites were researched directly (live content pulled, not assumed) to ground this brief in what this category actually does, not generic marketing-site assumptions. Use these as **structural and strategic reference only**. Do not copy any sentence, paragraph, testimonial, or image from these sites. Do not reuse their exact page titles or headline phrasing. They exist so you understand the genre conventions, not so you can remix their copy.

### Reference 1: Kilter Termite and Pest Control (kiltertermiteandpestcontrol.com/orange-pest-control)
Independent-feeling, SoCal-based, founded 1992. This is the closest peer to Pest Eliminators.
- Hero leads with an emotional promise ("Protecting what matters most: your home") plus a headline differentiator: "stay-in-your-home" termite treatment (no tenting), backed by a dollar-amount promo ($200 off).
- Heavy use of a values list (Knowledgeable, Integrity, Leadership, Teamwork, Excellence, Reliable) as a distinct homepage module.
- "Why choose us" built around four pillars: guided decision-making (explains pros/cons instead of just upselling), continuing-education credentials, free inspection, 24/7 same-day service, warranties that cover the whole home.
- Testimonials use a punchy pull-quote as the visual headline, with the full quote and first-name-plus-last-initial below. Believable, specific, not generic.
- Extremely long-form local SEO content blocks mid-page: a section on local pest control regulations (California Department of Pesticide Regulation, licensing), a section on climate and seasonal pest activity specific to Orange County, and a large FAQ accordion. This is doing real organic-search work even though it's not visually exciting.
- Lists five physical branch locations with addresses.
- Phone number is repeated constantly: (866) 827-1727.
- Visually and structurally this site is dated: dense, list-heavy, dependent on stock imagery and a conventional green/blue palette. The content strategy is strong, the execution is not.

### Reference 2: Terminix (terminix.com)
The national, corporate-scale player.
- Zip-code personalization in the header ("92880 - Corona") despite being a national brand, an attempt to feel local at scale.
- Branded guarantee: "The Terminix It Guarantee," if pests come back, so do we, at no additional cost. A named, trademarked guarantee is a strong trust device worth adapting (not copying) for Pest Eliminators.
- Three trust pillars up top: pet/family safe (EPA-approved products), environmentally responsible (Integrated Pest Management), humane removal.
- A horizontal pest carousel (Ants, Bed Bugs, Centipedes, Cockroaches, Mice & Rats, Mosquito, Spiders, Termites, Ticks, Wildlife) that routes into pest-specific learn-more and plan pages.
- Process pillars: thorough inspection, customized treatment, lasting protection, 24/7 support.
- A large testimonial carousel with real-feeling names, cities, and relative timestamps ("2 months ago"), a scalable, structured review format worth adapting.
- Content marketing built in ("Recommended for you": pest-education videos and articles).
- Self-serve e-commerce framing: cart icon, account login, "pick your protection" bundle pricing, email newsletter capture.
- Reads as slick but impersonal. Zero sense of a specific human being handling your problem. This is exactly the gap Pest Eliminators' "local and personal" positioning should exploit.

### Reference 3: Western Exterminator, Riverside branch (westernexterminator.com/local-branches/california/riverside)
A 100+ year old brand, now Rentokil-owned, using localized branch landing pages.
- Hero states the service area plainly and puts a phone number and "book a free pest inspection" CTA above the fold.
- A full lead-capture form embedded directly in the page (not just linked to a separate contact page): reason for contacting (dropdown of pest types), name, phone, email, zip, promo code.
- Three trust pillars: family/pet friendly, trusted expertise, "local to you" (technicians live in the surrounding area, the same claim Pest Eliminators should make, but Western has to explain it because their brand is otherwise clearly corporate).
- Explicit branch info block (address, phone, "24 hours") plus a long list of surrounding cities served, a clear local-SEO play.
- Splits content cleanly into Residential and Commercial sections, and within Commercial, names the industries served (agriculture, education, healthcare, hospitality, logistics, manufacturing, retail). Pest Eliminators should use this same residential/commercial split given the target audience.
- A "we know [city] and its pests" section with short, specific, seasonally-aware paragraphs per pest (e.g., exactly when mosquitoes flourish locally, what termites do to structural beams). This kind of hyper-local, specific writing is worth emulating in voice, not in content.
- FAQ accordion, branch locator tool, live chat widget.
- Footer discloses corporate ownership (Rentokil Initial plc, sister brands Ambius/JC Ehrlich/Rentokil), which undercuts the "local" framing on close inspection. Pest Eliminators has a real advantage here: it can make the local claim honestly.

### Cross-cutting patterns (true across all three, treat these as category table stakes, not optional):
- Phone number visible at all times, click-to-call, usually in a sticky header.
- "Free inspection" is the universal primary conversion goal across the entire category.
- A named or clearly-stated guarantee/warranty is a load-bearing trust device.
- Local and seasonal specificity (climate, regional pest behavior) is a major content and SEO lever.
- Pest-type taxonomy drives the information architecture (each major pest gets its own surface).
- Residential/commercial audience split is standard once a company serves both.
- Family/pet safety (EPA-approved products, IPM) is close to table stakes now, expect customers to ask.
- Reviews with real-feeling names, locations, and specific detail outperform generic praise.
- Dollar-amount promos ($X off) appear on every one of these sites. It converts in this category.
- All three lean on a conventional pest-control palette (green and/or blue on white, red/orange only for urgency banners) and fairly dense, text-heavy layouts. This is the opportunity: Pest Eliminators can look meaningfully more current and premium than any of these three without sacrificing any of the trust mechanics above.

---

## 3. STRATEGIC POSITIONING (SUMMARY)

Pest Eliminators is the pest control company run by people who actually live in the neighborhoods they serve. Not a call center, not a national brand doing local-flavored marketing, not a franchise. Every copy decision, every "why choose us" pillar, and the overall visual tone should reinforce this without ever directly naming or disparaging a competitor.

Sample hero direction (a starting point, refine freely, but keep the angle):
- Headline: "The exterminator who actually lives in your neighborhood."
- Subtext: "Ants, termites, and rodents, handled by a local team you'll recognize, not a national call center. Same technician, every visit."

This is one option, not a mandate. It demonstrates the register: concrete, specific, no filler verbs ("elevate," "unleash," "seamless"), no em-dash, plain confident voice.

---

## 4. DESIGN READ AND DIALS (per design-taste-frontend skill)

**Design Read (state this, or your own refined version, before generating code):**
"Reading this as: a local home-and-commercial services landing site (pest control) for Southern California customers who are either anxious about an active infestation or proactively protecting a property, with a warm, confident, modern-trade-professional language, leaning toward Tailwind utilities plus a clean sans display face plus restrained, purposeful motion. Differentiated from the corporate/big-box competitor set (Reference 2 and 3 above) by feeling local, personal, and owner-operated rather than franchise-scale, and differentiated from the closest local peer (Reference 1) by looking current and uncluttered instead of dated and text-dense."

**Dials, explicit and reasoned (do not silently use the skill's baseline of 8/6/4, this brief overrides it):**
- `DESIGN_VARIANCE: 6` — Enough asymmetry (split heroes, offset image/text pairing, varied card sizes) to feel current and not like a templated brochure site, but this is a trust category: don't push into masonry chaos or extreme whitespace zones. Homeowners with a pest problem want clarity fast, not to decode an art-gallery layout.
- `MOTION_INTENSITY: 5` — Fluid, purposeful micro-interactions (hover states, scroll-reveals, a bit of stagger on section entry) that make the site feel alive and current versus the static, dated competitor sites. Stop short of cinematic scroll-hijacking or parallax theatrics, that would read as more "creative agency" than "the exterminator you can trust," which actively works against the brief.
- `VISUAL_DENSITY: 4` — All three competitors are too dense and text-heavy. Give the page room to breathe. Where genuine SEO/trust copy needs to exist (climate/seasonal content, licensing info, FAQ), use progressive disclosure (accordions, "read more" expansion, like Kilter's own "continue reading" pattern) rather than dumping it all inline at full density.

**Design system (skill Section 2):** No official design system applies here (this isn't Microsoft/Google/IBM/Shopify/Atlassian/GitHub/government). Use **Tailwind v4 utilities** as the styling foundation, **shadcn/ui** for interactive primitives you'd otherwise hand-roll (accordion for FAQ, dialog for the quote-request modal, tabs where useful), fully re-themed, never shipped in shadcn's default visual state (skill Section 9.E). Use **Motion** (`motion/react`) for micro-interactions and scroll-reveals. Skip GSAP entirely, there's no scroll-hijack or sticky-stack pattern called for at this dial level, and pulling in GSAP for a mostly-static local-services site is unjustified weight.

---

## 5. VISUAL DIRECTION

### Color (a category-specific override, in the spirit of the skill's own premium-consumer palette ban)
Every competitor researched defaults to green-and/or-blue-on-white, the "pesticide bottle" cliché of the category, with red/orange reserved only for urgency/promo banners. Do not default to this. Recommended direction and two alternates, pick one and commit (skill's Color Consistency Lock applies: one accent, used identically everywhere):

- **Recommended: Ink navy / charcoal neutrals + a single warm ember-orange accent.** Reads as a modern, confident trade brand (think how well-designed HVAC, roofing, or home-services brands have elevated their categories) rather than a chemical-and-nature cliché. Orange also does double duty as the natural "urgency/CTA" color without needing a second accent.
- **Alternate 1: Off-black + deep forest green + warm sand/bone neutral.** Keeps a nod to "nature under control" but executed with real contrast and restraint instead of the pastel mint-green cliché every competitor uses.
- **Alternate 2: Warm off-white + near-black ink + a single saturated signal-red-orange accent**, used deliberately only for urgency moments (the "active infestation" CTA, emergency banner), quieter tones everywhere else.

Max one accent color, under 80% saturation, no pure `#000000` or `#ffffff` (skill Section 4.2 and 9.A). No AI-purple. No neon glow.

### Typography
Do not default to Inter. Use a confident, modern sans display face (Geist, Outfit, or Cabinet Grotesk per the skill's pairing suggestions) for headlines, a clean readable sans for body. This is not an editorial/luxury/publication brief, so no serif anywhere by default (skill Section 4.1).

### Imagery (skill Section 4.8 governs this, follow it exactly)
Priority order: use an image-generation tool first if one is available in your environment, to produce section-specific photography (technician at work in a Southern California residential setting, a branded service vehicle, a close-up inspection moment, a residential neighborhood exterior). If no gen tool is available, use `https://picsum.photos/seed/{descriptive-seed}/{w}/{h}` placeholders with descriptive seeds (e.g. `pest-eliminators-technician-inspection`), never broken Unsplash links. Never build div-based fake screenshots (not applicable here anyway, there's no product UI to fake). No hand-rolled decorative SVG illustrations, real photography or generated photography only. Every placeholder image must be visually flagged in your final report as needing a real replacement before launch.

Do not fabricate a customer logo wall (this is a residential/commercial services company, not a SaaS product with recognizable enterprise customers), skip that pattern entirely rather than inventing fake client logos.

---

## 6. INFORMATION ARCHITECTURE (v1 scope)

```
/                          Home
/services                  Services overview (routes into the three below)
/services/general-pest     General pest control
/services/termite          Termite control
/services/rodent           Rodent control
/residential                Residential-focused landing (who we serve: homeowners)
/commercial                  Commercial-focused landing (who we serve: businesses, by industry)
/service-areas               Hub page: Orange County / Riverside / Inland Empire coverage
/service-areas/[city]        Template for individual city pages (build 2-3 as real examples, e.g. Orange, Riverside, Corona, structure the rest as a reusable template, do not invent a large list of specific cities as confirmed coverage, see Section 12)
/about                        Local, owner-operated story, team, licensing
/reviews                      Full reviews/testimonials page
/contact                      Free inspection request + phone + service area map
/faq                          FAQ hub (can also surface contextually on service pages)
```

**Explicitly phase 2, do not build now:** a blog/pest-library content system, an exhaustive page for every single city in the region, a customer account portal, online payment.

---

## 7. HOMEPAGE, SECTION BY SECTION

Build these as distinct sections. Per the skill's Section-Layout-Repetition rule, no two sections may share the same layout family, and per the Zigzag Alternation Cap, no more than two consecutive image+text-split sections.

1. **Hero.** Asymmetric split (not centered, per skill 4.3, `DESIGN_VARIANCE: 6` calls for offset composition), real/generated photography on one side. Headline max 2 lines, subtext max 20 words and max 4 lines, one primary CTA ("Get a Free Inspection") plus the phone number rendered as a tappable link (this is a second contact *modality*, not a duplicate CTA intent, so it does not violate the No-Duplicate-CTA rule). Hero stack discipline applies: max 4 text elements total, no trust micro-strip crammed into the hero itself.
2. **Trust bar**, directly under the hero (never inside it, per skill 4.7). Licensing/certification badge, "locally owned and operated" badge, years-in-business badge, and once real data exists, a Google review score badge. Use real badge-style marks, not a plain text row.
3. **"Why local and personal" section.** 2 to 3 pillars built around direct technician relationships, direct accountability, and no call-center hand-off. This is the section that does the positioning work described in Section 3 above. Do not name competitors.
4. **Services section.** The three in-scope services (general pest, termite, rodent) as an asymmetric bento or feature grid with real category-specific imagery per tile, explicitly not the banned "three equal identical cards in a row" pattern (skill 9.C). Each tile links to its full service page.
5. **How it works.** Inspect, treat, protect, as an actual short process narrative, not generic "Step 1 / Step 2 / Step 3" labeling (skill 4.7 bans that exact pattern).
6. **Residential / commercial split.** A clear two-path module (e.g., 50/50 split-screen) so a visiting business owner and a visiting homeowner each immediately see their own path, mirroring the Western Exterminator pattern but designed fresh.
7. **Local coverage.** A map or visual list of the Orange County / Riverside / Inland Empire service area, written with specific local voice rather than a dry city list dump. Link out to `/service-areas`.
8. **Reviews.** Structured like the best of the three references (punchy pull-quote plus name plus city, or a clean testimonial carousel), but see Section 12, real reviews only, use clearly-labeled sample content until real reviews exist.
9. **Guarantee section.** A named guarantee (e.g., something like "The Pest Eliminators Promise," name it something better if you can) as a distinct visual moment, mirroring Terminix's branded-guarantee device. Actual terms are a placeholder, see Section 12.
10. **FAQ accordion.** 5 to 8 questions targeting local, seasonal, and safety concerns (pet safety, how often service is needed, what to expect during an inspection, DIY vs professional). Write fresh, do not lift competitor FAQ copy.
11. **Final CTA band.** Free inspection form plus phone number. On mobile, also implement a persistent bottom bar with Call and Book Inspection buttons, this category converts heavily on mobile click-to-call and none of that should depend on the user scrolling back to a CTA.
12. **Footer.** Full NAP (name, address, phone) for local SEO consistency, service links, service-area links, license number placeholder, social links if applicable, legal.

---

## 8. INTERIOR PAGES (brief specs)

- **Service pages** (`/services/general-pest`, `/services/termite`, `/services/rodent`): what the service covers, what the process looks like, a short residential-vs-commercial note (not full duplicate pages), relevant FAQ entries, CTA to request an inspection.
- **`/residential`**: homeowner-focused framing, common pests, the guarantee, testimonials from homeowners.
- **`/commercial`**: industries served (draw a realistic, relevant list, e.g. restaurants, retail, offices, property management, adapt from Western Exterminator's list but only include industries that make sense for this company's real scope, flag as confirmable), compliance/discretion messaging (many commercial clients care about inconspicuous service), a commercial-specific contact path.
- **`/service-areas`**: hub listing the region, linking to 2-3 real example city page builds (see Section 12 for what's confirmed vs. placeholder).
- **`/about`**: the local-and-personal story, real team photos (or clearly flagged placeholders), licensing, years in business (placeholder, see Section 12).
- **`/reviews`**: full testimonial archive.
- **`/contact`**: the primary lead-capture form (name, phone, email, zip, pest/service type dropdown, message), phone number, service-area map, response-time expectation.
- **`/faq`**: expanded FAQ hub, can share content with the homepage accordion.

---

## 9. COPYWRITING RULES

Follow the design-taste-frontend skill's content rules exactly (its Sections 4.9, 9.D, and 9.G). The ones most likely to get violated on a content-heavy local-services site:

- **Zero em-dashes, anywhere, in anything.** Not in headlines, not in body copy, not in testimonials you draft as placeholders. Use a period, a comma, or restructure the sentence.
- **No filler-verb slop.** Ban "elevate," "unleash," "seamless," "revolutionize," "next-gen," "game-changing." Use concrete, specific language, this is pest control, not a startup pitch deck.
- **No fake-perfect numbers.** If you cite a statistic or claim, it must be either clearly sourced/real, or organic and specific rather than round ("thousands of homes protected" not "10,000+ homes protected," unless that number is confirmed real).
- **No "Jane Doe" placeholder names.** If a testimonial must be a placeholder, mark it explicitly as a sample rather than giving it a fake-but-realistic name and location that could be mistaken for a real customer.
- **Copy self-audit before shipping** (skill 4.9): re-read every visible string, headline, button, caption, alt text, and flag anything grammatically off or that reads like AI trying to sound thoughtful.

---

## 10. LOCAL SEO AND TECHNICAL REQUIREMENTS

- **Stack:** Next.js (App Router) + TypeScript + Tailwind v4 + shadcn/ui + Motion. `next/font` for typography, `next/image` for all imagery.
- **Structured data:** `LocalBusiness` JSON-LD on the homepage and each service-area page (address/phone are placeholders until Section 12 is resolved, but wire the schema up correctly now).
- **Metadata:** unique title/description per page following a pattern like "[Service] in [City], CA | Pest Eliminators" (adapted convention, observed working across all three competitor sites, not copied text).
- **NAP consistency:** the same name, address, and phone format must appear identically in the header, footer, contact page, and schema, this matters for local search ranking.
- **`sitemap.xml` and `robots.txt`.**
- **Forms:** client-side validation, clear loading/success/error states (skill 4.5), no dead-end submissions.
- **Core Web Vitals:** LCP under 2.5s (priority-load the hero image), INP under 200ms, CLS under 0.1 (skill 6.D). Run a Lighthouse pass before calling this done.
- **Accessibility:** WCAG AA minimum on all text and CTA contrast (skill 4.5's Button Contrast Check and Form Contrast Check apply directly to every CTA and every form field on this site).
- **Dark mode:** the skill requires dual-mode design for any consumer-facing page (6.C). Build it in from the start with the Tailwind `dark:` variant, token strategy locked per skill 8.A, don't bolt it on later.

---

## 11. SKILLS AND TOOLS TO USE WHILE BUILDING

- Follow `.agents/skills/design-taste-frontend/SKILL.md` throughout, it is already installed in this project. Its Final Pre-Flight Check (Section 14 of that file) is the actual definition of done, run it explicitly and honestly before reporting completion.
- Use the `run` skill (or equivalent: start the dev server, open it in a real browser) to click through the golden path yourself: submit the contact form, tap the mobile call button, navigate every nav link, check both light and dark mode, check mobile and desktop breakpoints. A build that only exists as unread code is not verified.
- Once the stack is scaffolded, consider running `/init` to generate a `CLAUDE.md` for this project so conventions (stack choices, palette decision, component patterns) persist for future sessions.
- After the first full build pass, consider a `/code-review` or `/simplify` pass for a cleanup sweep before calling it launch-ready.
- The `find-skills` skill is also installed globally in this environment if you find you need to discover any other capability mid-build.

---

## 12. DATA INTEGRITY: WHAT IS REAL VS. PLACEHOLDER (READ THIS SECTION CAREFULLY)

This is a real business, not a demo. The strategic and design decisions above are grounded in real research and real answers from the business owner. The following, however, are **not yet confirmed** and must be built as clearly-marked placeholders, never as invented facts that look real:

- **Phone number.** Use an obviously-placeholder format like `(XXX) XXX-XXXX` in visible copy, or a clearly labeled `[PHONE NUMBER]` token, never a plausible-looking real number that a real person could accidentally dial.
- **Physical address(es) and exact license number.** Placeholder tokens only (`[LICENSE #]`, `[ADDRESS]`). Do not invent a California pest control license number, that number maps to a real regulatory record.
- **Years in business / founding year / "since [year]" claims.** Do not invent one. Use a placeholder token, this is a factual claim a real customer could check.
- **Exact list of cities served.** "Southern California, Orange County / Riverside / Inland Empire" is confirmed. A specific exhaustive list of covered cities is not, build 2-3 example service-area pages as real page templates (e.g., using Orange, Riverside, Corona, cities already referenced in the competitive research as being in this exact corridor) but flag clearly that the full list needs confirmation from the business before publishing all of them as "areas we serve."
- **Customer testimonials.** Do not invent quotes attributed to fake-but-realistic customer names and present them as real reviews. Either leave clearly-labeled sample review slots (visually marked "Sample review, replace with a real one") or build the review component with obviously placeholder content, never something that could be mistaken for a real, fabricated endorsement.
- **Guarantee/warranty exact terms.** The concept of a named guarantee is recommended (Section 7, item 9), but the specific terms (length of warranty, what's covered) are a placeholder pending business confirmation.
- **Any specific dollar-amount promo** (e.g., "$50 off"). A promo module is category-standard and worth building the UI for, but the actual discount amount and terms are a placeholder, that's a real financial offer only the business owner can authorize.
- **Commercial industries served** and **exact service list beyond the three confirmed core services.** Keep to general pest, termite, and rodent as confirmed. Anything else (industries served list, additional pest types) should be built as an easily-editable, clearly-flagged draft, not asserted as final.
- **Logo and existing brand assets.** None were provided. Design a wordmark/simple monogram treatment as part of this build (per skill 4.8, if inventing a brand mark, generate a real simple SVG mark, not a plain text wordmark), but flag it clearly as a proposed identity, not an existing one to preserve.

At the end of the build, produce a short, explicit checklist of every placeholder above so the business owner can fill them in before this goes live. Do not let any of these blend in as if they were real, verified information.

---

## 13. DEFINITION OF DONE

- [ ] Design Read stated explicitly.
- [ ] Dials stated and reasoned (this brief's 6/5/4, or your justified deviation).
- [ ] Full IA from Section 6 built, phase-2 items correctly excluded.
- [ ] Homepage sections from Section 7 built in order, no repeated layout families, no banned AI-tell patterns from skill Section 9.
- [ ] Skill's Final Pre-Flight Check (its Section 14) run and honestly passed.
- [ ] Tested live in a browser: golden path (form submission, phone tap, nav, service pages), both color modes, mobile and desktop breakpoints.
- [ ] Lighthouse/Core Web Vitals check done.
- [ ] Section 12 placeholder checklist delivered to the business owner as part of the final report, clearly separated from what's actually finished.

Build something that would make a Southern California homeowner with ants in the kitchen pick up the phone, and that looks like it was designed by people who take the business as seriously as the pest problem. Go.
