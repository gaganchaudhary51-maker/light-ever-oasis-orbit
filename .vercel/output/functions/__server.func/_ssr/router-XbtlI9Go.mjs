import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@react-three/drei+[...].mjs";
import { _ as createRootRoute, b as useRouter, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as listingBySlug, c as waPlain, l as waUrl, o as localBusinessJsonLd, r as faqJsonLd, t as BRAND } from "./listings-BDrnreIt.mjs";
import { n as createServerFn, r as getServerFnById, t as TSS_SERVER_FUNCTION } from "./ssr.mjs";
import { n as TriangleAlert, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-XbtlI9Go.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var STRINGS = {
	en: {
		nav_homes: "Homes",
		nav_about: "About",
		nav_agents: "For Agents",
		nav_contact: "Contact",
		nav_whatsapp: "WhatsApp",
		nav_crm: "CRM",
		nav_ads: "Ads kit",
		nav_portal: "Agent portal",
		nav_gbp: "Google profile",
		cta_whatsapp: "WhatsApp",
		cta_view_homes: "View Homes",
		cta_for_agents: "For Agents",
		cta_site_visit: "Book a viewing",
		cta_brochure: "Ask for brochure",
		cta_price: "Ask price",
		cta_share: "Share on WhatsApp",
		hero_kicker: "Gurugram · Flats & penthouses",
		hero_tagline: "Flats and penthouses in Gurugram.",
		hero_preview: "Preview stills · marked as preview assets",
		cam_day: "Day",
		cam_night: "Night",
		cam_drone: "Drone",
		status_available: "Available",
		status_hold: "Hold",
		status_sold: "Sold",
		type_house: "Flat",
		type_duplex: "Penthouse",
		type_plot: "Flat",
		type_flat: "Flat",
		type_penthouse: "Penthouse",
		filter_all: "All",
		listing_size: "Size",
		listing_price: "Price band",
		listing_locality: "Locality",
		listing_share: "Share",
		listing_360: "360 interior",
		listing_drone: "Drone flyover",
		preview_asset: "Preview asset",
		about_title: "About Regent Way",
		agents_title: "For Agents",
		agents_sheet: "Agent sheet",
		agents_kit: "Printable kit",
		agents_export: "Export CSV",
		contact_title: "Contact",
		footer_maps: "Open in Google Maps",
		footer_city: "Gurugram, Haryana",
		sticky_wa: "Chat on WhatsApp",
		lang_en: "EN",
		lang_hi: "हिं",
		inventory_title: "Homes in Gurugram",
		inventory_sub: "Private flats and penthouses. WhatsApp Regent Way for a viewing.",
		menu: "Menu",
		close: "Close",
		nap_hours: "Hours",
		available_units: "Available units",
		leads_week: "Leads this week",
		visits: "Viewings",
		unlock: "Unlock",
		pin_label: "PIN",
		sign_out: "Sign out",
		add_lead: "Add lead",
		save: "Save",
		copy: "Copy",
		copied: "Copied",
		owner_login: "Owner login",
		admin_title: "Owner dashboard",
		admin_sub: "Desk only. PIN 7722. Customers never see this page.",
		admin_homes: "Homes & photos",
		admin_homes_help: "Change price, status, details and upload real photos. Goes live on the website at once.",
		admin_crm: "CRM / leads",
		admin_crm_help: "WhatsApp leads, hot-warm-cold, viewing calendar, assign homes to agents.",
		admin_ads: "Ads kit",
		admin_ads_help: "Ready Google + Facebook ad texts to copy. Not a customer page.",
		admin_gbp: "Google profile kit",
		admin_gbp_help: "Name, phone, address, photo captions to paste into Google Business.",
		admin_portal: "Agent portal",
		admin_portal_help: "Agents login with their own PIN (4401–4405) and see only assigned homes.",
		admin_agents: "Agent sheet",
		admin_wa: "WhatsApp messages",
		admin_photo: "Tap a photo to replace it",
		admin_cover: "Cover photo",
		admin_gallery: "Gallery",
		admin_360: "360 photo",
		admin_drone_photo: "Drone photo",
		add_home: "Add home",
		edit_home: "Edit home",
		saved: "Saved",
		upload_photo: "Upload photo",
		replace_photo: "Replace photo",
		admin_details: "Details",
		admin_guide: "How to run",
		admin_guide_help: "Daily steps: photos, sold status, WhatsApp, viewings.",
		ask_ai: "Ask AI",
		swipe_360: "Swipe"
	},
	hi: {
		nav_homes: "घर",
		nav_about: "हमारे बारे में",
		nav_agents: "एजेंट्स के लिए",
		nav_contact: "संपर्क",
		nav_whatsapp: "व्हाट्सऐप",
		nav_crm: "सीआरएम",
		nav_ads: "एड्स किट",
		nav_portal: "एजेंट पोर्टल",
		nav_gbp: "गूगल प्रोफ़ाइल",
		cta_whatsapp: "व्हाट्सऐप",
		cta_view_homes: "घर देखें",
		cta_for_agents: "एजेंट्स के लिए",
		cta_site_visit: "विज़िट बुक करें",
		cta_brochure: "ब्रोक्योर माँगें",
		cta_price: "कीमत पूछें",
		cta_share: "व्हाट्सऐप पर शेयर करें",
		hero_kicker: "गुरुग्राम · फ़्लैट और पेंटहाउस",
		hero_tagline: "गुरुग्राम में फ़्लैट और पेंटहाउस।",
		hero_preview: "प्रीव्यू तस्वीरें · प्रीव्यू एसेट हैं",
		cam_day: "दिन",
		cam_night: "रात",
		cam_drone: "ड्रोन",
		status_available: "उपलब्ध",
		status_hold: "होल्ड",
		status_sold: "बिक चुका",
		type_house: "फ़्लैट",
		type_duplex: "पेंटहाउस",
		type_plot: "फ़्लैट",
		type_flat: "फ़्लैट",
		type_penthouse: "पेंटहाउस",
		filter_all: "सभी",
		listing_size: "साइज़",
		listing_price: "कीमत",
		listing_locality: "इलाका",
		listing_share: "शेयर",
		listing_360: "360 इंटीरियर",
		listing_drone: "ड्रोन फ्लायओवर",
		preview_asset: "प्रीव्यू एसेट",
		about_title: "रीजेंट वे के बारे में",
		agents_title: "एजेंट्स के लिए",
		agents_sheet: "एजेंट शीट",
		agents_kit: "प्रिंट किट",
		agents_export: "CSV निकालें",
		contact_title: "संपर्क",
		footer_maps: "गूगल मैप खोलें",
		footer_city: "गुरुग्राम, हरियाणा",
		sticky_wa: "व्हाट्सऐप पर बात करें",
		lang_en: "EN",
		lang_hi: "हिं",
		inventory_title: "गुरुग्राम के घर",
		inventory_sub: "निजी फ़्लैट और पेंटहाउस। विज़िट के लिए रीजेंट वे को व्हाट्सऐप करें।",
		menu: "मेनू",
		close: "बंद",
		nap_hours: "समय",
		available_units: "उपलब्ध यूनिट",
		leads_week: "इस हफ्ते लीड",
		visits: "विज़िट",
		unlock: "खोलें",
		pin_label: "पिन",
		sign_out: "साइन आउट",
		add_lead: "लीड जोड़ें",
		save: "सेव",
		copy: "कॉपी",
		copied: "कॉपी हो गया",
		owner_login: "मालिक लॉगिन",
		admin_title: "मालिक डैशबोर्ड",
		admin_sub: "केवल डेस्क। पिन 7722। ग्राहकों को यह पेज नहीं दिखता।",
		admin_homes: "घर और फ़ोटो",
		admin_homes_help: "कीमत, स्टेटस, विवरण बदलें और असली फ़ोटो डालें। वेबसाइट पर तुरंत दिखेगा।",
		admin_crm: "सीआरएम / लीड",
		admin_crm_help: "व्हाट्सऐप लीड, हॉट-वॉर्म-कोल्ड, विज़िट कैलेंडर, घर एजेंट को असाइन करें।",
		admin_ads: "एड्स किट",
		admin_ads_help: "Google और Facebook विज्ञापन के तैयार टेक्स्ट — कॉपी करके चलाएँ। ग्राहक पेज नहीं है।",
		admin_gbp: "गूगल प्रोफ़ाइल किट",
		admin_gbp_help: "नाम, फ़ोन, पता, फ़ोटो कैप्शन — गूगल बिज़नेस में पेस्ट करें।",
		admin_portal: "एजेंट पोर्टल",
		admin_portal_help: "एजेंट अपने पिन (4401–4405) से लॉगिन करते हैं। सिर्फ़ असाइन घर दिखते हैं।",
		admin_agents: "एजेंट शीट",
		admin_wa: "व्हाट्सऐप मैसेज",
		admin_photo: "फ़ोटो बदलने के लिए उस पर टैप करें",
		admin_cover: "कवर फ़ोटो",
		admin_gallery: "गैलरी",
		admin_360: "360 फ़ोटो",
		admin_drone_photo: "ड्रोन फ़ोटो",
		add_home: "घर जोड़ें",
		edit_home: "घर संपादित करें",
		saved: "सेव हो गया",
		upload_photo: "फ़ोटो अपलोड",
		replace_photo: "फ़ोटो बदलें",
		admin_details: "विवरण",
		admin_guide: "कैसे चलाएँ",
		admin_guide_help: "रोज़ का काम: फ़ोटो, सोल्ड, व्हाट्सऐप, विज़िट।",
		ask_ai: "AI से पूछें",
		swipe_360: "स्वाइप"
	}
};
var I18nContext = (0, import_react.createContext)(null);
function I18nProvider({ children }) {
	const [lang, setLangState] = (0, import_react.useState)("en");
	(0, import_react.useEffect)(() => {
		const saved = window.localStorage.getItem("rw.v1.lang");
		if (saved === "en" || saved === "hi") setLangState(saved);
	}, []);
	const setLang = (next) => {
		setLangState(next);
		window.localStorage.setItem("rw.v1.lang", next);
	};
	const value = (0, import_react.useMemo)(() => ({
		lang,
		setLang,
		t: (key) => STRINGS[lang][key]
	}), [lang]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nContext.Provider, {
		value,
		children
	});
}
function useI18n() {
	const ctx = (0, import_react.useContext)(I18nContext);
	if (!ctx) throw new Error("useI18n outside provider");
	return ctx;
}
function visitMessage(listing) {
	if (!listing) return `Namaste, I want a viewing with ${BRAND.name}, Gurugram — flats / penthouses.`;
	return `Namaste, I want a viewing for ${listing.name} (${listing.locality}). — from the ${BRAND.name} site.`;
}
function priceMessage(listing) {
	if (!listing) return `Namaste, please share current price bands for available flats and penthouses in Gurugram. — ${BRAND.name}`;
	return `Namaste, please share the latest price for ${listing.name} (${listing.locality}, ${listing.size}). — from the ${BRAND.name} site.`;
}
function brochureMessage(listing) {
	if (!listing) return `Namaste, please send the ${BRAND.name} brochure on WhatsApp.`;
	return `Namaste, please send the brochure / floor notes for ${listing.name}.`;
}
function agentIntroMessage() {
	return `Namaste, I am a property agent in Gurugram and would like to work with ${BRAND.name}. Please share the agent kit.`;
}
function listingShareText(listing) {
	return `${listing.name} — ${listing.locality}\n${listing.type === "penthouse" ? "Penthouse" : "Flat"} · ${listing.size}\nPrice band: ${listing.priceBand}\nStatus: ${listing.status}\n\nWhatsApp ${BRAND.name}: +${BRAND.phoneE164}\n${BRAND.name}`;
}
var WA_TEMPLATES = [
	{
		id: "visit",
		title: "Viewing",
		titleHi: "विज़िट",
		body: visitMessage()
	},
	{
		id: "price",
		title: "Price",
		titleHi: "कीमत",
		body: priceMessage()
	},
	{
		id: "brochure",
		title: "Brochure",
		titleHi: "ब्रोक्योर",
		body: brochureMessage()
	},
	{
		id: "agent",
		title: "Agent intro",
		titleHi: "एजेंट परिचय",
		body: agentIntroMessage()
	}
];
var REVIEW_REQUESTS = [
	`Namaste, thank you for visiting ${BRAND.name}. If the viewing felt right, a Google review helps the next Gurugram family find us.`,
	`Grateful you came to Golf Course Road. A short Google review would mean a lot to our desk.`,
	`Thank you for considering ${BRAND.name}. When you have a minute, a Google review with Gurugram in the text helps neighbours trust us.`,
	`Aapke visit ke liye dhanyavaad. Agar flat / penthouse pasand aaya ho to Google par 2 line likh dijiye — ${BRAND.name}, Gurugram.`,
	`We handed the keys. If the home feels right, a Google review is the best referral. — ${BRAND.name}`,
	`If our advisor was on time and clear, please say so on Google. It keeps Gurugram families safe from unknown brokers. — ${BRAND.name}`
];
var PHOTO_CAPTIONS = [
	"The Regent Penthouse dusk — Golf Course Road, wraparound terrace, Gurugram.",
	"DLF Crest Residence — stacked living, gold balcony rails, Phase 5.",
	"Sector 54 Sky Villa — quiet contemporary penthouse, gold linear light.",
	"Sohna Road Residence — gated 3 BHK, papers ready.",
	"MG Road Maisonette — high ceilings, city address.",
	"Sector 43 Courtyard Flat — compact 3 BHK with garden court.",
	"Double-height living, black marble floors (preview interior).",
	"Master bedroom, gold-trimmed headboard (preview interior).",
	"Kitchen, black stone and gold fittings (preview interior).",
	"Drone dusk over a Gurugram tower (preview aerial)."
];
var GBP_COPY = {
	businessName: BRAND.name,
	category: `${BRAND.gbpCategoryPrimary} / ${BRAND.gbpCategorySecondary}`,
	address: BRAND.addressLine,
	phone: BRAND.phoneDisplay,
	website: "https://tundra-frost-cactus.grok.me",
	hours: BRAND.hoursEn,
	description: `${BRAND.name} is a luxury residential platform in Gurugram, Haryana. We list private flats and penthouses — Golf Course Road, DLF Phase 5, Sector 54, MG Road and Sohna Road. ${BRAND.tagline} Viewings on WhatsApp ${BRAND.phoneDisplay}.`
};
function utmListingUrl(listing, source, medium, campaign) {
	const params = new URLSearchParams({
		utm_source: source,
		utm_medium: medium,
		utm_campaign: campaign,
		utm_content: listing.slug
	});
	return `/homes/${listing.slug}?${params.toString()}`;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var NAV = [
	{
		to: "/homes",
		key: "nav_homes"
	},
	{
		to: "/about",
		key: "nav_about"
	},
	{
		to: "/agents",
		key: "nav_agents"
	},
	{
		to: "/contact",
		key: "nav_contact"
	}
];
function SiteHeader() {
	const { t, lang, setLang } = useI18n();
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const onHome = pathname === "/";
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = prev;
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-40 border-b border-line/80 pt-[env(safe-area-inset-top)]", onHome ? "bg-bg/40 backdrop-blur-md" : "bg-bg/92 backdrop-blur-md"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 px-4 sm:h-[4.25rem] sm:gap-3 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex min-w-0 items-center gap-2.5",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: BRAND.logoSm,
						alt: "",
						width: 44,
						height: 44,
						className: "size-10 rounded-sm border border-line object-cover sm:size-11"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display block truncate text-[1.05rem] leading-none tracking-wide text-gold-bright sm:text-xl",
							children: BRAND.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 block text-[0.62rem] tracking-[0.18em] text-muted uppercase sm:text-[0.65rem] sm:tracking-[0.22em]",
							children: BRAND.city
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-6 lg:flex",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: cn("text-sm tracking-wide text-muted transition-colors duration-200 hover:text-gold-bright", pathname.startsWith(item.to) && "text-gold-bright"),
						children: t(item.key)
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 sm:gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex overflow-hidden rounded-full border border-line text-[0.7rem] font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: cn("min-h-11 min-w-11 touch-manipulation px-2.5", lang === "en" ? "bg-gold text-bg" : "text-muted"),
								onClick: () => setLang("en"),
								"aria-pressed": lang === "en",
								children: t("lang_en")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: cn("min-h-11 min-w-11 touch-manipulation px-2.5", lang === "hi" ? "bg-gold text-bg" : "text-muted"),
								onClick: () => setLang("hi"),
								"aria-pressed": lang === "hi",
								children: t("lang_hi")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: waUrl(visitMessage()),
							target: "_blank",
							rel: "noreferrer",
							className: "hidden min-h-11 items-center rounded-full bg-gold px-4 text-sm font-medium text-bg transition-opacity duration-150 hover:opacity-90 lg:inline-flex",
							children: t("cta_whatsapp")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex size-11 touch-manipulation items-center justify-center rounded-full border border-line text-fg lg:hidden",
							"aria-label": open ? t("close") : t("menu"),
							"aria-expanded": open,
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})
					]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-x-0 top-[calc(3.5rem+env(safe-area-inset-top))] bottom-0 z-40 overflow-y-auto border-t border-line bg-bg lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex min-h-full flex-col px-4 py-4 pb-[calc(6.5rem+env(safe-area-inset-bottom))]",
				children: [
					NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "flex min-h-14 items-center border-b border-line text-lg text-fg",
						onClick: () => setOpen(false),
						children: t(item.key)
					}, item.to)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/whatsapp",
						className: "flex min-h-14 items-center border-b border-line text-lg text-gold",
						onClick: () => setOpen(false),
						children: t("nav_whatsapp")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: waUrl(visitMessage()),
						target: "_blank",
						rel: "noreferrer",
						className: "mt-6 inline-flex min-h-14 touch-manipulation items-center justify-center rounded-full bg-gold px-4 text-base font-medium text-bg",
						children: [
							t("cta_whatsapp"),
							" · ",
							BRAND.phoneDisplay
						]
					})
				]
			})
		}) : null]
	});
}
function SiteFooter() {
	const { t, lang } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-line bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: BRAND.logoSm,
						alt: "",
						width: 64,
						height: 64,
						className: "mb-4 size-16 rounded-sm border border-line object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl text-gold-bright",
						children: BRAND.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: lang === "hi" ? BRAND.taglineHi : BRAND.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted",
						children: t("footer_city")
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "gold-rule mb-4 max-w-48 justify-start",
							children: t("contact_title")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-fg",
							children: BRAND.addressLine
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "mt-2 flex min-h-11 items-center text-gold hover:text-gold-bright",
							href: `tel:+${BRAND.phoneE164}`,
							children: BRAND.phoneDisplay
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "flex min-h-11 items-center text-gold hover:text-gold-bright",
							href: waPlain(),
							target: "_blank",
							rel: "noreferrer",
							children: "WhatsApp"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "mt-2 inline-flex min-h-11 items-center text-muted underline decoration-line underline-offset-4 hover:text-gold",
							href: BRAND.mapsUrl,
							target: "_blank",
							rel: "noreferrer",
							children: t("footer_maps")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "gold-rule mb-4 max-w-48 justify-start",
							children: t("nap_hours")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted",
							children: lang === "hi" ? BRAND.hoursHi : BRAND.hoursEn
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-col",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/homes",
									className: "flex min-h-11 items-center text-muted hover:text-gold",
									children: t("nav_homes")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/qr",
									className: "flex min-h-11 items-center text-muted hover:text-gold",
									children: "QR · Google review"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/whatsapp",
									className: "flex min-h-11 items-center text-muted hover:text-gold",
									children: t("nav_whatsapp")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/agents",
									className: "flex min-h-11 items-center text-muted hover:text-gold",
									children: t("nav_agents")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/admin",
									className: "mt-2 flex min-h-11 items-center text-xs tracking-wide text-muted/80 uppercase hover:text-gold",
									children: t("owner_login")
								})
							]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-line py-4 text-center text-xs tracking-wide text-muted",
			children: [
				BRAND.name,
				" · ",
				BRAND.city,
				" · NAP ",
				BRAND.phoneDisplay
			]
		})]
	});
}
function StickyWhatsApp() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: waUrl(visitMessage()),
		target: "_blank",
		rel: "noreferrer",
		"aria-label": t("sticky_wa"),
		className: "no-print hidden min-h-12 min-w-12 items-center gap-2 rounded-full bg-gold px-4 py-3 text-sm font-medium text-bg shadow-gold transition-transform duration-150 hover:scale-[1.02] lg:fixed lg:right-6 lg:bottom-6 lg:z-50 lg:inline-flex",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppGlyph, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("cta_whatsapp") })]
	});
}
function WhatsAppGlyph() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className: "size-5 fill-current",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.02zm-7.01 15.24h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.42 5.82c0 4.54-3.7 8.23-8.25 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.8-.79.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.10-.23-.17-.48-.29z" })
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var askDks = createServerFn({ method: "POST" }).validator((input) => ({ q: String(input?.q ?? "").trim().slice(0, 400) })).handler(createSsrRpc("47f72697fe44098b56c9c706307251f6941e919b8e120b757fa68d5955387f78"));
function AskDks() {
	const { lang, t } = useI18n();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [q, setQ] = (0, import_react.useState)("");
	const [a, setA] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const send = async () => {
		if (!q.trim() || busy) return;
		setBusy(true);
		setA("");
		try {
			const res = await askDks({ data: { q } });
			setA(res.ok ? res.text : res.error);
		} catch {
			setA(lang === "hi" ? "AI band. WhatsApp karo." : "AI unavailable. WhatsApp Regent Way.");
		} finally {
			setBusy(false);
		}
	};
	const panel = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-line bg-surface p-4 shadow-gold",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg text-gold-bright",
					children: lang === "hi" ? "AI सहायक" : "AI desk"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: lang === "hi" ? "Broker ki jagah. Jawab ke baad WhatsApp." : "Replaces brokers. Then WhatsApp the desk."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "inline-flex size-11 shrink-0 touch-manipulation items-center justify-center rounded-full border border-line text-sm text-muted",
					onClick: () => setOpen(false),
					children: t("close")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				className: "mt-3 min-h-24 w-full rounded-md border border-line bg-bg px-3 py-3 text-base",
				placeholder: lang === "hi" ? "Golf Course Road pe penthouse?" : "Penthouse on Golf Course Road?",
				value: q,
				maxLength: 400,
				onChange: (e) => setQ(e.target.value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				disabled: busy,
				onClick: () => void send(),
				className: "mt-3 inline-flex min-h-12 w-full touch-manipulation items-center justify-center rounded-full bg-gold text-sm font-medium text-bg",
				children: busy ? "…" : lang === "hi" ? "पूछें" : "Ask"
			}),
			a ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-h-40 overflow-y-auto text-sm text-fg",
				children: a
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: waUrl(visitMessage()),
				target: "_blank",
				rel: "noreferrer",
				className: "mt-3 inline-flex min-h-12 w-full touch-manipulation items-center justify-center rounded-full border border-gold/40 text-sm text-gold",
				children: ["WhatsApp ", BRAND.name]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed bottom-24 left-4 z-40 hidden max-w-[min(22rem,calc(100vw-2rem))] lg:block",
			children: open ? panel : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setOpen(true),
				className: "inline-flex min-h-12 items-center rounded-full border border-gold/50 bg-surface px-4 text-xs tracking-wide text-gold uppercase",
				children: t("ask_ai")
			})
		}),
		open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-x-0 bottom-[calc(4.25rem+env(safe-area-inset-bottom))] z-40 px-3 lg:hidden",
			children: panel
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "no-print fixed inset-x-0 bottom-0 z-50 border-t border-line bg-bg/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden",
			"aria-label": t("sticky_wa"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-2 px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen((v) => !v),
					className: "inline-flex min-h-12 touch-manipulation items-center justify-center rounded-full border border-gold/40 bg-surface text-sm font-medium text-gold",
					children: open ? t("close") : t("ask_ai")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: waUrl(visitMessage()),
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex min-h-12 touch-manipulation items-center justify-center gap-2 rounded-full bg-gold text-sm font-medium text-bg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppGlyph, {}), t("cta_whatsapp")]
				})]
			})
		})
	] });
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 pb-[calc(5.25rem+env(safe-area-inset-bottom))] lg:pb-0",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyWhatsApp, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AskDks, {})
		]
	});
}
var styles_default = "/assets/styles-RrvtE05B.css";
var APP_NAME = BRAND.name;
var Route$19 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover"
			},
			{ title: BRAND.seoTitle },
			{
				name: "description",
				content: BRAND.seoDescription
			},
			{
				name: "theme-color",
				content: "#070706"
			},
			{
				name: "application-name",
				content: APP_NAME
			},
			{
				name: "apple-mobile-web-app-title",
				content: APP_NAME
			},
			{
				name: "geo.region",
				content: "IN-HR"
			},
			{
				name: "geo.placename",
				content: "Gurugram"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/logo.png"
			},
			{
				rel: "apple-touch-icon",
				href: "/logo-192.png"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,500&family=Outfit:wght@300;400;500;600;700&display=swap"
			}
		]
	}),
	component: RootDocument
});
function RootDocument() {
	const jsonLd = JSON.stringify(localBusinessJsonLd());
	const faq = JSON.stringify(faqJsonLd());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "marble min-h-dvh",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
					type: "application/ld+json",
					dangerouslySetInnerHTML: { __html: jsonLd }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
					type: "application/ld+json",
					dangerouslySetInnerHTML: { __html: faq }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$18 = () => import("./routes-D_0_98PN.mjs");
var Route$18 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$18, "component") });
var $$splitComponentImporter$17 = () => import("./about-hxZ9eMHq.mjs");
var Route$17 = createFileRoute("/about")({
	component: lazyRouteComponent($$splitComponentImporter$17, "component"),
	head: () => ({ meta: [{ title: `About | ${BRAND.name} | Gurugram` }, {
		name: "description",
		content: "Regent Way is a platform for private flats and penthouses in Gurugram — Golf Course Road, DLF Phase 5, Sector 54, Sohna Road."
	}] })
});
var $$splitComponentImporter$16 = () => import("./admin-3lI23FQL.mjs");
var Route$16 = createFileRoute("/admin")({
	component: lazyRouteComponent($$splitComponentImporter$16, "component"),
	head: () => ({ meta: [{ title: `Owner dashboard | ${BRAND.name}` }] })
});
var $$splitComponentImporter$15 = () => import("./ads-D8_mQ4RC.mjs");
var Route$15 = createFileRoute("/ads")({
	component: lazyRouteComponent($$splitComponentImporter$15, "component"),
	head: () => ({ meta: [{ title: `Ads kit | ${BRAND.name}` }] })
});
var $$splitComponentImporter$14 = () => import("./agents-rxwphPrx.mjs");
var Route$14 = createFileRoute("/agents")({
	component: lazyRouteComponent($$splitComponentImporter$14, "component"),
	head: () => ({ meta: [{ title: `For Agents | ${BRAND.name} | Gurugram` }] })
});
var $$splitComponentImporter$13 = () => import("./contact-Bt0yXr2p.mjs");
var Route$13 = createFileRoute("/contact")({
	component: lazyRouteComponent($$splitComponentImporter$13, "component"),
	head: () => ({ meta: [{ title: `Contact | ${BRAND.name} | Gurugram` }] })
});
var $$splitComponentImporter$12 = () => import("./crm-DUmWxIKa.mjs");
var Route$12 = createFileRoute("/crm")({
	component: lazyRouteComponent($$splitComponentImporter$12, "component"),
	head: () => ({ meta: [{ title: `CRM | ${BRAND.name}` }] })
});
var $$splitComponentImporter$11 = () => import("./google-profile-jQV9w837.mjs");
var Route$11 = createFileRoute("/google-profile")({
	component: lazyRouteComponent($$splitComponentImporter$11, "component"),
	head: () => ({ meta: [{ title: `Google profile kit | ${BRAND.name}` }] })
});
var $$splitComponentImporter$10 = () => import("./homes-osuRwqEu.mjs");
var Route$10 = createFileRoute("/homes")({
	component: lazyRouteComponent($$splitComponentImporter$10, "component"),
	head: () => ({ meta: [{ title: `Flats & penthouses in Gurugram | ${BRAND.name}` }, {
		name: "description",
		content: "Private flats and penthouses in Gurugram — Golf Course Road, DLF Phase 5, Sector 54, Sohna Road. Regent Way."
	}] })
});
var $$splitComponentImporter$9 = () => import("./portal-DLqHSCOD.mjs");
var Route$9 = createFileRoute("/portal")({
	component: lazyRouteComponent($$splitComponentImporter$9, "component"),
	head: () => ({ meta: [{ title: `Agent portal | ${BRAND.name}` }] })
});
var $$splitComponentImporter$8 = () => import("./qr-ep1C-ndK.mjs");
var Route$8 = createFileRoute("/qr")({
	component: lazyRouteComponent($$splitComponentImporter$8, "component"),
	head: () => ({ meta: [{ title: `QR · NFC · Google review | ${BRAND.name}` }, {
		name: "description",
		content: "Scan QR or tap NFC for Regent Way WhatsApp, website and Google review in Gurugram."
	}] })
});
var $$splitComponentImporter$7 = () => import("./whatsapp-D3u4GYDi.mjs");
var Route$7 = createFileRoute("/whatsapp")({
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
	head: () => ({ meta: [{ title: `WhatsApp | ${BRAND.name}` }] })
});
var $$splitComponentImporter$6 = () => import("./admin.index-C9bfkmyX.mjs");
var Route$6 = createFileRoute("/admin/")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./admin.guide-DKJUKHWE.mjs");
var Route$5 = createFileRoute("/admin/guide")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({ meta: [{ title: `Owner guide | ${BRAND.name}` }] })
});
var $$splitComponentImporter$4 = () => import("./admin.homes-DZ5LYzIZ.mjs");
var Route$4 = createFileRoute("/admin/homes")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({ meta: [{ title: `Homes editor | ${BRAND.name}` }] })
});
var $$splitComponentImporter$3 = () => import("./agents.kit-DtE3WbDn.mjs");
var Route$3 = createFileRoute("/agents/kit")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: `Agent kit | ${BRAND.name}` }] })
});
var $$splitComponentImporter$2 = () => import("./agents.sheet-CZRf5iIb.mjs");
var Route$2 = createFileRoute("/agents/sheet")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: `Agent sheet | ${BRAND.name}` }] })
});
var $$splitNotFoundComponentImporter = () => import("./homes._slug-Bgmg88z1.mjs");
var $$splitComponentImporter$1 = () => import("./homes._slug-DLM4Yj_f.mjs");
var Route$1 = createFileRoute("/homes/$slug")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	loader: ({ params }) => ({
		slug: params.slug,
		listing: listingBySlug(params.slug)
	}),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	head: ({ loaderData }) => ({ meta: [{ title: loaderData?.listing ? `${loaderData.listing.name} | ${BRAND.name} | Gurugram` : BRAND.seoTitle }, {
		name: "description",
		content: loaderData?.listing?.blurb ?? BRAND.seoDescription
	}] })
});
var $$splitComponentImporter = () => import("./admin.homes._slug-BNnkcCaF.mjs");
var Route = createFileRoute("/admin/homes/$slug")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({ meta: [{ title: `Edit home | ${BRAND.name}` }] })
});
var IndexRoute = Route$18.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$19
});
var AboutRoute = Route$17.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$19
});
var AdminRoute = Route$16.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$19
});
var AdsRoute = Route$15.update({
	id: "/ads",
	path: "/ads",
	getParentRoute: () => Route$19
});
var AgentsRoute = Route$14.update({
	id: "/agents",
	path: "/agents",
	getParentRoute: () => Route$19
});
var ContactRoute = Route$13.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$19
});
var CrmRoute = Route$12.update({
	id: "/crm",
	path: "/crm",
	getParentRoute: () => Route$19
});
var GoogleProfileRoute = Route$11.update({
	id: "/google-profile",
	path: "/google-profile",
	getParentRoute: () => Route$19
});
var HomesRoute = Route$10.update({
	id: "/homes",
	path: "/homes",
	getParentRoute: () => Route$19
});
var PortalRoute = Route$9.update({
	id: "/portal",
	path: "/portal",
	getParentRoute: () => Route$19
});
var QrRoute = Route$8.update({
	id: "/qr",
	path: "/qr",
	getParentRoute: () => Route$19
});
var WhatsappRoute = Route$7.update({
	id: "/whatsapp",
	path: "/whatsapp",
	getParentRoute: () => Route$19
});
var AdminIndexRoute = Route$6.update({
	id: "/",
	path: "/",
	getParentRoute: () => AdminRoute
});
var AdminGuideRoute = Route$5.update({
	id: "/guide",
	path: "/guide",
	getParentRoute: () => AdminRoute
});
var AdminHomesRoute = Route$4.update({
	id: "/homes",
	path: "/homes",
	getParentRoute: () => AdminRoute
});
var AgentsKitRoute = Route$3.update({
	id: "/kit",
	path: "/kit",
	getParentRoute: () => AgentsRoute
});
var AgentsSheetRoute = Route$2.update({
	id: "/sheet",
	path: "/sheet",
	getParentRoute: () => AgentsRoute
});
var HomesSlugRoute = Route$1.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => HomesRoute
});
var AdminHomesRouteChildren = { AdminHomesSlugRoute: Route.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => AdminHomesRoute
}) };
var AdminRouteChildren = {
	AdminGuideRoute,
	AdminHomesRoute: AdminHomesRoute._addFileChildren(AdminHomesRouteChildren),
	AdminIndexRoute
};
var AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren);
var AgentsRouteChildren = {
	AgentsKitRoute,
	AgentsSheetRoute
};
var AgentsRouteWithChildren = AgentsRoute._addFileChildren(AgentsRouteChildren);
var HomesRouteChildren = { HomesSlugRoute };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AdminRoute: AdminRouteWithChildren,
	AdsRoute,
	AgentsRoute: AgentsRouteWithChildren,
	ContactRoute,
	CrmRoute,
	GoogleProfileRoute,
	HomesRoute: HomesRoute._addFileChildren(HomesRouteChildren),
	PortalRoute,
	QrRoute,
	WhatsappRoute
};
var routeTree = Route$19._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-[50dvh] max-w-lg flex-col items-center justify-center px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl text-gold-bright",
				children: "Page not found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "This route is not on the Regent Way site."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-6 min-h-11 text-gold",
				children: "Back to home"
			})
		]
	});
}
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent,
		defaultNotFoundComponent: NotFound
	});
}
//#endregion
export { GBP_COPY as a, WA_TEMPLATES as c, listingShareText as d, priceMessage as f, useI18n as h, cn as i, agentIntroMessage as l, visitMessage as m, Route as n, PHOTO_CAPTIONS as o, utmListingUrl as p, Route$1 as r, REVIEW_REQUESTS as s, router_exports as t, brochureMessage as u };
