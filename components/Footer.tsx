import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-[#fff5f0] px-6 py-10 text-zinc-700 md:px-10">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-rose-900">Bloom Salon</p>
            <p className="mt-3 max-w-xs text-sm leading-7 text-zinc-600">
              Elegant hair, beauty, and spa experiences designed to make every visit feel luxurious.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-zinc-600">
              <li>Plot 45, Road No. 36, Jubilee Hills</li>
              <li>Hyderabad, Telangana 500033</li>
              <li>+91 98765 43210</li>
              <li>hello@bloomsalon.in</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">Follow</p>
            <div className="mt-4 flex items-center gap-4 text-2xl text-rose-700">
              <Link href="#" aria-label="Instagram">📸</Link>
              <Link href="#" aria-label="Facebook">👍</Link>
              <Link href="#" aria-label="Pinterest">✨</Link>
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-zinc-500">© 2026 Bloom Salon. Crafted for modern beauty experiences.</p>
      </div>
    </footer>
  );
}
