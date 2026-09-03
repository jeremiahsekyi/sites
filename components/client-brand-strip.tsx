import Image from "next/image";

const brands = [
  { name: "Microsoft", logo: "/brands/microsoft.svg" },
  { name: "PwC", wordmark: "pwc", className: "brand-pwc" },
  { name: "Deloitte", wordmark: "Deloitte.", className: "brand-deloitte" },
  { name: "HSBC", logo: "/brands/hsbc.svg" },
  { name: "NEOM", wordmark: "NEOM", className: "brand-neom" },
  { name: "Seismic", wordmark: "SEISMIC", className: "brand-seismic" },
] as const;

function BrandGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-4 pr-4" aria-hidden={duplicate || undefined}>
      {brands.map((brand) => (
        <div className="client-logo-card" key={brand.name} title={brand.name}>
          {"logo" in brand ? (
            <Image src={brand.logo} alt={duplicate ? "" : brand.name} width={170} height={44} className="h-10 w-auto max-w-[145px]" />
          ) : (
            <span className={`brand-wordmark ${brand.className}`} aria-label={brand.name}>{brand.wordmark}</span>
          )}
        </div>
      ))}
    </div>
  );
}

export function ClientBrandStrip() {
  return (
    <section className="overflow-hidden border-y border-[#d9d5ca] bg-white py-7" aria-label="Selected client experience">
      <p className="mx-auto mb-5 max-w-7xl px-5 text-center text-[0.68rem] font-black uppercase tracking-[0.24em] text-[#6b7079] lg:px-8">Selected client experience</p>
      <div className="marquee-mask">
        <div className="marquee-track flex w-max items-center">
          <BrandGroup />
          <BrandGroup duplicate />
        </div>
      </div>
    </section>
  );
}
