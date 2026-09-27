import { o as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { l as waUrl, t as BRAND } from "./listings-BDrnreIt.mjs";
import { h as useI18n, l as agentIntroMessage } from "./router-XbtlI9Go.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/agents-rxwphPrx.js
var import_jsx_runtime = require_jsx_runtime();
function AgentsPage() {
	const { t, lang } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "gold-rule max-w-sm",
				children: BRAND.city
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-4 text-3xl sm:text-5xl",
				children: t("agents_title")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted",
				children: lang === "hi" ? "Regent Way एक प्लेटफ़ॉर्म है। पब्लिक पर कोई ब्रोकर नंबर नहीं — सिर्फ़ एक WhatsApp लाइन।" : "Regent Way is a platform, not a broker bazaar. No agent numbers on the public site — one WhatsApp line."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-gold-bright",
				children: [
					BRAND.phoneDisplay,
					" · ",
					BRAND.name
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: waUrl(agentIntroMessage()),
				target: "_blank",
				rel: "noreferrer",
				className: "mt-8 inline-flex min-h-12 touch-manipulation items-center rounded-full bg-gold px-5 text-sm font-medium text-bg",
				children: [
					t("cta_whatsapp"),
					" ",
					BRAND.name
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-sm text-muted",
				children: lang === "hi" ? "Pehle AI desk sawaal ka jawab deti hai. Garam lead desk tak jaati hai. Sample agent sheet sirf Owner login ke andar demo ke liye hai — woh phone asli nahi hain." : "The AI desk answers first. Hot leads go to the desk. The sample agent sheet inside Owner login is demo only — those phones are not real."
			})
		]
	});
}
//#endregion
export { AgentsPage as component };
