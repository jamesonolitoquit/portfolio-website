'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface Skill {
  name: string
  icon: string
  description: string
  highlights: string[]
}

const skills: Skill[] = [
  {
    name: 'Next.js',
    icon: '🚀',
    description:
      'Production-ready React apps with routing, server rendering, and fast delivery.',
    highlights: ['SSR', 'Routing', 'Performance'],
  },
  {
    name: 'TypeScript',
    icon: '💎',
    description:
      'Strong typing that keeps the codebase easier to scale, refactor, and maintain.',
    highlights: ['Type safety', 'DX', 'Scale'],
  },
  {
    name: 'Tailwind CSS',
    icon: '🎨',
    description:
      'Utility-first styling for responsive interfaces and consistent design systems.',
    highlights: ['Responsive UI', 'Design systems', 'Fast builds'],
  },
  {
    name: 'Firebase',
    icon: '🔥',
    description:
      'Backend services for authentication, data storage, and realtime features.',
    highlights: ['Auth', 'Database', 'Realtime'],
  },
  {
    name: 'Vercel',
    icon: '△',
    description:
      'Simple, reliable deployment with previews and a smooth delivery workflow.',
    highlights: ['Deployments', 'Preview URLs', 'Edge'],
  },
  {
    name: 'Wix Studio',
    icon: '🏗️',
    description:
      'Flexible website builds for marketing pages and client-friendly editing flows.',
    highlights: ['Marketing sites', 'CMS', 'Client edits'],
  },
  {
    name: 'React',
    icon: '⚛️',
    description:
      'Component-driven interfaces that keep interactions organized and reusable.',
    highlights: ['Components', 'State', 'Interactions'],
  },
  {
    name: 'Responsive Design',
    icon: '📱',
    description:
      'Mobile-first layouts that adapt cleanly to different screen sizes and devices.',
    highlights: ['Mobile first', 'Accessibility', 'Layout'],
  },
  {
    name: 'PostgreSQL',
    icon: '🐘',
    description:
      'Relational data modeling with reliable queries and data integrity.',
    highlights: ['Relational', 'Queries', 'Integrity'],
  },
  {
    name: 'MySQL',
    icon: '🗄️',
    description:
      'Practical database support for structured data and application records.',
    highlights: ['Structured data', 'CRUD', 'Records'],
  },
  {
    name: 'MongoDB',
    icon: '🍃',
    description:
      'Flexible document storage for content-driven and schema-light applications.',
    highlights: ['Documents', 'Flexible schema', 'Collections'],
  },
]

const SkillCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % skills.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [isPaused])

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + skills.length) % skills.length)
  }

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % skills.length)
  }

  const activeSkill = skills[activeIndex]

  return (
    <div className="mx-auto w-full max-w-6xl px-0 sm:px-2">
      <div
        className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-surface via-surface to-background/80 shadow-2xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(129,140,248,0.18),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(56,189,248,0.12),_transparent_35%)]" />

        <div className="relative flex flex-col gap-4 border-b border-primary/10 px-4 py-4 sm:px-6 sm:py-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/80">
              Core toolkit
            </p>
            <h3 className="mt-1 text-2xl font-bold text-text-primary sm:text-3xl">
              Skill Carousel
            </h3>
          </div>

          <div className="flex items-center gap-2 self-start lg:self-auto">
            <button
              type="button"
              onClick={goToPrevious}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-background/80 text-text-primary shadow-lg transition-colors hover:bg-primary hover:text-background"
              aria-label="Previous skill"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-background/80 text-text-primary shadow-lg transition-colors hover:bg-primary hover:text-background"
              aria-label="Next skill"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative px-4 py-5 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSkill.name}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]"
            >
              <div className="flex min-h-[240px] flex-col justify-between rounded-[1.75rem] border border-primary/20 bg-background/80 p-6 shadow-lg sm:p-8">
                <div>
                  <div className="mb-5 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/15 text-5xl shadow-inner sm:h-24 sm:w-24 sm:text-6xl">
                    {activeSkill.icon}
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/80">
                    {String(activeIndex + 1).padStart(2, '0')} / {String(skills.length).padStart(2, '0')}
                  </p>
                  <h4 className="mt-2 text-2xl font-bold text-text-primary sm:text-3xl">
                    {activeSkill.name}
                  </h4>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
                    {activeSkill.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {activeSkill.highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-primary/15 bg-surface/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-[1.75rem] border border-primary/20 bg-surface/70 p-5 shadow-lg sm:p-6">
                <div>
                  <h5 className="text-sm font-semibold uppercase tracking-[0.28em] text-text-secondary">
                    What it enables
                  </h5>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    <div className="rounded-2xl border border-primary/10 bg-background/70 p-4">
                      <p className="text-sm font-semibold text-text-primary">Cleaner delivery</p>
                      <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                        Use the active skill to build faster without losing structure.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-primary/10 bg-background/70 p-4">
                      <p className="text-sm font-semibold text-text-primary">Better mobile behavior</p>
                      <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                        This layout scales from phone to desktop without fixed widths.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-primary/10 bg-background/70 p-4 sm:col-span-2 lg:col-span-1">
                      <p className="text-sm font-semibold text-text-primary">Current focus</p>
                      <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                        {activeSkill.name} stays front and center while the carousel rotates automatically or with manual controls.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-primary/10 bg-background/70 p-4">
                  <p className="text-sm font-semibold text-text-primary">Interaction hint</p>
                  <p className="mt-1 text-sm text-text-secondary">
                    Tap the arrows or let it rotate. Hover pauses the motion on desktop.
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative border-t border-primary/10 px-4 py-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {skills.map((skill, index) => (
              <button
                key={skill.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium transition-all ${
                  index === activeIndex
                    ? 'border-primary bg-primary text-background shadow-lg'
                    : 'border-primary/15 bg-background/70 text-text-primary hover:border-primary/40 hover:bg-surface'
                }`}
                aria-label={`Go to ${skill.name}`}
                aria-pressed={index === activeIndex}
              >
                <span aria-hidden="true">{skill.icon}</span>
                <span>{skill.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillCarousel
