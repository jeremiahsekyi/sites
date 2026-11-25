import Image from "next/image";
import Link from "next/link";
import RegistrationForm from "./registration-form";

export const metadata = { title: "How to Ace Your Next Interview | Upcoming Workshops" };

export default function WorkshopPage() {
  return (
    <main>
      <section className="bg-[#10233f] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 lg:grid-cols-[3fr_2fr] lg:px-8 lg:py-20">
          <div>
            <Link href="/events#upcoming-workshops" className="font-bold text-[#ffcf24] underline underline-offset-4">← Events / Upcoming workshops</Link>
            <h1 className="display mt-7 max-w-3xl text-5xl leading-none sm:text-7xl">HOW TO ACE YOUR NEXT INTERVIEW</h1>
            <p className="mt-6 text-xl">Your next big opportunity starts with how well you prepare on your next interview!</p>
            <p className="mt-6 font-bold text-[#ffcf24]">29 November 2026 · 3–5 PM GMT · $25</p>
          </div>
          <Image src="/images/workshop-speaker.webp" alt="A participant speaking at a previous Speech Factory workshop" width={720} height={480} className="aspect-[3/2] w-full object-cover" />
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl items-start gap-10 px-5 py-14 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="space-y-5 text-lg leading-8">
          <h2 className="display text-4xl leading-tight">Show why you’re a good fit.</h2>
          <p>You have probably seen a job opening and thought, “I could do this,” then wondered whether your application would even stand a chance.</p>
          <p>As the year comes to an end, we want to help you feel more prepared to go for those opportunities, from companies here in Ghana to remote roles with international organisations.</p>
          <p>Join us to work on how you present your skills and experience, so you can walk into your next interview knowing how to explain why you are a good fit.</p>
          <a className="break-words font-semibold underline" href="mailto:management@thespeechfactory.org">management@thespeechfactory.org</a>
        </div>
        <RegistrationForm />
      </section>
    </main>
  );
}
