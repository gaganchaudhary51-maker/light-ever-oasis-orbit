import { o as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { t as BRAND } from "./listings-BDrnreIt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.guide-DKJUKHWE.js
var import_jsx_runtime = require_jsx_runtime();
function OwnerGuide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 pb-20 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "gold-rule max-w-xs justify-start",
				children: BRAND.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-3 text-4xl",
				children: "Owner guide"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: "Small desk, named viewings. This is the digital office for Regent Way."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Daily",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "mt-3 list-decimal space-y-2 pl-5 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "WhatsApp button pe tap — customer ko ready message chala jaata hai." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Neeche ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-fg",
								children: "Owner login"
							}),
							" → PIN",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-fg",
								children: BRAND.crmPin
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-fg",
							children: "Homes & photos"
						}), " — flat / penthouse ki photo, price, Available / Hold / Sold."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-fg",
							children: "CRM"
						}), " — naam, phone, follow-up date, viewing calendar."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Ghar bik jaaye to status ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-fg",
								children: "Sold"
							}),
							" kar do. Record rehta hai."
						] })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Photo kaise badlein",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: "Owner login → Homes & photos → ghar pe tap → photo pe tap → gallery se asli photo choose → Save. Site par turant dikhega. Preview ribbon hata jaata hai."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Customer kya dekhta hai",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: "Ghar, price, 360, drone, WhatsApp. Ads kit / CRM / PIN unhe nahi dikhta."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Jab ghar bik jaaye",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: "Status Sold. CRM mein buyer naam, phone, visit date, notes. Baad mein pata rahega kaun sa ghar, kitne ka, kab, kisko."
				})
			})
		]
	});
}
function Section({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl",
			children: title
		}), children]
	});
}
//#endregion
export { OwnerGuide as component };
