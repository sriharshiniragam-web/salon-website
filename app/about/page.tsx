import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fff6f1] text-zinc-950">
      <NavBar />

      <main className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT */}
        <div>
          <p className="text-rose-600 uppercase text-sm tracking-widest mb-4">
            Bloom Salon
          </p>

          <h1 className="text-5xl font-bold mb-6">
            Professional beauty services with a modern touch.
          </h1>

          <p className="text-zinc-600 mb-8">
            Experience premium salon services designed for comfort,
            elegance, and confidence.
          </p>

          <div className="flex gap-4">
            <button className="bg-rose-600 text-white px-6 py-3 rounded-full">
              Book Appointment
            </button>
            <button className="border border-rose-600 text-rose-600 px-6 py-3 rounded-full">
              Explore Services
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="grid gap-4 sm:grid-cols-2">
          <Image
            src="/images/team1.svg"
            alt="Salon"
            width={500}
            height={500}
            className="rounded-2xl"
          />
          <Image
            src="/images/team2.svg"
            alt="Salon"
            width={500}
            height={500}
            className="rounded-2xl"
          />
        </div>

      </main>

      <Footer />
    </div>
  );
}