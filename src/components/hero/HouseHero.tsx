import { Component, lazy, Suspense, useEffect, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { BRAND, waUrl } from "@/lib/brand";
import { visitMessage } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import type { CameraMode } from "./HouseScene";

const HouseScene = lazy(() => import("./HouseScene"));

function isWeakDevice() {
  if (typeof window === "undefined") return true;
  return (
    window.innerWidth < 900 ||
    window.matchMedia("(pointer: coarse)").matches ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  );
}

class ThreeGuard extends Component<{ fallback: ReactNode; children: ReactNode }, { err: boolean }> {
  state = { err: false };
  static getDerivedStateFromError() {
    return { err: true };
  }
  render() {
    return this.state.err ? this.props.fallback : this.props.children;
  }
}

export function HouseHero() {
  const { t, lang } = useI18n();
  const [mode, setMode] = useState<CameraMode>("night");
  const [want3d, setWant3d] = useState(false);

  useEffect(() => {
    if (isWeakDevice()) return;
    const id = window.setTimeout(() => {
      try {
        const canvas = document.createElement("canvas");
        const gl =
          canvas.getContext("webgl", { failIfMajorPerformanceCaveat: true }) ||
          canvas.getContext("experimental-webgl");
        if (gl) setWant3d(true);
      } catch {
        /* still photo is enough */
      }
    }, 400);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <section className="relative h-[calc(100svh-3.5rem-env(safe-area-inset-top))] min-h-[32rem] overflow-hidden bg-bg sm:h-[calc(100svh-4.25rem-env(safe-area-inset-top))]">
      <div className="absolute inset-0">
        {want3d ? (
          <ThreeGuard fallback={<HeroFallback />}>
            <Suspense fallback={<HeroFallback />}>
              <HouseScene key={mode} mode={mode} />
            </Suspense>
          </ThreeGuard>
        ) : (
          <HeroFallback />
        )}
      </div>
      <div className="hero-veil pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-[calc(5.75rem+env(safe-area-inset-bottom))] sm:px-6 lg:pb-20">
        <img
          src={BRAND.logoSm}
          alt=""
          width={96}
          height={96}
          className="pointer-events-none mb-4 size-16 rounded-sm border border-line object-cover shadow-gold sm:mb-5 sm:size-24"
        />
        <p className="gold-rule max-w-xs justify-start text-gold">{t("hero_kicker")}</p>
        <h1 className="font-display mt-3 max-w-xl text-[2.15rem] leading-[1.1] text-fg sm:text-6xl">
          {lang === "hi" ? BRAND.taglineHi : BRAND.tagline}
        </h1>
        <p className="mt-3 max-w-lg text-sm text-muted sm:text-base">{BRAND.city}</p>
        <div className="pointer-events-auto mt-6 grid w-full grid-cols-1 gap-3 sm:mt-7 sm:flex sm:flex-wrap">
          <a
            href={waUrl(visitMessage())}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 touch-manipulation items-center justify-center rounded-full bg-gold px-5 text-sm font-medium text-bg"
          >
            {t("cta_whatsapp")}
          </a>
          <Link
            to="/homes"
            className="inline-flex min-h-12 touch-manipulation items-center justify-center rounded-full border border-gold/50 px-5 text-sm text-gold-bright"
          >
            {t("cta_view_homes")}
          </Link>
          <Link
            to="/agents"
            className="hidden min-h-12 items-center justify-center rounded-full border border-line px-5 text-sm text-muted sm:inline-flex"
          >
            {t("cta_for_agents")}
          </Link>
        </div>
        <div className="pointer-events-auto mt-5 flex flex-wrap items-center gap-2 sm:mt-6">
          {(["night", "day", "drone"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => {
                setMode(m);
                setWant3d(true);
              }}
              className={cn(
                "min-h-11 touch-manipulation rounded-full border px-4 text-xs tracking-[0.16em] uppercase",
                mode === m && want3d
                  ? "border-gold bg-gold/15 text-gold-bright"
                  : "border-line text-muted",
              )}
            >
              {t(m === "night" ? "cam_night" : m === "day" ? "cam_day" : "cam_drone")}
            </button>
          ))}
          {want3d ? null : (
            <button
              type="button"
              onClick={() => setWant3d(true)}
              className="min-h-11 touch-manipulation rounded-full border border-gold/40 px-4 text-xs tracking-[0.16em] text-gold uppercase"
            >
              3D
            </button>
          )}
          <span className="ml-1 hidden text-[0.7rem] tracking-wide text-muted uppercase sm:inline">
            {t("hero_preview")}
          </span>
        </div>
      </div>
    </section>
  );
}

function HeroFallback() {
  return (
    <div className="size-full">
      <img
        src="/media/logo-poster.jpg"
        alt=""
        className="size-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-bg/40" />
    </div>
  );
}
