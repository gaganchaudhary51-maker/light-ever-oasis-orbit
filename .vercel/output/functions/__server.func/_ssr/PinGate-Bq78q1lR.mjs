import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@react-three/drei+[...].mjs";
import { t as BRAND } from "./listings-BDrnreIt.mjs";
import { h as useI18n } from "./router-XbtlI9Go.mjs";
import { i as loadSession, o as saveSession, t as clearSession } from "./storage-DnV0VhCQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PinGate-Bq78q1lR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PinGate({ sessionKey, expected, hint, title, children }) {
	const { t } = useI18n();
	const [ok, setOk] = (0, import_react.useState)(false);
	const [pin, setPin] = (0, import_react.useState)("");
	const [err, setErr] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const stored = loadSession(sessionKey);
		if (stored && expected(stored)) setOk(true);
	}, [expected, sessionKey]);
	if (!ok) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-[60dvh] max-w-sm flex-col justify-center px-4 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "gold-rule",
				children: BRAND.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-4 text-3xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: hint
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-6",
				onSubmit: (e) => {
					e.preventDefault();
					if (expected(pin)) {
						saveSession(sessionKey, pin);
						setOk(true);
						setErr(false);
					} else setErr(true);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "dks-pin",
						className: "text-xs tracking-wide text-muted uppercase",
						children: t("pin_label")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "dks-pin",
						name: "pin",
						inputMode: "numeric",
						autoComplete: "one-time-code",
						value: pin,
						onChange: (e) => setPin(e.target.value),
						className: "mt-2 min-h-12 w-full rounded-md border border-line bg-surface px-3 text-fg"
					}),
					err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-danger",
						children: "Wrong PIN"
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gold font-medium text-bg",
						children: t("unlock")
					})
				]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "no-print mx-auto flex max-w-6xl justify-end px-4 pt-4 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "min-h-11 text-xs tracking-wide text-muted uppercase",
			onClick: () => {
				clearSession(sessionKey);
				setOk(false);
				setPin("");
			},
			children: t("sign_out")
		})
	}), children] });
}
//#endregion
export { PinGate as t };
