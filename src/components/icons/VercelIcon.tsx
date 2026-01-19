import React from 'react';

interface IconProps {
  className?: string;
}

export const VercelIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} role="img" aria-label="Vercel">
    <path d="M12 0L24 22H0L12 0Z" fill="#000000"/>
  </svg>
);