
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIConsultant from './components/AIConsultant';
import PhysicsPage from './components/PhysicsPage';
import ProgrammingPage from './components/ProgrammingPage';
import ParticleBackground from './components/ParticleBackground';
import ScrollToTop from './components/ScrollToTop';
import AOS from 'aos';

const App: React.FC = () => {
  const [showAI, setShowAI] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'physics' | 'programming'>('home');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const navigateTo = (page: 'home' | 'physics' | 'programming') => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden relative bg-[#030303]">
      <ParticleBackground />
      <Navbar onNavigate={navigateTo} currentPage={currentPage} />
      
      <main className="flex-grow">
        {currentPage === 'home' && (
          <div className="space-y-0">
            <Hero />
            <div data-aos="fade-up">
              <About />
            </div>
            <div data-aos="zoom-in">
              <Services onNavigate={navigateTo} />
            </div>
            <div data-aos="fade-left">
              <Testimonials />
            </div>
            <div data-aos="fade-up">
              <Contact />
            </div>
          </div>
        )}
        {currentPage === 'physics' && <PhysicsPage />}
        {currentPage === 'programming' && <ProgrammingPage />}
      </main>
      
      <Footer />
      
      {/* Scroll to Top Button */}
      <ScrollToTop currentPage={currentPage} />

      {/* Floating AI Consultant Trigger */}
      <button 
        onClick={() => setShowAI(true)}
        className="fixed bottom-10 left-10 z-[100] bg-white text-black w-16 h-16 rounded-full shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:scale-110 transition-all flex items-center justify-center group border border-white/20"
      >
        <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
          استشر الذكاء الاصطناعي
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {showAI && <AIConsultant onClose={() => setShowAI(false)} />}
    </div>
  );
};

export default App;
