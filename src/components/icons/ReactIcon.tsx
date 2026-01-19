import React from 'react';

interface IconProps {
  className?: string;
}

export const ReactIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} role="img" aria-label="React">
    <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89zM7.37 16.15c.69 0 1.25-.56 1.25-1.25 0-.7-.56-1.26-1.25-1.26s-1.25.56-1.25 1.26c0 .69.56 1.25 1.25 1.25zm9.26 0c.69 0 1.25-.56 1.25-1.25 0-.7-.56-1.26-1.25-1.26s-1.25.56-1.25 1.26c0 .69.56 1.25 1.25 1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#61DAFB"/>
  </svg>
);