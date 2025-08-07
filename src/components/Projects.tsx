import React from 'react';
import { ExternalLink, Github, ArrowRight, Shield, Car, Cpu } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Alcohol Sense Engine Lock and GPS System',
      description: 'Designed a smart system that detects alcohol consumption and automatically locks the vehicle engine to prevent drunk driving. Integrated GPS tracking for real-time vehicle monitoring and alert notifications for enhanced safety.',
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Arduino', 'GPS Module', 'Alcohol Sensor', 'C++', 'IoT'],
      githubUrl: 'https://github.com/manyaax',
      featured: true,
      icon: Car,
      period: 'Apr 2024 - May 2024',
      achievements: [
        'Published research paper at NCRST-24 conference',
        'Patent application filed (Application No.202411075325 A)',
        'Real-time GPS tracking implementation'
      ]
    },
    {
      title: 'Arduino RC Car',
      description: 'Developed a remote-controlled car using Arduino, integrating motor control and Bluetooth-based wireless navigation. Optimized circuit design for efficient power management and improved speed control.',
      image: 'https://images.pexels.com/photos/2882234/pexels-photo-2882234.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Arduino', 'Bluetooth', 'Motor Control', 'C++', 'Circuit Design'],
      githubUrl: 'https://github.com/manyaax',
      featured: true,
      icon: Cpu,
      period: 'June 2023',
      achievements: [
        'Wireless Bluetooth control implementation',
        'Optimized power management system',
        'Enhanced speed control mechanisms'
      ]
    },
    {
      title: 'Network Security Analysis Tool',
      description: 'Developed a comprehensive network security analysis tool using Python and various cybersecurity frameworks for vulnerability assessment and penetration testing.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Nmap', 'Wireshark', 'Network Analysis', 'Security Testing'],
      githubUrl: 'https://github.com/manyaax',
      featured: false,
      icon: Shield
    },
    {
      title: 'Cybersecurity Awareness Platform',
      description: 'Created an educational platform to raise awareness about cybersecurity best practices and common threats.',
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Educational Content', 'Web Security'],
      githubUrl: 'https://github.com/manyaax',
      featured: false,
      icon: Shield
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my key projects that showcase my cybersecurity and technical skills
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-3 mb-4">
                  <project.icon className="w-8 h-8 text-blue-600" />
                  <span className="text-sm font-medium text-blue-600">{project.period}</span>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-gray-900">{project.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {project.achievements && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-600 flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

     {/*    Other Projects }
        {otherProjects.length > 0 && (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center">Other Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {otherProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex items-center space-x-2">
                      <project.icon className="w-5 h-5 text-blue-600" />
                      <h4 className="text-xl font-semibold text-gray-900">{project.title}</h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center pt-4">
                      <a
                        href={project.githubUrl}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                      >
                        View Code <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="text-gray-600 hover:text-gray-800"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}*/}
      </div>
    </section>
  );
};

export default Projects;