import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@react-three/drei+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as LISTINGS, t as BRAND } from "./listings-BDrnreIt.mjs";
import { h as useI18n } from "./router-XbtlI9Go.mjs";
import { a as saveJson, n as downloadCsv, r as loadJson } from "./storage-DnV0VhCQ.mjs";
import { n as SEED_SHEET } from "./agents-CCndUtuv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/agents.sheet-CZRf5iIb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STATUSES = [
	"New",
	"Hot",
	"Visit",
	"Won",
	"Lost"
];
function AgentSheetPage() {
	const { t } = useI18n();
	const [rows, setRows] = (0, import_react.useState)(SEED_SHEET);
	(0, import_react.useEffect)(() => {
		setRows(loadJson("agent-sheet", SEED_SHEET));
	}, []);
	const persist = (next) => {
		setRows(next);
		saveJson("agent-sheet", next);
	};
	const update = (id, patch) => {
		persist(rows.map((r) => r.id === id ? {
			...r,
			...patch
		} : r));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "gold-rule max-w-xs justify-start",
						children: "DEMO"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display mt-3 text-4xl",
						children: t("agents_sheet")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 max-w-xl text-sm text-gold-bright",
						children: [
							"Sample names only. Real contact is ",
							BRAND.owner,
							" ",
							BRAND.phoneDisplay,
							". Photo / price change: Owner login → Homes & photos — not this sheet."
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 rounded-full border border-line px-4 text-sm text-gold",
						onClick: () => downloadCsv("regent-way-agent-sheet.csv", [
							"Agent",
							"Phone",
							"Area",
							"Listing",
							"Lead",
							"Status",
							"Commission %"
						], rows.map((r) => [
							r.agentName,
							r.phone,
							r.area,
							r.listingSlug,
							r.leadName,
							r.status,
							r.commission
						])),
						children: t("agents_export")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/agents/kit",
						className: "inline-flex min-h-11 items-center text-sm text-muted",
						children: t("agents_kit")
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 overflow-x-auto rounded-xl border border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[56rem] text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-raised text-xs tracking-wide text-muted uppercase",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-3",
								children: "Agent"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-3",
								children: "Phone"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-3",
								children: "Area"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-3",
								children: "Listing"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-3",
								children: "Lead"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-3",
								children: "Status"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-3",
								children: "Comm %"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-line",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "min-h-11 w-full rounded-md border border-line bg-bg px-2 text-fg",
									value: r.agentName,
									onChange: (e) => update(r.id, { agentName: e.target.value })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "min-h-11 w-32 rounded-md border border-line bg-bg px-2 text-fg",
									value: r.phone,
									onChange: (e) => update(r.id, { phone: e.target.value })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "min-h-11 w-32 rounded-md border border-line bg-bg px-2 text-fg",
									value: r.area,
									onChange: (e) => update(r.id, { area: e.target.value })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									className: "min-h-11 rounded-md border border-line bg-bg px-2 text-fg",
									value: r.listingSlug,
									onChange: (e) => update(r.id, { listingSlug: e.target.value }),
									children: LISTINGS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: l.slug,
										children: l.name
									}, l.slug))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "min-h-11 w-36 rounded-md border border-line bg-bg px-2 text-fg",
									value: r.leadName,
									onChange: (e) => update(r.id, { leadName: e.target.value })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									className: "min-h-11 rounded-md border border-line bg-bg px-2 text-fg",
									value: r.status,
									onChange: (e) => update(r.id, { status: e.target.value }),
									children: STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									step: "0.25",
									className: "min-h-11 w-20 rounded-md border border-line bg-bg px-2 text-fg tabular-nums",
									value: r.commission,
									onChange: (e) => update(r.id, { commission: Number(e.target.value) })
								})
							})
						]
					}, r.id)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xs text-muted",
				children: "Edits stay in this browser. Export CSV into Google Sheets when you are ready."
			})
		]
	});
}
//#endregion
export { AgentSheetPage as component };
