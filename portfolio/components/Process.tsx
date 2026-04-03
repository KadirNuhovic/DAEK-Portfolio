"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    title: "Otkrivanje",
    description: "Razumijevanje vaših ciljeva, potreba i ciljne publike. Detaljna analiza i definisanje scope-a projekta.",
    icon: "🎯",
  },
  {
    title: "Dizajn", 
    description: "Kreiranje wireframeova, prototipova i vizuelnog identiteta. Iterativni proces dizajniranja uz vašu povratnu informaciju.",
    icon: "🎨",
  },
  {
    title: "Razvoj",
    description: "Implementacija koda sa fokusom na performanse, sigurnost i skalabilnost. Redovno testiranje i optimizacija.",
    icon: "⚡",
  },
  {
    title: "Lansiranje",
    description: "Finalna implementacija, deployment i monitoring. Kontinuirana podrška i optimizacija posle lansiranja.",
    icon: "🚀",
  },
];

import { type Translations } from "./LanguageSwitcher";

export function Process({ translations }: { translations: Translations }) {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-0 top-14 h-72 w-72 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-indigo-500 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 text-white md:px-8">
        <div className="mb-10 max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold uppercase tracking-wide text-white/60"
          >
            Naš Proces Rada
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Strukturirani pristup
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg leading-relaxed text-white/70"
          >
            koji garantuje izvanredne rezultate svaki put.
          </motion.p>
        </div>

        <div className="relative mx-auto max-w-6xl py-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-purple-500/70 via-indigo-500/70 to-cyan-500/70"
          />
          <div className="space-y-10">
            {processSteps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50, x: isLeft ? -80 : 80 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15 + 0.4,
                    type: "spring",
                    stiffness: 100
                  }}
                  className={`relative flex flex-col md:flex-row items-start ${isLeft ? "md:justify-start" : "md:justify-end"}`}
                >
                  <div className="md:order-1 md:w-1/2">
                    <div className={`relative w-full md:max-w-md ${isLeft ? "md:ml-auto" : "md:mr-auto"}`}>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.15 + 0.6,
                          type: "spring",
                          stiffness: 200
                        }}
                        className="absolute left-1/2 top-2 h-4 w-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 ring-4 ring-black/70"
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                          boxShadow: "0 25px 80px rgba(77, 126, 255, 0.4)",
                          transition: { duration: 0.3 }
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.15 + 0.5
                        }}
                        className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur transition duration-300 hover:shadow-[0_20px_80px_rgba(77,126,255,0.45)]"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <motion.div
                            initial={{ rotate: -180, scale: 0 }}
                            whileInView={{ rotate: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.7,
                              delay: index * 0.15 + 0.7,
                              type: "spring",
                              stiffness: 150
                            }}
                            whileHover={{
                              rotate: [0, -10, 10, 0],
                              transition: { duration: 0.5 }
                            }}
                            className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-indigo-500 to-cyan-500 text-white shadow-lg shadow-purple-500/30 text-2xl"
                          >
                            {step.icon}
                          </motion.div>
                          <div>
                            <motion.h3
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.6,
                                delay: index * 0.15 + 0.8
                              }}
                              className="text-2xl font-bold text-white"
                            >
                              {step.title}
                            </motion.h3>
                            <motion.p
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.5,
                                delay: index * 0.15 + 0.9
                              }}
                              className="text-sm font-semibold text-purple-300"
                            >
                              0{index + 1}
                            </motion.p>
                          </div>
                        </div>
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.6,
                            delay: index * 0.15 + 1.0
                          }}
                          className="text-white/70 leading-relaxed"
                        >
                          {step.description}
                        </motion.p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
