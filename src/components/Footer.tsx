'use client';
import { useState } from 'react';
import { Send, Globe } from 'lucide-react';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import KaggleIcon from './icons/KaggleIcon';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
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

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-secondary/10 border-t border-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Get In Touch</h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-secondary/10 rounded-lg p-8">
            <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Send Me a Message</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-600 dark:text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-primary/50 border border-secondary/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 dark:text-gray-300 mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-primary/50 border border-secondary/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 dark:text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 bg-primary/50 border border-secondary/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  className="w-full px-4 py-3 bg-primary/50 border border-secondary/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/80 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-secondary/10 rounded-lg p-8">
            <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Contact Information</h4>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <MdEmail className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-gray-800 dark:text-white font-medium">Email</p>
                  <p className="text-gray-600 dark:text-gray-300">abc@rubanzasilver.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-gray-800 dark:text-white font-medium">Location</p>
                  <p className="text-gray-600 dark:text-gray-300">Kampala, Uganda</p>
                </div>
              </div>
            </div>

            <div>
              <h5 className="text-gray-800 dark:text-white font-medium mb-4">Connect With Me</h5>
              <div className="flex items-center space-x-4">
                <a href="mailto:abc@rubanzasilver.com" className="gradient-text hover:opacity-75 transition-opacity">
                  <MdEmail size={24} />
                </a>
                <a href="https://www.linkedin.com/in/silver-rubanza/" target="_blank" rel="noopener noreferrer" className="gradient-text hover:opacity-75 transition-opacity">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://x.com/countfettucine/" target="_blank" rel="noopener noreferrer" className="gradient-text hover:opacity-75 transition-opacity">
                  <FaTwitter size={24} />
                </a>
                <a href="https://github.com/rubanzasilva" target="_blank" rel="noopener noreferrer" className="gradient-text hover:opacity-75 transition-opacity">
                  <FaGithub size={24} />
                </a>
                <a href="https://www.kaggle.com/rubanzasilva" target="_blank" rel="noopener noreferrer" className="gradient-text hover:opacity-75 transition-opacity">
                  <KaggleIcon size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary/20 pt-8 mt-12 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} Rubanza Silver. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;