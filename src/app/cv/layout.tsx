import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional CV | Jameson Olitoquit | Full-Stack Developer",
  description: "Full-stack developer CV showcasing expertise in Next.js, TypeScript, React, Firebase, Wix Studio, and WordPress. View detailed technical skills, professional highlights, and portfolio projects.",
  keywords: ["CV", "resume", "full-stack developer", "Next.js expertise", "TypeScript developer", "technical skills"],
  alternates: {
    canonical: "https://jameseonolitoquit.dev/cv",
  },
  openGraph: {
    title: "Professional CV | Jameson Olitoquit | Full-Stack Developer",
    description: "Full-stack developer CV with expertise in Next.js, TypeScript, React, Firebase, Wix Studio. View technical skills, professional highlights, and portfolio work.",
    type: "profile",
    url: "https://jameseonolitoquit.dev/cv",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jameson Olitoquit CV - Full-Stack Developer",
      },
    ],
  },
};

export default function CVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
