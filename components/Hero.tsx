
import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Animated Gradient Background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background: 'linear-gradient(135deg, #006652 0%, #C4D600 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 15s ease infinite'
        }}
      ></div>

      {/* Decorative floating circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-allcance-lime/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-allcance-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Side bar accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-br from-allcance-green to-allcance-green/80 hidden lg:block skew-x-[-6deg] translate-x-1/2 opacity-90"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className={`lg:col-span-7 z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-allcance-green/10 to-allcance-lime/10 border border-allcance-green/20 mb-6 hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-4 h-4 text-allcance-green animate-pulse" />
              <span className="text-allcance-green text-xs font-bold uppercase tracking-widest">Consultoria Empresarial de Elite</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-[0.9] tracking-tighter mb-6">
              REVOLUCIONE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-allcance-green to-allcance-lime">
                SUA GESTÃO
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-500 max-w-2xl font-light leading-relaxed mb-10">
              Desde 2005, convertemos potencial organizacional em resultados mensuráveis e sustentáveis, com inteligência estratégica, disciplina de gestão e rigor técnico.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="#servicos"
                className="group flex items-center justify-center px-8 py-5 bg-gradient-to-r from-allcance-green to-allcance-green/90 text-white font-bold rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-allcance-green/30 hover:-translate-y-1 hover:scale-105"
              >
                Nossas Soluções
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </a>
              <a
                href="#contato"
                className="flex items-center justify-center px-8 py-5 border-2 border-gray-200 text-gray-700 font-bold rounded-full hover:border-allcance-lime hover:bg-allcance-lime/5 transition-all duration-300 hover:-translate-y-1"
              >
                Fale Conosco
              </a>
            </div>
          </div>

          <div className={`lg:col-span-5 relative z-10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-allcance-green to-allcance-lime rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

              <img
                src="/Imagem1.png"
                alt="Equipe Allcance em reunião"
                className="relative w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-[2.5rem] shadow-2xl"
              />

              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-3xl font-black text-allcance-green">20+</p>
                    <p className="text-xs text-gray-600 font-bold uppercase tracking-wider">Anos</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-allcance-green">500+</p>
                    <p className="text-xs text-gray-600 font-bold uppercase tracking-wider">Projetos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-allcance-green rounded-full flex justify-center">
          <div className="w-1 h-3 bg-allcance-green rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
