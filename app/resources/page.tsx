import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FileText, Lightbulb, Video } from "lucide-react";
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
      <section className="bg-[#e9e6dc]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#d94b35]">Listen and learn</p>
            <h2 className="display mt-5 text-5xl leading-none">Communication ideas, unpacked in conversation.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#626772]">
              Our evolving media library will bring practical lessons, interviews and thoughtful conversations together in one place.
            </p>
          </div>
          <div className="group relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/podcast.webp"
              alt="Jeremiah Kobby Sekyi recording a communication lesson"
              fill
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
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
            href="mailto:jeremiah@thespeechfactory.org?subject=Speech%20Factory%20resource%20request"
            className="mt-7 inline-block bg-[#ffcf24] px-6 py-4 font-black text-[#10233f] hover:-translate-y-1 hover:bg-white"
          >
            Request a resource
          </Link>
        </div>
      </section>
    </main>
  );
}
