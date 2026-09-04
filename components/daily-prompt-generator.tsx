"use client";

import { RefreshCw, Sparkles } from "lucide-react";
import { useState } from "react";
import { speechPrompts } from "@/lib/speech-prompts";
import type { SpeechPrompt, SpeechPromptType } from "@/lib/speech-prompts";

const filters: Array<{ label: string; value: "all" | SpeechPromptType }> = [
  { label: "All prompts", value: "all" },
  { label: "Fundamentals", value: "fundamentals" },
  { label: "Essentials", value: "essentials" },
  { label: "Proverbs", value: "proverbs" },
  { label: "What if?", value: "hypotheticals" },
  { label: "Debates", value: "debates" },
  { label: "One word", value: "one-word" },
];

const typeLabels: Record<SpeechPromptType, string> = {
  fundamentals: "Fundamental prompt",
  essentials: "Essential speech",
  proverbs: "Proverb",
  hypotheticals: "Hypothetical",
  debates: "Debate motion",
  "one-word": "One-word prompt",
};

export function DailyPromptGenerator() {
  const [filter, setFilter] = useState<"all" | SpeechPromptType>("all");
  const [prompt, setPrompt] = useState<SpeechPrompt>(speechPrompts[0]);

  function generate(nextFilter = filter) {
    const pool = nextFilter === "all" ? speechPrompts : speechPrompts.filter((item) => item.type === nextFilter);
    const currentIndex = pool.findIndex((item) => item.text === prompt.text);
    let nextIndex = Math.floor(Math.random() * pool.length);
    if (pool.length > 1 && nextIndex === currentIndex) nextIndex = (nextIndex + 1) % pool.length;
    setPrompt(pool[nextIndex]);
  }

  function changeFilter(nextFilter: "all" | SpeechPromptType) {
    setFilter(nextFilter);
    generate(nextFilter);
  }

  return (
    <div className="overflow-hidden border border-white/15 bg-white text-[#131820] shadow-[0_28px_80px_rgba(0,0,0,0.18)]" data-reveal="right">
      <div className="flex flex-wrap gap-2 border-b border-[#e1ddd2] bg-[#f7f6f1] p-4" aria-label="Prompt type">
        {filters.map((item) => (
          <button
            key={item.value}
            type="button"
            onClick={() => changeFilter(item.value)}
            aria-pressed={filter === item.value}
            className={`min-h-11 px-4 text-sm font-extrabold ${filter === item.value ? "bg-[#10233f] text-white" : "border border-[#d2cdc1] bg-white text-[#10233f] hover:border-[#d94b35]"}`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="min-h-[310px] p-7 sm:p-9">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#d94b35]">
          <Sparkles size={16} aria-hidden="true" /> {typeLabels[prompt.type]}
        </div>
        <p
          key={prompt.text}
          className={`display prompt-enter mt-8 leading-[1.08] ${prompt.text.length > 82 ? "text-3xl sm:text-4xl" : "text-4xl sm:text-5xl"}`}
          aria-live="polite"
        >
          {prompt.text}
        </p>
      </div>
      <div className="flex flex-col gap-4 border-t border-[#e1ddd2] bg-[#f7f6f1] p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-[#626772]">Plan for one minute. Speak for two to three minutes.</p>
        <button
          type="button"
          onClick={() => generate()}
          className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 bg-[#ffcf24] px-5 font-black text-[#10233f] hover:-translate-y-1 hover:bg-[#10233f] hover:text-white hover:shadow-lg"
        >
          New prompt <RefreshCw size={17} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
