import React from "react";

export function Legacy() {
  return (
    <section id="legacy" className="relative overflow-hidden bg-parchment py-32 px-6 md:py-48 lg:px-20">
      {/* Background Architectural Detail */}
      <div className="absolute left-0 top-0 h-full w-px bg-onyx/5 ml-12 hidden lg:block" />

      <div className="relative z-10 mx-auto max-w-screen-2xl">
        <div className="mb-20 flex items-center gap-6 reveal-up">
          <span className="font-label text-[10px] uppercase tracking-[0.6em] text-oxblood">
            Archive 01
          </span>
          <div className="h-px w-12 bg-gold-leaf/30"></div>
          <span className="font-label text-[10px] uppercase tracking-[0.6em] text-onyx/40">
            Institutional Memory
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Left: The Narrative History */}
          <div className="lg:col-span-6 space-y-12 reveal-up">
            <h2 className="font-headline text-5xl md:text-8xl font-light leading-[0.85] text-onyx tracking-tightest">
              A Multi-Generational <br />
              <span className="italic text-oxblood">Record of Trust.</span>
            </h2>

            <div className="max-w-xl space-y-8 border-l border-onyx/10 pl-8 md:pl-12">
              <p className="font-serif text-lg md:text-xl italic text-onyx/70 leading-relaxed">
                What began as a visionary approach to land acquisition in Mysore State in 1959
                evolved into a multi-generational hallmark of discretion.
              </p>
              <p className="font-serif text-lg text-onyx/60 leading-relaxed">
                In 1991, <span className="text-onyx font-medium">Sadhwani Real Estate Holdings</span> formalized
                the transition into the Silicon Valley of India, curating the city’s most resilient
                commercial developments and luxury estates.
              </p>
            </div>

            <div className="pt-8">
              <a href="#archives" className="group flex items-center gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-onyx/10 transition-colors group-hover:border-gold-leaf">
                  <span className="font-serif text-lg group-hover:text-gold-leaf transition-colors">→</span>
                </div>
                <span className="font-label text-[10px] uppercase tracking-[0.4em] text-onyx/80 group-hover:text-gold-leaf transition-colors">
                  Explore The Archives
                </span>
              </a>
            </div>
          </div>

          {/* Right: The Archival Plate (Product/Image) */}
          <div className="lg:col-span-6 relative reveal-up">
            <div className="relative aspect-[4/5] w-full bg-stone/20 p-6 md:p-12 border-[0.5px] border-onyx/10">

              {/* Corner Brackets (Sketch Aesthetic) */}
              <div className="absolute top-0 left-0 h-4 w-4 border-t border-l border-gold-leaf/40"></div>
              <div className="absolute top-0 right-0 h-4 w-4 border-t border-r border-gold-leaf/40"></div>
              <div className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-gold-leaf/40"></div>
              <div className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-gold-leaf/40"></div>

              {/* The "Founding" Callout */}
              <div className="absolute -top-8 -right-8 z-20 bg-onyx px-8 py-10 text-center shadow-2xl border border-gold-leaf/20">
                <span className="block font-headline text-5xl text-gold-leaf italic mb-2">1959</span>
                <span className="block font-label text-[8px] uppercase tracking-[0.3em] text-parchment/60">
                  Foundation
                </span>
              </div>

              {/* Image Frame */}
              <div className="h-full w-full overflow-hidden border border-onyx/5 grayscale sepia-[0.2] brightness-90 transition-all duration-700 hover:grayscale-0 hover:sepia-0">
                <img
                  alt="Historic Bangalore Estate"
                  className="h-full w-full object-cover transition-transform duration-[10s] hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuMRVBgnTFG1PFLokIZku6fJXkOZG7YEAShYU03UVZgGHw96GRZbghvQhysxYi4kCDMe0ZVsCUSDTO2pImEPoA5Q7Ub7qnudBda7fulJuDQ96vGYtF25ousfjdKgc9h8ZogSvZjWHCFgVS4yb38-uqiI9VaP0iRmDm9SXlBK00vNoI8Ct2Lq-uTlzOvdTlQ2xCuXQOqw1yq4xZaP0qvRhOJELeqe6eXUWzo0gK2QJiqWNv11HSp2Wr-v7wlEykUyT0JmYjbaNGxX0K"
                />
              </div>

              {/* Technical Caption */}
              <div className="mt-8 flex justify-between items-end font-label text-[8px] uppercase tracking-widest text-onyx/30">
                <span>Plat No. 059-91 / BLR</span>
                <span>Documented: Bangalore Archive</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}