import { Link } from "@tanstack/react-router";
import { waUrl } from "@/lib/brand";
import type { Listing } from "@/lib/listings";
import { listingShareText, visitMessage } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";
import { isPreviewImage } from "@/lib/listing-store";
import { StatusBadge, TypeLabel } from "./StatusBadge";
import { cn } from "@/lib/cn";

export function ListingCard({ listing, compact = false }: { listing: Listing; compact?: boolean }) {
  const { t, lang } = useI18n();
  const name = lang === "hi" ? listing.nameHi : listing.name;
  const locality = lang === "hi" ? listing.localityHi : listing.locality;
  const price = lang === "hi" ? listing.priceBandHi : listing.priceBand;
  const size = lang === "hi" ? listing.sizeHi : listing.size;

  return (
    <article className="group overflow-hidden rounded-xl border border-line bg-surface">
      <Link to="/homes/$slug" params={{ slug: listing.slug }} className="block">
        <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[3/2]">
          <img
            src={listing.image}
            alt={name}
            loading="lazy"
            decoding="async"
            className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          {isPreviewImage(listing.image) ? (
            <span className="preview-ribbon">{t("preview_asset")}</span>
          ) : null}
          <div className="absolute top-2.5 right-2.5">
            <StatusBadge status={listing.status} />
          </div>
        </div>
      </Link>
      <div className={cn("p-4 sm:p-5", compact && "p-3")}>
        <p className="text-xs tracking-[0.18em] text-gold uppercase">
          <TypeLabel type={listing.type} />
        </p>
        <h3 className="font-display mt-1 text-2xl text-fg">{name}</h3>
        <p className="mt-1 text-sm text-muted">{locality}</p>
        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs tracking-wide text-muted uppercase">{t("listing_price")}</p>
            <p className="text-gold-bright">{price}</p>
          </div>
          <div className="text-right">
            <p className="text-xs tracking-wide text-muted uppercase">{t("listing_size")}</p>
            <p className="text-sm text-fg">{size}</p>
          </div>
        </div>
        {compact ? null : (
          <div className="mt-4 grid grid-cols-2 gap-2">
            <a
              href={waUrl(visitMessage(listing))}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 touch-manipulation items-center justify-center rounded-full bg-gold px-3 text-sm font-medium text-bg"
            >
              {t("cta_whatsapp")}
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`${listingShareText(listing)}\n/homes/${listing.slug}`)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 touch-manipulation items-center justify-center rounded-full border border-line px-3 text-sm text-gold"
            >
              {t("listing_share")}
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
