import React from 'react';

interface IconProps {
  className?: string;
}

export const NextJsIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} role="img" aria-label="Next.js">
    <circle cx="12" cy="12" r="10" fill="#000000"/>
    <path d="M9.5 14.25L15.5 12L9.5 9.75V14.25Z" fill="white"/>
    <path d="M8 16.5C8 17.3284 7.32843 18 6.5 18C5.67157 18 5 16.5C5 15.6716 5.67157 15 6.5 15C7.32843 15 8 15.6716 8 16.5Z" fill="white"/>
  </svg>
);