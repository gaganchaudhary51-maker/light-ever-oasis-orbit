import type { ListingStatus, ListingType } from "@/lib/listings";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";

export function StatusBadge({ status }: { status: ListingStatus }) {
  const { t } = useI18n();
  return (
    <span
      className={cn(
        "inline-flex min-h-7 items-center rounded-full px-2.5 text-[0.68rem] font-medium tracking-wide uppercase",
        status === "available" && "bg-available/20 text-available",
        status === "hold" && "bg-hold/20 text-hold",
        status === "sold" && "bg-sold/20 text-sold",
      )}
    >
      {t(
        status === "available"
          ? "status_available"
          : status === "hold"
            ? "status_hold"
            : "status_sold",
      )}
    </span>
  );
}

export function TypeLabel({ type }: { type: ListingType }) {
  const { t } = useI18n();
  return <>{type === "penthouse" ? t("type_penthouse") : t("type_flat")}</>;
}
