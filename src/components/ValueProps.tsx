import type { ReactNode } from "react";
import Image from "next/image";

const WHATSAPP_URL = "https://wa.me/919400971338";

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

type Point = string | { title: string; desc: string };

type Media =
  | {
      kind: "image";
      src: string;
      alt: string;
      objectPosition?: string;
      blend?: boolean;
    }
  | { kind: "placeholder"; note: ReactNode };

type ValueProp = {
  eyebrow: string;
  headline: ReactNode;
  points: Point[];
  cta: string;
  media: Media;
};

const VALUE_PROPS: ValueProp[] = [
  {
    eyebrow: "Designed for two",
    headline: (
      <>
        An Umrah Designed for <em className="italic text-rose">Two</em>, Not
        Forty.
      </>
    ),
    points: [
      "Private rooms for every couple",
      "A 40-seat bus for just 12 couples",
      "A couples-only group",
      "Sessions and experiences created specifically for couples",
    ],
    cta: "See the Zawj Experience",
    media: {
      kind: "image",
      src: "/couple-sitting-kaaba.png",
      alt: "A couple sitting together before the Kaaba in Makkah, her head resting on his shoulder",
      objectPosition: "center 38%",
      blend: true,
    },
  },
  {
    eyebrow: "Smart value",
    headline: (
      <>
        The Experience of a <em className="italic text-rose">Custom Umrah</em>,
        Without the Custom Trip Price.
      </>
    ),
    points: [
      "A couples-first experience with the efficiencies of a group",
      "Private rooms without paying for a fully private trip",
      "A thoughtfully planned itinerary without the cost of building one from scratch",
      "More personal than a group package, more accessible than a custom trip",
    ],
    cta: "See What's Included",
    media: {
      kind: "image",
      src: "/couple-touching-kaaba.jpg",
      alt: "A couple reaching out to touch the Kaaba's kiswah together in Makkah",
      objectPosition: "center 45%",
      blend: true,
    },
  },
  {
    eyebrow: "Growing together",
    headline: (
      <>
        An Umrah That Helps You Build the{" "}
        <em className="italic text-rose">Life You&rsquo;re Praying For.</em>
      </>
    ),
    points: [
      {
        title: "Marriage in Islam",
        desc: "Understand marriage, communication, responsibilities, and growing together through an Islamic perspective.",
      },
      {
        title: "Family Circle",
        desc: "Navigate marriage, parents, children, parenthood, and building your own family.",
      },
      {
        title: "Work and Life Balance",
        desc: "Learn how to protect your marriage and family while navigating careers, ambition, technology, and modern life.",
      },
      {
        title: "Couples Workshop",
        desc: "A practical session to turn these conversations into things you can take home and implement together.",
      },
    ],
    cta: "Explore the Journey",
    media: {
      kind: "image",
      src: "/couple-window-makkah.png",
      alt: "A couple in ihram looking out an airplane window at Makkah, the Kaaba and Clock Tower below",
      objectPosition: "center 40%",
      blend: true,
    },
  },
];

function ImagePlaceholder({ note }: { note: ReactNode }) {
  return (
    <div className="flex aspect-[4/3] w-full items-center justify-center rounded-xl border-2 border-dashed border-rosewood/40 bg-mist/50 p-8">
      <p className="max-w-xs text-center text-sm leading-relaxed text-muted">
        <span className="mb-1 block text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-rosewood">
          Image / video
        </span>
        {note}
      </p>
    </div>
  );
}

function Media({ media }: { media: Media }) {
  if (media.kind === "image") {
    if (media.blend) {
      // Feather the photo into the white section — no hard frame.
      const mask =
        "radial-gradient(115% 128% at 50% 42%, #000 55%, rgba(0,0,0,0.35) 78%, transparent 93%)";
      return (
        <div className="relative aspect-[4/5] w-full sm:aspect-[4/4.5]">
          <Image
            src={media.src}
            alt={media.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
            style={{
              objectPosition: media.objectPosition ?? "center",
              WebkitMaskImage: mask,
              maskImage: mask,
            }}
          />
        </div>
      );
    }
    return (
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg shadow-ink/10 ring-1 ring-line">
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover"
          style={{ objectPosition: media.objectPosition ?? "center" }}
        />
      </div>
    );
  }
  return <ImagePlaceholder note={media.note} />;
}

export default function ValueProps() {
  return (
    <section className="relative bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-6 lg:gap-32 lg:px-10">
        {VALUE_PROPS.map((vp, i) => {
          const imageLeft = i % 2 === 0;
          return (
            <div
              key={vp.eyebrow}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              {/* Image / video / graph */}
              <div className={imageLeft ? "lg:order-1" : "lg:order-2"}>
                <Media media={vp.media} />
              </div>

              {/* Copy */}
              <div className={imageLeft ? "lg:order-2" : "lg:order-1"}>
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-rose sm:text-xs">
                  {vp.eyebrow}
                </span>

                <h2
                  className="mt-3 text-[1.75rem] leading-[1.14] tracking-[-0.01em] text-ink sm:text-[2.2rem] sm:leading-[1.1] lg:text-[2.6rem]"
                  style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
                >
                  {vp.headline}
                </h2>

                <ul className="mt-6 flex flex-col gap-3.5">
                  {vp.points.map((p, j) => {
                    const isObj = typeof p !== "string";
                    return (
                      <li key={j} className="flex gap-3">
                        <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-rose" />
                        {isObj ? (
                          <span>
                            <span className="font-semibold text-ink">
                              {p.title}
                            </span>
                            <span className="mt-0.5 block text-[0.92rem] leading-relaxed text-muted">
                              {p.desc}
                            </span>
                          </span>
                        ) : (
                          <span className="text-[0.95rem] leading-relaxed text-ink sm:text-base">
                            {p}
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-8">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-rose px-6 py-3 text-[0.95rem] font-semibold text-white shadow-md shadow-rose/25 transition hover:bg-rose-dark sm:w-auto"
                  >
                    <WhatsAppIcon className="h-[18px] w-[18px]" />
                    {vp.cta}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
