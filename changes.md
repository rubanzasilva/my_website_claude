# Changes

## Removed dark theme toggle from the header

Date: 2026-09-03

### Summary
The dark/light theme toggle was removed from the site header navigation so users can no longer switch themes from the interface.

### Updated file
- `src/components/Header.tsx`

### What changed
- Removed the `ThemeToggle` import.
- Removed the theme toggle button from the desktop header actions.
- Removed the theme toggle button from the mobile header actions.
- Kept the rest of the navigation, resume link, email link, and CTA button behavior unchanged.

### Side-by-side code change

Before:
```tsx
'use client';
import { useState } from 'react';
import { Menu, X, Mail, FileText } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
```

After:
```tsx
'use client';
import { useState } from 'react';
import { Menu, X, Mail } from 'lucide-react';
```

Before:
```tsx
          {/* Right side: theme toggle + resume + mail + CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <a
              href="https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/Silver_Rubanza_MLE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-eyebrow text-sm text-ploy-text-secondary hover:text-ploy-text-primary transition-colors uppercase tracking-wider"
            >
              Resume
            </a>
```

After:
```tsx
          {/* Right side: resume + mail + CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/Silver_Rubanza_MLE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-eyebrow text-sm text-ploy-text-secondary hover:text-ploy-text-primary transition-colors uppercase tracking-wider"
            >
              Resume
            </a>
```

Before:
```tsx
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 cursor-pointer text-ploy-text-primary"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
```

After:
```tsx
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 cursor-pointer text-ploy-text-primary"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
```

### Notes
This change only affects the visible UI control. The underlying theme logic remains in place in the project, but it is no longer exposed to users through the header.

## Forced the site to light mode only

Date: 2026-09-03

### Summary
The app was updated to force the site to always render in light mode while disabling dark-mode behavior entirely, since the dark theme is currently causing rendering issues.

### Updated file
- `src/components/ThemeProvider.tsx`

### What changed
- Defaulted the application theme to `light`.
- Removed dark-mode class switching from the root HTML element.
- Ensured `localStorage` is set to `'light'` and not persisted as dark/system.
- Prevented dark or system theme selections from being applied.

### Side-by-side code change

Before:
```tsx
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system')
  const [actualTheme, setActualTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null
    if (stored) {
      setTheme(stored)
    }
  }, [])

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      root.classList.add(systemTheme)
      setActualTheme(systemTheme)
    } else {
      root.classList.add(theme)
      setActualTheme(theme)
    }

    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if (theme === 'system') {
        const systemTheme = mediaQuery.matches ? 'dark' : 'light'
        const root = window.document.documentElement
        root.classList.remove('light', 'dark')
        root.classList.add(systemTheme)
        setActualTheme(systemTheme)
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])
```

After:
```tsx
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
```

### Result
The site now stays in light mode regardless of OS/browser dark-mode preferences or stored theme values.
