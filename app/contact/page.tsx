import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Contact", description: "Contact The Speech Factory." };
export default function ContactPage(){return <main><PageIntro eyebrow="Contact" title="Let’s talk about the work ahead." text="For coaching, team training, speaking engagements, partnerships or media enquiries, contact the team directly."/><section className="mx-auto max-w-4xl px-5 py-20 lg:px-8"><a href="mailto:management@thespeechfactory.org" className="group block border border-[#d9d5ca] bg-white p-7 hover:-translate-y-1 hover:border-[#10233f] hover:shadow-xl"><Mail className="text-[#d94b35]"/><h2 className="mt-8 text-2xl font-extrabold">Email</h2><p className="mt-3 break-words leading-7 text-[#626772]">management@thespeechfactory.org</p></a><div className="mt-12 bg-[#ffcf24] p-8 text-center sm:p-12"><h2 className="display text-4xl">Looking for coaching or training?</h2><p className="mx-auto mt-4 max-w-2xl leading-7">Use the appointment form to share your goal and preferred time before we speak.</p><Link href="/book" className="mt-7 inline-block bg-[#10233f] px-6 py-4 font-black text-white hover:-translate-y-1 hover:shadow-xl">Book an appointment</Link></div></section></main>}
