import { createServerFn } from "@tanstack/react-start";
import { BRAND } from "./brand";
import { LISTINGS } from "./listings";

export const askDks = createServerFn({ method: "POST" })
  .validator((input: { q: string }) => ({
    q: String(input?.q ?? "")
      .trim()
      .slice(0, 400),
  }))
  .handler(async ({ data }) => {
    if (!data.q) return { ok: false as const, error: "Empty question" };
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) return { ok: false as const, error: "AI is not available" };

    const inventory = LISTINGS.map(
      (l) =>
        `${l.name} (${l.nameHi}) | ${l.type} | ${l.locality} | ${l.status} | ${l.priceBand} | ${l.size}`,
    ).join("\n");

    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4.5",
        max_tokens: 280,
        temperature: 0.3,
        messages: [
          {
            role: "system",
            content: `You are the on-site assistant for ${BRAND.name}, a luxury flats and penthouses platform in Gurugram. Phone/WhatsApp +${BRAND.phoneE164}. Answer in the user's language (Hindi or English). Only use this inventory. Never invent a price below/above the band. Never give a fake agent number. The only real number is +${BRAND.phoneE164}. If they want a viewing, tell them to WhatsApp. Be short.\n\nINVENTORY:\n${inventory}`,
          },
          { role: "user", content: data.q },
        ],
      }),
    });
    if (!res.ok) return { ok: false as const, error: "AI busy, WhatsApp Regent Way" };
    const body = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    return { ok: true as const, text: body.choices?.[0]?.message?.content ?? "" };
  });
