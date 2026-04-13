"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Language = 'sr' | 'en';

interface Translations {
  nav: {
    about: string;
    projects: string;
    services: string;
    technologies: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    viewProjects: string;
    contactUs: string;
    downloadResume: string;
    whatWeBuild: string;
    modernInterfaces: string;
    modernInterfacesDesc: string;
    fastEfficient: string;
    fastEfficientDesc: string;
    scalableCode: string;
    scalableCodeDesc: string;
  };
  about: {
    badge: string;
    title: string;
    description: string;
    specTitle: string;
    specList: string[];
    approachTitle: string;
    approachDesc1: string;
    approachDesc2: string;
  };
  services: {
    badge: string;
    title: string;
    description: string;
    items: { title: string; description: string }[];
  };
  partners: {
    badge: string;
    title: string;
    description: string;
    items: { name: string; type: string }[];
  };
  results: {
    badge: string;
    title: string;
    description: string;
    items: { number: string; label: string }[];
  };
  testimonials: {
    title: string;
    items: { company: string; role: string; content: string }[];
  };
  process: {
    badge: string;
    title: string;
    description: string;
    items: { title: string; description: string; icon: string }[];
  };
  projects: {
    badge: string;
    title: string;
    description: string;
    items: { title: string; description: string; tech: string[] }[];
  };
  techStack: {
    badge: string;
    title: string;
    description: string;
  };
  faq: {
    badge: string;
    title: string;
    description: string;
    footer: string;
    footerButton: string;
    items: { question: string; answer: string }[];
  };
  cta: {
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
    footnote: string;
  };
  contact: {
    badge: string;
    title: string;
    description: string;
    form: { name: string; email: string; message: string; button: string; loading: string; success: string };
  };
}

const translations: Record<Language, Translations> = {
  sr: {
    nav: {
      about: "O meni",
      projects: "Projekti",
      services: "Usluge",
      technologies: "Tehnologije",
      contact: "Kontakt",
    },
    hero: {
      badge: "Fullstack developeri • UI/UX entuzijasti",
      title: "Fullstack Web Developeri",
      titleAccent: "& Dizajneri",
      subtitle: "Gradimo visokoperformantne web stranice i aplikacije s prekrasnim sučeljima, besprijekornim korisničkim iskustvima i skalabilnim kodom. Hajde da oživimo vaš sledeći projekat.",
      viewProjects: "Pogledaj Projekte",
      contactUs: "Kontaktirajte Nas",
      downloadResume: "Preuzmi CV",
      whatWeBuild: "Što gradimo",
      modernInterfaces: "Moderna Sučelja",
      modernInterfacesDesc: "Čiste front-end arhitekture, responzivni layouti i promišljene interakcije koje zadržavaju korisnike angažiranim na svim uređajima.",
      fastEfficient: "Brzo & Efikasno",
      fastEfficientDesc: "Optimizirani buildovi, strategije keširanja i moderni obrasci za brzo učitavanje.",
      scalableCode: "Skalabilni Kod",
      scalableCodeDesc: "Type-safe stackovi, reusable komponente i čitljiva arhitektura za dugoročno održavanje.",
    },
    about: {
      badge: "O meni",
      title: "Stvaranje digitalnih iskustava kodom",
      description: "Mi smo fullstack developeri koji volimo povezivati dizajn i inženjering. Sa više od 6 godina iskustva, specijalizirani smo za stvaranje skalabilnih aplikacija.",
      specTitle: "U čemu smo specijalizirani",
      specList: [
        "End-to-end izgradnja proizvoda",
        "Responzivna sučelja",
        "Performanse & pristupačnost",
        "Kolaborativni razvoj",
      ],
      approachTitle: "Naš pristup",
      approachDesc1: "Kombiniramo moderne alate s product mindsetom. Svaki projekat započinje s korisničkim potrebama.",
      approachDesc2: "Bilo da je reč o startupu ili osvežavanju platforme, gradimo rešenja koja oduševljavaju.",
    },
    services: {
      badge: "Što radimo",
      title: "Usluge koje nudimo",
      description: "Od brzog prototipiranja do produkcijskih aplikacija, isporučujemo rešenja punog ciklusa.",
      items: [
        { title: "Fullstack Razvoj", description: "Izgradnja robusnih aplikacija s Next.js i TypeScript." },
        { title: "UI/UX Dizajn", description: "Dizajniranje doteranih i intuitivnih sučelja." },
        { title: "Landing Stranice", description: "Layouti fokusirani na konverziju i performanse." },
        { title: "Optimizacija", description: "Podešavanje brzine, SEO-a i responzivnosti." },
      ],
    },
    partners: {
      badge: "Što Kažu Naši Klijenti",
      title: "Iskustva partnera",
      description: "sa kojima smo ostvarili izvanredne rezultate.",
      items: [
        { name: "TechCorp", type: "Startup" },
        { name: "DigitalFlow", type: "Enterprise" },
        { name: "InnovateLab", type: "Agencija" },
        { name: "CloudBase", type: "Startup" },
        { name: "DataSync", type: "Enterprise" },
        { name: "WebCraft", type: "Agencija" },
      ],
    },
    results: {
      badge: "Naši Rezultati",
      title: "Brojevi govore sami za sebe",
      description: "Preko 6 godina iskustva u digitalnoj transformaciji.",
      items: [
        { number: "50+", label: "Projekata" },
        { number: "30+", label: "Klijenata" },
        { number: "6+", label: "Godina Iskustva" },
        { number: "98%", label: "Zadovoljstva" },
      ],
    },
    testimonials: {
      title: "Što Kažu Naši Klijenti",
      items: [
        { company: "TechCorp", role: "CEO", content: "Izvanredna saradnja! DAE Techvision je transformisao naše digitalno prisustvo." },
        { company: "DigitalFlow", role: "Product Manager", content: "Profesionalan pristup, kvalitetan kod i fantastična komunikacija." },
        { company: "InnovateLab", role: "CTO", content: "Najbolji tim s kojim sam radio. Brzi i efikasni." },
        { company: "Restoran Central", role: "Vlasnik", content: "Digitalni meni sistem sa QR kodovima je revolucionisao naš posao. Gosti su oduševljeni!" },
        { company: "StartUp Hub", role: "Founder", content: "Od ideje do MVP-a za samo 3 meseca. Neverovatna brzina i kvaliteta." },
        { company: "E-commerce Plus", role: "Operations Manager", content: "Nova online prodavnica je povećala naše prihode za 150%. Zahvaljujemo DAEK timu!" },
      ],
    },
    process: {
      badge: "Naš Proces Rada",
      title: "Strukturirani pristup",
      description: "koji garantuje izvanredne rezultate svaki put.",
      items: [
        { title: "Otkrivanje", description: "Razumevanje vaših ciljeva i potreba.", icon: "🎯" },
        { title: "Dizajn", description: "Kreiranje wireframeova i vizuelnog identiteta.", icon: "🎨" },
        { title: "Razvoj", description: "Implementacija koda sa fokusom na performanse.", icon: "⚡" },
        { title: "Lansiranje", description: "Deployment i monitoring nakon lansiranja.", icon: "🚀" },
      ],
    },
    projects: {
      badge: "Istaknuti Radovi",
      title: "Projekti koje smo izgradili",
      description: "Odabir projekata koji demonstriraju moderne dizajn sisteme.",
      items: [
        { title: "SaaS Dashboard UI", description: "Responzivni admin dashboard s grafikonima.", tech: ["Next.js", "TypeScript", "Tailwind"] },
        { title: "Marketing Landing Page", description: "Landing stranica s visokom konverzijom.", tech: ["React", "Framer Motion", "Tailwind"] },
        { title: "E-commerce Platforma", description: "Brzi checkout tokovi i filtriranje proizvoda.", tech: ["Next.js", "Node.js", "MongoDB"] },
      ],
    },
    techStack: {
      badge: "Tehnologije",
      title: "Alati & tehnologije",
      description: "Moderni set alata fokusiran na brzinu i skalabilnost.",
    },
    faq: {
      badge: "Često Postavljana Pitanja",
      title: "Odgovori na najčešća pitanja",
      description: "o našim uslugama i procesu rada.",
      footer: "Niste našli odgovor na svoje pitanje?",
      footerButton: "Kontaktirajte nas",
      items: [
        { question: "Da li možete raditi sa postojećim projektima?", answer: "Da, imamo iskustva sa integracijom u postojeće timove." },
        { question: "Koliko dugo traje razvoj projekta?", answer: "Vreme zavisi od složenosti projekta." },
        { question: "Koje tehnologije koristite?", answer: "Specijalizirani smo za React, Next.js, TypeScript." },
        { question: "Da li nudite podršku nakon lansiranja?", answer: "Da, nudimo kontinuiranu podršku i održavanje." },
      ],
    },
    cta: {
      title: "Spremni za Digitalnu Transformaciju?",
      description: "Hajde da zajedno stvorimo nešto izvanredno. Vaš sledeći veliki projekat čeka na vas.",
      primaryButton: "Započnite Projekat",
      secondaryButton: "Pogledajte Radove",
      footnote: "Bez obaveze. Samo razgovor o vašim idejama.",
    },
    contact: {
      badge: "Hajde da izgradimo nešto veliko zajedno",
      title: "Podeli svoju ideju ili projekat",
      description: "i javiću ti se unutar 1-2 radna dana.",
      form: {
        name: "Ime",
        email: "Email",
        message: "Poruka",
        button: "Pošalji poruku",
        loading: "Slanje...",
        success: "Hvala što ste se javili! Javiću vam se što je pre moguće.",
      },
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      services: "Services",
      technologies: "Technologies",
      contact: "Contact",
    },
    hero: {
      badge: "Fullstack developers • UI/UX enthusiasts",
      title: "Fullstack Web Developers",
      titleAccent: "& Designers",
      subtitle: "We build high-performance websites and applications with beautiful interfaces, seamless user experiences, and scalable code. Let's bring your next project to life.",
      viewProjects: "View Projects",
      contactUs: "Contact Us",
      downloadResume: "Download CV",
      whatWeBuild: "What we build",
      modernInterfaces: "Modern Interfaces",
      modernInterfacesDesc: "Clean front-end architectures, responsive layouts, and thoughtful interactions that keep users engaged across all devices.",
      fastEfficient: "Fast & Efficient",
      fastEfficientDesc: "Optimized builds, caching strategies, and modern patterns for smooth load times.",
      scalableCode: "Scalable Code",
      scalableCodeDesc: "Type-safe stacks, reusable components, and readable architecture for long-term maintainability.",
    },
    about: {
      badge: "About Us",
      title: "Crafting digital experiences through code",
      description: "We are fullstack developers who love connecting design and engineering. With over 6 years of experience, we specialize in creating scalable applications.",
      specTitle: "What we specialize in",
      specList: [
        "End-to-end product builds",
        "Responsive interfaces",
        "Performance & accessibility",
        "Collaborative development",
      ],
      approachTitle: "Our Approach",
      approachDesc1: "We combine modern tools with a product mindset. Every project starts with user needs.",
      approachDesc2: "Whether launching a startup or refreshing a platform, we build solutions that delight.",
    },
    services: {
      badge: "What we do",
      title: "Services we offer",
      description: "From rapid prototyping to production applications, we deliver full-cycle solutions.",
      items: [
        { title: "Fullstack Development", description: "Building robust applications with Next.js and TypeScript." },
        { title: "UI/UX Design", description: "Designing polished and intuitive interfaces." },
        { title: "Landing Pages", description: "Conversion-focused layouts and high performance." },
        { title: "Optimization", description: "Fine-tuning speed, SEO, and responsiveness." },
      ],
    },
    partners: {
      badge: "What Our Clients Say",
      title: "Partner experiences",
      description: "with whom we have achieved outstanding results.",
      items: [
        { name: "TechCorp", type: "Startup" },
        { name: "DigitalFlow", type: "Enterprise" },
        { name: "InnovateLab", type: "Agency" },
        { name: "CloudBase", type: "Startup" },
        { name: "DataSync", type: "Enterprise" },
        { name: "WebCraft", type: "Agency" },
      ],
    },
    results: {
      badge: "Our Results",
      title: "Numbers speak for themselves",
      description: "Over 6 years of experience in digital transformation.",
      items: [
        { number: "50+", label: "Projects" },
        { number: "30+", label: "Clients" },
        { number: "6+", label: "Years of Experience" },
        { number: "98%", label: "Satisfaction" },
      ],
    },
    testimonials: {
      title: "What Our Clients Say",
      items: [
        { company: "TechCorp", role: "CEO", content: "Outstanding collaboration! DAE Techvision transformed our digital presence." },
        { company: "DigitalFlow", role: "Product Manager", content: "Professional approach, quality code and fantastic communication." },
        { company: "InnovateLab", role: "CTO", content: "The best team I've worked with. Fast and efficient." },
        { company: "Restoran Central", role: "Owner", content: "The digital menu system with QR codes revolutionized our business. Guests are thrilled!" },
        { company: "StartUp Hub", role: "Founder", content: "From idea to MVP in just 3 months. Incredible speed and quality." },
        { company: "E-commerce Plus", role: "Operations Manager", content: "The new online store increased our revenue by 150%. Thank you DAEK team!" },
      ],
    },
    process: {
      badge: "Our Working Process",
      title: "Structured approach",
      description: "that guarantees excellent results every time.",
      items: [
        { title: "Discovery", description: "Understanding your goals and needs.", icon: "🎯" },
        { title: "Design", description: "Creating wireframes and visual identity.", icon: "🎨" },
        { title: "Development", description: "Implementing code with a focus on performance.", icon: "⚡" },
        { title: "Launch", description: "Deployment and monitoring after launch.", icon: "🚀" },
      ],
    },
    projects: {
      badge: "Featured Works",
      title: "Projects we built",
      description: "A selection of projects demonstrating modern design systems.",
      items: [
        { title: "SaaS Dashboard UI", description: "Responsive admin dashboard with charts.", tech: ["Next.js", "TypeScript", "Tailwind"] },
        { title: "Marketing Landing Page", description: "High-conversion landing page.", tech: ["React", "Framer Motion", "Tailwind"] },
        { title: "E-commerce Platform", description: "Fast checkout flows and product filtering.", tech: ["Next.js", "Node.js", "MongoDB"] },
      ],
    },
    techStack: {
      badge: "Technologies",
      title: "Tools & technologies",
      description: "Modern toolset focused on speed and scalability.",
    },
    faq: {
      badge: "Frequently Asked Questions",
      title: "Answers to common questions",
      description: "about our services and work process.",
      footer: "Didn't find the answer to your question?",
      footerButton: "Contact us",
      items: [
        { question: "Can you work with existing projects?", answer: "Yes, we have experience integrating into existing teams." },
        { question: "How long does project development take?", answer: "Time depends on project complexity." },
        { question: "What technologies do you use?", answer: "We specialize in React, Next.js, TypeScript." },
        { question: "Do you offer post-launch support?", answer: "Yes, we offer continuous support and maintenance." },
      ],
    },
    cta: {
      title: "Ready for Digital Transformation?",
      description: "Let's create something extraordinary together. Your next big project is waiting.",
      primaryButton: "Start a Project",
      secondaryButton: "View Works",
      footnote: "No obligation. Just a talk about your ideas.",
    },
    contact: {
      badge: "Let's build something great together",
      title: "Share your idea or project",
      description: "and I'll get back to you within 1-2 business days.",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        button: "Send message",
        loading: "Sending...",
        success: "Thanks for reaching out! I'll get back to you as soon as possible.",
      },
    },
  },
};

export function LanguageSwitcher({ currentLang, onLanguageChange }: { 
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
      >
        <span className="text-lg">{currentLang === 'sr' ? <img src="/bh-flag.jpg" alt="Serbia" className="w-5 h-3.5 rounded" /> : <img src="/UK-flag.jpg" alt="UK" className="w-5 h-3.5 rounded" />}</span>
        <span>{currentLang.toUpperCase()}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-xs"
        >
          ▼
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-2 z-50"
          >
            <div className="rounded-xl border border-white/20 bg-black/90 backdrop-blur-md p-2 shadow-xl">
              <button
                onClick={() => { onLanguageChange('sr'); setIsOpen(false); }}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition hover:bg-white/10 w-full text-left ${
                  currentLang === 'sr' ? 'bg-white/20 text-white' : 'text-white/80'
                }`}
              >
                <img src="/bh-flag.jpg" alt="Serbia" className="w-5 h-3.5 rounded" />
                <span>Srpski</span>
              </button>
              <button
                onClick={() => { onLanguageChange('en'); setIsOpen(false); }}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition hover:bg-white/10 w-full text-left mt-1 ${
                  currentLang === 'en' ? 'bg-white/20 text-white' : 'text-white/80'
                }`}
              >
                <img src="/UK-flag.jpg" alt="UK" className="w-5 h-3.5 rounded" />
                <span>English</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export { translations, type Language, type Translations };
