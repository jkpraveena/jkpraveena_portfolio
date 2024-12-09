import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Let's Connect
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            I'm always open to new opportunities and interesting projects.
          </p>
        </div>
        
        <div className="mt-12 max-w-lg mx-auto">
          <div className="grid grid-cols-1 gap-6">
            <a
              href="mailto:praveenakamalakrishnan@gmail.com"
              className="flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </a>
            
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/jkpraveena"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900"
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href="https://in.linkedin.com/in/j-k-praveena-6a2ab628a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900"
              >
                <Linkedin className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};