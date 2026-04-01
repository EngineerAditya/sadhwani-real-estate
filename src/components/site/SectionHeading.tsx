type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <header className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-5 font-label text-xs uppercase tracking-[0.36em] text-brand-gold">
        {eyebrow}
      </p>
      <h2 className="text-balance font-headline text-5xl font-light leading-[0.9] text-ink sm:text-6xl">
        {title}
      </h2>
      {description ? (
        <p
          className={
            centered
              ? "mx-auto mt-6 max-w-2xl text-base text-ink-muted sm:text-lg"
              : "mt-6 max-w-2xl text-base text-ink-muted sm:text-lg"
          }
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
