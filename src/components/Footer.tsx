'use client';
import { useState } from 'react';
import { Send, MapPin, ArrowUpRight } from 'lucide-react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! Thank you for reaching out.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
                  Send a note and I&rsquo;ll get back to you.
                </p>

                <div className="mt-8 flex items-center gap-2 text-gray-400">
                  <MapPin size={16} />
                  <span className="text-sm">Kampala, Uganda — available worldwide</span>
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

              {/* Right: form */}
              <div className="bg-white rounded-2xl p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                      required
                    />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                    required
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 resize-none"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-black text-white font-medium py-3.5 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors cursor-pointer"
                  >
                    <Send size={16} />
                    Send message
                  </button>
                </form>
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
