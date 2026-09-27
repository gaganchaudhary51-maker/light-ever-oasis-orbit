import { BRAND, waUrl } from "./brand";
import type { Listing } from "./listings";

export function visitMessage(listing?: Listing) {
  if (!listing) {
    return `Namaste, I want a viewing with ${BRAND.name}, Gurugram — flats / penthouses.`;
  }
  return `Namaste, I want a viewing for ${listing.name} (${listing.locality}). — from the ${BRAND.name} site.`;
}

export function priceMessage(listing?: Listing) {
  if (!listing) {
    return `Namaste, please share current price bands for available flats and penthouses in Gurugram. — ${BRAND.name}`;
  }
  return `Namaste, please share the latest price for ${listing.name} (${listing.locality}, ${listing.size}). — from the ${BRAND.name} site.`;
}

export function brochureMessage(listing?: Listing) {
  if (!listing) {
    return `Namaste, please send the ${BRAND.name} brochure on WhatsApp.`;
  }
  return `Namaste, please send the brochure / floor notes for ${listing.name}.`;
}

export function agentIntroMessage() {
  return `Namaste, I am a property agent in Gurugram and would like to work with ${BRAND.name}. Please share the agent kit.`;
}

export function listingShareText(listing: Listing) {
  return `${listing.name} — ${listing.locality}\n${listing.type === "penthouse" ? "Penthouse" : "Flat"} · ${listing.size}\nPrice band: ${listing.priceBand}\nStatus: ${listing.status}\n\nWhatsApp ${BRAND.name}: +${BRAND.phoneE164}\n${BRAND.name}`;
}

export const WA_TEMPLATES = [
  {
    id: "visit",
    title: "Viewing",
    titleHi: "विज़िट",
    body: visitMessage(),
  },
  {
    id: "price",
    title: "Price",
    titleHi: "कीमत",
    body: priceMessage(),
  },
  {
    id: "brochure",
    title: "Brochure",
    titleHi: "ब्रोक्योर",
    body: brochureMessage(),
  },
  {
    id: "agent",
    title: "Agent intro",
    titleHi: "एजेंट परिचय",
    body: agentIntroMessage(),
  },
] as const;

export const REVIEW_REQUESTS = [
  `Namaste, thank you for visiting ${BRAND.name}. If the viewing felt right, a Google review helps the next Gurugram family find us.`,
  `Grateful you came to Golf Course Road. A short Google review would mean a lot to our desk.`,
  `Thank you for considering ${BRAND.name}. When you have a minute, a Google review with Gurugram in the text helps neighbours trust us.`,
  `Aapke visit ke liye dhanyavaad. Agar flat / penthouse pasand aaya ho to Google par 2 line likh dijiye — ${BRAND.name}, Gurugram.`,
  `We handed the keys. If the home feels right, a Google review is the best referral. — ${BRAND.name}`,
  `If our advisor was on time and clear, please say so on Google. It keeps Gurugram families safe from unknown brokers. — ${BRAND.name}`,
];

export const PHOTO_CAPTIONS = [
  "The Regent Penthouse dusk — Golf Course Road, wraparound terrace, Gurugram.",
  "DLF Crest Residence — stacked living, gold balcony rails, Phase 5.",
  "Sector 54 Sky Villa — quiet contemporary penthouse, gold linear light.",
  "Sohna Road Residence — gated 3 BHK, papers ready.",
  "MG Road Maisonette — high ceilings, city address.",
  "Sector 43 Courtyard Flat — compact 3 BHK with garden court.",
  "Double-height living, black marble floors (preview interior).",
  "Master bedroom, gold-trimmed headboard (preview interior).",
  "Kitchen, black stone and gold fittings (preview interior).",
  "Drone dusk over a Gurugram tower (preview aerial).",
];

export const GBP_COPY = {
  businessName: BRAND.name,
  category: `${BRAND.gbpCategoryPrimary} / ${BRAND.gbpCategorySecondary}`,
  address: BRAND.addressLine,
  phone: BRAND.phoneDisplay,
  website: "https://tundra-frost-cactus.grok.me",
  hours: BRAND.hoursEn,
  description: `${BRAND.name} is a luxury residential platform in Gurugram, Haryana. We list private flats and penthouses — Golf Course Road, DLF Phase 5, Sector 54, MG Road and Sohna Road. ${BRAND.tagline} Viewings on WhatsApp ${BRAND.phoneDisplay}.`,
};

export function utmListingUrl(listing: Listing, source: string, medium: string, campaign: string) {
  const params = new URLSearchParams({
    utm_source: source,
    utm_medium: medium,
    utm_campaign: campaign,
    utm_content: listing.slug,
  });
  return `/homes/${listing.slug}?${params.toString()}`;
}

export { waUrl };
