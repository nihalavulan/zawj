"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { WHATSAPP_URL } from "@/lib/whatsapp-ml";
import { shareWithPartner } from "@/lib/share";

const SESSION_KEY = "zawj_exit_shown";
const DELAY_MS = 35000; // also show after this long on the page

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38a9.86 9.86 0 0 0 4.73 1.2h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2Zm0 1.8c2.16 0 4.19.84 5.72 2.37a8.03 8.03 0 0 1 2.37 5.72c0 4.47-3.63 8.1-8.1 8.1a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.06.8.82-2.99-.2-.31a8.07 8.07 0 0 1-1.24-4.3c0-4.47 3.64-8.1 8.12-8.1Zm-4.42 4.7c-.16 0-.42.06-.64.3-.22.24-.86.84-.86 2.04s.88 2.37 1 2.53c.12.16 1.72 2.72 4.2 3.72 2.06.83 2.48.66 2.93.62.45-.04 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.32-.76-1.8-.18-.42-.38-.42-.54-.42Z" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 21s-7.5-4.6-10-9.2C.6 9 1.8 5.5 5 4.7c2-.5 3.9.4 5 2 1.1-1.6 3-2.5 5-2 3.2.8 4.4 4.3 3 7.1C19.5 16.4 12 21 12 21Z" />
    </svg>
  );
}

export default function ExitPopup() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const firedRef = useRef(false);

  const trigger = useCallback(() => {
    if (firedRef.current) return;
    firedRef.current = true;
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
    setOpen(true);
    requestAnimationFrame(() => setVisible(true));
  }, []);

  const close = useCallback(() => {
    setVisible(false);
    window.setTimeout(() => setOpen(false), 200);
  }, []);

  useEffect(() => {
    let already = false;
    try {
      already = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      /* ignore */
    }
    if (already) {
      firedRef.current = true;
      return;
    }

    const timer = window.setTimeout(trigger, DELAY_MS);
    const onMouseOut = (e: MouseEvent) => {
      // desktop exit intent: pointer leaves through the top of the window
      if (!e.relatedTarget && e.clientY <= 0) trigger();
    };
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, [trigger]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="പോകുന്നതിന് മുമ്പ്"
      className={`fixed inset-0 z-[60] flex items-center justify-center p-4 transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* backdrop */}
      <button
        type="button"
        aria-label="അടയ്ക്കുക"
        onClick={close}
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
      />

      {/* card */}
      <div
        className={`relative w-full max-w-md overflow-hidden rounded-2xl bg-white p-7 text-center shadow-2xl transition-all duration-200 sm:p-9 ${
          visible ? "translate-y-0 scale-100" : "translate-y-3 scale-95"
        }`}
      >
        <button
          type="button"
          onClick={close}
          aria-label="അടയ്ക്കുക"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-muted transition hover:bg-mist hover:text-ink"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <span
          className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-mist text-rose"
          aria-hidden
        >
          <HeartIcon className="h-6 w-6" />
        </span>

        <h3
          className="mt-4 text-[1.4rem] leading-snug text-ink sm:text-[1.55rem]"
          style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
        >
          പോകുന്നതിന് മുമ്പ്…
        </h3>
        <p className="mx-auto mt-2.5 max-w-xs text-[0.95rem] leading-relaxed text-muted">
          ഈ Umrah നിങ്ങളുടെ partner-നൊപ്പം ഒരുമിച്ച് തീരുമാനിക്കണ്ടേ? ഇത് അവർക്ക്
          അയക്കൂ —{" "}
          <span className="font-semibold text-ink">
            പിന്നീട് റഫറൻസിനായി സൂക്ഷിക്കാം.
          </span>
        </p>

        <div className="mt-6 flex flex-col gap-2.5">
          <button
            type="button"
            onClick={() => {
              shareWithPartner();
              close();
            }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-rose px-5 py-3 text-[0.95rem] font-semibold text-white shadow-md shadow-rose/25 transition hover:bg-rose-dark"
          >
            <HeartIcon className="h-[17px] w-[17px]" />
            partner-ന് അയക്കൂ
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-line px-5 py-3 text-[0.95rem] font-semibold text-ink transition hover:border-rose hover:text-rose"
          >
            <WhatsAppIcon className="h-4 w-4 text-rose" />
            WhatsApp-ൽ സംസാരിക്കൂ
          </a>
        </div>
      </div>
    </div>
  );
}
