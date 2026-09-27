import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@react-three/drei+[...].mjs";
import { t as BRAND } from "./listings-BDrnreIt.mjs";
import { h as useI18n, i as cn } from "./router-XbtlI9Go.mjs";
import { p as useListings } from "./listing-store-CXWTTLGi.mjs";
import { t as ListingCard } from "./ListingCard-D_bzzkFZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/homes-osuRwqEu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HomesPage() {
	const { t } = useI18n();
	const listings = useListings();
	const [type, setType] = (0, import_react.useState)("all");
	const [status, setStatus] = (0, import_react.useState)("all");
	const filtered = (0, import_react.useMemo)(() => listings.filter((l) => type === "all" ? true : l.type === type).filter((l) => status === "all" ? true : l.status === status), [
		listings,
		type,
		status
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "gold-rule max-w-sm",
				children: BRAND.city
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-4 text-3xl sm:text-5xl",
				children: t("inventory_title")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-muted",
				children: t("inventory_sub")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "-mx-4 mt-6 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:mt-8 sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex w-max gap-2 sm:w-auto sm:flex-wrap",
					children: [
						"all",
						"flat",
						"penthouse"
					].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setType(v),
						className: cn("min-h-11 shrink-0 touch-manipulation rounded-full border px-4 text-sm", type === v ? "border-gold bg-gold/15 text-gold-bright" : "border-line text-muted"),
						children: v === "all" ? t("filter_all") : v === "flat" ? t("type_flat") : t("type_penthouse")
					}, v))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "-mx-4 mt-3 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex w-max gap-2 sm:w-auto sm:flex-wrap",
					children: [
						"all",
						"available",
						"hold",
						"sold"
					].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setStatus(v),
						className: cn("min-h-11 shrink-0 touch-manipulation rounded-full border px-4 text-sm", status === v ? "border-gold bg-gold/15 text-gold-bright" : "border-line text-muted"),
						children: v === "all" ? t("filter_all") : v === "available" ? t("status_available") : v === "hold" ? t("status_hold") : t("status_sold")
					}, v))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3",
				children: filtered.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListingCard, { listing: l }, l.slug))
			})
		]
	});
}
//#endregion
export { HomesPage as component };
