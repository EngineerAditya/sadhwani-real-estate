import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-onyx pt-32 pb-12 px-6 md:pt-48 lg:px-20 text-parchment">
      {/* Decorative Architectural Line - Vertical Anchor */}
      <div className="absolute left-12 top-0 h-full w-px bg-white/5 hidden lg:block" />

      <div className="relative z-10 mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 pb-32">

          {/* Brand Signature & Address */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="font-headline text-5xl md:text-6xl tracking-tightest italic text-parchment">
                Sadhwani
              </Link>
              <div className="mt-12 space-y-4 border-l border-gold-leaf/20 pl-8">
                <p className="font-label text-[10px] uppercase tracking-[0.4em] text-stone/40 leading-loose">
                  12 Lavelle Road <br />
                  Bangalore, KA 560001 <br />
                  Republic of India
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-12">

            {/* Column 1: The Records */}
            <div>
              <h4 className="mb-10 font-label text-[10px] uppercase tracking-[0.6em] text-gold-leaf">
                The Archives
              </h4>
              <ul className="space-y-6">
                {["Historic Roots", "Asset Gallery", "Press Notes"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="font-serif text-sm italic text-stone/40 hover:text-parchment transition-colors duration-500">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Governance */}
            <div>
              <h4 className="mb-10 font-label text-[10px] uppercase tracking-[0.6em] text-gold-leaf">
                Advisory
              </h4>
              <ul className="space-y-6">
                {["Services", "Governance", "Confidentiality"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="font-serif text-sm italic text-stone/40 hover:text-parchment transition-colors duration-500">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Inquiries */}
            <div>
              <h4 className="mb-10 font-label text-[10px] uppercase tracking-[0.6em] text-gold-leaf">
                Channels
              </h4>
              <div className="space-y-8">
                <div>
                  <span className="block font-label text-[8px] uppercase tracking-widest text-white/20 mb-2">Direct Liaison</span>
                  <p className="font-label text-[10px] uppercase tracking-[0.3em] text-parchment/80">
                    enquiries@sadhwani.com
                  </p>
                </div>
                <div>
                  <span className="block font-label text-[8px] uppercase tracking-widest text-white/20 mb-2">Primary Line</span>
                  <p className="font-label text-[10px] uppercase tracking-[0.3em] text-parchment/80">
                    +91 80 0000 0000
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar: Institutional Marking */}
        <div className="relative pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Sketch Metric Detail */}
          <div className="absolute -top-px left-0 h-px w-32 bg-gold-leaf/40" />

          <div className="flex flex-col md:flex-row items-center gap-12">
            <p className="font-label text-[9px] uppercase tracking-[0.4em] text-white/20">
              © 1959 Sadhwani Real Estate Holdings
            </p>
            <p className="font-label text-[9px] uppercase tracking-[0.4em] text-white/10 hidden md:block">
              Bangalore Archive Ref: 59-91-A
            </p>
          </div>

          <div className="flex gap-12 font-label text-[9px] uppercase tracking-[0.4em] text-white/40">
            <Link href="#" className="hover:text-gold-leaf transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-gold-leaf transition-colors">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}