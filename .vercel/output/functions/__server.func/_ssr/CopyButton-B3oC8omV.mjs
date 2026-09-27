import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@react-three/drei+[...].mjs";
import { h as useI18n, i as cn } from "./router-XbtlI9Go.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CopyButton-B3oC8omV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CopyButton({ text, className }) {
	const { t } = useI18n();
	const [done, setDone] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: cn("min-h-10 rounded-full border border-line px-3 text-xs tracking-wide text-gold uppercase", className),
		onClick: async () => {
			try {
				await navigator.clipboard.writeText(text);
				setDone(true);
				window.setTimeout(() => setDone(false), 1600);
			} catch {}
		},
		children: done ? t("copied") : t("copy")
	});
}
//#endregion
export { CopyButton as t };
