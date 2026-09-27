import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@react-three/drei+[...].mjs";
import { l as waUrl, t as BRAND } from "./listings-BDrnreIt.mjs";
import { d as listingShareText, h as useI18n, m as visitMessage } from "./router-XbtlI9Go.mjs";
import { a as saveJson, i as loadSession, r as loadJson } from "./storage-DnV0VhCQ.mjs";
import { t as PinGate } from "./PinGate-Bq78q1lR.mjs";
import { p as useListings } from "./listing-store-CXWTTLGi.mjs";
import { i as getAssignments, r as agentByPin } from "./agents-CCndUtuv.mjs";
import { t as SEED_LEADS } from "./leads-CqAOyt_l.mjs";
import { d as format } from "../_libs/date-fns.mjs";
import { t as ListingCard } from "./ListingCard-D_bzzkFZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portal-DLqHSCOD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PortalPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PinGate, {
		sessionKey: "portal",
		expected: (pin) => Boolean(agentByPin(pin)),
		hint: "Agent PIN. Demo: 4401 (Rohit) · 4402 · 4403 · 4404 · 4405",
		title: "Agent portal",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalInner, {})
	});
}
function PortalInner() {
	const { t } = useI18n();
	const pin = loadSession("portal") ?? "";
	const agent = agentByPin(pin);
	if (!agent) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalBody, {
		agent,
		tAdd: t("add_lead")
	});
}
function PortalBody({ agent, tAdd }) {
	const all = useListings();
	const map = getAssignments();
	const assigned = all.filter((l) => map[l.slug] === agent.id);
	const [leads, setLeads] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		const all = loadJson("leads", SEED_LEADS);
		setLeads(all.filter((l) => l.agentId === agent.id));
	}, [agent.id]);
	const add = (name, phone, slug) => {
		const all = loadJson("leads", SEED_LEADS);
		const lead = {
			id: `ld-${Date.now()}`,
			name,
			phone,
			source: "agent",
			temp: "warm",
			listingSlug: slug,
			agentId: agent.id,
			nextFollowUp: format(/* @__PURE__ */ new Date(), "yyyy-MM-dd"),
			notes: `Added by ${agent.name}`,
			createdAt: format(/* @__PURE__ */ new Date(), "yyyy-MM-dd")
		};
		saveJson("leads", [lead, ...all]);
		setLeads((prev) => [lead, ...prev]);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 pb-16 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "gold-rule max-w-xs justify-start",
				children: agent.area
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-3 text-4xl",
				children: agent.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-muted",
				children: [
					"Commission ",
					agent.commission,
					"% · WhatsApp ",
					BRAND.phoneDisplay
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-10 text-3xl",
				children: "Assigned inventory"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: assigned.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListingCard, { listing: l }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: waUrl(`${listingShareText(l)}\nShared by agent ${agent.name}`),
					target: "_blank",
					rel: "noreferrer",
					className: "mt-2 inline-flex min-h-11 items-center text-sm text-gold",
					children: "Share + track on WhatsApp"
				})] }, l.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-12 text-3xl",
				children: "My leads"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddOwnLead, {
				listings: assigned.length ? assigned : all,
				onAdd: add,
				label: tAdd
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 divide-y divide-line rounded-xl border border-line",
				children: leads.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							l.name,
							" · ",
							l.phone
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted",
							children: [
								all.find((x) => x.slug === l.listingSlug)?.name,
								" · ",
								l.temp
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: waUrl(visitMessage(all.find((x) => x.slug === l.listingSlug))),
							className: "text-gold",
							target: "_blank",
							rel: "noreferrer",
							children: "WhatsApp"
						})
					]
				}, l.id))
			})
		]
	});
}
function AddOwnLead({ listings, onAdd, label }) {
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [slug, setSlug] = (0, import_react.useState)(listings[0]?.slug ?? "");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "mt-4 grid gap-2 sm:grid-cols-4",
		onSubmit: (e) => {
			e.preventDefault();
			onAdd(name, phone, slug);
			setName("");
			setPhone("");
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				required: true,
				placeholder: "Lead name",
				className: "min-h-11 rounded-md border border-line bg-surface px-3",
				value: name,
				onChange: (e) => setName(e.target.value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				required: true,
				placeholder: "Phone",
				className: "min-h-11 rounded-md border border-line bg-surface px-3",
				value: phone,
				onChange: (e) => setPhone(e.target.value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
				className: "min-h-11 rounded-md border border-line bg-surface px-3",
				value: slug,
				onChange: (e) => setSlug(e.target.value),
				children: listings.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: l.slug,
					children: l.name
				}, l.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "min-h-11 rounded-full bg-gold text-sm font-medium text-bg",
				children: label
			})
		]
	});
}
//#endregion
export { PortalPage as component };
