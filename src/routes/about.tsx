import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Heart, Shield, Clock, Users } from "lucide-react";

import aboutImage from "../assets/about-paediatrician.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Meridian Health Pavilion" },
      {
        name: "description",
        content:
          "Learn about Meridian Health Pavilion: our mission, values, and why families trust us for paediatric and gynaecological care.",
      },
      {
        property: "og:title",
        content: "About Us — Meridian Health Pavilion",
      },
      {
        property: "og:description",
        content:
          "Learn about Meridian Health Pavilion: our mission, values, and why families trust us for paediatric and gynaecological care.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Heart,
    title: "Family-centred",
    description: "We treat the whole family, not just the condition. Parents are partners in every decision.",
  },
  {
    icon: Shield,
    title: "Safety first",
    description: "JCI-accredited protocols, infection control, and continuous clinical audit keep care safe.",
  },
  {
    icon: Clock,
    title: "Unhurried visits",
    description: "Longer appointments mean time to ask questions and leave with a clear plan.",
  },
  {
    icon: Users,
    title: "One team",
    description: "Paediatricians, obstetricians, gynaecologists and midwives share one record and one goal.",
  },
];

function AboutPage() {
  return (
    <main className="relative z-10 mx-auto max-w-6xl px-5 py-16">
      <div className="mb-12 max-w-[52ch]">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand">About us</p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight md:text-5xl">
          A hospital designed around families.
        </h1>
      </div>

      <section className="mb-16 grid items-center gap-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-white/60 bg-gradient-to-br from-accent/10 via-white/30 to-brand/10 backdrop-blur-xl outline-1 -outline-offset-1 outline-white/60">
          <img
            src={aboutImage}
            alt="Paediatrician smiling while holding a happy toddler in a bright clinic"
            width={1024}
            height={1024}
            className="aspect-square w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="rounded-3xl border border-white/60 bg-white/55 p-8 backdrop-blur-xl">
          <h2 className="font-display text-3xl font-bold tracking-tight">Our story</h2>
          <p className="mt-4 text-ink/60">
            Meridian opened in 1998 with a simple belief: that paediatric and women's healthcare
            should feel calm, connected and deeply respectful. Over the years we have grown into a
            full-service hospital, but that founding idea still guides every corridor we build and
            every consultation we hold.
          </p>
          <p className="mt-4 text-ink/60">
            Today we care for more than 40,000 families a year, from the first positive pregnancy
            test through childhood, adolescence and every chapter of a woman's life.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6 border-t border-white/40 pt-8">
            <div>
              <p className="font-display text-3xl font-bold text-brand">26</p>
              <p className="mt-1 text-sm text-ink/50">years of care</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-brand">140k</p>
              <p className="mt-1 text-sm text-ink/50">families served</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-brand">24/7</p>
              <p className="mt-1 text-sm text-ink/50">on-site cover</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-8 font-display text-3xl font-bold tracking-tight">What guides us</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-white/60 bg-white/55 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-3 grid size-10 place-items-center rounded-xl bg-brand/10">
                <value.icon className="size-5 text-brand" />
              </div>
              <h3 className="font-display text-lg font-semibold">{value.title}</h3>
              <p className="mt-1 text-sm text-ink/60">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/60 bg-white/55 p-8 backdrop-blur-xl">
        <h2 className="font-display text-3xl font-bold tracking-tight">Why families choose Meridian</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            "Board-certified paediatric & OB-GYN teams",
            "Child-friendly, parent-led consultations",
            "Private, rooming-in maternity suites",
            "Level III NICU on the same floor as labour wards",
            "Real-time online booking and medical records",
            "A dedicated 24/7 clinician phone line",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-ink/70">
              <span className="grid size-6 place-items-center rounded-full bg-sage/30 text-xs text-ink">✓</span>
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand"
          >
            Book a visit <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
