import Reveal from "../Reveal";

const VALUE_PROPS: { title: string; headline: string }[] = [
  {
    title: "Couples Only",
    headline:
      "ഒരുമിച്ച് experience ചെയ്യൂ, Couples Only ആയ Umrah, മറ്റുള്ളവരുടെ തിരക്കില്ലാതെ നിങ്ങളിരുവർക്കും വേണ്ടി",
  },
  {
    title: "12 Couples Only",
    headline:
      "12 couples മാത്രം ഉള്ള intimate group-ൽ യാത്ര ചെയ്യൂ, കൂടുതൽ personal ആയ Umrah അനുഭവിക്കൂ",
  },
  {
    title: "Couple & Ibadah",
    headline:
      "ഒരുമിച്ച് ibadah ചെയ്യൂ, ഒരുമിച്ച് സമയം ചെലവഴിക്കൂ, ബന്ധത്തിൽ എന്നും കൂടെ നിൽക്കുന്ന ഒരു ഓർമ്മയുമായി മടങ്ങൂ",
  },
  {
    title: "7-Day Curated Journey",
    headline:
      "7 ദിവസവും thoughtfully curated ആയി experience ചെയ്യൂ, എന്ത് ചെയ്യണം എന്ന confusion ഇല്ലാതെ Umrah ആസ്വദിക്കൂ",
  },
  {
    title: "Everything Arranged",
    headline:
      "പ്രധാന arrangements ഞങ്ങൾ നോക്കിക്കോളാം, നിങ്ങൾ രണ്ടുപേരും Umrah-ന്റെ അനുഭവത്തിൽ മാത്രം ശ്രദ്ധ കൊടുക്കൂ",
  },
  {
    title: "Experienced Guidance",
    headline:
      "Experienced Umrah team-നൊപ്പം പോകൂ, ഓരോ സ്ഥലവും ഓരോ ibadah-യും കൂടുതൽ confidence-ോടെ experience ചെയ്യൂ",
  },
  {
    title: "More Than A Package",
    headline:
      "ഒരു package-നേക്കാൾ കൂടുതൽ experience ചെയ്യൂ, വീട്ടിലെത്തിയാലും രണ്ടുപേരും എന്നും ഓർത്ത് വെക്കുന്ന 7 ദിവസങ്ങൾ",
  },
];

export default function ValueProps() {
  return (
    <section className="relative bg-[#fffaf9] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* Intro */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-rose sm:text-xs">
            നിങ്ങൾക്ക് ലഭിക്കുന്നത്
          </span>
          <h2
            className="mt-3 text-[1.6rem] leading-[1.32] tracking-[-0.005em] text-ink sm:text-[2rem] sm:leading-[1.3]"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
          >
            Umrah ഒരു സാധാരണ group യാത്രയായി മാറരുത്,{" "}
            <span className="text-rose">
              നിങ്ങളിരുവർക്കും വേണ്ടി ഒരുക്കിയ യാത്ര തിരഞ്ഞെടുക്കൂ
            </span>
          </h2>
        </Reveal>

        {/* Cards */}
        <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {VALUE_PROPS.map((vp, i) => (
            <Reveal
              key={vp.title}
              className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-sm shadow-ink/5 transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-ink/10 sm:p-7"
            >
              <span
                className="text-[1.15rem] text-rose"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-[0.95rem] font-bold uppercase tracking-wide text-ink">
                {vp.title}
              </h3>
              <p className="mt-2.5 text-[0.95rem] leading-[1.75] text-muted">
                {vp.headline}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
