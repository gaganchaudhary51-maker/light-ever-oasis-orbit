import { createFileRoute, Link } from "@tanstack/react-router";
import { BRAND } from "@/lib/brand";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/admin/")({
  component: AdminHub,
});

function AdminHub() {
  const { t } = useI18n();
  const cards = [
    { to: "/admin/homes" as const, title: t("admin_homes"), help: t("admin_homes_help") },
    { to: "/crm" as const, title: t("admin_crm"), help: t("admin_crm_help") },
    { to: "/ads" as const, title: t("admin_ads"), help: t("admin_ads_help") },
    { to: "/google-profile" as const, title: t("admin_gbp"), help: t("admin_gbp_help") },
    { to: "/portal" as const, title: t("admin_portal"), help: t("admin_portal_help") },
    { to: "/agents/sheet" as const, title: t("admin_agents"), help: t("agents_sheet") },
    { to: "/qr" as const, title: "QR · NFC · Review", help: "Print QR, write NFC, Google stars. Same NAP." },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      <p className="gold-rule max-w-xs justify-start">{BRAND.owner}</p>
      <h1 className="font-display mt-3 text-4xl">{t("admin_title")}</h1>
      <p className="mt-2 max-w-2xl text-muted">{t("admin_sub")}</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <Link
            key={c.to}
            to={c.to}
            className="rounded-xl border border-line bg-surface p-5 transition-colors hover:border-gold/50"
          >
            <p className="font-display text-2xl text-gold-bright">{c.title}</p>
            <p className="mt-2 text-sm text-muted">{c.help}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
