import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@react-three/drei+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as waUrl, t as BRAND } from "./listings-BDrnreIt.mjs";
import { h as useI18n, i as cn, m as visitMessage } from "./router-XbtlI9Go.mjs";
import { p as useListings } from "./listing-store-CXWTTLGi.mjs";
import { t as ListingCard } from "./ListingCard-D_bzzkFZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D_0_98PN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var HouseScene = (0, import_react.lazy)(() => import("./HouseScene-DofNcyDU.mjs"));
function isWeakDevice() {
	if (typeof window === "undefined") return true;
	return window.innerWidth < 900 || window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}
var ThreeGuard = class extends import_react.Component {
	state = { err: false };
	static getDerivedStateFromError() {
		return { err: true };
	}
	render() {
		return this.state.err ? this.props.fallback : this.props.children;
	}
};
function HouseHero() {
	const { t, lang } = useI18n();
	const [mode, setMode] = (0, import_react.useState)("night");
	const [want3d, setWant3d] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (isWeakDevice()) return;
		const id = window.setTimeout(() => {
			try {
				const canvas = document.createElement("canvas");
				if (canvas.getContext("webgl", { failIfMajorPerformanceCaveat: true }) || canvas.getContext("experimental-webgl")) setWant3d(true);
			} catch {}
		}, 400);
		return () => window.clearTimeout(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-[calc(100svh-3.5rem-env(safe-area-inset-top))] min-h-[32rem] overflow-hidden bg-bg sm:h-[calc(100svh-4.25rem-env(safe-area-inset-top))]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				children: want3d ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThreeGuard, {
					fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroFallback, {}),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
						fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroFallback, {}),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HouseScene, { mode }, mode)
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroFallback, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-veil pointer-events-none absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-[calc(5.75rem+env(safe-area-inset-bottom))] sm:px-6 lg:pb-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: BRAND.logoSm,
						alt: "",
						width: 96,
						height: 96,
						className: "pointer-events-none mb-4 size-16 rounded-sm border border-line object-cover shadow-gold sm:mb-5 sm:size-24"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "gold-rule max-w-xs justify-start text-gold",
						children: t("hero_kicker")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display mt-3 max-w-xl text-[2.15rem] leading-[1.1] text-fg sm:text-6xl",
						children: lang === "hi" ? BRAND.taglineHi : BRAND.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-lg text-sm text-muted sm:text-base",
						children: BRAND.city
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pointer-events-auto mt-6 grid w-full grid-cols-1 gap-3 sm:mt-7 sm:flex sm:flex-wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: waUrl(visitMessage()),
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex min-h-12 touch-manipulation items-center justify-center rounded-full bg-gold px-5 text-sm font-medium text-bg",
								children: t("cta_whatsapp")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/homes",
								className: "inline-flex min-h-12 touch-manipulation items-center justify-center rounded-full border border-gold/50 px-5 text-sm text-gold-bright",
								children: t("cta_view_homes")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/agents",
								className: "hidden min-h-12 items-center justify-center rounded-full border border-line px-5 text-sm text-muted sm:inline-flex",
								children: t("cta_for_agents")
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pointer-events-auto mt-5 flex flex-wrap items-center gap-2 sm:mt-6",
						children: [
							[
								"night",
								"day",
								"drone"
							].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									setMode(m);
									setWant3d(true);
								},
								className: cn("min-h-11 touch-manipulation rounded-full border px-4 text-xs tracking-[0.16em] uppercase", mode === m && want3d ? "border-gold bg-gold/15 text-gold-bright" : "border-line text-muted"),
								children: t(m === "night" ? "cam_night" : m === "day" ? "cam_day" : "cam_drone")
							}, m)),
							want3d ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setWant3d(true),
								className: "min-h-11 touch-manipulation rounded-full border border-gold/40 px-4 text-xs tracking-[0.16em] text-gold uppercase",
								children: "3D"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-1 hidden text-[0.7rem] tracking-wide text-muted uppercase sm:inline",
								children: t("hero_preview")
							})
						]
					})
				]
			})
		]
	});
}
function HeroFallback() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "size-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/media/logo-poster.jpg",
			alt: "",
			className: "size-full object-cover",
			fetchPriority: "high"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-bg/40" })]
	});
}
function Home() {
	const { t, lang } = useI18n();
	const featured = useListings().filter((l) => l.status !== "sold").slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HouseHero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "gold-rule max-w-sm",
					children: BRAND.city
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl text-fg sm:text-5xl",
						children: t("inventory_title")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/homes",
						className: "inline-flex min-h-11 items-center text-sm tracking-wide text-gold uppercase",
						children: t("cta_view_homes")
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-muted",
					children: t("inventory_sub")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3",
					children: featured.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListingCard, { listing: l }, l.slug))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-line bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-2 md:gap-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "gold-rule max-w-xs justify-start",
						children: BRAND.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-4 text-3xl sm:text-4xl",
						children: t("about_title")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted",
						children: lang === "hi" ? "रीजेंट वे गुरुग्राम में निजी फ़्लैट और पेंटहाउस की प्लेटफ़ॉर्म है। हर विज़िट नामित सलाहकार के साथ — कोई फ़्लोटिंग ब्रोकर नहीं।" : "Regent Way is a platform for private flats and penthouses in Gurugram. Every viewing is with a named advisor — no floating brokers."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/about",
						className: "mt-6 inline-flex min-h-12 items-center text-sm tracking-wide text-gold uppercase",
						children: t("nav_about")
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-xl border border-line",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/interiors/drone.jpg",
						alt: "",
						className: "aspect-[4/3] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "preview-ribbon",
						children: t("preview_asset")
					})]
				})]
			})
		})
	] });
}
//#endregion
export { Home as component };
