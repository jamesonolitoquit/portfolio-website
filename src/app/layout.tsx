import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jameseonolitoquit.dev"),
  title: "Jameson Olitoquit | Full-Stack Developer (Next.js, TypeScript, Wix Studio)",
  description: "Full-stack developer building fast, conversion-focused websites and web apps. Specialized in Next.js, TypeScript, React, Tailwind CSS, Firebase, and Wix Studio. Available for freelance & remote opportunities.",
  keywords: ["full-stack developer", "Next.js developer", "TypeScript", "React developer", "web developer Philippines", "Wix Studio developer", "freelance web developer", "conversion-focused design"],
  authors: [{ name: "Jameson A. Olitoquit" }],
  creator: "Jameson A. Olitoquit",
  publisher: "Jameson A. Olitoquit",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jameseonolitoquit.dev",
    title: "Jameson Olitoquit | Full-Stack Developer (Next.js, TypeScript)",
    description: "I build fast, conversion-focused websites and web apps. Full-stack developer specializing in Next.js, TypeScript, and Wix Studio.",
    siteName: "Jameson Olitoquit Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jameson Olitoquit - Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jameson Olitoquit | Full-Stack Developer",
    description: "Building fast, conversion-focused websites and web apps with Next.js, TypeScript, and Wix Studio.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://jameseonolitoquit.dev",
  },
  icons: {
    icon: '/favicon.svg',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jameson A. Olitoquit",
  url: "https://jameseonolitoquit.dev",
  jobTitle: "Full-Stack Developer",
  sameAs: [
    "https://github.com/jameseonolitoquit",
    "https://linkedin.com/in/jameseonolitoquit",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Web Development",
    "Full-Stack Development",
    "Firebase",
    "Vercel",
    "Wix Studio",
    "WordPress",
  ],
  alumniOf: [],
  workLocation: {
    "@type": "City",
    name: "Philippines",
  },
  availableLanguage: ["en", "tl"],
  givenName: "Jameson",
  familyName: "Olitoquit",
  email: "jameson.olitoquit@gmail.com",
  description:
    "Full-stack developer specializing in building fast, conversion-focused websites and web apps using Next.js, TypeScript, React, Tailwind CSS, Firebase, and Wix Studio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-background text-text-primary overflow-x-hidden`} suppressHydrationWarning>
        <ThemeProvider defaultTheme="dark">
          <AnimatedBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
