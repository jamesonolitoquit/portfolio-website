import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Skill {
  name: string;
  icon: string;
}

const skills: Skill[] = [
  { name: "Next.js", icon: "⚛️" },
  { name: "TypeScript", icon: "⚡" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Firebase", icon: "🔥" },
  { name: "Vercel", icon: "▲" },
  { name: "Wix Studio", icon: "🟫" },
  { name: "React", icon: "🌐" },
  { name: "Responsive Design", icon: "📱" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MySQL", icon: "🗄️" },
  { name: "MongoDB", icon: "🍃" }
];

const SkillCarousel: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);
  const [skillsPerPage, setSkillsPerPage] = useState(1);

  // Responsive skills per page
  useEffect(() => {
    const updateSkillsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1280) setSkillsPerPage(10); // xl
      else if (width >= 1024) setSkillsPerPage(8); // lg
      else if (width >= 768) setSkillsPerPage(6); // md
      else if (width >= 640) setSkillsPerPage(4); // sm
      else setSkillsPerPage(1); // mobile
    };

    updateSkillsPerPage();
    window.addEventListener('resize', updateSkillsPerPage);
    return () => window.removeEventListener('resize', updateSkillsPerPage);
  }, []);

  const totalPages = Math.ceil(skills.length / skillsPerPage);

  // Auto-scroll functionality - faster (1.5 seconds)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 1500); // Changed from 3000 to 1500 for faster rotation

    return () => clearInterval(interval);
  }, [isHovered, totalPages]);

  const nextPage = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentPageSkills = () => {
    const startIndex = currentPage * skillsPerPage;
    return skills.slice(startIndex, startIndex + skillsPerPage);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const currentSkills = getCurrentPageSkills();

  return (
    <div
      className="relative w-full max-w-4xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg bg-surface p-8">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 }
            }}
          >
            <div className={`grid gap-6 ${
              skillsPerPage === 1 ? 'grid-cols-1' :
              skillsPerPage === 4 ? 'grid-cols-2' :
              skillsPerPage === 6 ? 'grid-cols-3' :
              skillsPerPage === 8 ? 'grid-cols-4' :
              'grid-cols-5'
            }`}>
              {currentSkills.map((skill, index) => (
                <div key={`${currentPage}-${index}`} className="text-center">
                  <div className="text-4xl md:text-5xl mb-2">{skill.icon}</div>
                  <p className="font-medium text-sm md:text-base">{skill.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevPage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border border-primary/20 rounded-full p-2 transition-colors z-10"
        aria-label="Previous skills"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextPage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border border-primary/20 rounded-full p-2 transition-colors z-10"
        aria-label="Next skills"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentPage ? 1 : -1);
              setCurrentPage(index);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentPage ? 'bg-primary' : 'bg-primary/30'
            }`}
            aria-label={`Go to skills page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillCarousel;