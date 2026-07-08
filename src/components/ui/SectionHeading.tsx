interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-16">
      <span className="inline-block font-mono text-xs font-medium tracking-widest uppercase text-accent mb-4">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-lg text-text-tertiary leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
