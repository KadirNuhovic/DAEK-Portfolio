"use client";

import { motion } from "framer-motion";

import { type Translations } from "./LanguageSwitcher";

export function About({ translations }: { translations: Translations }) {
  return (
    <section id="about" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-12 top-0 h-72 w-72 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 text-white md:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/60">{translations.about.badge}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{translations.about.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            {translations.about.description}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="grid gap-8 md:grid-cols-2"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur">
            <h3 className="text-xl font-semibold text-white">{translations.about.specTitle}</h3>
            <ul className="mt-6 space-y-4 text-white/70">
              {translations.about.specList.map((item, i) => (
                <li key={i}>
                  <span className="font-semibold text-white">●</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur">
            <h3 className="text-xl font-semibold text-white">{translations.about.approachTitle}</h3>
            <p className="mt-6 text-white/70">
              {translations.about.approachDesc1}
            </p>
            <p className="mt-4 text-white/70">
              {translations.about.approachDesc2}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
