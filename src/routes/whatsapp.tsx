import { createFileRoute } from "@tanstack/react-router";
import { BRAND, waUrl } from "@/lib/brand";
import { WA_TEMPLATES } from "@/lib/copy";
import { CopyButton } from "@/components/ui/CopyButton";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/whatsapp")({
  component: WhatsAppPage,
  head: () => ({
    meta: [{ title: `WhatsApp | ${BRAND.name}` }],
  }),
});

function WhatsAppPage() {
  const { lang, t } = useI18n();
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <p className="gold-rule max-w-xs justify-start">{BRAND.phoneDisplay}</p>
      <h1 className="font-display mt-4 text-4xl">WhatsApp</h1>
      <p className="mt-3 text-muted">
        {lang === "hi"
          ? "चार तैयार संदेश। कॉपी करें या सीधे व्हाट्सऐप खोलें।"
          : "Four copy-ready messages. Copy, or open WhatsApp with the text already filled."}
      </p>
      <div className="mt-10 grid gap-4">
        {WA_TEMPLATES.map((tpl) => (
          <article key={tpl.id} className="rounded-xl border border-line bg-surface p-5">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-display text-2xl">{lang === "hi" ? tpl.titleHi : tpl.title}</h2>
              <CopyButton text={tpl.body} />
            </div>
            <p className="mt-3 text-sm text-muted">{tpl.body}</p>
            <a
              href={waUrl(tpl.body)}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex min-h-11 items-center rounded-full bg-gold px-4 text-sm font-medium text-bg"
            >
              {t("cta_whatsapp")}
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
