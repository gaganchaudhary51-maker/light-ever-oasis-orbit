import { o as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { m as Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as BRAND } from "./listings-BDrnreIt.mjs";
import { h as useI18n } from "./router-XbtlI9Go.mjs";
import { t as PinGate } from "./PinGate-Bq78q1lR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-3lI23FQL.js
var import_jsx_runtime = require_jsx_runtime();
function AdminLayout() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PinGate, {
		sessionKey: "crm",
		expected: (pin) => pin === BRAND.crmPin,
		hint: t("admin_sub"),
		title: t("admin_title"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
//#endregion
export { AdminLayout as component };
