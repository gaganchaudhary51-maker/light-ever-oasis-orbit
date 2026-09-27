import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { CopyButton } from "@/components/ui/CopyButton";

export function QrCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  const [src, setSrc] = useState("");

  useEffect(() => {
    let alive = true;
    void QRCode.toDataURL(value, {
      width: 360,
      margin: 1,
      color: { dark: "#070706", light: "#f3ead2" },
    }).then((url) => {
      if (alive) setSrc(url);
    });
    return () => {
      alive = false;
    };
  }, [value]);

  return (
    <div className="rounded-xl border border-line bg-surface p-4">
      <p className="text-xs tracking-wide text-gold uppercase">{label}</p>
      {src ? (
        <img src={src} alt={label} className="mx-auto mt-3 w-48 rounded-md bg-paper" />
      ) : (
        <div className="mx-auto mt-3 size-48 animate-pulse rounded-md bg-raised" />
      )}
      {hint ? <p className="mt-3 text-xs text-muted">{hint}</p> : null}
      <p className="mt-2 break-all text-[0.7rem] text-muted">{value}</p>
      <div className="mt-3">
        <CopyButton text={value} />
      </div>
    </div>
  );
}
