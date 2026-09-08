import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/40 bg-white/30 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-ink/50 md:flex-row">
        <p>© 2024 Meridian Health Pavilion. Caring for families, every day.</p>
        <div className="flex gap-5">
          <Link to="/services" className="transition hover:text-brand">
            Services
          </Link>
          <Link to="/about" className="transition hover:text-brand">
            About
          </Link>
          <Link to="/doctors" className="transition hover:text-brand">
            Doctors
          </Link>
          <Link to="/contact" className="transition hover:text-brand">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
