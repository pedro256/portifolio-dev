import React, { useState } from 'react';
import { skillCategories } from '../data/projects';
import { useDevMode } from '../context/DevModeContext';

const Skills: React.FC = () => {
  const { devMode } = useDevMode();
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-500">
              My Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Technologies and skills I've mastered throughout my career.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 shadow-xl h-full">
              <h3 className="text-2xl font-bold mb-6 text-white">Expertise Areas</h3>
              
              <div className="space-y-4">
                {skillCategories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      activeCategory === index 
                        ? 'bg-gradient-to-r from-purple-600/30 to-green-600/30 border border-purple-500/30'
                        : 'bg-gray-800/50 hover:bg-gray-700/50'
                    }`}
                  >
                    <h4 className={`text-lg font-medium mb-1 ${
                      activeCategory === index ? 'text-white' : 'text-gray-300'
                    }`}>
                      {category.category}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {category.skills.length} technologies
                    </p>
                  </button>
                ))}
              </div>
              
              {devMode && (
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <h4 className="text-sm font-medium text-purple-400 mb-2">Learning Path</h4>
                  <p className="text-sm text-gray-400 mb-4">
                    Currently focusing on expanding expertise in these areas:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-purple-600/20 text-purple-300">
                      Web3 Development
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-600/20 text-green-300">
                      AI Integration
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-purple-600/20 text-purple-300">
                      Cloud Architecture
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="md:w-2/3">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 shadow-xl h-full">
              <h3 className="text-2xl font-bold mb-6 text-white">
                {skillCategories[activeCategory].category} Skills
              </h3>
              
              <div className="space-y-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      {devMode && <span className="text-gray-400">{skill.level}%</span>}
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${
                          activeCategory === 0 
                            ? 'bg-gradient-to-r from-purple-500 to-purple-600' 
                            : activeCategory === 1 
                              ? 'bg-gradient-to-r from-green-500 to-green-600'
                              : 'bg-gradient-to-r from-purple-500 to-green-500'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {devMode && (
                <div className="mt-10">
                  <h4 className="text-sm font-medium text-purple-400 mb-4">Development Environment</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <span className="text-sm font-medium text-gray-300 block mb-1">Code Editor</span>
                      <span className="text-xs text-gray-400">VS Code / WebStorm</span>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <span className="text-sm font-medium text-gray-300 block mb-1">Version Control</span>
                      <span className="text-xs text-gray-400">Git / GitHub / GitLab</span>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <span className="text-sm font-medium text-gray-300 block mb-1">Project Management</span>
                      <span className="text-xs text-gray-400">Jira / Asana / Trello</span>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <span className="text-sm font-medium text-gray-300 block mb-1">Design Tools</span>
                      <span className="text-xs text-gray-400">Figma / Adobe XD</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;