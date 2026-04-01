import React from "react";

const advisoryPillars = [
  {
    code: "STR-01",
    title: "Negotiations",
    description: "Principled deal structuring for high-value portfolios, executed with calibrated confidentiality and six decades of market memory.",
    accent: "group-hover:text-gold-leaf"
  },
  {
    code: "MGT-02",
    title: "Asset Management",
    description: "Operational oversight to preserve long-term value, occupancy quality, and the architectural integrity of premier Bangalore holdings.",
    accent: "group-hover:text-oxblood"
  },
  {
    code: "DEV-03",
    title: "Development",
    description: "Overseeing the transformation of land into architectural landmarks that respect historical context while meeting modern institutional standards.",
    accent: "group-hover:text-gold-leaf"
  },
  {
    code: "VAL-04",
    title: "Valuations",
    description: "Accurate appraisals and market intelligence grounded in proprietary data sets dating back to the foundation of the Mysore State.",
    accent: "group-hover:text-oxblood"
  },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-onyx py-32 px-6 md:py-48 lg:px-20">
      {/* Sketch Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blueprint" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" />
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-screen-2xl">
        {/* Header: Institutional Intent */}
        <div className="mb-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-end reveal-up">
          <div className="md:col-span-8">
            <span className="mb-6 block font-label text-[10px] uppercase tracking-[0.6em] text-gold-leaf">
              The Pillars
            </span>
            <h2 className="font-headline text-5xl md:text-8xl font-light text-parchment tracking-tightest leading-[0.85]">
              Core <span className="italic text-oxblood brightness-125">Advisory.</span>
            </h2>
          </div>
          <div className="md:col-span-4 border-l border-white/10 pl-8 pb-2">
            <p className="font-serif text-lg italic text-stone/40 leading-relaxed">
              Strategic stewardship of Bangalore’s most resilient real estate capital.
            </p>
          </div>
        </div>

        {/* Services Ledger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {advisoryPillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="group relative bg-onyx p-12 transition-all duration-700 hover:bg-stone/[0.03] cursor-pointer"
            >
              {/* Animated Corner Brackets */}
              <div className="absolute top-0 left-0 h-0 w-px bg-gold-leaf transition-all duration-700 group-hover:h-full" />
              <div className="absolute top-0 left-0 h-px w-0 bg-gold-leaf transition-all duration-700 group-hover:w-full" />

              <div className="flex flex-col h-full justify-between">
                <div>
                  <span className="mb-12 block font-label text-[9px] uppercase tracking-[0.4em] text-white/30 group-hover:text-gold-leaf transition-colors">
                    {pillar.code}
                  </span>
                  <h3 className={`mb-8 font-headline text-3xl text-parchment transition-all duration-500 ${pillar.accent} group-hover:italic`}>
                    {pillar.title}
                  </h3>
                </div>

                <div className="space-y-8">
                  <p className="font-serif text-sm leading-relaxed text-stone/40 group-hover:text-stone/70 transition-colors duration-500">
                    {pillar.description}
                  </p>

                  {/* Visual Sketch Detail: Measurement Line */}
                  <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="h-px flex-1 bg-gradient-to-r from-gold-leaf/40 to-transparent" />
                    <span className="font-label text-[8px] text-gold-leaf/50 tracking-widest">DETAILS</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Archival Note */}
        <div className="mt-16 text-center">
          <p className="font-label text-[9px] uppercase tracking-[0.5em] text-white/20">
            Confidential Consultation Required For Portfolio Access
          </p>
        </div>
      </div>
    </section>
  );
}