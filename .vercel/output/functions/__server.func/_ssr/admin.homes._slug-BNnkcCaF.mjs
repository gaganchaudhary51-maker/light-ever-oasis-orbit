import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@react-three/drei+[...].mjs";
import { v as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as useI18n, n as Route } from "./router-XbtlI9Go.mjs";
import { c as removeGalleryPhoto, d as setListingPhoto, f as useListing, l as removeListing, n as TYPES, r as addGalleryPhoto, s as isSeedListing, t as STATUSES, u as saveListing } from "./listing-store-CXWTTLGi.mjs";
import { t as AGENTS } from "./agents-CCndUtuv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.homes._slug-BNnkcCaF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EditorInnerFromRoute() {
	const { slug } = Route.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditorInner, { slug });
}
function EditorInner({ slug }) {
	const listing = useListing(slug);
	const { t, lang } = useI18n();
	const navigate = useNavigate();
	const [saved, setSaved] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (listing) setForm(listing);
	}, [listing]);
	if (!listing || !form) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl px-4 py-20 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted",
			children: "Home not found."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/admin/homes",
			className: "mt-4 inline-block text-gold",
			children: t("admin_homes")
		})]
	});
	const patch = (p) => setForm({
		...form,
		...p
	});
	const save = () => {
		saveListing(slug, {
			name: form.name,
			nameHi: form.nameHi,
			type: form.type,
			locality: form.locality,
			localityHi: form.localityHi,
			status: form.status,
			priceBand: form.priceBand,
			priceBandHi: form.priceBandHi,
			size: form.size,
			sizeHi: form.sizeHi,
			beds: form.beds,
			baths: form.baths,
			blurb: form.blurb,
			blurbHi: form.blurbHi,
			highlights: form.highlights,
			highlightsHi: form.highlightsHi,
			assignedAgentId: form.assignedAgentId
		});
		setSaved(true);
		window.setTimeout(() => setSaved(false), 1600);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 pb-20 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/admin/homes",
				className: "text-sm text-gold",
				children: ["← ", t("admin_homes")]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-4 text-4xl",
				children: t("edit_home")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: t("admin_photo")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-8 text-2xl",
				children: t("admin_cover")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoSlot, {
				src: listing.image,
				label: t("replace_photo"),
				onFile: (f) => void setListingPhoto(slug, "image", f)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-8 text-2xl",
				children: t("admin_gallery")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3",
				children: [listing.gallery.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoSlot, {
						src,
						label: `${i + 1}`,
						onFile: (f) => void setListingPhoto(slug, `gallery-${i}`, f)
					}), listing.gallery.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "absolute top-2 right-2 rounded-full bg-bg/80 px-2 py-1 text-[0.65rem] text-danger",
						onClick: () => removeGalleryPhoto(slug, i),
						children: "Delete"
					}) : null]
				}, `${src}-${i}`)), listing.gallery.length < 6 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex aspect-[3/2] cursor-pointer items-center justify-center rounded-xl border border-dashed border-line text-sm text-muted",
					children: [
						"+ ",
						t("upload_photo"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "file",
							accept: "image/*",
							className: "sr-only",
							onChange: (e) => {
								const f = e.target.files?.[0];
								if (f) addGalleryPhoto(slug, f);
								e.target.value = "";
							}
						})
					]
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: t("admin_360")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoSlot, {
					src: listing.panorama,
					label: t("replace_photo"),
					onFile: (f) => void setListingPhoto(slug, "panorama", f)
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: t("admin_drone_photo")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoSlot, {
					src: listing.drone,
					label: t("replace_photo"),
					onFile: (f) => void setListingPhoto(slug, "drone", f)
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-10 text-2xl",
				children: t("admin_details")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Name EN",
						value: form.name,
						onChange: (v) => patch({ name: v })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "नाम हिं",
						value: form.nameHi,
						onChange: (v) => patch({ nameHi: v })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs tracking-wide text-muted uppercase",
							children: "Type"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: "mt-1 min-h-12 w-full rounded-md border border-line bg-surface px-3",
							value: form.type,
							onChange: (e) => patch({ type: e.target.value }),
							children: TYPES.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: x,
								children: x
							}, x))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs tracking-wide text-muted uppercase",
							children: "Status"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: "mt-1 min-h-12 w-full rounded-md border border-line bg-surface px-3",
							value: form.status,
							onChange: (e) => patch({ status: e.target.value }),
							children: STATUSES.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: x,
								children: x
							}, x))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Locality EN",
						value: form.locality,
						onChange: (v) => patch({ locality: v })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "इलाका हिं",
						value: form.localityHi,
						onChange: (v) => patch({ localityHi: v })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Price EN",
						value: form.priceBand,
						onChange: (v) => patch({ priceBand: v })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "कीमत हिं",
						value: form.priceBandHi,
						onChange: (v) => patch({ priceBandHi: v })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Size EN",
						value: form.size,
						onChange: (v) => patch({ size: v })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "साइज़ हिं",
						value: form.sizeHi,
						onChange: (v) => patch({ sizeHi: v })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Beds",
						value: String(form.beds ?? ""),
						onChange: (v) => patch({ beds: Number(v) || void 0 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Baths",
						value: String(form.baths ?? ""),
						onChange: (v) => patch({ baths: Number(v) || void 0 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm sm:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs tracking-wide text-muted uppercase",
							children: "Agent"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: "mt-1 min-h-12 w-full rounded-md border border-line bg-surface px-3",
							value: form.assignedAgentId,
							onChange: (e) => patch({ assignedAgentId: e.target.value }),
							children: AGENTS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: a.id,
								children: [
									a.name,
									" · ",
									a.area
								]
							}, a.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm sm:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs tracking-wide text-muted uppercase",
							children: "Details EN"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: "mt-1 min-h-28 w-full rounded-md border border-line bg-surface px-3 py-2",
							value: form.blurb,
							onChange: (e) => patch({ blurb: e.target.value })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm sm:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs tracking-wide text-muted uppercase",
							children: "विवरण हिं"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: "mt-1 min-h-28 w-full rounded-md border border-line bg-surface px-3 py-2",
							value: form.blurbHi,
							onChange: (e) => patch({ blurbHi: e.target.value })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm sm:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs tracking-wide text-muted uppercase",
							children: "Highlights EN (one per line)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: "mt-1 min-h-24 w-full rounded-md border border-line bg-surface px-3 py-2",
							value: form.highlights.join("\n"),
							onChange: (e) => patch({ highlights: e.target.value.split("\n").map((s) => s.trim()).filter(Boolean) })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm sm:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs tracking-wide text-muted uppercase",
							children: "हाइलाइट हिं (हर लाइन)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: "mt-1 min-h-24 w-full rounded-md border border-line bg-surface px-3 py-2",
							value: form.highlightsHi.join("\n"),
							onChange: (e) => patch({ highlightsHi: e.target.value.split("\n").map((s) => s.trim()).filter(Boolean) })
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: save,
						className: "inline-flex min-h-12 items-center rounded-full bg-gold px-6 text-sm font-medium text-bg",
						children: saved ? t("saved") : t("save")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/homes/$slug",
						params: { slug },
						className: "inline-flex min-h-12 items-center rounded-full border border-line px-5 text-sm text-gold",
						children: lang === "hi" ? "साइट पर देखें" : "View on site"
					}),
					isSeedListing(slug) ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex min-h-12 items-center text-sm text-danger",
						onClick: () => {
							if (removeListing(slug)) navigate({ to: "/admin/homes" });
						},
						children: "Delete"
					})
				]
			})
		]
	});
}
function Field({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs tracking-wide text-muted uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			className: "mt-1 min-h-12 w-full rounded-md border border-line bg-surface px-3",
			value,
			onChange: (e) => onChange(e.target.value)
		})]
	});
}
function PhotoSlot({ src, label, onFile }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "relative mt-3 block cursor-pointer overflow-hidden rounded-xl border border-line",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt: "",
				className: "aspect-[3/2] w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute inset-x-0 bottom-0 bg-bg/70 px-3 py-2 text-center text-xs tracking-wide text-gold uppercase",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "file",
				accept: "image/*",
				className: "sr-only",
				onChange: (e) => {
					const f = e.target.files?.[0];
					if (f) onFile(f);
					e.target.value = "";
				}
			})
		]
	});
}
//#endregion
export { EditorInnerFromRoute as component };
