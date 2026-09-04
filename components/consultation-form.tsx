"use client";

import { CalendarDays, Clock3, ExternalLink } from "lucide-react";

const contactEmail = "management@thespeechfactory.org";
const bookingUrl = "https://calendar.app.google/UzbP7FBg1Awo21Pr6";

export function ConsultationForm() {
  return (
    <div className="relative isolate overflow-hidden bg-[#10233f] p-7 text-white shadow-[0_24px_80px_rgba(16,35,63,0.18)] sm:p-10">
      <div className="grain absolute inset-0 -z-10 opacity-30" aria-hidden="true" />
      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ffcf24]">Live appointment calendar</p>
      <h2 className="display mt-5 max-w-xl text-4xl leading-none sm:text-5xl">Choose a time that works for you.</h2>
      <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
        View current availability and confirm your consultation directly through Google Calendar. Available times will appear in your local time zone.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="border border-white/15 bg-white/5 p-5">
          <CalendarDays className="text-[#ffcf24]" aria-hidden="true" />
          <strong className="mt-4 block">See live availability</strong>
          <span className="mt-2 block text-sm leading-6 text-white/65">Choose from the appointments currently open.</span>
        </div>
        <div className="border border-white/15 bg-white/5 p-5">
          <Clock3 className="text-[#ffcf24]" aria-hidden="true" />
          <strong className="mt-4 block">Confirm instantly</strong>
          <span className="mt-2 block text-sm leading-6 text-white/65">Receive the appointment details in your calendar.</span>
        </div>
      </div>
      <a
        href={bookingUrl}
        className="mt-8 inline-flex min-h-14 w-full items-center justify-center gap-3 bg-[#ffcf24] px-6 text-center text-base font-black text-[#10233f] hover:-translate-y-1 hover:bg-white hover:shadow-xl"
      >
        Book directly in Google Calendar <ExternalLink size={18} aria-hidden="true" />
      </a>
      <p className="mt-5 text-sm leading-6 text-white/60">
        Need help before booking? Email <a className="font-bold text-white underline decoration-[#ffcf24] underline-offset-4" href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>
    </div>
  );
}
