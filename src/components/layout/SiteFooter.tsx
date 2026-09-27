import { Link } from "@tanstack/react-router";
import { BRAND, waPlain } from "@/lib/brand";
import { useI18n } from "@/lib/i18n";

export function SiteFooter() {
  const { t, lang } = useI18n();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <img
            src={BRAND.logoSm}
            alt=""
            width={64}
            height={64}
            className="mb-4 size-16 rounded-sm border border-line object-cover"
          />
          <p className="font-display text-2xl text-gold-bright">{BRAND.name}</p>
          <p className="mt-1 text-sm text-muted">
            {lang === "hi" ? BRAND.taglineHi : BRAND.tagline}
          </p>
          <p className="mt-4 text-sm text-muted">{t("footer_city")}</p>
        </div>
        <div className="text-sm">
          <p className="gold-rule mb-4 max-w-48 justify-start">{t("contact_title")}</p>
          <p className="text-fg">{BRAND.addressLine}</p>
          <a className="mt-2 flex min-h-11 items-center text-gold hover:text-gold-bright" href={`tel:+${BRAND.phoneE164}`}>
            {BRAND.phoneDisplay}
          </a>
          <a className="flex min-h-11 items-center text-gold hover:text-gold-bright" href={waPlain()} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a
            className="mt-2 inline-flex min-h-11 items-center text-muted underline decoration-line underline-offset-4 hover:text-gold"
            href={BRAND.mapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            {t("footer_maps")}
          </a>
        </div>
        <div className="text-sm">
          <p className="gold-rule mb-4 max-w-48 justify-start">{t("nap_hours")}</p>
          <p className="text-muted">{lang === "hi" ? BRAND.hoursHi : BRAND.hoursEn}</p>
          <div className="mt-6 flex flex-col">
            <Link to="/homes" className="flex min-h-11 items-center text-muted hover:text-gold">
              {t("nav_homes")}
            </Link>
            <Link to="/qr" className="flex min-h-11 items-center text-muted hover:text-gold">
              QR · Google review
            </Link>
            <Link to="/whatsapp" className="flex min-h-11 items-center text-muted hover:text-gold">
              {t("nav_whatsapp")}
            </Link>
            <Link to="/agents" className="flex min-h-11 items-center text-muted hover:text-gold">
              {t("nav_agents")}
            </Link>
            <Link to="/admin" className="mt-2 flex min-h-11 items-center text-xs tracking-wide text-muted/80 uppercase hover:text-gold">
              {t("owner_login")}
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-line py-4 text-center text-xs tracking-wide text-muted">
        {BRAND.name} · {BRAND.city} · NAP {BRAND.phoneDisplay}
      </div>
    </footer>
  );
}
