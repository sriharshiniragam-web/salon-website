import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/80 bg-[#fff8f4]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-10">
        <Link href="/" className="text-xl font-semibold tracking-[0.24em] text-rose-800">
          BLOOM SALON
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-700 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors duration-200 hover:text-rose-800"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full bg-rose-700 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-rose-200 transition hover:bg-rose-800"
        >
          Book Now
        </Link>
      </div>
    </header>
  );
}
