"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Magnetic from "./Magnetic";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 pb-20 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-950 to-slate-950" />
      <div className="absolute top-0 left-1/2 h-full w-[110%] -translate-x-1/2 transform overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute left-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.2),transparent_70%)] blur-3xl" 
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0],
            opacity: [0.25, 0.4, 0.25]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute right-0 top-1/4 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.15),transparent_75%)] blur-3xl" 
        />
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 15, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${15 + i * 12}%`,
              top: `${25 + i * 8}%`
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 text-white md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/5 px-6 py-3 text-sm font-semibold tracking-widest text-white/70 shadow-lg shadow-black/20 backdrop-blur border border-white/10"
          >
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-indigo-400 rounded-full"
            />
            UI/UX & FULL-STACK AGENCY
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            DAEK{" "}
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300"
            >
              Techvision
            </motion.span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-xl leading-relaxed text-white/70 max-w-3xl mx-auto"
          >
            Building modern, high-performance websites and web applications that drive conversions and business growth.
          </motion.p>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            className="mt-12 flex flex-wrap gap-4 justify-center"
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
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-500/50 transition hover:brightness-110"
                >
                  Start a Project
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
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10 hover:border-white/40"
                >
                  View Portfolio
                </Link>
              </motion.div>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Stats/Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
          className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { icon: "🚀", title: "Fast Performance", desc: "Lightning-fast websites optimized for speed" },
            { icon: "🎨", title: "Modern Design", desc: "Clean, conversion-focused UI/UX" },
            { icon: "📱", title: "Mobile-First", desc: "Responsive design for all devices" },
            { icon: "🔧", title: "Scalable Code", desc: "Clean, maintainable architecture" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-white/60">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
