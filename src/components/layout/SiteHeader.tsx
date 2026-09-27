import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BRAND, waUrl } from "@/lib/brand";
import { visitMessage } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";

const NAV = [
  { to: "/homes" as const, key: "nav_homes" as const },
  { to: "/about" as const, key: "nav_about" as const },
  { to: "/agents" as const, key: "nav_agents" as const },
  { to: "/contact" as const, key: "nav_contact" as const },
];

export function SiteHeader() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-line/80 pt-[env(safe-area-inset-top)]",
        onHome ? "bg-bg/40 backdrop-blur-md" : "bg-bg/92 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 px-4 sm:h-[4.25rem] sm:gap-3 sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <img
            src={BRAND.logoSm}
            alt=""
            width={44}
            height={44}
            className="size-10 rounded-sm border border-line object-cover sm:size-11"
          />
          <span className="min-w-0">
            <span className="font-display block truncate text-[1.05rem] leading-none tracking-wide text-gold-bright sm:text-xl">
              {BRAND.name}
            </span>
            <span className="mt-0.5 block text-[0.62rem] tracking-[0.18em] text-muted uppercase sm:text-[0.65rem] sm:tracking-[0.22em]">
              {BRAND.city}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "text-sm tracking-wide text-muted transition-colors duration-200 hover:text-gold-bright",
                pathname.startsWith(item.to) && "text-gold-bright",
              )}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="flex overflow-hidden rounded-full border border-line text-[0.7rem] font-medium">
            <button
              type="button"
              className={cn(
                "min-h-11 min-w-11 touch-manipulation px-2.5",
                lang === "en" ? "bg-gold text-bg" : "text-muted",
              )}
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
            >
              {t("lang_en")}
            </button>
            <button
              type="button"
              className={cn(
                "min-h-11 min-w-11 touch-manipulation px-2.5",
                lang === "hi" ? "bg-gold text-bg" : "text-muted",
              )}
              onClick={() => setLang("hi")}
              aria-pressed={lang === "hi"}
            >
              {t("lang_hi")}
            </button>
          </div>
          <a
            href={waUrl(visitMessage())}
            target="_blank"
            rel="noreferrer"
            className="hidden min-h-11 items-center rounded-full bg-gold px-4 text-sm font-medium text-bg transition-opacity duration-150 hover:opacity-90 lg:inline-flex"
          >
            {t("cta_whatsapp")}
          </a>
          <button
            type="button"
            className="inline-flex size-11 touch-manipulation items-center justify-center rounded-full border border-line text-fg lg:hidden"
            aria-label={open ? t("close") : t("menu")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-x-0 top-[calc(3.5rem+env(safe-area-inset-top))] bottom-0 z-50 overflow-y-auto border-t border-line bg-bg lg:hidden">
          <nav className="flex min-h-full flex-col px-4 py-4 pb-[calc(6.5rem+env(safe-area-inset-bottom))]">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex min-h-14 items-center border-b border-line text-lg text-fg"
                onClick={() => setOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
            <Link
              to="/whatsapp"
              className="flex min-h-14 items-center border-b border-line text-lg text-gold"
              onClick={() => setOpen(false)}
            >
              {t("nav_whatsapp")}
            </Link>
            <a
              href={waUrl(visitMessage())}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex min-h-14 touch-manipulation items-center justify-center rounded-full bg-gold px-4 text-base font-medium text-bg"
            >
              {t("cta_whatsapp")} · {BRAND.phoneDisplay}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
