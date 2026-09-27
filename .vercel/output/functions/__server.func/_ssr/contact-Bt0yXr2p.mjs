import { o as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { c as waPlain, l as waUrl, t as BRAND } from "./listings-BDrnreIt.mjs";
import { h as useI18n, m as visitMessage } from "./router-XbtlI9Go.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Bt0yXr2p.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const { t, lang } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "gold-rule max-w-xs justify-start",
				children: "NAP"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-4 text-3xl sm:text-5xl",
				children: t("contact_title")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted",
				children: lang === "hi" ? "फॉर्म नहीं — व्हाट्सऐप पर बात करें। नाम, पता, फोन हर जगह एक जैसे हैं।" : "No forms. WhatsApp is the only lead line. Name, address and phone are the same on every page."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 space-y-5 rounded-xl border border-line bg-surface p-5 sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl text-gold-bright",
						children: BRAND.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: BRAND.addressLine
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "flex min-h-12 items-center text-gold",
						href: `tel:+${BRAND.phoneE164}`,
						children: BRAND.phoneDisplay
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "flex min-h-12 items-center text-gold",
						href: waPlain(),
						target: "_blank",
						rel: "noreferrer",
						children: ["WhatsApp · wa.me/", BRAND.phoneE164]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: lang === "hi" ? BRAND.hoursHi : BRAND.hoursEn
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: BRAND.mapsUrl,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex min-h-12 items-center text-sm text-muted underline decoration-line underline-offset-4",
						children: [t("footer_maps"), " — Golf Course Road, Gurugram"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: waUrl(visitMessage()),
				target: "_blank",
				rel: "noreferrer",
				className: "mt-8 inline-flex min-h-12 touch-manipulation items-center rounded-full bg-gold px-5 font-medium text-bg",
				children: t("cta_site_visit")
			})
		]
	});
}
//#endregion
export { ContactPage as component };
