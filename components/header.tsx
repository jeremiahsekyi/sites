"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [["Home", "/"], ["About", "/about"], ["Programmes", "/programmes"], ["Events", "/events"], ["Resources", "/resources"]] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function close(event: PointerEvent) { if (menuRef.current && !menuRef.current.contains(event.target as Node)) setOpen(false); }
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    }
    function closeAtDesktopWidth() { if (window.innerWidth >= 1024) setOpen(false); }
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", escape);
    window.addEventListener("resize", closeAtDesktopWidth);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", escape);
      window.removeEventListener("resize", closeAtDesktopWidth);
    };
  }, []);

  return <header className="sticky top-0 z-50 border-b border-[#25344c] bg-[#10233f]/95 text-white backdrop-blur"><div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-5 lg:px-8"><Link href="/" className="group flex items-center gap-3" aria-label="The Speech Factory home"><span className="grid h-10 w-10 place-items-center bg-[#ffcf24] text-lg font-black text-[#10233f] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">SF</span><span className="text-sm font-extrabold uppercase tracking-[0.16em] sm:text-base">The Speech Factory</span></Link><nav className="hidden items-center gap-7 text-sm font-semibold lg:flex" aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href} className={`relative py-2 transition-colors hover:text-[#ffcf24] ${pathname === href ? "text-[#ffcf24] after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:bg-[#ffcf24]" : ""}`}>{label}</Link>)}<Link href="/book" className="bg-[#ffcf24] px-5 py-3 font-extrabold text-[#10233f] transition duration-300 hover:-translate-y-0.5 hover:bg-white">Book</Link></nav><div ref={menuRef} className="relative lg:hidden" onPointerLeave={(event) => { if (event.pointerType === "mouse") setOpen(false); }} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}><button ref={menuButtonRef} type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(value => !value)} className="border border-white/40 px-4 py-2 text-sm font-bold transition hover:border-white">{open ? "Close" : "Menu"}</button><nav id="mobile-menu" inert={!open} aria-hidden={!open} className={`absolute right-0 top-14 max-h-[calc(100dvh-6rem)] w-[min(20rem,calc(100vw-2.5rem))] origin-top-right overflow-y-auto border border-[#25344c] bg-[#10233f] p-4 shadow-2xl transition duration-200 ${open ? "visible translate-y-0 scale-100 opacity-100" : "invisible -translate-y-2 scale-95 opacity-0"}`} aria-label="Mobile navigation"><div className="flex flex-col gap-1">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className={`px-3 py-3 font-semibold transition hover:bg-white/10 ${pathname === href ? "bg-white/10 text-[#ffcf24]" : ""}`}>{label}</Link>)}<Link href="/book" onClick={() => setOpen(false)} className="mt-2 bg-[#ffcf24] px-3 py-3 font-extrabold text-[#10233f]">Book</Link></div></nav></div></div></header>;
}
