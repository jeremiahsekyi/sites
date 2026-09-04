import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FileText, Lightbulb, Video } from "lucide-react";
import { DailyPromptGenerator } from "@/components/daily-prompt-generator";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Resources",
  description: "Practical communication resources from The Speech Factory.",
};

const resourceTypes = [
  [FileText, "Guides", "Structured exercises for clearer messages, stronger speeches and better preparation."],
  [Video, "Lessons", "Short teaching sessions that make communication principles easier to apply."],
  [Lightbulb, "Ideas", "Research, commentary and practical analysis on communication, leadership and AI."],
] as const;

const practiceTestimonials = [
  {
    quote: "In the space of one month I did two speaking engagements and felt so confident and captivating on stage. I am incredibly grateful.",
    name: "Sharon David",
    country: "United Kingdom",
  },
  {
    quote: "The programme has made me a far more intentional communicator. It hasn’t changed what I want to say; it has changed how effectively I say it.",
    name: "Aderohunmu Damilola",
    country: "Nigeria",
  },
  {
    quote: "It has been an enlightening experience. My attention was drawn to specific areas of improvement with each feedback received.",
    name: "Sandra Ofori Boamah",
    country: "Ghana",
  },
] as const;

export default function ResourcesPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Resources"
        title="Useful thinking for your next important conversation."
        text="Practical tools on public speaking, leadership communication and staying distinctly human in an AI-shaped workplace."
      />
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {resourceTypes.map(([Icon, title, description]) => (
            <article key={title} className="border border-[#d9d5ca] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#d94b35] hover:shadow-xl">
              <Icon className="text-[#d94b35]" />
              <h2 className="mt-8 text-2xl font-extrabold">{title}</h2>
              <p className="mt-4 leading-7 text-[#626772]">{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-[#10233f] text-white">
        <div className="grain mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div data-reveal="left">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ffcf24]">Daily speech practice</p>
              <h2 className="display mt-5 text-5xl leading-none sm:text-6xl">One prompt. One clear idea. A stronger speaking habit.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
                These prompts come from our Daily Speech Practice programme, which runs from June to August. It has welcomed around 100 participants from 11 countries.
              </p>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/55">
                Ghana, China, the United States, Nigeria, the United Kingdom, Singapore, France, the Netherlands, Portugal, Australia and Cuba.
              </p>
              <p className="mt-7 max-w-xl leading-7 text-white/70">
                Choose from fundamentals, essential speeches, proverbs, hypotheticals, debate motions and one-word challenges. Build around one message, one strong example and one memorable takeaway.
              </p>
            </div>
            <DailyPromptGenerator />
          </div>
          <div className="mt-16 border-t border-white/15 pt-10">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ffcf24]">From the community</p>
            <div className="mt-7 grid gap-5 lg:grid-cols-3">
              {practiceTestimonials.map((testimonial) => (
                <blockquote key={testimonial.name} className="flex h-full flex-col border border-white/15 bg-white/5 p-6" data-reveal="scale">
                  <p className="display text-2xl leading-9 text-white">“{testimonial.quote}”</p>
                  <footer className="mt-auto pt-7 text-sm">
                    <strong>{testimonial.name}</strong>
                    <span className="block text-white/55">{testimonial.country}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#e9e6dc]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div data-reveal="left">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#d94b35]">Listen and learn</p>
            <h2 className="display mt-5 text-5xl leading-none">Communication ideas, unpacked in conversation.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#626772]">
              Our evolving media library will bring practical lessons, interviews and thoughtful conversations together in one place.
            </p>
          </div>
          <div className="group relative aspect-[4/3] overflow-hidden" data-reveal="right">
            <Image
              src="/images/podcast.webp"
              alt="Jeremiah Kobby Sekyi recording a communication lesson"
              fill
              className="object-cover object-[50%_38%] transition duration-1000 group-hover:scale-[1.04]"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="bg-[#10233f] p-8 text-white sm:p-12">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ffcf24]">Library relaunch</p>
          <h2 className="display mt-4 text-4xl">The new resource library is being prepared.</h2>
          <p className="mt-5 max-w-2xl leading-7 text-white/70">
            Tell us what you are working on and we will point you to the most relevant existing resource or programme.
          </p>
          <Link
            href="mailto:management@thespeechfactory.org?subject=Speech%20Factory%20resource%20request"
            className="mt-7 inline-block bg-[#ffcf24] px-6 py-4 font-black text-[#10233f] hover:-translate-y-1 hover:bg-white"
          >
            Request a resource
          </Link>
        </div>
      </section>
    </main>
  );
}
