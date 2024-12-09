import React from 'react';
import { experiences, education, certificates } from '../data/experience';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

interface Education {
  degree: string;
  school: string;
  period: string;
  description: string;
}

interface Certificate {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
  imageUrl: string;
}

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Experience, Education & Certificates
          </h2>
        </div>

        {/* Experience Section */}
        <div className="mt-12">
          <div className="flex items-center mb-6 justify-center">
            <Briefcase className="w-6 h-6 text-indigo-600 mr-2" />
            <h3 className="text-3xl font-extrabold text-gray-900 text-center">Experience</h3>
          </div>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="bg-gray-50 rounded-lg p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">{exp.title}</h4>
                    <p className="text-indigo-600">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500">{exp.period}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.description.map((item, index) => (
                    <li key={index} className="text-gray-600">• {item}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-12">
          <div className="flex items-center mb-6 justify-center">
            <GraduationCap className="w-6 h-6 text-indigo-600 mr-2" />
            <h3 className="text-3xl font-extrabold text-gray-900 text-center">Education</h3>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            {education.map((edu: Education, index: number) => (
              <div key={index} className="mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">{edu.degree}</h4>
                    <p className="text-indigo-600">{edu.school}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500">{edu.period}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <div className="mt-12">
          <div className="flex items-center mb-6 justify-center">
            <Award className="w-6 h-6 text-indigo-600 mr-2" />
            <h3 className="text-3xl font-extrabold text-gray-900 text-center">Certificates</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert: Certificate) => (
              <div key={cert.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                src={cert.imageUrl}
                alt={cert.title}
                className="w-full h-48 object-contain"
                />
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900">{cert.title}</h4>
                  <p className="text-indigo-600">{cert.company}</p>
                  <p className="mt-1 text-gray-500">{cert.period}</p>
                  <ul className="mt-4 space-y-2">
                    {cert.description.map((desc, index) => (
                      <li key={index} className="text-gray-600">• {desc}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};