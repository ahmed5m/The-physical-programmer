
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

interface ScrollToTopProps {
  currentPage: 'home' | 'physics' | 'programming';
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ currentPage }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // As per request: visible on all pages except when on the homepage
  if (currentPage === 'home' || !isVisible) {
    return null;
  }

  const accentColor = currentPage === 'physics' ? 'border-cyan-500/50 shadow-cyan-500/20' : 'border-amber-500/50 shadow-amber-500/20';

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-10 z-[100] w-14 h-14 rounded-2xl glass-card border flex items-center justify-center text-white transition-all duration-500 hover:scale-110 active:scale-95 group animate__animated animate__fadeInUp ${accentColor}`}
      aria-label="Scroll to top"
    >
      <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      <span className="absolute bottom-full mb-4 right-0 bg-white text-black px-4 py-2 rounded-xl text-[10px] font-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 pointer-events-none">
        العودة للأعلى
      </span>
    </button>
  );
};

export default ScrollToTop;
