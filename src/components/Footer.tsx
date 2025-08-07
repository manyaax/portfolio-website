//import React from 'react';
import { Github, Linkedin, Mail, Heart, Shield } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/manyaax', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/manya-choudhary-87a18a259', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:manya.choudhary9540@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Manya Choudhary
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Cybersecurity enthusiast passionate about protecting digital assets 
              and building secure systems through innovative security solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200 group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>Faridabad, Haryana</p>
              <p>manya.choudhary9540@gmail.com</p>
              <p>+91-9540108908</p>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-400">
                Currently pursuing B.Tech CSE (Cyber Security) and available for 
                internships and cybersecurity opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
  <div className="space-y-1 text-center md:text-left">
    <p className="text-gray-400 text-sm flex items-center justify-center md:justify-start">
      Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> by Manya Choudhary © 2025
    </p>
    <p className="text-gray-500 text-sm">
      In collaboration with{' '}
      <a
        href="https://dfreenovelish.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
       Dfree Novelish
      </a>
    </p>
  </div>
  <p className="text-gray-400 text-sm text-center md:text-right">
    Securing the digital world, one project at a time.
  </p>
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;