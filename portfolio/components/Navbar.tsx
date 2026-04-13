"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type Translations } from "./LanguageSwitcher";

export function Navbar({ translations }: { translations: Translations }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: translations.nav.about, href: "#about" },
    { label: "Process", href: "#work-process" },
    { label: translations.nav.services, href: "#services" },
    { label: translations.nav.projects, href: "#featured-works" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Blog", href: "#blog" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: translations.nav.technologies, href: "#tech-stack" },
    { label: translations.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.querySelector(item.href));
      const scrollY = window.scrollY + 120;
      const active = sections
        .filter(Boolean)
        .map((section) => {
          const el = section as HTMLElement;
          return {
            id: el?.id,
            offset: el ? el.offsetTop - 100 : 0,
          };
        })
        .sort((a, b) => b.offset - a.offset)
        .find((item) => scrollY >= item.offset);

      if (active?.id && active.id !== activeSection) {
        setActiveSection(active.id);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  useEffect(() => {
    const onResize = () => setMobileOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <div className="flex items-center gap-2">
          <img src="/DAEK.png" alt="DAEK Techvision" className="h-10 w-10 rounded-xl shadow-lg" />
          <span className="text-lg tracking-wide font-semibold text-white">DAEK Techvision</span>
        </div>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-white/80 transition hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
                {isActive ? (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-1 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        
        <button
          className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-2 text-white/80 transition hover:bg-white/10 md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span className="relative h-5 w-5">
            <span
              className={`absolute left-0 top-1/2 h-[2px] w-full rounded-full bg-current transition-transform ${
                mobileOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-[2px] w-full rounded-full bg-current transition-opacity ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-[2px] w-full rounded-full bg-current transition-transform ${
                mobileOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5"
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="mx-auto max-w-6xl space-y-1 px-4 pb-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
