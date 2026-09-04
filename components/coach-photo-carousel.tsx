"use client";

import { Pause, Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const coachPhotos = [
  {
    src: "/images/coach-stage.jpeg",
    alt: "Jeremiah Kobby Sekyi speaking at an international conference",
    position: "object-[52%_center]",
  },
  {
    src: "/images/jeremiah-sekyi.webp",
    alt: "Jeremiah Kobby Sekyi, founder and lead coach",
    position: "object-top",
  },
  {
    src: "/images/coach-portrait.webp",
    alt: "Jeremiah Kobby Sekyi in a relaxed portrait",
    position: "object-[50%_34%]",
  },
  {
    src: "/images/coach-session.webp",
    alt: "Jeremiah Kobby Sekyi leading a communication session",
    position: "object-[52%_38%]",
  },
] as const;

export function CoachPhotoCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setCurrent((index) => (index + 1) % coachPhotos.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [current, isPaused]);

  return (
    <div
      className="group relative aspect-[4/5] max-h-[690px] overflow-hidden bg-[#10233f]"
      role="region"
      aria-roledescription="carousel"
      aria-label="Jeremiah Kobby Sekyi coaching and speaking"
    >
      {coachPhotos.map((photo, index) => (
        <div
          key={photo.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${current === index ? "z-10 opacity-100" : "z-0 opacity-0"}`}
          aria-hidden={current !== index}
        >
          <Image
            src={photo.src}
            alt={current === index ? photo.alt : ""}
            fill
            className={`${photo.position} object-cover transition-transform duration-[6500ms] ease-out ${current === index ? "scale-[1.025]" : "scale-100"}`}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      ))}

      <div className="absolute bottom-4 left-4 z-20 bg-[#10233f]/85 px-3 py-2 text-xs font-black tracking-[0.16em] text-white backdrop-blur-sm" aria-hidden="true">
        {String(current + 1).padStart(2, "0")} / {String(coachPhotos.length).padStart(2, "0")}
      </div>

      <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1 bg-[#10233f]/85 p-1.5 text-white backdrop-blur-sm">
        {coachPhotos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            aria-label={`Show photo ${index + 1}`}
            aria-current={current === index ? "true" : undefined}
            onClick={() => setCurrent(index)}
            className="grid h-8 w-8 place-items-center"
          >
            <span className={`h-2.5 w-2.5 rounded-full border border-white transition ${current === index ? "scale-110 bg-[#ffcf24]" : "bg-transparent"}`} />
          </button>
        ))}
        <button
          type="button"
          onClick={() => setIsPaused((paused) => !paused)}
          aria-label={isPaused ? "Resume photo rotation" : "Pause photo rotation"}
          className="grid h-8 w-8 place-items-center border-l border-white/30 pl-1"
        >
          {isPaused ? <Play size={15} fill="currentColor" /> : <Pause size={15} fill="currentColor" />}
        </button>
      </div>
    </div>
  );
}
