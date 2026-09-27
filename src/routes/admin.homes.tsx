import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { BRAND } from "@/lib/brand";
import { addListing, isPreviewImage, useListings } from "@/lib/listing-store";
import { StatusBadge, TypeLabel } from "@/components/listings/StatusBadge";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/admin/homes")({
  component: AdminHomesInner,
  head: () => ({
    meta: [{ title: `Homes editor | ${BRAND.name}` }],
  }),
});

function AdminHomesInner() {
  const { t, lang } = useI18n();
  const listings = useListings();
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="gold-rule max-w-xs justify-start">{BRAND.owner}</p>
          <h1 className="font-display mt-3 text-4xl">{t("admin_homes")}</h1>
          <p className="mt-2 text-sm text-muted">
            Photo, price, status — card pe tap. Customer ko Agent sheet se nahi milta.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex min-h-11 items-center rounded-full bg-gold px-4 text-sm font-medium text-bg"
          onClick={() => {
            const row = addListing();
            void navigate({ to: "/admin/homes/$slug", params: { slug: row.slug } });
          }}
        >
          {t("add_home")}
        </button>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {listings.map((l) => (
          <Link
            key={l.slug}
            to="/admin/homes/$slug"
            params={{ slug: l.slug }}
            className="overflow-hidden rounded-xl border border-line bg-surface"
          >
            <div className="relative aspect-[3/2]">
              <img src={l.image} alt="" className="size-full object-cover" />
              {isPreviewImage(l.image) ? (
                <span className="preview-ribbon">{t("preview_asset")}</span>
              ) : null}
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between gap-2">
                <TypeLabel type={l.type} />
                <StatusBadge status={l.status} />
              </div>
              <p className="font-display mt-2 text-2xl">
                {lang === "hi" ? l.nameHi : l.name}
              </p>
              <p className="mt-1 text-sm text-muted">
                {lang === "hi" ? l.priceBandHi : l.priceBand}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
