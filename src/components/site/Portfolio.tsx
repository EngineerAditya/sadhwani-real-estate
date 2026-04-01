import React from "react";

const assets = [
  {
    id: "AST-01/SN",
    title: "The Emerald Estate",
    location: "Sadashivanagar, Bangalore",
    type: "Residential",
    status: "Private Holding",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5LLueZ9wg542RIhQhiYAnwXojIW0Y3Kgysb0ZVOfp8T9Qlq53En0PtGMGZEfprJYlV7ZV7EvBPRhXwIEnrGfq9gzE73-iiBqtsxYH2gAf2vB2fpnNVj9u5wR7hRKHEQPXG6ksg3AJAV24hEN9FaIHyNdA9iDLCZ4m_8UgqeThG2ysB2roY7sJN7qCQy7nLNJ8bFKIr128YTLjj6i5M3IFs4qGZvrySuX_sOwRrcYh3WQO9CgTpW2i6-yaDW8EOj7wJE5VP66ceIH8"
  },
  {
    id: "AST-02/MG",
    title: "Sadhwani Plaza",
    location: "MG Road Central District",
    type: "Commercial",
    status: "Leased",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABpJopRuzD2kvdByHlziIdLWmKpumtBF3-See0gKdyUoiGtKRVubq0-0LHCZHasHjEdjDMnXnUvk-k9bGlIwFUrzgiofTh0yPJrBc4EXJHtJfMlKDU-JqjDAzlPm00jyz3LB4X9gfvtsaYufqUXY-UH4UUcKIlNLoue4j3InVpCLoGiBCRB83oWVtOUiessH6kO-v_pmh86VI6glAaMY0LX6IDfcph_a1k8sYJWLQs-Lr9wUINT_DLAUYqQTJDGXkCmzDOr9H-4ZDY"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden bg-onyx py-32 px-6 md:py-48 lg:px-20">
      {/* Background Archival Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none sketch-overlay" />

      <div className="relative z-10 mx-auto max-w-screen-2xl">
        {/* Header: Editorial Style */}
        <div className="mb-32 grid grid-cols-1 md:grid-cols-12 gap-12 items-end reveal-up">
          <div className="md:col-span-8">
            <span className="mb-6 block font-label text-[10px] uppercase tracking-[0.6em] text-gold-leaf">
              The Collection
            </span>
            <h2 className="font-headline text-6xl md:text-[9rem] font-light text-parchment tracking-tightest leading-[0.8]">
              Selected <br />
              <span className="italic text-oxblood brightness-125">Archives.</span>
            </h2>
          </div>
          <div className="md:col-span-4 border-l border-white/10 pl-8 pb-4">
            <p className="font-serif text-lg italic text-stone/40 leading-relaxed max-w-xs">
              A record of Bangalore's most resilient commercial and residential land marks.
            </p>
          </div>
        </div>

        {/* Portfolio Grid: Asymmetrical Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-32">

          {/* Feature Asset 01 */}
          <div className="md:col-span-7 group cursor-pointer reveal-up">
            <div className="relative aspect-[16/10] overflow-hidden border-[0.5px] border-white/10 p-4 transition-all duration-700 group-hover:border-gold-leaf/40">
              {/* Internal Corner Brackets */}
              <div className="absolute top-8 left-8 h-4 w-4 border-t border-l border-gold-leaf/0 transition-all duration-700 group-hover:border-gold-leaf/40"></div>

              <div className="h-full w-full overflow-hidden grayscale transition-all duration-[2s] group-hover:grayscale-0">
                <img
                  alt={assets[0].title}
                  className="h-full w-full object-cover transition-transform duration-[10s] group-hover:scale-110"
                  src={assets[0].image}
                />
              </div>

              {/* Archival Tag */}
              <div className="absolute top-10 right-10 bg-onyx/80 backdrop-blur-md border border-white/10 px-6 py-3">
                <span className="font-label text-[8px] uppercase tracking-widest text-gold-leaf">
                  {assets[0].type}
                </span>
              </div>
            </div>

            <div className="mt-12 flex justify-between items-start">
              <div className="space-y-4">
                <span className="font-label text-[9px] uppercase tracking-[0.4em] text-white/30">
                  Ref: {assets[0].id}
                </span>
                <h3 className="font-headline text-4xl md:text-5xl text-parchment group-hover:italic transition-all duration-500">
                  {assets[0].title}
                </h3>
                <p className="font-serif text-lg italic text-stone/40">{assets[0].location}</p>
              </div>
              <div className="text-right">
                <span className="font-label text-[10px] uppercase tracking-[0.3em] text-gold-leaf/60">
                  P.O.A.
                </span>
              </div>
            </div>
          </div>

          {/* Feature Asset 02: Vertical & Offset */}
          <div className="md:col-span-5 md:mt-64 group cursor-pointer reveal-up">
            <div className="relative aspect-[4/5] overflow-hidden border-[0.5px] border-white/10 p-4 transition-all duration-700 group-hover:border-oxblood/40">

              <div className="h-full w-full overflow-hidden grayscale brightness-75 transition-all duration-[2s] group-hover:grayscale-0 group-hover:brightness-100">
                <img
                  alt={assets[1].title}
                  className="h-full w-full object-cover transition-transform duration-[10s] group-hover:scale-110"
                  src={assets[1].image}
                />
              </div>

              {/* Archival Tag */}
              <div className="absolute top-10 right-10 bg-onyx/80 backdrop-blur-md border border-white/10 px-6 py-3">
                <span className="font-label text-[8px] uppercase tracking-widest text-oxblood brightness-150">
                  {assets[1].type}
                </span>
              </div>
            </div>

            <div className="mt-12 space-y-4">
              <span className="font-label text-[9px] uppercase tracking-[0.4em] text-white/30">
                Ref: {assets[1].id}
              </span>
              <h3 className="font-headline text-4xl text-parchment group-hover:italic transition-all duration-500">
                {assets[1].title}
              </h3>
              <p className="font-serif text-lg italic text-stone/40">{assets[1].location}</p>

              <div className="pt-8 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                <div className="h-px w-24 bg-oxblood"></div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer: Confidential Entry */}
        <div className="mt-32 flex flex-col items-center border-t border-white/5 pt-20">
          <p className="mb-10 font-label text-[10px] uppercase tracking-[0.5em] text-stone/30">
            End of Record
          </p>
          <a
            href="#contact"
            className="group flex flex-col items-center gap-4"
          >
            <span className="font-headline text-4xl italic text-parchment transition-colors group-hover:text-gold-leaf">
              Inquire for Full Portfolio
            </span>
            <div className="h-12 w-px bg-gold-leaf/30 transition-all duration-700 group-hover:h-24 group-hover:bg-gold-leaf"></div>
          </a>
        </div>
      </div>
    </section>
  );
}