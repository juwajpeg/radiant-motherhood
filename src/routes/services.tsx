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
  Activity,
  Bone,
  Smile,
  Sparkles,
  CalendarHeart,
  Ribbon,
  ShieldPlus,
  Pill,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Meridian Health Pavilion" },
      {
        name: "description",
        content:
          "Comprehensive paediatric and gynaecological services at Meridian: NICU, immunisations, maternity, fertility, gynaecology, surgery, and more.",
      },
      {
        property: "og:title",
        content: "Our Services — Meridian Health Pavilion",
      },
      {
        property: "og:description",
        content:
          "Comprehensive paediatric and gynaecological services at Meridian: NICU, immunisations, maternity, fertility, gynaecology, surgery, and more.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const paediatricServices = [
  {
    icon: Stethoscope,
    title: "Well-child checkups",
    description: "Growth tracking, milestones and developmental screening from day one through adolescence.",
    color: "bg-brand/10",
  },
  {
    icon: Syringe,
    title: "Childhood immunisations",
    description: "Complete vaccine schedules, catch-up programmes and travel vaccinations in a calm setting.",
    color: "bg-accent/10",
  },
  {
    icon: HeartPulse,
    title: "Neonatal care & NICU",
    description: "Level III NICU for premature and critically ill newborns, with family-centred care.",
    color: "bg-rose/20",
  },
  {
    icon: Activity,
    title: "Paediatric emergency & urgent care",
    description: "24/7 emergency department staffed by paediatric specialists for acute illness and injury.",
    color: "bg-brand/10",
  },
  {
    icon: Heart,
    title: "Paediatric cardiology",
    description: "Heart murmurs, congenital heart disease screening and ongoing cardiac monitoring.",
    color: "bg-rose/20",
  },
  {
    icon: Sparkles,
    title: "Asthma, allergy & respiratory",
    description: "Diagnosis, management plans and allergy testing for breathing and skin conditions.",
    color: "bg-sage/25",
  },
  {
    icon: UserRound,
    title: "Developmental & behavioural paediatrics",
    description: "Autism, ADHD, learning differences and developmental delay assessments with family support.",
    color: "bg-accent/10",
  },
  {
    icon: Smile,
    title: "Adolescent medicine",
    description: "Confidential health, nutrition, mental wellbeing and sexual health for teens and young adults.",
    color: "bg-sage/25",
  },
  {
    icon: Bone,
    title: "Paediatric surgery & orthopaedics",
    description: "Day-case and inpatient surgical care, fracture clinics and musculoskeletal development.",
    color: "bg-brand/10",
  },
  {
    icon: Shield,
    title: "Paediatric dentistry",
    description: "Preventive and restorative dental care designed for infants, children and teens.",
    color: "bg-accent/10",
  },
];

const gynaeServices = [
  {
    icon: CalendarHeart,
    title: "Prenatal & antenatal care",
    description: "Routine and high-risk pregnancy monitoring, screening and personalised birth planning.",
    color: "bg-brand/10",
  },
  {
    icon: Baby,
    title: "Maternity & delivery",
    description: "Labour, delivery and postpartum care in private suites with midwife and obstetric support.",
    color: "bg-rose/20",
  },
  {
    icon: Microscope,
    title: "Fertility assessment & IVF",
    description: "Full-cycle fertility workup, ovulation induction, IUI and IVF with counselling support.",
    color: "bg-accent/10",
  },
  {
    icon: ShieldPlus,
    title: "Gynaecological surgery",
    description: "Minimally invasive laparoscopy, hysteroscopy and day-case procedures for faster recovery.",
    color: "bg-sage/25",
  },
  {
    icon: Activity,
    title: "Menopause & perimenopause",
    description: "Hormone therapy, symptom management and long-term bone and heart health planning.",
    color: "bg-rose/20",
  },
  {
    icon: Heart,
    title: "Menstrual health & endometriosis",
    description: "Specialist care for heavy periods, pelvic pain, endometriosis and PCOS.",
    color: "bg-brand/10",
  },
  {
    icon: Shield,
    title: "Cervical screening & HPV",
    description: "Smear tests, HPV vaccination, colposcopy and follow-up for abnormal results.",
    color: "bg-accent/10",
  },
  {
    icon: Sparkles,
    title: "Urogynaecology & pelvic floor",
    description: "Pelvic floor rehabilitation, incontinence care and prolapse assessment.",
    color: "bg-sage/25",
  },
  {
    icon: Ribbon,
    title: "Gynaecological oncology",
    description: "Screening, diagnosis and coordinated care for ovarian, cervical and uterine conditions.",
    color: "bg-rose/20",
  },
  {
    icon: Pill,
    title: "Family planning & contraception",
    description: "Long-acting and short-acting contraception, preconception counselling and fertility awareness.",
    color: "bg-brand/10",
  },
];

function ServiceCard({ service }: { service: (typeof paediatricServices)[number] }) {
  return (
    <div className="rounded-2xl border border-white/60 bg-white/55 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-lg">
      <div className={`mb-3 grid size-11 place-items-center rounded-xl ${service.color}`}>
        <service.icon className="size-5 text-ink" />
      </div>
      <h3 className="font-display text-lg font-semibold">{service.title}</h3>
      <p className="mt-1 text-sm text-ink/60">{service.description}</p>
    </div>
  );
}

function ServicesPage() {
  return (
    <main className="relative z-10 mx-auto max-w-6xl px-5 py-16">
      <div className="mb-10 max-w-[52ch]">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand">What we treat</p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight md:text-5xl">
          Comprehensive care, from first scan to first steps.
        </h1>
        <p className="mt-4 text-ink/60">
          Every service below is delivered by a dedicated team, with the equipment and aftercare to
          support your whole journey.
        </p>
      </div>

      <section className="mb-16">
        <div className="mb-6 flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-full bg-brand font-display text-base font-bold text-white">
            P
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold">Paediatric Medicine</h2>
            <p className="text-xs uppercase tracking-[0.16em] text-ink/50">Birth through adolescence</p>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {paediatricServices.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="mb-6 flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-full bg-accent font-display text-base font-bold text-white">
            G
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold">Gynaecology & Maternity</h2>
            <p className="text-xs uppercase tracking-[0.16em] text-ink/50">Whole-of-life women's health</p>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gynaeServices.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/60 bg-gradient-to-br from-brand/15 via-white/40 to-accent/15 p-10 text-center backdrop-blur-xl">
        <h2 className="font-display text-3xl font-bold tracking-tight">Not sure where to start?</h2>
        <p className="mx-auto mt-3 max-w-md text-ink/60">
          Our care coordinators will listen to your symptoms and guide you to the right clinic.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand"
          >
            Request a callback
          </Link>
          <a
            href="tel:+15550182240"
            className="inline-flex items-center gap-2 rounded-xl border border-white/70 bg-white/50 px-6 py-3 text-sm font-semibold text-ink backdrop-blur-xl transition hover:bg-white/70"
          >
            Call +1 (555) 018-2240
          </a>
        </div>
      </section>
    </main>
  );
}
