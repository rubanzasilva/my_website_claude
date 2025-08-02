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
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Projects', href: 'projects' },
    // { name: 'Skills', href: 'skills' },
    // { name: 'Experience', href: 'experience' },
    { name: 'Resume', href: 'https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/Silver_Rubanza_Data_Scientist.pdf', external: true },
    { name: 'Contact', href: 'contact' },
    
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-sm border-b border-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold">
            {/*<span className="text-black dark:text-white">Rubanza</span>*/}
            <span className="gradient-text">Rubanza</span>
            <span className="gradient-text">Silver</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="gradient-text hover:text-gray-800 dark:hover:text-white transition-colors cursor-pointer"
                  /* className="text-black dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors cursor-pointer" */
                >
                  {item.name}
                </button>
              ))}
            </nav>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              /*className="text-black dark:text-white p-2"*/
              className="gradient-text hover:text-gray-800 dark:hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-secondary/20">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  /*className="text-black dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors text-left"*/
                  className="gradient-text hover:text-gray-800 dark:hover:text-white transition-colors cursor-pointer text-left"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;