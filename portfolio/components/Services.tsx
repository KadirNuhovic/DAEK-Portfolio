"use client";

import { motion } from "framer-motion";
import { CodeIcon, DesignIcon, RocketIcon, SpeedIcon } from "./icons";

const services = [
  {
    title: "Fullstack Web Development",
    description: "Building robust, scalable applications with Next.js, TypeScript, and modern backends.",
    icon: CodeIcon,
  },
  {
    title: "UI/UX Design",
    description: "Designing polished interfaces with a focus on accessibility and intuitive interactions.",
    icon: DesignIcon,
  },
  {
    title: "Landing Page Development",
    description: "Conversion-focused landing pages with pixel-perfect layouts and fast load times.",
    icon: RocketIcon,
  },
  {
    title: "Website Optimization",
    description: "Performance tuning, SEO improvements, and responsive experiences for every device.",
    icon: SpeedIcon,
  },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-gradient-to-r from-sky-500 to-violet-500/70 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 text-white md:px-8">
        <div className="mb-12 max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/60">What I do</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Services I offer</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            From rapid prototyping to production-ready apps, I deliver full-cycle solutions with the polish you expect.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 via-indigo-500 to-cyan-500 text-white shadow-lg shadow-purple-500/30 transition-transform group-hover:-translate-y-1">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{service.description}</p>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 opacity-0 transition-all group-hover:opacity-100">
                  <div className="h-full bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
