import { createFileRoute } from "@tanstack/react-router";
import { BRAND, waPlain, waUrl } from "@/lib/brand";
import { visitMessage } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [{ title: `Contact | ${BRAND.name} | Gurugram` }],
  }),
});

function ContactPage() {
  const { t, lang } = useI18n();
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14">
      <p className="gold-rule max-w-xs justify-start">NAP</p>
      <h1 className="font-display mt-4 text-3xl sm:text-5xl">{t("contact_title")}</h1>
      <p className="mt-4 text-muted">
        {lang === "hi"
          ? "फॉर्म नहीं — व्हाट्सऐप पर बात करें। नाम, पता, फोन हर जगह एक जैसे हैं।"
          : "No forms. WhatsApp is the only lead line. Name, address and phone are the same on every page."}
      </p>
      <div className="mt-10 space-y-5 rounded-xl border border-line bg-surface p-5 sm:p-6">
        <p className="font-display text-3xl text-gold-bright">{BRAND.name}</p>
        <p className="text-muted">{BRAND.addressLine}</p>
        <a className="flex min-h-12 items-center text-gold" href={`tel:+${BRAND.phoneE164}`}>
          {BRAND.phoneDisplay}
        </a>
        <a className="flex min-h-12 items-center text-gold" href={waPlain()} target="_blank" rel="noreferrer">
          WhatsApp · wa.me/{BRAND.phoneE164}
        </a>
        <p className="text-sm text-muted">{lang === "hi" ? BRAND.hoursHi : BRAND.hoursEn}</p>
        <a
          href={BRAND.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center text-sm text-muted underline decoration-line underline-offset-4"
        >
          {t("footer_maps")} — Golf Course Road, Gurugram
        </a>
      </div>
      <a
        href={waUrl(visitMessage())}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex min-h-12 touch-manipulation items-center rounded-full bg-gold px-5 font-medium text-bg"
      >
        {t("cta_site_visit")}
      </a>
    </div>
  );
}
