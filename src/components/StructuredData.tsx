import { site } from "@/lib/data";

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: "Backend Engineer",
    description:
      "Backend Engineer specializing in Laravel. Building scalable enterprise backend systems, workflow automation platforms, and high-performance APIs.",
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
      "Backend Engineering",
      "Laravel",
      "PHP",
      "REST API",
      "Database Design",
      "Redis",
      "RabbitMQ",
      "PostgreSQL",
      "MySQL",
      "Linux VPS",
      "Docker",
      "Queue Systems",
      "Enterprise Applications",
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
