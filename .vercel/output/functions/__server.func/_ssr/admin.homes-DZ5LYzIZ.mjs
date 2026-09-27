import { o as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { v as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as BRAND } from "./listings-BDrnreIt.mjs";
import { h as useI18n } from "./router-XbtlI9Go.mjs";
import { i as addListing, o as isPreviewImage, p as useListings } from "./listing-store-CXWTTLGi.mjs";
import { n as TypeLabel, t as StatusBadge } from "./StatusBadge-MgAB59Oq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.homes-DZ5LYzIZ.js
var import_jsx_runtime = require_jsx_runtime();
function AdminHomesInner() {
	const { t, lang } = useI18n();
	const listings = useListings();
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 pb-16 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-end justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "gold-rule max-w-xs justify-start",
					children: BRAND.owner
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display mt-3 text-4xl",
					children: t("admin_homes")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Photo, price, status — card pe tap. Customer ko Agent sheet se nahi milta."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "inline-flex min-h-11 items-center rounded-full bg-gold px-4 text-sm font-medium text-bg",
				onClick: () => {
					const row = addListing();
					navigate({
						to: "/admin/homes/$slug",
						params: { slug: row.slug }
					});
				},
				children: t("add_home")
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: listings.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/admin/homes/$slug",
				params: { slug: l.slug },
				className: "overflow-hidden rounded-xl border border-line bg-surface",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[3/2]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: l.image,
						alt: "",
						className: "size-full object-cover"
					}), isPreviewImage(l.image) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "preview-ribbon",
						children: t("preview_asset")
					}) : null]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypeLabel, { type: l.type }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: l.status })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display mt-2 text-2xl",
							children: lang === "hi" ? l.nameHi : l.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: lang === "hi" ? l.priceBandHi : l.priceBand
						})
					]
				})]
			}, l.slug))
		})]
	});
}
//#endregion
export { AdminHomesInner as component };
