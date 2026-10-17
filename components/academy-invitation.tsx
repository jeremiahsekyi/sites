"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./academy-invitation.module.css";
const SEEN_KEY = "tsf:academy-invitation:v1";
export function AcademyInvitation() {
  const pathname = usePathname();
  const [visiblePath, setVisiblePath] = useState<string | null>(null);
  const seen = useRef(false);
  const excluded = pathname.startsWith("/group-coaching-2027") || pathname.startsWith("/admin") || pathname.startsWith("/internal");
  useEffect(() => {
    if (excluded || seen.current) return;
    try { if (sessionStorage.getItem(SEEN_KEY)) return; } catch { /* Storage is optional. */ }
    let timer: number;
    const show = () => {
      const focused = document.activeElement;
      if (document.hidden || focused?.matches("input, textarea, select, [contenteditable='true']") || document.querySelector("dialog[open], [role='dialog'][aria-modal='true']")) {
        timer = window.setTimeout(show, 3000);
        return;
      }
      seen.current = true;
      try { sessionStorage.setItem(SEEN_KEY, "shown"); } catch { /* In-memory fallback. */ }
      setVisiblePath(pathname);
    };
    timer = window.setTimeout(show, 18000);
    return () => window.clearTimeout(timer);
  }, [pathname, excluded]);
  const visible = !excluded && visiblePath === pathname;
  useEffect(() => {
    if (!visible) return;
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") setVisiblePath(null); };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [visible]);
  if (!visible) return null;
  return (
    <aside className={styles.invitation} aria-labelledby="academy-invitation-title">
      <button type="button" className={styles.close} onClick={() => setVisiblePath(null)} aria-label="Dismiss Academy invitation">×</button>
      <p className={styles.eyebrow}>Public Speaking Academy · Class of 2027</p>
      <h2 id="academy-invitation-title">Make this the year your voice catches up with your ideas.</h2>
      <p className={styles.description}>Explore our three-month Communication Excellence Programme. Practical group coaching, purposeful practice and feedback.</p>
      <Link href="/group-coaching-2027" className={styles.action} onClick={() => setVisiblePath(null)}>Explore the programme <span aria-hidden="true">↗</span></Link>
    </aside>
  );
}
