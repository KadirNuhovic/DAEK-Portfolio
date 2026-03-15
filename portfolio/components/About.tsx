"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-12 top-0 h-72 w-72 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 text-white md:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/60">About me</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Crafting digital experiences with code</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            I'm a fullstack developer who loves connecting design and engineering. With over 6 years of experience building web products, I specialize in creating scalable, user-centered applications with a keen eye for polished interactions.
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
            <h3 className="text-xl font-semibold text-white">What I specialize in</h3>
            <ul className="mt-6 space-y-4 text-white/70">
              <li>
                <span className="font-semibold text-white">End-to-end product builds</span> — from design systems to API integrations.
              </li>
              <li>
                <span className="font-semibold text-white">Responsive interfaces</span> — polished layouts that adapt to every device.
              </li>
              <li>
                <span className="font-semibold text-white">Performance &amp; accessibility</span> — fast load times and inclusive experiences.
              </li>
              <li>
                <span className="font-semibold text-white">Collaborative development</span> — version control, code reviews, and clear documentation.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur">
            <h3 className="text-xl font-semibold text-white">My approach</h3>
            <p className="mt-6 text-white/70">
              I combine modern tooling with a product mindset. Each project starts with user needs, moves through prototypes and iterative development, and ships with maintainable, documented code.
            </p>
            <p className="mt-4 text-white/70">
              Whether it's a startup launch or revamping an existing platform, I focus on building reliable solutions that scale and delight users.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
