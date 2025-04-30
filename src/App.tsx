import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { DevModeProvider } from './context/DevModeContext';

function App() {
  return (
    <DevModeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </DevModeProvider>
  );
}

export default App;