import Image from "next/image";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import SectionHeader from "../../components/SectionHeader";

const team = [
  {
    name: "Ariana Vale",
    role: "Creative Director",
    image: "/images/team1.svg",
    bio: "Master stylist with a passion for elegant color and bridal beauty.",
  },
  {
    name: "Nina Rose",
    role: "Skin Specialist",
    image: "/images/team2.svg",
    bio: "Facial and spa expert focused on radiant skin and calm treatments.",
  },
  {
    name: "Elsa Joy",
    role: "Makeup Artist",
    image: "/images/team3.svg",
    bio: "Glamour makeup artist delivering soft, glowing looks for every event.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fff6f1] text-zinc-900">
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <SectionHeader
          title="About Bloom"
          subtitle="A modern salon for beauty, self-care, and unforgettable style."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8 rounded-[2rem] bg-white p-10 shadow-sm shadow-zinc-200/60">
            <h2 className="text-2xl font-semibold text-zinc-950">Our Story</h2>
            <p className="text-lg leading-8 text-zinc-600">
              Bloom Salon was founded to bring a soft, elegant approach to beauty.
              We believe every client deserves a calm experience with premium service,
              gentle luxury, and thoughtful attention to detail.
            </p>
            <p className="text-lg leading-8 text-zinc-600">
              From fresh haircuts to rejuvenating spa treatments, our team creates
              moments of confidence and radiant wellness.
            </p>
          </div>
          <div className="space-y-6 rounded-[2rem] bg-rose-50 p-10 shadow-sm shadow-zinc-200/60">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-rose-600">Mission</p>
              <p className="mt-3 text-zinc-600">
                To create elegant beauty experiences that feel personalized, calm, and luxurious.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-rose-600">Vision</p>
              <p className="mt-3 text-zinc-600">
                To be the trusted destination for clients seeking modern salon care and radiant confidence.
              </p>
            </div>
          </div>
        </div>

        <section className="mt-16 rounded-[2rem] bg-white p-10 shadow-sm shadow-zinc-200/60">
          <h2 className="text-2xl font-semibold text-zinc-950">Meet the Team</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="space-y-4 rounded-[2rem] border border-zinc-200 p-6">
                <div className="relative h-44 w-full overflow-hidden rounded-3xl">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-semibold text-zinc-950">{member.name}</p>
                  <p className="text-sm uppercase tracking-[0.24em] text-rose-600">{member.role}</p>
                  <p className="text-sm leading-6 text-zinc-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
