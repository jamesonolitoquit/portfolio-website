'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun, Languages } from 'lucide-react'

interface NavbarProps {
  language: string
  setLanguage: (lang: string) => void
  translations: any
}

export default function Navbar({ language, setLanguage, translations }: NavbarProps) {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="fixed top-0 w-full bg-surface/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold">Jameson Olitoquit</div>
          <div className="hidden md:flex space-x-8">
            <a href="#hero" className="hover:text-primary transition-colors">{translations.nav.home}</a>
            <a href="#projects" className="hover:text-primary transition-colors">{translations.nav.projects}</a>
            <a href="#skills" className="hover:text-primary transition-colors">{translations.nav.skills}</a>
            <a href="#about" className="hover:text-primary transition-colors">{translations.nav.about}</a>
            <a href="#contact" className="hover:text-primary transition-colors">{translations.nav.contact}</a>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage(language === 'en' ? 'tl' : 'en')}
              className="p-2 rounded-full hover:bg-surface transition-colors"
              title={language === 'en' ? 'Switch to Tagalog' : 'Switch to English'}
            >
              <Languages size={20} />
            </button>
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-full hover:bg-surface transition-colors">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}