import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PinGate } from "@/components/auth/PinGate";
import { agentByPin, getAssignments, type Agent } from "@/lib/agents";
import { useListings } from "@/lib/listing-store";
import type { Listing } from "@/lib/listings";
import { BRAND, waUrl } from "@/lib/brand";
import { listingShareText, visitMessage } from "@/lib/copy";
import { ListingCard } from "@/components/listings/ListingCard";
import { loadJson, loadSession, saveJson } from "@/lib/storage";
import { SEED_LEADS, type Lead } from "@/lib/leads";
import { useI18n } from "@/lib/i18n";
import { format } from "date-fns";

export const Route = createFileRoute("/portal")({
  component: PortalPage,
  head: () => ({
    meta: [{ title: `Agent portal | ${BRAND.name}` }],
  }),
});

function PortalPage() {
  return (
    <PinGate
      sessionKey="portal"
      expected={(pin) => Boolean(agentByPin(pin))}
      hint="Agent PIN. Demo: 4401 (Rohit) · 4402 · 4403 · 4404 · 4405"
      title="Agent portal"
    >
      <PortalInner />
    </PinGate>
  );
}

function PortalInner() {
  const { t } = useI18n();
  const pin = loadSession("portal") ?? "";
  const agent = agentByPin(pin);
  if (!agent) return null;
  return <PortalBody agent={agent} tAdd={t("add_lead")} />;
}

function PortalBody({ agent, tAdd }: { agent: Agent; tAdd: string }) {
  const all = useListings();
  const map = getAssignments();
  const assigned = all.filter((l) => map[l.slug] === agent.id);
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    const all = loadJson("leads", SEED_LEADS);
    setLeads(all.filter((l) => l.agentId === agent.id));
  }, [agent.id]);

  const add = (name: string, phone: string, slug: string) => {
    const all = loadJson("leads", SEED_LEADS);
    const lead: Lead = {
      id: `ld-${Date.now()}`,
      name,
      phone,
      source: "agent",
      temp: "warm",
      listingSlug: slug,
      agentId: agent.id,
      nextFollowUp: format(new Date(), "yyyy-MM-dd"),
      notes: `Added by ${agent.name}`,
      createdAt: format(new Date(), "yyyy-MM-dd"),
    };
    saveJson("leads", [lead, ...all]);
    setLeads((prev) => [lead, ...prev]);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      <p className="gold-rule max-w-xs justify-start">{agent.area}</p>
      <h1 className="font-display mt-3 text-4xl">{agent.name}</h1>
      <p className="mt-2 text-muted">
        Commission {agent.commission}% · WhatsApp {BRAND.phoneDisplay}
      </p>

      <h2 className="font-display mt-10 text-3xl">Assigned inventory</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {assigned.map((l) => (
          <div key={l.slug}>
            <ListingCard listing={l} />
            <a
              href={waUrl(`${listingShareText(l)}\nShared by agent ${agent.name}`)}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex min-h-11 items-center text-sm text-gold"
            >
              Share + track on WhatsApp
            </a>
          </div>
        ))}
      </div>

      <h2 className="font-display mt-12 text-3xl">My leads</h2>
      <AddOwnLead listings={assigned.length ? assigned : all} onAdd={add} label={tAdd} />
      <ul className="mt-4 divide-y divide-line rounded-xl border border-line">
        {leads.map((l) => (
          <li key={l.id} className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-sm">
            <span>
              {l.name} · {l.phone}
            </span>
            <span className="text-muted">
              {all.find((x) => x.slug === l.listingSlug)?.name} · {l.temp}
            </span>
            <a
              href={waUrl(visitMessage(all.find((x) => x.slug === l.listingSlug)))}
              className="text-gold"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AddOwnLead({
  listings,
  onAdd,
  label,
}: {
  listings: Listing[];
  onAdd: (name: string, phone: string, slug: string) => void;
  label: string;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [slug, setSlug] = useState(listings[0]?.slug ?? "");
  return (
    <form
      className="mt-4 grid gap-2 sm:grid-cols-4"
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(name, phone, slug);
        setName("");
        setPhone("");
      }}
    >
      <input
        required
        placeholder="Lead name"
        className="min-h-11 rounded-md border border-line bg-surface px-3"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        required
        placeholder="Phone"
        className="min-h-11 rounded-md border border-line bg-surface px-3"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <select
        className="min-h-11 rounded-md border border-line bg-surface px-3"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
      >
        {listings.map((l) => (
          <option key={l.slug} value={l.slug}>
            {l.name}
          </option>
        ))}
      </select>
      <button type="submit" className="min-h-11 rounded-full bg-gold text-sm font-medium text-bg">
        {label}
      </button>
    </form>
  );
}
