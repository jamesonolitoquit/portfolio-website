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
    description: "A modern business website template for small businesses or startups, featuring sections for services, about, contact, and support.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase", "Vercel"],
    features: ["Authentication", "Profile/Settings pages", "Support center", "Responsive design"],
    link: "https://jao-business-website-sample.vercel.app/",
    screenshot: "https://via.placeholder.com/600x300/6366f1/ffffff?text=Business+Website+Sample"
  },
  {
    name: "Landing Page Website Sample",
    description: "A high-conversion landing page template for SaaS or product launches, with sections for features, pricing, testimonials, and demo signup.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    features: ["Modular components", "Email signup", "Demo banner", "Responsive and accessible design"],
    link: "https://jao-landingpage-website-sample.vercel.app/",
    screenshot: "https://via.placeholder.com/600x300/10b981/ffffff?text=Landing+Page+Sample"
  },
  {
    name: "Web Application Sample",
    description: "A sample web application demonstrating client-side logic and state management, such as an Expense Tracker.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "localStorage", "Vercel"],
    features: ["Add/delete/edit expenses", "Persistent state", "Summary calculations", "Modern UI", "Offline-capable"],
    link: "https://jao-web-application-sample.vercel.app/",
    screenshot: "https://via.placeholder.com/600x300/f59e0b/ffffff?text=Web+Application+Sample"
  },
  {
    name: "Wix Business Website",
    description: "A Wix-based business site for showcasing services and contact information.",
    techStack: ["Wix Studio", "Wix Hosting"],
    features: ["Responsive", "Wix Studio created website", "Integrated contact forms", "Mobile-friendly"],
    link: "https://jumpstarthost.wixsite.com/mysite",
    screenshot: "https://via.placeholder.com/600x300/8b5cf6/ffffff?text=Wix+Business+Website"
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
    <div className="relative w-full max-w-4xl mx-auto">
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
            className="p-8 pl-20 pr-20"
          >
            <div className="mb-6">
              <img
                src={currentProject.screenshot}
                alt={`${currentProject.name} preview`}
                className="w-full h-48 object-cover rounded-lg shadow-md border border-primary/20"
              />
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-4 text-center">{currentProject.name}</h3>
            <p className="text-text-secondary mb-6">{currentProject.description}</p>

            <div className="mb-4">
              <h4 className="text-lg font-semibold text-text-primary mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {currentProject.techStack.map((tech, index) => {
                  const IconComponent = techIcons[tech];
                  return (
                    <div key={index} className="flex items-center gap-2 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                      {IconComponent && <IconComponent className="w-4 h-4" />}
                      <span>{tech}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-text-primary mb-2">Key Features</h4>
              <ul className="list-disc list-inside text-text-secondary space-y-1">
                {currentProject.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center">
              <a
                href={currentProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-background px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border-2 border-primary/50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Live Website
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevProject}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-surface border border-primary/20 shadow-lg rounded-full p-2 hover:bg-surface/80 transition-colors"
        aria-label="Previous project"
      >
        <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextProject}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-surface border border-primary/20 shadow-lg rounded-full p-2 hover:bg-surface/80 transition-colors"
        aria-label="Next project"
      >
        <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

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