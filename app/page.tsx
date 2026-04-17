import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SectionHeader from "../components/SectionHeader";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";

const featuredServices = [
  {
    title: "Signature Haircut",
    description: "Custom styling with precision layering and soft finishing.",
    price: "$65",
    image: "/images/hair-styling.svg",
  },
  {
    title: "Glow Facial",
    description: "A revitalizing treatment that leaves skin smooth and radiant.",
    price: "$85",
    image: "/images/facial-treatment.svg",
  },
  {
    title: "Spa Ritual",
    description: "Relaxing body care to restore balance and calm.",
    price: "$95",
    image: "/images/spa-care.svg",
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
    <div className="min-h-screen bg-[#fff6f1] text-zinc-900">
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <section className="rounded-[2.5rem] bg-white p-10 shadow-sm shadow-zinc-200/50 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-600">Bloom Salon</p>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">
                Modern beauty and wellness crafted for every moment.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-zinc-600">
                Welcome to Bloom Salon — where expert styling, skincare, and spa treatments come together in an elegant and soothing environment.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-rose-700 px-8 py-3 text-sm font-semibold text-white transition hover:bg-rose-800">
                  Book Appointment
                </a>
                <a href="/services" className="inline-flex items-center justify-center rounded-full border border-rose-300 bg-white px-8 py-3 text-sm font-semibold text-rose-700 transition hover:bg-rose-50">
                  Explore Services
                </a>
              </div>
            </div>
            <div className="rounded-[2rem] bg-rose-50 p-8 shadow-lg shadow-rose-100/80">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.24em] text-rose-600">Featured service</p>
                <h2 className="text-3xl font-semibold text-zinc-950">Luxury cut & finish</h2>
                <p className="text-zinc-600">
                  Refresh your look with a style designed to feel soft, chic, and effortless.
                </p>
                <div className="grid gap-3 pt-4 text-sm text-zinc-700 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white p-4 shadow-sm">Expert stylists</div>
                  <div className="rounded-3xl bg-white p-4 shadow-sm">Elegant finish</div>
                  <div className="rounded-3xl bg-white p-4 shadow-sm">Relaxing ambiance</div>
                  <div className="rounded-3xl bg-white p-4 shadow-sm">Personalized care</div>
                </div>
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
            <a href="/services" className="inline-flex items-center justify-center rounded-full bg-rose-100 px-5 py-3 text-sm font-semibold text-rose-700 transition hover:bg-rose-200">
              View full service menu
            </a>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
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
            <a href="/about" className="mt-8 inline-flex items-center justify-center rounded-full bg-rose-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-800 lg:mt-0">
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
            <a href="/testimonials" className="inline-flex items-center justify-center rounded-full border border-rose-200 bg-rose-50 px-5 py-3 text-sm font-semibold text-rose-700 transition hover:bg-rose-100">
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
