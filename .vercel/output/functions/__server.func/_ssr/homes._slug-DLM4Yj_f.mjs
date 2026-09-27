import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@react-three/drei+[...].mjs";
import { d as useRouterState, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as waUrl, s as residenceJsonLd, t as BRAND } from "./listings-BDrnreIt.mjs";
import { a as ChevronLeft, i as ChevronRight } from "../_libs/lucide-react.mjs";
import { d as listingShareText, f as priceMessage, h as useI18n, m as visitMessage, r as Route$1, u as brochureMessage } from "./router-XbtlI9Go.mjs";
import { f as useListing, o as isPreviewImage, p as useListings } from "./listing-store-CXWTTLGi.mjs";
import { n as TypeLabel, t as StatusBadge } from "./StatusBadge-MgAB59Oq.mjs";
import { t as ListingCard } from "./ListingCard-D_bzzkFZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/homes._slug-DLM4Yj_f.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PanoramaViewer({ src, alt }) {
	const { t } = useI18n();
	const ref = (0, import_react.useRef)(null);
	const [x, setX] = (0, import_react.useState)(50);
	const drag = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!ref.current) return;
		const onMove = (clientX) => {
			if (!drag.current) return;
			const dx = clientX - drag.current.start;
			const next = Math.max(0, Math.min(100, drag.current.origin - dx * .08));
			setX(next);
		};
		const up = () => {
			drag.current = null;
		};
		const move = (e) => onMove(e.clientX);
		window.addEventListener("pointermove", move);
		window.addEventListener("pointerup", up);
		return () => {
			window.removeEventListener("pointermove", move);
			window.removeEventListener("pointerup", up);
		};
	}, []);
	const nudge = (dir) => {
		setX((cur) => Math.max(0, Math.min(100, cur + dir * 12)));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "relative aspect-[16/9] min-h-56 cursor-ew-resize overflow-hidden rounded-lg border border-line bg-surface touch-none sm:aspect-[21/9] sm:min-h-48",
		onPointerDown: (e) => {
			drag.current = {
				start: e.clientX,
				origin: x
			};
		},
		role: "img",
		"aria-label": alt,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-cover bg-no-repeat",
				style: {
					backgroundImage: `url(${src})`,
					backgroundPosition: `${x}% 50%`,
					backgroundSize: "220% auto"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "preview-ribbon",
				children: t("preview_asset")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "absolute top-1/2 left-2 inline-flex size-11 -translate-y-1/2 touch-manipulation items-center justify-center rounded-full border border-line bg-bg/70 text-fg",
				onPointerDown: (e) => e.stopPropagation(),
				onClick: () => nudge(-1),
				"aria-label": "Look left",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "absolute top-1/2 right-2 inline-flex size-11 -translate-y-1/2 touch-manipulation items-center justify-center rounded-full border border-line bg-bg/70 text-fg",
				onPointerDown: (e) => e.stopPropagation(),
				onClick: () => nudge(1),
				"aria-label": "Look right",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "absolute right-3 bottom-3 rounded-full bg-bg/70 px-3 py-1 text-[0.65rem] tracking-wide text-muted uppercase",
				children: [
					t("swipe_360"),
					" · ",
					t("listing_360")
				]
			})
		]
	}) });
}
function DroneFlyover({ src }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-lg border border-line",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "drone-ken aspect-video bg-cover bg-center",
				style: { backgroundImage: `url(${src})` }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "preview-ribbon",
				children: t("preview_asset")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "absolute right-3 bottom-3 rounded-full bg-bg/70 px-3 py-1 text-[0.65rem] tracking-wide text-muted uppercase",
				children: t("listing_drone")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        .drone-ken {
          animation: dronePan 14s ease-in-out infinite alternate;
        }
        @keyframes dronePan {
          from { transform: scale(1.05) translate3d(0, 0, 0); }
          to { transform: scale(1.18) translate3d(-3%, -2%, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .drone-ken { animation: none; }
        }
      ` })
		]
	});
}
function HomeDetail() {
	const data = Route$1.useLoaderData();
	const listing = useListing(data.slug) ?? data.listing;
	const all = useListings();
	const searchStr = useRouterState({ select: (s) => s.location.searchStr });
	const fromAd = new URLSearchParams(searchStr).has("utm_source");
	const { t, lang } = useI18n();
	const [shot, setShot] = (0, import_react.useState)(0);
	if (!listing) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl px-4 py-20 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl",
			children: "Home not listed"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/homes",
			className: "mt-4 inline-block min-h-11 text-gold",
			children: "View homes"
		})]
	});
	const name = lang === "hi" ? listing.nameHi : listing.name;
	const more = all.filter((l) => l.slug !== listing.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify(residenceJsonLd(listing)) }
			}),
			fromAd ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-gold/40 bg-gold/10 px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-gold-bright",
					children: lang === "hi" ? "विज्ञापन से आए हैं। रीजेंट वे को व्हाट्सऐप करें।" : "You arrived from an ad. WhatsApp Regent Way for this home."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: waUrl(visitMessage(listing)),
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex min-h-11 touch-manipulation items-center rounded-full bg-gold px-4 text-sm font-medium text-bg",
					children: t("cta_whatsapp")
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs tracking-[0.2em] text-gold uppercase",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypeLabel, { type: listing.type }),
					" · ",
					lang === "hi" ? listing.localityHi : listing.locality
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex flex-wrap items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl sm:text-5xl",
					children: name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: listing.status })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-6 overflow-hidden rounded-xl border border-line sm:mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: listing.gallery[shot] ?? listing.image,
					alt: name,
					className: "aspect-[4/3] w-full object-cover sm:aspect-[3/2]"
				}), isPreviewImage(listing.gallery[shot] ?? listing.image) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "preview-ribbon",
					children: t("preview_asset")
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "-mx-4 mt-3 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
				children: listing.gallery.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setShot(i),
					className: "size-16 shrink-0 overflow-hidden rounded-md border border-line touch-manipulation sm:size-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src,
						alt: "",
						className: "size-full object-cover"
					})
				}, src + i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: lang === "hi" ? listing.blurbHi : listing.blurb
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 grid gap-2 sm:grid-cols-2",
						children: (lang === "hi" ? listing.highlightsHi : listing.highlights).map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-l border-gold/50 pl-3 text-sm text-fg",
							children: h
						}, h))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-8 grid grid-cols-2 gap-4 text-sm sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: t("listing_price")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-gold-bright",
								children: lang === "hi" ? listing.priceBandHi : listing.priceBand
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: t("listing_size")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: lang === "hi" ? listing.sizeHi : listing.size })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted",
								children: t("listing_locality")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: lang === "hi" ? listing.localityHi : listing.locality })] })
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "h-fit rounded-xl border border-line bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl text-gold-bright",
							children: BRAND.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: BRAND.city
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex flex-col gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: waUrl(visitMessage(listing)),
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex min-h-12 touch-manipulation items-center justify-center rounded-full bg-gold px-4 text-sm font-medium text-bg",
									children: t("cta_site_visit")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: waUrl(priceMessage(listing)),
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex min-h-12 touch-manipulation items-center justify-center rounded-full border border-gold/50 px-4 text-sm text-gold",
									children: t("cta_price")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: waUrl(brochureMessage(listing)),
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex min-h-12 touch-manipulation items-center justify-center rounded-full border border-line px-4 text-sm text-muted",
									children: t("cta_brochure")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `https://wa.me/?text=${encodeURIComponent(`${listingShareText(listing)}\n`)}`,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex min-h-12 touch-manipulation items-center justify-center rounded-full border border-line px-4 text-sm text-gold",
									children: t("cta_share")
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-8 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: t("listing_360")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanoramaViewer, {
						src: listing.panorama,
						alt: `${name} 360`
					})
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: t("listing_drone")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DroneFlyover, { src: listing.drone })
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: t("inventory_title")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-5 sm:grid-cols-3",
						children: more.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListingCard, {
							listing: l,
							compact: true
						}, l.slug))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/homes",
						className: "mt-6 inline-flex min-h-11 items-center text-sm text-gold",
						children: t("cta_view_homes")
					})
				]
			})
		]
	});
}
//#endregion
export { HomeDetail as component };
