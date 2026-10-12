"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const photos = [
  { src: "group-practice", alt: "A coach and participant practising communication at a Speech Factory workshop" },
  { src: "shared-moments", alt: "Participants enjoying a practical speaking session" },
  { src: "learn-together", alt: "A group learning together with a Speech Factory coach" },
];

export function HeroPhotos() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setInterval> | undefined;
    const updateRotation = () => {
      clearInterval(timer);
      if (!motion.matches) {
        timer = setInterval(() => setCurrent((index) => (index + 1) % photos.length), 8500);
      }
    };
    updateRotation();
    motion.addEventListener("change", updateRotation);
    return () => {
      clearInterval(timer);
      motion.removeEventListener("change", updateRotation);
    };
  }, []);

  return (
    <div className="professional-hero-photos">
      {photos.map((photo, index) => (
        <div
          className={index === current ? "professional-photo active" : "professional-photo"}
          key={photo.src}
          aria-hidden={index !== current}
        >
          <Image src={`/images/academy/${photo.src}.webp`} alt={photo.alt} fill priority={index === 0} sizes="100vw" />
        </div>
      ))}
    </div>
  );
}
