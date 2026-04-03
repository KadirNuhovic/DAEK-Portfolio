"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalIcon, GithubIcon } from "./icons";

const projects = [
  {
    title: "Digital Menu QR Code System",
    description: "Kompletan sistem za digitalna menija sa QR kodovima za restorane. Omogućava jednostavno upravljanje jelovnikom i narudžbama.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    image: "/project-1.svg",
    demo: "#",
    github: "https://github.com/Emir1231111/dmenuqrkod.git",
  },
  {
    title: "Personal Portfolio Website",
    description: "Moderan portfolio sajt izgrađen sa Next.js 16, TypeScript i Framer Motion. PWA-ready sa SEO optimizacijom i višejezičnom podrškom.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/project-2.svg",
    demo: "https://emir-portfolio-iota.vercel.app/",
    github: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Interaktivna vremenska aplikacija sa geolokacijom, 7-dnevnom prognozom i beautiful animacijama vremenskih uslova.",
    technologies: ["React", "OpenWeather API", "Chart.js"],
    image: "/project-1.svg",
    demo: "#",
    github: "#",
  },
  {
    title: "Social Media Analytics",
    description: "Dashboard za analizu društvenih mreža sa real-time metrikama, grafikama performansi i automated reporting-om.",
    technologies: ["Vue.js", "D3.js", "Firebase"],
    image: "/project-2.svg",
    demo: "#",
    github: "#",
  },
  {
    title: "Learning Management System",
    description: "Kompletna platforma za online učenje sa kursovima, kvizovima, progress tracking-om i video streaming-om.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS S3"],
    image: "/project-3.svg",
    demo: "#",
    github: "#",
  },
  {
    title: "Real Estate Platform",
    description: "Platforma za nekretnine sa naprednim pretragama, virtualnim turama, mapama i automated email notifikacijama.",
    technologies: ["React", "Node.js", "MongoDB", "Google Maps API"],
    image: "/project-1.svg",
    demo: "#",
    github: "#",
  },
  {
    title: "Fitness Tracking App",
    description: "Mobilna aplikacija za praćenje fitness aktivnosti sa workout planovima, nutrition tracking-om i social features-ima.",
    technologies: ["React Native", "Firebase", "HealthKit", "Google Fit"],
    image: "/project-2.svg",
    demo: "#",
    github: "#",
  },
  {
    title: "E-commerce Dashboard",
    description: "Admin dashboard za e-commerce platformu sa analytics, inventory management-om, order tracking-om i automated reporting-om.",
    technologies: ["Vue.js", "Express.js", "PostgreSQL", "Chart.js"],
    image: "/project-3.svg",
    demo: "#",
    github: "#",
  },
  {
    title: "AI Chat Assistant",
    description: "AI-powered chat assistant sa natural language processing-om, context awareness-om i multi-platform integration.",
    technologies: ["Python", "TensorFlow", "FastAPI", "WebSocket"],
    image: "/project-4.svg",
    demo: "#",
    github: "#",
  },
  {
    title: "Blockchain Voting System",
    description: "Decentralized voting platform koristeći blockchain technology za transparentne i sigurne izbore.",
    technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
    image: "/project-5.svg",
    demo: "#",
    github: "#",
  },
  {
    title: "IoT Smart Home Hub",
    description: "Centralni hub za smart home uređaje sa voice control-om, automation rules-ima i energy monitoring-om.",
    technologies: ["Node.js", "MQTT", "Raspberry Pi", "InfluxDB"],
    image: "/project-6.svg",
    demo: "#",
    github: "#",
  },
  {
    title: "Data Visualization Platform",
    description: "Platforma za kreiranje interaktivnih dashboard-a sa real-time data visualization-om i custom report generation-om.",
    technologies: ["D3.js", "React", "Python", "WebSocket"],
    image: "/project-7.svg",
    demo: "#",
    github: "#",
  },
  {
    title: "Social Media Analytics Tool",
    description: "Alat za analizu socijalnih medija sa sentiment analysis-om, engagement tracking-om i automated content scheduling-om.",
    technologies: ["Angular", "Python", "NLP", "MongoDB"],
    image: "/project-8.svg",
    demo: "#",
    github: "#",
  },
];

import { type Translations } from "./LanguageSwitcher";

export function Projects({ translations }: { translations: Translations }) {
  return (
    <section id="projects" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-indigo-500 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-500 via-purple-600 to-sky-500 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 text-white md:px-8">
        <div className="mb-10 max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/60">Istaknuti Radovi</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Projekti koje smo izgradili</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            Odabir projekata koji demonstriraju moderne dizajn sisteme, responzivne UI obrasce i performantni kod.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur"
            >
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-indigo-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={index === 0}
                />
              </div>

              <div className="space-y-4 p-6">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-purple-500/30 transition hover:brightness-110"
                  >
                    <ExternalIcon className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10"
                  >
                    <GithubIcon className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
