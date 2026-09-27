import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";

export function CopyButton({ text, className }: { text: string; className?: string }) {
  const { t } = useI18n();
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      className={cn(
        "min-h-10 rounded-full border border-line px-3 text-xs tracking-wide text-gold uppercase",
        className,
      )}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setDone(true);
          window.setTimeout(() => setDone(false), 1600);
        } catch {
          /* ignore */
        }
      }}
    >
      {done ? t("copied") : t("copy")}
    </button>
  );
}
