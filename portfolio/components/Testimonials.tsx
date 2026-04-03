"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    company: "Restoran Central",
    role: "Vlasnik",
    content: "DAEK Techvision je implementirao naš digitalni menu sistem sa QR kodovima. Sada naši gosti mogu jednostavno pregledati jelovnik i naručiti putem mobilnih uređaja. Izvanredna implementacija!",
  },
  {
    company: "TechStart Solutions", 
    role: "CEO",
    content: "Zadovoljni smo saradnjom sa DAEK Techvision-om. Profesionalan pristup, kvalitetan kod i brza isporuka. Preporučujem svima koji traže pouzdanog fullstack developera.",
  },
  {
    company: "DigitalFlow Agency",
    role: "Product Manager", 
    content: "Od ideje do realizacije - DAEK je vodio naš projekat od početka do kraja. Moderne tehnologije, responsive dizajn i odlična komunikacija tokom cijelog procesa.",
  },
];

import { type Translations } from "./LanguageSwitcher";

export function Testimonials({ translations }: { translations: Translations }) {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-0 top-14 h-72 w-72 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-indigo-500 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 text-white md:px-8">
        <div className="mb-10 max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{translations.testimonials.title}</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {translations.testimonials.items.map((testimonial, index) => (
            <motion.div
              key={testimonial.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur"
            >
              <div className="mb-4">
                <div className="h-px bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 w-16"></div>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="mb-4 text-yellow-400 text-lg">⭐⭐⭐⭐⭐</div>
              <div>
                <div className="font-semibold text-white">{testimonial.role}, {testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
