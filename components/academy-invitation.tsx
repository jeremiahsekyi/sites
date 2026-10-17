"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./academy-invitation.module.css";

export function AcademyInvitation() {
  const pathname = usePathname();
  const [visiblePath, setVisiblePath] = useState<string | null>(null);
  const previousPath = useRef(pathname);
  const hasNavigated = useRef(false);
  const excluded = pathname.startsWith("/group-coaching-2027") || pathname.startsWith("/admin") || pathname.startsWith("/internal");

  useEffect(() => {
    if (previousPath.current !== pathname) {
      hasNavigated.current = true;
      previousPath.current = pathname;
    }
    if (excluded) return;
    // New pages open the invitation immediately; the initial homepage uses idle time.
    if (pathname !== "/" || hasNavigated.current) {
      setVisiblePath(pathname);
      return;
    }
    let timer: number | undefined;
    const activityEvents = ["pointermove", "pointerdown", "keydown", "wheel", "scroll", "touchstart"] as const;
    const clearTimer = () => { if (timer !== undefined) window.clearTimeout(timer); };
    const stopListening = () => {
      clearTimer();
      activityEvents.forEach(event => window.removeEventListener(event, resetIdle));
      document.removeEventListener("visibilitychange", resetIdle);
    };
    function resetIdle() {
      clearTimer();
      if (document.hidden) return;
      timer = window.setTimeout(() => {
        if (document.hidden) return;
        setVisiblePath(pathname);
        stopListening();
      }, 5000);
    }
    activityEvents.forEach(event => window.addEventListener(event, resetIdle, { passive: true }));
    document.addEventListener("visibilitychange", resetIdle);
    resetIdle();
    return stopListening;
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
