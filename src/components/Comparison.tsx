import Reveal from "./Reveal";

const ROWS: { label: string; normal: string; zawj: string }[] = [
  { label: "Group size", normal: "40+ pilgrims", zawj: "12 couples" },
  { label: "Your room", normal: "Shared spaces", zawj: "Private room" },
  { label: "Your group", normal: "Mixed crowd", zawj: "Couples only" },
  { label: "Itinerary", normal: "One-size-fits-all", zawj: "Curated for couples" },
  { label: "Time together", normal: "Rushed & crowded", zawj: "Space to connect" },
  { label: "Couples sessions", normal: "Not included", zawj: "Included" },
];

export default function Comparison() {
  return (
    <section className="relative bg-[#fffaf9] py-20 sm:py-24 lg:py-28">
      <Reveal className="mx-auto max-w-2xl px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-rose sm:text-xs">
            The difference
          </span>
          <h2
            className="mt-3 text-[1.9rem] leading-[1.1] tracking-[-0.01em] text-ink sm:text-[2.4rem]"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
          >
            A normal package vs.{" "}
            <em className="italic text-rose">Zawj</em>
          </h2>
        </div>

        {/* Table */}
        <div className="relative mt-10 overflow-hidden rounded-2xl border border-line bg-white shadow-lg shadow-ink/5">
          {/* Continuous highlight behind the Zawj column */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-mist"
          />

          <div className="relative grid grid-cols-2">
            {/* Header */}
            <div className="border-b border-line px-3 py-3.5 text-center text-sm font-bold text-muted sm:text-base">
              Normal package
            </div>
            <div className="border-b border-rose bg-rose px-3 py-3.5 text-center text-sm font-bold text-white sm:text-base">
              <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 600 }}>
                Zawj
              </span>
            </div>

            {/* Rows — attribute band, then the two values */}
            {ROWS.map((row, ri) => {
              const last = ri === ROWS.length - 1;
              return (
                <div key={row.label} className="contents">
                  <div className="col-span-2 border-b border-line py-1.5 text-center text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-muted">
                    {row.label}
                  </div>
                  <div
                    className={`flex items-center justify-center px-3 py-3 text-center text-[0.85rem] leading-snug text-ink/75 sm:text-sm ${
                      last ? "" : "border-b border-line"
                    }`}
                  >
                    {row.normal}
                  </div>
                  <div
                    className={`flex items-center justify-center px-3 py-3 text-center text-[0.85rem] font-semibold leading-snug text-rose sm:text-sm ${
                      last ? "" : "border-b border-rose/15"
                    }`}
                  >
                    {row.zawj}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-muted sm:text-sm">
          Everything a couple actually wants from Umrah — without the crowd.
        </p>
      </Reveal>
    </section>
  );
}
