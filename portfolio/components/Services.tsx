"use client";

import { motion } from "framer-motion";
import { CodeIcon, DesignIcon, RocketIcon, SpeedIcon } from "./icons";

import { type Translations } from "./LanguageSwitcher";

export function Services({ translations }: { translations: Translations }) {
  const services = [
    {
      title: translations.services.items[0].title,
      description: translations.services.items[0].description,
      icon: CodeIcon,
    },
    {
      title: translations.services.items[1].title,
      description: translations.services.items[1].description,
      icon: DesignIcon,
    },
    {
      title: translations.services.items[2].title,
      description: translations.services.items[2].description,
      icon: RocketIcon,
    },
    {
      title: translations.services.items[3].title,
      description: translations.services.items[3].description,
      icon: SpeedIcon,
    },
  ];

  return (
    <section id="services" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-gradient-to-r from-sky-500 to-violet-500/70 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 text-white md:px-8">
        <div className="mb-12 max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/60">{translations.services.badge}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{translations.services.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            {translations.services.description}
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
