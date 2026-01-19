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
      setRotation((prev) => prev + 1);
    }, 50); // Smooth continuous rotation

    return () => clearInterval(interval);
  }, [isHovered]);

  const radius = 120; // Distance from center
  const centerX = 150; // Center X position
  const centerY = 150; // Center Y position

  return (
    <div
      className="relative w-full flex justify-center items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative" style={{ width: 300, height: 300 }}>
        {/* Center point for reference */}
        <div
          className="absolute rounded-full border-2 border-primary/30"
          style={{
            width: 20,
            height: 20,
            left: centerX - 10,
            top: centerY - 10,
          }}
        />

        {/* Skills positioned in circle */}
        {skills.map((skill, index) => {
          const angle = (index / skills.length) * 2 * Math.PI + (rotation * Math.PI) / 180;
          const x = centerX + radius * Math.cos(angle) - 25; // 25 is half icon width
          const y = centerY + radius * Math.sin(angle) - 25; // 25 is half icon height

          return (
            <motion.div
              key={skill.name}
              className="absolute text-4xl cursor-pointer select-none"
              style={{
                left: x,
                top: y,
              }}
              whileHover={{
                scale: 1.2,
                zIndex: 10,
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
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-primary mb-2">Skills</h3>
          <p className="text-sm text-text-secondary">Hover to pause • Click icons to explore</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCarousel;