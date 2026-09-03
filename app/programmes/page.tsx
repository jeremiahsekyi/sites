import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { ProgrammeCard } from "@/components/programme-card";
import { programmes } from "@/lib/content";

export const metadata: Metadata = { title: "Programmes", description: "Communication coaching programmes for professionals, executives and organisations." };
export default function ProgrammesPage() { return <main><PageIntro eyebrow="Programmes" title="The right level of support for the work ahead." text="Choose an intensive cohort, private executive coaching or a programme designed around your organisation. Every option is practical, feedback-rich and tailored to real communication demands." /><section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="grid gap-6 lg:grid-cols-3">{programmes.map(p=><ProgrammeCard key={p.slug} programme={p}/>)}</div></section><section className="bg-[#ffcf24]"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 md:flex-row md:items-center md:justify-between lg:px-8"><div><h2 className="display text-4xl">Not sure which format fits?</h2><p className="mt-3 max-w-2xl leading-7">We will assess your goal, audience, timeline and working context, then recommend the right starting point.</p></div><Link href="/book-consultation" className="shrink-0 bg-[#10233f] px-6 py-4 font-black text-white">Book a consultation</Link></div></section></main>; }
