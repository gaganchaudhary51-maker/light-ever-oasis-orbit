import { o as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as waUrl } from "./listings-BDrnreIt.mjs";
import { d as listingShareText, h as useI18n, i as cn, m as visitMessage } from "./router-XbtlI9Go.mjs";
import { o as isPreviewImage } from "./listing-store-CXWTTLGi.mjs";
import { n as TypeLabel, t as StatusBadge } from "./StatusBadge-MgAB59Oq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ListingCard-D_bzzkFZ.js
var import_jsx_runtime = require_jsx_runtime();
function ListingCard({ listing, compact = false }) {
	const { t, lang } = useI18n();
	const name = lang === "hi" ? listing.nameHi : listing.name;
	const locality = lang === "hi" ? listing.localityHi : listing.locality;
	const price = lang === "hi" ? listing.priceBandHi : listing.priceBand;
	const size = lang === "hi" ? listing.sizeHi : listing.size;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group overflow-hidden rounded-xl border border-line bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/homes/$slug",
			params: { slug: listing.slug },
			className: "block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-[4/3] overflow-hidden sm:aspect-[3/2]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: listing.image,
						alt: name,
						loading: "lazy",
						decoding: "async",
						className: "size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
					}),
					isPreviewImage(listing.image) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "preview-ribbon",
						children: t("preview_asset")
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-2.5 right-2.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: listing.status })
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("p-4 sm:p-5", compact && "p-3"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.18em] text-gold uppercase",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypeLabel, { type: listing.type })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display mt-1 text-2xl text-fg",
					children: name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: locality
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-wide text-muted uppercase",
						children: t("listing_price")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-gold-bright",
						children: price
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-wide text-muted uppercase",
							children: t("listing_size")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-fg",
							children: size
						})]
					})]
				}),
				compact ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid grid-cols-2 gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: waUrl(visitMessage(listing)),
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex min-h-12 touch-manipulation items-center justify-center rounded-full bg-gold px-3 text-sm font-medium text-bg",
						children: t("cta_whatsapp")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `https://wa.me/?text=${encodeURIComponent(`${listingShareText(listing)}\n/homes/${listing.slug}`)}`,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex min-h-12 touch-manipulation items-center justify-center rounded-full border border-line px-3 text-sm text-gold",
						children: t("listing_share")
					})]
				})
			]
		})]
	});
}
//#endregion
export { ListingCard as t };
