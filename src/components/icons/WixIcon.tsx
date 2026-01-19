import React from 'react';

interface IconProps {
  className?: string;
}

export const WixIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} role="img" aria-label="Wix Studio">
    <rect x="2" y="2" width="20" height="20" rx="3" fill="#000000"/>
    <path d="M7 7h2v10H7V7zm4 0h2v10h-2V7zm4 0h2v10h-2V7z" fill="white"/>
  </svg>
);