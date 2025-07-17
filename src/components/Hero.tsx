'use client';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light mb-6">
              Hi, I am <span className="gradient-text font-semibold">Rubanza Silver</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              A coder with a background in Software Engineering. My work focuses on the 
              machine learning lifecycle from data analysis to model deployment, 
              integrated into software solutions.
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row justify-center lg:justify-start items-center gap-4 mb-8">
              <button 
                onClick={() => scrollToSection('projects')}
                className="btn-primary px-8 py-3 rounded-full text-white font-medium w-full sm:w-auto"
              >
                View My Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-secondary px-8 py-3 rounded-full text-accent font-medium w-full sm:w-auto"
              >
                Contact Me
              </button>
            </div>

            {/* Learn more button for larger screens */}
            <div className="hidden lg:block">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-accent hover:text-white transition-colors flex items-center gap-2 mx-auto lg:mx-0"
              >
                <span>Learn more about me</span>
                <ChevronDown size={20} />
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-blue-400 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-primary">
                  <Image
                    src="https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/silverPotraitCompressed.webp"
                    alt="Rubanza Silver"
                    width={384}
                    height={384}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator - visible on mobile */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce lg:hidden">
          <ChevronDown size={32} className="text-accent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;