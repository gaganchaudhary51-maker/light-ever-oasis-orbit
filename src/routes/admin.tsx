import { createFileRoute, Outlet } from "@tanstack/react-router";
import { PinGate } from "@/components/auth/PinGate";
import { BRAND } from "@/lib/brand";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
  head: () => ({
    meta: [{ title: `Owner dashboard | ${BRAND.name}` }],
  }),
});

function AdminLayout() {
  const { t } = useI18n();
  return (
    <PinGate
      sessionKey="crm"
      expected={(pin) => pin === BRAND.crmPin}
      hint={t("admin_sub")}
      title={t("admin_title")}
    >
      <Outlet />
    </PinGate>
  );
}
