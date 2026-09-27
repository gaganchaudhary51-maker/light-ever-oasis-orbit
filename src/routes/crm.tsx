import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { PinGate } from "@/components/auth/PinGate";
import { BRAND } from "@/lib/brand";
import { SEED_LEADS, type Lead, type LeadSource, type LeadTemp } from "@/lib/leads";
import { useListings } from "@/lib/listing-store";
import { AGENTS, getAssignments, setAssignment } from "@/lib/agents";
import { loadJson, saveJson } from "@/lib/storage";
import { useI18n } from "@/lib/i18n";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { format, isSameWeek, parseISO } from "date-fns";

export const Route = createFileRoute("/crm")({
  component: CrmPage,
  head: () => ({
    meta: [{ title: `CRM | ${BRAND.name}` }],
  }),
});

function CrmPage() {
  return (
    <PinGate
      sessionKey="crm"
      expected={(pin) => pin === BRAND.crmPin}
      hint={`Owner PIN for ${BRAND.owner}. Demo: ${BRAND.crmPin}`}
      title="Mini CRM"
    >
      <CrmInner />
    </PinGate>
  );
}

function CrmInner() {
  const { t } = useI18n();
  const listings = useListings();
  const [leads, setLeads] = useState<Lead[]>(SEED_LEADS);
  const [assign, setAssign] = useState<Record<string, string>>({});
  const [day, setDay] = useState<Date | undefined>(new Date());

  useEffect(() => {
    setLeads(loadJson("leads", SEED_LEADS));
    setAssign(getAssignments());
  }, []);

  const persist = (next: Lead[]) => {
    setLeads(next);
    saveJson("leads", next);
  };

  const now = new Date();
  const weekLeads = leads.filter((l) => {
    try {
      return isSameWeek(parseISO(l.createdAt), now, { weekStartsOn: 1 });
    } catch {
      return false;
    }
  }).length;
  const visits = leads.filter((l) => l.visitOn).length;

  const dayKey = day ? format(day, "yyyy-MM-dd") : "";
  const visitsThatDay = leads.filter((l) => l.visitOn === dayKey);

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      <p className="gold-rule max-w-xs justify-start">{BRAND.owner}</p>
      <h1 className="font-display mt-3 text-4xl">Owner dashboard</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <Stat label={t("leads_week")} value={weekLeads} />
        <Stat label={t("visits")} value={visits} />
        <Stat label={t("available_units")} value={listings.filter((l) => l.status === "available").length} />
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_20rem]">
        <div>
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-display text-3xl">Leads</h2>
            <AddLead onAdd={(lead) => persist([lead, ...leads])} />
          </div>
          <div className="mt-4 overflow-x-auto rounded-xl border border-line">
            <table className="w-full min-w-[52rem] text-left text-sm">
              <thead className="bg-raised text-xs tracking-wide text-muted uppercase">
                <tr>
                  <th className="px-3 py-3">Name</th>
                  <th className="px-3 py-3">Source</th>
                  <th className="px-3 py-3">Temp</th>
                  <th className="px-3 py-3">Listing</th>
                  <th className="px-3 py-3">Follow-up</th>
                  <th className="px-3 py-3">Notes</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((l) => (
                  <tr key={l.id} className="border-t border-line align-top">
                    <td className="px-3 py-3">
                      <p>{l.name}</p>
                      <p className="text-xs text-muted">{l.phone}</p>
                    </td>
                    <td className="px-3 py-3 capitalize">{l.source}</td>
                    <td className="px-3 py-3 uppercase">{l.temp}</td>
                    <td className="px-3 py-3">
                      {listings.find((x) => x.slug === l.listingSlug)?.name ?? l.listingSlug}
                    </td>
                    <td className="px-3 py-3 tabular-nums">
                      <input
                        type="date"
                        className="min-h-11 rounded-md border border-line bg-bg px-2"
                        value={l.nextFollowUp}
                        onChange={(e) =>
                          persist(
                            leads.map((x) =>
                              x.id === l.id ? { ...x, nextFollowUp: e.target.value } : x,
                            ),
                          )
                        }
                      />
                    </td>
                    <td className="px-3 py-3 text-muted">{l.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <aside>
          <h2 className="font-display text-2xl">Site-visit calendar</h2>
          <div className="mt-3 rounded-xl border border-line bg-surface p-3">
            <DayPicker
              mode="single"
              selected={day}
              onSelect={setDay}
              className="text-sm"
            />
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {visitsThatDay.length === 0 ? (
              <li className="text-muted">No visits this day.</li>
            ) : (
              visitsThatDay.map((l) => (
                <li key={l.id} className="rounded-md border border-line px-3 py-2">
                  {l.name} · {listings.find((x) => x.slug === l.listingSlug)?.name}
                </li>
              ))
            )}
          </ul>
        </aside>
      </div>

      <h2 className="font-display mt-12 text-3xl">Assign listings</h2>
      <p className="mt-2 text-sm text-muted">
        Portal agents only see homes assigned here.
      </p>
      <div className="mt-4 overflow-x-auto rounded-xl border border-line">
        <table className="w-full min-w-[32rem] text-left text-sm">
          <thead className="bg-raised text-xs tracking-wide text-muted uppercase">
            <tr>
              <th className="px-3 py-3">Home</th>
              <th className="px-3 py-3">Status</th>
              <th className="px-3 py-3">Agent</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((l) => (
              <tr key={l.slug} className="border-t border-line">
                <td className="px-3 py-3">{l.name}</td>
                <td className="px-3 py-3 capitalize text-muted">{l.status}</td>
                <td className="px-3 py-3">
                  <select
                    className="min-h-11 rounded-md border border-line bg-bg px-2"
                    value={assign[l.slug] ?? l.assignedAgentId}
                    onChange={(e) => setAssign(setAssignment(l.slug, e.target.value))}
                  >
                    {AGENTS.map((a) => (
                      <option key={a.id} value={a.id}>
                        {a.name} · {a.area}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-line bg-surface p-5">
      <p className="text-xs tracking-wide text-muted uppercase">{label}</p>
      <p className="font-display mt-2 text-4xl tabular-nums text-gold-bright">{value}</p>
    </div>
  );
}

function AddLead({ onAdd }: { onAdd: (lead: Lead) => void }) {
  const { t } = useI18n();
  const listings = useListings();
  const [open, setOpen] = useState(false);
  const listing = listings[0];
  const agent = AGENTS[0];
  const empty = useMemo<Omit<Lead, "id" | "createdAt">>(
    () => ({
      name: "",
      phone: "",
      source: "whatsapp",
      temp: "warm",
      listingSlug: listing?.slug ?? "",
      agentId: agent?.id ?? "",
      nextFollowUp: format(new Date(), "yyyy-MM-dd"),
      notes: "",
    }),
    [listing?.slug, agent?.id],
  );
  const [form, setForm] = useState(empty);

  if (!open) {
    return (
      <button
        type="button"
        className="min-h-11 rounded-full bg-gold px-4 text-sm font-medium text-bg"
        onClick={() => setOpen(true)}
      >
        {t("add_lead")}
      </button>
    );
  }

  return (
    <form
      className="grid gap-2 rounded-lg border border-line bg-surface p-3 sm:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        onAdd({
          ...form,
          id: `ld-${Date.now()}`,
          createdAt: format(new Date(), "yyyy-MM-dd"),
        });
        setForm(empty);
        setOpen(false);
      }}
    >
      <input
        required
        placeholder="Name"
        className="min-h-11 rounded-md border border-line bg-bg px-2"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        required
        placeholder="Phone"
        className="min-h-11 rounded-md border border-line bg-bg px-2"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <select
        className="min-h-11 rounded-md border border-line bg-bg px-2"
        value={form.source}
        onChange={(e) => setForm({ ...form, source: e.target.value as LeadSource })}
      >
        <option value="whatsapp">WhatsApp</option>
        <option value="web">Web</option>
        <option value="agent">Agent</option>
        <option value="ad">Ad</option>
        <option value="walkin">Walk-in</option>
      </select>
      <select
        className="min-h-11 rounded-md border border-line bg-bg px-2"
        value={form.temp}
        onChange={(e) => setForm({ ...form, temp: e.target.value as LeadTemp })}
      >
        <option value="hot">Hot</option>
        <option value="warm">Warm</option>
        <option value="cold">Cold</option>
      </select>
      <select
        className="min-h-11 rounded-md border border-line bg-bg px-2 sm:col-span-2"
        value={form.listingSlug}
        onChange={(e) => setForm({ ...form, listingSlug: e.target.value })}
      >
        {listings.map((l) => (
          <option key={l.slug} value={l.slug}>
            {l.name}
          </option>
        ))}
      </select>
      <button type="submit" className="min-h-11 rounded-full bg-gold text-sm font-medium text-bg">
        {t("save")}
      </button>
    </form>
  );
}
