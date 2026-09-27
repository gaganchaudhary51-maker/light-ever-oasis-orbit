const PREFIX = "rw.v1.";

export function loadJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(PREFIX + key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function saveJson<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(PREFIX + key, JSON.stringify(value));
}

export function loadSession(key: string) {
  if (typeof window === "undefined") return null;
  return window.sessionStorage.getItem(PREFIX + key);
}

export function saveSession(key: string, value: string) {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(PREFIX + key, value);
}

export function clearSession(key: string) {
  if (typeof window === "undefined") return;
  window.sessionStorage.removeItem(PREFIX + key);
}

export function csvEscape(value: string | number) {
  const s = String(value);
  if (/[",\n]/.test(s)) return `"${s.replaceAll('"', '""')}"`;
  return s;
}

export function downloadCsv(filename: string, headers: string[], rows: Array<Array<string | number>>) {
  const lines = [
    headers.map(csvEscape).join(","),
    ...rows.map((r) => r.map(csvEscape).join(",")),
  ];
  const blob = new Blob(["\uFEFF" + lines.join("\n")], {
    type: "text/csv;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
