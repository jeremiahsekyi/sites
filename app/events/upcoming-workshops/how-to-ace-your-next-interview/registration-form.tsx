"use client";
import { useState, type FormEvent } from "react";

export default function RegistrationForm() {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const field = "mt-2 block w-full rounded border border-slate-400 bg-white p-3 font-normal";

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const data = Object.fromEntries(new FormData(event.currentTarget));
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/workshops/interview-2026", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data),
      });
      if (!response.ok || (await response.json()).saved !== true) {
        throw new Error("save failed");
      }
      window.location.assign("https://paystack.shop/pay/xilc2l64e-");
    } catch {
      setError("We couldn’t save your registration. Check your details and try again, or contact the team.");
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} method="post" className="space-y-5 border-t-4 border-[#ffcf24] bg-slate-50 p-6 sm:p-9">
      <h2 className="display text-4xl">Register for the workshop</h2>
      <p>Limited slots available. We’ll save your details, then take you to Paystack. The $25 workshop fee is collected as one payment of GHS 290.</p>
      <label className="block font-bold">Full name<input required autoComplete="name" name="name" maxLength={120} className={field} /></label>
      <label className="block font-bold">Email address<input required type="email" autoComplete="email" name="email" maxLength={254} className={field} /></label>
      <label className="block font-bold">Phone (optional)<input type="tel" autoComplete="tel" name="phone" maxLength={40} className={field} /></label>
      <label className="block font-bold">What role are you preparing for? (optional)<textarea name="context" maxLength={500} rows={2} className={field} /></label>
      {error && <p role="alert" className="text-red-800">{error}</p>}
      <button disabled={busy} className="w-full bg-[#10233f] px-5 py-4 font-bold text-white disabled:opacity-70">{busy ? "Saving registration…" : "Continue to Paystack · GHS 290"}</button>
    </form>
  );
}
