import { createFileRoute } from "@tanstack/react-router";
import { BRAND, waUrl } from "@/lib/brand";
import { useListings } from "@/lib/listing-store";
import { useI18n } from "@/lib/i18n";
import { CopyButton } from "@/components/ui/CopyButton";
import { utmListingUrl, visitMessage } from "@/lib/copy";
import { useState } from "react";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/ads")({
  component: AdsPage,
  head: () => ({
    meta: [{ title: `Ads kit | ${BRAND.name}` }],
  }),
});

const META = {
  primary:
    "Private flats and penthouses in Gurugram. Golf Course Road, DLF Phase 5, Sector 54, MG Road and Sohna Road. WhatsApp Regent Way for a viewing.",
  headline: "Flats & penthouses in Gurugram | Regent Way",
  description: "Private homes, named advisors. WhatsApp +91 79836 67722.",
};

const GOOGLE = {
  headlines: [
    "Flats in Gurugram",
    "Regent Way | Penthouses",
    "Golf Course Road homes",
    "DLF Phase 5 flats",
    "Viewing on WhatsApp",
    "Sector 54 penthouses",
  ],
  descriptions: [
    "Private flats and penthouses. Named advisors. WhatsApp Regent Way.",
    "Clear price bands. Gurugram families, not floating brokers.",
  ],
};

function AdsPage() {
  const listings = useListings();
  const { t } = useI18n();
  const [slug, setSlug] = useState(listings[0]?.slug ?? "golf-course-penthouse");
  const listing = listings.find((l) => l.slug === slug) ?? listings[0];
  const utm = listing
    ? utmListingUrl(listing, "meta", "paid", "gurugram-homes")
    : "/homes";
  const googleUtm = listing
    ? utmListingUrl(listing, "google", "cpc", "gurugram-homes")
    : "/homes";

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14">
      <p className="gold-rule max-w-xs justify-start">Meta · Google</p>
      <h1 className="font-display mt-4 text-4xl">{t("admin_ads")}</h1>
      <p className="mt-3 max-w-2xl text-muted">{t("admin_ads_help")}</p>

      <section className="mt-10 rounded-xl border border-line bg-surface p-5">
        <h2 className="font-display text-2xl">Meta</h2>
        <Field label="Primary text" value={META.primary} />
        <Field label="Headline" value={META.headline} />
        <Field label="Description" value={META.description} />
        <Field label="CTA" value="WhatsApp · Send message" />
      </section>

      <section className="mt-8 rounded-xl border border-line bg-surface p-5">
        <h2 className="font-display text-2xl">Google RSA</h2>
        {GOOGLE.headlines.map((h, i) => (
          <Field key={h} label={`Headline ${i + 1}`} value={h} />
        ))}
        {GOOGLE.descriptions.map((h, i) => (
          <Field key={h} label={`Description ${i + 1}`} value={h} />
        ))}
      </section>

      <section className="mt-8">
        <h2 className="font-display text-2xl">Frame sizes</h2>
        <p className="mt-2 text-sm text-muted">Preview assets — mark as such in ads too.</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Frame label="1:1" className="aspect-square" src="/listings/khair-manor.jpg" />
          <Frame label="9:16" className="aspect-[9/16] mx-auto max-h-[28rem]" src="/media/logo-poster.jpg" />
          <Frame label="16:9" className="aspect-video" src="/interiors/drone.jpg" />
        </div>
      </section>

      <section className="mt-10 rounded-xl border border-line bg-surface p-5">
        <h2 className="font-display text-2xl">UTM → listing → WhatsApp</h2>
        <label className="mt-4 block text-xs tracking-wide text-muted uppercase">Listing</label>
        <select
          className="mt-2 min-h-12 w-full rounded-md border border-line bg-bg px-3 text-base sm:w-auto"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        >
          {listings.map((l) => (
            <option key={l.slug} value={l.slug}>
              {l.name}
            </option>
          ))}
        </select>
        <Field label="Meta UTM path" value={utm} />
        <Field label="Google UTM path" value={googleUtm} />
        <a
          href={waUrl(visitMessage(listing))}
          className="mt-4 inline-flex min-h-12 items-center text-sm text-gold"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp CTA for this listing
        </a>
      </section>

      <section className="mt-8 rounded-xl border border-line p-5 text-sm text-muted">
        <h2 className="font-display text-2xl text-fg">Gurugram geo targeting</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>Radius 18 km around Golf Course Road / Cyber Hub.</li>
          <li>Include: Gurugram, DLF, Sohna Road, Sector 54–65, MG Road.</li>
          <li>Exclude: job-seeker campaigns unless “NRI / returning family”.</li>
          <li>Language: Hindi + English. Schedule 9:00–21:00 IST.</li>
          <li>Landing: listing URL with UTM, WhatsApp as only conversion.</li>
        </ul>
      </section>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="mt-4 flex flex-wrap items-start justify-between gap-3 border-t border-line pt-4">
      <div className="min-w-0 flex-1">
        <p className="text-xs tracking-wide text-muted uppercase">{label}</p>
        <p className="mt-1 break-all text-sm text-fg">{value}</p>
      </div>
      <CopyButton text={value} />
    </div>
  );
}

function Frame({ label, className, src }: { label: string; className: string; src: string }) {
  return (
    <div>
      <p className="mb-2 text-xs tracking-wide text-muted uppercase">{label}</p>
      <div className={cn("overflow-hidden rounded-lg border border-line", className)}>
        <img src={src} alt="" className="size-full object-cover" />
      </div>
    </div>
  );
}
