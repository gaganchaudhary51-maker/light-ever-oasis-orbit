import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@react-three/drei+[...].mjs";
import { c as waPlain, i as googleReviewUrl } from "./listings-BDrnreIt.mjs";
import { h as useI18n } from "./router-XbtlI9Go.mjs";
import { t as CopyButton } from "./CopyButton-B3oC8omV.mjs";
import { t as require_lib } from "../_libs/qrcode.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/qr-ep1C-ndK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_lib = /* @__PURE__ */ __toESM(require_lib());
function QrCard({ label, value, hint }) {
	const [src, setSrc] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		let alive = true;
		import_lib.toDataURL(value, {
			width: 360,
			margin: 1,
			color: {
				dark: "#070706",
				light: "#f3ead2"
			}
		}).then((url) => {
			if (alive) setSrc(url);
		});
		return () => {
			alive = false;
		};
	}, [value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-line bg-surface p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-wide text-gold uppercase",
				children: label
			}),
			src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt: label,
				className: "mx-auto mt-3 w-48 rounded-md bg-paper"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-3 size-48 animate-pulse rounded-md bg-raised" }),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs text-muted",
				children: hint
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 break-all text-[0.7rem] text-muted",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, { text: value })
			})
		]
	});
}
function QrPage() {
	const { lang } = useI18n();
	const [origin, setOrigin] = (0, import_react.useState)("https://tundra-frost-cactus.grok.me");
	(0, import_react.useEffect)(() => {
		setOrigin(window.location.origin);
	}, []);
	const review = googleReviewUrl();
	const nfc = `${origin}/qr`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "gold-rule max-w-xs justify-start",
				children: "QR · NFC · Review"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-4 text-3xl sm:text-4xl",
				children: lang === "hi" ? "QR, NFC और Google स्टार" : "QR, NFC & Google stars"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-muted",
				children: lang === "hi" ? "विजिटिंग कार्ड, बोर्ड और NFC टैग पर लगाएँ। स्कैन होते ही WhatsApp, साइट या Google रिव्यू खुलता है — SEO/AEO के लिए एक ही NAP." : "Print on cards, site boards and NFC tags. Scan opens WhatsApp, the site or Google review — one NAP for SEO and answer engines."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCard, {
						label: "WhatsApp",
						value: waPlain(),
						hint: lang === "hi" ? "असली नंबर केवल Regent Way" : "Only real number: Regent Way"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCard, {
						label: lang === "hi" ? "वेबसाइट" : "Website",
						value: origin,
						hint: "NFC tag pe ye URL likho"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCard, {
						label: lang === "hi" ? "Google स्टार रिव्यू" : "Google star review",
						value: review,
						hint: lang === "hi" ? "Visit ke baad 5 star. Google Business live hone par seedha review form khulega." : "After a visit. When GBP is live this opens the star form."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12 rounded-xl border border-line bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "NFC"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: lang === "hi" ? "Smarter NFC / NFC Tools app se tag pe ye URL write karo. Phone lagate hi ye page khulega." : "Write this URL to a blank NFC tag with NFC Tools. A tap opens this page."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 break-all text-gold",
						children: nfc
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl text-fg",
					children: "SEO · AEO"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 list-disc space-y-1 pl-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Same name, phone, Gurugram address everywhere (NAP)." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Google Business + this QR = star reviews." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Ask-engine FAQ on the site answers “flats in Gurugram Regent Way”." })
					]
				})]
			})
		]
	});
}
//#endregion
export { QrPage as component };
