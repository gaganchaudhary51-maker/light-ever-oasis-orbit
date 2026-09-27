import { o as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { n as LISTINGS, t as BRAND } from "./listings-BDrnreIt.mjs";
import { t as StatusBadge } from "./StatusBadge-MgAB59Oq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/agents.kit-DtE3WbDn.js
var import_jsx_runtime = require_jsx_runtime();
function AgentKitPage() {
	const three = LISTINGS.filter((l) => l.status === "available").slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-10 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "no-print mb-6 flex justify-end",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "min-h-12 rounded-full bg-gold px-4 text-sm font-medium text-bg",
				onClick: () => window.print(),
				children: "Print one-pager"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-xl border border-line bg-surface p-6 sm:p-8 print:border-0 print:p-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex items-center gap-4 border-b border-line pb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: BRAND.logo,
						alt: "",
						className: "size-16 rounded-sm object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl text-gold-bright",
							children: BRAND.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: BRAND.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm",
							children: [
								BRAND.city,
								" · WhatsApp ",
								BRAND.phoneDisplay
							]
						})
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "gold-rule my-6",
					children: "Agent kit · Gurugram"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4",
					children: three.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[5.5rem_1fr] gap-4 border-b border-line pb-4 sm:grid-cols-[7rem_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: l.image,
							alt: "",
							className: "aspect-[3/2] w-full rounded-md object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-xl",
									children: l.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: l.status })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: l.locality
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-gold",
								children: l.priceBand
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: l.size
							})
						] })]
					}, l.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm text-muted",
					children: "One WhatsApp line. Named advisors. No floating brokers."
				})
			]
		})]
	});
}
//#endregion
export { AgentKitPage as component };
