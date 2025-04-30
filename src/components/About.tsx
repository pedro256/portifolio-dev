import React from 'react';
import { Code, Smartphone, Globe, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useDevMode } from '../context/DevModeContext';

const About: React.FC = () => {
  const { devMode } = useDevMode();

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-500">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Passionate developer with a keen eye for detail and a commitment to creating 
            exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 shadow-xl relative overflow-hidden group">
              {devMode && (
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-purple-500"></div>
              )}
              <h3 className="text-2xl font-bold mb-4 text-white">Who I Am</h3>
              <p className="text-gray-300 mb-4">
                With over 5 years of experience in frontend development, I specialize in creating 
                responsive, user-friendly applications that deliver exceptional user experiences. 
                My journey began with a passion for problem-solving and visual design, which led me 
                to combine both skills in web development.
              </p>
              <p className="text-gray-300 mb-4">
                I thrive in collaborative environments where I can contribute my expertise in modern 
                frontend frameworks and mobile development. My approach combines technical excellence 
                with creative solutions to build applications that are both visually stunning and 
                functionally robust.
              </p>
              <p className="text-gray-300">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing my knowledge through blog posts and community forums.
              </p>

              {devMode && (
                <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-purple-600/30">
                  <div className="flex items-center mb-2">
                    <Code size={18} className="text-purple-400 mr-2" />
                    <span className="text-purple-400 font-semibold">Tech Stack:</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center">
                      <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      <span className="text-gray-300">React.js</span>
                    </div>
                    <div className="flex items-center">
                      <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      <span className="text-gray-300">TypeScript</span>
                    </div>
                    <div className="flex items-center">
                      <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      <span className="text-gray-300">Tailwind CSS</span>
                    </div>
                    <div className="flex items-center">
                      <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      <span className="text-gray-300">React Native</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-purple-600/20 to-purple-700/20 p-6 rounded-xl border border-purple-600/30 shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                <div className="bg-purple-600/20 p-3 rounded-lg w-fit mb-4">
                  <Globe className="text-purple-400" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Web Developer</h3>
                <p className="text-gray-300 text-sm">
                  Creating responsive, accessible, and performant web applications with modern technologies.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-600/20 to-green-700/20 p-6 rounded-xl border border-green-600/30 shadow-lg hover:shadow-green-500/10 transition-all duration-300">
                <div className="bg-green-600/20 p-3 rounded-lg w-fit mb-4">
                  <Smartphone className="text-green-400" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Mobile Developer</h3>
                <p className="text-gray-300 text-sm">
                  Building cross-platform mobile applications that deliver native-like experiences.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-600/20 to-green-700/20 p-6 rounded-xl border border-green-600/30 shadow-lg hover:shadow-green-500/10 transition-all duration-300">
                <div className="bg-green-600/20 p-3 rounded-lg w-fit mb-4">
                  <Code className="text-green-400" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">UI/UX Enthusiast</h3>
                <p className="text-gray-300 text-sm">
                  Passionate about creating intuitive interfaces and delightful user experiences.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-600/20 to-purple-700/20 p-6 rounded-xl border border-purple-600/30 shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                <div className="bg-purple-600/20 p-3 rounded-lg w-fit mb-4">
                  <Github className="text-purple-400" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Open Source</h3>
                <p className="text-gray-300 text-sm">
                  Contributing to open source projects and sharing knowledge with the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;