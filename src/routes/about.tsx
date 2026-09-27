import { createFileRoute } from "@tanstack/react-router";
import { BRAND, waUrl } from "@/lib/brand";
import { visitMessage } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: `About | ${BRAND.name} | Gurugram` },
      {
        name: "description",
        content:
          "Regent Way is a platform for private flats and penthouses in Gurugram — Golf Course Road, DLF Phase 5, Sector 54, Sohna Road.",
      },
    ],
  }),
});

function AboutPage() {
  const { t, lang } = useI18n();
  const hi = lang === "hi";
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14">
      <p className="gold-rule max-w-xs justify-start">{BRAND.city}</p>
      <h1 className="font-display mt-4 text-3xl sm:text-5xl">{t("about_title")}</h1>
      <p className="mt-6 text-lg text-muted">
        {hi
          ? "रीजेंट वे गुरुग्राम की निजी फ़्लैट और पेंटहाउस प्लेटफ़ॉर्म है — गोल्फ कोर्स रोड, डीएलएफ फेज़ 5, सेक्टर 54, एमजी रोड और सोहना रोड।"
          : "Regent Way is a platform for private flats and penthouses in Gurugram — Golf Course Road, DLF Phase 5, Sector 54, MG Road and Sohna Road."}
      </p>
      <div className="relative my-10 overflow-hidden rounded-xl border border-line">
        <img src="/listings/khair-manor.jpg" alt="" className="aspect-[3/2] w-full object-cover" />
        <span className="preview-ribbon">{t("preview_asset")}</span>
      </div>
      <div className="space-y-4 text-muted">
        <p>
          {hi
            ? "विज़िट नामित सलाहकार के साथ होती है। कोई अज्ञात ब्रोकर नहीं। कीमत बैंड साफ़ बताए जाते हैं; अंतिम आंकड़ा कागज़ पर।"
            : "A viewing is with a named advisor. No unknown brokers. Price bands are stated up front; the last number is on paper."}
        </p>
        <p>
          {hi
            ? "हम लिस्टिंग बेचते नहीं — घर दिखाते हैं। एक व्हाट्सऐप लाइन, एक NAP।"
            : "We do not float listings. We show homes. One WhatsApp line, one NAP."}
        </p>
      </div>
      <dl className="mt-10 grid gap-4 border-t border-line pt-8 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-muted">NAP</dt>
          <dd className="mt-1 text-fg">
            {BRAND.name}
            <br />
            {BRAND.addressLine}
            <br />
            {BRAND.phoneDisplay}
          </dd>
        </div>
        <div>
          <dt className="text-muted">{t("nap_hours")}</dt>
          <dd className="mt-1">{hi ? BRAND.hoursHi : BRAND.hoursEn}</dd>
        </div>
      </dl>
      <a
        href={waUrl(visitMessage())}
        target="_blank"
        rel="noreferrer"
        className="mt-10 inline-flex min-h-12 touch-manipulation items-center rounded-full bg-gold px-5 text-sm font-medium text-bg"
      >
        {t("cta_whatsapp")} · {BRAND.phoneDisplay}
      </a>
    </div>
  );
}
