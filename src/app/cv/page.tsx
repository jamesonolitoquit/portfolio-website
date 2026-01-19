'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import ScrollProgress from '@/components/ScrollProgress'
import { translations } from '@/lib/translations'

const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false })

export default function CV() {
  const [language, setLanguage] = useState('en')
  const t = translations[language as keyof typeof translations]

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
              Full-Stack Developer & Digital Solutions Architect
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full">📧 jameson.olitoquit@gmail.com</span>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full">📱 Remote Available</span>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full">🌍 Philippines</span>
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
              Professional Summary
            </motion.h2>
            <motion.div
              className="prose prose-lg max-w-none text-text-secondary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="mb-4">
                Innovative self-taught full-stack developer with a robust technical foundation spanning web infrastructure,
                modern development practices, and client-centric digital solutions. Through intensive self-directed learning
              and hands-on experience, I&apos;ve mastered the complete web development lifecycle—from domain architecture and
                cloud deployment to performance optimization and user experience design.
              </p>
              <p className="mb-4">
                My professional journey encompasses comprehensive support for website platforms, developer tooling, and end-user
                experiences, with specialized expertise in delivering tailored web solutions. I&apos;ve architected and deployed
                applications using cutting-edge technologies including Next.js, TypeScript, Firebase, and Vercel, while
                maintaining deep proficiency in traditional platforms like WordPress, Wix Studio, and cPanel.
              </p>
              <p>
                Beyond technical implementation, my background in systems administration, technical sales, and client consultation
                has honed my ability to translate complex requirements into elegant, scalable solutions. This unique blend of
                technical mastery, problem-solving acumen, and client-focused communication enables me to deliver
                high-performance web applications that exceed expectations in both functionality and user experience.
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
              Technical Expertise
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">Frontend Development</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Next.js & React - Advanced component architecture and SSR</li>
                  <li>• TypeScript - Type-safe development and scalable codebases</li>
                  <li>• Tailwind CSS - Utility-first styling and responsive design</li>
                  <li>• Framer Motion - Smooth animations and micro-interactions</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">Backend & Infrastructure</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Firebase - Authentication, Firestore, and cloud functions</li>
                  <li>• Vercel - Serverless deployment and edge computing</li>
                  <li>• RESTful APIs - Clean API design and integration</li>
                  <li>• Database Design - Efficient data modeling and queries</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">Platforms & Tools</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Wix Studio - Advanced website building and customization</li>
                  <li>• WordPress - Theme development and plugin integration</li>
                  <li>• cPanel & WHM - Server management and hosting solutions</li>
                  <li>• Git & Version Control - Collaborative development workflows</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">Professional Skills</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Client Consultation - Requirements analysis and solution design</li>
                  <li>• Technical Sales - Solution architecture and client presentations</li>
                  <li>• Problem Solving - Complex issue resolution and optimization</li>
                  <li>• Remote Collaboration - Distributed team communication and delivery</li>
                </ul>
              </motion.div>
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
              Portfolio Highlights
            </motion.h2>
            <div className="space-y-8">
              <motion.div
                className="border border-primary/20 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2">Business Website Platform</h3>
                <p className="text-text-secondary mb-3">Full-stack business solution with authentication and admin features</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {["Next.js", "TypeScript", "Firebase", "Tailwind CSS", "Vercel"].map((tech) => (
                    <span key={tech} className="bg-primary/20 text-primary px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-text-secondary">
                  Architected a comprehensive business website with user authentication, profile management,
                  and admin dashboard. Implemented Firebase integration for real-time data and secure authentication.
                </p>
              </motion.div>

              <motion.div
                className="border border-primary/20 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-2">High-Conversion Landing Pages</h3>
                <p className="text-text-secondary mb-3">Optimized landing pages for SaaS and product launches</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"].map((tech) => (
                    <span key={tech} className="bg-primary/20 text-primary px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-text-secondary">
                  Developed modular, high-performance landing pages with advanced animations,
                  email capture systems, and responsive design optimized for conversion.
                </p>
              </motion.div>

              <motion.div
                className="border border-primary/20 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-2">Web Application Development</h3>
                <p className="text-text-secondary mb-3">Client-side applications with persistent state management</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {["Next.js", "TypeScript", "localStorage", "Tailwind CSS", "Vercel"].map((tech) => (
                    <span key={tech} className="bg-primary/20 text-primary px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-text-secondary">
                  Built interactive web applications with complex state management, data persistence,
                  and modern UI/UX patterns for optimal user experience.
                </p>
              </motion.div>
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
              Let&apos;s Build Something Together
            </motion.h2>
            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg text-text-secondary mb-8">
                I&apos;m currently available for freelance projects, remote collaboration, and full-time opportunities.
                Whether you need a modern web application, a stunning landing page, or technical consultation,
                I&apos;m ready to bring your digital vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:jameson.olitoquit@gmail.com"
                  className="bg-primary hover:bg-primary/90 text-background px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Start a Conversation
                </a>
                <a
                  href="/"
                  className="border border-primary text-primary hover:bg-primary hover:text-background px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  View My Work
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}