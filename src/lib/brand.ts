// Brand config — hydrated at scaffold time by build_site.py from
// plan-input.json and the client record. All {{TOKENS}} are replaced
// by the scaffold step; this file should not be hand-edited after that.

export const brand = {
  slug: "restopros-of-central-maryland",
  displayName: "RestoPros of Central Maryland",
  shortName: "RestoPros of Central Maryland",
  legalName: "RestoPros of Central Maryland",
  // Registered DBA / trade name — filled by rename_site_sync.py the moment
  // the state approves the client's DBA filing (empty until then). When set,
  // the footer carries the "[legal] doing business as [DBA]" line and schema
  // declares it as the business name, so Google/BrightLocal find the new
  // name corroborated on the site before and during the GBP rename.
  dbaName: "RestoPros of Central Maryland - 24/7 Emergency Water Damage Restoration & Mold Remediation",
  // Brand name as text beside the header logo (Santino 2026-11-21): set
  // ONLY by the rename flow (header_name_rollout.py) from the Citations
  // Building stage on. false = logo only.
  headerName: true,
  domain: "restoproscentralmd.com",
  canonicalUrl: "https://restoproscentralmd.com",
  phone: "(240) 261-1639",
  phoneRaw: "+12402611639",
  hideMobileHeaderCall: false,
  // A2P/SMS-registration legal entity. When set, the estimate forms render
  // the carrier-compliant consent checkbox naming this entity (exact wording
  // matters to reviewers — do not paraphrase). Empty = generic consent only.
  smsConsentEntity: "",
  // Sitewide call-tracking number (2026-08-24). When BOTH fields are set,
  // a tiny inline script in BaseLayout swaps every visible phone mention
  // and tel: link to this number AFTER the page renders. The HTML source,
  // the JSON-LD in schema.ts, and anything crawlers/citation-checkers read
  // keep the canonical NAP number above — humans dial the tracked line,
  // Google sees consistent NAP. Empty = feature off (default at scaffold;
  // filled by the call-tracking provisioning step).
  trackingPhone: "(240) 617-4402",
  trackingPhoneRaw: "+12406174402",
  email: "drestum@restopros.co",
  hours: "24/7",
  // AVAILABILITY 24/7 (Santino 2026-11-21, scripts/availability.py): calls are
  // answered 24/7 (the AI receptionist), every trade, default true; false only
  // when the client said not to. Separate from the emergency-SERVICE rule
  // (emergency_policy.py, the `hours` gate above). openingHoursSpec = the
  // schema hours (scripts/schema_hours.py): 24/7 when available, else the
  // real Google hours, else none.
  available247: true,
  openingHoursSpec: [{"days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59"}] as { days: string[]; opens: string; closes: string }[],
  foundedYear: "",
  primaryCity: "Rockville",
  homeRegion: "Central Maryland",
  primaryState: "MD",
  // primaryCity/primaryState = the #1 MARKETING city (headlines, coverage
  // copy). addressCity/addressState = where the business PHYSICALLY is.
  // They are usually the same and often diverge (DISS: Farrell PA office,
  // Youngstown OH target) — only the address pair may go in a PostalAddress.
  addressCity: "Rockville",
  addressState: "MD",
  streetAddress: "",
  postalCode: "",
  lat: "39.262387",
  lng: "-76.6535845",
  placeId: "ChIJ64mT9f9M2oMRGaajJtP-T4A",
  googleCid: "",
  imagesBase: "https://images.restoproscentralmd.com",
  googleMapsApiKey: "",
  // Analytics — set post-scaffold (scripts/analytics_set.py / create_ga4.py); no-op if empty
  ga4MeasurementId: "",
  clarityProjectId: "",
  logoUrl: "/images/logo.png",
  licenseNumbers: [] as string[],
  licenseAuthority: "",
  // State license-verification page — the footer links the license number here.
  licenseLookupUrl: "",
  licenseType: "",
  // Operator-confirmed "licensed & insured" attestation from plan-input.json —
  // lets the TrustStrip show the badge before a license number is on file.
  licensedInsuredAttested: true as boolean,
  certifications: ["IICRC WRT (Water)"] as string[],
  trustBadges: ["IICRC Certified Firm", "Licensed & Insured", "24/7 Emergency Service", "Locally Owned & Operated"] as string[],
  jobPhotos: [] as string[],
  sameAsUrls: ["https://www.facebook.com/p/RestoPros-of-Central-Maryland-61577854297653/", "https://maps.google.com/maps?cid=9245888742854731289", "https://www.yelp.com/biz/restopros-of-central-maryland-gaithersburg", "https://nextdoor.com/pages/restopros-of-central-maryland-gaithersburg-md/", "https://homeguide.com/md/baltimore/water-damage-restoration/restopros-of-central-maryland---24-7-emergency-water-damage-restoration---mold-remediation-VMqUCC5Tb"] as string[],
  credentials: [{"name": "IICRC WRT (Water)", "kind": "certification", "authority": "IICRC", "holder": "technicians", "course": "WRT"}] as { name: string; kind: string; number?: string; authority?: string; url?: string; since?: string; state?: string; holder?: string; course?: string }[],
  credentialsLine: [{"text": "IICRC-certified technicians (WRT)"}] as { text: string; url?: string }[],
  // GBP rating fields — synced from the live Google Business Profile by
  // scripts/sync_brand_reviews.py; never hand-edited (real ratings only).
  gbpRatingValue: "4.9",
  gbpReviewCount: "34",
  gbpReviews: [
    { author: "Kevin", rating: 5, text: "They did an excellent job on removing the mold and cleaning up after the work was completed.", when: "November 2026" },
    { author: "Kenneth", rating: 5, text: "Very prompt in responding to our need to remove water from leaking pipes. Very professional and thorough.", when: "November 2026" },
    { author: "Margaret", rating: 5, text: "RestoPros responded within minutes when I called about remediation following a water leak. They came promptly to give an estimate and started work when we were ready for them . They carefully and efficiently took care of the remediation. Every member of the team was pleasant and communicative about…", when: "November 2026" },
    { author: "Valerie", rating: 5, text: "My experience was truly exceptional. The entire team worked diligently to fix my basement and return it to normal. They kept me informed every step of the way. They worked with the insurance company to provide all the necessary documentation. I hope i never have to use their services again, but if…", when: "November 2026" },
    { author: "Mengyao", rating: 5, text: "Professional, efficient, reasonably priced and great communication. Highly recommended.", when: "November 2026" },
    { author: "Choose2Behappy", rating: 5, text: "First, I want to say how appreciative I am of RestoPros of Central Maryland. While I was out of town we had heavy rain and I was concerned that water would be coming in to the basement. Jonathan and team were able to assess the situation the same day I spoke to them and to include using instruments…", when: "October 2026" },
  ] as { author: string; rating: number; text: string; when: string }[],
  tagline: "24/7 restoration services in Rockville, Silver Spring, Bethesda and across Central Maryland.",
  // optional custom insurance positioning line (Hero renders only when set)
  insuranceTrustLine: "",
  ctaLabel: "24/7 Emergency Line",
  // Vertical trade-identity copy — resolved at scaffold time from
  // templates/{vertical}/vertical-tokens.json (see scripts/verticals.py).
  // Components must use these instead of hardcoding a trade phrase.
  // vertical gates layout too: restoration is call-first, so the homepage
  // hero renders NO estimate form there (Santino 2026-09-11).
  vertical: "restoration",
  tradeNoun: "restoration",
  specialistPhrase: "Damage Restoration Specialists",
  announcementSuffix: "24/7 Emergency Response",
  homeAboutBlurb: "RestoPros of Central Maryland serves Rockville, Silver Spring, Bethesda, Gaithersburg, Columbia and the surrounding Montgomery, Prince George's, Howard and Anne Arundel County communities with professional damage restoration for homes and businesses. From the first emergency call to the final walkthrough, our team manages the entire recovery, and we answer the phone 24/7, so help is on the way the moment something goes wrong.",
} as const;

export const entityId = `${brand.canonicalUrl}/#identity`;
