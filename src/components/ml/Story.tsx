import HeroVideo from "../HeroVideo";
import Reveal from "../Reveal";
import { WHATSAPP_URL } from "@/lib/whatsapp-ml";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" aria-hidden>
      <path d="M4 10.5 8 14.5 16 5.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const QUESTIONS = [
  "നിങ്ങൾ രണ്ടുപേരും ഒരുമിച്ച് Umrah പോകണം എന്ന് ഒരുപാട് നാളായി ആഗ്രഹിക്കുന്നുണ്ടോ?",
  "ഒരു സാധാരണ group യാത്ര പോലെ, ഈ അനുഭവവും തിരക്കിലും ഓട്ടത്തിലും തീരരുതെന്ന് തോന്നുന്നുണ്ടോ?",
  "യാത്രയുടെ arrangements ഓർത്ത്, Umrah-ന്റെ യഥാർത്ഥ അനുഭവം നഷ്ടപ്പെടുമോ എന്ന് പേടിയുണ്ടോ?",
];

const BULLETS = [
  "Group-ന്റെ schedule-നനുസരിച്ച് ഓടണം.",
  "താമസം, യാത്ര, Ziyarah എല്ലാം നോക്കണം.",
  "മറ്റുള്ളവരുടെ കാര്യങ്ങൾക്കിടയിൽ, നിങ്ങളിരുവർക്കുമുള്ള സമയം കുറഞ്ഞുപോകും.",
  "അവസാനം Umrah കഴിഞ്ഞ് വരും, പക്ഷേ മനസ്സിൽ കരുതിയ അനുഭവം കിട്ടാതെ പോകും.",
];

export default function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-white py-20 scroll-mt-8 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        {/* Headline */}
        <Reveal className="text-center">
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-rose sm:text-xs">
            എന്തുകൊണ്ട് Zawj
          </span>
          <h2
            className="mx-auto mt-3 max-w-2xl text-[1.6rem] leading-[1.32] tracking-[-0.005em] text-ink sm:text-[2rem] sm:leading-[1.3]"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
          >
            Umrah ഒരു സാധാരണ group യാത്രയായി മാറരുത്,{" "}
            <span className="text-rose">
              നിങ്ങളിരുവർക്കും വേണ്ടി ഒരുക്കിയ യാത്ര തിരഞ്ഞെടുക്കൂ
            </span>
          </h2>
        </Reveal>

        {/* Video — kept in place */}
        <Reveal className="mt-10 sm:mt-12">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-xl shadow-ink/10 ring-1 ring-line">
            <HeroVideo />
          </div>
        </Reveal>

        {/* Body copy — letter style */}
        <Reveal className="mx-auto mt-12 max-w-2xl sm:mt-14">
          <div className="space-y-5 text-[1rem] leading-[1.85] text-muted">
            <p className="font-semibold text-ink">
              Dear couples,
            </p>

            <ul className="space-y-3.5">
              {QUESTIONS.map((q) => (
                <li key={q} className="flex gap-3">
                  <CheckIcon className="mt-1.5 h-5 w-5 shrink-0 text-rose" />
                  <span className="text-ink/80">{q}</span>
                </li>
              ))}
            </ul>

            <p className="text-[1.05rem] font-semibold text-ink">
              ഞങ്ങൾക്ക് മനസ്സിലാകും.
            </p>

            <p>ഭാര്യയും ഭർത്താവും ഒരുമിച്ച് Umrah പോകുന്നത് ഒരു സാധാരണ trip അല്ല.</p>
            <p>അത് ഒരുപാട് നാളായി മനസ്സിൽ കൊണ്ടുനടക്കുന്ന ഒരു ആഗ്രഹമാണ്.</p>
            <p>
              പക്ഷേ പലപ്പോഴും യാത്രയുടെ തിരക്കും arrangements-ഉം ആ അനുഭവത്തിന്റെ
              ഭംഗി കുറയ്ക്കും.
            </p>

            <ul className="space-y-2.5 border-l-2 border-line pl-5">
              {BULLETS.map((b) => (
                <li key={b} className="list-disc marker:text-rose/60">
                  {b}
                </li>
              ))}
            </ul>

            <p>അങ്ങനെ ഒരു Umrah നിങ്ങൾ ആഗ്രഹിക്കുന്നില്ലല്ലോ.</p>
            <p>നിങ്ങൾക്ക് വേണ്ടത് മറ്റൊരു package അല്ല.</p>
            <p className="font-semibold text-ink">
              നിങ്ങൾക്ക് വേണ്ടത് നിങ്ങളിരുവർക്കും വേണ്ടി മാത്രം ഒരുക്കിയ ഒരു
              അനുഭവമാണ്.
            </p>

            <p
              className="pt-2 text-[1.6rem] leading-tight text-rose"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
            >
              അതുകൊണ്ടാണ് Zawj.
            </p>
            <p className="text-[1.05rem] font-semibold text-ink">
              7 ദിവസത്തെ Couples Only Umrah യാത്ര.
            </p>

            <p>
              നിങ്ങളുടെ comfort-നും ibadah-നും relationship-നും പ്രാധാന്യം നൽകി
              ഓരോ കാര്യവും thoughtfully ഒരുക്കുന്നു.
            </p>
            <p>നിങ്ങൾ arrangements-ന്റെ പിന്നാലെ ഓടേണ്ട.</p>
            <p>നിങ്ങൾ രണ്ടുപേരും ആ 7 ദിവസങ്ങൾ അനുഭവിച്ചാൽ മതി.</p>
            <p className="font-semibold text-ink">
              ഒരു യാത്ര കഴിഞ്ഞ് വീട്ടിലേക്ക് തിരികെ വരുന്നതിന് പകരം, ഒരുമിച്ച്
              എന്നും ഓർത്ത് വെക്കാൻ കഴിയുന്ന ഒരു Umrah അനുഭവവുമായി മടങ്ങിവരൂ.
            </p>
          </div>

          <div className="mt-9">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[1rem] font-semibold text-rose transition hover:gap-3"
            >
              Zawj-നെ കുറിച്ച് കൂടുതൽ അറിയാം
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
