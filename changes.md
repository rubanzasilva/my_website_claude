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
