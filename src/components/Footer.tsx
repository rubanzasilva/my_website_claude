'use client';
import { useState } from 'react';
import { Mail, Copy, Check, MapPin, ArrowUpRight } from 'lucide-react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const email = 'abc@silverrubanza.com';
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>('idle');

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('error');
      window.prompt('Copy this email address:', email);
    }
  };

  return (
    <footer id="contact" className="pb-8">
      <div className="w-full mx-auto max-md:px-4 md:max-lg:max-w-screen-md md:max-lg:px-6 lg:max-w-screen-2xl lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          {/* Dark panel with rounded top */}
          <div className="bg-ploy-neutral-inverse rounded-[2rem] p-8 md:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left: heading + info */}
              <div>
                <h2 className="font-heading font-black text-white max-md:text-4xl md:text-5xl leading-[0.95] tracking-tight">
                  Let&rsquo;s work together
                </h2>
                <p className="mt-5 text-lg text-gray-400 leading-relaxed">
                  Have an ML system to build, deploy, or improve?<br />
                  Send me an email and I&rsquo;ll get back to you.
                </p>

                <div className="mt-8 flex items-center gap-2 text-gray-400">
                  <MapPin size={16} />
                  <span className="text-sm">I work remotely and am available worldwide</span>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/silver-rubanza/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-400 transition-colors"
                  >
                    <FaLinkedin size={18} />
                  </a>
                  <a
                    href="https://x.com/rubanzasil/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-400 transition-colors"
                  >
                    <FaTwitter size={18} />
                  </a>
                  <a
                    href="https://github.com/rubanzasilva"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-400 transition-colors"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href="https://www.kaggle.com/rubanzasilva"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 border border-gray-600 rounded-full px-4 py-2 hover:text-white hover:border-gray-400 transition-colors"
                  >
                    Kaggle
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* Right: email contact */}
              <div className="self-center rounded-2xl bg-white p-6 text-gray-950 sm:p-10">
                <p className="font-eyebrow text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                  Get in touch
                </p>
                <h3 className="mt-5 font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                  Have a project in mind? Let&rsquo;s talk.
                </h3>
                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-5 py-4 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-950"
                  >
                    <Mail size={20} aria-hidden="true" />
                    Email me
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-gray-950 bg-white px-5 py-4 text-sm font-medium text-gray-950 transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-950"
                  >
                    {copyStatus === 'copied' ? <Check size={20} aria-hidden="true" /> : <Copy size={20} aria-hidden="true" />}
                    {copyStatus === 'copied' ? 'Copied!' : 'Copy email'}
                  </button>
                </div>
                <p role="status" className="sr-only">
                  {copyStatus === 'copied' && 'Email address copied to clipboard.'}
                  {copyStatus === 'error' && 'Automatic copying was unavailable. Copy the address from the dialog.'}
                </p>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-700 mt-14 pt-8">
              <p className="font-eyebrow text-[11px] uppercase tracking-wider text-gray-500">
                © 2026 Silver Rubanza. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
