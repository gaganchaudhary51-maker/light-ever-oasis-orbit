import { useEffect, useState, type ReactNode } from "react";
import { BRAND } from "@/lib/brand";
import { clearSession, loadSession, saveSession } from "@/lib/storage";
import { useI18n } from "@/lib/i18n";

export function PinGate({
  sessionKey,
  expected,
  hint,
  title,
  children,
}: {
  sessionKey: string;
  expected: (pin: string) => boolean;
  hint: string;
  title: string;
  children: ReactNode;
}) {
  const { t } = useI18n();
  const [ok, setOk] = useState(false);
  const [pin, setPin] = useState("");
  const [err, setErr] = useState(false);

  useEffect(() => {
    const stored = loadSession(sessionKey);
    if (stored && expected(stored)) setOk(true);
  }, [expected, sessionKey]);

  if (!ok) {
    return (
      <div className="mx-auto flex min-h-[60dvh] max-w-sm flex-col justify-center px-4 py-16">
        <p className="gold-rule">{BRAND.name}</p>
        <h1 className="font-display mt-4 text-3xl">{title}</h1>
        <p className="mt-2 text-sm text-muted">{hint}</p>
        <form
          className="mt-6"
          onSubmit={(e) => {
            e.preventDefault();
            if (expected(pin)) {
              saveSession(sessionKey, pin);
              setOk(true);
              setErr(false);
            } else setErr(true);
          }}
        >
          <label htmlFor="dks-pin" className="text-xs tracking-wide text-muted uppercase">
            {t("pin_label")}
          </label>
          <input
            id="dks-pin"
            name="pin"
            inputMode="numeric"
            autoComplete="one-time-code"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="mt-2 min-h-12 w-full rounded-md border border-line bg-surface px-3 text-fg"
          />
          {err ? <p className="mt-2 text-sm text-danger">Wrong PIN</p> : null}
          <button
            type="submit"
            className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gold font-medium text-bg"
          >
            {t("unlock")}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <div className="no-print mx-auto flex max-w-6xl justify-end px-4 pt-4 sm:px-6">
        <button
          type="button"
          className="min-h-11 text-xs tracking-wide text-muted uppercase"
          onClick={() => {
            clearSession(sessionKey);
            setOk(false);
            setPin("");
          }}
        >
          {t("sign_out")}
        </button>
      </div>
      {children}
    </div>
  );
}
