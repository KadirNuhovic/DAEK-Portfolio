"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { type Translations } from "./LanguageSwitcher";

const MotionLink = motion(Link);

export function CTA({ translations }: { translations: Translations }) {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-indigo-500 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-500 via-purple-600 to-sky-500 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 text-white md:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-12 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl mb-6">
              {translations.cta.title}
            </h2>
            <p className="text-lg leading-relaxed text-white/80 mb-8 max-w-2xl mx-auto">
              {translations.cta.description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-6">
              <MotionLink
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 px-8 py-3 text-sm font-semibold text-black shadow-lg shadow-purple-500/30 transition hover:brightness-110"
              >
                {translations.cta.primaryButton}
              </MotionLink>
              <MotionLink
                href="#projects"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderColor: "rgba(255, 255, 255, 0.5)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                {translations.cta.secondaryButton}
              </MotionLink>
            </div>
            <p className="text-sm text-white/60">
              {translations.cta.footnote}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
