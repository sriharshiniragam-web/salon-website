import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SectionHeader from "../components/SectionHeader";
import ServiceCard from "../components/ServiceCard";


import Image from "next/image";

const featuredServices = [
  {
    title: "Signature Haircut",
    description: "Custom styling with precision layering and soft finishing.",
    price: "$65",
    image: "/images/haircut.jpeg",
  },
  {
    title: "Colors & Highlights",
    description: "Vibrant coloring and highlights crafted to suit your style.",
    price: "$120",
    image: "/images/colors and highlights.jpeg",
  },
  {
    title: "Glow Facial",
    description: "A revitalizing treatment that leaves skin smooth and radiant.",
    price: "$85",
    image: "/images/GLOWfacial.jpeg",
  },
  {
    title: "Spa Ritual",
    description: "Relaxing body care to restore balance and calm.",
    price: "$95",
    image: "/images/spa.jpeg",
  },
  {
    title: "Flawless Makeup",
    description: "Professional makeup application for any special occasion.",
    price: "$75",
    image: "/images/makeup.jpeg",
  },
  {
    title: "Signature Blowout",
    description: "Voluminous and smooth blowout for an effortless look.",
    price: "$50",
    image: "/images/blowout.jpeg",
  },
];


export default function Home() {
  return (
    <div className="min-h-screen bg-[#fffcfb] text-zinc-900 selection:bg-rose-200 selection:text-rose-900">
      <NavBar />
      <main className="mx-auto max-w-[88rem] px-4 py-8 sm:px-6 lg:px-8">
        {/* Professional Hero Section with Color Grading */}
        <section className="relative flex min-h-[85vh] items-center overflow-hidden rounded-[2.5rem] lg:rounded-[3rem] bg-zinc-950 shadow-2xl">
          <div className="absolute inset-0">
            <Image
              src="/images/bloom_salon.png"
              alt="Bloom Salon Interior"
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Color Grading Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-900/80 to-rose-950/40 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-rose-900/10 mix-blend-overlay" />
          </div>

          <div className="relative z-10 w-full px-8 py-20 lg:px-16 lg:py-24 xl:px-24">
            <div className="max-w-2xl space-y-10">
              <div className="space-y-4">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-rose-300">Bloom Salon</p>
                <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl lg:text-[5.5rem] leading-[1.1]">
                  Beauty Redefined.
                </h1>
              </div>
              <p className="max-w-xl text-lg font-light leading-relaxed text-zinc-300 sm:text-xl">
                Expert styling, advanced skincare, and tranquil spa treatments converging in a remarkably elegant environment.
              </p>
              <div className="flex flex-col gap-5 sm:flex-row pt-4">
                <a href="/contact" className="group inline-flex items-center justify-center rounded-full bg-rose-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-rose-600/20 transition-all hover:bg-rose-500 hover:shadow-rose-500/40 hover:-translate-y-0.5">
                  Book Appointment
                </a>
                <a href="/services" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/30">
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="mt-8 rounded-[2.5rem] lg:rounded-[3rem] bg-white p-8 sm:p-12 lg:p-16 shadow-sm shadow-zinc-200/50 ring-1 ring-zinc-100">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-12">
            <SectionHeader
              title="Signature Treatments"
              subtitle="A curated selection of our most loved beauty and wellness services."
            />
            <a href="/services" className="inline-flex items-center justify-center rounded-full bg-rose-50 px-6 py-3.5 text-sm font-semibold text-rose-700 transition-colors hover:bg-rose-100 ring-1 ring-inset ring-rose-200/50">
              View full service menu
            </a>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </section>

        {/* About Section */}
        <div className="mt-8">
          <section className="flex flex-col justify-center rounded-[2.5rem] lg:rounded-[3rem] bg-rose-50/50 p-8 sm:p-12 lg:p-16 ring-1 ring-rose-100/50">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-rose-600">The Experience</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">Elevated detail in every moment.</h2>
              <p className="mt-6 text-lg leading-relaxed text-zinc-600">
                Bloom Salon brings together expert artistry, thoughtful hospitality, and a gentle atmosphere designed to make every guest feel entirely cherished.
              </p>
              <a href="/about" className="mt-10 inline-flex items-center justify-center rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-zinc-800 hover:-translate-y-0.5">
                Discover our story
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
