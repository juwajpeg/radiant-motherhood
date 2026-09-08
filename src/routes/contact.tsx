import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Appointments — Meridian Health Pavilion" },
      {
        name: "description",
        content:
          "Book an appointment or request a callback at Meridian Health Pavilion. Paediatric and gynaecology care, available 24/7.",
      },
      {
        property: "og:title",
        content: "Contact & Appointments — Meridian Health Pavilion",
      },
      {
        property: "og:description",
        content:
          "Book an appointment or request a callback at Meridian Health Pavilion. Paediatric and gynaecology care, available 24/7.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const departments = [
  "Paediatrics",
  "Gynaecology",
  "Maternity / Obstetrics",
  "Fertility & IVF",
  "Neonatal / NICU",
  "Not sure yet",
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    department: "Paediatrics",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="relative z-10 mx-auto max-w-6xl px-5 py-16">
      <div className="mb-10 max-w-[52ch]">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand">Begin your visit</p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-tight md:text-5xl">
          Book an appointment with a Meridian specialist.
        </h1>
        <p className="mt-4 text-ink/60">
          Tell us a little about your needs and our care coordinators will call within one working
          day to find a time that suits you.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="space-y-6 rounded-3xl border border-white/60 bg-white/55 p-8 backdrop-blur-xl">
            <div className="flex items-start gap-4">
              <div className="grid size-10 place-items-center rounded-xl bg-brand/10">
                <Phone className="size-5 text-brand" />
              </div>
              <div>
                <p className="text-sm font-medium text-ink">Phone</p>
                <a
                  href="tel:+15550182240"
                  className="text-lg font-semibold text-ink transition hover:text-brand"
                >
                  +1 (555) 018-2240
                </a>
                <p className="text-xs text-ink/50">24 hours a day, 7 days a week</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="grid size-10 place-items-center rounded-xl bg-accent/10">
                <Mail className="size-5 text-accent" />
              </div>
              <div>
                <p className="text-sm font-medium text-ink">Email</p>
                <a
                  href="mailto:care@meridianhospital.example"
                  className="text-lg font-semibold text-ink transition hover:text-brand"
                >
                  care@meridianhospital.example
                </a>
                <p className="text-xs text-ink/50">We reply within one working day</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="grid size-10 place-items-center rounded-xl bg-rose/20">
                <MapPin className="size-5 text-rose-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-ink">Visit us</p>
                <p className="text-lg font-semibold text-ink">14 Larkspur Lane</p>
                <p className="text-ink/60">Riverside District, Medical Quarter</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="grid size-10 place-items-center rounded-xl bg-sage/25">
                <Clock className="size-5 text-sage-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-ink">Opening hours</p>
                <p className="text-ink/60">Mon–Fri: 07:00 – 21:00</p>
                <p className="text-ink/60">Sat–Sun: 08:00 – 18:00</p>
                <p className="text-ink/60">Emergency: 24/7</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-white/60 bg-white/55 p-8 backdrop-blur-xl">
            {submitted ? (
              <div className="flex flex-col items-center py-12 text-center">
                <div className="mb-4 grid size-16 place-items-center rounded-full bg-sage/25">
                  <CheckCircle2 className="size-8 text-sage" />
                </div>
                <h2 className="font-display text-2xl font-bold text-ink">Thank you</h2>
                <p className="mt-2 max-w-sm text-ink/60">
                  We have received your request. A care coordinator will call you within one working
                  day.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-xl bg-ink px-6 py-2.5 text-sm font-medium text-white transition hover:bg-brand"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-display text-2xl font-bold text-ink">Request a callback</h2>
                <p className="mt-1 text-sm text-ink/60">
                  No payment required to book. We confirm within one working day.
                </p>
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-ink/50"
                      >
                        Full name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full rounded-xl border border-white/70 bg-white/50 px-4 py-3 text-sm text-ink placeholder:text-ink/30 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-ink/50"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Your number"
                        className="w-full rounded-xl border border-white/70 bg-white/50 px-4 py-3 text-sm text-ink placeholder:text-ink/30 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-ink/50"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your email"
                      className="w-full rounded-xl border border-white/70 bg-white/50 px-4 py-3 text-sm text-ink placeholder:text-ink/30 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="department"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-ink/50"
                    >
                      Area of care
                    </label>
                    <select
                      id="department"
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full rounded-xl border border-white/70 bg-white/50 px-4 py-3 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                    >
                      {departments.map((dept) => (
                        <option key={dept} value={dept}>
                          {dept}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-ink/50"
                    >
                      How can we help
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="A few words about what you need"
                      className="w-full resize-none rounded-xl border border-white/70 bg-white/50 px-4 py-3 text-sm text-ink placeholder:text-ink/30 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand"
                  >
                    Request a call back
                    <span aria-hidden="true" className="text-base leading-none">
                      →
                    </span>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
