"use client";

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

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof window.setInterval> | undefined;
    const updateRotation = () => {
      window.clearInterval(timer);
      if (!motion.matches) {
        timer = window.setInterval(() => {
          setCurrent((index) => (index + 1) % coachPhotos.length);
        }, 6500);
      }
    };
    updateRotation();
    motion.addEventListener("change", updateRotation);
    return () => {
      window.clearInterval(timer);
      motion.removeEventListener("change", updateRotation);
    };
  }, []);

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
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${current === index ? "z-10 opacity-100" : "z-0 opacity-0"}`}
          aria-hidden={current !== index}
        >
          <Image
            src={photo.src}
            alt={current === index ? photo.alt : ""}
            fill
            className={`${photo.position} object-cover transition-transform duration-[6500ms] ease-out motion-reduce:transition-none motion-reduce:transform-none ${current === index ? "scale-[1.025]" : "scale-100"}`}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      ))}

    </div>
  );
}
