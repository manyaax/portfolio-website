import React from 'react';
import profile from '../assets/profile.jpeg';
import resumeFile from '../assets/Manya_resume.pdf';

import { Award, Code, Coffee, Users, Shield, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '3+' },
    { icon: Award, label: 'Certifications', value: '6+' },
    { icon: Target, label: 'CGPA', value: '8.21' },
   // { icon: Shield, label: 'Security Focus', value: '100%' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                About Me
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a motivated Cybersecurity enthusiast with a strong foundation in network security 
                and ethical hacking. Currently pursuing B.Tech CSE with specialization in Cyber Security 
                and Threat Intelligence at Manav Rachna University.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm passionate about protecting digital assets and contributing to building secure systems 
                while continuously enhancing my expertise in cybersecurity technologies and methodologies.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not studying security protocols or working on projects, you'll find me playing 
                badminton, listening to music, or exploring the latest cybersecurity trends and tools.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Download CV Button */}
            <div>
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                Download Resume
              </button>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <div className="w-96 h-[500px] overflow-hidden shadow-xl rounded-2xl border-4 border-blue-300">
  <img
    src={profile}
    alt="Profile"
    className="w-full h-full object-cover"
  />
</div>


            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;