import { i as __toESM } from "../_runtime.mjs";
import { s as require_react } from "../_libs/@react-three/drei+[...].mjs";
import { n as LISTINGS } from "./listings-BDrnreIt.mjs";
import { a as saveJson, r as loadJson } from "./storage-DnV0VhCQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/listing-store-CXWTTLGi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var DB = "rw-media";
var STORE = "files";
var urls = /* @__PURE__ */ new Map();
function openDb() {
	return new Promise((resolve, reject) => {
		const req = indexedDB.open(DB, 1);
		req.onupgradeneeded = () => {
			if (!req.result.objectStoreNames.contains(STORE)) req.result.createObjectStore(STORE);
		};
		req.onsuccess = () => resolve(req.result);
		req.onerror = () => reject(req.error);
	});
}
async function saveMedia(id, blob) {
	const db = await openDb();
	await new Promise((resolve, reject) => {
		const tx = db.transaction(STORE, "readwrite");
		tx.objectStore(STORE).put(blob, id);
		tx.oncomplete = () => resolve();
		tx.onerror = () => reject(tx.error);
	});
	const prev = urls.get(id);
	if (prev) URL.revokeObjectURL(prev);
	urls.set(id, URL.createObjectURL(blob));
}
function mediaKey(id) {
	return `media:${id}`;
}
function isMediaKey(src) {
	return src.startsWith("media:");
}
function mediaId(src) {
	return src.slice(6);
}
async function loadMediaUrl(id) {
	const cached = urls.get(id);
	if (cached) return cached;
	const db = await openDb();
	const blob = await new Promise((resolve, reject) => {
		const req = db.transaction(STORE, "readonly").objectStore(STORE).get(id);
		req.onsuccess = () => resolve(req.result);
		req.onerror = () => reject(req.error);
	});
	if (!blob) return null;
	const url = URL.createObjectURL(blob);
	urls.set(id, url);
	return url;
}
async function compressImage(file, max = 1600) {
	const bitmap = await createImageBitmap(file);
	const scale = Math.min(1, max / Math.max(bitmap.width, bitmap.height));
	const w = Math.round(bitmap.width * scale);
	const h = Math.round(bitmap.height * scale);
	const canvas = document.createElement("canvas");
	canvas.width = w;
	canvas.height = h;
	const ctx = canvas.getContext("2d");
	if (!ctx) return file;
	ctx.drawImage(bitmap, 0, 0, w, h);
	return await new Promise((resolve) => {
		canvas.toBlob((b) => resolve(b ?? file), "image/jpeg", .86);
	});
}
var KEY = "listings";
var EVT = "rw-listings";
function cloneOne(l) {
	return {
		...l,
		gallery: [...l.gallery],
		highlights: [...l.highlights],
		highlightsHi: [...l.highlightsHi]
	};
}
function cloneAll(rows) {
	return rows.map(cloneOne);
}
function getListingsSync() {
	const stored = loadJson(KEY, null);
	if (!stored?.length) return cloneAll(LISTINGS);
	const bySlug = new Map(stored.map((l) => [l.slug, l]));
	const seedSlugs = new Set(LISTINGS.map((l) => l.slug));
	const merged = LISTINGS.map((seed) => {
		const over = bySlug.get(seed.slug);
		if (!over) return cloneOne(seed);
		return {
			...seed,
			...over,
			gallery: over.gallery?.length ? [...over.gallery] : [...seed.gallery],
			highlights: over.highlights?.length ? [...over.highlights] : [...seed.highlights],
			highlightsHi: over.highlightsHi?.length ? [...over.highlightsHi] : [...seed.highlightsHi]
		};
	});
	const extras = stored.filter((l) => !seedSlugs.has(l.slug)).map(cloneOne);
	return [...merged, ...extras];
}
function persist(rows) {
	saveJson(KEY, rows);
	if (typeof window !== "undefined") window.dispatchEvent(new Event(EVT));
}
async function hydrateImages(rows) {
	const next = cloneAll(rows);
	const resolve = async (src) => {
		if (!isMediaKey(src)) return src;
		return await loadMediaUrl(mediaId(src)) ?? src;
	};
	for (const row of next) {
		row.image = await resolve(row.image);
		row.panorama = await resolve(row.panorama);
		row.drone = await resolve(row.drone);
		row.gallery = await Promise.all(row.gallery.map(resolve));
	}
	return next;
}
function useListings() {
	const [rows, setRows] = (0, import_react.useState)(LISTINGS);
	(0, import_react.useEffect)(() => {
		let alive = true;
		const load = () => {
			hydrateImages(getListingsSync()).then((r) => {
				if (alive) setRows(r);
			});
		};
		load();
		window.addEventListener(EVT, load);
		return () => {
			alive = false;
			window.removeEventListener(EVT, load);
		};
	}, []);
	return rows;
}
function useListing(slug) {
	return useListings().find((l) => l.slug === slug);
}
function saveListing(slug, patch) {
	const rows = getListingsSync();
	const idx = rows.findIndex((l) => l.slug === slug);
	if (idx === -1) return;
	rows[idx] = {
		...rows[idx],
		...patch
	};
	persist(rows);
}
function addListing() {
	const rows = getListingsSync();
	const row = {
		slug: `home-${Date.now()}`,
		name: "New home",
		nameHi: "नया घर",
		type: "flat",
		locality: "Gurugram",
		localityHi: "गुरुग्राम",
		status: "available",
		priceBand: "On request",
		priceBandHi: "पूछें",
		size: "—",
		sizeHi: "—",
		beds: 3,
		baths: 3,
		image: "/interiors/living.jpg",
		gallery: [
			"/interiors/living.jpg",
			"/interiors/bedroom.jpg",
			"/interiors/kitchen.jpg"
		],
		panorama: "/interiors/panorama.jpg",
		drone: "/interiors/drone.jpg",
		blurb: "Add details and photos from the owner dashboard.",
		blurbHi: "मालिक डैशबोर्ड से विवरण और फ़ोटो जोड़ें।",
		highlights: ["Gurugram", "Ready"],
		highlightsHi: ["गुरुग्राम", "रेडी"],
		assignedAgentId: "agt-rohit"
	};
	persist([...rows, row]);
	return row;
}
function removeListing(slug) {
	if (LISTINGS.some((l) => l.slug === slug)) return false;
	persist(getListingsSync().filter((l) => l.slug !== slug));
	return true;
}
function isSeedListing(slug) {
	return LISTINGS.some((l) => l.slug === slug);
}
function isPreviewImage(src) {
	return src.startsWith("/listings") || src.startsWith("/interiors") || src.startsWith("/media");
}
async function setListingPhoto(slug, slot, file) {
	const blob = await compressImage(file);
	const id = `${slug}:${slot}`;
	await saveMedia(id, blob);
	const key = mediaKey(id);
	const rows = getListingsSync();
	const row = rows.find((l) => l.slug === slug);
	if (!row) return;
	if (slot === "image") {
		row.image = key;
		if (row.gallery[0] && isPreviewImage(row.gallery[0])) row.gallery[0] = key;
	} else if (slot === "panorama") row.panorama = key;
	else if (slot === "drone") row.drone = key;
	else {
		const i = Number(slot.slice(8));
		const gallery = [...row.gallery];
		while (gallery.length <= i) gallery.push(row.image);
		gallery[i] = key;
		row.gallery = gallery;
	}
	persist(rows);
}
async function addGalleryPhoto(slug, file) {
	const row = getListingsSync().find((l) => l.slug === slug);
	if (!row) return;
	await setListingPhoto(slug, `gallery-${row.gallery.length}`, file);
}
function removeGalleryPhoto(slug, index) {
	const rows = getListingsSync();
	const row = rows.find((l) => l.slug === slug);
	if (!row) return;
	if (row.gallery.length <= 1) return;
	row.gallery = row.gallery.filter((_, i) => i !== index);
	persist(rows);
}
var TYPES = ["flat", "penthouse"];
var STATUSES = [
	"available",
	"hold",
	"sold"
];
//#endregion
export { getListingsSync as a, removeGalleryPhoto as c, setListingPhoto as d, useListing as f, addListing as i, removeListing as l, TYPES as n, isPreviewImage as o, useListings as p, addGalleryPhoto as r, isSeedListing as s, STATUSES as t, saveListing as u };
