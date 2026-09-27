import { i as __toESM } from "../_runtime.mjs";
import { a as Fog, n as Canvas, o as require_jsx_runtime, r as useFrame, s as require_react, t as OrbitControls } from "../_libs/@react-three/drei+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/HouseScene-DofNcyDU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Window({ position, rotation = [
	0,
	0,
	0
], size = [
	.7,
	1.1,
	.06
], night }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position,
		rotation,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: size }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
			color: night ? "#f0d48a" : "#7a8aa0",
			emissive: night ? "#f0d48a" : "#1a1a18",
			emissiveIntensity: night ? 2.4 : .15,
			roughness: .2,
			metalness: .1
		})]
	});
}
function Tree({ position }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.45,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.12,
					.16,
					.9,
					8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#3a2a1c",
					roughness: .9
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					1.25,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
					.7,
					1.4,
					8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#1c2a1e",
					roughness: .85
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					1.85,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
					.5,
					1,
					8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#243528",
					roughness: .85
				})]
			})
		]
	});
}
function GoldMat({ night = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
		color: "#c9a56a",
		metalness: .82,
		roughness: .28,
		emissive: "#c9a56a",
		emissiveIntensity: night ? .25 : .08
	});
}
function StoneMat() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
		color: "#d8ccb4",
		roughness: .72,
		metalness: .08
	});
}
function DarkMat() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
		color: "#161310",
		roughness: .35,
		metalness: .45
	});
}
function Villa({ night }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			position: [
				0,
				0,
				0
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circleGeometry", { args: [18, 48] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#0c0b0a",
				roughness: .9,
				metalness: .2
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			position: [
				0,
				.02,
				3.6
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [3.2, 8] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#1a1713",
				roughness: .25,
				metalness: .55
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.18,
				.2
			],
			receiveShadow: true,
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				9.6,
				.36,
				7.4
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DarkMat, {})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				2.05,
				0
			],
			castShadow: true,
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				8.2,
				3.4,
				6.2
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoneMat, {})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				4.35,
				0
			],
			rotation: [
				0,
				Math.PI / 4,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
				5.6,
				1.9,
				4
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldMat, { night })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				5.45,
				0
			],
			rotation: [
				0,
				Math.PI / 4,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("octahedronGeometry", { args: [.22, 0] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#e8d5a3",
				emissive: "#c9a56a",
				emissiveIntensity: night ? 1.4 : .4,
				metalness: 1,
				roughness: .15
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				-2.6,
				1.05,
				3.18
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.18,
				.18,
				2.1,
				12
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldMat, { night })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				2.6,
				1.05,
				3.18
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.18,
				.18,
				2.1,
				12
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldMat, { night })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				1.15,
				3.16
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				1.2,
				2.1,
				.12
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#2a2118",
				roughness: .5,
				metalness: .3
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				2.35,
				3.22
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				1.35,
				.08,
				.16
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldMat, { night })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Window, {
			position: [
				-2.3,
				2.15,
				3.14
			],
			night
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Window, {
			position: [
				2.3,
				2.15,
				3.14
			],
			night
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Window, {
			position: [
				-2.3,
				2.15,
				-3.14
			],
			night
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Window, {
			position: [
				2.3,
				2.15,
				-3.14
			],
			night
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Window, {
			position: [
				4.14,
				2.15,
				-1.2
			],
			rotation: [
				0,
				Math.PI / 2,
				0
			],
			night
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Window, {
			position: [
				4.14,
				2.15,
				1.2
			],
			rotation: [
				0,
				Math.PI / 2,
				0
			],
			night
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Window, {
			position: [
				-4.14,
				2.15,
				-1.2
			],
			rotation: [
				0,
				Math.PI / 2,
				0
			],
			night
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Window, {
			position: [
				-4.14,
				2.15,
				1.2
			],
			rotation: [
				0,
				Math.PI / 2,
				0
			],
			night
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.08,
				6.6
			],
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [5.2, 3.4] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: night ? "#0d1a24" : "#1a3344",
				metalness: .85,
				roughness: .12,
				emissive: night ? "#0a2030" : "#000000",
				emissiveIntensity: .4
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.16,
				4.95
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				5.3,
				.12,
				.16
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldMat, { night })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tree, { position: [
			-6.4,
			0,
			4.2
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tree, { position: [
			6.6,
			0,
			3.8
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tree, { position: [
			-7.2,
			0,
			-2.4
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tree, { position: [
			7.4,
			0,
			-1.6
		] })
	] });
}
function GoldLights({ night }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", {
			intensity: night ? .18 : .55,
			color: night ? "#1a140c" : "#c9d4e0"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hemisphereLight", {
			color: night ? "#1b2230" : "#8aa0b8",
			groundColor: night ? "#0a0806" : "#3a3228",
			intensity: night ? .35 : .7
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: night ? [
				6,
				10,
				4
			] : [
				8,
				14,
				6
			],
			intensity: night ? .55 : 1.35,
			color: night ? "#c9a56a" : "#fff6e8"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
			position: [
				0,
				3.2,
				4
			],
			intensity: night ? 3.2 : .6,
			color: "#e8c97a",
			distance: 12
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
			position: [
				0,
				6,
				0
			],
			intensity: night ? 1.4 : .4,
			color: "#c9a56a",
			distance: 16
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("spotLight", {
			position: [
				0,
				8,
				8
			],
			angle: .45,
			penumbra: .6,
			intensity: night ? 1.8 : .5,
			color: "#e8d5a3"
		})
	] });
}
function OrbitRig({ mode }) {
	const group = (0, import_react.useRef)(null);
	useFrame((_, dt) => {
		const d = Math.min(dt, .1);
		if (!group.current) return;
		if (mode !== "drone") group.current.rotation.y += d * .12;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", { ref: group });
}
function HouseCanvas({ mode }) {
	const night = mode !== "day";
	const isDrone = mode === "drone";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
		shadows: false,
		dpr: [1, 1.25],
		camera: {
			position: isDrone ? [
				0,
				14,
				8
			] : [
				7.2,
				4.1,
				8.4
			],
			fov: isDrone ? 50 : 36,
			near: .1,
			far: 80
		},
		gl: {
			antialias: false,
			alpha: false,
			powerPreference: "low-power",
			stencil: false,
			failIfMajorPerformanceCaveat: true
		},
		onCreated: ({ gl, scene }) => {
			gl.setClearColor(night ? "#070706" : "#1a2230", 1);
			gl.toneMapping = 4;
			gl.toneMappingExposure = night ? 1.05 : 1.15;
			scene.fog = new Fog(night ? "#070706" : "#1a2230", 18, 42);
			gl.domElement.addEventListener("webglcontextlost", (e) => {
				e.preventDefault();
			}, false);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldLights, { night }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Villa, { night }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitControls, {
				enablePan: false,
				enableZoom: false,
				autoRotate: !isDrone,
				autoRotateSpeed: .45,
				minPolarAngle: isDrone ? .35 : .85,
				maxPolarAngle: isDrone ? .7 : 1.25,
				target: [
					0,
					1.6,
					0
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitRig, { mode })
		]
	});
}
function HouseScene({ mode }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HouseCanvas, { mode });
}
//#endregion
export { HouseCanvas, HouseScene as default };
