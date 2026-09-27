import { getListingsSync } from "./listing-store";
import { loadJson, saveJson } from "./storage";

export type AgentStatus = "active" | "paused";

export type Agent = {
  id: string;
  name: string;
  phone: string;
  area: string;
  pin: string;
  commission: number;
  status: AgentStatus;
};

export const AGENTS: Agent[] = [
  {
    id: "agt-rohit",
    name: "Rohit Sharma",
    phone: "7983667722",
    area: "Golf Course Road",
    pin: "4401",
    commission: 1.5,
    status: "active",
  },
  {
    id: "agt-anjali",
    name: "Anjali Verma",
    phone: "7983667722",
    area: "DLF Phase 5",
    pin: "4402",
    commission: 1.75,
    status: "active",
  },
  {
    id: "agt-imran",
    name: "Imran Khan",
    phone: "7983667722",
    area: "Sector 54",
    pin: "4403",
    commission: 1.5,
    status: "active",
  },
  {
    id: "agt-priya",
    name: "Priya Gupta",
    phone: "7983667722",
    area: "Sohna Road",
    pin: "4404",
    commission: 2,
    status: "active",
  },
  {
    id: "agt-sandeep",
    name: "Sandeep Yadav",
    phone: "7983667722",
    area: "MG Road",
    pin: "4405",
    commission: 1.25,
    status: "active",
  },
];

export type SheetRow = {
  id: string;
  agentId: string;
  agentName: string;
  phone: string;
  area: string;
  listingSlug: string;
  leadName: string;
  status: "New" | "Hot" | "Visit" | "Won" | "Lost";
  commission: number;
};

export const SEED_SHEET: SheetRow[] = [
  {
    id: "row-1",
    agentId: "agt-rohit",
    agentName: "Rohit Sharma",
    phone: "7983667722",
    area: "Golf Course Road",
    listingSlug: "golf-course-penthouse",
    leadName: "Amit Gupta",
    status: "Hot",
    commission: 1.5,
  },
  {
    id: "row-2",
    agentId: "agt-anjali",
    agentName: "Anjali Verma",
    phone: "7983667722",
    area: "DLF Phase 5",
    listingSlug: "dlf-crest-flat",
    leadName: "Neha Saxena",
    status: "Visit",
    commission: 1.75,
  },
  {
    id: "row-3",
    agentId: "agt-imran",
    agentName: "Imran Khan",
    phone: "7983667722",
    area: "Sector 54",
    listingSlug: "sector-54-penthouse",
    leadName: "Dr. Farhan Ali",
    status: "New",
    commission: 1.5,
  },
  {
    id: "row-4",
    agentId: "agt-priya",
    agentName: "Priya Gupta",
    phone: "7983667722",
    area: "Sohna Road",
    listingSlug: "sohna-road-flat",
    leadName: "Rakesh Pal",
    status: "Hot",
    commission: 2,
  },
  {
    id: "row-5",
    agentId: "agt-sandeep",
    agentName: "Sandeep Yadav",
    phone: "7983667722",
    area: "MG Road",
    listingSlug: "mg-road-flat",
    leadName: "Meera Kapoor",
    status: "Won",
    commission: 1.25,
  },
];

export function agentById(id: string) {
  return AGENTS.find((a) => a.id === id);
}

export function getAssignments(): Record<string, string> {
  const seed: Record<string, string> = {};
  for (const l of getListingsSync()) seed[l.slug] = l.assignedAgentId;
  return { ...seed, ...loadJson<Record<string, string>>("assignments", {}) };
}

export function setAssignment(slug: string, agentId: string) {
  const next = { ...getAssignments(), [slug]: agentId };
  saveJson("assignments", next);
  return next;
}

export function listingsForAgent(agentId: string) {
  const map = getAssignments();
  return getListingsSync().filter((l) => map[l.slug] === agentId);
}

export function agentByPin(pin: string) {
  return AGENTS.find((a) => a.pin === pin);
}
