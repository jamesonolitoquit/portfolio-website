import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  icon: string;
  description: string;
}

const skills: Skill[] = [
  { name: "Next.js", icon: "🚀", description: "A React framework for production with server-side rendering and static site generation." },
  { name: "TypeScript", icon: "💎", description: "A typed superset of JavaScript that compiles to plain JavaScript." },
  { name: "Tailwind CSS", icon: "🎨", description: "A utility-first CSS framework for rapid UI development." },
  { name: "Firebase", icon: "🔥", description: "A platform for building web and mobile applications with backend services." },
  { name: "Vercel", icon: "△", description: "A platform for frontend frameworks and static sites with serverless functions." },
  { name: "Wix Studio", icon: "🏗️", description: "A visual development platform for creating websites and web applications." },
  { name: "React", icon: "⚛️", description: "A JavaScript library for building user interfaces." },
  { name: "Responsive Design", icon: "📱", description: "Designing websites that work on all device sizes." },
  { name: "PostgreSQL", icon: "🐘", description: "An advanced open-source relational database." },
  { name: "MySQL", icon: "🗄️", description: "An open-source relational database management system." },
  { name: "MongoDB", icon: "🍃", description: "A document-oriented NoSQL database." }
];

const SkillCarousel: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number } | null>(null);

  // Auto-rotation functionality
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setRotation((prev) => prev + 0.3); // Even slower for better visibility
    }, 60);

    return () => clearInterval(interval);
  }, [isHovered]);

  const skillAngle = 360 / skills.length; // Degrees per skill

  const rotateLeft = () => {
    setRotation(prev => prev - skillAngle);
  };

  const rotateRight = () => {
    setRotation(prev => prev + skillAngle);
  };

  const radius = 300; // Increased radius for larger carousel
  const centerX = 350; // Adjusted center X position
  const centerY = 200; // Adjusted center Y position for taller height

  return (
    <div className="relative w-full flex justify-center items-center">
      <div
        className="relative w-full flex justify-center items-center overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ perspective: '1200px' }} // Increased perspective for better 3D effect
      >
        {/* Left Navigation Button */}
        <button
          onClick={rotateLeft}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
          aria-label="Rotate carousel left"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Navigation Button */}
        <button
          onClick={rotateRight}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
          aria-label="Rotate carousel right"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div
          className="relative"
          style={{
            width: 700,
            height: 400,
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Skills positioned in 3D carousel */}
          {skills.map((skill, index) => {
            const angle = (index / skills.length) * 2 * Math.PI + (rotation * Math.PI) / 180;
            const x = Math.sin(angle) * radius;
            const z = Math.cos(angle) * radius;

            // Calculate opacity and z-index based on position
            const distanceFromCenter = Math.min(
              Math.abs(angle % (2 * Math.PI)),
              Math.abs((angle % (2 * Math.PI)) - 2 * Math.PI)
            );
            const normalizedDistance = Math.min(distanceFromCenter / Math.PI, 1);
            const opacity = Math.max(0.05, 1 - normalizedDistance * 0.95); // More pronounced opacity fade
            const zIndex = Math.floor(100 - normalizedDistance * 80);

            return (
              <motion.div
                key={skill.name}
                className="absolute flex flex-col items-center justify-center cursor-pointer select-none"
                style={{
                  left: centerX + x - 40, // Center the entire skill item
                  top: centerY - 40,     // Center the entire skill item
                  transform: `translateZ(${z}px)`,
                  zIndex: zIndex,
                  opacity: opacity,
                }}
                whileHover={{
                  scale: 1.2,
                  zIndex: 200,
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25
                }}
                onMouseEnter={() => {
                  setHoveredSkill(skill);
                  setTooltipPosition({ x: centerX + x, y: centerY + 80 });
                }}
                onMouseLeave={() => {
                  setHoveredSkill(null);
                  setTooltipPosition(null);
                }}
              >
                {/* Icon */}
                <div className="text-7xl mb-2">{skill.icon}</div>
                {/* Skill name */}
                <div className="text-sm font-medium text-center leading-tight max-w-24 truncate">
                  {skill.name}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Tooltip positioned below the hovered skill */}
      {hoveredSkill && tooltipPosition && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg pointer-events-none z-50 max-w-xs text-center"
          style={{
            left: tooltipPosition.x,
            top: tooltipPosition.y,
            transform: 'translateX(-50%)'
          }}
        >
          <div className="font-semibold text-lg mb-1">{hoveredSkill.name}</div>
          <div className="text-sm">{hoveredSkill.description}</div>
        </motion.div>
      )}
    </div>
  );
};

export default SkillCarousel;