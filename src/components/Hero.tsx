import Image from "next/image";
import { WHATSAPP_URL, PHONE_TEL, PHONE_DISPLAY } from "@/lib/whatsapp";

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

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-[#fffaf9] text-ink">
      {/* soft warm wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 h-[36rem] w-[36rem] rounded-full opacity-50 blur-[130px]"
        style={{ background: "radial-gradient(closest-side, #f3e6d4, transparent)" }}
      />

      {/* Header */}
      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-5 lg:px-10">
        <Image
          src="/logo-white.png"
          alt="Zawj"
          width={130}
          height={40}
          priority
          className="h-7 w-auto invert sm:h-8"
        />
        <a
          href={PHONE_TEL}
          className="flex items-center gap-1.5 text-sm font-medium text-ink/70 transition hover:text-rose sm:text-[0.9rem]"
        >
          <PhoneIcon className="h-3.5 w-3.5 text-rose/80" />
          {PHONE_DISPLAY}
        </a>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-6 pb-16 pt-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-10 lg:pb-24 lg:pt-10">
        {/* Copy */}
        <div className="flex flex-col">
          <span className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-rose sm:text-xs">
            <svg viewBox="0 0 20 20" className="h-4 w-4 text-gold" fill="currentColor" aria-hidden>
              <path d="m10 1.5 2.47 5.26 5.78.72-4.28 3.93 1.13 5.71L10 20.2l-5.1 2.83 1.13-5.71-4.28-3.93 5.78-.72L10 1.5Z" />
            </svg>
            15+ വർഷത്തെ വിശ്വസ്ത അനുഭവം
          </span>

          <h1
            className="mt-4 text-[1.75rem] leading-[1.28] tracking-[-0.005em] text-ink sm:mt-5 sm:text-[2.15rem] sm:leading-[1.26] lg:text-[2.55rem]"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
          >
            ഒരുമിച്ച് പോകണം എന്ന് ഒരുപാട് നാളായി ആഗ്രഹിച്ച Umrah… ഇനി അത് 7
            ദിവസത്തെ ഒരു യാത്രയല്ല,{" "}
            <span className="text-rose">
              നിങ്ങളിരുവർക്കും മാത്രം ഉള്ള ഒരു അനുഭവമാകട്ടെ.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-[0.98rem] leading-[1.75] text-muted sm:text-base">
            Umrah ചെയ്യണം എന്ന ആഗ്രഹമുണ്ട്, പക്ഷേ ഒരു സാധാരണ group യാത്ര പോലെ
            ആകരുതല്ലോ. അതുകൊണ്ടാണ്{" "}
            <span className="font-semibold text-ink">
              നിങ്ങളിരുവർക്കും മാത്രം വേണ്ടി 7 ദിവസത്തെ Zawj Umrah അനുഭവം
            </span>{" "}
            ഒരുക്കിയത്.
          </p>

          <div className="mt-7">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex max-w-md items-center justify-center gap-2.5 rounded-xl bg-rose px-6 py-3.5 text-left text-[0.95rem] font-semibold leading-snug text-white shadow-md shadow-rose/25 transition hover:bg-rose-dark"
            >
              <WhatsAppIcon className="h-[18px] w-[18px] shrink-0" />
              Zawj-നെ കുറിച്ച് അറിയാം, നിങ്ങളുടെ 7 ദിവസത്തെ Umrah
              എങ്ങനെയായിരിക്കുമെന്ന് മനസ്സിലാക്കാം
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="rounded-[1.6rem] bg-mist/70 p-2 shadow-lg shadow-ink/5 ring-1 ring-line">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.25rem] sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/couple-kaaba.jpg"
              alt="A couple together before the Kaaba in Makkah"
              fill
              priority
              fetchPriority="high"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-[30%_center]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
