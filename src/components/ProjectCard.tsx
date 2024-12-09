import React, { useState } from 'react';
import { Github, ExternalLink, Play, ChevronRight } from 'lucide-react';
import { Project } from '../types';
import { ProjectDocumentation } from './ProjectDocumentation';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showDocumentation, setShowDocumentation] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
          <div className="flex space-x-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900"
            >
              <Github className="w-5 h-5" />
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            {project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900"
              >
                <Play className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
        <p className="mt-2 text-gray-600">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          onClick={() => setShowDocumentation(!showDocumentation)}
          className="mt-4 flex items-center text-indigo-600 hover:text-indigo-700"
        >
          {showDocumentation ? 'Hide Details' : 'View Details'}
          <ChevronRight className={`w-4 h-4 ml-1 transform transition-transform ${
            showDocumentation ? 'rotate-90' : ''
          }`} />
        </button>
      </div>
      {showDocumentation && (
        <div className="border-t border-gray-200">
          <ProjectDocumentation project={project} />
        </div>
      )}
    </div>
  );
};