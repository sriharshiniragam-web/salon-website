type TestimonialCardProps = {
  name: string;
  review: string;
  rating: number;
  role: string;
};

export default function TestimonialCard({ name, review, rating, role }: TestimonialCardProps) {
  return (
    <article className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center gap-3 text-amber-500">
        {Array.from({ length: rating }).map((_, index) => (
          <span key={index}>★</span>
        ))}
      </div>
      <p className="mt-4 text-sm leading-7 text-zinc-600">“{review}”</p>
      <p className="mt-6 font-semibold text-zinc-950">{name}</p>
      <p className="text-sm text-zinc-500">{role}</p>
    </article>
  );
}
