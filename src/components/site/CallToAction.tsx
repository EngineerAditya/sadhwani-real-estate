import React from "react";
import Link from "next/link";

export function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-onyx py-32 px-6 md:py-64 lg:px-20">
      {/* Background Architectural Sketch Detail */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ledger-grid" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M 120 0 L 0 0 0 120" fill="none" stroke="white" strokeWidth="0.3" />
              <circle cx="60" cy="60" r="0.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ledger-grid)" />
        </svg>
      </div>

      {/* The Invitation Frame */}
      <div className="relative z-10 mx-auto max-w-4xl border-[0.5px] border-white/10 bg-onyx p-12 md:p-24 text-center shadow-2xl reveal-up">

        {/* Corner Brackets (Institutional Marking) */}
        <div className="absolute top-0 left-0 h-12 w-12 border-t border-l border-gold-leaf/30"></div>
        <div className="absolute top-0 right-0 h-12 w-12 border-t border-r border-gold-leaf/30"></div>
        <div className="absolute bottom-0 left-0 h-12 w-12 border-b border-l border-gold-leaf/30"></div>
        <div className="absolute bottom-0 right-0 h-12 w-12 border-b border-r border-gold-leaf/30"></div>

        <span className="mb-10 block font-label text-[10px] uppercase tracking-[0.6em] text-gold-leaf/80">
          Private Advisory
        </span>

        <h2 className="font-headline text-5xl md:text-8xl font-light leading-[0.85] text-parchment tracking-tightest mb-12">
          Discretion is our <br />
          <span className="italic text-oxblood brightness-125">Permanent Standard.</span>
        </h2>

        <div className="mx-auto mb-16 h-px w-24 bg-gold-leaf/20"></div>

        <p className="mx-auto mb-16 max-w-xl font-serif text-lg italic text-stone/40 leading-relaxed md:text-xl">
          Confidential consultations are available for legacy holdings, brokerage mandates,
          and strategic investment acquisition opportunities.
        </p>

        <div className="flex flex-col items-center">
          <Link
            href="#contact"
            className="group relative overflow-hidden bg-oxblood px-16 py-6 font-label text-[11px] uppercase tracking-[0.4em] text-parchment transition-all duration-700 hover:px-20"
          >
            {/* Hover Slide Effect */}
            <div className="absolute inset-0 z-0 -translate-x-full bg-onyx transition-transform duration-500 ease-out group-hover:translate-x-0"></div>

            <span className="relative z-10">Request Appointment</span>
          </Link>

          <span className="mt-8 font-label text-[8px] uppercase tracking-widest text-white/20">
            Response protocol: Within 24 Hours
          </span>
        </div>
      </div>

      {/* Decorative Technical Detail */}
      <div className="absolute bottom-12 right-12 hidden lg:flex flex-col items-end gap-2">
        <div className="h-px w-32 bg-gradient-to-l from-gold-leaf/40 to-transparent"></div>
        <span className="font-label text-[8px] uppercase tracking-widest text-white/10">
          Archive Ref: SADHWANI-CTA-04
        </span>
      </div>
    </section>
  );
}