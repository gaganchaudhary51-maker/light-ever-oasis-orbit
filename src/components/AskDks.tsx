import { useState } from "react";
import { askDks } from "@/lib/ask-dks";
import { BRAND, waUrl } from "@/lib/brand";
import { visitMessage } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";
import { WhatsAppGlyph } from "@/components/layout/StickyWhatsApp";

export function AskDks() {
  const { lang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [a, setA] = useState("");
  const [busy, setBusy] = useState(false);

  const send = async () => {
    if (!q.trim() || busy) return;
    setBusy(true);
    setA("");
    try {
      const res = await askDks({ data: { q } });
      setA(res.ok ? res.text : res.error);
    } catch {
      setA(lang === "hi" ? "AI band. WhatsApp karo." : "AI unavailable. WhatsApp Regent Way.");
    } finally {
      setBusy(false);
    }
  };

  const panel = (
    <div className="rounded-xl border border-line bg-surface p-4 shadow-gold">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-display text-lg text-gold-bright">
            {lang === "hi" ? "AI सहायक" : "AI desk"}
          </p>
          <p className="text-xs text-muted">
            {lang === "hi"
              ? "Broker ki jagah. Jawab ke baad WhatsApp."
              : "Replaces brokers. Then WhatsApp the desk."}
          </p>
        </div>
        <button
          type="button"
          className="inline-flex size-11 shrink-0 touch-manipulation items-center justify-center rounded-full border border-line text-sm text-muted"
          onClick={() => setOpen(false)}
        >
          {t("close")}
        </button>
      </div>
      <textarea
        className="mt-3 min-h-24 w-full rounded-md border border-line bg-bg px-3 py-3 text-base"
        placeholder={lang === "hi" ? "Golf Course Road pe penthouse?" : "Penthouse on Golf Course Road?"}
        value={q}
        maxLength={400}
        onChange={(e) => setQ(e.target.value)}
      />
      <button
        type="button"
        disabled={busy}
        onClick={() => void send()}
        className="mt-3 inline-flex min-h-12 w-full touch-manipulation items-center justify-center rounded-full bg-gold text-sm font-medium text-bg"
      >
        {busy ? "…" : lang === "hi" ? "पूछें" : "Ask"}
      </button>
      {a ? <p className="mt-3 max-h-40 overflow-y-auto text-sm text-fg">{a}</p> : null}
      <a
        href={waUrl(visitMessage())}
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-flex min-h-12 w-full touch-manipulation items-center justify-center rounded-full border border-gold/40 text-sm text-gold"
      >
        WhatsApp {BRAND.name}
      </a>
    </div>
  );

  return (
    <>
      <div className="fixed bottom-24 left-4 z-40 hidden max-w-[min(22rem,calc(100vw-2rem))] lg:block">
        {open ? (
          panel
        ) : (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex min-h-12 items-center rounded-full border border-gold/50 bg-surface px-4 text-xs tracking-wide text-gold uppercase"
          >
            {t("ask_ai")}
          </button>
        )}
      </div>

      {open ? (
        <div className="fixed inset-x-0 bottom-[calc(4.25rem+env(safe-area-inset-bottom))] z-40 px-3 lg:hidden">
          {panel}
        </div>
      ) : null}

      <nav
        className="no-print fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden"
        aria-label={t("sticky_wa")}
      >
        <div className="grid grid-cols-2 gap-2 px-3 py-2">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex min-h-12 touch-manipulation items-center justify-center rounded-full border border-gold/40 bg-surface text-sm font-medium text-gold"
          >
            {open ? t("close") : t("ask_ai")}
          </button>
          <a
            href={waUrl(visitMessage())}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 touch-manipulation items-center justify-center gap-2 rounded-full bg-gold text-sm font-medium text-bg"
          >
            <WhatsAppGlyph />
            {t("cta_whatsapp")}
          </a>
        </div>
      </nav>
    </>
  );
}
