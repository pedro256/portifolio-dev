import React, { useState } from 'react';
import { ExternalLink, Code, Info } from 'lucide-react';
import { projects } from '../data/projects';
import { useDevMode } from '../context/DevModeContext';

const Projects: React.FC = () => {
  const { devMode } = useDevMode();
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'mobile'>('all');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeTab);

  return (
    <section id="projects" className="py-20 bg-gray-950/80">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-500">
              Meus Projetos
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Uma vitrine do meu trabalho recente, incluindo aplicativos web, móveis e outras soluções
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-gray-800 rounded-lg">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-md transition-all ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveTab('web')}
              className={`px-4 py-2 rounded-md transition-all ${
                activeTab === 'web'
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Web ({projects.filter(p => p.type === 'web').length})
            </button>
            <button
              onClick={() => setActiveTab('mobile')}
              className={`px-4 py-2 rounded-md transition-all ${
                activeTab === 'mobile'
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Mobile ({projects.filter(p => p.type === 'mobile').length})
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 shadow-xl transition-all duration-300 hover:shadow-purple-500/10 hover:border-purple-500/50 group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-xs px-2 py-1 rounded-full bg-gray-700/70 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-gray-700/70 text-gray-300">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-6">{project.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    project.type === 'web' 
                      ? 'bg-purple-500/20 text-purple-300'
                      : 'bg-green-500/20 text-green-300'
                  }`}>
                    {project.type === 'web' ? 'Web Project' : 'Mobile App'}
                  </span>
                  <a href="#" className="text-white hover:text-purple-400 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
                
                {devMode && project.techDetails && (
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <div className="flex items-center mb-3">
                      <Code size={18} className="text-purple-400 mr-2" />
                      <span className="text-purple-400 font-semibold">Technical Details</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium text-gray-300 mb-1">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techDetails.stack.map((tech, index) => (
                            <span 
                              key={index} 
                              className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-300 mb-1">Key Features</h4>
                        <ul className="text-sm text-gray-400 list-disc pl-5">
                          {project.techDetails.features.slice(0, 3).map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      
                      {project.techDetails.documentation && (
                        <a 
                          href={project.techDetails.documentation} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          <Info size={14} className="mr-1" />
                          View Documentation
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;