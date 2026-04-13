"use client";

import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { AboutAgency } from "../components/AboutAgency";
import { WorkProcess } from "../components/WorkProcess";
import { ServicesAgency } from "../components/ServicesAgency";
import { FeaturedWorks } from "../components/FeaturedWorks";
import { TestimonialsAgency } from "../components/TestimonialsAgency";
import { BlogSection } from "../components/BlogSection";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { TechStackAgency } from "../components/TechStackAgency";
import { ClosingCTA } from "../components/ClosingCTA";
import { Contact } from "../components/Contact";
import { LoadingScreen } from "../components/LoadingScreen";
import { InteractiveFeatures } from "../components/InteractiveFeatures";
import { ScrollProgress } from "../components/ScrollProgress";
import { BackToTop } from "../components/BackToTop";
import { translations, type Language } from "../components/LanguageSwitcher";

export default function Home() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const currentTranslations = translations[currentLanguage];

  return (
    <div className="min-h-screen bg-black text-white">
      <LoadingScreen />
      <InteractiveFeatures 
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
      />
      <ScrollProgress />
      <Navbar translations={currentTranslations} />
      <main className="relative overflow-hidden">
        <Hero translations={currentTranslations} />
        <AboutAgency translations={currentTranslations} />
        <WorkProcess translations={currentTranslations} />
        <ServicesAgency translations={currentTranslations} />
        <FeaturedWorks translations={currentTranslations} />
        <TestimonialsAgency translations={currentTranslations} />
        <BlogSection translations={currentTranslations} />
        <WhyChooseUs />
        <TechStackAgency translations={currentTranslations} />
        <ClosingCTA translations={currentTranslations} />
        <Contact translations={currentTranslations} />
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
                UI/UX & Full-Stack Web Development Agency building modern digital experiences that drive conversions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white">Quick Links</h3>
              <div className="space-y-2">
                <a href="#about" className="block text-sm text-white/60 hover:text-white transition">{currentTranslations.nav.about}</a>
                <a href="#services" className="block text-sm text-white/60 hover:text-white transition">{currentTranslations.nav.services}</a>
                <a href="#why-choose-us" className="block text-sm text-white/60 hover:text-white transition">Why Choose Us</a>
                <a href="#contact" className="block text-sm text-white/60 hover:text-white transition">{currentTranslations.nav.contact}</a>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white">{currentTranslations.nav.services}</h3>
              <div className="space-y-2">
                <p className="text-sm text-white/60">Web Development</p>
                <p className="text-sm text-white/60">UI/UX Design</p>
                <p className="text-sm text-white/60">SaaS Development</p>
                <p className="text-sm text-white/60">E-commerce Solutions</p>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white">{currentTranslations.nav.contact}</h3>
              <div className="space-y-2">
                <p className="text-sm text-white/60">📧 deak@deaktechvision.com</p>
                <p className="text-sm text-white/60">📱 +381 69 2419692</p>
                <p className="text-sm text-white/60">📍 Novi Pazar, SRB</p>
              </div>
              <div className="flex gap-4 pt-4">
                <a href="tel:+381692419692" className="text-white/60 hover:text-white transition">
                  � +381 69 2419692
                </a>
                <a href="https://github.com/daektechvision-maker" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition">
                  🐙 GitHub
                </a>
                <a href="mailto:deak@deaktechvision.com" className="text-white/60 hover:text-white transition">
                  ✉️ Email
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-white/60">
                © {new Date().getFullYear()} DAEK Techvision. All rights reserved.
              </p>
              <p className="text-xs text-white/40">
                Built with ❤️ using Next.js, Tailwind CSS and Framer Motion.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
