
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 border-b border-white/10 pb-12">
          <Logo color="#FFFFFF" textColor="text-white" />

          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-400">
            <a href="#inicio" className="hover:text-allcance-lime">Início</a>
            <a href="#sobre" className="hover:text-allcance-lime">Quem Somos</a>
            <a href="#servicos" className="hover:text-allcance-lime">Serviços</a>
            <a href="#clientes" className="hover:text-allcance-lime">Clientes</a>
            <a href="#contato" className="hover:text-allcance-lime">Contato</a>
          </div>

          <div className="flex gap-4">
            {/* Social mock placeholders */}
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-allcance-green transition-colors cursor-pointer">
              <span className="font-bold">in</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-allcance-green transition-colors cursor-pointer">
              <span className="font-bold">ig</span>
            </div>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Allcance Consultoria. Todos os direitos reservados.</p>
          <p>Montes Claros - MG | Brasil</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
