import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@react-three/drei+[...].mjs";
import { l as waUrl } from "./listings-BDrnreIt.mjs";
import { h as useI18n, i as cn, m as visitMessage, p as utmListingUrl } from "./router-XbtlI9Go.mjs";
import { p as useListings } from "./listing-store-CXWTTLGi.mjs";
import { t as CopyButton } from "./CopyButton-B3oC8omV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ads-D8_mQ4RC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var META = {
	primary: "Private flats and penthouses in Gurugram. Golf Course Road, DLF Phase 5, Sector 54, MG Road and Sohna Road. WhatsApp Regent Way for a viewing.",
	headline: "Flats & penthouses in Gurugram | Regent Way",
	description: "Private homes, named advisors. WhatsApp +91 79836 67722."
};
var GOOGLE = {
	headlines: [
		"Flats in Gurugram",
		"Regent Way | Penthouses",
		"Golf Course Road homes",
		"DLF Phase 5 flats",
		"Viewing on WhatsApp",
		"Sector 54 penthouses"
	],
	descriptions: ["Private flats and penthouses. Named advisors. WhatsApp Regent Way.", "Clear price bands. Gurugram families, not floating brokers."]
};
function AdsPage() {
	const listings = useListings();
	const { t } = useI18n();
	const [slug, setSlug] = (0, import_react.useState)(listings[0]?.slug ?? "golf-course-penthouse");
	const listing = listings.find((l) => l.slug === slug) ?? listings[0];
	const utm = listing ? utmListingUrl(listing, "meta", "paid", "gurugram-homes") : "/homes";
	const googleUtm = listing ? utmListingUrl(listing, "google", "cpc", "gurugram-homes") : "/homes";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "gold-rule max-w-xs justify-start",
				children: "Meta · Google"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-4 text-4xl",
				children: t("admin_ads")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-muted",
				children: t("admin_ads_help")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10 rounded-xl border border-line bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Meta"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Primary text",
						value: META.primary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Headline",
						value: META.headline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Description",
						value: META.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "CTA",
						value: "WhatsApp · Send message"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 rounded-xl border border-line bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Google RSA"
					}),
					GOOGLE.headlines.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: `Headline ${i + 1}`,
						value: h
					}, h)),
					GOOGLE.descriptions.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: `Description ${i + 1}`,
						value: h
					}, h))
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Frame sizes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Preview assets — mark as such in ads too."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid gap-4 md:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
								label: "1:1",
								className: "aspect-square",
								src: "/listings/khair-manor.jpg"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
								label: "9:16",
								className: "aspect-[9/16] mx-auto max-h-[28rem]",
								src: "/media/logo-poster.jpg"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
								label: "16:9",
								className: "aspect-video",
								src: "/interiors/drone.jpg"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10 rounded-xl border border-line bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "UTM → listing → WhatsApp"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "mt-4 block text-xs tracking-wide text-muted uppercase",
						children: "Listing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: "mt-2 min-h-12 w-full rounded-md border border-line bg-bg px-3 text-base sm:w-auto",
						value: slug,
						onChange: (e) => setSlug(e.target.value),
						children: listings.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: l.slug,
							children: l.name
						}, l.slug))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Meta UTM path",
						value: utm
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Google UTM path",
						value: googleUtm
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: waUrl(visitMessage(listing)),
						className: "mt-4 inline-flex min-h-12 items-center text-sm text-gold",
						target: "_blank",
						rel: "noreferrer",
						children: "WhatsApp CTA for this listing"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 rounded-xl border border-line p-5 text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl text-fg",
					children: "Gurugram geo targeting"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 list-disc space-y-1 pl-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Radius 18 km around Golf Course Road / Cyber Hub." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Include: Gurugram, DLF, Sohna Road, Sector 54–65, MG Road." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Exclude: job-seeker campaigns unless “NRI / returning family”." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Language: Hindi + English. Schedule 9:00–21:00 IST." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Landing: listing URL with UTM, WhatsApp as only conversion." })
					]
				})]
			})
		]
	});
}
function Field({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 flex flex-wrap items-start justify-between gap-3 border-t border-line pt-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-wide text-muted uppercase",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 break-all text-sm text-fg",
				children: value
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, { text: value })]
	});
}
function Frame({ label, className, src }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-2 text-xs tracking-wide text-muted uppercase",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("overflow-hidden rounded-lg border border-line", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt: "",
			className: "size-full object-cover"
		})
	})] });
}
//#endregion
export { AdsPage as component };
