import { createFileRoute } from "@tanstack/react-router";
import { BRAND, waUrl } from "@/lib/brand";
import { agentIntroMessage } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/agents")({
  component: AgentsPage,
  head: () => ({
    meta: [{ title: `For Agents | ${BRAND.name} | Gurugram` }],
  }),
});

function AgentsPage() {
  const { t, lang } = useI18n();
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14">
      <p className="gold-rule max-w-sm">{BRAND.city}</p>
      <h1 className="font-display mt-4 text-3xl sm:text-5xl">{t("agents_title")}</h1>
      <p className="mt-4 text-muted">
        {lang === "hi"
          ? "Regent Way एक प्लेटफ़ॉर्म है। पब्लिक पर कोई ब्रोकर नंबर नहीं — सिर्फ़ एक WhatsApp लाइन।"
          : "Regent Way is a platform, not a broker bazaar. No agent numbers on the public site — one WhatsApp line."}
      </p>
      <p className="mt-3 text-sm text-gold-bright">{BRAND.phoneDisplay} · {BRAND.name}</p>
      <a
        href={waUrl(agentIntroMessage())}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex min-h-12 touch-manipulation items-center rounded-full bg-gold px-5 text-sm font-medium text-bg"
      >
        {t("cta_whatsapp")} {BRAND.name}
      </a>
      <p className="mt-8 text-sm text-muted">
        {lang === "hi"
          ? "Pehle AI desk sawaal ka jawab deti hai. Garam lead desk tak jaati hai. Sample agent sheet sirf Owner login ke andar demo ke liye hai — woh phone asli nahi hain."
          : "The AI desk answers first. Hot leads go to the desk. The sample agent sheet inside Owner login is demo only — those phones are not real."}
      </p>
    </div>
  );
}
