import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BRAND, waUrl } from "@/lib/brand";
import { GBP_COPY, PHOTO_CAPTIONS, REVIEW_REQUESTS } from "@/lib/copy";
import { CopyButton } from "@/components/ui/CopyButton";

export const Route = createFileRoute("/google-profile")({
  component: GoogleProfilePage,
  head: () => ({
    meta: [{ title: `Google profile kit | ${BRAND.name}` }],
  }),
});

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-3 border-b border-line py-4">
      <div>
        <p className="text-xs tracking-wide text-muted uppercase">{label}</p>
        <p className="mt-1 text-fg">{value}</p>
      </div>
      <CopyButton text={value} />
    </div>
  );
}

function GoogleProfilePage() {
  const [website, setWebsite] = useState(GBP_COPY.website);
  useEffect(() => {
    setWebsite(window.location.origin);
  }, []);
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <p className="gold-rule max-w-xs justify-start">GBP</p>
      <h1 className="font-display mt-4 text-4xl">Google profile kit</h1>
      <p className="mt-3 text-muted">
        Paste these fields into Google Business Profile. Keep NAP identical everywhere.
      </p>
      <div className="mt-8 rounded-xl border border-line bg-surface px-5">
        <Row label="Business name" value={GBP_COPY.businessName} />
        <Row label="Category" value={GBP_COPY.category} />
        <Row label="Address" value={GBP_COPY.address} />
        <Row label="Phone" value={GBP_COPY.phone} />
        <Row label="Website" value={website} />
        <Row label="Hours" value={GBP_COPY.hours} />
        <Row label="Description" value={GBP_COPY.description} />
      </div>

      <h2 className="font-display mt-12 text-3xl">10 photo captions</h2>
      <ol className="mt-4 space-y-3">
        {PHOTO_CAPTIONS.map((c, i) => (
          <li key={c} className="flex items-start justify-between gap-3 rounded-lg border border-line p-3">
            <span className="text-sm">
              <span className="mr-2 text-muted">{i + 1}.</span>
              {c}
            </span>
            <CopyButton text={c} />
          </li>
        ))}
      </ol>

      <h2 className="font-display mt-12 text-3xl">6 review-request WhatsApp texts</h2>
      <ol className="mt-4 space-y-3">
        {REVIEW_REQUESTS.map((c, i) => (
          <li key={c} className="rounded-lg border border-line p-4">
            <div className="flex justify-end gap-2">
              <CopyButton text={c} />
              <a
                href={waUrl(c)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-10 items-center rounded-full border border-gold/40 px-3 text-xs text-gold uppercase"
              >
                WhatsApp
              </a>
            </div>
            <p className="mt-2 text-sm text-muted">
              {i + 1}. {c}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
