"use client";

import { useState } from "react";

const VIDEO_ID = "HR2Tm2JrNrA";
const THUMB = `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`;
const THUMB_FALLBACK = `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`;
const EMBED = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      {/* Optically centered play triangle */}
      <path d="M6.45 5.6v12.8c0 .78.85 1.26 1.52.86l10.3-6.4a1 1 0 0 0 0-1.72L7.97 4.74a1 1 0 0 0-1.52.86Z" />
    </svg>
  );
}

export default function HeroVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="group relative h-full w-full overflow-hidden rounded-xl bg-neutral-900">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={EMBED}
          title="Zawj — a couple's Umrah, in their words"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label="Play video"
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Thumbnail (loads only this small image until clicked) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={THUMB}
            alt="A couple sharing why they chose Zawj for their Umrah"
            loading="lazy"
            onError={(e) => {
              const img = e.currentTarget;
              if (img.src !== THUMB_FALLBACK) img.src = THUMB_FALLBACK;
            }}
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Dim + play button */}
          <span aria-hidden className="absolute inset-0 bg-black/25 transition group-hover:bg-black/15" />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-lg ring-1 ring-black/5 transition group-hover:scale-105 sm:h-[4.5rem] sm:w-[4.5rem]">
            <PlayIcon className="h-7 w-7 text-rose sm:h-8 sm:w-8" />
          </span>
        </button>
      )}
    </div>
  );
}
