"use client";

import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { LanguageSwitcher, translations, type Language, type Translations } from "../components/LanguageSwitcher";
import { About } from "../components/About";
import { Hero } from "../components/Hero";
import { Results } from "../components/Results";
import { Partners } from "../components/Partners";
import { Testimonials } from "../components/Testimonials";
import { Process } from "../components/Process";
import { Services } from "../components/Services";
import { Projects } from "../components/Projects";
import { TechStack } from "../components/TechStack";
import { FAQ } from "../components/FAQ";
import { CTA } from "../components/CTA";
import { Blog } from "../components/Blog";
import { Contact } from "../components/Contact";
import { ScrollProgress } from "../components/ScrollProgress";
import { BackToTop } from "../components/BackToTop";

export default function Home() {
  const [currentLang, setCurrentLang] = useState<Language>('bs');

  const t = translations[currentLang];

  return (
    <div className="min-h-screen bg-black text-white">
      <ScrollProgress />
      <Navbar currentLang={currentLang} onLanguageChange={setCurrentLang} />
      <main className="relative overflow-hidden">
        <Hero translations={t} />
        <About translations={t} />
        <Partners translations={t} />
        <Results translations={t} />
        <Testimonials translations={t} />
        <Process translations={t} />
        <Services translations={t} />
        <Projects translations={t} />
        <TechStack translations={t} />
        <FAQ translations={t} />
        <CTA translations={t} />
        <Blog translations={t} />
        <Contact translations={t} />
      </main>

      <BackToTop />

      <footer className="border-t border-white/10 bg-black/50 py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src="/DAEK.png" alt="DAEK Techvision" className="h-8 w-8 rounded-lg" />
                <span className="text-lg font-semibold text-white">DAEK Techvision</span>
              </div>
              <p className="text-sm text-white/60">
                Moderan portfolio koje prikazuje fullstack web razvoj, UI/UX dizajn i product-focused engineering.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white">Brzi Linkovi</h3>
              <div className="space-y-2">
                <a href="#about" className="block text-sm text-white/60 hover:text-white transition">O meni</a>
                <a href="#projects" className="block text-sm text-white/60 hover:text-white transition">Projekti</a>
                <a href="#services" className="block text-sm text-white/60 hover:text-white transition">Usluge</a>
                <a href="#contact" className="block text-sm text-white/60 hover:text-white transition">Kontakt</a>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white">Usluge</h3>
              <div className="space-y-2">
                <p className="text-sm text-white/60">Web Development</p>
                <p className="text-sm text-white/60">UI/UX Design</p>
                <p className="text-sm text-white/60">Consulting</p>
                <p className="text-sm text-white/60">Maintenance</p>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white">Kontakt</h3>
              <div className="space-y-2">
                <p className="text-sm text-white/60">📧 daek@techvision.rs</p>
                <p className="text-sm text-white/60">📱 +381 69 2419692</p>
                <p className="text-sm text-white/60">📍 Novi Pazar, SRB</p>
              </div>
              <div className="flex gap-4 pt-4">
                <a href="https://linkedin.com/in/daektechvision" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition">
                  💼 LinkedIn
                </a>
                <a href="https://github.com/daektechvision" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition">
                  🐙 GitHub
                </a>
                <a href="mailto:daek@techvision.rs" className="text-white/60 hover:text-white transition">
                  ✉️ Email
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-white/60">
                © {new Date().getFullYear()} DAEK Techvision. Sva prava zadržana.
              </p>
              <p className="text-xs text-white/40">
                Izgrađeno s ❤️ koristeći Next.js, Tailwind CSS i Framer Motion.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
