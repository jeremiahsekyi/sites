"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function MotionObserver() {
  const pathname = usePathname();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.body.classList.add("motion-ready");
    const elements = Array.from(document.querySelectorAll("main > section, [data-reveal]"));
    elements.forEach((element, index) => { element.classList.remove("is-visible"); (element as HTMLElement).style.setProperty("--reveal-delay", `${Math.min(index * 45, 180)}ms`); });
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: 0.08, rootMargin: "0px 0px -40px" });
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);
  return null;
}
