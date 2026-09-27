import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@react-three/drei+[...].mjs";
import { t as BRAND } from "./listings-BDrnreIt.mjs";
import { h as useI18n } from "./router-XbtlI9Go.mjs";
import { a as saveJson, r as loadJson } from "./storage-DnV0VhCQ.mjs";
import { t as PinGate } from "./PinGate-Bq78q1lR.mjs";
import { p as useListings } from "./listing-store-CXWTTLGi.mjs";
import { a as setAssignment, i as getAssignments, t as AGENTS } from "./agents-CCndUtuv.mjs";
import { t as SEED_LEADS } from "./leads-CqAOyt_l.mjs";
import { d as format, o as isSameWeek, r as parseISO } from "../_libs/date-fns.mjs";
import { t as DayPicker } from "../_libs/react-day-picker.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/crm-DUmWxIKa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CrmPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PinGate, {
		sessionKey: "crm",
		expected: (pin) => pin === BRAND.crmPin,
		hint: `Owner PIN for ${BRAND.owner}. Demo: ${BRAND.crmPin}`,
		title: "Mini CRM",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrmInner, {})
	});
}
function CrmInner() {
	const { t } = useI18n();
	const listings = useListings();
	const [leads, setLeads] = (0, import_react.useState)(SEED_LEADS);
	const [assign, setAssign] = (0, import_react.useState)({});
	const [day, setDay] = (0, import_react.useState)(/* @__PURE__ */ new Date());
	(0, import_react.useEffect)(() => {
		setLeads(loadJson("leads", SEED_LEADS));
		setAssign(getAssignments());
	}, []);
	const persist = (next) => {
		setLeads(next);
		saveJson("leads", next);
	};
	const now = /* @__PURE__ */ new Date();
	const weekLeads = leads.filter((l) => {
		try {
			return isSameWeek(parseISO(l.createdAt), now, { weekStartsOn: 1 });
		} catch {
			return false;
		}
	}).length;
	const visits = leads.filter((l) => l.visitOn).length;
	const dayKey = day ? format(day, "yyyy-MM-dd") : "";
	const visitsThatDay = leads.filter((l) => l.visitOn === dayKey);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 pb-16 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "gold-rule max-w-xs justify-start",
				children: BRAND.owner
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-3 text-4xl",
				children: "Owner dashboard"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: t("leads_week"),
						value: weekLeads
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: t("visits"),
						value: visits
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: t("available_units"),
						value: listings.filter((l) => l.status === "available").length
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-10 lg:grid-cols-[1fr_20rem]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Leads"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddLead, { onAdd: (lead) => persist([lead, ...leads]) })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 overflow-x-auto rounded-xl border border-line",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[52rem] text-left text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-raised text-xs tracking-wide text-muted uppercase",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-3",
									children: "Name"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-3",
									children: "Source"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-3",
									children: "Temp"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-3",
									children: "Listing"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-3",
									children: "Follow-up"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-3",
									children: "Notes"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: leads.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-line align-top",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-3 py-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: l.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted",
										children: l.phone
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-3 capitalize",
									children: l.source
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-3 uppercase",
									children: l.temp
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-3",
									children: listings.find((x) => x.slug === l.listingSlug)?.name ?? l.listingSlug
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-3 tabular-nums",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "date",
										className: "min-h-11 rounded-md border border-line bg-bg px-2",
										value: l.nextFollowUp,
										onChange: (e) => persist(leads.map((x) => x.id === l.id ? {
											...x,
											nextFollowUp: e.target.value
										} : x))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-3 text-muted",
									children: l.notes
								})
							]
						}, l.id)) })]
					})
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Site-visit calendar"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 rounded-xl border border-line bg-surface p-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayPicker, {
							mode: "single",
							selected: day,
							onSelect: setDay,
							className: "text-sm"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2 text-sm",
						children: visitsThatDay.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-muted",
							children: "No visits this day."
						}) : visitsThatDay.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-md border border-line px-3 py-2",
							children: [
								l.name,
								" · ",
								listings.find((x) => x.slug === l.listingSlug)?.name
							]
						}, l.id))
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-12 text-3xl",
				children: "Assign listings"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Portal agents only see homes assigned here."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 overflow-x-auto rounded-xl border border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[32rem] text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-raised text-xs tracking-wide text-muted uppercase",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-3",
								children: "Home"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-3",
								children: "Status"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-3",
								children: "Agent"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: listings.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-line",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-3",
								children: l.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-3 capitalize text-muted",
								children: l.status
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									className: "min-h-11 rounded-md border border-line bg-bg px-2",
									value: assign[l.slug] ?? l.assignedAgentId,
									onChange: (e) => setAssign(setAssignment(l.slug, e.target.value)),
									children: AGENTS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
										value: a.id,
										children: [
											a.name,
											" · ",
											a.area
										]
									}, a.id))
								})
							})
						]
					}, l.slug)) })]
				})
			})
		]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-line bg-surface p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs tracking-wide text-muted uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display mt-2 text-4xl tabular-nums text-gold-bright",
			children: value
		})]
	});
}
function AddLead({ onAdd }) {
	const { t } = useI18n();
	const listings = useListings();
	const [open, setOpen] = (0, import_react.useState)(false);
	const listing = listings[0];
	const agent = AGENTS[0];
	const empty = (0, import_react.useMemo)(() => ({
		name: "",
		phone: "",
		source: "whatsapp",
		temp: "warm",
		listingSlug: listing?.slug ?? "",
		agentId: agent?.id ?? "",
		nextFollowUp: format(/* @__PURE__ */ new Date(), "yyyy-MM-dd"),
		notes: ""
	}), [listing?.slug, agent?.id]);
	const [form, setForm] = (0, import_react.useState)(empty);
	if (!open) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: "min-h-11 rounded-full bg-gold px-4 text-sm font-medium text-bg",
		onClick: () => setOpen(true),
		children: t("add_lead")
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "grid gap-2 rounded-lg border border-line bg-surface p-3 sm:grid-cols-2",
		onSubmit: (e) => {
			e.preventDefault();
			onAdd({
				...form,
				id: `ld-${Date.now()}`,
				createdAt: format(/* @__PURE__ */ new Date(), "yyyy-MM-dd")
			});
			setForm(empty);
			setOpen(false);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				required: true,
				placeholder: "Name",
				className: "min-h-11 rounded-md border border-line bg-bg px-2",
				value: form.name,
				onChange: (e) => setForm({
					...form,
					name: e.target.value
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				required: true,
				placeholder: "Phone",
				className: "min-h-11 rounded-md border border-line bg-bg px-2",
				value: form.phone,
				onChange: (e) => setForm({
					...form,
					phone: e.target.value
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				className: "min-h-11 rounded-md border border-line bg-bg px-2",
				value: form.source,
				onChange: (e) => setForm({
					...form,
					source: e.target.value
				}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "whatsapp",
						children: "WhatsApp"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "web",
						children: "Web"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "agent",
						children: "Agent"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "ad",
						children: "Ad"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "walkin",
						children: "Walk-in"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				className: "min-h-11 rounded-md border border-line bg-bg px-2",
				value: form.temp,
				onChange: (e) => setForm({
					...form,
					temp: e.target.value
				}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "hot",
						children: "Hot"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "warm",
						children: "Warm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "cold",
						children: "Cold"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
				className: "min-h-11 rounded-md border border-line bg-bg px-2 sm:col-span-2",
				value: form.listingSlug,
				onChange: (e) => setForm({
					...form,
					listingSlug: e.target.value
				}),
				children: listings.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: l.slug,
					children: l.name
				}, l.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "min-h-11 rounded-full bg-gold text-sm font-medium text-bg",
				children: t("save")
			})
		]
	});
}
//#endregion
export { CrmPage as component };
