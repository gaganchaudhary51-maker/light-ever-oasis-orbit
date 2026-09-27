import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { BRAND } from "@/lib/brand";

export const Route = createFileRoute("/admin/guide")({
  component: OwnerGuide,
  head: () => ({
    meta: [{ title: `Owner guide | ${BRAND.name}` }],
  }),
});

function OwnerGuide() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
      <p className="gold-rule max-w-xs justify-start">{BRAND.name}</p>
      <h1 className="font-display mt-3 text-4xl">Owner guide</h1>
      <p className="mt-2 text-muted">
        Small desk, named viewings. This is the digital office for Regent Way.
      </p>

      <Section title="Daily">
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-muted">
          <li>WhatsApp button pe tap — customer ko ready message chala jaata hai.</li>
          <li>
            Neeche <strong className="text-fg">Owner login</strong> → PIN{" "}
            <strong className="text-fg">{BRAND.crmPin}</strong>
          </li>
          <li>
            <strong className="text-fg">Homes & photos</strong> — flat / penthouse ki photo, price,
            Available / Hold / Sold.
          </li>
          <li>
            <strong className="text-fg">CRM</strong> — naam, phone, follow-up date, viewing calendar.
          </li>
          <li>Ghar bik jaaye to status <strong className="text-fg">Sold</strong> kar do. Record rehta hai.</li>
        </ol>
      </Section>

      <Section title="Photo kaise badlein">
        <p className="mt-3 text-sm text-muted">
          Owner login → Homes & photos → ghar pe tap → photo pe tap → gallery se asli photo choose → Save.
          Site par turant dikhega. Preview ribbon hata jaata hai.
        </p>
      </Section>

      <Section title="Customer kya dekhta hai">
        <p className="mt-3 text-sm text-muted">
          Ghar, price, 360, drone, WhatsApp. Ads kit / CRM / PIN unhe nahi dikhta.
        </p>
      </Section>

      <Section title="Jab ghar bik jaaye">
        <p className="mt-3 text-sm text-muted">
          Status Sold. CRM mein buyer naam, phone, visit date, notes. Baad mein pata rahega kaun sa ghar,
          kitne ka, kab, kisko.
        </p>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-3xl">{title}</h2>
      {children}
    </section>
  );
}
