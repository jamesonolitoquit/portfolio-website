'use client'

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function AnimatedBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";
  const animationDuration = prefersReducedMotion ? 0 : 2;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: isDark
            ? "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)"
            : "linear-gradient(135deg, #87ceeb 0%, #e0f6ff 50%, #f0f8ff 100%)"
        }}
        transition={{ duration: animationDuration, ease: "easeInOut" }}
      />

      {/* Sun/Moon */}
      <motion.div
        className="absolute top-16 right-16"
        animate={{
          scale: isDark ? 0.8 : 1.2,
          opacity: isDark ? 0.9 : 1,
        }}
        transition={{ duration: animationDuration, ease: "easeInOut" }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          className={`drop-shadow-lg ${isDark ? "text-yellow-200" : "text-yellow-400"}`}
        >
          <circle
            cx="60"
            cy="60"
            r="40"
            fill="currentColor"
            className={isDark ? "animate-pulse" : ""}
          />
          {!isDark && (
            <>
              {/* Sun rays */}
              {[...Array(8)].map((_, i) => (
                <motion.line
                  key={i}
                  x1="60"
                  y1="20"
                  x2="60"
                  y2="10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  animate={{ rotate: i * 45 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              ))}
            </>
          )}
          {isDark && (
            <>
              {/* Moon craters */}
              <circle cx="45" cy="50" r="3" fill="#e6e6e6" opacity="0.6" />
              <circle cx="70" cy="45" r="2" fill="#e6e6e6" opacity="0.4" />
              <circle cx="55" cy="70" r="2.5" fill="#e6e6e6" opacity="0.5" />
            </>
          )}
        </svg>
      </motion.div>

      {/* Clouds/Stars */}
      <div className="absolute inset-0">
        {!isDark ? (
          // Clouds for light mode
          <>
            <motion.div
              className="absolute top-20 left-10"
              animate={{
                x: prefersReducedMotion ? 0 : [0, 20, 0],
              }}
              transition={{
                duration: prefersReducedMotion ? 0 : 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg width="100" height="60" viewBox="0 0 100 60" className="text-white opacity-80">
                <path d="M20,40 Q10,30 20,20 Q30,10 50,20 Q70,10 80,20 Q90,30 80,40 Q70,50 50,40 Q30,50 20,40 Z" fill="currentColor"/>
              </svg>
            </motion.div>
            <motion.div
              className="absolute top-32 right-20"
              animate={{
                x: prefersReducedMotion ? 0 : [0, -15, 0],
              }}
              transition={{
                duration: prefersReducedMotion ? 0 : 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg width="80" height="50" viewBox="0 0 80 50" className="text-white opacity-60">
                <path d="M15,35 Q5,25 15,15 Q25,5 45,15 Q65,5 75,15 Q85,25 75,35 Q65,45 45,35 Q25,45 15,35 Z" fill="currentColor"/>
              </svg>
            </motion.div>
          </>
        ) : (
          // Stars for dark mode
          <>
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 60}%`,
                }}
                animate={{
                  opacity: prefersReducedMotion ? 1 : [0.3, 1, 0.3],
                  scale: prefersReducedMotion ? 1 : [1, 1.2, 1],
                }}
                transition={{
                  duration: prefersReducedMotion ? 0 : Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              >
                <svg width="4" height="4" viewBox="0 0 4 4" className="text-yellow-200">
                  <circle cx="2" cy="2" r="1.5" fill="currentColor"/>
                </svg>
              </motion.div>
            ))}
            {/* Shooting star */}
            <motion.div
              className="absolute top-20 left-10"
              animate={{
                x: prefersReducedMotion ? 0 : [0, 200],
                y: prefersReducedMotion ? 0 : [0, 100],
                opacity: prefersReducedMotion ? 1 : [0, 1, 0],
              }}
              transition={{
                duration: prefersReducedMotion ? 0 : 3,
                repeat: Infinity,
                repeatDelay: 8,
                ease: "easeOut"
              }}
            >
              <svg width="20" height="2" viewBox="0 0 20 2" className="text-white">
                <line x1="0" y1="1" x2="20" y2="1" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </motion.div>
          </>
        )}
      </div>

      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
    </div>
  );
}