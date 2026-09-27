import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";

export function PanoramaViewer({ src, alt }: { src: string; alt: string }) {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(50);
  const drag = useRef<{ start: number; origin: number } | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (clientX: number) => {
      if (!drag.current) return;
      const dx = clientX - drag.current.start;
      const next = Math.max(0, Math.min(100, drag.current.origin - dx * 0.08));
      setX(next);
    };
    const up = () => {
      drag.current = null;
    };
    const move = (e: PointerEvent) => onMove(e.clientX);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, []);

  const nudge = (dir: number) => {
    setX((cur) => Math.max(0, Math.min(100, cur + dir * 12)));
  };

  return (
    <div>
      <div
        ref={ref}
        className="relative aspect-[16/9] min-h-56 cursor-ew-resize overflow-hidden rounded-lg border border-line bg-surface touch-none sm:aspect-[21/9] sm:min-h-48"
        onPointerDown={(e) => {
          drag.current = { start: e.clientX, origin: x };
        }}
        role="img"
        aria-label={alt}
      >
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: `${x}% 50%`,
            backgroundSize: "220% auto",
          }}
        />
        <span className="preview-ribbon">{t("preview_asset")}</span>
        <button
          type="button"
          className="absolute top-1/2 left-2 inline-flex size-11 -translate-y-1/2 touch-manipulation items-center justify-center rounded-full border border-line bg-bg/70 text-fg"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={() => nudge(-1)}
          aria-label="Look left"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          className="absolute top-1/2 right-2 inline-flex size-11 -translate-y-1/2 touch-manipulation items-center justify-center rounded-full border border-line bg-bg/70 text-fg"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={() => nudge(1)}
          aria-label="Look right"
        >
          <ChevronRight className="size-5" />
        </button>
        <p className="absolute right-3 bottom-3 rounded-full bg-bg/70 px-3 py-1 text-[0.65rem] tracking-wide text-muted uppercase">
          {t("swipe_360")} · {t("listing_360")}
        </p>
      </div>
    </div>
  );
}

export function DroneFlyover({ src }: { src: string }) {
  const { t } = useI18n();
  return (
    <div className="relative overflow-hidden rounded-lg border border-line">
      <div className="drone-ken aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${src})` }} />
      <span className="preview-ribbon">{t("preview_asset")}</span>
      <p className="absolute right-3 bottom-3 rounded-full bg-bg/70 px-3 py-1 text-[0.65rem] tracking-wide text-muted uppercase">
        {t("listing_drone")}
      </p>
      <style>{`
        .drone-ken {
          animation: dronePan 14s ease-in-out infinite alternate;
        }
        @keyframes dronePan {
          from { transform: scale(1.05) translate3d(0, 0, 0); }
          to { transform: scale(1.18) translate3d(-3%, -2%, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .drone-ken { animation: none; }
        }
      `}</style>
    </div>
  );
}
