import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BRAND } from "@/lib/brand";
import { AGENTS } from "@/lib/agents";
import {
  addGalleryPhoto,
  isSeedListing,
  removeGalleryPhoto,
  removeListing,
  saveListing,
  setListingPhoto,
  STATUSES,
  TYPES,
  useListing,
} from "@/lib/listing-store";
import type { Listing, ListingStatus, ListingType } from "@/lib/listings";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/admin/homes/$slug")({
  component: EditorInnerFromRoute,
  head: () => ({
    meta: [{ title: `Edit home | ${BRAND.name}` }],
  }),
});

function EditorInnerFromRoute() {
  const { slug } = Route.useParams();
  return <EditorInner slug={slug} />;
}

function EditorInner({ slug }: { slug: string }) {
  const listing = useListing(slug);
  const { t, lang } = useI18n();
  const navigate = useNavigate();
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState<Listing | null>(null);

  useEffect(() => {
    if (listing) setForm(listing);
  }, [listing]);

  if (!listing || !form) {
    return (
      <div className="mx-auto max-w-xl px-4 py-20 text-center">
        <p className="text-muted">Home not found.</p>
        <Link to="/admin/homes" className="mt-4 inline-block text-gold">
          {t("admin_homes")}
        </Link>
      </div>
    );
  }

  const patch = (p: Partial<Listing>) => setForm({ ...form, ...p });

  const save = () => {
    saveListing(slug, {
      name: form.name,
      nameHi: form.nameHi,
      type: form.type,
      locality: form.locality,
      localityHi: form.localityHi,
      status: form.status,
      priceBand: form.priceBand,
      priceBandHi: form.priceBandHi,
      size: form.size,
      sizeHi: form.sizeHi,
      beds: form.beds,
      baths: form.baths,
      blurb: form.blurb,
      blurbHi: form.blurbHi,
      highlights: form.highlights,
      highlightsHi: form.highlightsHi,
      assignedAgentId: form.assignedAgentId,
    });
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1600);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
      <Link to="/admin/homes" className="text-sm text-gold">
        ← {t("admin_homes")}
      </Link>
      <h1 className="font-display mt-4 text-4xl">{t("edit_home")}</h1>
      <p className="mt-2 text-sm text-muted">{t("admin_photo")}</p>

      <h2 className="font-display mt-8 text-2xl">{t("admin_cover")}</h2>
      <PhotoSlot
        src={listing.image}
        label={t("replace_photo")}
        onFile={(f) => void setListingPhoto(slug, "image", f)}
      />

      <h2 className="font-display mt-8 text-2xl">{t("admin_gallery")}</h2>
      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {listing.gallery.map((src, i) => (
          <div key={`${src}-${i}`} className="relative">
            <PhotoSlot
              src={src}
              label={`${i + 1}`}
              onFile={(f) => void setListingPhoto(slug, `gallery-${i}`, f)}
            />
            {listing.gallery.length > 1 ? (
              <button
                type="button"
                className="absolute top-2 right-2 rounded-full bg-bg/80 px-2 py-1 text-[0.65rem] text-danger"
                onClick={() => removeGalleryPhoto(slug, i)}
              >
                Delete
              </button>
            ) : null}
          </div>
        ))}
        {listing.gallery.length < 6 ? (
          <label className="flex aspect-[3/2] cursor-pointer items-center justify-center rounded-xl border border-dashed border-line text-sm text-muted">
            + {t("upload_photo")}
            <input
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) void addGalleryPhoto(slug, f);
                e.target.value = "";
              }}
            />
          </label>
        ) : null}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl">{t("admin_360")}</h2>
          <PhotoSlot
            src={listing.panorama}
            label={t("replace_photo")}
            onFile={(f) => void setListingPhoto(slug, "panorama", f)}
          />
        </div>
        <div>
          <h2 className="font-display text-2xl">{t("admin_drone_photo")}</h2>
          <PhotoSlot
            src={listing.drone}
            label={t("replace_photo")}
            onFile={(f) => void setListingPhoto(slug, "drone", f)}
          />
        </div>
      </div>

      <h2 className="font-display mt-10 text-2xl">{t("admin_details")}</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Field label="Name EN" value={form.name} onChange={(v) => patch({ name: v })} />
        <Field label="नाम हिं" value={form.nameHi} onChange={(v) => patch({ nameHi: v })} />
        <label className="text-sm">
          <span className="text-xs tracking-wide text-muted uppercase">Type</span>
          <select
            className="mt-1 min-h-12 w-full rounded-md border border-line bg-surface px-3"
            value={form.type}
            onChange={(e) => patch({ type: e.target.value as ListingType })}
          >
            {TYPES.map((x) => (
              <option key={x} value={x}>
                {x}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm">
          <span className="text-xs tracking-wide text-muted uppercase">Status</span>
          <select
            className="mt-1 min-h-12 w-full rounded-md border border-line bg-surface px-3"
            value={form.status}
            onChange={(e) => patch({ status: e.target.value as ListingStatus })}
          >
            {STATUSES.map((x) => (
              <option key={x} value={x}>
                {x}
              </option>
            ))}
          </select>
        </label>
        <Field label="Locality EN" value={form.locality} onChange={(v) => patch({ locality: v })} />
        <Field label="इलाका हिं" value={form.localityHi} onChange={(v) => patch({ localityHi: v })} />
        <Field label="Price EN" value={form.priceBand} onChange={(v) => patch({ priceBand: v })} />
        <Field label="कीमत हिं" value={form.priceBandHi} onChange={(v) => patch({ priceBandHi: v })} />
        <Field label="Size EN" value={form.size} onChange={(v) => patch({ size: v })} />
        <Field label="साइज़ हिं" value={form.sizeHi} onChange={(v) => patch({ sizeHi: v })} />
        <Field
          label="Beds"
          value={String(form.beds ?? "")}
          onChange={(v) => patch({ beds: Number(v) || undefined })}
        />
        <Field
          label="Baths"
          value={String(form.baths ?? "")}
          onChange={(v) => patch({ baths: Number(v) || undefined })}
        />
        <label className="text-sm sm:col-span-2">
          <span className="text-xs tracking-wide text-muted uppercase">Agent</span>
          <select
            className="mt-1 min-h-12 w-full rounded-md border border-line bg-surface px-3"
            value={form.assignedAgentId}
            onChange={(e) => patch({ assignedAgentId: e.target.value })}
          >
            {AGENTS.map((a) => (
              <option key={a.id} value={a.id}>
                {a.name} · {a.area}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm sm:col-span-2">
          <span className="text-xs tracking-wide text-muted uppercase">Details EN</span>
          <textarea
            className="mt-1 min-h-28 w-full rounded-md border border-line bg-surface px-3 py-2"
            value={form.blurb}
            onChange={(e) => patch({ blurb: e.target.value })}
          />
        </label>
        <label className="text-sm sm:col-span-2">
          <span className="text-xs tracking-wide text-muted uppercase">विवरण हिं</span>
          <textarea
            className="mt-1 min-h-28 w-full rounded-md border border-line bg-surface px-3 py-2"
            value={form.blurbHi}
            onChange={(e) => patch({ blurbHi: e.target.value })}
          />
        </label>
        <label className="text-sm sm:col-span-2">
          <span className="text-xs tracking-wide text-muted uppercase">Highlights EN (one per line)</span>
          <textarea
            className="mt-1 min-h-24 w-full rounded-md border border-line bg-surface px-3 py-2"
            value={form.highlights.join("\n")}
            onChange={(e) =>
              patch({ highlights: e.target.value.split("\n").map((s) => s.trim()).filter(Boolean) })
            }
          />
        </label>
        <label className="text-sm sm:col-span-2">
          <span className="text-xs tracking-wide text-muted uppercase">हाइलाइट हिं (हर लाइन)</span>
          <textarea
            className="mt-1 min-h-24 w-full rounded-md border border-line bg-surface px-3 py-2"
            value={form.highlightsHi.join("\n")}
            onChange={(e) =>
              patch({
                highlightsHi: e.target.value.split("\n").map((s) => s.trim()).filter(Boolean),
              })
            }
          />
        </label>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={save}
          className="inline-flex min-h-12 items-center rounded-full bg-gold px-6 text-sm font-medium text-bg"
        >
          {saved ? t("saved") : t("save")}
        </button>
        <Link
          to="/homes/$slug"
          params={{ slug }}
          className="inline-flex min-h-12 items-center rounded-full border border-line px-5 text-sm text-gold"
        >
          {lang === "hi" ? "साइट पर देखें" : "View on site"}
        </Link>
        {isSeedListing(slug) ? null : (
          <button
            type="button"
            className="inline-flex min-h-12 items-center text-sm text-danger"
            onClick={() => {
              if (removeListing(slug)) void navigate({ to: "/admin/homes" });
            }}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="text-sm">
      <span className="text-xs tracking-wide text-muted uppercase">{label}</span>
      <input
        className="mt-1 min-h-12 w-full rounded-md border border-line bg-surface px-3"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

function PhotoSlot({
  src,
  label,
  onFile,
}: {
  src: string;
  label: string;
  onFile: (file: File) => void;
}) {
  return (
    <label className="relative mt-3 block cursor-pointer overflow-hidden rounded-xl border border-line">
      <img src={src} alt="" className="aspect-[3/2] w-full object-cover" />
      <span className="absolute inset-x-0 bottom-0 bg-bg/70 px-3 py-2 text-center text-xs tracking-wide text-gold uppercase">
        {label}
      </span>
      <input
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) onFile(f);
          e.target.value = "";
        }}
      />
    </label>
  );
}
