export const site = {
  name: "Muhammad Hifzhan Silmi",
  title: "Software Engineer",
  tagline:
    "Building enterprise applications and backend systems that transform complex business processes into reliable digital solutions.",
  location: "Tangerang, Indonesia",
  email: "akhdanhifzhan@gmail.com",
  phone: "+62 853 3106 6533",
  linkedin: "https://www.linkedin.com/in/akhdanhifzhan/",
  github: "https://github.com/akhdan26",
  resumePath: "/resume/Muhammad_Hifzhan_Silmi_CV.pdf",
};

export const navLinks = [
  { label: "Journey", href: "#journey" },
  { label: "Experience", href: "#experience" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Expertise", href: "#expertise" },
  { label: "Technologies", href: "#technologies" },
  { label: "Contact", href: "#contact" },
];

export const aboutText = `I solve business problems through software.

My approach to engineering is rooted in understanding what a business actually needs before writing a single line of code. I ask questions about workflows, bottlenecks, and operational goals until the problem domain is clear. Only then do I think about architecture, data models, and implementation.

This business-first mindset has shaped every system I've built. At PT Agrinas, it meant designing approval workflows that matched how finance teams actually operate — not how a textbook said they should. At PUPR, it meant sitting with cybersecurity analysts to understand their incident response procedures before architecting the backend.

I enjoy building systems that replace manual, error-prone processes with reliable software. There is a specific satisfaction in watching a previously chaotic workflow become a structured, auditable, automated pipeline.

Technically, I am strongest in backend engineering — REST APIs, database design, queue-driven architectures, and system integration. Laravel is the framework I have used most in production. But my foundation is software engineering: clean architecture, separation of concerns, and building systems that remain maintainable as they grow.

When I evaluate a technology, I ask one question: does this solve the business problem reliably? Not whether it is trending. Not whether it looks good in a conference talk. Reliability, maintainability, and team capability matter more than novelty.`;

export const journey = [
  {
    year: "2021",
    title: "Built First Production Web Application",
    description:
      "Developed the Geosentric international competition platform using PHP Native, JavaScript, AJAX, jQuery, and MySQL. The platform supported approximately 1,000 participants from senior high schools across Indonesia within one month of launch. Completed IT Infrastructure internship at PT Piramida Teknologi Informasi, learning Linux server administration and Symfony framework.",
  },
  {
    year: "2022",
    title: "Graduated & Strengthened Engineering Fundamentals",
    description:
      "Graduated from Politeknik Negeri Malang with a Bachelor of Applied Informatics Engineering (GPA 3.63/4.00). Continued freelance software development while deepening understanding of Linux systems, networking, and software design principles.",
  },
  {
    year: "2023",
    title: "Joined Mobility Doctor as Backend Developer",
    description:
      "Developed RESTful APIs using Laravel Lumen within a microservices architecture. Implemented asynchronous message queuing with RabbitMQ to improve system scalability. Applied PSR-7 standards and service-oriented architecture patterns.",
  },
  {
    year: "2024",
    title: "Entered Enterprise & Government Software Engineering",
    description:
      "Joined Pusdatin Kementerian PUPR as Software Engineer Consultant. Developed backend services for the national CSIRT cybersecurity platform with secure RBAC and authentication. Joined PT Agrinas Jaladri Nusantara (Persero) as Software Engineer. Designed and built enterprise operational systems for Finance, HR, Recruitment, Budgeting, and Project Management serving 300+ daily users.",
  },
  {
    year: "2025",
    title: "Expanded into Independent Enterprise Software Delivery",
    description:
      "Built PRIMO — a modular enterprise platform with 16+ reusable business modules implementing Service Layer, Repository Pattern, DTO, and RBAC architecture. Delivered KusumaCorp Event Management System supporting 807 participants at a national conference with QR attendance, WhatsApp integration, and real-time dashboards. Continued concurrent roles at Agrinas and PUPR.",
  },
  {
    year: "2026",
    title: "Architecting Scalable Enterprise Systems",
    description:
      "Deployed PRIMO Construction Project Monitoring Platform at primoproject.app. Continuing enterprise software development at PT Agrinas Jaladri Nusantara. Actively exploring larger-scale distributed systems and software architecture challenges.",
  },
];

export const expertise = [
  {
    area: "Backend Engineering",
    description:
      "Designing and building server-side systems that process data, enforce business rules, and expose reliable APIs.",
  },
  {
    area: "Enterprise Applications",
    description:
      "Building operational software that supports complex organizational workflows across multiple business divisions.",
  },
  {
    area: "REST API Development",
    description:
      "Designing resource-oriented APIs with consistent error handling, versioning strategies, and comprehensive documentation.",
  },
  {
    area: "Business Workflow Automation",
    description:
      "Replacing manual, paper-based business processes with structured, auditable, automated software pipelines.",
  },
  {
    area: "Software Architecture",
    description:
      "Applying Service Layer, Repository Pattern, DTO, and RBAC to create maintainable, testable, and scalable codebases.",
  },
  {
    area: "Database Design",
    description:
      "Modeling relational data, designing normalized schemas, and optimizing query performance through indexing and caching strategies.",
  },
  {
    area: "Performance Optimization",
    description:
      "Leveraging Redis caching, query optimization, eager loading, queue workers, and database indexing to keep systems fast at scale.",
  },
  {
    area: "System Integration",
    description:
      "Connecting enterprise applications with third-party services including WhatsApp Business API, Google Sheets API, and AWS S3.",
  },
  {
    area: "Scalable Application Development",
    description:
      "Building systems designed for growth — queue-driven architectures, caching layers, and horizontal scaling strategies.",
  },
];

export const techStack = {
  backend: [
    "PHP",
    "Laravel",
    "Laravel Filament",
    "Laravel Lumen",
    "Livewire",
    "REST API",
    "CodeIgniter",
    "Symfony",
  ],
  database: [
    "MySQL",
    "PostgreSQL",
    "Redis",
    "Query Optimization",
    "Database Indexing",
  ],
  infrastructure: [
    "Linux",
    "Docker",
    "Nginx",
    "Supervisor",
    "RabbitMQ",
    "Queue Workers",
    "CI/CD",
    "AWS S3",
  ],
  architecture: [
    "Service Layer",
    "Repository Pattern",
    "DTO",
    "RBAC",
    "Microservices",
    "PSR Standards",
  ],
  frontend: [
    "TypeScript",
    "React",
    "Next.js",
    "JavaScript",
    "Tailwind CSS",
    "HTML",
    "jQuery",
  ],
};

export const projects = [
  {
    id: "primo",
    title: "PRIMO — Construction Project Monitoring Platform",
    company: "Personal Engineering Project",
    headline:
      "A modular enterprise platform with 16+ reusable business modules supporting project monitoring, budgeting, procurement, HR, and operational management.",
    businessProblem:
      "Organizations that need operational software often face a false choice: buy expensive, rigid off-the-shelf ERP systems or build custom applications from scratch for every new business need. Both approaches are inefficient — ERPs enforce workflows that do not match actual business processes, while building from scratch wastes engineering effort on repetitive foundations.",
    engineeringApproach:
      "Designed PRIMO as a modular Laravel platform where each business module follows a strict Service Layer → Repository Pattern → DTO architecture. Built a generic CRUD foundation that accelerates feature development while maintaining clean separation of concerns. Every module shares a consistent architecture, RBAC integration, and data access patterns — making the platform composable, predictable, and maintainable.",
    keyFeatures: [
      "16+ reusable business modules (Project Monitoring, Budgeting, Procurement, HR, Inventory, Reporting, Operations)",
      "Generic CRUD architecture accelerating feature development across modules",
      "Excel-driven workflow automation for bulk data processing",
      "Multi-level approval workflows with complete audit trails",
      "Role-based access control integrated at the service layer",
      "Modular design allowing rapid composition of new operational features",
    ],
    technicalChallenges: [
      "Designing a generic CRUD architecture flexible enough to handle diverse business domains without becoming over-engineered",
      "Maintaining strict separation of concerns across 16+ modules while avoiding code duplication",
      "Building Excel-driven automation that could process complex business rules without fragile spreadsheet parsing",
    ],
    impact: [
      "16+ reusable business modules reducing client delivery time from months to weeks",
      "Excel-driven automation replacing hours of manual data entry per workflow",
      "Architecture enabling feature composition without rebuilding foundations",
    ],
    tech: [
      "Laravel",
      "Filament",
      "Service Layer",
      "Repository Pattern",
      "DTO",
      "RBAC",
      "MySQL",
      "Redis",
    ],
    demo: "https://primoapp.atarise.id",
    github: null,
  },
  {
    id: "agrinas",
    title: "Enterprise Operational Platform",
    company: "PT Agrinas Jaladri Nusantara (Persero)",
    headline:
      "Enterprise software powering 300+ employees across Finance, HR, Recruitment, Budgeting, Procurement, and Project Operations.",
    businessProblem:
      "Agrinas operated with fragmented manual processes across multiple business divisions. Finance used spreadsheets. HR managed recruitment through email. Budgeting involved disconnected Excel files with no version control. Approval workflows required physical document circulation. The lack of integrated systems created operational bottlenecks, data inconsistencies, and limited executive visibility.",
    engineeringApproach:
      "Led backend development of a modular enterprise platform. Designed multi-level approval workflows with complete audit history. Built high-performance budgeting modules with Excel-like editing, bulk import, automatic versioning, and payroll integration. Developed an e-Recruitment platform supporting 40,441 registered users and 22,063 active applicants. Integrated third-party services including Google Sheets, AWS S3, and WhatsApp Business API.",
    keyFeatures: [
      "Multi-level approval workflows with audit history across all business domains",
      "Excel-like budgeting module with versioning and payroll integration",
      "E-Recruitment platform with 40,441 registered users and applicant tracking",
      "Executive dashboards providing real-time visibility across Finance, HR, and Project Management",
      "Integration with Google Sheets, AWS S3, and WhatsApp Business API",
      "Performance optimization through Redis caching, database indexing, and scheduled jobs",
    ],
    technicalChallenges: [
      "Designing approval workflows flexible enough to accommodate different business rules across Finance, HR, and Operations",
      "Building Excel-like editing for budgeting with automatic versioning while maintaining data integrity",
      "Scaling the e-Recruitment platform to handle 40,000+ concurrent user registrations",
    ],
    impact: [
      "300+ employees across the organization using the system daily",
      "40,441 registered users and 22,063 active applicants on the recruitment platform",
      "Real-time executive dashboards replacing manual report generation",
      "Significant reduction in HR administrative workload through recruitment automation",
    ],
    tech: [
      "Laravel",
      "Filament",
      "Livewire",
      "Redis",
      "MySQL",
      "AWS S3",
      "Google Sheets API",
      "WhatsApp API",
    ],
    demo: null,
    github: null,
  },
  {
    id: "csirt-pupr",
    title: "CSIRT PUPR — Cybersecurity Incident Response Platform",
    company: "Pusdatin Kementerian PUPR",
    headline:
      "Secure backend infrastructure for Indonesia's Ministry of Public Works cybersecurity incident response team.",
    businessProblem:
      "The Ministry of Public Works and Public Housing needed a Computer Security Incident Response Team platform to manage cybersecurity incidents, share threat intelligence, and coordinate response efforts. The system required strict security separation between public-facing informational content and internal incident response tools — all meeting government security standards.",
    engineeringApproach:
      "Developed complete backend infrastructure using Laravel. Implemented role-based access control with granular permission separation between public content management and internal incident response operations. Designed authentication and authorization workflows following government cybersecurity standards. Collaborated directly with cybersecurity analysts to translate operational procedures into maintainable software architecture.",
    keyFeatures: [
      "RBAC separating public-facing content and internal incident response tools",
      "Secure authentication and authorization meeting government security standards",
      "Incident response workflow automation for cybersecurity analysts",
      "Threat intelligence sharing and coordination features",
    ],
    technicalChallenges: [
      "Designing access control that cleanly separated public information from classified incident data",
      "Implementing security measures that satisfied government compliance requirements without overcomplicating the architecture",
      "Translating cybersecurity operational procedures into software workflows that analysts could adopt naturally",
    ],
    impact: [
      "Production cybersecurity platform serving Indonesia's Ministry of Public Works",
      "RBAC enabling secure separation of public and internal operations",
      "Workflow automation improving incident response coordination",
    ],
    tech: ["Laravel", "Filament", "RBAC", "MySQL", "Next.js", "Nginx"],
    demo: "https://csirt.pu.go.id",
    github: null,
  },
  {
    id: "kusuma-event",
    title: "Kusuma Event Management System",
    company: "KusumaCorp — PT Kurnia Sukses Makmur",
    headline:
      "Production-grade event platform supporting 807 participants with QR attendance, ID card distribution, and WhatsApp integration.",
    businessProblem:
      "The 2026 PDS PA National Conference required a reliable event management system to handle 807+ participants with QR-based attendance tracking, ID card distribution, goodie bag tracking, and real-time operational monitoring. The system had to run smoothly on-site with zero tolerance for failure during live event operations.",
    engineeringApproach:
      "Architected the complete backend using Laravel Filament. Implemented QR code generation and scanning for attendance tracking. Built participant registration workflows with ID card generation and goodie bag tracking. Developed real-time operational dashboards for event staff. Integrated WhatsApp Business API for mass participant communication. Optimized performance with Redis caching, queue workers, and Supervisor process monitoring.",
    keyFeatures: [
      "QR-based attendance tracking eliminating manual check-in",
      "Participant registration with automated ID card generation",
      "Goodie bag distribution tracking",
      "Real-time operational dashboards for event staff",
      "WhatsApp Business API integration for mass communication",
      "Redis caching and queue workers for performance under load",
    ],
    technicalChallenges: [
      "Ensuring the system remained responsive during peak check-in periods with 800+ simultaneous participants",
      "Implementing reliable QR scanning that worked across different device cameras in varying lighting conditions",
      "Maintaining uptime and data integrity throughout the live event with no room for failure",
    ],
    impact: [
      "807 participants managed seamlessly during a national conference",
      "QR attendance system eliminated paper check-in entirely",
      "Real-time dashboards gave event staff full operational visibility",
      "Zero system failures throughout live event operations",
    ],
    tech: [
      "Laravel",
      "Filament",
      "Redis",
      "WhatsApp Business API",
      "MySQL",
      "Supervisor",
      "Linux",
      "Nginx",
    ],
    demo: "https://event.kusumacorp.com",
    github: null,
  },
  {
    id: "kusuma-landing",
    title: "KusumaCorp Corporate Website & CMS",
    company: "KusumaCorp — PT Kurnia Sukses Makmur",
    headline:
      "Corporate website and content management system with SEO optimization and production deployment.",
    businessProblem:
      "KusumaCorp needed a professional corporate web presence with a content management system that non-technical staff could use to manage company information, news, and publications independently — without requiring developer intervention for every content update.",
    engineeringApproach:
      "Developed the corporate website and integrated CMS using Laravel Filament. Implemented SEO optimization including metadata management, sitemap generation, and structured data. Deployed to Linux VPS with Nginx, SSL configuration, and domain management. Built an intuitive admin panel enabling non-technical staff to manage all website content.",
    keyFeatures: [
      "Content management system with intuitive admin panel",
      "SEO metadata management across all pages",
      "Automated sitemap generation",
      "Production deployment on Linux VPS with Nginx and SSL",
    ],
    technicalChallenges: [
      "Building a CMS simple enough for non-technical users without compromising content structure",
      "Implementing SEO best practices that persisted across content updates",
    ],
    impact: [
      "Professional corporate web presence for KusumaCorp",
      "Non-technical staff managing content independently",
      "SEO-optimized site deployed on Linux infrastructure",
    ],
    tech: [
      "Laravel",
      "Filament",
      "MySQL",
      "Linux",
      "Nginx",
      "SEO",
    ],
    demo: "https://kusumacorp.com",
    github: null,
  },
  {
    id: "geosentric",
    title: "Geosentric — National Competition Platform",
    company: "Department of Geomatics Engineering, ITS",
    headline:
      "National online competition platform supporting 1,000+ participants from senior high schools across Indonesia.",
    businessProblem:
      "The Department of Geomatics Engineering at Institut Teknologi Sepuluh Nopember needed a web platform to run a national competition — including landing pages, participant registration, competition dashboards, and online examination modules — capable of serving 1,000+ participants within a tight launch timeline.",
    engineeringApproach:
      "Built the complete web platform using PHP Native, JavaScript, AJAX, jQuery, and MySQL. Developed landing pages to attract participants, dashboards for competition management, and online examination modules for test delivery. Managed production deployment on shared hosting infrastructure under a one-month deadline.",
    keyFeatures: [
      "Landing pages for competition promotion",
      "Participant registration and dashboard",
      "Online examination module",
      "Support for 1,000+ concurrent participants",
    ],
    technicalChallenges: [
      "Delivering a complete competition platform from scratch within one month",
      "Ensuring platform stability for 1,000+ simultaneous users on shared hosting infrastructure",
      "Building examination modules that prevented cheating while remaining accessible",
    ],
    impact: [
      "1,000+ participants from senior high schools across Indonesia",
      "Complete platform developed and deployed within one month",
      "Successfully ran a national-level competition online",
    ],
    tech: [
      "PHP Native",
      "JavaScript",
      "AJAX",
      "jQuery",
      "MySQL",
    ],
    demo: null,
    github: null,
  },
  {
    id: "mobility-doctor",
    title: "Automotive Service Platform API",
    company: "PT Mobility Doctor Indonesia",
    headline:
      "High-performance REST API with asynchronous message queuing for an automotive service platform.",
    businessProblem:
      "A growing automotive service platform required scalable backend services capable of handling asynchronous workloads — scheduled notifications, background job processing, and high-throughput API endpoints — while maintaining strict PSR coding standards and service-oriented architecture.",
    engineeringApproach:
      "Developed RESTful APIs using Laravel Lumen micro-framework. Implemented RabbitMQ for asynchronous message queuing to decouple background processing from the main application thread. Configured Redis for caching frequently accessed data. Applied PSR-7 standards and service-oriented architecture throughout the development lifecycle.",
    keyFeatures: [
      "RESTful APIs following PSR-7 standards",
      "RabbitMQ asynchronous processing for background jobs and notifications",
      "Redis caching for high-traffic endpoints",
      "Microservices architecture with service separation",
    ],
    technicalChallenges: [
      "Designing RabbitMQ message structures that remained reliable under varying load conditions",
      "Maintaining API consistency across multiple microservices",
    ],
    impact: [
      "RabbitMQ-based async processing improving system responsiveness under load",
      "Redis caching reducing database load on high-traffic endpoints",
      "PSR-7 compliant architecture enabling team-wide code consistency",
    ],
    tech: [
      "Laravel Lumen",
      "REST API",
      "RabbitMQ",
      "Redis",
      "MySQL",
      "Docker",
    ],
    demo: null,
    github: null,
  },
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    company: "Personal Project",
    headline:
      "This portfolio — built to communicate engineering experience through a premium, performant web presence.",
    businessProblem:
      "A professional portfolio is a communication tool for recruiters and engineering leaders. It must balance visual quality, performance, and content clarity — presenting engineering experience without the distraction of excessive design or the shallowness of a template.",
    engineeringApproach:
      "Built with Next.js, TypeScript, and Tailwind CSS. Generated as a fully static site for deployment on Cloudflare Pages. Designed with minimalist aesthetics, semantic HTML, accessibility, and SEO optimization including structured JSON-LD data. Focused on fast load times, responsive design, and content hierarchy that tells a clear engineering story.",
    keyFeatures: [
      "Static site generation for zero server-side overhead",
      "Semantic HTML with accessibility best practices",
      "JSON-LD structured data for search engine discoverability",
      "Responsive design across all device sizes",
      "Optimized Open Graph and Twitter card metadata",
    ],
    technicalChallenges: [
      "Balancing visual design quality with static export constraints of Next.js",
      "Implementing accessible interactive elements without compromising the minimalist aesthetic",
    ],
    impact: [
      "Production deployment on Cloudflare Pages",
      "Lighthouse performance score in high 90s",
      "SEO-optimized with structured data and social metadata",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Cloudflare Pages",
    ],
    demo: "https://akhdanhifzhan.pages.dev",
    github: "https://github.com/Akhdan26/my_porto",
  },
];

export const experiences = [
  {
    company: "PT Agrinas Jaladri Nusantara (Persero)",
    role: "Software Engineer",
    designation: "Staff IT — Application Developer",
    period: "Apr 2024 – Present",
    location: "Jakarta, Indonesia",
    businessDomain:
      "State-Owned Enterprise — Finance, HR, Recruitment, Budgeting, Procurement, Project Operations",
    engineeringImpact:
      "Led backend development for enterprise operational systems serving 300+ employees daily. Built and maintained e-Recruitment platform supporting 40,441 registered users. Delivered executive dashboards, automated approval workflows, and third-party integrations.",
    coreTechnologies: [
      "Laravel",
      "Filament",
      "Livewire",
      "Redis",
      "MySQL",
      "AWS S3",
      "Google Sheets API",
      "WhatsApp API",
    ],
  },
  {
    company: "Pusdatin Kementerian PUPR",
    role: "Software Engineer Consultant",
    designation: "Programming/Web Developer & IT Security Programmer",
    period: "Mar 2024 – Dec 2025",
    location: "Jakarta, Indonesia (Hybrid)",
    businessDomain:
      "Government — Cybersecurity, Incident Response, Public Infrastructure",
    engineeringImpact:
      "Developed backend services for the national CSIRT cybersecurity platform. Designed RBAC and authentication workflows meeting government security standards. Collaborated with cybersecurity analysts to translate operational procedures into maintainable software.",
    coreTechnologies: ["Laravel", "Filament", "RBAC", "MySQL", "Next.js", "Nginx"],
  },
  {
    company: "KusumaCorp — PT Kurnia Sukses Makmur",
    role: "Independent Software Engineer",
    designation: "Backend Engineer",
    period: "Apr 2025 – Present",
    location: "Remote, Indonesia",
    businessDomain:
      "Private Organization — Event Management, Corporate Web Presence",
    engineeringImpact:
      "Architected event management system supporting 807 participants at a national conference. Implemented QR attendance, participant registration, WhatsApp integration, and real-time dashboards. Built corporate website with integrated CMS.",
    coreTechnologies: [
      "Laravel",
      "Filament",
      "Redis",
      "WhatsApp Business API",
      "MySQL",
      "Linux",
      "Nginx",
    ],
  },
  {
    company: "PT Mobility Doctor Indonesia",
    role: "Backend Developer",
    designation: "Backend Developer",
    period: "Mar 2023 – Sep 2023",
    location: "Jakarta, Indonesia",
    businessDomain:
      "Private Technology — Automotive Service Platform",
    engineeringImpact:
      "Developed RESTful APIs using Laravel Lumen within a microservices architecture. Implemented RabbitMQ asynchronous processing and Redis caching. Applied PSR-7 standards and service-oriented architecture patterns.",
    coreTechnologies: [
      "Laravel Lumen",
      "REST API",
      "RabbitMQ",
      "Redis",
      "MySQL",
      "Docker",
    ],
  },
  {
    company: "PT Piramida Teknologi Informasi",
    role: "IT Infrastructure & Web Development Intern",
    designation: "Intern — Kampus Merdeka Program",
    period: "Sep 2021 – Jun 2022",
    location: "Surabaya, Indonesia",
    businessDomain:
      "Technology Consulting — IT Infrastructure, Web Development",
    engineeringImpact:
      "Assisted Linux server provisioning and deployment on dedicated servers. Learned Symfony framework and Linux administration. Supported internal web development while building software engineering fundamentals.",
    coreTechnologies: [
      "Linux",
      "Symfony",
      "PHP",
      "MySQL",
      "Nginx",
    ],
  },
  {
    company: "Self-Employed",
    role: "Independent Software Engineer",
    designation: "Freelance",
    period: "Apr 2021 – Present",
    location: "Remote, Indonesia",
    businessDomain:
      "Multi-Industry — Education, SME, Private Organizations",
    engineeringImpact:
      "Designed and built PRIMO modular platform with 16+ reusable business modules. Built competition platforms, corporate websites, and custom applications. Managed Linux VPS deployment, domain configuration, and SSL for multiple clients.",
    coreTechnologies: [
      "Laravel",
      "PHP Native",
      "MySQL",
      "Linux",
      "Nginx",
    ],
  },
];
