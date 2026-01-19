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
  { name: "Responsive Design", icon: "📱" }
];

const SkillCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);

  // Auto-scroll functionality
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % skills.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  const nextSkill = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % skills.length);
  };

  const prevSkill = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + skills.length) % skills.length);
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

  const currentSkill = skills[currentIndex];

  return (
    <div
      className="relative w-full max-w-4xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg bg-surface p-8">
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
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 }
            }}
            className="text-center"
          >
            <div className="text-6xl mb-4">{currentSkill.icon}</div>
            <p className="font-medium text-lg">{currentSkill.name}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSkill}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border border-primary/20 rounded-full p-2 transition-colors z-10"
        aria-label="Previous skill"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSkill}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border border-primary/20 rounded-full p-2 transition-colors z-10"
        aria-label="Next skill"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {skills.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-primary/30'
            }`}
            aria-label={`Go to skill ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillCarousel;