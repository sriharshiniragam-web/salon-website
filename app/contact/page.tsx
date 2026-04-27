import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import SectionHeader from "../../components/SectionHeader";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#fffcfb] text-zinc-900 selection:bg-rose-200 selection:text-rose-900">
      <NavBar />
      <main className="mx-auto max-w-[88rem] px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          title="Get in Touch"
          subtitle="We would love to hear from you. Book an appointment or send us a message."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Contact Info */}
          <div className="flex flex-col justify-center rounded-[2.5rem] bg-rose-50/50 p-8 sm:p-12 ring-1 ring-rose-100/50 relative overflow-hidden">
            {/* Background elements for elegance */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-rose-200/40 blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-rose-100/60 blur-3xl" />

            <div className="relative z-10">
              <h3 className="text-3xl font-semibold text-zinc-900 tracking-tight">Bloom Salon</h3>
              <p className="mt-4 text-zinc-600 leading-relaxed text-lg max-w-md">
                Step into our serene space and let us take care of the rest. For appointments or inquiries, please reach out to us using the details below.
              </p>

              <div className="mt-12 space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-rose-100 text-rose-700 transition-transform group-hover:scale-110 group-hover:bg-rose-50">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 text-lg">Visit Us</h4>
                    <p className="mt-2 text-zinc-600 leading-relaxed">Plot 45, Road No. 36, Jubilee Hills<br />Hyderabad, Telangana 500033</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-rose-100 text-rose-700 transition-transform group-hover:scale-110 group-hover:bg-rose-50">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 text-lg">Call Us</h4>
                    <p className="mt-2 text-zinc-600">+91 98765 43210</p>
                    <p className="text-sm text-zinc-500 mt-1">Mon-Sun, 9am - 8pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-rose-100 text-rose-700 transition-transform group-hover:scale-110 group-hover:bg-rose-50">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 text-lg">Email Us</h4>
                    <p className="mt-2 text-zinc-600">hello@bloomsalon.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-[2.5rem] bg-white p-8 sm:p-12 shadow-xl shadow-zinc-200/40 ring-1 ring-zinc-100">
            <h3 className="text-2xl font-semibold text-zinc-900 mb-2">Send a Message</h3>
            <p className="text-zinc-500 mb-8">Fill out the form below and we'll get back to you shortly.</p>

            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium text-zinc-700">First name</label>
                  <input type="text" id="first-name" className="w-full rounded-2xl border border-zinc-200 bg-zinc-50/50 px-4 py-3.5 text-sm focus:bg-white focus:border-rose-300 focus:outline-none focus:ring-4 focus:ring-rose-100 transition-all" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium text-zinc-700">Last name</label>
                  <input type="text" id="last-name" className="w-full rounded-2xl border border-zinc-200 bg-zinc-50/50 px-4 py-3.5 text-sm focus:bg-white focus:border-rose-300 focus:outline-none focus:ring-4 focus:ring-rose-100 transition-all" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-700">Email address</label>
                <input type="email" id="email" className="w-full rounded-2xl border border-zinc-200 bg-zinc-50/50 px-4 py-3.5 text-sm focus:bg-white focus:border-rose-300 focus:outline-none focus:ring-4 focus:ring-rose-100 transition-all" placeholder="jane@example.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-zinc-700">Service of Interest</label>
                <select id="service" className="w-full rounded-2xl border border-zinc-200 bg-zinc-50/50 px-4 py-3.5 text-sm focus:bg-white focus:border-rose-300 focus:outline-none focus:ring-4 focus:ring-rose-100 transition-all appearance-none cursor-pointer">
                  <option value="">Select a service...</option>
                  <option value="hair">Hair Styling & Cut</option>
                  <option value="color">Coloring & Highlights</option>
                  <option value="spa">Spa & Massage</option>
                  <option value="bridal">Bridal Makeup</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-700">Message</label>
                <textarea id="message" rows={4} className="w-full rounded-2xl border border-zinc-200 bg-zinc-50/50 px-4 py-3.5 text-sm focus:bg-white focus:border-rose-300 focus:outline-none focus:ring-4 focus:ring-rose-100 transition-all resize-none" placeholder="How can we help you today?"></textarea>
              </div>
              <button type="button" className="w-full rounded-full bg-rose-600 px-8 py-4.5 text-sm font-semibold text-white shadow-lg shadow-rose-600/20 transition-all hover:bg-rose-500 hover:shadow-rose-500/40 hover:-translate-y-0.5 pt-4 pb-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
