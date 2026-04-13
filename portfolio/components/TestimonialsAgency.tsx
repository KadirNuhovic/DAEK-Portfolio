"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export function TestimonialsAgency() {
  const testimonials = [
    {
      name: "Marko Petrović",
      role: "CEO, TechStart Solutions",
      content: "DAEK Techvision transformed our online presence completely. The new website increased our conversion rate by 40% within the first month. Professional, efficient, and results-driven.",
      rating: 5,
      avatar: "MP"
    },
    {
      name: "Jelena Milovanović",
      role: "Marketing Director, Innovate Labs",
      content: "Working with DAEK Techvision was exceptional. They understood our vision immediately and delivered a stunning SaaS dashboard that our users love. Highly recommended!",
      rating: 5,
      avatar: "JM"
    },
    {
      name: "Aleksandar Jovanović",
      role: "Founder, E-Commerce Plus",
      content: "The e-commerce platform they built for us is lightning-fast and beautifully designed. Our sales have doubled since launch. True professionals who deliver on their promises.",
      rating: 5,
      avatar: "AJ"
    },
    {
      name: "Marija Stojanović",
      role: "Product Manager, Digital Agency",
      content: "DAEK Techvision's attention to detail and technical expertise is unmatched. They delivered our complex booking system on time and exceeded all our expectations.",
      rating: 5,
      avatar: "MS"
    },
    {
      name: "Nikola Radić",
      role: "CTO, Startup Hub",
      content: "Outstanding development work! They built our MVP in record time with clean, scalable code. The team is responsive, skilled, and truly cares about the project success.",
      rating: 5,
      avatar: "NR"
    },
    {
      name: "Ana Đorđević",
      role: "Brand Manager, Creative Studio",
      content: "The landing page DAEK Techvision created for our campaign conversion-focused and visually stunning. Our lead generation increased by 60% immediately.",
      rating: 5,
      avatar: "AĐ"
    }
  ];

  return (
    <section id="testimonials" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-gray-950 to-slate-950" />
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl"
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
            Što Kažu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300">
              Naši Klijenti
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Real results from real clients who trust us with their digital success
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
                staggerChildren: 0.15
              }
            }
          }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
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
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="flex items-start justify-between mb-4">
                <Quote className="w-8 h-8 text-indigo-400 opacity-50" />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-white/80 leading-relaxed mb-6 line-clamp-4">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { number: "50+", label: "Happy Clients" },
            { number: "100+", label: "Projects Completed" },
            { number: "5+", label: "Years Experience" },
            { number: "98%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-center rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                {stat.number}
              </div>
              <div className="text-white/60 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
