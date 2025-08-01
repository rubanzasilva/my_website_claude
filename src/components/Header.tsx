'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

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
            <span className="text-white">Rubanza</span>
            <span className="gradient-text">Silver</span>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-secondary/20">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="text-gray-300 hover:text-white transition-colors text-left"
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