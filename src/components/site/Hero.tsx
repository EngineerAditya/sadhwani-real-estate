import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-onyx pt-32 pb-20 px-6 md:px-12 lg:px-20">
      {/* Background Architectural Grid (The "Sketch" Aesthetic) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-screen-2xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left: The Heritage Mark & Typography */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <div className="flex items-center gap-4 mb-12 reveal-up">
            <span className="h-px w-12 bg-gold-leaf/40"></span>
            <span className="font-label text-[10px] uppercase tracking-[0.6em] text-gold-leaf">
              Est. 1959 — Bangalore
            </span>
          </div>

          <h1 className="font-headline text-6xl md:text-[8.5rem] leading-[0.85] text-parchment tracking-tightest mb-10 reveal-up">
            Legacy <br />
            <span className="italic text-oxblood brightness-150">Brokerage.</span>
          </h1>

          <div className="max-w-md border-l border-gold-leaf/20 pl-8 mb-12 reveal-up">
            <p className="font-serif text-lg md:text-xl italic text-stone/40 leading-relaxed">
              Six decades of navigating Bangalore’s most prestigious land holdings with surgical precision and silent discretion.
            </p>
          </div>

          <div className="flex items-center gap-8 reveal-up">
            <Link
              href="#portfolio"
              className="group relative overflow-hidden bg-oxblood px-10 py-4 text-parchment font-label text-[10px] uppercase tracking-widest transition-all hover:pr-14"
            >
              <span className="relative z-10">Private Collection</span>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
            </Link>
            <Link
              href="#advisory"
              className="font-label text-[10px] uppercase tracking-widest text-gold-leaf border-b border-gold-leaf/20 pb-1 hover:border-gold-leaf transition-colors"
            >
              Our History
            </Link>
          </div>
        </div>

        {/* Right: The "Product" (Framed Sketch/Image) */}
        <div className="lg:col-span-5 relative reveal-up">
          <div className="relative aspect-[4/5] w-full overflow-hidden border-[0.5px] border-white/10 p-4 bg-onyx shadow-2xl">
            {/* Inner Frame */}
            <div className="absolute inset-4 border border-white/5 pointer-events-none z-20"></div>

            {/* The Image/Sketch */}
            <img
              alt="Heritage Architectural Detail"
              className="h-full w-full object-cover grayscale opacity-60 transition-transform duration-[15s] hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuATi1Rdm4eY_2QQNruHNtInjJwOZJJOBhywqNu_tXHxN0VQOKMWHTLMjTziIWp6Sq96qj0Cv2eEq0Y-STGbZve4sqB4WCCXSO-0VUrHrAMFzb9secCFnEvxEjGGmXylGTljQz-wipsBc520DU-soW_BmKI8gwUGmWAuPGaNMdyPr5NhL58EtWnP094iFBPdQnrjVvGhZUFgfc7fIxUmZvbtqD6-Hwo0NXXAKDCPvkSnCpRniYMFtrUJODYKSwxYfGTSycZtHSoDbc_h"
            />

            {/* Technical Annotation Detail */}
            <div className="absolute bottom-8 right-8 z-30 text-right">
              <span className="block font-label text-[8px] uppercase tracking-widest text-gold-leaf/50 mb-1">Archive Ref.</span>
              <span className="block font-serif italic text-parchment/40 text-xs">Sadhwani-1959.BLR</span>
            </div>
          </div>

          {/* Floating Gold Element */}
          <div className="absolute -bottom-6 -left-6 h-32 w-32 border-l border-b border-gold-leaf/30 pointer-events-none"></div>
        </div>
      </div>

      {/* Vertical Navigation Lines */}
      <div className="absolute left-6 bottom-12 hidden md:flex flex-col items-center gap-6">
        <span className="font-label text-[9px] uppercase tracking-widest text-white/20 rotate-180 [writing-mode:vertical-lr]">Scroll</span>
        <div className="h-24 w-px bg-gradient-to-b from-gold-leaf/50 to-transparent"></div>
      </div>
    </section>
  );
}