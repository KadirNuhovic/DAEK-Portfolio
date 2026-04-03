"use client";

import { motion } from "framer-motion";

import { type Translations } from "./LanguageSwitcher";

export function Partners({ translations }: { translations: Translations }) {
  const partners = [
    { name: "TechCorp", type: "Startup" },
    { name: "DigitalFlow", type: "Enterprise" },
    { name: "InnovateLab", type: "Agencija" },
    { name: "CloudBase", type: "Startup" },
    { name: "DataSync", type: "Enterprise" },
    { name: "WebCraft", type: "Agencija" },
  ];
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-12 top-0 h-72 w-72 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 text-white md:px-8">
        <div className="mb-10 max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/60">Što Kažu Naši Klijenti</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Iskustva partnera</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            sa kojima smo ostvarili izvanredne rezultate....
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur text-center"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
              <p className="text-sm text-white/70">{partner.type}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
