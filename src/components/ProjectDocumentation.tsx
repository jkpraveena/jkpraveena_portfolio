import React from 'react';
import { Project } from '../types';
import { FileText, Code, CheckCircle } from 'lucide-react';

interface ProjectDocumentationProps {
  project: Project;
}

export const ProjectDocumentation: React.FC<ProjectDocumentationProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="prose max-w-none">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{project.title}</h2>
        
        {/* Overview Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <FileText className="w-5 h-5 mr-2 text-indigo-600" />
            Project Overview
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">{project.longDescription}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features & Highlights */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <CheckCircle className="w-5 h-5 mr-2 text-indigo-600" />
            Key Features & Achievements
          </h3>
          <ul className="space-y-3">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 mr-2"></span>
                <span className="text-gray-600">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Details */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <Code className="w-5 h-5 mr-2 text-indigo-600" />
            Technical Implementation
          </h3>
          <div className="bg-gray-50 rounded-lg p-6">
            <ul className="space-y-4">
              {project.technicalDetails.map((detail, index) => (
                <li key={index} className="text-gray-600">
                  <span className="font-medium text-gray-900">{detail.title}:</span>
                  <p className="mt-1">{detail.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            View Source Code
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Live Demo
            </a>
          )}
          {project.videoUrl && (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Watch Demo Video
            </a>
          )}
        </div>
      </div>
    </div>
  );
};