import React from "react";

const partners = [
  "Goldman Sachs",
  "The Oberoi Group",
  "ITC Limited",
  "Hyatt Regency",
  "Standard Chartered"
];

export function Partners() {
  return (
    <section className="relative overflow-hidden bg-parchment py-24 border-y border-onyx/5">
      {/* Background Architectural Detail */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none sketch-overlay" />

      <div className="relative z-10 mx-auto max-w-screen-2xl px-6 md:px-12">
        <div className="mb-16 flex flex-col items-center text-center reveal-up">
          <span className="mb-4 font-label text-[10px] uppercase tracking-[0.6em] text-gold-leaf">
            Institutional Alliances
          </span>
          <div className="h-px w-12 bg-oxblood/30"></div>
        </div>

        {/* The Registry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-onyx/5 border border-onyx/5">
          {partners.map((partner) => (
            <div
              key={partner}
              className="group relative flex aspect-video items-center justify-center bg-parchment p-8 transition-all duration-700 hover:bg-stone/10"
            >
              {/* Internal Corner Detail */}
              <div className="absolute top-2 right-2 h-1 w-1 border-t border-r border-gold-leaf/0 transition-all duration-500 group-hover:border-gold-leaf/40"></div>

              <p className="text-center font-headline text-lg md:text-xl tracking-tight text-onyx/30 transition-all duration-700 group-hover:italic group-hover:text-oxblood group-hover:scale-105">
                {partner}
              </p>

              {/* Technical Annotation (Visible on Hover) */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="font-label text-[7px] uppercase tracking-widest text-gold-leaf/50">
                  Certified Partner
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Metric */}
        <div className="mt-16 flex justify-center">
          <p className="font-label text-[8px] uppercase tracking-[0.4em] text-onyx/20">
            A Record of Sustained Strategic Relationships
          </p>
        </div>
      </div>
    </section>
  );
}