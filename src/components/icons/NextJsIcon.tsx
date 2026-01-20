import React from 'react';

interface IconProps {
  className?: string;
}

export const NextJsIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} role="img" aria-label="Next.js">
    <circle cx="12" cy="12" r="10" fill="#000000"/>
    <path d="M9.5 14.25L15.5 12L9.5 9.75V14.25Z" fill="white"/>
    <circle cx="6.5" cy="16.5" r="1.5" fill="white"/>
  </svg>
);