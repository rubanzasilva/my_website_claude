'use client';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16"
    >
      <div className="w-full mx-auto max-md:px-4 md:max-lg:max-w-screen-md md:max-lg:px-6 lg:max-w-screen-2xl lg:px-8">
        <div className="max-w-screen-xl mx-auto grid items-center grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16">
          {/* Left: message */}
          <div className="max-lg:order-2 max-lg:text-center lg:text-left">
            <h1 className="font-heading font-black text-ploy-text-primary tracking-tight max-md:text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-balance">
              I build production-ready ML systems, end to end.
            </h1>
            <p className="mt-7 text-ploy-text-secondary max-md:text-lg md:text-xl leading-relaxed max-w-xl max-lg:mx-auto">
              Machine learning engineer and software developer with 7+ years across the ML lifecycle—from problem scoping and data engineering to building, serving, deploying, and monitoring models.
            </p>

            <div className="mt-9 flex items-center gap-5 max-lg:justify-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 rounded-full bg-ploy-button-primary-background px-7 py-4 text-base font-medium text-ploy-button-primary-text transition-opacity hover:opacity-90 cursor-pointer"
              >
                Work with me
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-base font-medium text-ploy-text-primary underline decoration-ploy-accent-primary decoration-2 underline-offset-4 transition-opacity hover:opacity-70 cursor-pointer"
              >
                View my work
              </button>
            </div>

            <p className="mt-8 font-eyebrow text-xs uppercase tracking-[0.08em] text-ploy-text-secondary max-w-md max-lg:mx-auto">
              I am available for freelance & contract work
            </p>
          </div>

          {/* Right: portrait cluster */}
          <div className="max-lg:order-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-4 rounded-[2rem] bg-ploy-accent-secondary/60 rotate-3" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-ploy-border-primary bg-ploy-neutral-primary-s0 -rotate-2 shadow-sm">
                <Image
                  alt="Silver Rubanza"
                  src="https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/silverPotraitCompressed.webp"
                  width={480}
                  height={520}
                  className="w-full h-[24rem] object-cover object-[50%_10%]"
                  priority
                />
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-2xl bg-ploy-neutral-primary-s0 border border-ploy-border-primary px-4 py-3 shadow-sm rotate-2">
                <span className="flex items-center gap-2 font-eyebrow text-xs uppercase tracking-[0.08em] text-ploy-text-primary">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-ploy-accent-primary" />
                  Available for work
                </span>
              </div>
              <div className="absolute -top-6 -right-3 h-14 w-14 rounded-full bg-ploy-accent-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
