'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ScrollProgress from '@/components/ScrollProgress'
import { translations } from '@/lib/translations'

const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false })

export default function CV() {
  const [language, setLanguage] = useState('en')
  const t = translations[language as keyof typeof translations]
  const cv = t.cv

  const expertiseColumns = [
    cv.expertise.frontend,
    cv.expertise.backend,
    cv.expertise.platforms,
    cv.expertise.professional,
  ]

  return (
    <>
      <ScrollProgress />
      <Navbar language={language} setLanguage={setLanguage} translations={t} />
      <main className="pt-16">
        {/* CV Header */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-surface">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Jameson A. Olitoquit
            </motion.h1>
            <motion.p
              className="text-xl text-text-secondary mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {cv.header.role}
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full">📧 jameson.olitoquit@gmail.com</span>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full">📱 {cv.header.remote}</span>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full">🌍 {cv.header.location}</span>
            </motion.div>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl font-bold mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {cv.summary.title}
            </motion.h2>
            <motion.div
              className="prose prose-lg max-w-none text-text-secondary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="mb-4">
                {cv.summary.p1}
              </p>
              <p className="mb-4">
                {cv.summary.p2}
              </p>
              <p>
                {cv.summary.p3}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skills & Technologies */}
        <section className="py-16 px-4 bg-surface">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl font-bold mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {cv.expertise.title}
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {expertiseColumns.map((column, index) => (
                <motion.div
                  key={column.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-primary">{column.title}</h3>
                  <ul className="space-y-2 text-text-secondary">
                    {column.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience & Projects */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl font-bold mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {cv.highlights.title}
            </motion.h2>
            <div className="space-y-8">
              {cv.highlights.projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="border border-primary/20 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-text-secondary mb-3">{project.subtitle}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-primary/20 text-primary px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-text-secondary">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Availability */}
        <section className="py-16 px-4 bg-surface">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl font-bold mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {cv.cta.title}
            </motion.h2>
            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg text-text-secondary mb-8">
                {cv.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:jameson.olitoquit@gmail.com"
                  className="bg-primary hover:bg-primary/90 text-background px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  {cv.cta.startConversation}
                </a>
                <Link
                  href="/"
                  className="border border-primary text-primary hover:bg-primary hover:text-background px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  {cv.cta.viewWork}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}