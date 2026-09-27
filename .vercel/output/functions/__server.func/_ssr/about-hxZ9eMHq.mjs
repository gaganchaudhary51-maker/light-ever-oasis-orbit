import { o as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { l as waUrl, t as BRAND } from "./listings-BDrnreIt.mjs";
import { h as useI18n, m as visitMessage } from "./router-XbtlI9Go.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-hxZ9eMHq.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	const { t, lang } = useI18n();
	const hi = lang === "hi";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "gold-rule max-w-xs justify-start",
				children: BRAND.city
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-4 text-3xl sm:text-5xl",
				children: t("about_title")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-lg text-muted",
				children: hi ? "रीजेंट वे गुरुग्राम की निजी फ़्लैट और पेंटहाउस प्लेटफ़ॉर्म है — गोल्फ कोर्स रोड, डीएलएफ फेज़ 5, सेक्टर 54, एमजी रोड और सोहना रोड।" : "Regent Way is a platform for private flats and penthouses in Gurugram — Golf Course Road, DLF Phase 5, Sector 54, MG Road and Sohna Road."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative my-10 overflow-hidden rounded-xl border border-line",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/listings/khair-manor.jpg",
					alt: "",
					className: "aspect-[3/2] w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "preview-ribbon",
					children: t("preview_asset")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: hi ? "विज़िट नामित सलाहकार के साथ होती है। कोई अज्ञात ब्रोकर नहीं। कीमत बैंड साफ़ बताए जाते हैं; अंतिम आंकड़ा कागज़ पर।" : "A viewing is with a named advisor. No unknown brokers. Price bands are stated up front; the last number is on paper." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: hi ? "हम लिस्टिंग बेचते नहीं — घर दिखाते हैं। एक व्हाट्सऐप लाइन, एक NAP।" : "We do not float listings. We show homes. One WhatsApp line, one NAP." })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-10 grid gap-4 border-t border-line pt-8 text-sm sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-muted",
					children: "NAP"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
					className: "mt-1 text-fg",
					children: [
						BRAND.name,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						BRAND.addressLine,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						BRAND.phoneDisplay
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-muted",
					children: t("nap_hours")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "mt-1",
					children: hi ? BRAND.hoursHi : BRAND.hoursEn
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: waUrl(visitMessage()),
				target: "_blank",
				rel: "noreferrer",
				className: "mt-10 inline-flex min-h-12 touch-manipulation items-center rounded-full bg-gold px-5 text-sm font-medium text-bg",
				children: [
					t("cta_whatsapp"),
					" · ",
					BRAND.phoneDisplay
				]
			})
		]
	});
}
//#endregion
export { AboutPage as component };
