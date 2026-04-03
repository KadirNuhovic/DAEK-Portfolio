"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "50+", label: "Projekata" },
  { number: "30+", label: "Klijenata" },
  { number: "6+", label: "Godina Iskustva" },
  { number: "98%", label: "Zadovoljstva" },
];

import { type Translations } from "./LanguageSwitcher";

export function Results({ translations }: { translations: Translations }) {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 text-white md:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/60">Naši Rezultati</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Brojevi govore sami za sebe</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            Preko 6 godina iskustva u digitalnoj transformaciji.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
