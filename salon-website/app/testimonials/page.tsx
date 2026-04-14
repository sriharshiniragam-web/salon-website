import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import SectionHeader from "../../components/SectionHeader";
import TestimonialCard from "../../components/TestimonialCard";

const testimonials = [
  {
    name: "Harper F.",
    role: "Bridal Client",
    review: "The team made my wedding look unforgettable. The styling was soft, elegant, and lasted all day.",
    rating: 5,
  },
  {
    name: "Maya L.",
    role: "Weekly Visitor",
    review: "I love how calm the salon feels. Every treatment leaves me glowing and relaxed.",
    rating: 5,
  },
  {
    name: "Sofia R.",
    role: "Makeup Client",
    review: "My makeup was flawless for a special event, and the artist was incredibly kind and creative.",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-[#fff6f1] text-zinc-900">
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <SectionHeader
          title="Client Love"
          subtitle="Real reviews from guests who left feeling beautiful and refreshed."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
