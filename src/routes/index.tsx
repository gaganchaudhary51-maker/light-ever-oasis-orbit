import { createFileRoute, Link } from "@tanstack/react-router";
import { HouseHero } from "@/components/hero/HouseHero";
import { ListingCard } from "@/components/listings/ListingCard";
import { useListings } from "@/lib/listing-store";
import { useI18n } from "@/lib/i18n";
import { BRAND } from "@/lib/brand";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const { t, lang } = useI18n();
  const listings = useListings();
  const featured = listings.filter((l) => l.status !== "sold").slice(0, 3);

  return (
    <div>
      <HouseHero />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="gold-rule max-w-sm">{BRAND.city}</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl text-fg sm:text-5xl">{t("inventory_title")}</h2>
          <Link to="/homes" className="inline-flex min-h-11 items-center text-sm tracking-wide text-gold uppercase">
            {t("cta_view_homes")}
          </Link>
        </div>
        <p className="mt-3 max-w-2xl text-muted">{t("inventory_sub")}</p>
        <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((l) => (
            <ListingCard key={l.slug} listing={l} />
          ))}
        </div>
      </section>
      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-2 md:gap-10">
          <div>
            <p className="gold-rule max-w-xs justify-start">{BRAND.name}</p>
            <h2 className="font-display mt-4 text-3xl sm:text-4xl">{t("about_title")}</h2>
            <p className="mt-4 text-muted">
              {lang === "hi"
                ? "रीजेंट वे गुरुग्राम में निजी फ़्लैट और पेंटहाउस की प्लेटफ़ॉर्म है। हर विज़िट नामित सलाहकार के साथ — कोई फ़्लोटिंग ब्रोकर नहीं।"
                : "Regent Way is a platform for private flats and penthouses in Gurugram. Every viewing is with a named advisor — no floating brokers."}
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex min-h-12 items-center text-sm tracking-wide text-gold uppercase"
            >
              {t("nav_about")}
            </Link>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-line">
            <img
              src="/interiors/drone.jpg"
              alt=""
              className="aspect-[4/3] w-full object-cover"
            />
            <span className="preview-ribbon">{t("preview_asset")}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
