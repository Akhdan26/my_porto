export const site = {
  name: "Muhammad Hifzhan Silmi",
  title: "Backend Engineer specializing in Laravel",
  tagline:
    "I build scalable enterprise backend systems, workflow automation platforms, and high-performance APIs powering government institutions, state-owned enterprises, and private organizations.",
  location: "Tangerang, Indonesia",
  email: "akhdanhifzhan@gmail.com",
  phone: "+62 853 3106 6533",
  linkedin: "https://www.linkedin.com/in/akhdanhifzhan/",
  github: "https://github.com/akhdan26",
  whatsapp: "https://wa.me/6285331066533",
  resumePath: "/resume/Muhammad_Hifzhan_Silmi_Senior_Laravel_Engineer.pdf",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const aboutText = `Backend Engineer with 4+ years of experience designing and deploying mission-critical backend systems for government institutions, state-owned enterprises (BUMN), and private organizations. I specialize in architecting scalable Laravel applications, building robust REST APIs, optimizing database performance, and implementing production-grade infrastructure on Linux VPS.

My work powers enterprise operational platforms serving 40,000+ users, workflow automation systems processing thousands of financial transactions, and government cybersecurity incident response platforms. I write clean, maintainable code following Service Layer, Repository Pattern, and DTO architecture — ensuring long-term system health and developer productivity.

I focus on backend engineering fundamentals: database design, queue management, caching strategies, and infrastructure reliability. Frontend is a supporting skill — my core strength is building the systems that make applications work at scale.`;

export const techStack = {
  backend: [
    { name: "PHP", level: "expert" },
    { name: "Laravel", level: "expert" },
    { name: "Laravel Filament", level: "expert" },
    { name: "Livewire", level: "advanced" },
    { name: "REST API", level: "expert" },
    { name: "CodeIgniter", level: "advanced" },
    { name: "Symfony", level: "intermediate" },
    { name: "Lumen", level: "advanced" },
  ],
  database: [
    { name: "MySQL", level: "expert" },
    { name: "PostgreSQL", level: "advanced" },
    { name: "Redis", level: "advanced" },
    { name: "Query Optimization", level: "expert" },
    { name: "Database Indexing", level: "expert" },
  ],
  infrastructure: [
    { name: "Linux VPS", level: "advanced" },
    { name: "Docker", level: "advanced" },
    { name: "Nginx", level: "advanced" },
    { name: "Supervisor", level: "advanced" },
    { name: "RabbitMQ", level: "advanced" },
    { name: "Queue Workers", level: "expert" },
    { name: "CI/CD", level: "intermediate" },
    { name: "Cloud Deployment", level: "advanced" },
  ],
  architecture: [
    { name: "Service Layer", level: "expert" },
    { name: "Repository Pattern", level: "expert" },
    { name: "DTO", level: "expert" },
    { name: "RBAC", level: "expert" },
    { name: "Microservices", level: "intermediate" },
    { name: "PSR Standards", level: "expert" },
  ],
  supporting: [
    { name: "TypeScript", level: "intermediate" },
    { name: "React", level: "intermediate" },
    { name: "Next.js", level: "intermediate" },
    { name: "Tailwind CSS", level: "advanced" },
  ],
};

export const projects = [
  {
    id: "agrinas",
    title: "Enterprise Operational Platform",
    company: "PT Agrinas Jaladri Nusantara (Persero)",
    headline: "Workflow automation powering 40,000+ users across finance, HR, and operations.",
    problem:
      "Agrinas needed a unified operational platform to replace fragmented manual processes across finance, HR, recruitment, and project management. Siloed spreadsheets, paper-based approvals, and disconnected systems created bottlenecks across the organization.",
    solution:
      "Designed and led backend development of a modular enterprise platform with multi-level approval workflows, real-time dashboards, and automated document processing. Built reusable service layers and repository patterns to ensure maintainability across 16+ interconnected business modules.",
    impact: [
      "40,441 registered users and 22,063 active applicants served",
      "70% reduction in HR administrative workload through automation",
      "Multi-department real-time dashboards for executive decision-making",
      "Excel-like budgeting module with automatic versioning and payroll integration",
    ],
    tech: ["Laravel", "Filament", "Livewire", "Redis", "MySQL", "AWS S3", "Google Sheets API", "WhatsApp API"],
  },
  {
    id: "kusumacorp",
    title: "Event Management System",
    company: "KusumaCorp",
    headline: "Production-grade event platform with QR attendance and WhatsApp integration.",
    problem:
      "The 2026 PDS PA National Conference required a reliable event management system capable of handling 807+ participants with QR-based attendance tracking, ID card distribution, and real-time operational monitoring — all running on-site with zero tolerance for failure.",
    solution:
      "Architected and developed the complete backend using Laravel Filament, implementing QR code attendance, participant registration workflows, ID card generation, goodie bag tracking, and operational dashboards. Integrated WhatsApp Business API for participant communication.",
    impact: [
      "807 participants managed seamlessly on-site",
      "QR-based attendance eliminating manual check-in",
      "Real-time operational dashboards for event staff",
      "WhatsApp Business API integration for mass communication",
    ],
    tech: ["Laravel", "Filament", "Redis", "WhatsApp Business API", "MySQL", "Supervisor", "Linux VPS", "Nginx"],
  },
  {
    id: "primo",
    title: "PRIMO — Modular Enterprise Platform",
    company: "Personal Engineering Project",
    headline: "A reusable modular architecture powering 16+ enterprise business modules.",
    problem:
      "Building custom enterprise applications from scratch for each client is inefficient. Organizations need reusable, modular systems that can be rapidly composed into operational platforms without sacrificing architectural quality or maintainability.",
    solution:
      "Designed PRIMO — a modular Laravel platform consisting of 16+ reusable business modules. Each module follows a strict Service Layer → Repository Pattern → DTO architecture with generic CRUD foundations, RBAC integration, and Excel-driven automation workflows. This architecture enables rapid feature composition while maintaining clean separation of concerns.",
    impact: [
      "16+ reusable business modules in production",
      "Generic CRUD architecture accelerating feature development",
      "Strict service layer separation ensuring long-term maintainability",
      "Excel-driven automation reducing repetitive administrative tasks",
    ],
    tech: ["Laravel", "Filament", "Service Layer", "Repository Pattern", "DTO", "RBAC", "MySQL", "Redis"],
  },
  {
    id: "pupr",
    title: "Government CSIRT Platform",
    company: "Pusdatin Kementerian PUPR",
    headline: "Secure backend infrastructure for Indonesia's public works cybersecurity team.",
    problem:
      "The Ministry of Public Works and Public Housing (PUPR) needed a Computer Security Incident Response Team (CSIRT) platform to manage cybersecurity incidents, share threat intelligence, and coordinate response efforts — with strict security requirements separating public and internal access.",
    solution:
      "Developed the complete backend infrastructure using Laravel, implementing role-based access control (RBAC) with granular permission separation between public-facing content and internal incident response tools. Collaborated directly with cybersecurity analysts to translate operational workflows into maintainable backend solutions.",
    impact: [
      "RBAC system separating public and internal security operations",
      "Incident response workflow automation for government analysts",
      "Secure authentication mechanisms meeting government standards",
    ],
    tech: ["Laravel", "Filament", "RBAC", "MySQL", "Next.js", "Nginx"],
  },
  {
    id: "mobility-doctor",
    title: "Automotive Service Platform API",
    company: "PT Mobility Doctor Indonesia",
    headline: "High-performance REST API with asynchronous message queuing.",
    problem:
      "A growing automotive service platform needed reliable, scalable backend services capable of handling asynchronous workloads — including scheduled notifications, background job processing, and high-throughput API endpoints — while maintaining strict PSR coding standards.",
    solution:
      "Developed and maintained RESTful APIs using Laravel Lumen micro-framework, implementing RabbitMQ for asynchronous message queuing to decouple background processing from the main application thread. Configured Redis for caching frequently accessed data and scheduled job execution.",
    impact: [
      "RabbitMQ-based async processing improving system reliability",
      "Redis caching reducing database load on high-traffic endpoints",
      "PSR-7 compliant microservices architecture",
    ],
    tech: ["Laravel Lumen", "REST API", "RabbitMQ", "Redis", "MySQL", "Docker"],
  },
];

export const experiences = [
  {
    company: "PT Agrinas Jaladri Nusantara (Persero)",
    role: "Senior Backend Engineer",
    period: "Apr 2024 – Present",
    location: "Jakarta, Indonesia",
    highlights: [
      "Led backend development for enterprise operational platforms serving 40,441 users and 22,063 active applicants.",
      "Designed multi-level approval workflows for finance, budgeting, and operational processes with audit history.",
      "Built high-performance budgeting modules with Excel-like editing, bulk import, automatic versioning, and payroll integration.",
      "Optimized production performance using Redis caching, database indexing, scheduled jobs, and third-party API integrations.",
    ],
  },
  {
    company: "KusumaCorp",
    role: "Independent Backend Engineer",
    period: "Apr 2025 – Present",
    location: "Remote, Indonesia",
    highlights: [
      "Architected event management system for 807-participant national conference using Laravel Filament.",
      "Implemented QR attendance, participant registration, ID card distribution, and goodie bag tracking.",
      "Integrated WhatsApp Business API and optimized performance with Redis, queue workers, and Supervisor.",
    ],
  },
  {
    company: "Pusdatin Kementerian PUPR",
    role: "Backend Engineer (Contract)",
    period: "Mar 2024 – Dec 2025",
    location: "Jakarta, Indonesia",
    highlights: [
      "Developed backend services for the national CSIRT platform serving government cybersecurity operations.",
      "Implemented secure role-based access control (RBAC) separating public and internal-facing systems.",
      "Collaborated with cybersecurity analysts to translate operational workflows into maintainable backend architecture.",
    ],
  },
  {
    company: "PT Mobility Doctor Indonesia",
    role: "Backend Developer",
    period: "Mar 2023 – Sep 2023",
    location: "Jakarta, Indonesia",
    highlights: [
      "Built RESTful APIs using Laravel Lumen for automotive service platform following PSR standards.",
      "Implemented RabbitMQ asynchronous processing improving scalability and background job reliability.",
      "Deployed and maintained cloud infrastructure ensuring high availability and uptime.",
    ],
  },
  {
    company: "Independent Backend Engineer (Freelance)",
    role: "Backend Engineer",
    period: "2021 – Present",
    location: "Remote, Indonesia",
    highlights: [
      "Designed and built PRIMO, a modular Laravel platform with 16+ reusable business modules using Service Layer, Repository Pattern, DTO, and RBAC architecture.",
      "Built KusumaCorp company profile and CMS system using Laravel Filament with SEO optimization and production deployment.",
      "Developed Geosentric international competition website using PHP, attracting 1,000+ participants within one month of launch for Teknik Geomatika ITS.",
      "Delivered custom Laravel applications, WordPress sites, and managed Linux VPS deployment, domain configuration, and SSL for multiple clients.",
    ],
  },
];

export const principles = [
  {
    title: "Scalability by Design",
    description:
      "Systems should handle growth without architectural changes. I design with queue-driven architectures, database indexing strategies, and caching layers from day one — not as afterthoughts when traffic spikes.",
    icon: "scale",
  },
  {
    title: "Maintainability First",
    description:
      "Code is read far more than it's written. I follow Service Layer, Repository Pattern, and DTO architecture to create predictable, testable codebases that any engineer can understand and extend within hours, not days.",
    icon: "maintain",
  },
  {
    title: "Clean Architecture",
    description:
      "Business logic belongs in services, not controllers. Data access belongs in repositories, not models. Every layer has a single responsibility. This separation makes systems resilient to framework changes and business requirement shifts.",
    icon: "arch",
  },
  {
    title: "Performance as a Feature",
    description:
      "Slow systems lose users. I treat query optimization, eager loading, Redis caching strategies, and database indexing as first-class engineering concerns — not optional optimizations.",
    icon: "perf",
  },
  {
    title: "Business Value Over Hype",
    description:
      "Technology choices must serve business outcomes. I evaluate tools based on reliability, ecosystem maturity, and team capability — not trending on social media. The best technology is the one that solves the problem reliably.",
    icon: "value",
  },
];
