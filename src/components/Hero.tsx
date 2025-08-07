import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Shield } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden dark:bg-gray-900 transition-colors duration-500"
    >
      {/* Background gradient light/dark 
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500"></div>
*/}
      {/* Animated blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 dark:bg-indigo-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute -bottom-8 left-20 w-80 h-80 bg-emerald-300 dark:bg-emerald-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="mx-auto w-32 h-32 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
            <Shield className="w-16 h-16" />
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Manya Choudhary
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cybersecurity Enthusiast specializing in Network Security and Ethical Hacking
            </p>

            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              B.Tech CSE with specialization in Cyber Security and Threat Intelligence
            </p>
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-6">
            {[
              { href: "https://github.com/manyaax", icon: Github },
              { href: "https://www.linkedin.com/in/manya-choudhary-87a18a259", icon: Linkedin },
             { href: "mailto:manya.choudhary9540@gmail.com?subject=Let's Connect&body=Hi Manya,", icon: Mail },

            ].map(({ href, icon: Icon }, idx) => (
              <a
  key={idx}
  href={href}
  className="relative group p-3 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
>
  <Icon className="w-6 h-6 text-gray-700 dark:text-white group-hover:text-blue-600" />
  <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
    {href.startsWith("mailto:") ? "Send Email" : href.includes("linkedin") ? "LinkedIn" : "GitHub"}
  </span>
</a>

            ))}
          </div>

          {/* CTA buttons */}
<div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
  <button
    onClick={() =>
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    }
    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
  >
    View My Work
  </button>
  <button
    onClick={() =>
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }
    className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-600"
  >
    Get In Touch
  </button>
</div>

        </div>

        <button
          onClick={scrollToNext}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-500" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
