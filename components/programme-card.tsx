import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { programmes } from "@/lib/content";

type Programme = (typeof programmes)[number];
export function ProgrammeCard({ programme }: { programme: Programme }) {
  return <article className="group grid overflow-hidden border border-[#d9d5ca] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#d94b35] hover:shadow-xl" data-reveal="scale"><div className="relative aspect-[4/3] overflow-hidden"><Image src={programme.image} alt="Speech Factory coaching session" fill className="object-cover object-top transition duration-700 group-hover:scale-[1.045]" sizes="(max-width: 768px) 100vw, 33vw" /></div><div className="flex min-h-72 flex-col p-7"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#d94b35]">{programme.label}</p><h3 className="display mt-4 text-3xl leading-tight">{programme.title}</h3><p className="mt-4 text-base leading-7 text-[#5f6470]">{programme.short}</p><Link href={`/programmes/${programme.slug}`} className="mt-auto flex items-center justify-between border-t border-[#e5e1d7] pt-5 font-extrabold text-[#10233f]">Explore programme <ArrowUpRight size={19} /></Link></div></article>;
}
