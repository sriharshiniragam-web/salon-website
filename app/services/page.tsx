import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import SectionHeader from "../../components/SectionHeader";
import ServiceCard from "../../components/ServiceCard";

const services = [
  {
    title: "Signature Haircut",
    description: "Precision styling for a fresh, flattering shape tailored to you.",
    price: "$65",
    image: "/images/hair-styling.svg",
  },
  {
    title: "Color & Highlights",
    description: "Soft balayage, glossy color, and shine-enhancing treatments.",
    price: "$120",
    image: "/images/makeup-beauty.svg",
  },
  {
    title: "Facial Treatment",
    description: "Deep-cleansing glow facials that refresh and brighten skin.",
    price: "$85",
    image: "/images/facial-treatment.svg",
  },
  {
    title: "Spa Ritual",
    description: "Tranquil spa therapies for full body renewal and relaxation.",
    price: "$95",
    image: "/images/spa-care.svg",
  },
  {
    title: "Makeup Glow",
    description: "Soft, luminous makeup for weddings, events, or everyday glamour.",
    price: "$75",
    image: "/images/makeup-beauty.svg",
  },
  {
    title: "Blowout & Style",
    description: "Volume, smoothness, and shine for your perfect finish.",
    price: "$55",
    image: "/images/hair-styling.svg",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#fff6f1] text-zinc-900">
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <SectionHeader
          title="Salon Services"
          subtitle="Beauty treatments crafted to help you feel confident and radiant."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
