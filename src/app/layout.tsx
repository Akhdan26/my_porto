import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akhdanhifzhan.pages.dev"),
  title: {
    default: "Muhammad Hifzhan Silmi — Software Engineer",
    template: "%s — Muhammad Hifzhan Silmi",
  },
  description:
    "Software Engineer building enterprise applications and backend systems. 5 years of experience delivering production systems for government institutions, state-owned enterprises, and private organizations.",
  keywords: [
    "Software Engineer",
    "Backend Engineer",
    "Muhammad Hifzhan Silmi",
    "Enterprise Applications",
    "REST API",
    "Laravel",
    "PHP",
    "MySQL",
    "Redis",
    "Docker",
    "System Architecture",
    "Workflow Automation",
  ],
  authors: [{ name: "Muhammad Hifzhan Silmi" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Muhammad Hifzhan Silmi",
    title: "Muhammad Hifzhan Silmi — Software Engineer",
    description:
      "Building enterprise applications and backend systems that transform complex business processes into reliable digital solutions.",
    images: [
      {
        url: "/images/profile.jpg",
        width: 400,
        height: 400,
        alt: "Muhammad Hifzhan Silmi",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Muhammad Hifzhan Silmi — Software Engineer",
    description:
      "Building enterprise applications and backend systems. 5 years of experience in production enterprise software.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background text-text-secondary antialiased">
        {children}
      </body>
    </html>
  );
}
