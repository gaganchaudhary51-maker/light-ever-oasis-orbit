import { o as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { h as useI18n, i as cn } from "./router-XbtlI9Go.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/StatusBadge-MgAB59Oq.js
var import_jsx_runtime = require_jsx_runtime();
function StatusBadge({ status }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex min-h-7 items-center rounded-full px-2.5 text-[0.68rem] font-medium tracking-wide uppercase", status === "available" && "bg-available/20 text-available", status === "hold" && "bg-hold/20 text-hold", status === "sold" && "bg-sold/20 text-sold"),
		children: t(status === "available" ? "status_available" : status === "hold" ? "status_hold" : "status_sold")
	});
}
function TypeLabel({ type }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: type === "penthouse" ? t("type_penthouse") : t("type_flat") });
}
//#endregion
export { TypeLabel as n, StatusBadge as t };
