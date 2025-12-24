
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar scrolled={scrolled} />
      <main className="flex-grow">
        <section id="inicio">
          <Hero />
        </section>
        <section id="sobre" className="bg-gray-50">
          <About />
        </section>
        <section id="servicos">
          <Services />
        </section>
        <section id="clientes" className="bg-gray-50">
          <Clients />
        </section>
        <section id="contato">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
