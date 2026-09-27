import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ListingCard } from "@/components/listings/ListingCard";
import { type ListingStatus, type ListingType } from "@/lib/listings";
import { useListings } from "@/lib/listing-store";
import { useI18n } from "@/lib/i18n";
import { BRAND } from "@/lib/brand";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/homes/")({
  component: HomesPage,
});

function HomesPage() {
  const { t } = useI18n();
  const listings = useListings();
  const [type, setType] = useState<ListingType | "all">("all");
  const [status, setStatus] = useState<ListingStatus | "all">("all");

  const filtered = useMemo(
    () =>
      listings.filter((l) => (type === "all" ? true : l.type === type)).filter((l) =>
        status === "all" ? true : l.status === status,
      ),
    [listings, type, status],
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
      <p className="gold-rule max-w-sm">{BRAND.city}</p>
      <h1 className="font-display mt-4 text-3xl sm:text-5xl">{t("inventory_title")}</h1>
      <p className="mt-3 max-w-2xl text-muted">{t("inventory_sub")}</p>

      <div className="-mx-4 mt-6 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:mt-8 sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
          {(["all", "flat", "penthouse"] as const).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setType(v)}
              className={cn(
                "min-h-11 shrink-0 touch-manipulation rounded-full border px-4 text-sm",
                type === v ? "border-gold bg-gold/15 text-gold-bright" : "border-line text-muted",
              )}
            >
              {v === "all" ? t("filter_all") : v === "flat" ? t("type_flat") : t("type_penthouse")}
            </button>
          ))}
        </div>
      </div>
      <div className="-mx-4 mt-3 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
          {(["all", "available", "hold", "sold"] as const).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setStatus(v)}
              className={cn(
                "min-h-11 shrink-0 touch-manipulation rounded-full border px-4 text-sm",
                status === v ? "border-gold bg-gold/15 text-gold-bright" : "border-line text-muted",
              )}
            >
              {v === "all"
                ? t("filter_all")
                : v === "available"
                  ? t("status_available")
                  : v === "hold"
                    ? t("status_hold")
                    : t("status_sold")}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((l) => (
          <ListingCard key={l.slug} listing={l} />
        ))}
      </div>
    </div>
  );
}
