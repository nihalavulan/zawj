import HeroVideo from "./HeroVideo";
import Reveal from "./Reveal";
import { dict, type Lang } from "@/lib/i18n";

export default function Problem({ lang }: { lang: Lang }) {
  const t = dict[lang].problem;
  return (
    <section id="story" className="relative overflow-hidden bg-[#fffaf9] py-20 scroll-mt-8 sm:py-24 lg:py-28">
      {/* Soft warm background wash to echo the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-[32rem] w-[32rem] rounded-full opacity-50 blur-[120px]"
        style={{ background: "radial-gradient(closest-side, #f3e6d4, transparent)" }}
      />

      <Reveal className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        {/* Copy */}
        <div className="flex flex-col">
          <span className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-rose sm:text-xs">
            <span className="h-px w-6 bg-rose/50" />
            {t.eyebrow}
          </span>

          <h2
            className="mt-4 text-[1.9rem] leading-[1.12] tracking-[-0.01em] text-ink sm:mt-5 sm:text-[2.5rem] sm:leading-[1.08] lg:text-[3rem]"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
          >
            {t.title}
          </h2>

          <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-muted sm:mt-6 sm:text-base">
            {t.body}
          </p>
        </div>

        {/* Video — states the problem and positions Zawj as the solution */}
        <div className="relative">
          {/* Curling nudge arrow → centered above on mobile, offset-left on
              desktop, always pointing down at the video */}
          <div className="pointer-events-none absolute -top-12 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-0.5 sm:-top-14 lg:left-6 lg:translate-x-0 lg:items-start">
            <span
              className="text-[0.95rem] text-rose sm:text-[1.15rem]"
              style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
            >
              {t.pressPlay}
            </span>
            <svg
              viewBox="0 0 56 64"
              className="h-11 w-10 text-rose sm:h-14 sm:w-12 lg:ml-6"
              fill="none"
              aria-hidden
            >
              <path
                d="M30 4C8 18 10 42 26 58"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeDasharray="0.1 6.5"
              />
              <path
                d="M26 58l-9-3M26 58l6-8"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-xl shadow-ink/10 ring-1 ring-line">
            <HeroVideo />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
