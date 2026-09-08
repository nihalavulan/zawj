import Image from "next/image";
import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* ── Header ───────────────────────────────────────────── */}
      <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 lg:px-10">
        {/* Logo (white wordmark — inverted to show on light prototype bg) */}
        <Image
          src="/logo-white.png"
          alt="Zawj"
          width={130}
          height={40}
          priority
          className="h-8 w-auto invert sm:h-9"
        />

        <div className="flex items-center gap-4 sm:gap-6">
          {/* Phone / contact — shown on mobile in place of the CTA */}
          <a
            href="tel:+919400971338"
            className="flex items-center gap-2 text-base font-semibold sm:text-lg"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-500 text-white">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.3 1l-2.2 2.2z" />
              </svg>
            </span>
            +91 9400 971 338
          </a>
          {/* Header CTA — hidden on mobile (phone shown instead) */}
          <a
            href="https://wa.me/919400971338"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-md bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:brightness-95 sm:inline-flex"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38a9.86 9.86 0 0 0 4.73 1.2h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2Zm0 1.8c2.16 0 4.19.84 5.72 2.37a8.03 8.03 0 0 1 2.37 5.72c0 4.47-3.63 8.1-8.1 8.1a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.06.8.82-2.99-.2-.31a8.07 8.07 0 0 1-1.24-4.3c0-4.47 3.64-8.1 8.12-8.1Zm-4.42 4.7c-.16 0-.42.06-.64.3-.22.24-.86.84-.86 2.04s.88 2.37 1 2.53c.12.16 1.72 2.72 4.2 3.72 2.06.83 2.48.66 2.93.62.45-.04 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.32-.76-1.8-.18-.42-.38-.42-.54-.42Z" />
            </svg>
            Talk to us on WhatsApp
          </a>
        </div>
      </header>

      {/* ── Above-the-fold hero ──────────────────────────────── */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-6 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:pt-10">
        {/* Left column — copy */}
        <div>
          {/* Social proof */}
          <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-neutral-500">
            15+ Years of Trusted Experience
          </p>

          <h1 className="text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Finally experience Umrah together in a way that feels more
            meaningful, more peaceful, &amp; brings you closer to Allah and each
            other.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600">
            No crowded groups. No shared bed spaces. No rushing through a generic
            itinerary. Zawj brings couples together for a thoughtfully curated
            Umrah with more privacy, personal space, &amp; meaningful time
            together.
          </p>

          {/* Main CTA */}
          <a
            href="https://wa.me/919400971338"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#25D366] px-8 py-4 text-base font-bold text-white transition hover:brightness-95 sm:w-auto"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38a9.86 9.86 0 0 0 4.73 1.2h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2Zm0 1.8c2.16 0 4.19.84 5.72 2.37a8.03 8.03 0 0 1 2.37 5.72c0 4.47-3.63 8.1-8.1 8.1a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.06.8.82-2.99-.2-.31a8.07 8.07 0 0 1-1.24-4.3c0-4.47 3.64-8.1 8.12-8.1Zm-4.42 4.7c-.16 0-.42.06-.64.3-.22.24-.86.84-.86 2.04s.88 2.37 1 2.53c.12.16 1.72 2.72 4.2 3.72 2.06.83 2.48.66 2.93.62.45-.04 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.32-.76-1.8-.18-.42-.38-.42-.54-.42Z" />
            </svg>
            Talk to us on WhatsApp
          </a>

          {/* Friction / FUD reducer */}
          <p className="mt-4 text-sm text-neutral-500">
            Couples only. Limited spots. Dedicated support.
          </p>
        </div>

        {/* Right column — ~1 min video (2x playback) */}
        <HeroVideo />
      </section>
    </div>
  );
}
