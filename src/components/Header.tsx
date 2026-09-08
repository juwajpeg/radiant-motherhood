import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/doctors", label: "Doctors" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 mx-auto max-w-6xl px-5 pt-6">
      <nav className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/55 px-5 py-3 shadow-sm backdrop-blur-xl">
        <Link to="/" className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-brand to-accent font-display text-lg font-bold text-white">
            M
          </div>
          <div className="leading-tight">
            <p className="font-display text-[15px] font-semibold">Meridian</p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-ink/45">
              Paeds & Gynae Care
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-7 text-sm text-ink/70 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="transition hover:text-brand"
              activeProps={{ className: "text-brand font-medium" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden rounded-xl bg-ink px-4 py-2 text-sm font-medium text-white transition hover:bg-brand md:inline-flex"
        >
          Book a visit
        </Link>

        <button
          type="button"
          className="inline-flex text-ink/70 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="mt-2 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-lg backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-ink/70 transition hover:text-brand"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="rounded-xl bg-ink px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-brand"
              onClick={() => setMenuOpen(false)}
            >
              Book a visit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
