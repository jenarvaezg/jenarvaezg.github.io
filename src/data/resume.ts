export type Lang = "en" | "es";

export const meta = {
  name: "José Enrique Narváez",
  fullName: "José Enrique Narváez Gago",
  email: "jenarvaezg@gmail.com",
  github: "https://github.com/jenarvaezg",
  linkedin: "https://www.linkedin.com/in/jenarvaezg/",
  location: "Madrid, Spain",
};

export const hero: Record<Lang, { title: string; subtitle: string }> = {
  en: {
    title: "Founding Engineer & Tech Lead",
    subtitle:
      "Building products from zero to one. Full-stack engineer with a security mindset.",
  },
  es: {
    title: "Founding Engineer & Tech Lead",
    subtitle:
      "Construyendo productos de cero a uno. Ingeniero full-stack con mentalidad de seguridad.",
  },
};

export const about: Record<Lang, string> = {
  en: `I'm a full-stack engineer with 10+ years of experience building products across fintech, security, and e-commerce. As a founding engineer at Reveni, I helped build the product from scratch and currently lead a squad. My backend toolkit centers on Python and Go, with React on the frontend — but I'm a polyglot at heart: I've shipped production code in half a dozen languages and enjoy picking up new ones through Advent of Code every December. My career started in cybersecurity — penetration testing, vulnerability research, incident response — and that security-first mindset still shapes every system I design. I'm also currently pursuing a Master's in Economics & Public Policy, broadening my perspective beyond engineering.`,
  es: `Soy ingeniero full-stack con más de 10 años de experiencia construyendo productos en fintech, seguridad y e-commerce. Como ingeniero fundador en Reveni, ayudé a construir el producto desde cero y actualmente lidero un squad. Mi stack principal en backend es Python y Go, con React en frontend, pero soy políglota por vocación: he trabajado profesionalmente con media docena de lenguajes y disfruto aprendiendo otros nuevos con el Advent of Code cada diciembre. Mi carrera empezó en ciberseguridad — tests de intrusión, investigación de vulnerabilidades, respuesta ante incidentes — y esa mentalidad security-first sigue definiendo cada sistema que diseño. Actualmente estoy cursando un Máster en Economía y Políticas Públicas, ampliando mi perspectiva más allá de la ingeniería.`,
};

export interface Job {
  company: string;
  role: Record<Lang, string>;
  period: string;
  description?: Record<Lang, string>;
}

export const experience: Job[] = [
  {
    company: "Reveni",
    role: { en: "Founding Engineer & Tech Lead", es: "Founding Engineer & Tech Lead" },
    period: "Feb 2022 — Present",
    description: {
      en: "Founding engineer at this fintech startup, part of the initial 3-person dev team. Built the platform from scratch, defined the technical architecture, and currently lead a squad. Full ownership of backend (Python, Go), frontend (React), infrastructure (AWS, Docker), and CI/CD pipelines.",
      es: "Ingeniero fundador en esta startup fintech, parte del equipo inicial de 3 desarrolladores. Construí la plataforma desde cero, definí la arquitectura técnica y actualmente lidero un squad. Ownership total del backend (Python, Go), frontend (React), infraestructura (AWS, Docker) y pipelines de CI/CD.",
    },
  },
  {
    company: "JOOR",
    role: { en: "Senior Software Engineer", es: "Senior Software Engineer" },
    period: "Apr 2021 — Feb 2022",
    description: {
      en: "Backend engineer at this B2B wholesale fashion marketplace. Specialized in JOOR Pay features and led the refactoring of a legacy architecture, managing a team of external consultants.",
      es: "Ingeniero backend en este marketplace B2B de moda al por mayor. Me especialicé en las funcionalidades de JOOR Pay y lideré la refactorización de una arquitectura legacy, gestionando un equipo de consultores externos.",
    },
  },
  {
    company: "Aplazame",
    role: { en: "Backend Tech Lead", es: "Backend Tech Lead" },
    period: "Apr 2020 — Apr 2021",
    description: {
      en: "Led the backend team at this buy-now-pay-later fintech. Drove architectural decisions, mentored engineers, and improved system performance and reliability under growing transaction volumes.",
      es: "Lideré el equipo de backend en esta fintech de pago a plazos. Impulsé decisiones de arquitectura, mentoricé ingenieros y mejoré el rendimiento y fiabilidad del sistema bajo volúmenes de transacciones crecientes.",
    },
  },
  {
    company: "Aplazame",
    role: { en: "Software Engineer", es: "Software Engineer" },
    period: "May 2019 — Apr 2020",
    description: {
      en: "Backend development on the core payment processing platform. Built and maintained microservices handling financial transactions, integrations with payment providers, and risk assessment systems.",
      es: "Desarrollo backend en la plataforma core de procesamiento de pagos. Construí y mantuve microservicios de transacciones financieras, integraciones con proveedores de pago y sistemas de evaluación de riesgo.",
    },
  },
  {
    company: "Paradigma Digital",
    role: { en: "Software Engineer", es: "Software Engineer" },
    period: "Aug 2018 — Apr 2019",
    description: {
      en: "Software consultancy embedded with enterprise clients. Worked at JOOR building features with React, Django, and GraphQL. Then joined Lowi (Vodafone), contributing to a 40+ member nexus team using Django.",
      es: "Consultoría de software integrado en clientes enterprise. Trabajé en JOOR desarrollando funcionalidades con React, Django y GraphQL. Después me incorporé a Lowi (Vodafone), colaborando en un equipo nexus de más de 40 miembros usando Django.",
    },
  },
  {
    company: "Grant Thornton Spain",
    role: { en: "Blockchain Consultant", es: "Consultor Blockchain" },
    period: "Jun 2018 — Aug 2018",
    description: {
      en: "Consulted on blockchain technology and its applications for enterprise use cases, evaluating feasibility and designing proof-of-concept solutions.",
      es: "Consultoría en tecnología blockchain y sus aplicaciones empresariales, evaluando viabilidad y diseñando soluciones proof-of-concept.",
    },
  },
  {
    company: "BBVA Next Technologies",
    role: { en: "SecDev", es: "SecDev" },
    period: "Apr 2017 — Jun 2018",
    description: {
      en: "Part of Chimera, a developer security product. Full-stack development of microservices in Python, Go, and Node.js with a React frontend. Infrastructure with Docker, Kubernetes, Jenkins, and AWS. Also led internal training sessions for new graduates.",
      es: "Parte de Chimera, un producto de seguridad para desarrolladores. Desarrollo full-stack de microservicios en Python, Go y Node.js con frontend en React. Infraestructura con Docker, Kubernetes, Jenkins y AWS. También impartí formación interna a nuevos graduados.",
    },
  },
  {
    company: "SIA Group",
    role: { en: "Security Consultant", es: "Consultor de Seguridad" },
    period: "Jul 2016 — Apr 2017",
    description: {
      en: "Black-box and white-box penetration testing on external/internal systems and physical devices. Web application and source code auditing. Vulnerability analysis with Metasploit. Built a malware analysis lab with Cuckoo. Security incident management and response.",
      es: "Tests de intrusión caja negra y blanca en sistemas externos/internos y dispositivos físicos. Auditoría de aplicaciones web y código fuente. Análisis de vulnerabilidades con Metasploit. Creación de laboratorio de malware con Cuckoo. Gestión y respuesta ante incidentes de seguridad.",
    },
  },
  {
    company: "BTC fácil",
    role: { en: "Developer", es: "Desarrollador" },
    period: "Nov 2015 — Jul 2016",
    description: {
      en: "Built the software stack for Bitcoin ATMs using Python/Django, JavaScript, and C. Responsible for both development and security of the systems handling cryptocurrency transactions.",
      es: "Desarrollé el stack de software para cajeros de Bitcoin usando Python/Django, JavaScript y C. Responsable tanto del desarrollo como de la seguridad de los sistemas que gestionaban transacciones de criptomonedas.",
    },
  },
];

export const skills = {
  backend: ["Python", "Go", "Node.js", "Django", "REST", "gRPC"],
  frontend: ["React", "TypeScript", "JavaScript", "HTML/CSS"],
  ai: ["Claude Code", "Cursor", "Prompt Engineering", "LLM APIs", "AI-Assisted Development"],
  infrastructure: ["Docker", "Kubernetes", "AWS", "GCP", "CI/CD", "Jenkins"],
  security: ["Pentesting", "Vulnerability Analysis", "SIEM", "Security Auditing"],
  databases: ["MongoDB", "PostgreSQL"],
  other: ["Blockchain", "Microservices", "Agile"],
};

export const skillLabels: Record<Lang, Record<string, string>> = {
  en: {
    backend: "Backend",
    frontend: "Frontend",
    ai: "AI & Developer Tools",
    infrastructure: "Infrastructure",
    security: "Security",
    databases: "Databases",
    other: "Other",
  },
  es: {
    backend: "Backend",
    frontend: "Frontend",
    ai: "IA & Herramientas de Desarrollo",
    infrastructure: "Infraestructura",
    security: "Seguridad",
    databases: "Bases de datos",
    other: "Otros",
  },
};

export interface Project {
  name: string;
  description: Record<Lang, string>;
  tech: string;
  url: string;
  homepage?: string;
  stars: number;
}

export const projects: Project[] = [
  {
    name: "tu-ipc",
    description: {
      en: "Personal CPI calculator based on Spain's INE data",
      es: "Calculadora de IPC personal basada en datos del INE",
    },
    tech: "TypeScript",
    url: "https://github.com/jenarvaezg/tu-ipc",
    homepage: "https://tu-ipc.es",
    stars: 2,
  },
  {
    name: "MagicHub",
    description: {
      en: "Backend for magichub.io — a platform for magic enthusiasts",
      es: "Backend para magichub.io — una plataforma para aficionados a la magia",
    },
    tech: "Go",
    url: "https://github.com/jenarvaezg/MagicHub",
    stars: 3,
  },
  {
    name: "cunhaobot",
    description: {
      en: "Telegram bot that talks like a Spanish cuñado",
      es: "Bot de Telegram que habla como un cuñado",
    },
    tech: "Python",
    url: "https://github.com/jenarvaezg/cunhaobot",
    stars: 6,
  },
  {
    name: "vigenere_breaker",
    description: {
      en: "XOR-Vigenère cipher breaker with key length guessing",
      es: "Descifrador de Vigenère-XOR con adivinación de longitud de clave",
    },
    tech: "C",
    url: "https://github.com/jenarvaezg/vigenere_breaker",
    stars: 2,
  },
  {
    name: "ctff",
    description: {
      en: "Capture The Flag Framework",
      es: "Framework para Capture The Flag",
    },
    tech: "Go",
    url: "https://github.com/jenarvaezg/ctff",
    stars: 0,
  },
  {
    name: "eth-scrapper",
    description: {
      en: "Ethereum blockchain scraper",
      es: "Scraper de la blockchain de Ethereum",
    },
    tech: "Go",
    url: "https://github.com/jenarvaezg/eth-scrapper",
    stars: 1,
  },
];

export const adventOfCode = [
  { year: 2025, lang: "TypeScript" },
  { year: 2024, lang: "Python" },
  { year: 2023, lang: "Python" },
  { year: 2022, lang: "Rust" },
  { year: 2021, lang: "Go" },
  { year: 2020, lang: "Rust" },
  { year: 2019, lang: "Elixir" },
];

export interface Education {
  institution: string;
  degree: Record<Lang, string>;
  period: string;
  description?: Record<Lang, string>;
}

export const education: Education[] = [
  {
    institution: "Universidad de las Hespérides",
    degree: {
      en: "Master in Economics & Public Policy",
      es: "Máster en Economía y Políticas Públicas",
    },
    period: "2025",
    description: {
      en: "Broadening perspective beyond engineering into economic analysis and policy design.",
      es: "Ampliando perspectiva más allá de la ingeniería hacia el análisis económico y el diseño de políticas.",
    },
  },
  {
    institution: "Universidad Carlos III de Madrid",
    degree: {
      en: "MSc in Cybersecurity",
      es: "Máster Universitario en Ciberseguridad",
    },
    period: "2016 — 2017",
    description: {
      en: "Specialization in software security, ethical hacking, and cyber defense. Published work on introduction to cybersecurity and ethical hacking.",
      es: "Especialización en seguridad del software, hacking ético y ciberdefensa. Publicación sobre introducción a la ciberseguridad y hacking ético.",
    },
  },
  {
    institution: "Universidad Rey Juan Carlos",
    degree: {
      en: "BSc in Telematics Engineering",
      es: "Grado en Ingeniería Telemática",
    },
    period: "2012 — 2016",
    description: {
      en: "Honors distinctions (Matrículas de Honor). Special award for best architecture project.",
      es: "Matrículas de Honor. Premio especial a la mejor arquitectura.",
    },
  },
];

export const nav: Record<Lang, Record<string, string>> = {
  en: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    education: "Education",
    contact: "Contact",
  },
  es: {
    about: "Sobre mí",
    experience: "Experiencia",
    projects: "Proyectos",
    skills: "Habilidades",
    education: "Educación",
    contact: "Contacto",
  },
};
