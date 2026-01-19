import React from 'react';

interface IconProps {
  className?: string;
}

export const FirebaseIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} role="img" aria-label="Firebase">
    <path d="M5.798 0c-.95 0-1.56.53-1.56 1.48v22.04c0 .95.61 1.48 1.56 1.48.95 0 1.56-.53 1.56-1.48V1.48C7.358.53 6.748 0 5.798 0zM18.202 0c-.95 0-1.56.53-1.56 1.48v22.04c0 .95.61 1.48 1.56 1.48.95 0 1.56-.53 1.56-1.48V1.48C19.762.53 19.152 0 18.202 0z" fill="#FFCA28"/>
    <path d="M11.844 7.89c-.95 0-1.56.53-1.56 1.48v13.16c0 .95.61 1.48 1.56 1.48.95 0 1.56-.53 1.56-1.48V9.38c0-.95-.61-1.48-1.56-1.48z" fill="#FFA000"/>
  </svg>
);