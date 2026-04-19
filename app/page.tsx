import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SectionHeader from "../components/SectionHeader";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import Image from "next/image";

const highlightImages = [
  {
    title: "Blowout",
    src: "/images/blowout.jpeg",
  },
  {
    title: "Color",
    src: "/images/colors%20and%20highlights.jpeg",
  },
  {
    title: "Glow Facial",
    src: "/images/GLOWfacial.jpeg",
  },
  {
    title: "Haircut",
    src: "/images/haircut.jpeg",
  },
  {
    title: "Makeup",
    src: "/images/makeup.jpeg",
  },
  {
    title: "Spa",
    src: "/images/spa.jpeg",
  },
];

const featuredServices = [
  {
    title: "Signature Haircut",
    description: "Custom styling with precision layering and soft finishing.",
    price: "$65",
    image: "/images/haircut.jpeg",
  },
  {
    title: "Glow Facial",
    description: "A revitalizing treatment that leaves skin smooth and radiant.",
    price: "$85",
    image: "/images/GLOWfacial.jpeg",
  },
  {
    title: "Color & Highlights",
    description: "Soft balayage, glossy color, and shine-enhancing treatments.",
    price: "$120",
    image: "/images/colors%20and%20highlights.jpeg",
  },
  {
    title: "Makeup Glow",
    description: "Soft, luminous makeup for weddings, events, or everyday glamour.",
    price: "$75",
    image: "/images/makeup.jpeg",
  },
];

const testimonials = [
  {
    name: "Harper F.",
    role: "Bridal Client",
    review: "The team created the perfect look for my wedding day, and the experience was beautifully calm.",
    rating: 5,
  },
  {
    name: "Maya L.",
    role: "Regular Guest",
    review: "Every appointment feels like a mini escape. The results are flawless and relaxing.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f2ee] text-zinc-950">
      <NavBar />

      <main className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <section className="overflow-hidden rounded-[3rem] bg-[radial-gradient(circle_at_top_left,rgba(251,207,232,0.18),transparent_36%),linear-gradient(180deg,#ffffff_0%,#f7f2ee_100%)] shadow-2xl shadow-rose-200/25">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center px-6 py-10 md:px-10 md:py-14">
            <div className="space-y-6">
              <span className="inline-flex rounded-full bg-rose-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-rose-700">
                Luxury salon experience
              </span>

              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">
                Beauty that feels effortless
              </h1>

              <p className="max-w-2xl text-lg leading-8 text-zinc-600">
                Calm luxury beauty with expert artistry and glow.              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-rose-700 px-9 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-700/20 transition hover:bg-rose-800"
                >
                  Book Appointment
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-rose-300 bg-white px-9 py-3 text-sm font-semibold text-rose-700 transition hover:bg-rose-50"
                >
                  Explore Services
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[2rem] border border-zinc-200 bg-white/90 p-5 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.3em] text-rose-600">Expert stylists</p>
                  <p className="mt-3 text-xl font-semibold text-zinc-950">Human-led beauty planning</p>
                </div>
                <div className="rounded-[2rem] border border-zinc-200 bg-white/90 p-5 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.3em] text-rose-600">Care with calm</p>
                  <p className="mt-3 text-xl font-semibold text-zinc-950">Personalized treatments for every guest</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[3rem] shadow-2xl shadow-slate-950/15">
                <Image
                  src="/images/haircut.jpeg"
                  alt="Salon stylist with client"
                  width={900}
                  height={760}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute inset-x-0 top-0 h-full w-full rounded-[3rem] bg-gradient-to-r from-transparent via-transparent to-slate-950/20" />

              <div className="absolute bottom-6 left-6 w-[calc(100%-4rem)] max-w-sm rounded-[2rem] bg-white/80 px-6 py-5 shadow-2xl shadow-slate-950/20 backdrop-blur-xl ring-1 ring-white/80">
                <p className="text-sm uppercase tracking-[0.28em] text-rose-600">Salon analytics</p>
                <h2 className="mt-3 text-3xl font-semibold text-zinc-950">Live service overview</h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    { label: "Clients booked", value: "128" },
                    { label: "Service rating", value: "4.9/5" },
                    { label: "Avg. satisfaction", value: "96%" },
                    { label: "Team availability", value: "5 stylists" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-[1.75rem] bg-slate-950/5 p-4">
                      <p className="text-xs uppercase tracking-[0.32em] text-rose-600">{item.label}</p>
                      <p className="mt-3 text-2xl font-semibold text-zinc-950">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -right-8 top-8 grid gap-4">
                <div className="w-48 rounded-[2rem] bg-white/90 p-4 shadow-2xl shadow-slate-950/15 backdrop-blur-xl ring-1 ring-white/70">
                  <div className="relative h-28 overflow-hidden rounded-[1.75rem]">
                    <Image
                      src="/images/blowout.jpeg"
                      alt="Blowout service"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-zinc-950">Blowout</p>
                </div>
                <div className="w-48 rounded-[2rem] bg-white/90 p-4 shadow-2xl shadow-slate-950/15 backdrop-blur-xl ring-1 ring-white/70">
                  <div className="relative h-28 overflow-hidden rounded-[1.75rem]">
                    <Image
                      src="/images/GLOWfacial.jpeg"
                      alt="Glow facial service"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-zinc-950">Glow Facial</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] border border-zinc-200 bg-zinc-50 px-4 py-5 shadow-sm sm:px-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-700">Image gallery</p>
                <p className="text-sm text-zinc-500">Real human service previews in a polished gallery strip.</p>
              </div>
              <div className="inline-flex rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-700">
                New look
              </div>
            </div>
            <div className="mt-6 overflow-x-auto pb-2">
              <div className="inline-flex gap-4">
                {highlightImages.map((item) => (
                  <div key={item.title} className="min-w-[220px] overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white shadow-sm">
                    <div className="relative h-40 w-[220px]">
                      <Image src={item.src} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="px-4 py-3">
                      <p className="text-sm font-semibold text-zinc-950">{item.title}</p>
                      <p className="mt-1 text-xs text-zinc-500">Premium salon service</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-[2.5rem] bg-white p-10 shadow-sm shadow-zinc-200/50">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              title="Featured Services"
              subtitle="A selection of signature treatments for beauty and wellness."
            />
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-full bg-rose-100 px-5 py-3 text-sm font-semibold text-rose-700 transition hover:bg-rose-200"
            >
              View full service menu
            </a>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-[2.5rem] bg-white p-10 shadow-sm shadow-zinc-200/50">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-600">About</p>
              <h2 className="mt-3 text-3xl font-semibold text-zinc-950">Beauty with calm and elevated detail.</h2>
              <p className="mt-5 text-lg leading-8 text-zinc-600">
                Bloom Salon brings together expert beauty services, thoughtful hospitality, and a gentle atmosphere designed to make every guest feel cherished.
              </p>
            </div>
            <a
              href="/about"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-rose-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-800 lg:mt-0"
            >
              Learn more
            </a>
          </div>
        </section>

        <section className="mt-12 rounded-[2.5rem] bg-white p-10 shadow-sm shadow-zinc-200/50">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-600">Testimonials</p>
              <h2 className="mt-3 text-3xl font-semibold text-zinc-950">Loved by our guests</h2>
            </div>
            <a
              href="/testimonials"
              className="inline-flex items-center justify-center rounded-full border border-rose-200 bg-rose-50 px-5 py-3 text-sm font-semibold text-rose-700 transition hover:bg-rose-100"
            >
              Read all reviews
            </a>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}