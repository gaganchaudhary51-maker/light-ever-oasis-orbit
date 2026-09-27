import { createFileRoute } from "@tanstack/react-router";
import { BRAND } from "@/lib/brand";
import { LISTINGS } from "@/lib/listings";
import { StatusBadge } from "@/components/listings/StatusBadge";

export const Route = createFileRoute("/agents/kit")({
  component: AgentKitPage,
  head: () => ({
    meta: [{ title: `Agent kit | ${BRAND.name}` }],
  }),
});

function AgentKitPage() {
  const three = LISTINGS.filter((l) => l.status === "available").slice(0, 3);
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <div className="no-print mb-6 flex justify-end">
        <button
          type="button"
          className="min-h-12 rounded-full bg-gold px-4 text-sm font-medium text-bg"
          onClick={() => window.print()}
        >
          Print one-pager
        </button>
      </div>
      <article className="rounded-xl border border-line bg-surface p-6 sm:p-8 print:border-0 print:p-0">
        <header className="flex items-center gap-4 border-b border-line pb-6">
          <img src={BRAND.logo} alt="" className="size-16 rounded-sm object-cover" />
          <div>
            <p className="font-display text-3xl text-gold-bright">{BRAND.name}</p>
            <p className="text-sm text-muted">{BRAND.tagline}</p>
            <p className="mt-1 text-sm">
              {BRAND.city} · WhatsApp {BRAND.phoneDisplay}
            </p>
          </div>
        </header>
        <p className="gold-rule my-6">Agent kit · Gurugram</p>
        <div className="grid gap-4">
          {three.map((l) => (
            <div key={l.slug} className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-line pb-4 sm:grid-cols-[7rem_1fr]">
              <img src={l.image} alt="" className="aspect-[3/2] w-full rounded-md object-cover" />
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-display text-xl">{l.name}</h2>
                  <StatusBadge status={l.status} />
                </div>
                <p className="text-sm text-muted">{l.locality}</p>
                <p className="mt-1 text-gold">{l.priceBand}</p>
                <p className="text-sm">{l.size}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          One WhatsApp line. Named advisors. No floating brokers.
        </p>
      </article>
    </div>
  );
}
