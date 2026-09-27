import { createFileRoute, Link, useRouterState } from "@tanstack/react-router";
import { listingBySlug, residenceJsonLd } from "@/lib/listings";
import { isPreviewImage, useListing, useListings } from "@/lib/listing-store";
import { StatusBadge, TypeLabel } from "@/components/listings/StatusBadge";
import { PanoramaViewer, DroneFlyover } from "@/components/media/PanoramaViewer";
import { ListingCard } from "@/components/listings/ListingCard";
import { BRAND, waUrl } from "@/lib/brand";
import { brochureMessage, listingShareText, priceMessage, visitMessage } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";
import { useState } from "react";

export const Route = createFileRoute("/homes/$slug")({
  component: HomeDetail,
  loader: ({ params }) => ({
    slug: params.slug,
    listing: listingBySlug(params.slug),
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="font-display text-4xl">Home not listed</h1>
      <Link to="/homes" className="mt-4 inline-block min-h-11 text-gold">
        View homes
      </Link>
    </div>
  ),
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData?.listing
          ? `${loaderData.listing.name} | ${BRAND.name} | Gurugram`
          : BRAND.seoTitle,
      },
      {
        name: "description",
        content: loaderData?.listing?.blurb ?? BRAND.seoDescription,
      },
    ],
  }),
});

function HomeDetail() {
  const data = Route.useLoaderData();
  const live = useListing(data.slug);
  const listing = live ?? data.listing;
  const all = useListings();
  const searchStr = useRouterState({ select: (s) => s.location.searchStr });
  const fromAd = new URLSearchParams(searchStr).has("utm_source");
  const { t, lang } = useI18n();
  const [shot, setShot] = useState(0);

  if (!listing) {
    return (
      <div className="mx-auto max-w-xl px-4 py-20 text-center">
        <h1 className="font-display text-4xl">Home not listed</h1>
        <Link to="/homes" className="mt-4 inline-block min-h-11 text-gold">
          View homes
        </Link>
      </div>
    );
  }

  const name = lang === "hi" ? listing.nameHi : listing.name;
  const more = all.filter((l) => l.slug !== listing.slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(residenceJsonLd(listing)) }}
      />
      {fromAd ? (
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-gold/40 bg-gold/10 px-4 py-3">
          <p className="text-sm text-gold-bright">
            {lang === "hi"
              ? "विज्ञापन से आए हैं। रीजेंट वे को व्हाट्सऐप करें।"
              : "You arrived from an ad. WhatsApp Regent Way for this home."}
          </p>
          <a
            href={waUrl(visitMessage(listing))}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 touch-manipulation items-center rounded-full bg-gold px-4 text-sm font-medium text-bg"
          >
            {t("cta_whatsapp")}
          </a>
        </div>
      ) : null}

      <p className="text-xs tracking-[0.2em] text-gold uppercase">
        <TypeLabel type={listing.type} /> · {lang === "hi" ? listing.localityHi : listing.locality}
      </p>
      <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
        <h1 className="font-display text-3xl sm:text-5xl">{name}</h1>
        <StatusBadge status={listing.status} />
      </div>

      <div className="relative mt-6 overflow-hidden rounded-xl border border-line sm:mt-8">
        <img
          src={listing.gallery[shot] ?? listing.image}
          alt={name}
          className="aspect-[4/3] w-full object-cover sm:aspect-[3/2]"
        />
        {isPreviewImage(listing.gallery[shot] ?? listing.image) ? (
          <span className="preview-ribbon">{t("preview_asset")}</span>
        ) : null}
      </div>
      <div className="-mx-4 mt-3 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {listing.gallery.map((src, i) => (
          <button
            key={src + i}
            type="button"
            onClick={() => setShot(i)}
            className="size-16 shrink-0 overflow-hidden rounded-md border border-line touch-manipulation sm:size-20"
          >
            <img src={src} alt="" className="size-full object-cover" />
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-muted">{lang === "hi" ? listing.blurbHi : listing.blurb}</p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {(lang === "hi" ? listing.highlightsHi : listing.highlights).map((h) => (
              <li key={h} className="border-l border-gold/50 pl-3 text-sm text-fg">
                {h}
              </li>
            ))}
          </ul>
          <dl className="mt-8 grid grid-cols-2 gap-4 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-muted">{t("listing_price")}</dt>
              <dd className="text-gold-bright">
                {lang === "hi" ? listing.priceBandHi : listing.priceBand}
              </dd>
            </div>
            <div>
              <dt className="text-muted">{t("listing_size")}</dt>
              <dd>{lang === "hi" ? listing.sizeHi : listing.size}</dd>
            </div>
            <div>
              <dt className="text-muted">{t("listing_locality")}</dt>
              <dd>{lang === "hi" ? listing.localityHi : listing.locality}</dd>
            </div>
          </dl>
        </div>
        <aside className="h-fit rounded-xl border border-line bg-surface p-5">
          <p className="font-display text-2xl text-gold-bright">{BRAND.name}</p>
          <p className="mt-1 text-sm text-muted">{BRAND.city}</p>
          <div className="mt-5 flex flex-col gap-2">
            <a
              href={waUrl(visitMessage(listing))}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 touch-manipulation items-center justify-center rounded-full bg-gold px-4 text-sm font-medium text-bg"
            >
              {t("cta_site_visit")}
            </a>
            <a
              href={waUrl(priceMessage(listing))}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 touch-manipulation items-center justify-center rounded-full border border-gold/50 px-4 text-sm text-gold"
            >
              {t("cta_price")}
            </a>
            <a
              href={waUrl(brochureMessage(listing))}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 touch-manipulation items-center justify-center rounded-full border border-line px-4 text-sm text-muted"
            >
              {t("cta_brochure")}
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`${listingShareText(listing)}\n`)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 touch-manipulation items-center justify-center rounded-full border border-line px-4 text-sm text-gold"
            >
              {t("cta_share")}
            </a>
          </div>
        </aside>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl">{t("listing_360")}</h2>
          <div className="mt-4">
            <PanoramaViewer src={listing.panorama} alt={`${name} 360`} />
          </div>
        </div>
        <div>
          <h2 className="font-display text-3xl">{t("listing_drone")}</h2>
          <div className="mt-4">
            <DroneFlyover src={listing.drone} />
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="font-display text-3xl">{t("inventory_title")}</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {more.map((l) => (
            <ListingCard key={l.slug} listing={l} compact />
          ))}
        </div>
        <Link to="/homes" className="mt-6 inline-flex min-h-11 items-center text-sm text-gold">
          {t("cta_view_homes")}
        </Link>
      </div>
    </div>
  );
}
