import Reveal from "./Reveal";
import { WHATSAPP_URL } from "@/lib/whatsapp";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38a9.86 9.86 0 0 0 4.73 1.2h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2Zm0 1.8c2.16 0 4.19.84 5.72 2.37a8.03 8.03 0 0 1 2.37 5.72c0 4.47-3.63 8.1-8.1 8.1a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.06.8.82-2.99-.2-.31a8.07 8.07 0 0 1-1.24-4.3c0-4.47 3.64-8.1 8.12-8.1Zm-4.42 4.7c-.16 0-.42.06-.64.3-.22.24-.86.84-.86 2.04s.88 2.37 1 2.53c.12.16 1.72 2.72 4.2 3.72 2.06.83 2.48.66 2.93.62.45-.04 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.32-.76-1.8-.18-.42-.38-.42-.54-.42Z" />
    </svg>
  );
}

export default function Closing() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Reveal className="mx-auto max-w-4xl px-6">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-rose px-6 py-12 text-center text-white sm:px-12 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-2xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-rosewood/30 blur-2xl"
          />

          <p className="relative mx-auto max-w-2xl text-[1.05rem] leading-[1.8] text-white/90 sm:text-[1.15rem]">
            ഒരു സാധാരണ group Umrah പോലെ ആകരുത്.{" "}
            <span className="font-semibold text-white">
              Couples Only ആയി, വെറും 12 couples-നായി
            </span>{" "}
            7 ദിവസത്തെ യാത്ര ഓരോ ദിവസവും thoughtfully curate ചെയ്യുന്നു, അതുകൊണ്ട്
            നിങ്ങൾക്ക് Umrah-ലും പരസ്പരത്തിലും കൂടുതൽ ശ്രദ്ധ കൊടുക്കാം.
          </p>

          <div className="relative mt-9 flex justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex max-w-md items-center justify-center gap-2.5 rounded-xl bg-white px-6 py-3.5 text-[0.95rem] font-semibold leading-snug text-rose shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-mist"
            >
              <WhatsAppIcon className="h-[18px] w-[18px] shrink-0" />
              Zawj-നെ കുറിച്ച് അറിയാം, നിങ്ങളുടെ 7 ദിവസത്തെ Umrah
              എങ്ങനെയായിരിക്കുമെന്ന് മനസ്സിലാക്കാം
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
