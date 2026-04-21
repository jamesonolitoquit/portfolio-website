'use client'

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextValue {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
}

const THEME_KEY = 'theme'
const THEME_CHANGE_EVENT = 'theme-change'

export function ThemeProvider({ children, defaultTheme = 'dark' }: ThemeProviderProps) {
  const getSnapshot = () => {
    if (typeof window === 'undefined') {
      return defaultTheme
    }

    const storedTheme = window.localStorage.getItem(THEME_KEY)
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme as Theme
    }

    return defaultTheme
  }

  const subscribe = (callback: () => void) => {
    if (typeof window === 'undefined') {
      return () => undefined
    }

    const handler = () => callback()
    window.addEventListener('storage', handler)
    window.addEventListener(THEME_CHANGE_EVENT, handler)

    return () => {
      window.removeEventListener('storage', handler)
      window.removeEventListener(THEME_CHANGE_EVENT, handler)
    }
  }

  const theme = useSyncExternalStore(subscribe, getSnapshot, () => defaultTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.classList.toggle('light', theme === 'light')
  }, [theme])

  const value = useMemo(
    () => ({
      theme,
      setTheme: (nextTheme: Theme) => {
        if (typeof window === 'undefined') {
          return
        }

        window.localStorage.setItem(THEME_KEY, nextTheme)
        window.dispatchEvent(new Event(THEME_CHANGE_EVENT))
      },
    }),
    [theme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}