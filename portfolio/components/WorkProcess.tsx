"use client";

import { motion } from "framer-motion";
import { type Translations } from "./LanguageSwitcher";

export function WorkProcess({ translations }: { translations: Translations }) {
  const processSteps = translations.process.items.map((item, index) => ({
    number: String(index + 1).padStart(2, '0'),
    title: item.title,
    description: item.description,
    icon: item.icon
  }));

  return (
    <section id="work-process" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-gray-950 to-slate-950" />
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            {translations.process.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-white/70 max-w-3xl mx-auto"
          >
            {translations.process.description}
          </motion.p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Vertical lines between process steps */}
          <div className="absolute inset-0 hidden lg:block">
            <div className="relative h-full">
              {/* First vertical line - between column 1 and 2 */}
              <motion.div
                initial={{ scaleY: 0, transformOrigin: "top" }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute left-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"
              />
              {/* Second vertical line - between column 2 and 3 */}
              <motion.div
                initial={{ scaleY: 0, transformOrigin: "top" }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.7 }}
                className="absolute left-2/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"
              />
            </div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative z-10"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                {/* Number indicator */}
                <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {step.number}
                </div>
                
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-semibold text-white mb-3 pr-8 group-hover:text-indigo-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/70 text-sm">
              Proces prilagođen vašim potrebama
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
