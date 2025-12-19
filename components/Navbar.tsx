
import React, { useState } from 'react';
import { Menu, X, ChevronLeft } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'physics' | 'programming') => void;
  currentPage: 'home' | 'physics' | 'programming';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'الرئيسية', color: 'text-white' },
    { id: 'physics', label: 'الفيزياء', color: 'text-cyan-400' },
    { id: 'programming', label: 'البرمجة', color: 'text-amber-500' },
  ];

  const handleNavigation = (page: 'home' | 'physics' | 'programming') => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  const email = "ahmedelgeady@hotmail.com";

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[250] py-6 md:py-10 px-6 md:px-20 flex justify-between items-center transition-all duration-500">
        {/* Logo Section */}
        <div 
          className="flex items-center gap-4 md:gap-6 cursor-pointer group z-[260]" 
          onClick={() => handleNavigation('home')}
        >
          <div className="w-12 h-12 md:w-14 md:h-14 border border-white/30 rounded-2xl flex items-center justify-center font-black text-lg md:text-xl group-hover:bg-white group-hover:text-black transition-all duration-500 rotate-3 group-hover:rotate-0 bg-black/20 backdrop-blur-md text-white">
            AJ
          </div>
          <div className="hidden sm:block">
            <p className="text-[9px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] uppercase opacity-40 group-hover:opacity-100 transition-opacity mix-blend-difference text-white">
              Ahmed Elgeady / Est. 2008
            </p>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 lg:gap-16 mix-blend-difference">
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => handleNavigation(link.id as any)} 
              className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:scale-110 ${
                currentPage === link.id ? link.color : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="w-12 h-px bg-white/20"></div>
          <a 
            href={`mailto:${email}`}
            className="text-[10px] font-black uppercase border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-500 tracking-widest bg-black/10 backdrop-blur-sm text-white"
          >
            Connect
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden z-[260] p-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl text-white hover:bg-white/10 transition-all"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[240] transition-all duration-700 md:hidden ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-black/90 backdrop-blur-3xl"></div>
        
        <div className="relative h-full flex flex-col justify-center px-10">
          <div className="space-y-8">
            <p className="text-[10px] font-black tracking-[0.5em] text-cyan-400 uppercase mb-4 opacity-50">Navigation Menu</p>
            {navLinks.map((link, idx) => (
              <button
                key={link.id}
                onClick={() => handleNavigation(link.id as any)}
                className={`flex items-center gap-6 text-4xl font-black transition-all w-full text-right justify-end group ${
                  currentPage === link.id ? link.color : 'text-white/40 hover:text-white'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <span className="text-sm opacity-0 group-hover:opacity-100 transition-all group-hover:-translate-x-2">
                   <ChevronLeft />
                </span>
                {link.label}
              </button>
            ))}
            
            <div className="h-px w-full bg-white/10 my-12"></div>
            
            <div className="flex flex-col items-end gap-6">
              <a 
                href={`mailto:${email}`} 
                className="text-2xl font-black text-white hover:text-cyan-400 transition-colors"
              >
                Connect With Me
              </a>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] text-right">
                Mansoura, Egypt<br/>
                Backend Developer & Physics Student
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-10 opacity-[0.03] select-none pointer-events-none">
          <p className="text-[25vw] font-black leading-none text-white">AJ</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
