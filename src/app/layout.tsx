import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jameson Olitoquit - Web Developer",
  description: "Portfolio of Jameson A. Olitoquit - Web Developer, Full Stack Developer, and Wix Studio Designer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-background text-text-primary`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <AnimatedBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
