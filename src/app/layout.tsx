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
    default: "Muhammad Hifzhan Silmi — Backend Engineer",
    template: "%s — Muhammad Hifzhan Silmi",
  },
  description:
    "Backend Engineer specializing in Laravel. I build scalable enterprise backend systems, workflow automation platforms, and high-performance APIs for government institutions and state-owned enterprises.",
  keywords: [
    "Backend Engineer",
    "Laravel Developer",
    "PHP Engineer",
    "Software Engineer",
    "Muhammad Hifzhan Silmi",
    "Enterprise Backend",
    "REST API",
    "Redis",
    "PostgreSQL",
    "Docker",
    "Queue Systems",
  ],
  authors: [{ name: "Muhammad Hifzhan Silmi" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Muhammad Hifzhan Silmi",
    title: "Muhammad Hifzhan Silmi — Backend Engineer",
    description:
      "Backend Engineer specializing in Laravel. I build scalable enterprise backend systems, workflow automation platforms, and high-performance APIs.",
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
    title: "Muhammad Hifzhan Silmi — Backend Engineer",
    description:
      "Backend Engineer specializing in Laravel. Enterprise backend systems, workflow automation, high-performance APIs.",
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
