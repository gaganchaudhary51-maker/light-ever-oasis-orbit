import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@react-three/drei+[...].mjs";
import { l as waUrl } from "./listings-BDrnreIt.mjs";
import { a as GBP_COPY, o as PHOTO_CAPTIONS, s as REVIEW_REQUESTS } from "./router-XbtlI9Go.mjs";
import { t as CopyButton } from "./CopyButton-B3oC8omV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/google-profile-jQV9w837.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-start justify-between gap-3 border-b border-line py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs tracking-wide text-muted uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-fg",
			children: value
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, { text: value })]
	});
}
function GoogleProfilePage() {
	const [website, setWebsite] = (0, import_react.useState)(GBP_COPY.website);
	(0, import_react.useEffect)(() => {
		setWebsite(window.location.origin);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-14 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "gold-rule max-w-xs justify-start",
				children: "GBP"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-4 text-4xl",
				children: "Google profile kit"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "Paste these fields into Google Business Profile. Keep NAP identical everywhere."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-xl border border-line bg-surface px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Business name",
						value: GBP_COPY.businessName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Category",
						value: GBP_COPY.category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Address",
						value: GBP_COPY.address
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Phone",
						value: GBP_COPY.phone
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Website",
						value: website
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Hours",
						value: GBP_COPY.hours
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Description",
						value: GBP_COPY.description
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-12 text-3xl",
				children: "10 photo captions"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-4 space-y-3",
				children: PHOTO_CAPTIONS.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start justify-between gap-3 rounded-lg border border-line p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mr-2 text-muted",
							children: [i + 1, "."]
						}), c]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, { text: c })]
				}, c))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-12 text-3xl",
				children: "6 review-request WhatsApp texts"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-4 space-y-3",
				children: REVIEW_REQUESTS.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg border border-line p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-end gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, { text: c }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: waUrl(c),
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex min-h-10 items-center rounded-full border border-gold/40 px-3 text-xs text-gold uppercase",
							children: "WhatsApp"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: [
							i + 1,
							". ",
							c
						]
					})]
				}, c))
			})
		]
	});
}
//#endregion
export { GoogleProfilePage as component };
