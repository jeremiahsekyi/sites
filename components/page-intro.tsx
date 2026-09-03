export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="bg-[#10233f] text-white"><div className="grain mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><p className="text-xs font-black uppercase tracking-[0.2em] text-[#ffcf24]">{eyebrow}</p><h1 className="display mt-5 max-w-4xl text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">{title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">{text}</p></div></section>;
}
