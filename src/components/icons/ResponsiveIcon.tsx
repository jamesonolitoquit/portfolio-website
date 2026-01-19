import React from 'react';

interface IconProps {
  className?: string;
}

export const ResponsiveIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} role="img" aria-label="Responsive Design">
    <rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="#6366f1" strokeWidth="2"/>
    <circle cx="9" cy="8" r="1" fill="#6366f1"/>
    <circle cx="15" cy="8" r="1" fill="#6366f1"/>
    <path d="M6 12h12" stroke="#6366f1" strokeWidth="2" strokeLinecap="round"/>
    <path d="M6 16h8" stroke="#6366f1" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);