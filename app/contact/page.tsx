import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import SectionHeader from "../../components/SectionHeader";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#fff6f1] text-zinc-900">
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <SectionHeader
          title="Contact Us"
          subtitle="Get in touch to book your next salon appointment or ask a question."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-[2rem] bg-white p-10 shadow-sm shadow-zinc-200/60">
            <h2 className="text-2xl font-semibold text-zinc-950">Send a Message</h2>
            <form className="mt-8 space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-3xl border border-zinc-200 bg-zinc-50 px-5 py-3 text-sm text-zinc-900 outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700">Email</label>
                <input
                  type="email"
                  placeholder="hello@example.com"
                  className="w-full rounded-3xl border border-zinc-200 bg-zinc-50 px-5 py-3 text-sm text-zinc-900 outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us what service you're interested in..."
                  className="w-full rounded-[1.75rem] border border-zinc-200 bg-zinc-50 px-5 py-4 text-sm text-zinc-900 outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-rose-700 px-8 py-3 text-sm font-semibold text-white transition hover:bg-rose-800"
              >
                Send Message
              </button>
            </form>
          </section>
          <section className="space-y-8 rounded-[2rem] bg-white p-10 shadow-sm shadow-zinc-200/60">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-rose-600">Salon Info</p>
              <p className="mt-4 text-lg font-semibold text-zinc-950">Bloom Salon</p>
              <p className="mt-3 text-zinc-600">123 Rosewood Avenue</p>
              <p className="text-zinc-600">Beauty City, BL 90210</p>
              <p className="mt-4 text-zinc-600">(555) 987-6543</p>
              <p className="text-zinc-600">hello@bloom-salon.com</p>
            </div>
            <div className="rounded-[1.5rem] border border-zinc-200 bg-zinc-50 p-6 text-sm text-zinc-600">
              <p className="font-semibold text-zinc-950">Map</p>
              <div className="mt-4 h-56 rounded-3xl bg-slate-200 p-6 text-center text-zinc-500">
                Embedded Google Map placeholder
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-rose-600">Follow</p>
              <div className="mt-4 flex items-center gap-4 text-2xl text-rose-700">
                <a href="#" aria-label="Instagram">📸</a>
                <a href="#" aria-label="Facebook">👍</a>
                <a href="#" aria-label="Pinterest">✨</a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
