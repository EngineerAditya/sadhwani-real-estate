const partners = ["GOLDMAN", "OBEROI", "ITC GROUP", "HYATT", "STANDARD"];

export function Partners() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 text-center sm:px-10">
        <p className="mb-12 font-label text-xs uppercase tracking-[0.45em] text-ink-muted/55">
          Strategic Relationships
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-8 text-center sm:gap-12">
          {partners.map((partner) => (
            <li
              key={partner}
              className="font-headline text-2xl tracking-tight text-ink/35 transition-colors duration-300 hover:text-brand-red"
            >
              {partner}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
