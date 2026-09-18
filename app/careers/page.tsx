import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | Business Development Associate",
  description: "Join The Speech Factory as a full-time, remote Business Development Associate. Applications close 15 October 2026, Anywhere on Earth.",
};

const responsibilities = [
  { title: "Business development & growth", text: "Find the opportunity. Follow it through.", items: [
    "Research potential clients, organisations, audiences and markets to identify new business opportunities.",
    "Support outreach and lead generation, contact prospective clients and follow up consistently.",
    "Maintain a clear pipeline of clients and opportunities, moving each conversation towards its next stage.",
    "Help prepare proposals, pitches and other business development materials.",
    "Contribute practical ideas to grow our visibility, reach and client base.",
  ] },
  { title: "Client & partnership engagement", text: "Build relationships that move things forward.", items: [
    "Build and maintain positive relationships with clients, prospective clients and partners.",
    "Follow up on enquiries, meetings, proposals and agreed next steps.",
    "Support communication and coordination throughout client engagements.",
    "Identify organisations and communities for partnerships, and support outreach and ongoing communication.",
    "Help coordinate partnership activities and ensure agreed actions are completed.",
  ] },
  { title: "Marketing & communications", text: "Help the right people discover our work.", items: [
    "Support the planning and delivery of marketing initiatives and campaigns.",
    "Promote our programmes, courses, workshops and services.",
    "Support social media planning, publishing and community engagement.",
    "Contribute content and campaign ideas that build awareness and attract prospective clients.",
    "Research relevant trends, audiences and platforms, and help develop simple marketing and communication materials.",
  ] },
];

const qualities = [
  "Proactive, organised and resourceful, with the follow-through to turn an idea into action.",
  "Comfortable reaching out to new people and organisations, building relationships and communicating clearly.",
  "Able to manage several priorities while keeping track of the details and taking responsibility for next steps.",
  "Interested in business development, marketing, communications, partnerships or client engagement.",
  "Confident using social media and digital tools, and curious enough to learn new ones.",
  "Able to work independently, use judgement and ask for direction when it is needed.",
];

const qualifications = [
  "A bachelor’s degree or equivalent experience in Business, Marketing, Communications, Management or a related field.",
  "1–3 years of relevant experience in business development, sales, marketing, client management, partnerships, communications or a related area.",
  "Strong written and verbal communication skills, alongside good organisational and coordination skills.",
  "Comfort working with Google Workspace, social media platforms and other digital tools.",
  "Basic experience with Canva or a similar design tool is an advantage.",
];

export default function CareersPage() {
  return <main>
    <section className="bg-[#10233f] text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
        <div>
          <Link href="/about" className="text-sm font-bold text-white/75 underline underline-offset-4">Meet The Speech Factory</Link>
          <p className="mt-9 text-sm font-black uppercase tracking-[0.2em] text-[#ffcf24]">Careers · We’re hiring</p>
          <h1 className="display mt-5 text-5xl leading-[1.04] sm:text-6xl lg:text-7xl">Business Development Associate</h1>
          <div className="mt-7 flex flex-wrap gap-3 text-sm font-bold"><span className="border border-white/30 px-4 py-2">Full-time</span><span className="border border-white/30 px-4 py-2">Remote</span><span className="border border-white/30 px-4 py-2">Early career</span></div>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/80">Help us reach more people, build lasting relationships and turn new opportunities into growth.</p>
          <a href="#apply" className="mt-8 inline-flex items-center gap-3 bg-[#ffcf24] px-6 py-4 font-black text-[#10233f] transition hover:-translate-y-1">How to apply <ArrowRight size={18} aria-hidden="true" /></a>
        </div>
        <figure className="m-0"><div className="relative aspect-[4/5] overflow-hidden sm:aspect-[3/2] lg:aspect-[4/5]"><Image src="/images/team-culture.webp" alt="The Speech Factory team together" fill priority unoptimized className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" /></div><figcaption className="mt-4 text-sm leading-6 text-white/70">The people behind the programmes. Be part of what comes next.</figcaption></figure>
      </div>
    </section>

    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1fr_320px] lg:gap-20 lg:px-8 lg:py-24">
      <div>
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d94b35]">About us & the role</p>
        <h2 className="display mt-4 text-4xl leading-tight sm:text-5xl">Help good communication reach further.</h2>
        <div className="mt-6 space-y-5 text-lg leading-8 text-[#626772]">
          <p>The Speech Factory helps individuals, professionals, teams and organisations communicate with greater clarity, confidence and impact. As we grow, we’re looking for a proactive, hands-on Business Development Associate to expand our reach and create new opportunities.</p>
          <p>You’ll support our growth through business development, client engagement, partnerships and marketing. This is an early-career role for someone who enjoys working with people, spotting opportunities and getting things done.</p>
          <p>You’ll work closely with the <strong className="text-[#10233f]">Programme Manager</strong> on day-to-day activities and execution, and with the <strong className="text-[#10233f]">Founder</strong> on business development, partnerships, client opportunities and other growth initiatives.</p>
        </div>
        <div className="mt-9 border-l-4 border-[#ffcf24] bg-[#f3f5f7] p-6 sm:p-8"><h3 className="text-2xl font-extrabold text-[#10233f]">Ownership matters here.</h3><p className="mt-3 text-lg leading-8 text-[#626772]">This is a role for a doer. When you see something that needs to be done, you take initiative, work out the next steps and follow through. You bring ideas, ask thoughtful questions and get things moving.</p></div>
      </div>
      <aside id="apply" className="scroll-mt-28 self-start border-t-4 border-[#ffcf24] bg-[#10233f] p-6 text-white sm:p-8 lg:sticky lg:top-28">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ffcf24]">Your next step</p><h2 className="display mt-4 text-3xl">Apply to join us.</h2>
        <p className="mt-5 leading-7 text-white/80">Send us:</p><ol className="mt-3 list-decimal space-y-3 pl-5 leading-7 text-white/90"><li>Your current CV.</li><li>A brief cover letter explaining your interest and what you would bring to The Speech Factory.</li></ol>
        <div className="my-7 border-y border-white/20 py-5"><p className="text-sm font-bold text-white/70">Application deadline</p><p className="mt-2 text-xl font-extrabold">15 October 2026</p><p className="mt-1 text-sm leading-6 text-white/75">23:59 Anywhere on Earth (AoE, UTC−12)</p></div>
        <a href="mailto:management@thespeechfactory.org?subject=Application%3A%20Business%20Development%20Associate" className="inline-flex w-full items-center justify-center gap-2 bg-[#ffcf24] px-4 py-4 font-black text-[#10233f] transition hover:bg-white"><Mail size={18} aria-hidden="true" />Apply by email</a>
        <a href="mailto:management@thespeechfactory.org" className="mt-4 block break-all text-sm leading-6 text-white/85 underline underline-offset-4">management@thespeechfactory.org</a>
        <p className="mt-4 text-sm leading-6 text-white/70">Attach both documents before sending.</p>
      </aside>
    </section>

    <section className="bg-[#f3f5f7]"><div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d94b35]">What you’ll do</p><h2 className="display mt-4 text-4xl sm:text-5xl">Three ways you’ll help us grow.</h2>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">{responsibilities.map((area, i) => <article key={area.title} className="border-t-4 border-[#ffcf24] bg-white p-6 sm:p-8"><span className="text-sm font-black text-[#d94b35]">0{i + 1}</span><h3 className="mt-5 text-2xl font-extrabold leading-tight text-[#10233f]">{area.title}</h3><p className="mt-3 font-serif text-lg italic leading-7 text-[#626772]">{area.text}</p><ul className="mt-6 list-disc space-y-4 pl-5 leading-7 text-[#626772]">{area.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div>
    </div></section>

    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-24">
      <div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#d94b35]">What we’re looking for</p><h2 className="display mt-4 text-4xl leading-tight">Initiative, curiosity and follow-through.</h2><ul className="mt-7 list-disc space-y-4 pl-5 text-lg leading-8 text-[#626772]">{qualities.map(item => <li key={item}>{item}</li>)}</ul></div>
      <div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#d94b35]">Experience & qualifications</p><h2 className="display mt-4 text-4xl leading-tight">The foundations you’ll bring.</h2><ul className="mt-7 list-disc space-y-4 pl-5 text-lg leading-8 text-[#626772]">{qualifications.map(item => <li key={item}>{item}</li>)}</ul><p className="mt-7 border-l-4 border-[#ffcf24] pl-5 text-lg font-semibold leading-8 text-[#10233f]">We also welcome exceptional early-career candidates who can demonstrate the right attitude, initiative and ability to learn.</p></div>
    </section>
    <section className="bg-[#ffcf24] text-[#10233f]"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 py-12 md:flex-row md:items-center lg:px-8"><div><h2 className="display text-3xl sm:text-4xl">Ready to get things moving?</h2><p className="mt-3 text-lg">Send your CV and brief cover letter by 15 October 2026, AoE.</p></div><a href="#apply" className="inline-flex shrink-0 items-center gap-3 bg-[#10233f] px-6 py-4 font-black text-white">Apply for this role <ArrowRight size={18} aria-hidden="true" /></a></div></section>
  </main>;
}
