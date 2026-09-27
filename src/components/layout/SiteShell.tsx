import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { StickyWhatsApp } from "./StickyWhatsApp";
import { AskDks } from "@/components/AskDks";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1 pb-[calc(5.25rem+env(safe-area-inset-bottom))] lg:pb-0">
        {children}
      </main>
      <SiteFooter />
      <StickyWhatsApp />
      <AskDks />
    </div>
  );
}
