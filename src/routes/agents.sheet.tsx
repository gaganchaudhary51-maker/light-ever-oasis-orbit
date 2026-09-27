import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LISTINGS } from "@/lib/listings";
import { SEED_SHEET, type SheetRow } from "@/lib/agents";
import { downloadCsv, loadJson, saveJson } from "@/lib/storage";
import { BRAND } from "@/lib/brand";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/agents/sheet")({
  component: AgentSheetPage,
  head: () => ({
    meta: [{ title: `Agent sheet | ${BRAND.name}` }],
  }),
});

const STATUSES: SheetRow["status"][] = ["New", "Hot", "Visit", "Won", "Lost"];

function AgentSheetPage() {
  const { t } = useI18n();
  const [rows, setRows] = useState<SheetRow[]>(SEED_SHEET);

  useEffect(() => {
    setRows(loadJson("agent-sheet", SEED_SHEET));
  }, []);

  const persist = (next: SheetRow[]) => {
    setRows(next);
    saveJson("agent-sheet", next);
  };

  const update = (id: string, patch: Partial<SheetRow>) => {
    persist(rows.map((r) => (r.id === id ? { ...r, ...patch } : r)));
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="gold-rule max-w-xs justify-start">DEMO</p>
          <h1 className="font-display mt-3 text-4xl">{t("agents_sheet")}</h1>
          <p className="mt-2 max-w-xl text-sm text-gold-bright">
            Sample names only. Real contact is {BRAND.owner} {BRAND.phoneDisplay}. Photo / price
            change: Owner login → Homes & photos — not this sheet.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="min-h-11 rounded-full border border-line px-4 text-sm text-gold"
            onClick={() =>
              downloadCsv(
                "regent-way-agent-sheet.csv",
                ["Agent", "Phone", "Area", "Listing", "Lead", "Status", "Commission %"],
                rows.map((r) => [
                  r.agentName,
                  r.phone,
                  r.area,
                  r.listingSlug,
                  r.leadName,
                  r.status,
                  r.commission,
                ]),
              )
            }
          >
            {t("agents_export")}
          </button>
          <Link to="/agents/kit" className="inline-flex min-h-11 items-center text-sm text-muted">
            {t("agents_kit")}
          </Link>
        </div>
      </div>

      <div className="mt-8 overflow-x-auto rounded-xl border border-line">
        <table className="w-full min-w-[56rem] text-left text-sm">
          <thead className="bg-raised text-xs tracking-wide text-muted uppercase">
            <tr>
              <th className="px-3 py-3">Agent</th>
              <th className="px-3 py-3">Phone</th>
              <th className="px-3 py-3">Area</th>
              <th className="px-3 py-3">Listing</th>
              <th className="px-3 py-3">Lead</th>
              <th className="px-3 py-3">Status</th>
              <th className="px-3 py-3">Comm %</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-line">
                <td className="px-3 py-2">
                  <input
                    className="min-h-11 w-full rounded-md border border-line bg-bg px-2 text-fg"
                    value={r.agentName}
                    onChange={(e) => update(r.id, { agentName: e.target.value })}
                  />
                </td>
                <td className="px-3 py-2">
                  <input
                    className="min-h-11 w-32 rounded-md border border-line bg-bg px-2 text-fg"
                    value={r.phone}
                    onChange={(e) => update(r.id, { phone: e.target.value })}
                  />
                </td>
                <td className="px-3 py-2">
                  <input
                    className="min-h-11 w-32 rounded-md border border-line bg-bg px-2 text-fg"
                    value={r.area}
                    onChange={(e) => update(r.id, { area: e.target.value })}
                  />
                </td>
                <td className="px-3 py-2">
                  <select
                    className="min-h-11 rounded-md border border-line bg-bg px-2 text-fg"
                    value={r.listingSlug}
                    onChange={(e) => update(r.id, { listingSlug: e.target.value })}
                  >
                    {LISTINGS.map((l) => (
                      <option key={l.slug} value={l.slug}>
                        {l.name}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-3 py-2">
                  <input
                    className="min-h-11 w-36 rounded-md border border-line bg-bg px-2 text-fg"
                    value={r.leadName}
                    onChange={(e) => update(r.id, { leadName: e.target.value })}
                  />
                </td>
                <td className="px-3 py-2">
                  <select
                    className="min-h-11 rounded-md border border-line bg-bg px-2 text-fg"
                    value={r.status}
                    onChange={(e) =>
                      update(r.id, { status: e.target.value as SheetRow["status"] })
                    }
                  >
                    {STATUSES.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </td>
                <td className="px-3 py-2">
                  <input
                    type="number"
                    step="0.25"
                    className="min-h-11 w-20 rounded-md border border-line bg-bg px-2 text-fg tabular-nums"
                    value={r.commission}
                    onChange={(e) => update(r.id, { commission: Number(e.target.value) })}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs text-muted">
        Edits stay in this browser. Export CSV into Google Sheets when you are ready.
      </p>
    </div>
  );
}
