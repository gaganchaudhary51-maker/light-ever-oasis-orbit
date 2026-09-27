export type LeadSource = "whatsapp" | "web" | "agent" | "ad" | "walkin";
export type LeadTemp = "hot" | "warm" | "cold";

export type Lead = {
  id: string;
  name: string;
  phone: string;
  source: LeadSource;
  temp: LeadTemp;
  listingSlug: string;
  agentId: string;
  nextFollowUp: string;
  notes: string;
  visitOn?: string;
  createdAt: string;
};

export const SEED_LEADS: Lead[] = [
  {
    id: "ld-1",
    name: "Amit Gupta",
    phone: "9810011122",
    source: "whatsapp",
    temp: "hot",
    listingSlug: "golf-course-penthouse",
    agentId: "agt-rohit",
    nextFollowUp: "2026-08-28",
    notes: "Wants a viewing this Saturday with parents.",
    visitOn: "2026-08-29",
    createdAt: "2026-08-20",
  },
  {
    id: "ld-2",
    name: "Neha Saxena",
    phone: "9820033344",
    source: "agent",
    temp: "hot",
    listingSlug: "dlf-crest-flat",
    agentId: "agt-anjali",
    nextFollowUp: "2026-08-27",
    notes: "Comparing with a tower on Golf Course Road.",
    visitOn: "2026-08-27",
    createdAt: "2026-08-18",
  },
  {
    id: "ld-3",
    name: "Dr. Farhan Ali",
    phone: "9830055566",
    source: "web",
    temp: "warm",
    listingSlug: "sector-54-penthouse",
    agentId: "agt-imran",
    nextFollowUp: "2026-08-30",
    notes: "Asked if study can stay a study.",
    createdAt: "2026-08-22",
  },
  {
    id: "ld-4",
    name: "Rakesh Pal",
    phone: "9840077788",
    source: "ad",
    temp: "warm",
    listingSlug: "sohna-road-flat",
    agentId: "agt-priya",
    nextFollowUp: "2026-09-01",
    notes: "First 3 BHK. Wants papers on WhatsApp.",
    createdAt: "2026-08-21",
  },
  {
    id: "ld-5",
    name: "Meera Kapoor",
    phone: "9850099900",
    source: "walkin",
    temp: "cold",
    listingSlug: "mg-road-flat",
    agentId: "agt-sandeep",
    nextFollowUp: "2026-09-05",
    notes: "NRI, currently on hold. Call after 5 Sep.",
    createdAt: "2026-08-10",
  },
  {
    id: "ld-6",
    name: "Vikas Agarwal",
    phone: "9860012345",
    source: "whatsapp",
    temp: "hot",
    listingSlug: "sector-43-flat",
    agentId: "agt-rohit",
    nextFollowUp: "2026-08-28",
    notes: "Budget under 3.3 Cr. Parents will stay.",
    visitOn: "2026-08-30",
    createdAt: "2026-08-24",
  },
];
