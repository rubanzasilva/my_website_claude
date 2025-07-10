import { Github, Linkedin, Mail, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-secondary/30 border-t border-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, projects, or collaborations. 
            Feel free to reach out if you'd like to work together.
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/rubanzasilva"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-secondary hover:bg-accent text-white rounded-full transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/silver-rubanza/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-secondary hover:bg-accent text-white rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:rubanzasilva@gmail.com"
              className="flex items-center justify-center w-12 h-12 bg-secondary hover:bg-accent text-white rounded-full transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.rubanzasilver.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-secondary hover:bg-accent text-white rounded-full transition-colors"
              aria-label="Website"
            >
              <Globe size={20} />
            </a>
          </div>

          <div className="border-t border-secondary/20 pt-8">
            <p className="text-gray-400 text-sm">
              © {currentYear} Rubanza Silver. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;