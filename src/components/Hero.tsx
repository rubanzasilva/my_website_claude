'use client';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
            Hi, I am <span className="gradient-text font-semibold">Rubanza Silver</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            A coder with a background in Software Engineering. My work focuses on the 
            machine learning lifecycle from data analysis to model deployment, 
            integrated into software solutions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <button 
              onClick={scrollToProjects}
              className="btn-primary px-8 py-3 rounded-full text-white font-medium"
            >
              View My Projects
            </button>
            <button 
              onClick={scrollToContact}
              className="btn-secondary px-8 py-3 rounded-full text-accent font-medium"
            >
              Contact Me
            </button>
          </div>

          <div className="relative w-64 h-64 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-blue-400 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-primary">
                <Image
                  src="https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/silverPotraitCompressed.webp"
                  alt="Rubanza Silver"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-accent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;