import React from 'react';
import { Code, Server, Layout, Database, PieChart, Brain } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

export const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: <Layout className="w-6 h-6 text-indigo-600" />,
      skills: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Next.js', 'HTML', 'CSS']
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-6 h-6 text-indigo-600" />,
      skills: ['Node.js', 'Express', 'RESTful APIs', 'Python']
    },
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6 text-indigo-600" />,
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java','C','C++']
    },
    {
      title: 'Data Visualization',
      icon: <PieChart className="w-6 h-6 text-indigo-600" />,
      skills: [
        'Interactive Dashboards',
        'JSON Data Handling',
        'Vite',
        'HTML/CSS',
        'JavaScript',
        'TypeScript'
      ]
    },
    {
      title: 'Database',
      icon: <Database className="w-6 h-6 text-indigo-600" />,
      skills: ['MongoDB', 'PostgreSQL', 'MySQL']
    },
    {
      title: 'AI & Machine Learning',
      icon: <Brain className="w-6 h-6 text-indigo-600" />,
      skills: [
        'TensorFlow',
        'PyTorch',
        'Scikit-Learn',
        'Keras',
        'CNNs',
        'NLP',
        'Supervised Learning',
        'Unsupervised Learning',
        'Model Evaluation'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Technical Skills
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            A comprehensive overview of my technical expertise and capabilities.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="ml-2 text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-white text-gray-700 border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};