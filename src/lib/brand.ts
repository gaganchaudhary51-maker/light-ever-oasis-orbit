export const BRAND = {
  name: "Regent Way",
  shortName: "RW",
  owner: "Regent Way",
  tagline: "Flats and penthouses in Gurugram.",
  taglineHi: "गुरुग्राम में फ़्लैट और पेंटहाउस।",
  city: "Gurugram",
  state: "Haryana",
  country: "India",
  pincode: "122002",
  street: "Golf Course Road",
  addressLine: "Golf Course Road, Gurugram, Haryana 122002",
  phoneDisplay: "+91 79836 67722",
  phoneE164: "917983667722",
  hoursEn: "Mon–Sat 10:00–19:00 · Sunday by appointment",
  hoursHi: "सोम–शनि 10:00–19:00 · रविवार अपॉइंटमेंट पर",
  mapsQuery: "Golf Course Road, Gurugram, Haryana 122002",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Golf+Course+Road,+Gurugram,+Haryana+122002",
  category: "Real estate agency / Luxury residences",
  gbpCategoryPrimary: "Real estate agency",
  gbpCategorySecondary: "Apartment building",
  crmPin: "7722",
  logo: "/logo.png",
  logoSm: "/logo-sm.jpg",
  seoTitle: "Flats & penthouses in Gurugram | Regent Way",
  seoDescription:
    "Regent Way — a platform for private flats and penthouses in Gurugram. Golf Course Road, DLF Phase 5, Sector 54, Sohna Road. WhatsApp +91 79836 67722.",
  googleQuery: "Regent Way Gurugram flats penthouses",
  googleSearchUrl:
    "https://www.google.com/search?q=Regent+Way+Gurugram+flats+penthouses",
  googleReviewHint:
    "After Google Business is live, paste the Place ID here to open the star-review form directly.",
  googlePlaceId: "",
} as const;

export function waUrl(text: string) {
  return `https://wa.me/${BRAND.phoneE164}?text=${encodeURIComponent(text)}`;
}

export function waPlain() {
  return `https://wa.me/${BRAND.phoneE164}`;
}

export function googleReviewUrl() {
  if (BRAND.googlePlaceId) {
    return `https://search.google.com/local/writereview?placeid=${BRAND.googlePlaceId}`;
  }
  return BRAND.googleSearchUrl;
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where can I find luxury flats and penthouses in Gurugram?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Regent Way lists private flats and penthouses across Golf Course Road, DLF Phase 5, Sector 54, MG Road and Sohna Road. WhatsApp +91 79836 67722 for a viewing.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book a viewing with Regent Way?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WhatsApp +91 79836 67722 from the Regent Way website. Named advisors, one number — no floating brokers.",
        },
      },
      {
        "@type": "Question",
        name: "Does Regent Way take Google reviews?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Scan the Regent Way review QR or search Google for Regent Way Gurugram and leave a star rating after your visit.",
        },
      },
    ],
  };
}

export function localBusinessJsonLd(siteUrl = "https://tundra-frost-cactus.grok.me") {
  return {
    "@context": "https://schema.org",
    "@type": ["RealEstateAgent", "LocalBusiness"],
    name: BRAND.name,
    legalName: BRAND.name,
    image: BRAND.logo,
    telephone: `+${BRAND.phoneE164}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND.street,
      addressLocality: BRAND.city,
      addressRegion: BRAND.state,
      postalCode: BRAND.pincode,
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "City",
      name: "Gurugram",
    },
    url: siteUrl,
    priceRange: "₹₹₹₹",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    sameAs: [BRAND.googleSearchUrl],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${BRAND.phoneE164}`,
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["hi", "en"],
    },
  };
}
