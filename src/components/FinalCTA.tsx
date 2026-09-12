import Reveal from "./Reveal";

import { WHATSAPP_URL } from "@/lib/whatsapp";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38a9.86 9.86 0 0 0 4.73 1.2h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2Zm0 1.8c2.16 0 4.19.84 5.72 2.37a8.03 8.03 0 0 1 2.37 5.72c0 4.47-3.63 8.1-8.1 8.1a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.06.8.82-2.99-.2-.31a8.07 8.07 0 0 1-1.24-4.3c0-4.47 3.64-8.1 8.12-8.1Zm-4.42 4.7c-.16 0-.42.06-.64.3-.22.24-.86.84-.86 2.04s.88 2.37 1 2.53c.12.16 1.72 2.72 4.2 3.72 2.06.83 2.48.66 2.93.62.45-.04 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.32-.76-1.8-.18-.42-.38-.42-.54-.42Z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" aria-hidden>
      <path d="M4 10.5 8 14.5 16 5.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.3 1l-2.2 2.2z" />
    </svg>
  );
}

const RECAP = [
  "Private rooms and a couples-only group of just 12",
  "Custom-trip closeness, without the custom-trip price",
  "Sessions that nurture your marriage, not just your itinerary",
];

const REASSURANCE = [
  "15+ years of trusted experience",
  "Dedicated couple support",
  "Just a conversation, no obligation",
];

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-mist/70 to-white py-20 sm:py-24 lg:py-28">
      {/* Soft warm wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-24 h-[32rem] w-[32rem] rounded-full opacity-50 blur-[120px]"
        style={{ background: "radial-gradient(closest-side, #f3e6d4, transparent)" }}
      />

      <Reveal className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        {/* Copy */}
        <div>
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-rose sm:text-xs">
            Only 12 couples · This October
          </span>

          <h2
            className="mt-3 text-[2rem] leading-[1.1] tracking-[-0.01em] text-ink sm:text-[2.6rem] sm:leading-[1.06]"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
          >
            This October, only{" "}
            <em className="italic text-rose">12 couples</em> will make this
            journey together.
          </h2>

          <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-muted sm:text-base">
            Once the spots are filled, they&rsquo;re gone. If you and your partner
            want an Umrah with real privacy, space, and meaning,{" "}
            <span className="font-semibold text-ink">
              this is the moment to reach out.
            </span>
          </p>

          {/* Recap of the value props */}
          <ul className="mt-6 flex flex-col gap-3">
            {RECAP.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-rose" />
                <span className="text-[0.95rem] leading-relaxed text-ink sm:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action panel */}
        <div className="rounded-2xl border border-line bg-white p-7 shadow-xl shadow-ink/10 sm:p-9">
          <h3
            className="text-[1.4rem] leading-tight text-ink sm:text-[1.6rem]"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
          >
            Reserve your couple&rsquo;s spot
          </h3>
          <p className="mt-2 text-[0.92rem] leading-relaxed text-muted sm:text-[0.95rem]">
            Tell us you&rsquo;re interested and our team takes it from there — no
            pressure, just a conversation.
          </p>

          {/* Primary CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-rose px-6 py-3.5 text-[0.98rem] font-semibold text-white shadow-md shadow-rose/25 transition hover:bg-rose-dark"
          >
            <WhatsAppIcon className="h-[18px] w-[18px]" />
            Talk to us on WhatsApp
          </a>

          {/* Secondary — call */}
          <a
            href="tel:+919400971338"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-line px-6 py-3 text-[0.95rem] font-semibold text-ink transition hover:border-rose hover:text-rose"
          >
            <PhoneIcon className="h-4 w-4 text-rose" />
            +91 9400 971 338
          </a>

          {/* Reassurance — reduce fear, uncertainty, doubt */}
          <ul className="mt-6 flex flex-col gap-2.5 border-t border-line pt-6">
            {REASSURANCE.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-[0.85rem] font-medium text-muted"
              >
                <CheckIcon className="h-4 w-4 shrink-0 text-rose" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
