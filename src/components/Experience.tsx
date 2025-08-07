import React from 'react';
import { Calendar, MapPin, Award, BookOpen, Trophy } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Cyber Security Intern',
      company: 'Agratas Academy Pvt Ltd',
      location: 'Remote',
      period: '11 Jun - 10 Aug 2024',
      description: 'Gained hands-on experience in cybersecurity practices, malware analysis, and network security protocols.',
      achievements: [
        'Analyzed malware behavior, detection, and mitigation techniques to strengthen cybersecurity',
        'Studied OSI layers, their roles in network communication, and applied knowledge in practical scenarios',
        'Assisted in data collection, analysis, and synthesis for research projects'
      ],
      technologies: ['Malware Analysis', 'Network Security', 'OSI Model', 'Research']
    }
  ];

  const education = [
    {
      degree: 'B.Tech CSE (Cyber Security and Threat Intelligence)',
      school: 'Manav Rachna University',
      location: 'Faridabad, Haryana',
      period: '2022 - 2026',
      description: 'CGPA: 8.21',
      specialization: 'Specialization in Cyber Security and Threat Intelligence'
    },
    {
      degree: 'Senior Secondary (12th)',
      school: 'Mody School, CBSE',
      location: 'Lakshmangarh, Sikar',
      period: '2022',
      description: '86.80%'
    },
    {
      degree: 'Secondary (10th)',
      school: 'Mody School, CBSE',
      location: 'Lakshmangarh, Sikar',
      period: '2020',
      description: '74.40%'
    }
  ];

  const certifications = [
    {
      name: 'SAWIT.AI Learnathon Certificate',
      issuer: 'SAWIT.AI',
      date: '10/2024'
    },
    {
      name: 'Social Networks Course',
      issuer: 'NPTEL',
      date: '07/2024 - 10/2024'
    },
    {
      name: 'Learnathon Certificate',
      issuer: 'ICT Academy',
      date: '08/2023 - 09/2023'
    },
    {
      name: 'CCNAv7: Introduction to Networks',
      issuer: 'Cisco Networking Academy',
      date: '09/2023'
    },
    {
      name: 'Cyber Shikshaa Fundamentals',
      issuer: 'QHA',
      date: '03/2023'
    }
  ];

  const achievements = [
    {
      title: 'Letter of Merit',
      organization: 'Cisco Networking Academy',
      date: '09/2023'
    },
    {
      title: '1st Position in G20 Quiz',
      organization: 'IEEE MRU',
      date: '08/2023'
    },
    {
      title: '2nd Position in MRU_CODE#MARCH',
      organization: 'Manav Rachna University',
      date: '03/2023'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey and professional experience in cybersecurity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience & Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Calendar className="w-6 h-6 mr-3 text-blue-600" />
              Experience & Education
            </h3>
            
            <div className="space-y-8">
              {/* Experience */}
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-blue-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">{exp.title}</h4>
                        <p className="text-blue-600 font-medium">{exp.company}</p>
                        <div className="flex items-center text-sm text-gray-600 mt-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="mr-4">{exp.location}</span>
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                      
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">Key Responsibilities:</h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-gray-600 flex items-start">
                              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Education */}
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-purple-200 last:border-l-0">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 rounded-full"></div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">{edu.degree}</h4>
                        <p className="text-purple-600 font-medium">{edu.school}</p>
                        <div className="flex items-center text-sm text-gray-600 mt-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="mr-4">{edu.location}</span>
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed font-medium">{edu.description}</p>
                      {edu.specialization && (
                        <p className="text-sm text-gray-500">{edu.specialization}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Award className="w-6 h-6 mr-3 text-green-600" />
              Certifications & Achievements
            </h3>
            
            {/* Certifications */}
            <div className="mb-12">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-green-600" />
                Certifications
              </h4>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <p className="font-medium text-gray-900">{cert.name}</p>
                    <p className="text-sm text-gray-600">{cert.issuer} • {cert.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-yellow-600" />
                Awards & Achievements
              </h4>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <p className="font-medium text-gray-900">{achievement.title}</p>
                    <p className="text-sm text-gray-600">{achievement.organization} • {achievement.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Research Publications */}
            <div className="mt-12">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Research Publications</h4>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <p className="font-medium text-gray-900">Drunk Driving Prevention System</p>
                  <p className="text-sm text-gray-600">A. Swami, Manya, M. Gupta, N. Thakur</p>
                  <p className="text-sm text-gray-500">Patent Application No.202411075325 A - Issued 18 Oct, 2024 (Pending)</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <p className="font-medium text-gray-900">Alcohol Sense Engine Lock and GPS System</p>
                  <p className="text-sm text-gray-600">National Conference on Researches in Science and Technology (NCRST-24)</p>
                  <p className="text-sm text-gray-500">July 2024, Delhi, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;