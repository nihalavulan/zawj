import Reveal from "./Reveal";

const WHATSAPP_URL = "https://wa.me/919400971338";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38a9.86 9.86 0 0 0 4.73 1.2h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2Zm0 1.8c2.16 0 4.19.84 5.72 2.37a8.03 8.03 0 0 1 2.37 5.72c0 4.47-3.63 8.1-8.1 8.1a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.06.8.82-2.99-.2-.31a8.07 8.07 0 0 1-1.24-4.3c0-4.47 3.64-8.1 8.12-8.1Zm-4.42 4.7c-.16 0-.42.06-.64.3-.22.24-.86.84-.86 2.04s.88 2.37 1 2.53c.12.16 1.72 2.72 4.2 3.72 2.06.83 2.48.66 2.93.62.45-.04 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.32-.76-1.8-.18-.42-.38-.42-.54-.42Z" />
    </svg>
  );
}

const STEPS: { title: string; desc: string }[] = [
  {
    title: "Tell Us You're Interested",
    desc: "Share a few details about you and your partner, and our team will get in touch to understand your plans and answer your questions.",
  },
  {
    title: "Speak With Our Zawj Team",
    desc: "We'll walk you through the October journey, what's included, the experience, and everything you need to know before you decide.",
  },
  {
    title: "Reserve Your Couple's Spot",
    desc: "Once you're ready, secure your place in the journey and complete the booking process with our team guiding you throughout.",
  },
  {
    title: "We Take Care of the Journey",
    desc: "From your stay and transportation to the experiences and sessions, everything is arranged so you can focus on your ibadah and enjoy the journey together.",
  },
];

export default function Steps() {
  return (
    <section className="relative bg-white py-20 sm:py-24 lg:py-28">
      <Reveal className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-rose sm:text-xs">
            How it works
          </span>
          <h2
            className="mt-3 text-[1.9rem] leading-[1.12] tracking-[-0.01em] text-ink sm:text-[2.4rem] sm:leading-[1.08]"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
          >
            Experience the Umrah you&rsquo;ve always wanted in{" "}
            <em className="italic text-rose">4 simple steps</em>
          </h2>
        </div>

        {/* Steps — vertical timeline on mobile, 4 across on desktop */}
        <ol className="relative mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-y-9 lg:mt-16 lg:max-w-none lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
          {/* Desktop horizontal connector behind the numbers */}
          <span
            aria-hidden
            className="absolute left-[12.5%] right-[12.5%] top-[1.375rem] hidden h-px bg-line lg:block"
          />
          {STEPS.map((step, i) => {
            const notLast = i < STEPS.length - 1;
            return (
              <li
                key={step.title}
                className="relative flex gap-5 lg:flex-col lg:items-center lg:gap-5 lg:text-center"
              >
                {/* Mobile vertical connector */}
                {notLast && (
                  <span
                    aria-hidden
                    className="absolute left-[1.375rem] top-[3.25rem] -bottom-9 w-px -translate-x-1/2 bg-line lg:hidden"
                  />
                )}

                {/* Number */}
                <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rose text-white shadow-sm shadow-rose/30">
                  <span
                    className="text-lg"
                    style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
                  >
                    {i + 1}
                  </span>
                </div>

                {/* Copy */}
                <div className="lg:mt-1">
                  <h3 className="text-[1.05rem] font-semibold leading-snug text-ink sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-muted sm:text-[0.95rem]">
                    {step.desc}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        {/* CTA */}
        <div className="mt-14 flex justify-center lg:mt-16">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-rose px-6 py-3 text-[0.95rem] font-semibold text-white shadow-md shadow-rose/25 transition hover:bg-rose-dark sm:w-auto"
          >
            <WhatsAppIcon className="h-[18px] w-[18px]" />
            Start with step one
          </a>
        </div>
      </Reveal>
    </section>
  );
}
