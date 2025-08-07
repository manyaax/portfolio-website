import React from 'react';
import { 
  Code, 
  Database, 
  Shield, 
  Network, 
  Search, 
  Lock,
  Terminal,
  Globe
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['C', 'Java', 'HTML', 'CSS', 'JavaScript'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cybersecurity Tools',
      icon: Shield,
      skills: ['Burp Suite', 'Metasploit', 'Nmap', 'Wireshark', 'Kali Linux'],
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Network Security',
      icon: Network,
      skills: ['Network Analysis', 'Penetration Testing', 'Vulnerability Assessment', 'OSI Model'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Security Concepts',
      icon: Lock,
      skills: ['Ethical Hacking', 'Threat Intelligence', 'Malware Analysis', 'Security Protocols'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Data Structures & Algorithms',
      icon: Terminal,
      skills: ['Data Structures', 'Algorithms', 'Object-Oriented Programming', 'Problem Solving'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      skills: ['Frontend Development', 'Web Security', 'HTTP/HTTPS', 'Web Application Testing'],
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My technical skills span across cybersecurity, programming, and network security
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 inline-block mr-2 mb-2 hover:bg-gray-200 transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;