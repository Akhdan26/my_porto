import { site } from "@/lib/data";

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: "Software Engineer",
    description:
      "Software Engineer building enterprise applications and backend systems that transform complex business processes into reliable digital solutions.",
    url: "https://akhdanhifzhan.pages.dev",
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tangerang",
      addressCountry: "ID",
    },
    sameAs: [site.linkedin, site.github],
    knowsAbout: [
      "Software Engineering",
      "Backend Engineering",
      "Enterprise Applications",
      "REST API Development",
      "Database Design",
      "System Architecture",
      "Workflow Automation",
      "PHP",
      "Laravel",
      "MySQL",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "Docker",
      "Linux",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Politeknik Negeri Malang",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
