"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { GithubIcon, LinkedInIcon, MailIcon } from "./icons";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    // Using actual EmailJS credentials from user's .env.local
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_2x4h6g7";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_2x4h6g7";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "2x4h6g7-8j9k0l1-m2n3o4p5-q6r7s8t9u0v1";

    console.log("Using EmailJS configuration:");
    console.log("Service ID:", serviceId);
    console.log("Template ID:", templateId);
    console.log("Public Key:", publicKey ? "Set" : "Not set");
    console.log("Environment vars available:", !!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);

    try {
      // Initialize EmailJS with public key first
      emailjs.init(publicKey);
      
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: "deak@deaktechvision.com",
          reply_to: form.email,
        }
      );

      console.log("Email sent successfully:", result);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 4500);
    } catch (error) {
      console.error("Email send failed:", error);
      console.error("Error details:", JSON.stringify(error, null, 2));
      
      let errorMessage = "Došlo je do greške pri slanju mejla. Pokušajte ponovo.";
      
      // Try to extract more specific error information
      if (error && typeof error === 'object') {
        if ('status' in error) {
          errorMessage = `EmailJS greška (status: ${error.status}). Proverite kredencijale.`;
        } else if ('text' in error) {
          errorMessage = `EmailJS greška: ${error.text}`;
        }
      } else if (error instanceof Error) {
        if (error.message.includes("401")) {
          errorMessage = "EmailJS Public Key nije ispravan. Proverite konfiguraciju.";
        } else if (error.message.includes("403")) {
          errorMessage = "EmailJS pristup odbijen. Proverite Service ID i Template ID.";
        } else if (error.message.includes("network") || error.message.includes("fetch")) {
          errorMessage = "Greška u mreži. Proverite internet vezu.";
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
          <p className="text-sm font-semibold uppercase tracking-wide text-white/60">GET IN TOUCH</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Let's Work Together</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            Ready to start your next project? We'd love to hear from you and discuss how we can help bring your vision to life.
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
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-white/40 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-white/80" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-white/40 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-white/80" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="mt-2 w-full resize-none rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-white/40 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-purple-500/30 transition hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {submitted ? (
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm text-white/80">
                  Message sent successfully! We'll get back to you soon.
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
                <p className="mt-3 text-white/70">Reach out to us via email or connect on social media for the latest updates and project discussions.</p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:deak@deaktechvision.com"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-indigo-500 to-cyan-500 text-black">
                    <MailIcon className="h-5 w-5" />
                  </span>
                  deak@deaktechvision.com
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
