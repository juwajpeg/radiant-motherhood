import { createFileRoute, Link } from "@tanstack/react-router";

import doctorAmara from "../assets/doctor-amara.jpg";
import doctorLena from "../assets/doctor-lena.jpg";
import doctorNoah from "../assets/doctor-noah.jpg";
import doctorSarah from "../assets/doctor-sarah.jpg";
import doctorPriya from "../assets/doctor-priya.jpg";
import doctorJames from "../assets/doctor-james.jpg";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Our Doctors — Meridian Health Pavilion" },
      {
        name: "description",
        content:
          "Meet the specialist paediatricians, obstetricians, gynaecologists and neonatologists at Meridian Health Pavilion.",
      },
      {
        property: "og:title",
        content: "Our Doctors — Meridian Health Pavilion",
      },
      {
        property: "og:description",
        content:
          "Meet the specialist paediatricians, obstetricians, gynaecologists and neonatologists at Meridian Health Pavilion.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DoctorsPage,
});

const doctors = [
  {
    name: "Dr. Amara Osei",
    role: "Consultant Paediatrician",
    bio: "Dr. Osei leads our general paediatrics service with a focus on early childhood development and long-term family health.",
    image: doctorAmara,
    gradient: "from-brand/10 to-accent/10",
  },
  {
    name: "Dr. Lena Marchetti",
    role: "OB-GYN, Fertility Lead",
    bio: "Dr. Marchetti specialises in high-risk obstetrics, fertility treatment and minimally invasive gynaecological surgery.",
    image: doctorLena,
    gradient: "from-accent/10 to-rose/15",
  },
  {
    name: "Dr. Noah Feld",
    role: "Head of Neonatology",
    bio: "Dr. Feld directs our NICU and newborn services, with expertise in premature infant care and neonatal follow-up.",
    image: doctorNoah,
    gradient: "from-sage/20 to-brand/10",
  },
  {
    name: "Dr. Sarah Chen",
    role: "Paediatric Cardiologist",
    bio: "Dr. Chen provides cardiac screening, fetal echocardiography and ongoing care for children with heart conditions.",
    image: doctorSarah,
    gradient: "from-rose/15 to-brand/10",
  },
  {
    name: "Dr. Priya Nair",
    role: "Gynaecological Oncologist",
    bio: "Dr. Nair leads our women's cancer screening programme and coordinates multidisciplinary oncology care.",
    image: doctorPriya,
    gradient: "from-accent/10 to-sage/20",
  },
  {
    name: "Dr. James Okonkwo",
    role: "Paediatric Surgeon",
    bio: "Dr. Okonkwo performs day-case and inpatient paediatric surgery with a focus on minimally invasive techniques.",
    image: doctorJames,
    gradient: "from-brand/10 to-sage/20",
  },
];

function DoctorsPage() {
  return (
    <main className="relative z-10 mx-auto max-w-6xl px-5 py-16">
      <div className="mb-10 max-w-[52ch]">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand">Meet the team</p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight md:text-5xl">
          Specialists who listen.
        </h1>
        <p className="mt-4 text-ink/60">
          Our consultants are leaders in their fields, chosen as much for their communication as
          their clinical skill.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor) => (
          <div
            key={doctor.name}
            className="rounded-2xl border border-white/60 bg-white/55 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-lg"
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
            <h2 className="font-display text-lg font-semibold">{doctor.name}</h2>
            <p className="text-sm text-brand">{doctor.role}</p>
            <p className="mt-3 text-sm text-ink/60">{doctor.bio}</p>
          </div>
        ))}
      </div>

      <section className="mt-16 rounded-3xl border border-white/60 bg-gradient-to-br from-brand/15 via-white/40 to-accent/15 p-10 text-center backdrop-blur-xl">
        <h2 className="font-display text-3xl font-bold tracking-tight">Find the right specialist</h2>
        <p className="mx-auto mt-3 max-w-md text-ink/60">
          Not sure which doctor to see? Our care coordinators can help match you with the right
          clinician.
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
