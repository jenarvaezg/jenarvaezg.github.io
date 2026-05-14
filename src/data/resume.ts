export type Lang = "en" | "es";

export const meta = {
  name: "Jose Enrique Narvaez",
  fullName: "Jose Enrique Narvaez Gago",
  email: "jenarvaezg@gmail.com",
  github: "https://github.com/jenarvaezg",
  linkedin: "https://www.linkedin.com/in/jenarvaezg/",
  location: "Madrid, Spain",
};

export const hero: Record<Lang, { title: string; subtitle: string }> = {
  en: {
    title: "Staff Engineer",
    subtitle:
      "Building products from zero to scale. Security background, economics curiosity.",
  },
  es: {
    title: "Staff Engineer",
    subtitle:
      "Construyendo productos de cero a escala. Formacion en seguridad, curiosidad por la economia.",
  },
};

export const about: Record<Lang, string> = {
  en: "Founding engineer at Reveni, where I helped build the platform from the ground up as part of a small initial team that grew to 15+ engineers through Series A. Before fintech, I spent years in cybersecurity — pentesting, vulnerability research, incident response. Currently finishing a Master's in Economics & Public Policy.",
  es: "Ingeniero fundador en Reveni, donde ayude a construir la plataforma desde cero como parte de un equipo inicial pequeno que crecio a mas de 15 ingenieros a traves de la Serie A. Antes del fintech, pase anos en ciberseguridad — pentesting, investigacion de vulnerabilidades, respuesta ante incidentes. Actualmente terminando un Master en Economia y Politicas Publicas.",
};

export interface Job {
  company: string;
  role: Record<Lang, string>;
  period: string;
  bullets?: Record<Lang, string[]>;
}

export const experience: Job[] = [
  {
    company: "Reveni",
    role: {
      en: "Founding Engineer & Tech Lead",
      es: "Founding Engineer & Tech Lead",
    },
    period: "Feb 2022 — Present",
    bullets: {
      en: [
        "Part of the founding engineering team; helped build the platform from scratch (Python, Go, React, DigitalOcean)",
        "Team grew from 3 to 15+ engineers as the company raised ~$20M (Series A €7.5M)",
        "Co-defined technical architecture, CI/CD pipelines, and engineering culture",
        "Contributed to international expansion across multiple European markets",
      ],
      es: [
        "Parte del equipo fundador de ingenieria; ayude a construir la plataforma desde cero (Python, Go, React, DigitalOcean)",
        "El equipo crecio de 3 a mas de 15 ingenieros mientras la empresa levanto ~$20M (Serie A €7,5M)",
        "Co-defini la arquitectura tecnica, pipelines de CI/CD y cultura de ingenieria",
        "Contribui a la expansion internacional en varios mercados europeos",
      ],
    },
  },
  {
    company: "JOOR",
    role: { en: "Senior Software Engineer", es: "Senior Software Engineer" },
    period: "Apr 2021 — Feb 2022",
    bullets: {
      en: [
        "Backend engineer at this B2B wholesale fashion marketplace",
        "Built JOOR Pay features and led refactoring of legacy architecture (React, Django, GraphQL)",
        "Managed a team of external consultants during the architecture migration",
      ],
      es: [
        "Ingeniero backend en este marketplace B2B de moda al por mayor",
        "Desarrolle funcionalidades de JOOR Pay y lidere la refactorizacion de arquitectura legacy (React, Django, GraphQL)",
        "Gestion de un equipo de consultores externos durante la migracion de arquitectura",
      ],
    },
  },
  {
    company: "Aplazame",
    role: {
      en: "Software Engineer → Backend Tech Lead",
      es: "Software Engineer → Backend Tech Lead",
    },
    period: "May 2019 — Apr 2021",
    bullets: {
      en: [
        "Promoted from IC to Tech Lead within a year at this BNPL fintech",
        "Built and maintained microservices handling financial transactions and risk assessment",
        "Drove architectural decisions and mentored junior engineers",
      ],
      es: [
        "Promocionado de IC a Tech Lead en menos de un ano en esta fintech BNPL",
        "Construi y mantuve microservicios de transacciones financieras y evaluacion de riesgo",
        "Impulse decisiones de arquitectura y mentorice ingenieros junior",
      ],
    },
  },
  {
    company: "Paradigma Digital",
    role: { en: "Software Engineer", es: "Software Engineer" },
    period: "Aug 2018 — Apr 2019",
    bullets: {
      en: [
        "Software consultancy embedded with enterprise clients (JOOR, Lowi/Vodafone)",
        "Built features with React, Django, and GraphQL across multiple client projects",
      ],
      es: [
        "Consultoria de software integrado en clientes enterprise (JOOR, Lowi/Vodafone)",
        "Desarrolle funcionalidades con React, Django y GraphQL en varios proyectos de clientes",
      ],
    },
  },
  {
    company: "BBVA Next Technologies",
    role: { en: "Security Developer", es: "Security Developer" },
    period: "Apr 2017 — Jul 2018",
    bullets: {
      en: [
        "Built Chimera, a developer security product — full-stack microservices (Python, Go, Node.js, React)",
        "Infrastructure with Docker, Kubernetes, Jenkins, and AWS",
        "Led internal training sessions for new graduate engineers",
      ],
      es: [
        "Desarrolle Chimera, producto de seguridad para desarrolladores — microservicios full-stack (Python, Go, Node.js, React)",
        "Infraestructura con Docker, Kubernetes, Jenkins y AWS",
        "Imparti formacion interna a nuevos ingenieros graduados",
      ],
    },
  },
  {
    company: "SIA Group",
    role: { en: "Security Consultant", es: "Consultor de Seguridad" },
    period: "Jul 2016 — Apr 2017",
    bullets: {
      en: [
        "Black-box and white-box penetration testing on external/internal systems",
        "Web application and source code auditing; vulnerability analysis with Metasploit",
        "Built a malware analysis lab with Cuckoo; security incident management",
      ],
      es: [
        "Tests de intrusion caja negra y blanca en sistemas externos/internos",
        "Auditoria de aplicaciones web y codigo fuente; analisis de vulnerabilidades con Metasploit",
        "Creacion de laboratorio de malware con Cuckoo; gestion de incidentes de seguridad",
      ],
    },
  },
  {
    company: "BTC facil",
    role: { en: "Developer", es: "Desarrollador" },
    period: "Nov 2015 — Jul 2016",
    bullets: {
      en: [
        "Built the software stack for Bitcoin ATMs (Python/Django, JavaScript, C)",
        "Responsible for both development and security of cryptocurrency transaction systems",
      ],
      es: [
        "Desarrolle el stack de software para cajeros de Bitcoin (Python/Django, JavaScript, C)",
        "Responsable del desarrollo y seguridad de los sistemas de transacciones de criptomonedas",
      ],
    },
  },
];

export const skills: Record<string, string[]> = {
  backend: ["Python", "Go", "Node.js", "Django", "REST", "gRPC", "GraphQL"],
  frontend: ["React", "TypeScript", "JavaScript", "HTML/CSS"],
  infrastructure: [
    "Docker",
    "Kubernetes",
    "AWS",
    "GCP",
    "Terraform",
    "CI/CD",
    "Redis",
  ],
  security: [
    "Pentesting",
    "Vulnerability Analysis",
    "SIEM",
    "Security Auditing",
  ],
  databases: ["PostgreSQL", "MongoDB"],
  practices: [
    "Technical Leadership",
    "Microservices",
    "Agile",
    "System Design",
  ],
};

export const skillLabels: Record<Lang, Record<string, string>> = {
  en: {
    backend: "Backend",
    frontend: "Frontend",
    infrastructure: "Infrastructure",
    security: "Security",
    databases: "Databases",
    practices: "Practices & Leadership",
  },
  es: {
    backend: "Backend",
    frontend: "Frontend",
    infrastructure: "Infraestructura",
    security: "Seguridad",
    databases: "Bases de datos",
    practices: "Practicas & Liderazgo",
  },
};

import projectsData from "./projects.json";
import aocData from "./aoc.json";

export interface Project {
  name: string;
  description: Record<Lang, string>;
  tech: string;
  url: string;
  homepage?: string;
}

export const projects: Project[] = projectsData;

export const adventOfCode: { year: number; lang: string; repo: string }[] = aocData;

export interface Education {
  institution: string;
  degree: Record<Lang, string>;
  period: string;
  description?: Record<Lang, string>;
}

export const education: Education[] = [
  {
    institution: "Universidad de las Hesperides",
    degree: {
      en: "Master in Economics & Public Policy",
      es: "Master en Economia y Politicas Publicas",
    },
    period: "2025",
    description: {
      en: "Broadening perspective beyond engineering into economic analysis and policy design.",
      es: "Ampliando perspectiva mas alla de la ingenieria hacia el analisis economico y el diseno de politicas.",
    },
  },
  {
    institution: "Universidad Carlos III de Madrid",
    degree: {
      en: "MSc in Cybersecurity",
      es: "Master Universitario en Ciberseguridad",
    },
    period: "2016 — 2017",
    description: {
      en: "Specialization in software security, ethical hacking, and cyber defense.",
      es: "Especializacion en seguridad del software, hacking etico y ciberdefensa.",
    },
  },
  {
    institution: "Universidad Rey Juan Carlos",
    degree: {
      en: "BSc in Telematics Engineering",
      es: "Grado en Ingenieria Telematica",
    },
    period: "2012 — 2016",
    description: {
      en: "Honors distinctions (Matriculas de Honor). Special award for best architecture project.",
      es: "Matriculas de Honor. Premio especial a la mejor arquitectura.",
    },
  },
];

export interface Language {
  name: Record<Lang, string>;
  level: Record<Lang, string>;
}

export const languages: Language[] = [
  {
    name: { en: "Spanish", es: "Espanol" },
    level: { en: "Native", es: "Nativo" },
  },
  {
    name: { en: "English", es: "Ingles" },
    level: { en: "Bilingual", es: "Bilingue" },
  },
];

export const nav: Record<Lang, Record<string, string>> = {
  en: {
    about: "About",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    education: "Education",
    languages: "Languages",
  },
  es: {
    about: "Sobre mi",
    experience: "Experiencia",
    skills: "Habilidades",
    projects: "Proyectos",
    education: "Educacion",
    languages: "Idiomas",
  },
};
