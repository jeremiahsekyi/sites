import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { testimonials } from "@/lib/content";
import styles from "./proof-pages.module.css";

export const coachingPath = "/executive-communication-coaching";
export function Action({href,children,secondary=false,event}:{href:string;children:React.ReactNode;secondary?:boolean;event?:string}) {
  return <Link href={href} className={secondary?styles.textLink:styles.button} data-analytics-event={event}>{children}<ArrowUpRight size={19} aria-hidden="true"/></Link>;
}
export function ExperienceStrip(){return <div className={styles.experience}><p className={styles.micro}>Our founder’s training experience includes professionals from</p><div><span>Microsoft</span><span className={styles.pwc}>pwc</span><span>Deloitte<span className={styles.dot}>.</span></span><span>HSBC</span><span className={styles.neom}>NEOM</span></div></div>;}
export function Testimonials({compact=false}:{compact?:boolean}){return <div className={`${styles.testimonials} ${compact?styles.compactQuotes:""}`}>{testimonials.slice(0,2).map((t,i)=><blockquote key={t.name} className={styles.quote} data-reveal><span className={styles.quoteMark} aria-hidden="true">“</span><p>{t.quote}</p><footer><Image src={t.image!} alt={t.name} width={60} height={60}/><div><strong>{t.name}</strong><span>{t.role}</span></div><span className={styles.quoteIndex}>0{i+1}</span></footer></blockquote>)}</div>;}
export function FinalInvitation(){return <section className={styles.final}><div className={styles.finalLines} aria-hidden="true"/><div className={styles.wrap}><p className={styles.eyebrow}>Your next chapter</p><h2>Your ideas deserve<br/>to <em>carry further.</em></h2><p>Tell us where communication needs to work harder for you. We’ll start there.</p><Action href="/book" event="communication_consultation_click">Book a Communication Consultation</Action><Link href="/programmes" className={styles.finalSecondary}>Explore our programmes <ArrowRight size={17}/></Link></div></section>;}
