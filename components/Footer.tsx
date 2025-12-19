
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black text-center border-t border-white/5">
      <p className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.5em]">
        Designed and Coded by Ahmed El-Jaidi © {new Date().getFullYear()} / Born 2008 to Create
      </p>
    </footer>
  );
};

export default Footer;
