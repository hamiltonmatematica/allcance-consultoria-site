
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-allcance-green text-sm font-black tracking-[0.4em] uppercase mb-4">Contato</h2>
            <h3 className="text-5xl font-black text-gray-900 mb-8 leading-tight">Vamos conversar sobre o seu negócio?</h3>
            <p className="text-gray-500 mb-12 text-lg font-light">
              Estamos prontos para diagnosticar suas necessidades e propor melhorias estratégicas para sua empresa.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6 group">
                <div className="bg-allcance-green p-4 rounded-2xl text-white flex-shrink-0 group-hover:bg-allcance-lime group-hover:text-allcance-green transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-1">Localização</h4>
                  <p className="text-gray-600 font-medium">{CONTACT_INFO.address}</p>
                  <p className="text-gray-500 text-sm">{CONTACT_INFO.city} | CEP: {CONTACT_INFO.zip}</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="bg-allcance-lime p-4 rounded-2xl text-allcance-green flex-shrink-0 group-hover:bg-allcance-green group-hover:text-white transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-1">Telefones</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
                    {CONTACT_INFO.phones.map((phone) => (
                      <p key={phone} className="text-gray-600 font-medium">{phone}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="bg-gray-100 p-4 rounded-2xl text-gray-500 flex-shrink-0 group-hover:bg-allcance-green group-hover:text-white transition-all duration-300">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-1">Canais Digitais</h4>
                  <p className="text-gray-600 font-medium">Atendimento via WhatsApp e Redes Sociais</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-allcance-lime/10 rounded-full -mr-16 -mt-16"></div>
            
            <form className="relative space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Nome Completo</label>
                  <input type="text" className="w-full px-5 py-4 rounded-2xl border-0 bg-white shadow-sm focus:ring-2 focus:ring-allcance-green transition-all" placeholder="Ex: João Silva" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Telefone</label>
                  <input type="tel" className="w-full px-5 py-4 rounded-2xl border-0 bg-white shadow-sm focus:ring-2 focus:ring-allcance-green transition-all" placeholder="(38) 90000-0000" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">E-mail Corporativo</label>
                <input type="email" className="w-full px-5 py-4 rounded-2xl border-0 bg-white shadow-sm focus:ring-2 focus:ring-allcance-green transition-all" placeholder="contato@empresa.com.br" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Assunto Estratégico</label>
                <select className="w-full px-5 py-4 rounded-2xl border-0 bg-white shadow-sm focus:ring-2 focus:ring-allcance-green transition-all appearance-none">
                  <option>Gestão Financeira</option>
                  <option>Plano de Negócio</option>
                  <option>Recursos Humanos</option>
                  <option>Gestão Comercial</option>
                  <option>Inovação & Tecnologia</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Mensagem</label>
                <textarea rows={4} className="w-full px-5 py-4 rounded-2xl border-0 bg-white shadow-sm focus:ring-2 focus:ring-allcance-green transition-all resize-none" placeholder="Conte-nos brevemente sobre o seu desafio..."></textarea>
              </div>
              <button type="button" className="w-full py-5 bg-allcance-green text-white font-black uppercase tracking-widest rounded-2xl hover:bg-opacity-90 transition-all shadow-xl shadow-allcance-green/20">
                Agendar Diagnóstico
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
