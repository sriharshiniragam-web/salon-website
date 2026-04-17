type SectionHeaderProps = {
  title: string;
  subtitle: string;
};

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-rose-600">{title}</p>
      <p className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">{subtitle}</p>
    </div>
  );
}
