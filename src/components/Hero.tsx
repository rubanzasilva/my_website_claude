'use client';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="h-screen flex flex-col justify-center pt-20">
      <div className="container mx-auto px-6 lg:px-12 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto w-full">

          {/* Left Column - Content */}
          <div className="order-2 lg:order-1">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.95] mb-6 tracking-tight"
              style={{ color: 'var(--foreground)' }}
            >
              I build<br />
              production-ready<br />
              ML systems,<br />
              end to end.
            </h1>

            <p className="text-base lg:text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
              Machine learning engineer and software developer with 7+ years across the ML lifecycle — data analysis, modeling, deployment, and monitoring, wired into real software.
            </p>

            <div className="flex items-center gap-6 mb-8">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-black dark:bg-white text-white dark:text-black px-6 py-3.5 rounded-full flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors text-sm font-medium cursor-pointer"
              >
                Work with me <ArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="underline underline-offset-4 font-medium text-sm hover:opacity-70 transition-opacity cursor-pointer"
                style={{ color: 'var(--foreground)' }}
              >
                View my work
              </button>
            </div>

            {/* Tech stack bar */}
            <div className="text-[11px] text-gray-400 uppercase tracking-widest font-mono">
              PyTorch · FastAI · BentoML · Modal · React — Available for freelance & contract work
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Purple border frame */}
              <div className="relative w-64 h-72 sm:w-72 sm:h-80 lg:w-80 lg:h-[22rem] xl:w-[22rem] xl:h-[26rem]">
                <div className="absolute inset-0 rounded-2xl border-[6px] border-purple-200 dark:border-purple-800 rotate-2"></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/silverPotraitCompressed.webp"
                    alt="Silver Rubanza"
                    fill
                    className="object-cover object-[center_5%]"
                    priority
                  />
                </div>
                {/* Yellow accent dot */}
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#d4e926] rounded-full"></div>
              </div>

              {/* Available badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-[#d4e926] rounded-full"></div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-gray-700 dark:text-gray-300 whitespace-nowrap">Available for work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
