"use client";

import { motion } from "framer-motion";

const stack = [
  {
    name: "React",
    description: "UI baziran na komponentama",
    color: "#61dafb",
    svg: (
      <svg viewBox="0 0 128 128" className="h-10 w-10" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="8">
          <ellipse cx="64" cy="64" rx="54" ry="18" />
          <ellipse cx="64" cy="64" rx="54" ry="18" transform="rotate(60 64 64)" />
          <ellipse cx="64" cy="64" rx="54" ry="18" transform="rotate(120 64 64)" />
        </g>
        <circle cx="64" cy="64" r="10" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    description: "App Router & SSR",
    color: "#ffffff",
    svg: (
      <svg viewBox="0 0 64 64" className="h-10 w-10" aria-hidden="true">
        <path
          fill="currentColor"
          d="M8 56V8h12l16 24 16-24h12v48H40V28L24 56H8z"
        />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    description: "Tipizirani JavaScript",
    color: "#3178c6",
    svg: (
      <svg viewBox="0 0 128 128" className="h-10 w-10" aria-hidden="true">
        <path fill="currentColor" d="M0 0h128v128H0z" />
        <path
          fill="#fff"
          d="M42.6 97.6l6.9-4.9c1.7 2.9 3.3 5.4 6.9 5.4 3.5 0 5.7-1.7 5.7-8.3V56.9h11.7v34.1c0 12.2-7.1 17.8-17.5 17.8-9.4 0-14.7-4.8-17.4-10.4zm42.4-9.4h11.7V114H57.7v-6.4h27.3v-19.4z"
        />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first stiliziranje",
    color: "#38bdf8",
    svg: (
      <svg viewBox="0 0 128 128" className="h-10 w-10" aria-hidden="true">
        <path
          fill="currentColor"
          d="M64 16c26.5 0 48 21.5 48 48s-21.5 48-48 48S16 90.5 16 64 37.5 16 64 16z"
        />
        <path
          fill="#fff"
          d="M64 96c-14.3 0-26-11.7-26-26s11.7-26 26-26c11.5 0 20.9 7.4 24.4 17.7 1.5 4.5 6 7.8 10.7 7.8h2.9c-3.6 11.2-14.1 19.5-27.6 19.5z"
        />
      </svg>
    ),
  },
  {
    name: "Node.js",
    description: "JavaScript na serveru",
    color: "#83cd29",
    svg: (
      <svg viewBox="0 0 128 128" className="h-10 w-10" aria-hidden="true">
        <path
          fill="currentColor"
          d="M64 8C32.3 8 8 32.3 8 64s24.3 56 56 56 56-24.3 56-56S95.7 8 64 8zm18.3 85.2c-1.6 1-3.6 1.5-5.7 1.5-3.5 0-6.9-1.6-9-4.5l-7.5-11.1-9.8 6.2c-2.1 1.4-4.9 1.4-7 0l-6.7-4.2c-2.1-1.4-2.1-3.8 0-5.2l19.4-12.2c2.1-1.4 4.9-1.4 7 0l6.4 3.9c2.1 1.3 4.9 1.3 7 0l6.7-4.2c2.1-1.4 4.9-1.4 7 0l6.7 4.2c2.1 1.4 2.1 3.8 0 5.2l-16.1 10.1 7.5 11.1z"
        />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    description: "Fleksibilna dokument baza",
    color: "#47a248",
    svg: (
      <svg viewBox="0 0 128 128" className="h-10 w-10" aria-hidden="true">
        <path
          fill="currentColor"
          d="M64 8C33 8 8 33 8 64s25 56 56 56 56-25 56-56S95 8 64 8z"
        />
        <path
          fill="#fff"
          d="M64 24c-14 0-20 10-20 22s10 22 20 22 20-10 20-22-6-22-20-22zm0 60c-22 0-32-16-32-34s10-34 32-34 32 16 32 34-10 34-32 34z"
        />
      </svg>
    ),
  },
];

import { type Translations } from "./LanguageSwitcher";

export function TechStack({ translations }: { translations: Translations }) {
  return (
    <section id="tech" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-0 top-14 h-64 w-64 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-indigo-500 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 text-white md:px-8">
        <div className="mb-10 max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/60">Tehnologije</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Alati &amp; tehnologije</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            Moderni set alata fokusiran na brzinu, skalabilnost i iskustvo programera.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: index * 0.07 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[color:var(--tw-text-opacity)]" style={{ color: tech.color }}>
                  {tech.svg}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
                  <p className="mt-1 text-sm text-white/70">{tech.description}</p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 opacity-0 transition-all group-hover:opacity-100">
                <div className="h-full bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
