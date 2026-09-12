"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const FAQS: { q: string; a: string }[] = [
  {
    q: "Who is the Zawj Umrah for?",
    a: "Zawj is designed exclusively for married couples who want to experience Umrah together — with more privacy, personal space, and meaningful time as a couple, rather than in a large mixed group.",
  },
  {
    q: "When is the journey?",
    a: "Our next couples' Umrah departs in October. Speak with our team and we'll share the exact dates, the full itinerary, and everything that's included before you decide.",
  },
  {
    q: "What's included in the package?",
    a: "Everything is arranged for you — your stay, transportation, a thoughtfully curated itinerary, and couples-focused sessions and experiences. You simply focus on your ibadah and your time together.",
  },
  {
    q: "How private is it, really?",
    a: "Every couple gets their own private room, the group is capped at just 12 couples on a 40-seat bus, and it's couples-only throughout — so you get the closeness of a private trip with the ease and value of a group.",
  },
  {
    q: "How do I reserve a spot?",
    a: "Just tell us you're interested. Our team will reach out, walk you through all the details, and guide you through securing your couple's spot from start to finish.",
  },
];

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-[#fffaf9] py-20 sm:py-24 lg:py-28">
      <Reveal className="mx-auto max-w-2xl px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-rose sm:text-xs">
            FAQ
          </span>
          <h2
            className="mt-3 text-[1.9rem] leading-[1.12] tracking-[-0.01em] text-ink sm:text-[2.4rem] sm:leading-[1.08]"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
          >
            Questions couples ask us
          </h2>
        </div>

        {/* Accordion */}
        <div className="mt-10 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white shadow-lg shadow-ink/5">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-mist/40 sm:px-6 sm:py-5"
                >
                  <span className="text-[0.98rem] font-semibold text-ink sm:text-[1.05rem]">
                    {item.q}
                  </span>
                  <ChevronIcon
                    className={`h-5 w-5 shrink-0 text-rose transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Smoothly animating panel (grid-rows 0fr → 1fr) */}
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[0.92rem] leading-relaxed text-muted sm:px-6 sm:pb-6 sm:text-[0.95rem]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
