'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  actualTheme: 'light' | 'dark'
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light')
  const [actualTheme, setActualTheme] = useState<'light' | 'dark'>('light')

  const setTheme = (nextTheme: Theme) => {
    if (nextTheme === 'light') {
      setThemeState('light')
      return
    }

    setThemeState('light')
  }

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null
    if (stored && stored !== 'dark' && stored !== 'system') {
      setThemeState('light')
      return
    }

    setThemeState('light')
  }, [])

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add('light')
    setActualTheme('light')
    localStorage.setItem('theme', 'light')
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, actualTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}