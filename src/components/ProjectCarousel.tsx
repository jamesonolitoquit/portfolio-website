import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NextJsIcon } from './icons/NextJsIcon';
import { TypeScriptIcon } from './icons/TypeScriptIcon';
import { TailwindIcon } from './icons/TailwindIcon';
import { FirebaseIcon } from './icons/FirebaseIcon';
import { VercelIcon } from './icons/VercelIcon';
import { WixIcon } from './icons/WixIcon';
import { ReactIcon } from './icons/ReactIcon';
import { ResponsiveIcon } from './icons/ResponsiveIcon';

interface Project {
  name: string;
  description: string;
  techStack: string[];
  features: string[];
  link: string;
  screenshot: string;
}

const projects: Project[] = [
  {
    name: "Business Website Sample",
    description: "Built for small businesses that needed a modern, trustworthy web presence. I designed a conversion-ready structure with clear services, support flows, and polished UX across devices.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase", "Vercel"],
    features: ["Authentication", "Profile/Settings pages", "Support center", "Responsive design"],
    link: "https://jao-business-website-sample.vercel.app/",
    screenshot: "https://picsum.photos/600/300?random=1"
  },
  {
    name: "Landing Page Website Sample",
    description: "Created for product launches that needed fast go-to-market pages. Focused on persuasive section flow, clear value messaging, and conversion-focused CTAs with responsive performance.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    features: ["Modular components", "Email signup", "Demo banner", "Responsive and accessible design"],
    link: "https://jao-landingpage-website-sample.vercel.app/",
    screenshot: "https://picsum.photos/600/300?random=2"
  },
  {
    name: "Web Application Sample",
    description: "Developed to demonstrate reliable client-side logic for real user workflows. Implemented persistent state and intuitive interactions to keep the app fast, usable, and practical.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "localStorage", "Vercel"],
    features: ["Add/delete/edit expenses", "Persistent state", "Summary calculations", "Modern UI", "Offline-capable"],
    link: "https://jao-web-application-sample.vercel.app/",
    screenshot: "https://picsum.photos/600/300?random=3"
  },
  {
    name: "Wix Business Website",
    description: "Delivered for businesses needing a quick but professional launch. Balanced visual polish with clear content hierarchy so visitors can understand offers and contact quickly.",
    techStack: ["Wix Studio", "Wix Hosting"],
    features: ["Responsive", "Wix Studio created website", "Integrated contact forms", "Mobile-friendly"],
    link: "https://jumpstarthost.wixsite.com/mysite",
    screenshot: "https://picsum.photos/600/300?random=4"
  }
];

const techIcons: { [key: string]: React.ComponentType<{ className?: string }> } = {
  "Next.js": NextJsIcon,
  "React": ReactIcon,
  "TypeScript": TypeScriptIcon,
  "Tailwind CSS": TailwindIcon,
  "Firebase": FirebaseIcon,
  "Vercel": VercelIcon,
  "Wix Studio": WixIcon,
  "Wix Website Builder": WixIcon,
  "Wix Hosting": WixIcon,
  "Responsive Design": ResponsiveIcon,
  "localStorage": () => <span className="text-lg">💾</span>
};

const ProjectCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-x-hidden">
      <div className="mb-4 flex items-center justify-between gap-3 sm:hidden">
        <button
          onClick={prevProject}
          className="inline-flex items-center justify-center rounded-full border border-primary/20 bg-surface p-3 shadow-lg transition-colors hover:bg-surface/80"
          aria-label="Previous project"
        >
          <svg className="w-5 h-5 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextProject}
          className="inline-flex items-center justify-center rounded-full border border-primary/20 bg-surface p-3 shadow-lg transition-colors hover:bg-surface/80"
          aria-label="Next project"
        >
          <svg className="w-5 h-5 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Navigation Buttons - Outside carousel divider */}
      <button
        onClick={prevProject}
        className="absolute left-[-47px] top-1/2 hidden -translate-y-1/2 transform z-30 rounded-full border border-primary/20 bg-surface p-2 shadow-lg transition-colors hover:bg-surface/80 sm:block"
        aria-label="Previous project"
      >
        <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextProject}
        className="absolute right-[-47px] top-1/2 hidden -translate-y-1/2 transform z-30 rounded-full border border-primary/20 bg-surface p-2 shadow-lg transition-colors hover:bg-surface/80 sm:block"
        aria-label="Next project"
      >
        <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="overflow-hidden rounded-lg shadow-lg bg-surface border border-primary/20">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="flex flex-col md:flex-row gap-6 md:gap-8 p-4 md:p-8 min-w-0"
          >
            {/* Website Preview - Left Side */}
            <div className="w-full md:w-1/2 min-w-0">
              <div className="relative w-full h-[360px] sm:h-[440px] md:h-[584px] bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  src={currentProject.link}
                  className="w-full h-full"
                  title={`${currentProject.name} live preview`}
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to static image if iframe fails
                    const iframe = e.target as HTMLIFrameElement;
                    const container = iframe.parentElement;
                    if (container) {
                      container.innerHTML = `
                        <img
                          src="${currentProject.screenshot}"
                          alt="${currentProject.name} preview"
                          class="w-full h-full object-cover rounded-lg"
                        />
                      `;
                    }
                  }}
                />
              </div>
            </div>

            {/* Project Details - Right Side */}
            <div className="w-full md:w-1/2 flex flex-col justify-center min-w-0">
              {/* View Live Website Button - Centered */}
              <div className="mb-6 flex justify-center">
                <a
                  href={currentProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-background px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border-2 border-primary/50 w-full md:w-auto"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Live Website
                </a>
              </div>

              {/* Project Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 text-center md:text-left">{currentProject.name}</h3>

              {/* Project Description */}
              <p className="text-text-secondary mb-6 text-center md:text-left leading-relaxed">{currentProject.description}</p>

              {/* Tech Stack */}
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-text-primary mb-3 text-center md:text-left">Tech Stack</h4>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {currentProject.techStack.map((tech, index) => {
                    const IconComponent = techIcons[tech];
                    return (
                      <div key={index} className="flex items-center gap-2 bg-primary/20 text-primary px-3 py-2 rounded-full text-sm font-medium">
                        {IconComponent && <IconComponent className="w-4 h-4" />}
                        <span>{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-text-secondary/30'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;