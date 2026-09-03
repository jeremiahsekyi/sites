import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Events",
  description: "Live learning, speaking and community events from The Speech Factory.",
};

const experiences = [
  "Live speeches from selected participants",
  "Special guests and panel conversations",
  "Networking across our community",
  "Participant recognition and certificates",
  "Preparation support for selected speakers",
  "Future speaking and leadership opportunities",
];

export default function EventsPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Events"
        title="Where practice becomes performance."
        text="Live experiences for people who want to learn, practise and connect through powerful communication."
      />
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <div className="group relative aspect-[3/2] overflow-hidden">
          <Image
            src="/images/workshop-speaker.webp"
            alt="A participant speaking during a Speech Factory workshop"
            fill
            priority
            className="object-cover transition duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#d94b35]">The Speech Festival</p>
          <h2 className="display mt-5 text-5xl leading-none">A stage for growth, ideas and courage.</h2>
          <p className="mt-6 text-lg leading-8 text-[#626772]">
            Selected programme participants share ideas before a live audience and experience the real-world power of a well-crafted speech.
          </p>
          <p className="mt-4 text-lg leading-8 text-[#626772]">
            The event brings together participants, alumni, coaches, partners, organisations and invited guests for speeches, panel conversations and meaningful professional connection.
          </p>
        </div>
      </section>
      <section className="bg-[#ffcf24]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <h2 className="display text-4xl">What to expect</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {experiences.map((experience, index) => (
              <article key={experience} className="bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <span className="text-sm font-black text-[#d94b35]">0{index + 1}</span>
                <p className="mt-5 font-extrabold leading-7">{experience}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-5 py-20 text-center">
        <h2 className="display text-5xl">Interested in attending, speaking or partnering?</h2>
        <p className="mt-5 text-lg leading-8 text-[#626772]">
          Contact the team for the next event date, participation criteria and partnership opportunities.
        </p>
        <Link href="/contact" className="mt-8 inline-flex items-center gap-2 bg-[#10233f] px-6 py-4 font-black text-white hover:-translate-y-1 hover:bg-[#d94b35]">
          Contact the events team <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}
