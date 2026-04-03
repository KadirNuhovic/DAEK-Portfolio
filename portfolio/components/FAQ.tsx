"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "Da li možete raditi sa postojećim projektima?",
    answer: "Da, imamo iskustva sa integracijom u postojeće timove i projekte. Možemo preuzeti održavanje, dodati nove funkcionalnosti ili optimizovati postojeći kod.",
  },
  {
    question: "Koliko dugo traje razvoj projekta?",
    answer: "Vrijeme zavisi od složenosti projekta. Obično landing stranice traju 2-4 nedelje, web aplikacije 2-3 meseca, a kompleksni sistemi 4-6+ meseci.",
  },
  {
    question: "Koje tehnologije koristite?",
    answer: "Specijalizirani smo za moderni JavaScript ekosistem: React, Next.js, TypeScript, Node.js, MongoDB, i druge tehnologije prilagođene potrebama projekta.",
  },
  {
    question: "Da li nudite podršku nakon lansiranja?",
    answer: "Da, nudimo kontinuiranu podršku, održavanje i optimizaciju nakon lansiranja. Imamo različite pakete podrške u zavisnosti od potreba.",
  },
];

import { type Translations } from "./LanguageSwitcher";

export function FAQ({ translations }: { translations: Translations }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-0 top-14 h-72 w-72 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-indigo-500 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 text-white md:px-8">
        <div className="mb-10 max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/60">Često Postavljena Pitanja</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Odgovori na najčešća pitanja</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            o našim uslugama i procesu rada.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur text-left transition-all hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    <motion.div
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="h-6 w-6 flex items-center justify-center"
                    >
                      <span className="text-white/60 text-2xl leading-none">+</span>
                    </motion.div>
                  </div>
                </div>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 text-white/70 leading-relaxed">{faq.answer}</p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/70 mb-4">Niste našli odgovor na svoje pitanje?</p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 px-8 py-3 text-sm font-semibold text-black shadow-lg shadow-purple-500/30 transition hover:brightness-110"
          >
            Kontaktirajte nas
          </a>
        </div>
      </div>
    </section>
  );
}
