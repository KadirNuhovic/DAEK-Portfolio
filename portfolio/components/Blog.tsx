"use client";

import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Zašto je PWA budućnost web aplikacija?",
    description: "Progressive Web Apps kombinuju najbolje iz web i mobilnih aplikacija. Saznajte kako PWA može poboljšati korisničko iskustvo i povećati engagement.",
    link: "#",
  },
  {
    title: "TypeScript vs JavaScript: Šta odabrati za vaš projekat?",
    description: "Detaljna analiza prednosti i nedostataka TypeScript-a u odnosu na JavaScript. Kada koristiti TS i kako maksimizirati benefite.",
    link: "#",
  },
  {
    title: "Optimizacija performansi React aplikacija",
    description: "Praktični savjeti za poboljšanje brzine React aplikacija: lazy loading, code splitting, memoization i druge tehnike optimizacije.",
    link: "#",
  },
  {
    title: "UX/UI dizajn principima za moderne web aplikacije",
    description: "Osnovni principi dizajna koji čine aplikacije intuitivnim i privlačnim. Od mobile-first pristupa do accessibility standarda.",
    link: "#",
  },
  {
    title: "Machine Learning u web razvoju: Praktični primjeri",
    description: "Kako integrisati ML modele u web aplikacije. TensorFlow.js, computer vision i recommendation sistemi u browser-u.",
    link: "#",
  },
  {
    title: "DevOps automatizacija za full-stack developere",
    description: "CI/CD pipeline-ovi, containerizacija i cloud deployment strategije koje svaki developer treba da zna.",
    link: "#",
  },
];

import { type Translations } from "./LanguageSwitcher";

export function Blog({ translations }: { translations: Translations }) {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-0 top-14 h-72 w-72 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-indigo-500 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 text-white md:px-8">
        <div className="mb-10 max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/60">Najnovije Vesti</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Saznajte više</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            o web razvoju, dizajnu i digitalnim trendovima iz našeg bloga.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur"
            >
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  {post.description}
                </p>
                <a
                  href={post.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-purple-300 hover:text-purple-200 transition-colors"
                >
                  Pročitaj više→
                </a>
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 opacity-0 transition-all group-hover:opacity-100">
                <div className="h-full bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400" />
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            Pogledaj sve članke
          </a>
        </div>
      </div>
    </section>
  );
}
