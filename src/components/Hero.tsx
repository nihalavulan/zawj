import Image from "next/image";

const WHATSAPP_URL = "https://wa.me/919400971338";
const THEME = "#fffaf9";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38a9.86 9.86 0 0 0 4.73 1.2h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2Zm0 1.8c2.16 0 4.19.84 5.72 2.37a8.03 8.03 0 0 1 2.37 5.72c0 4.47-3.63 8.1-8.1 8.1a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.06.8.82-2.99-.2-.31a8.07 8.07 0 0 1-1.24-4.3c0-4.47 3.64-8.1 8.12-8.1Zm-4.42 4.7c-.16 0-.42.06-.64.3-.22.24-.86.84-.86 2.04s.88 2.37 1 2.53c.12.16 1.72 2.72 4.2 3.72 2.06.83 2.48.66 2.93.62.45-.04 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.32-.76-1.8-.18-.42-.38-.42-.54-.42Z" />
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

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" aria-hidden>
      <path d="M4 10.5 8 14.5 16 5.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const REASSURANCE = ["Couples only", "Limited spots", "Dedicated support"];

export default function Hero() {
  return (
    <div className="relative flex h-[100dvh] flex-col overflow-hidden bg-[#fffaf9] text-ink">
      {/* Soft warm background washes */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 h-[34rem] w-[34rem] rounded-full opacity-50 blur-[120px]"
        style={{ background: "radial-gradient(closest-side, #f3e6d4, transparent)" }}
      />

      {/* Desktop only — full-bleed background image with a strong→light
          left-to-right theme gradient; the copy sits on top and the couple
          is revealed toward the right. */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <Image
          src="/couple-kaaba.jpg"
          alt="A couple standing together before the Kaaba in Makkah"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[10%_center]"
        />
        {/* strong theme over the left → clears early to reveal the couple */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #fffaf9 0%, #fffaf9 38%, rgba(255,250,249,0.55) 50%, rgba(255,250,249,0.1) 60%, rgba(255,250,249,0) 68%)",
          }}
        />
        {/* soft top veil so the header stays readable */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-40"
          style={{ background: `linear-gradient(to bottom, ${THEME}, transparent)` }}
        />
      </div>

      {/* ── Header ───────────────────────────────────────────── */}
      <header className="relative z-10 mx-auto flex w-full max-w-7xl shrink-0 items-center justify-between gap-4 px-6 py-5 lg:px-10">
        <Image
          src="/logo-white.png"
          alt="Zawj"
          width={130}
          height={40}
          priority
          className="h-8 w-auto invert sm:h-9"
        />

        <div className="flex items-center gap-5 sm:gap-7">
          {/* Phone — shown on mobile in place of the CTA */}
          <a
            href="tel:+919400971338"
            className="flex items-center gap-2 text-base font-semibold text-ink transition hover:text-rose sm:text-[1.05rem]"
          >
            <PhoneIcon className="h-4 w-4 text-rose" />
            +91 9400 971 338
          </a>
          {/* Header CTA — hidden on mobile */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg bg-rose px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-dark sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Talk to us on WhatsApp
          </a>
        </div>
      </header>

      {/* ── Above-the-fold hero (fits within 100dvh) ─────────── */}
      <section className="relative z-10 mx-auto flex w-full min-h-0 max-w-7xl flex-1 flex-col gap-4 px-6 pb-0 sm:gap-5 lg:justify-center lg:px-10 lg:pb-0">
        {/* Copy — overlaid on the image, left-aligned */}
        <div className="flex shrink-0 flex-col lg:max-w-xl">
          {/* Trust line — no box */}
          <span className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-rose sm:text-xs">
            <svg viewBox="0 0 20 20" className="h-4 w-4 text-gold" fill="currentColor" aria-hidden>
              <path d="m10 1.5 2.47 5.26 5.78.72-4.28 3.93 1.13 5.71L10 20.2l-5.1 2.83 1.13-5.71-4.28-3.93 5.78-.72L10 1.5Z" />
            </svg>
            15+ Years of Trusted Experience
          </span>

          <h1
            className="mt-4 text-[2rem] leading-[1.1] tracking-[-0.01em] text-ink sm:mt-5 sm:text-[2.9rem] sm:leading-[1.06] lg:text-[3.6rem]"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
          >
            Finally experience Umrah{" "}
            <em className="italic text-rose">together</em> — more meaningful,
            more peaceful, and{" "}
            <em className="italic text-rose">closer to Allah and each other.</em>
          </h1>

          <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-muted sm:mt-5 sm:text-base">
            No crowded groups. No shared bed spaces. No rushing through a generic
            itinerary. Zawj brings couples together for a curated Umrah with{" "}
            <span className="font-semibold text-ink">
              more privacy, personal space, and meaningful time together.
            </span>
          </p>

          {/* Main CTA — smaller, subtle radius */}
          <div className="mt-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-rose px-6 py-3 text-[0.95rem] font-semibold text-white shadow-md shadow-rose/25 transition hover:bg-rose-dark sm:w-auto"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              Talk to us on WhatsApp
            </a>
          </div>

          {/* Reassurance — single line, never wraps */}
          <ul className="mt-5 flex items-center gap-x-4 whitespace-nowrap text-[0.72rem] font-medium text-muted sm:gap-x-6 sm:text-sm">
            {REASSURANCE.map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <CheckIcon className="h-3.5 w-3.5 shrink-0 text-rose sm:h-4 sm:w-4" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile only — emotional image fills the remaining height, blended
            into the theme with a soft top fade. */}
        <div className="relative -mx-6 min-h-0 flex-1 lg:hidden">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="/couple-kaaba.jpg"
              alt="A couple standing together before the Kaaba in Makkah"
              fill
              loading="eager"
              sizes="100vw"
              className="object-cover object-[center_32%]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-2/5"
              style={{
                background: `linear-gradient(to bottom, ${THEME}, rgba(255,250,249,0.65) 45%, transparent)`,
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
