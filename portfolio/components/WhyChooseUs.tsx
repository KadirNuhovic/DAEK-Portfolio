"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function WhyChooseUs() {
  const benefits = [
    {
      icon: <CheckCircle className="w-5 h-5 text-indigo-400" />,
      title: "Conversion-focused UI/UX",
      description: "Designs that prioritize user engagement and business goals"
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-purple-400" />,
      title: "Clean, scalable codebase",
      description: "Well-structured code that grows with your business"
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-cyan-400" />,
      title: "Fast communication & reliable delivery",
      description: "Transparent process and on-time project delivery"
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-indigo-400" />,
      title: "Startup-friendly pricing",
      description: "Flexible pricing models for businesses of all sizes"
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-purple-400" />,
      title: "Long-term support & maintenance",
      description: "Ongoing support to keep your digital products running smoothly"
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-cyan-400" />,
      title: "Experience with global clients",
      description: "Proven track record with clients worldwide"
    }
  ];

  return (
    <section id="why-choose-us" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-gray-950 to-slate-950" />
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 left-20 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 md:px-8">
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
            Why{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300">
              Choose Us
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Partner with us for exceptional digital experiences that drive real business results
          </motion.p>
        </motion.div>

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
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
              whileHover={{ 
                x: 5,
                transition: { duration: 0.2 }
              }}
              className="flex gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 mt-1">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-500/50 transition hover:brightness-110"
            >
              Discuss Your Project
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
