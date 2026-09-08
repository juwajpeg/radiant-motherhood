import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Baby,
  Stethoscope,
  HeartPulse,
  UserRound,
  Dna,
  Microscope,
  Shield,
  Heart,
  Syringe,
} from "lucide-react";

import heroImage from "../assets/hero-atrium.jpg";
import aboutImage from "../assets/about-paediatrician.jpg";
import doctorAmara from "../assets/doctor-amara.jpg";
import doctorLena from "../assets/doctor-lena.jpg";
import doctorNoah from "../assets/doctor-noah.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meridian Health Pavilion — Paediatric & Gynaecology Care" },
      {
        name: "description",
        content:
          "Paediatric and gynaecological care in a calm, modern hospital. From newborn NICU to maternity, fertility, and women's health.",
      },
      {
        property: "og:title",
        content: "Meridian Health Pavilion — Paediatric & Gynaecology Care",
      },
      {
        property: "og:description",
        content:
          "Paediatric and gynaecological care in a calm, modern hospital. From newborn NICU to maternity, fertility, and women's health.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IndexPage,
});

const featuredServices = [
  {
    icon: Stethoscope,
    title: "Well-child checkups",
    description: "Growth tracking, milestones and developmental screening from day one.",
    color: "bg-brand/10",
  },
  {
    icon: Syringe,
    title: "Paediatric immunisations",
    description: "Complete childhood vaccine schedules with gentle, reassuring care.",
    color: "bg-accent/10",
  },
  {
    icon: HeartPulse,
    title: "Neonatal care & NICU",
    description: "Level III NICU for premature and newborns needing intensive support.",
    color: "bg-rose/20",
  },
  {
    icon: UserRound,
    title: "Adolescent medicine",
    description: "Confidential health, nutrition and wellbeing for teens and young adults.",
    color: "bg-sage/25",
  },
  {
    icon: Baby,
    title: "Prenatal & maternity",
    description: "High-risk and routine obstetric care, ultrasounds and birth planning.",
    color: "bg-brand/10",
  },
  {
    icon: Heart,
    title: "Gynaecology",
    description: "Menstrual health, contraception and routine women's wellness exams.",
    color: "bg-accent/10",
  },
];

const teamPreview = [
  {
    name: "Dr. Amara Osei",
    role: "Consultant Paediatrician",
    image: doctorAmara,
    gradient: "from-brand/10 to-accent/10",
  },
  {
    name: "Dr. Lena Marchetti",
    role: "OB-GYN, Fertility Lead",
    image: doctorLena,
    gradient: "from-accent/10 to-rose/15",
  },
  {
    name: "Dr. Noah Feld",
    role: "Head of Neonatology",
    image: doctorNoah,
    gradient: "from-sage/20 to-brand/10",
  },
];

function IndexPage() {
  return (
    <main className="relative z-10">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-12 pt-16 md:pt-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="fade-up">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/50 px-4 py-1.5 text-xs font-medium text-ink/60 backdrop-blur-xl">
              <span className="size-2 rounded-full bg-sage" />
              Trusted by 40,000+ families
            </p>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Compassionate care for <span className="text-brand">every stage</span> of life.
            </h1>
            <p className="mt-5 max-w-md text-lg text-ink/60">
              From a newborn's first heartbeat to a mother's journey onward — Meridian brings
              paediatrics and gynaecology under one calm, friendly roof.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-accent"
              >
                Book an appointment
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-white/70 bg-white/50 px-6 py-3 text-sm font-semibold text-ink backdrop-blur-xl transition hover:bg-white/70"
              >
                Explore services
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-ink/60">
              <div>
                <span className="font-display text-2xl font-bold text-ink">24/7</span> Emergency
              </div>
              <div>
                <span className="font-display text-2xl font-bold text-ink">30+</span> Specialists
              </div>
              <div>
                <span className="font-display text-2xl font-bold text-ink">15min</span> Avg. response
              </div>
            </div>
          </div>

          <div className="fade-up relative">
            <div className="overflow-hidden rounded-3xl border border-white/60 bg-gradient-to-br from-brand/10 via-white/30 to-accent/10 backdrop-blur-xl outline-1 -outline-offset-1 outline-white/60">
              <img
                src={heroImage}
                alt="Bright modern hospital atrium with families and natural light"
                width={1440}
                height={1024}
                className="aspect-[16/11] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/60 bg-white/70 px-5 py-4 shadow-lg backdrop-blur-xl">
              <p className="font-display text-lg font-bold text-ink">98%</p>
              <p className="text-xs text-ink/55">family satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-white/40 bg-white/30 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-5 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.18em] text-ink/45">
            <span>JCI Accredited Facility</span>
            <span className="hidden text-brand/70 sm:inline">·</span>
            <span>Leveled NICU</span>
            <span className="hidden text-brand/70 sm:inline">·</span>
            <span>On-site Anaesthesia</span>
            <span className="hidden text-brand/70 sm:inline">·</span>
            <span>Private Maternity Suites</span>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand">Our care</p>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-tight">
              Every service, thoughtfully delivered
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand transition hover:text-ink"
          >
            View all services <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-white/60 bg-white/55 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`mb-3 grid size-11 place-items-center rounded-xl ${service.color}`}>
                <service.icon className="size-5 text-ink" />
              </div>
              <h3 className="font-display text-lg font-semibold">{service.title}</h3>
              <p className="mt-1 text-sm text-ink/60">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/60 bg-white/55 p-8 backdrop-blur-xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">Why Meridian</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight">
              One roof, whole family
            </h2>
            <p className="mt-4 text-ink/60">
              We designed Meridian so parents and children are never bounced between buildings. A
              dedicated neonatal unit beside maternity, a calm paediatric wing, and a dedicated
              women's floor — connected by design.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <span className="grid size-6 place-items-center rounded-full bg-sage/30 text-xs">✓</span>
                Board-certified paediatric & OB-GYN teams
              </li>
              <li className="flex items-center gap-3">
                <span className="grid size-6 place-items-center rounded-full bg-sage/30 text-xs">✓</span>
                Child-friendly, parent-led consultations
              </li>
              <li className="flex items-center gap-3">
                <span className="grid size-6 place-items-center rounded-full bg-sage/30 text-xs">✓</span>
                Real-time online booking & records
              </li>
            </ul>
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand"
              >
                Learn more about us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
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
        </div>
      </section>

      {/* Team preview */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand">Meet the team</p>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-tight">
              Specialists who listen
            </h2>
          </div>
          <Link
            to="/doctors"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand transition hover:text-ink"
          >
            See all doctors <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {teamPreview.map((doctor) => (
            <div
              key={doctor.name}
              className="rounded-2xl border border-white/60 bg-white/55 p-6 backdrop-blur-xl"
            >
              <div
                className={`mb-4 overflow-hidden rounded-xl bg-gradient-to-br ${doctor.gradient} outline-1 -outline-offset-1 outline-white/60`}
              >
                <img
                  src={doctor.image}
                  alt={`Portrait of ${doctor.name}, ${doctor.role}`}
                  width={512}
                  height={640}
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display text-lg font-semibold">{doctor.name}</h3>
              <p className="text-sm text-brand">{doctor.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-3xl border border-white/60 bg-gradient-to-br from-brand/15 via-white/40 to-accent/15 p-10 text-center backdrop-blur-xl">
          <h2 className="font-display text-4xl font-bold tracking-tight">Ready when you are</h2>
          <p className="mx-auto mt-3 max-w-md text-ink/60">
            Book a consultation in under two minutes, or ring our 24/7 care line for urgent advice.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand"
            >
              Book an appointment
            </Link>
            <a
              href="tel:+15550182240"
              className="inline-flex items-center gap-2 rounded-xl border border-white/70 bg-white/50 px-6 py-3 text-sm font-semibold text-ink backdrop-blur-xl transition hover:bg-white/70"
            >
              Call +1 (555) 018-2240
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
