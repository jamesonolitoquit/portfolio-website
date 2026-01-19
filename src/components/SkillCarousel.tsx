import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);

  // Auto-rotation functionality
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setRotation((prev) => prev + 0.3); // Even slower for better visibility
    }, 60);

    return () => clearInterval(interval);
  }, [isHovered]);

  const radius = 180; // Slightly smaller radius to prevent overlap
  const centerX = 250; // Adjusted center
  const centerY = 180; // Adjusted center

  return (
    <div
      className="relative w-full flex justify-center items-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: '1200px' }} // Increased perspective for better 3D effect
    >
      <div
        className="relative"
        style={{
          width: 500,
          height: 360,
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
            >
              {/* Icon */}
              <div className="text-6xl mb-2">{skill.icon}</div>
              {/* Skill name */}
              <div className="text-sm font-medium text-center leading-tight max-w-24 truncate">
                {skill.name}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCarousel;