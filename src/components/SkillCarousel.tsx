'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface Skill {
  name: string
  icon: string
  description: string
}

const skills: Skill[] = [
  { name: 'Next.js', icon: '🚀', description: 'A React framework for production with server-side rendering and static site generation.' },
  { name: 'TypeScript', icon: '💎', description: 'A typed superset of JavaScript that compiles to plain JavaScript.' },
  { name: 'Tailwind CSS', icon: '🎨', description: 'A utility-first CSS framework for rapid UI development.' },
  { name: 'Firebase', icon: '🔥', description: 'A platform for building web and mobile applications with backend services.' },
  { name: 'Vercel', icon: '△', description: 'A platform for frontend frameworks and static sites with serverless functions.' },
  { name: 'Wix Studio', icon: '🏗️', description: 'A visual development platform for creating websites and web applications.' },
  { name: 'React', icon: '⚛️', description: 'A JavaScript library for building user interfaces.' },
  { name: 'Responsive Design', icon: '📱', description: 'Designing websites that work on all device sizes.' },
  { name: 'PostgreSQL', icon: '🐘', description: 'An advanced open-source relational database.' },
  { name: 'MySQL', icon: '🗄️', description: 'An open-source relational database management system.' },
  { name: 'MongoDB', icon: '🍃', description: 'A document-oriented NoSQL database.' }
]

const SkillCarousel = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [mobilePaused, setMobilePaused] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)')

    const handleChange = () => setIsMobile(mediaQuery.matches)

    handleChange()
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (isMobile || isHovered) return

    const interval = setInterval(() => {
      setRotation((prev) => prev + 0.3)
    }, 60)

    return () => clearInterval(interval)
  }, [isHovered, isMobile])

  useEffect(() => {
    if (!isMobile || mobilePaused) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % skills.length)
    }, 4200)

    return () => clearInterval(interval)
  }, [isMobile, mobilePaused])

  const skillAngle = 360 / skills.length

  const rotateLeft = () => {
    if (isMobile) {
      setActiveIndex((current) => (current - 1 + skills.length) % skills.length)
      return
    }

    setRotation((prev) => prev - skillAngle)
  }

  const rotateRight = () => {
    if (isMobile) {
      setActiveIndex((current) => (current + 1) % skills.length)
      return
    }

    setRotation((prev) => prev + skillAngle)
  }

  if (isMobile) {
    const mobileItems = skills.map((skill, index) => {
      const total = skills.length
      let delta = index - activeIndex

      if (delta > total / 2) delta -= total
      if (delta < -total / 2) delta += total

      const distance = Math.abs(delta)
      const visible = distance <= 2
      const translateX = delta * 68
      const translateZ = distance === 0 ? 120 : -120 - distance * 45
      const rotateY = delta * -24
      const scale = distance === 0 ? 1 : distance === 1 ? 0.9 : 0.82
      const opacity = distance === 0 ? 1 : distance === 1 ? 0.7 : 0.36
      const zIndex = 60 - distance

      return {
        skill,
        visible,
        style: {
          transform: `translate3d(${translateX}%, 0, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
          opacity,
          zIndex,
        },
      }
    })

    return (
      <div className="mx-auto w-full max-w-6xl px-0 sm:px-2">
        <div className="relative overflow-hidden px-2 py-4 sm:px-0">
          <div
            className="relative mx-auto h-[350px] w-full max-w-[420px] overflow-hidden"
            style={{ perspective: '1200px' }}
            onTouchStart={() => setMobilePaused(true)}
            onTouchEnd={() => setMobilePaused(false)}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {mobileItems.map(({ skill, visible, style }) =>
                visible ? (
                  <motion.button
                    key={skill.name}
                    type="button"
                    onClick={() => setActiveIndex(skills.findIndex((item) => item.name === skill.name))}
                    className="absolute flex h-[220px] w-[210px] flex-col justify-between rounded-[1.5rem] border border-primary/20 bg-background/90 p-5 text-left shadow-2xl backdrop-blur-sm"
                    style={style}
                    animate={{ opacity: style.opacity }}
                    transition={{ type: 'spring', stiffness: 250, damping: 24 }}
                    aria-label={skill.name}
                  >
                    <div>
                      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/15 bg-primary/15 text-3xl">
                        {skill.icon}
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">
                        {skill.name}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                        {skill.description}
                      </p>
                    </div>
                  </motion.button>
                ) : null,
              )}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={rotateLeft}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-background/90 text-text-primary shadow-lg transition-colors hover:bg-primary hover:text-background"
                aria-label="Rotate left"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={rotateRight}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-background/90 text-text-primary shadow-lg transition-colors hover:bg-primary hover:text-background"
                aria-label="Rotate right"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
          </div>

          <div className="mt-4 flex justify-center gap-2 overflow-hidden px-2">
            {skills.map((skill, index) => (
              <button
                key={skill.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex ? 'w-8 bg-primary' : 'w-2.5 bg-text-secondary/30'
                }`}
                aria-label={`Go to ${skill.name}`}
                aria-pressed={index === activeIndex}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full flex justify-center items-center overflow-x-hidden">
      <div
        className="relative w-full flex justify-center items-center overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ perspective: '1200px', height: 400, maxWidth: '100%' }}
      >
        <button
          onClick={rotateLeft}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
          aria-label="Rotate carousel left"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={rotateRight}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
          aria-label="Rotate carousel right"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div
          className="relative"
          style={{
            width: 700,
            height: 400,
            transformStyle: 'preserve-3d',
          }}
        >
          {skills.map((skill, index) => {
            const angle = (index / skills.length) * 2 * Math.PI + (rotation * Math.PI) / 180
            const radius = 300
            const centerX = 350
            const centerY = 200
            const x = Math.sin(angle) * radius
            const z = Math.cos(angle) * radius

            const distanceFromCenter = Math.min(
              Math.abs(angle % (2 * Math.PI)),
              Math.abs((angle % (2 * Math.PI)) - 2 * Math.PI),
            )
            const normalizedDistance = Math.min(distanceFromCenter / Math.PI, 1)
            const opacity = Math.max(0.05, 1 - normalizedDistance * 0.95)
            const zIndex = Math.floor(100 - normalizedDistance * 80)

            return (
              <motion.div
                key={skill.name}
                className="absolute flex flex-col items-center justify-center cursor-pointer select-none"
                style={{
                  left: centerX + x - 40,
                  top: centerY - 40,
                  transform: `translateZ(${z}px)`,
                  zIndex,
                  opacity,
                }}
                whileHover={{
                  scale: 1.2,
                  zIndex: 200,
                  opacity: 1,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 25,
                }}
                suppressHydrationWarning
              >
                <div className="text-7xl mb-2">{skill.icon}</div>
                <div className="text-sm font-medium text-center leading-tight max-w-24 truncate">
                  {skill.name}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SkillCarousel
