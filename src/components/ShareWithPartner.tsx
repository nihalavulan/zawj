"use client";

import Reveal from "./Reveal";

const SHARE_TITLE = "Zawj — A Couple's Umrah";
const SHARE_TEXT =
  "I found something for us 🕋❤️ — an Umrah made just for couples, to experience together. Should we? Take a look:";

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 21s-7.5-4.6-10-9.2C.6 9 1.8 5.5 5 4.7c2-.5 3.9.4 5 2 1.1-1.6 3-2.5 5-2 3.2.8 4.4 4.3 3 7.1C19.5 16.4 12 21 12 21Z" />
    </svg>
  );
}

export default function ShareWithPartner() {
  const onShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: SHARE_TITLE, text: SHARE_TEXT, url });
        return;
      } catch {
        // user cancelled or share failed — fall through to WhatsApp
      }
    }
    window.open(
      `https://wa.me/?text=${encodeURIComponent(`${SHARE_TEXT} ${url}`)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="bg-white py-16 sm:py-20">
      <Reveal className="mx-auto max-w-3xl px-6">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-rose px-6 py-11 text-center text-white sm:px-12 sm:py-14">
          {/* soft glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-2xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-rosewood/30 blur-2xl"
          />

          <span className="relative text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/70">
            Better together
          </span>
          <h2
            className="relative mt-3 text-[1.8rem] leading-[1.12] sm:text-[2.2rem]"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
          >
            Some journeys are best{" "}
            <em className="italic text-blush">decided together.</em>
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
            Send this to your other half and start the conversation — your Umrah,
            together, begins with a single tap.
          </p>

          <button
            type="button"
            onClick={onShare}
            className="relative mt-7 inline-flex items-center gap-2.5 rounded-lg bg-white px-6 py-3 text-[0.95rem] font-semibold text-rose shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-mist"
          >
            <HeartIcon className="h-[18px] w-[18px]" />
            Share with my partner
          </button>
        </div>
      </Reveal>
    </section>
  );
}
