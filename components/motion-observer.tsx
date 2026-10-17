"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
export function MotionObserver() {
  const pathname = usePathname();
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = Array.from(document.querySelectorAll<HTMLElement>("main > section, [data-reveal]"));
    let observer: IntersectionObserver | undefined;
    const configure = () => {
      observer?.disconnect();
      document.body.classList.remove("motion-ready");
      if (preference.matches || !("IntersectionObserver" in window)) {
        elements.forEach(element => element.classList.add("is-visible"));
        return;
      }
      elements.forEach((element, index) => {
        element.classList.remove("is-visible");
        element.style.setProperty("--reveal-delay", `${Math.min(index * 45, 180)}ms`);
      });
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
          else if (!entry.target.contains(document.activeElement)) entry.target.classList.remove("is-visible");
        });
      }, { threshold: 0 });
      document.body.classList.add("motion-ready");
      elements.forEach(element => observer!.observe(element));
    };
    configure();
    preference.addEventListener("change", configure);
    return () => {
      observer?.disconnect();
      preference.removeEventListener("change", configure);
      document.body.classList.remove("motion-ready");
      elements.forEach(element => { element.classList.remove("is-visible"); element.style.removeProperty("--reveal-delay"); });
    };
  }, [pathname]);
  return null;
}
