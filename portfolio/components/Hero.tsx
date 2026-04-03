"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Magnetic from "./Magnetic";
import { type Translations } from "./LanguageSwitcher";

export function Hero({ translations }: { translations: Translations }) {
  return (
    <section id="home" className="relative overflow-hidden pt-24 pb-20 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-slate-950 opacity-90" />
      <div className="absolute top-0 left-1/2 h-full w-[110%] -translate-x-1/2 transform overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            opacity: [0.6, 0.8, 0.6]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute left-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.6),transparent_65%)] blur-3xl" 
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0],
            opacity: [0.55, 0.7, 0.55]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute right-0 top-1/4 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.55),transparent_70%)] blur-3xl" 
        />
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 10, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 text-white md:flex-row md:items-center md:justify-between md:gap-16 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold tracking-widest text-white/80 shadow-lg shadow-black/20 backdrop-blur"
          >
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ●
            </motion.span>
            {translations.hero.badge}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            {translations.hero.title}{" "}
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-200 to-cyan-300"
            >
              {translations.hero.titleAccent}
            </motion.span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-lg leading-relaxed text-white/80"
          >
            {translations.hero.subtitle}
          </motion.p>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Magnetic>
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/50 transition hover:brightness-110"
                >
                  {translations.hero.viewProjects}
                </Link>
              </motion.div>
            </Magnetic>
            <Magnetic>
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <a
                  href="/resume.pdf"
                  download="DAEK_Techvision_Resume.pdf"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  📄 {translations.hero.downloadResume}
                </a>
              </motion.div>
            </Magnetic>
            <Magnetic>
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white bg-white/10 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-white hover:text-black hover:border-white"
                >
                  {translations.hero.contactUs}
                </Link>
              </motion.div>
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-md md:max-w-md"
        >
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium uppercase tracking-wide text-white/60">{translations.hero.whatWeBuild}</p>
                <h2 className="text-2xl font-semibold text-white">{translations.hero.modernInterfaces}</h2>
              </div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-cyan-400 text-white shadow-lg shadow-purple-500/30">
                <span className="text-lg font-bold">✨</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              {translations.hero.modernInterfacesDesc}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/5 p-4 text-sm text-white/80 backdrop-blur">
                <p className="font-semibold text-white">{translations.hero.fastEfficient}</p>
                <p className="mt-1 text-xs text-white/70">{translations.hero.fastEfficientDesc}</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 text-sm text-white/80 backdrop-blur">
                <p className="font-semibold text-white">{translations.hero.scalableCode}</p>
                <p className="mt-1 text-xs text-white/70">{translations.hero.scalableCodeDesc}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
