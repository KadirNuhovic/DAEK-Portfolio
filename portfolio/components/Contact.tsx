"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedInIcon, MailIcon } from "./icons";
import { type Translations } from "./LanguageSwitcher";

export function Contact({ translations }: { translations: Translations }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Email sent successfully:", data);
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 4500);
      } else {
        throw new Error(data.error || 'Greška pri slanju mejla');
      }
    } catch (error) {
      console.error("Email send failed:", error);
      
      let errorMessage = "Došlo je do greške pri slanju mejla. Pokušajte ponovo.";
      
      if (error instanceof Error) {
        if (error.message.includes("network") || error.message.includes("fetch")) {
          errorMessage = "Greška u mreži. Proverite internet vezu.";
        } else if (error.message.includes("500")) {
          errorMessage = "Serverska greška. Pokušajte ponovo kasnije.";
        } else {
          errorMessage = `Greška: ${error.message}`;
        }
      }
      
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-0 top-14 h-72 w-72 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-indigo-500 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 text-white md:px-8">
        <div className="mb-10 max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/60">{translations.contact.badge}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{translations.contact.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            {translations.contact.description}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur"
          >
            <div className="grid gap-6">
              <div>
                <label className="text-sm font-semibold text-white/80" htmlFor="name">
                  {translations.contact.form.name}
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-white/40 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
                  placeholder={translations.contact.form.name}
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-white/80" htmlFor="email">
                  {translations.contact.form.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-white/40 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
                  placeholder={translations.contact.form.email}
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-white/80" htmlFor="message">
                  {translations.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="mt-2 w-full resize-none rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-white/40 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
                  placeholder={translations.contact.form.message}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-purple-500/30 transition hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? translations.contact.form.loading : translations.contact.form.button}
              </button>

              {submitted ? (
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm text-white/80">
                  {translations.contact.form.success}
                </div>
              ) : null}
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur"
          >
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white">Contact Information</h3>
                <p className="mt-3 text-white/70">Reach out via email or connect on social media for the latest updates and project discussions.</p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:deak@deaktechvision.com"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-indigo-500 to-cyan-500 text-black">
                    <MailIcon className="h-5 w-5" />
                  </span>
                  deak@deaktechvison.com
                </a>

                <a
                  href="https://github.com/daektechvision-maker"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-indigo-500 to-cyan-500 text-black">
                    <GithubIcon className="h-5 w-5" />
                  </span>
                  github.com/daektechvision-maker
                </a>

                <a
                  href="tel:+381692419692"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-indigo-500 to-cyan-500 text-black">
                    📱
                  </span>
                  +381 69 2419692
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
