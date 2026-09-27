import { o as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { l as waUrl, t as BRAND } from "./listings-BDrnreIt.mjs";
import { c as WA_TEMPLATES, h as useI18n } from "./router-XbtlI9Go.mjs";
import { t as CopyButton } from "./CopyButton-B3oC8omV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/whatsapp-D3u4GYDi.js
var import_jsx_runtime = require_jsx_runtime();
function WhatsAppPage() {
	const { lang, t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-14 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "gold-rule max-w-xs justify-start",
				children: BRAND.phoneDisplay
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-4 text-4xl",
				children: "WhatsApp"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: lang === "hi" ? "चार तैयार संदेश। कॉपी करें या सीधे व्हाट्सऐप खोलें।" : "Four copy-ready messages. Copy, or open WhatsApp with the text already filled."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4",
				children: WA_TEMPLATES.map((tpl) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-line bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl",
								children: lang === "hi" ? tpl.titleHi : tpl.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, { text: tpl.body })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: tpl.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: waUrl(tpl.body),
							target: "_blank",
							rel: "noreferrer",
							className: "mt-4 inline-flex min-h-11 items-center rounded-full bg-gold px-4 text-sm font-medium text-bg",
							children: t("cta_whatsapp")
						})
					]
				}, tpl.id))
			})
		]
	});
}
//#endregion
export { WhatsAppPage as component };
