import { o as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/homes._slug-Bgmg88z1.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "mx-auto max-w-xl px-4 py-20 text-center",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "font-display text-4xl",
		children: "Home not listed"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/homes",
		className: "mt-4 inline-block min-h-11 text-gold",
		children: "View homes"
	})]
});
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
