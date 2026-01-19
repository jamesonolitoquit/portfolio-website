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
      setRotation((prev) => prev + 0.5); // Slower, smoother rotation
    }, 50);

    return () => clearInterval(interval);
  }, [isHovered]);

  const radius = 200; // Distance from center in 3D space
  const centerX = 200; // Center X position
  const centerY = 150; // Center Y position

  return (
    <div
      className="relative w-full flex justify-center items-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: '1000px' }} // Enable 3D perspective
    >
      <div
        className="relative"
        style={{
          width: 400,
          height: 300,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Skills positioned in 3D carousel */}
        {skills.map((skill, index) => {
          const angle = (index / skills.length) * 2 * Math.PI + (rotation * Math.PI) / 180;
          const x = Math.sin(angle) * radius;
          const z = Math.cos(angle) * radius;

          // Calculate opacity and z-index based on position
          const distanceFromCenter = Math.abs(angle % (2 * Math.PI) - Math.PI);
          const normalizedDistance = distanceFromCenter / Math.PI;
          const opacity = Math.max(0.1, 1 - normalizedDistance * 0.8);
          const zIndex = Math.floor(100 - normalizedDistance * 70);

          return (
            <motion.div
              key={skill.name}
              className="absolute text-5xl cursor-pointer select-none"
              style={{
                left: centerX - 25, // Center the icon
                top: centerY - 25,  // Center the icon
                transform: `translateX(${x}px) translateY(0px) translateZ(${z}px) rotateY(${-angle}rad)`,
                zIndex: zIndex,
                opacity: opacity,
              }}
              whileHover={{
                scale: 1.3,
                zIndex: 200,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              title={skill.name} // Tooltip on hover
            >
              {skill.icon}
            </motion.div>
          );
        })}
      </div>

      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-primary mb-2">Skills</h3>
          <p className="text-sm text-text-secondary">Hover to pause • 3D carousel view</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCarousel;