import { n as LISTINGS, t as BRAND } from "./listings-BDrnreIt.mjs";
import { n as createServerFn, t as TSS_SERVER_FUNCTION } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ask-dks-Dl8gtMND.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var askDks_createServerFn_handler = createServerRpc({
	id: "47f72697fe44098b56c9c706307251f6941e919b8e120b757fa68d5955387f78",
	name: "askDks",
	filename: "src/lib/ask-dks.ts"
}, (opts) => askDks.__executeServer(opts));
var askDks = createServerFn({ method: "POST" }).validator((input) => ({ q: String(input?.q ?? "").trim().slice(0, 400) })).handler(askDks_createServerFn_handler, async ({ data }) => {
	if (!data.q) return {
		ok: false,
		error: "Empty question"
	};
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: false,
		error: "AI is not available"
	};
	const inventory = LISTINGS.map((l) => `${l.name} (${l.nameHi}) | ${l.type} | ${l.locality} | ${l.status} | ${l.priceBand} | ${l.size}`).join("\n");
	const res = await fetch("https://api.x.ai/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			model: "grok-4.5",
			max_tokens: 280,
			temperature: .3,
			messages: [{
				role: "system",
				content: `You are the on-site assistant for ${BRAND.name}, a luxury flats and penthouses platform in Gurugram. Phone/WhatsApp +${BRAND.phoneE164}. Answer in the user's language (Hindi or English). Only use this inventory. Never invent a price below/above the band. Never give a fake agent number. The only real number is +${BRAND.phoneE164}. If they want a viewing, tell them to WhatsApp. Be short.\n\nINVENTORY:\n${inventory}`
			}, {
				role: "user",
				content: data.q
			}]
		})
	});
	if (!res.ok) return {
		ok: false,
		error: "AI busy, WhatsApp Regent Way"
	};
	return {
		ok: true,
		text: (await res.json()).choices?.[0]?.message?.content ?? ""
	};
});
//#endregion
export { askDks_createServerFn_handler };
