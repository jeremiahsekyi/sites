"use client";

import { FormEvent, useState } from "react";

const contactEmail = "management@thespeechfactory.org";

export function ConsultationForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Appointment request from ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nOrganisation: ${data.get("organisation")}\nPreferred date: ${data.get("date")}\nPreferred time: ${data.get("time")}\nTime zone: ${data.get("timezone")}\nInterested in: ${data.get("programme")}\n\nCommunication goal:\n${data.get("goal")}`,
    );
    setSent(true);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }

  return <form onSubmit={submit} className="grid gap-5 bg-white p-6 shadow-[0_24px_80px_rgba(16,35,63,0.12)] transition-shadow duration-500 hover:shadow-[0_30px_90px_rgba(16,35,63,0.18)] sm:p-9"><div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm font-bold">Name<input name="name" required className="min-h-12 border border-[#cfcabe] px-4 text-base font-normal" /></label><label className="grid gap-2 text-sm font-bold">Email<input name="email" type="email" required className="min-h-12 border border-[#cfcabe] px-4 text-base font-normal" /></label></div><label className="grid gap-2 text-sm font-bold">Organisation <span className="font-normal text-[#727680]">(optional)</span><input name="organisation" className="min-h-12 border border-[#cfcabe] px-4 text-base font-normal" /></label><div className="grid gap-5 sm:grid-cols-3"><label className="grid gap-2 text-sm font-bold">Preferred date<input name="date" type="date" required className="min-h-12 border border-[#cfcabe] px-4 text-base font-normal" /></label><label className="grid gap-2 text-sm font-bold">Preferred time<input name="time" type="time" required className="min-h-12 border border-[#cfcabe] px-4 text-base font-normal" /></label><label className="grid gap-2 text-sm font-bold">Time zone<input name="timezone" required className="min-h-12 border border-[#cfcabe] px-4 text-base font-normal" placeholder="e.g. GMT" /></label></div><label className="grid gap-2 text-sm font-bold">What are you interested in?<select name="programme" required className="min-h-12 border border-[#cfcabe] bg-white px-4 text-base font-normal"><option>Executive one-to-one coaching</option><option>Group coaching programme</option><option>Organisation-wide training</option><option>Workshop or speaking engagement</option><option>Not sure yet</option></select></label><label className="grid gap-2 text-sm font-bold">What would you like to improve?<textarea name="goal" required rows={5} className="border border-[#cfcabe] p-4 text-base font-normal" placeholder="Tell us about the communication challenge, goal or upcoming moment you are preparing for." /></label><button className="min-h-14 bg-[#ffcf24] px-6 text-base font-black text-[#10233f] hover:-translate-y-1 hover:bg-[#10233f] hover:text-white hover:shadow-lg">Request an appointment</button><p className="text-sm leading-6 text-[#696e78]">This opens a pre-filled email on your device. You can review your preferred appointment details before sending.</p>{sent && <p className="border-l-4 border-[#ffcf24] bg-[#f7f6f1] p-4 text-sm font-semibold">Your email draft is ready. If it did not open, email {contactEmail} directly.</p>}</form>;
}
