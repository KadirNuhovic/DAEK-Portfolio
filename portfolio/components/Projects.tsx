"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalIcon, GithubIcon } from "./icons";

const projects = [
  {
    title: "SaaS Dashboard UI",
    description: "A responsive admin dashboard with charts, tables, and real-time updates.",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    image: "/project-1.svg",
    demo: "#",
    github: "#",
  },
  {
    title: "Marketing Landing Page",
    description: "High-converting landing page with animated sections and smooth scroll interactions.",
    technologies: ["React", "Framer Motion", "Tailwind"],
    image: "/project-2.svg",
    demo: "#",
    github: "#",
  },
  {
    title: "E-commerce Platform",
    description: "Fast checkout flows, product filtering, and scalable backend architecture.",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    image: "/project-3.svg",
    demo: "#",
    github: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-indigo-500 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-500 via-purple-600 to-sky-500 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 text-white md:px-8">
        <div className="mb-10 max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/60">Featured Work</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Projects I&apos;ve built</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            A selection of projects demonstrating modern design systems, responsive UI patterns, and performant code.
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
