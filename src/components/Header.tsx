'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (item: { name: string; href: string; external?: boolean }) => {
    if (item.external) {
      window.open(item.href, '_blank');
    } else {
      document.getElementById(item.href)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Work', href: 'projects' },
    { name: 'About', href: 'about' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center py-5 max-w-7xl mx-auto">
          <button
            onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-xl font-bold tracking-tight cursor-pointer"
            style={{ color: 'var(--foreground)' }}
          >
            Silver Rubanza
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer uppercase tracking-wider"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Right side: theme toggle + CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-black dark:bg-white text-white dark:text-black text-sm px-5 py-2.5 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors cursor-pointer"
            >
              Work with me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 cursor-pointer"
              style={{ color: 'var(--foreground)' }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800" style={{ backgroundColor: 'var(--background)' }}>
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-left uppercase tracking-wider cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  setIsOpen(false);
                }}
                className="bg-black dark:bg-white text-white dark:text-black text-sm px-5 py-2.5 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors w-fit cursor-pointer"
              >
                Work with me
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
