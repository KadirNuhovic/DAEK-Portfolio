"use client";

import { motion } from "framer-motion";

export function ServicesAgency() {
  const services = [
    {
      icon: "🔄",
      title: "Modern Website Redesign",
      description: "Transform outdated websites into modern, conversion-focused digital experiences"
    },
    {
      icon: "📊",
      title: "SaaS Dashboard Development",
      description: "Build intuitive, data-rich dashboards for SaaS applications"
    },
    {
      icon: "⚙️",
      title: "Custom Web Applications",
      description: "Tailored web applications built to solve specific business challenges"
    },
    {
      icon: "🛒",
      title: "E-commerce Solutions",
      description: "Complete online stores with seamless shopping experiences"
    },
    {
      icon: "📅",
      title: "Booking Systems",
      description: "Efficient booking and scheduling systems for service businesses"
    },
    {
      icon: "🤖",
      title: "AI-powered Interfaces",
      description: "Smart interfaces that leverage AI for enhanced user experiences"
    },
    {
      icon: "🎯",
      title: "Landing Pages that Convert",
      description: "High-converting landing pages optimized for marketing campaigns"
    },
    {
      icon: "⚡",
      title: "Performance Optimization",
      description: "Speed and performance optimization for existing websites"
    },
    {
      icon: "📱",
      title: "Mobile-first Responsive Design",
      description: "Responsive designs that work perfectly on all devices"
    }
  ];

  return (
    <section id="services" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-gray-950 to-slate-950" />
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl"
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
            What We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300">
              Do
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Comprehensive web development and design services to help your business thrive in the digital world
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
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
