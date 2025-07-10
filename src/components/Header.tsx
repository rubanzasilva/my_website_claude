'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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
            <a href="#home" className="text-white hover:text-accent transition-colors">
              Home
            </a>
            <a href="#projects" className="text-white hover:text-accent transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-white hover:text-accent transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
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
              <a 
                href="#home" 
                className="text-white hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a 
                href="#projects" 
                className="text-white hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-white hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;