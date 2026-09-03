'use client';
import { useState } from 'react';
import { Menu, X, Mail } from 'lucide-react';

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-ploy-background-primary/70 backdrop-blur-md">
      <div className="w-full mx-auto max-md:px-4 md:max-lg:max-w-screen-md md:max-lg:px-6 lg:max-w-screen-2xl lg:px-8">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center py-5">
          <button
            onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-heading text-xl font-bold text-ploy-text-primary tracking-tight cursor-pointer"
          >
            Silver Rubanza
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="font-eyebrow text-sm text-ploy-text-secondary hover:text-ploy-text-primary transition-colors cursor-pointer uppercase tracking-wider"
              >
                {item.name}
              </button>
            ))}
          </nav>

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
            <a
              href="mailto:abc@silverrubanza.com"
              className="text-ploy-text-secondary hover:text-ploy-text-primary transition-colors"
              aria-label="Email me"
            >
              <Mail size={18} />
            </a>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-ploy-button-primary-background text-ploy-button-primary-text text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity cursor-pointer"
            >
              Work with me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 cursor-pointer text-ploy-text-primary"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-ploy-border-primary bg-ploy-background-primary">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="text-sm text-ploy-text-secondary hover:text-ploy-text-primary transition-colors text-left uppercase tracking-wider cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
              <a
                href="https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/Silver_Rubanza_MLE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ploy-text-secondary hover:text-ploy-text-primary transition-colors uppercase tracking-wider"
              >
                Resume
              </a>
              <a
                href="mailto:abc@silverrubanza.com"
                className="flex items-center gap-2 text-sm text-ploy-text-secondary hover:text-ploy-text-primary transition-colors uppercase tracking-wider"
              >
                <Mail size={16} />
                Email me
              </a>
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  setIsOpen(false);
                }}
                className="bg-ploy-button-primary-background text-ploy-button-primary-text text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity w-fit cursor-pointer"
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
