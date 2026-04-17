import Image from "next/image";

type ServiceCardProps = {
  title: string;
  description: string;
  price: string;
  image: string;
};

export default function ServiceCard({ title, description, price, image }: ServiceCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden bg-zinc-100">
        <Image src={image} alt={title} width={500} height={300} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-semibold text-zinc-950">{title}</h3>
          <span className="rounded-full bg-rose-50 px-3 py-1 text-sm font-semibold text-rose-700">{price}</span>
        </div>
        <p className="text-sm leading-6 text-zinc-600">{description}</p>
      </div>
    </article>
  );
}
