'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import ScrollProgress from '@/components/ScrollProgress'
import SkillCarousel from '@/components/SkillCarousel'
import ProjectCarousel from '@/components/ProjectCarousel'
import { translations } from '@/lib/translations'

const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false })

export default function Home() {
  const [language, setLanguage] = useState('en')
  const t = translations[language as keyof typeof translations]

  return (
    <>
      <ScrollProgress />
      <Navbar language={language} setLanguage={setLanguage} translations={t} />
      <main>
        {/* Hero */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {t.hero.greeting} <span className="text-primary">Jameson A. Olitoquit</span>
            </motion.h1>
            <motion.p
              className="text-xl text-text-secondary mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {t.hero.role}
            </motion.p>
            <motion.div
              className="flex gap-4 justify-center flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a href="#projects" className="bg-primary text-background px-6 py-3 rounded-full hover:bg-primary/80 transition-colors">
                {t.hero.viewProjects}
              </a>
              <a href="#contact" className="border border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-background transition-colors">
                {t.hero.contactMe}
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20 px-4 bg-surface">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-3xl font-bold text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {t.skills.title}
            </motion.h2>
            <SkillCarousel />
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-3xl font-bold text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {t.projects.title}
            </motion.h2>
            <ProjectCarousel />
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              className="text-3xl font-bold mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {t.about.title}
            </motion.h2>
            <motion.p
              className="text-lg text-text-secondary max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {t.about.description}
            </motion.p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-4 bg-surface">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              className="text-3xl font-bold mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {t.contact.title}
            </motion.h2>
            <motion.div
              className="flex justify-center gap-6 flex-wrap mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a href="mailto:jameson.olitoquit@gmail.com" className="bg-primary text-background px-6 py-3 rounded-full hover:bg-primary/80 transition-colors">
                {t.contact.email}
              </a>
              <a href="https://github.com/jamesonolitoquit" target="_blank" rel="noopener noreferrer" className="border border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-background transition-colors">
                {t.contact.github}
              </a>
              <a href="https://www.linkedin.com/in/jameson-olitoquit-09692428b/" target="_blank" rel="noopener noreferrer" className="border border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-background transition-colors">
                {t.contact.linkedin}
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="max-w-md mx-auto"
            >
              <form action="https://formspree.io/f/mlggbzan" method="POST" className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder={t.contact.form.name}
                    className="w-full px-4 py-3 bg-background border border-text-secondary/20 rounded-lg focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder={t.contact.form.email}
                    className="w-full px-4 py-3 bg-background border border-text-secondary/20 rounded-lg focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder={t.contact.form.message}
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-text-secondary/20 rounded-lg focus:outline-none focus:border-primary resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-background py-3 rounded-lg hover:bg-primary/80 transition-colors font-medium"
                >
                  {t.contact.form.submit}
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 text-center text-text-secondary">
          <p>&copy; 2024 Jameson A. Olitoquit. {t.footer}</p>
        </footer>
      </main>
    </>
  )
}
