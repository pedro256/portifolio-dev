import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { useDevMode } from '../context/DevModeContext';

const Hero: React.FC = () => {
  const { devMode } = useDevMode();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      containerRef.current.style.setProperty('--mouse-x', `${x * 20}px`);
      containerRef.current.style.setProperty('--mouse-y', `${y * 20}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="min-h-screen relative flex items-center justify-center pt-16 overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)',
      }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-gray-900 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-gray-900 to-transparent"></div>
        
        {devMode && (
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 h-full">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="border-r border-purple-500/20 h-full"></div>
              ))}
            </div>
            <div className="grid grid-rows-12 w-full absolute top-0 bottom-0">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="border-b border-green-500/20 w-full"></div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div 
        className="container mx-auto px-4 py-16 z-10 text-center"
        style={{
          transform: devMode ? 'translate(var(--mouse-x, 0), var(--mouse-y, 0))' : 'none',
          transition: 'transform 0.2s ease-out',
        }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-500">
            Frontend Developer
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
          Creating captivating digital experiences with clean code and pixel-perfect designs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href="#projects" 
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded-md text-white font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 rounded-md text-white font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white opacity-70 hover:opacity-100 transition-opacity">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;