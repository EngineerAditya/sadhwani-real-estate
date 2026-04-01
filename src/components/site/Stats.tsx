import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-onyx/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-8 py-6 md:px-12">

        {/* Left: Simplified Navigation */}
        <div className="flex flex-1 gap-10 font-label text-[10px] uppercase tracking-[0.5em] text-stone/50">
          <Link href="#legacy" className="hover:text-gold-leaf transition-colors duration-500">
            The Legacy
          </Link>
          <Link href="#portfolio" className="hidden sm:block hover:text-gold-leaf transition-colors duration-500">
            The Archive
          </Link>
        </div>

        {/* Center: Brand Anchor */}
        <Link
          href="/"
          className="flex-none font-headline text-2xl md:text-3xl tracking-tightest text-parchment italic"
        >
          Sadhwani
        </Link>

        {/* Right: High-Intent CTA */}
        <div className="flex flex-1 justify-end">
          <Link
            href="#contact"
            className="group relative overflow-hidden border border-gold-leaf/20 px-8 py-2.5 font-label text-[9px] uppercase tracking-[0.4em] text-gold-leaf transition-all duration-700 hover:border-gold-leaf"
          >
            {/* Hover Background Slide */}
            <div className="absolute inset-0 z-0 translate-y-full bg-gold-leaf transition-transform duration-500 ease-out group-hover:translate-y-0" />

            <span className="relative z-10 transition-colors duration-500 group-hover:text-onyx">
              Inquire
            </span>
          </Link>
        </div>
      </div>

      {/* Decorative Blueprint Line */}
      <div className="absolute bottom-0 left-0 h-[0.5px] w-full bg-gradient-to-r from-transparent via-gold-leaf/20 to-transparent" />
    </nav>
  );
}