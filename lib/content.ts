/**
 * All site copy lives here so it can be audited in one pass and edited without
 * touching layout code.
 *
 * COPY RULES ENFORCED IN THIS FILE:
 *  - Zero em-dash and en-dash characters. Regular hyphen only.
 *  - No filler verbs (elevate, unleash, seamless, revolutionize, next-gen).
 *  - No invented statistics, no invented customer names, no invented dates.
 */

export type Service = {
  slug: string;
  name: string;
  navLabel: string;
  summary: string;
  intro: string;
  pests: string[];
  covers: { title: string; body: string }[];
  imageSeed: string;
};

export const services: Service[] = [
  {
    slug: "general-pest",
    name: "General Pest Control",
    navLabel: "General Pest",
    summary:
      "Recurring protection against the insects that turn up in Southern California kitchens, garages and yards.",
    intro:
      "Most pest problems in this region are not one-time events. Ants follow the weather, roaches follow moisture, and spiders follow whatever else is already inside. Our general pest service treats the active problem, then keeps a barrier in place so the next wave does not get a foothold.",
    pests: [
      "Ants",
      "Cockroaches",
      "Spiders",
      "Silverfish",
      "Earwigs",
      "Crickets",
      "Beetles",
      "Centipedes and millipedes",
    ],
    covers: [
      {
        title: "Interior treatment",
        body: "Targeted application in kitchens, bathrooms, garages and any room with active pest traffic, focused on entry points rather than blanket spraying.",
      },
      {
        title: "Exterior barrier",
        body: "Treatment of the foundation line, eaves, weep holes and utility penetrations, which is where nearly every indoor ant trail actually starts.",
      },
      {
        title: "Yard and perimeter",
        body: "Attention to the harborage points close to the structure: irrigation boxes, woodpiles, dense ground cover and planter beds against the wall.",
      },
      {
        title: "Return visits between services",
        body: "If activity comes back between scheduled visits, we come back out. Specific terms are set in your service agreement.",
      },
    ],
    imageSeed: "pest-eliminators-general-pest-technician",
  },
  {
    slug: "termite",
    name: "Termite Control",
    navLabel: "Termite",
    summary:
      "Inspection and treatment for the drywood and subterranean termites that damage homes across the region.",
    intro:
      "Southern California has both drywood and subterranean termites, and they call for different treatments. Drywood colonies live inside the wood itself, often in attic framing, eaves and window trim. Subterranean colonies live in the soil and reach the structure through mud tubes near the foundation. The first job is identifying which one you actually have.",
    pests: ["Drywood termites", "Subterranean termites"],
    covers: [
      {
        title: "Full structural inspection",
        body: "We check attic framing, eaves, sub-area, foundation line, window and door trim, and any wood in contact with soil, then show you what we found.",
      },
      {
        title: "Identification before treatment",
        body: "Drywood and subterranean termites need different approaches. We confirm the species and the extent of activity before recommending anything.",
      },
      {
        title: "Treatment options explained",
        body: "You get the tradeoffs of each option in plain language, including cost, disruption and what each one does and does not cover, before you decide.",
      },
      {
        title: "Damage assessment",
        body: "Where termites have already compromised wood, we document it so you can plan repairs instead of finding out during a sale.",
      },
    ],
    imageSeed: "pest-eliminators-termite-inspection-attic",
  },
  {
    slug: "rodent",
    name: "Rodent Control",
    navLabel: "Rodent",
    summary:
      "Trapping, removal and exclusion work that closes the gaps rats and mice are using to get in.",
    intro:
      "Trapping alone is a temporary fix. Rats and mice keep coming back to a structure that still has an open entry point, and roof rats in particular are good climbers with access to any roofline near a tree or fence. The work that lasts is exclusion: finding the gaps and sealing them.",
    pests: ["Roof rats", "Norway rats", "House mice"],
    covers: [
      {
        title: "Entry point inspection",
        body: "We look at the roofline, vents, eaves, crawl space, garage door seals and utility penetrations, which is where rodents get in far more often than open doors.",
      },
      {
        title: "Trapping and removal",
        body: "Placement based on the actual runways and droppings we find, not guesswork, with follow-up visits until activity stops.",
      },
      {
        title: "Exclusion and sealing",
        body: "Closing the gaps with materials rodents cannot chew through. This is the part that keeps the problem from repeating next season.",
      },
      {
        title: "Sanitation guidance",
        body: "Practical notes on what is drawing them in, from fruit trees and pet food to bird seed and unsealed trash, so the property stops being a destination.",
      },
    ],
    imageSeed: "pest-eliminators-rodent-exclusion-crawlspace",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

/** The positioning pillars. This is the section that does the strategic work. */
export const localPillars = [
  {
    title: "The same technician, not the next available one",
    body: "You get someone who knows your property, remembers the ant trail behind the garage and can tell you what changed since the last visit. Continuity is the whole point of a service relationship, and it is the first thing a national dispatch system gives up.",
  },
  {
    title: "Technicians who live where they work",
    body: "Pest pressure in Orange County is not the same as it is in Riverside, and it changes with the season in both. Our team works these neighborhoods year round, so the recommendation you get is based on this block, not a national playbook.",
  },
  {
    title: "You can reach the people doing the work",
    body: "When something needs another look, you talk to the local team, not a call center queue that routes you to whoever picks up.",
  },
];

/** Process. Verb-noun, no "Step 1 / Stage 1" labelling (skill 9.F). */
export const process = [
  {
    verb: "Inspect",
    body: "A licensed technician walks the property and identifies what you have, where it is coming from and what is drawing it in. You get the findings before any treatment is recommended.",
  },
  {
    verb: "Treat",
    body: "Targeted work on the active problem, matched to the species and the structure. We explain what we are applying, where and why before we start.",
  },
  {
    verb: "Protect",
    body: "Ongoing service at the interval your property actually needs, with the entry points sealed and the perimeter maintained so the problem does not restart.",
  },
];

export const trustPoints = [
  { label: "Licensed and insured", detail: "California structural pest control license" },
  { label: "Locally owned", detail: "Not a franchise or national branch" },
  { label: "Free inspections", detail: "No charge to find out what you have" },
  { label: "Residential and commercial", detail: "Homes, rentals and business properties" },
];

/**
 * DRAFT: industries are a reasonable list for a company of this type but have
 * not been confirmed by the business. Edit before launch.
 */
export const industries = [
  { name: "Restaurants and food service", note: "Health inspection readiness and documented service records." },
  { name: "Retail and grocery", note: "Discreet scheduling that works around your open hours." },
  { name: "Property management", note: "Multi-unit coverage with per-unit reporting for owners and tenants." },
  { name: "Offices and professional space", note: "Low-disruption treatment scheduled outside business hours." },
  { name: "Warehousing and logistics", note: "Perimeter and dock-area programs for high-traffic buildings." },
  { name: "Schools and childcare", note: "Treatment plans built around occupied-space restrictions." },
];

export type City = {
  slug: string;
  name: string;
  county: string;
  blurb: string;
  climate: string;
  pressures: { pest: string; body: string }[];
  imageSeed: string;
};

/**
 * CONFIRMED: the business serves the Orange County / Riverside / Inland Empire
 * corridor. These three city pages are real, working examples of the template.
 * The full list of covered cities is NOT confirmed and must come from the
 * business owner before more pages are published.
 */
export const cities: City[] = [
  {
    slug: "orange",
    name: "Orange",
    county: "Orange County",
    blurb:
      "Older neighborhoods with mature landscaping, established trees and a lot of original wood framing. That combination is good for property value and good for pests.",
    climate:
      "Coastal influence keeps winters mild and wet and summers warm and dry. Very little of the year is cold enough to slow pest activity down, so treatment here is about staying ahead of the season rather than reacting to it.",
    pressures: [
      {
        pest: "Drywood termites",
        body: "Swarms show up from spring into early fall, and older homes with original eaves and window trim are the usual target. A lot of activity here is found during a sale inspection rather than by the homeowner.",
      },
      {
        pest: "Argentine ants",
        body: "They move indoors twice a year for opposite reasons: after winter rain pushes them out of the soil, and again in late summer when they come looking for water.",
      },
      {
        pest: "Roof rats",
        body: "Mature fruit trees and dense landscaping give them both food and a route to the roofline. Once they are in the attic they are a sealing problem, not just a trapping problem.",
      },
    ],
    imageSeed: "pest-eliminators-orange-ca-neighborhood",
  },
  {
    slug: "riverside",
    name: "Riverside",
    county: "Riverside County",
    blurb:
      "Hotter and drier than the coast, with wider swings between day and night. Irrigation is what concentrates pest activity around a structure here.",
    climate:
      "Inland heat runs long through the summer and drops off sharply overnight in the fall. Landscape irrigation becomes the reliable water source on a property, which is exactly what draws activity toward the foundation.",
    pressures: [
      {
        pest: "Subterranean termites",
        body: "They live in the soil and reach the structure through mud tubes, so irrigated foundation beds and any wood in contact with soil are the first place we look.",
      },
      {
        pest: "Rodents",
        body: "As nights cool in fall, rats and mice move from open land and drainage into garages, attics and crawl spaces. Fall is the season to have the exclusion work already done.",
      },
      {
        pest: "Cockroaches",
        body: "Summer heat pushes them toward drains, irrigation boxes and any consistent moisture, which is usually how they end up inside a kitchen or utility room.",
      },
    ],
    imageSeed: "pest-eliminators-riverside-ca-home-exterior",
  },
  {
    slug: "corona",
    name: "Corona",
    county: "Riverside County",
    blurb:
      "An inland valley on the Santa Ana River corridor, with newer tract housing on one side and wildland edge on the other. Each brings a different problem.",
    climate:
      "Inland valley conditions with hot dry summers and mild winters, plus canyon and wildland edges on the perimeter of many neighborhoods. Properties backing open space see pressure that properties in the middle of a tract do not.",
    pressures: [
      {
        pest: "Ants",
        body: "New construction on graded lots tends to see heavy ant pressure in the first several years as colonies re-establish around foundations and irrigation.",
      },
      {
        pest: "Spiders",
        body: "Homes along the wildland edge get consistent spider activity in eaves, garages and side yards, and it climbs in late summer and fall.",
      },
      {
        pest: "Rodents",
        body: "Properties backing canyon and open space have a steady supply of rodents testing the roofline and garage seals, particularly once the weather turns.",
      },
    ],
    imageSeed: "pest-eliminators-corona-ca-valley-housing",
  },
];

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}

export const faqs = [
  {
    q: "How much does a pest control service cost?",
    a: "It depends on the property size, the pest and how established the problem is, which is why the inspection is free. You get a specific price after we have actually looked at the property, not a range over the phone that changes when we arrive.",
  },
  {
    q: "Are the treatments safe around pets and children?",
    a: "We use EPA-registered products and apply them in the places pests travel rather than broadcasting them through living space. Your technician will tell you which areas to keep pets and kids out of and for how long, which is usually until the application has dried. If you have birds, fish or a pet with a health condition, tell us before the visit so we can adjust.",
  },
  {
    q: "How often do I need service?",
    a: "Most homes in this region do well on a recurring schedule rather than one-time treatments, because the pressure here is year round. The right interval depends on the property and what you are dealing with. An active infestation needs a tighter schedule at first, then settles into maintenance.",
  },
  {
    q: "What happens during the first inspection?",
    a: "A licensed technician walks the interior and exterior, checks the foundation line, entry points, attic or crawl space where relevant, and identifies what is active and what is attracting it. You get the findings and the options in plain language, along with a price, and no obligation to book anything.",
  },
  {
    q: "Do I need to leave the house during treatment?",
    a: "For most general pest and rodent work, no. Termite treatment depends on which method the situation calls for, and some options do require you to be out of the house while others do not. Your technician will make that clear before you commit to anything.",
  },
  {
    q: "Is a free inspection really free?",
    a: "Yes. The inspection and the recommendation cost nothing, whether or not you book service afterward. If we find that you do not have an active problem, we will tell you that.",
  },
  {
    q: "Do you work with businesses as well as homes?",
    a: "Yes. Commercial work runs on a different footing than residential, with service records for health inspections, scheduling around your operating hours and discretion in customer-facing areas. See the commercial services page for how that works.",
  },
  {
    q: "What areas do you serve?",
    a: "We cover the Orange County, Riverside and Inland Empire corridor. If you are not sure whether your address falls inside the service area, call and ask before booking.",
  },
];

/**
 * SAMPLE CONTENT, NOT REAL REVIEWS.
 *
 * These are deliberately unattributed and visibly labelled. Do not replace the
 * placeholder attribution with realistic-sounding invented names, that would
 * present a fabricated endorsement as genuine. Swap in real, permissioned
 * customer reviews before launch.
 */
export const sampleReviews = [
  {
    headline: "Found the entry point two other companies missed",
    body: "Placeholder review text. Replace with a real, permissioned customer review before this site goes live.",
    attribution: "[Customer name], [City]",
  },
  {
    headline: "Same technician every visit",
    body: "Placeholder review text. Replace with a real, permissioned customer review before this site goes live.",
    attribution: "[Customer name], [City]",
  },
  {
    headline: "Explained the termite options without pushing the expensive one",
    body: "Placeholder review text. Replace with a real, permissioned customer review before this site goes live.",
    attribution: "[Customer name], [City]",
  },
  {
    headline: "Came back out when the ants returned",
    body: "Placeholder review text. Replace with a real, permissioned customer review before this site goes live.",
    attribution: "[Customer name], [City]",
  },
  {
    headline: "Scheduled around our restaurant hours",
    body: "Placeholder review text. Replace with a real, permissioned customer review before this site goes live.",
    attribution: "[Customer name], [City]",
  },
  {
    headline: "Sealed the roofline instead of just setting traps",
    body: "Placeholder review text. Replace with a real, permissioned customer review before this site goes live.",
    attribution: "[Customer name], [City]",
  },
];

/** Reason-for-contact options on the inspection form. */
export const contactReasons = [
  "Ants or general insects",
  "Cockroaches",
  "Spiders",
  "Termites",
  "Rats or mice",
  "Commercial property",
  "Not sure yet",
  "Billing or existing account",
];
