//#region node_modules/.nitro/vite/services/ssr/assets/storage-DnV0VhCQ.js
var PREFIX = "rw.v1.";
function loadJson(key, fallback) {
	if (typeof window === "undefined") return fallback;
	try {
		const raw = window.localStorage.getItem(PREFIX + key);
		if (!raw) return fallback;
		return JSON.parse(raw);
	} catch {
		return fallback;
	}
}
function saveJson(key, value) {
	if (typeof window === "undefined") return;
	window.localStorage.setItem(PREFIX + key, JSON.stringify(value));
}
function loadSession(key) {
	if (typeof window === "undefined") return null;
	return window.sessionStorage.getItem(PREFIX + key);
}
function saveSession(key, value) {
	if (typeof window === "undefined") return;
	window.sessionStorage.setItem(PREFIX + key, value);
}
function clearSession(key) {
	if (typeof window === "undefined") return;
	window.sessionStorage.removeItem(PREFIX + key);
}
function csvEscape(value) {
	const s = String(value);
	if (/[",\n]/.test(s)) return `"${s.replaceAll("\"", "\"\"")}"`;
	return s;
}
function downloadCsv(filename, headers, rows) {
	const lines = [headers.map(csvEscape).join(","), ...rows.map((r) => r.map(csvEscape).join(","))];
	const blob = new Blob(["﻿" + lines.join("\n")], { type: "text/csv;charset=utf-8" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	a.click();
	URL.revokeObjectURL(url);
}
//#endregion
export { saveJson as a, loadSession as i, downloadCsv as n, saveSession as o, loadJson as r, clearSession as t };
