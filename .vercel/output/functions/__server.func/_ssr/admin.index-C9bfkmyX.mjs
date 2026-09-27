import { o as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as BRAND } from "./listings-BDrnreIt.mjs";
import { h as useI18n } from "./router-XbtlI9Go.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.index-C9bfkmyX.js
var import_jsx_runtime = require_jsx_runtime();
function AdminHub() {
	const { t } = useI18n();
	const cards = [
		{
			to: "/admin/homes",
			title: t("admin_homes"),
			help: t("admin_homes_help")
		},
		{
			to: "/crm",
			title: t("admin_crm"),
			help: t("admin_crm_help")
		},
		{
			to: "/ads",
			title: t("admin_ads"),
			help: t("admin_ads_help")
		},
		{
			to: "/google-profile",
			title: t("admin_gbp"),
			help: t("admin_gbp_help")
		},
		{
			to: "/portal",
			title: t("admin_portal"),
			help: t("admin_portal_help")
		},
		{
			to: "/agents/sheet",
			title: t("admin_agents"),
			help: t("agents_sheet")
		},
		{
			to: "/qr",
			title: "QR · NFC · Review",
			help: "Print QR, write NFC, Google stars. Same NAP."
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 pb-16 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "gold-rule max-w-xs justify-start",
				children: BRAND.owner
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-3 text-4xl",
				children: t("admin_title")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-muted",
				children: t("admin_sub")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: cards.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: c.to,
					className: "rounded-xl border border-line bg-surface p-5 transition-colors hover:border-gold/50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl text-gold-bright",
						children: c.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: c.help
					})]
				}, c.to))
			})
		]
	});
}
//#endregion
export { AdminHub as component };
