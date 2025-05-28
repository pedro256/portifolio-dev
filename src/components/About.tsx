import React from 'react';
import { Code, Smartphone, Globe, BrainCircuit,Hammer } from 'lucide-react';
import { useDevMode } from '../context/DevModeContext';

const About: React.FC = () => {
  const { devMode } = useDevMode();

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-500">
              Sobre mim
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Com atenção aos detalhes e comprometimento em criar experiências excepcionais para o usuário.

          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 shadow-xl relative overflow-hidden group">
              {devMode && (
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-purple-500"></div>
              )}
              <h3 className="text-2xl font-bold mb-4 text-white">Quem Eu Sou</h3>
              <p className="text-gray-300 mb-4">
                Com mais de 5 anos de experiência em Desenvolvimento de Software, sou especialista em 
                criar aplicativos responsivos e fáceis de usar que proporcionam experiências excepcionais 
                ao usuário.
              </p>
              <p className="text-gray-300 mb-4">
                Eu me desenvolvo em ambientes colaborativos, onde posso contribuir com minha expertise 
                em frameworks front-end & Backend modernos e Desenvolvimento mobile.

              </p>
              <p className="text-gray-300">
                Quando não estou programando, você me encontrará explorando novas tecnologias, contribuindo 
                para projetos de código aberto ou compartilhando meu conhecimento por meio de posts em blogs 
                e fóruns da comunidade.
              </p>

              {devMode && (
                <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-purple-600/30">
                  <div className="flex items-center mb-2">
                    <Code size={18} className="text-purple-400 mr-2" />
                    <span className="text-purple-400 font-semibold">Stack Principal:</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center">
                      <span className="inline-block w-2 h-2 bg-gradient-to-r from-indigo-500 to-indigo-100 rounded-full mr-2"></span>
                      <span className="text-gray-300">React.js</span>
                    </div>
                    {/* <div className="flex items-center">
                      <span className="inline-block w-2 h-2 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mr-2"></span>
                      <span className="text-gray-300">Laravel</span>
                    </div> */}
                    {/* <div className="flex items-center">
                      <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      <span className="text-gray-300">Tailwind CSS</span>
                    </div> */}
                    <div className="flex items-center">
                      <span className="inline-block w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-2"></span>
                      <span className="text-gray-300">Spring Boot</span>
                    </div>
                    <div className="flex items-center">
                      <span className="inline-block w-2 h-2 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full mr-2"></span>
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
                <h3 className="text-xl font-bold mb-2">Desenvolvedor Web</h3>
                <p className="text-gray-300 text-sm">
                  Criação de aplicativos web responsivos, acessíveis e de alto desempenho 
                  para facilitar seu dia, trazer lucro para sua empresa, economizar tempo e dinheiro, 
                  com tecnologias modernas.

                </p>
              </div>

              <div className="bg-gradient-to-br from-green-600/20 to-green-700/20 p-6 rounded-xl border border-green-600/30 shadow-lg hover:shadow-green-500/10 transition-all duration-300">
                <div className="bg-green-600/20 p-3 rounded-lg w-fit mb-4">
                  <Smartphone className="text-green-400" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Dispositivos Moveis</h3>
                <p className="text-gray-300 text-sm">
                  Criação de aplicativos móveis multiplataforma que proporcionam experiências nativas.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-600/20 to-green-700/20 p-6 rounded-xl border border-green-600/30 shadow-lg hover:shadow-green-500/10 transition-all duration-300">
                <div className="bg-green-600/20 p-3 rounded-lg w-fit mb-4">
                  <BrainCircuit className="text-green-400" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Inteligência artificial</h3>
                <p className="text-gray-300 text-sm">
                  Passionate about creating intuitive interfaces and delightful user experiences.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-600/20 to-purple-700/20 p-6 rounded-xl border border-purple-600/30 shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                <div className="bg-purple-600/20 p-3 rounded-lg w-fit mb-4">
                  <Hammer className="text-purple-400" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Resolver Problemas</h3>
                <p className="text-gray-300 text-sm">
                  Tecnologia é importante, mas importante entender qual é a raiz do problema para soluciona-lo. 
                  Como profissional prezo pelo melhor atendimento ao Cliente.
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