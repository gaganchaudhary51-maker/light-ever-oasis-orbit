import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BRAND, googleReviewUrl, waPlain } from "@/lib/brand";
import { QrCard } from "@/components/QrCard";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/qr")({
  component: QrPage,
  head: () => ({
    meta: [
      { title: `QR · NFC · Google review | ${BRAND.name}` },
      {
        name: "description",
        content: "Scan QR or tap NFC for Regent Way WhatsApp, website and Google review in Gurugram.",
      },
    ],
  }),
});

function QrPage() {
  const { lang } = useI18n();
  const [origin, setOrigin] = useState("https://tundra-frost-cactus.grok.me");
  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);
  const review = googleReviewUrl();
  const nfc = `${origin}/qr`;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14">
      <p className="gold-rule max-w-xs justify-start">QR · NFC · Review</p>
      <h1 className="font-display mt-4 text-3xl sm:text-4xl">
        {lang === "hi" ? "QR, NFC और Google स्टार" : "QR, NFC & Google stars"}
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        {lang === "hi"
          ? "विजिटिंग कार्ड, बोर्ड और NFC टैग पर लगाएँ। स्कैन होते ही WhatsApp, साइट या Google रिव्यू खुलता है — SEO/AEO के लिए एक ही NAP."
          : "Print on cards, site boards and NFC tags. Scan opens WhatsApp, the site or Google review — one NAP for SEO and answer engines."}
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <QrCard
          label="WhatsApp"
          value={waPlain()}
          hint={lang === "hi" ? "असली नंबर केवल Regent Way" : "Only real number: Regent Way"}
        />
        <QrCard
          label={lang === "hi" ? "वेबसाइट" : "Website"}
          value={origin}
          hint="NFC tag pe ye URL likho"
        />
        <QrCard
          label={lang === "hi" ? "Google स्टार रिव्यू" : "Google star review"}
          value={review}
          hint={
            lang === "hi"
              ? "Visit ke baad 5 star. Google Business live hone par seedha review form khulega."
              : "After a visit. When GBP is live this opens the star form."
          }
        />
      </div>

      <section className="mt-12 rounded-xl border border-line bg-surface p-5">
        <h2 className="font-display text-2xl">NFC</h2>
        <p className="mt-2 text-sm text-muted">
          {lang === "hi"
            ? "Smarter NFC / NFC Tools app se tag pe ye URL write karo. Phone lagate hi ye page khulega."
            : "Write this URL to a blank NFC tag with NFC Tools. A tap opens this page."}
        </p>
        <p className="mt-3 break-all text-gold">{nfc}</p>
      </section>

      <section className="mt-8 text-sm text-muted">
        <h2 className="font-display text-2xl text-fg">SEO · AEO</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>Same name, phone, Gurugram address everywhere (NAP).</li>
          <li>Google Business + this QR = star reviews.</li>
          <li>Ask-engine FAQ on the site answers “flats in Gurugram Regent Way”.</li>
        </ul>
      </section>
    </div>
  );
}
