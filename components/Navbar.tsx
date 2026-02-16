
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-8 flex items-center justify-between pointer-events-none">
      <a href="#" className="pointer-events-auto group">
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-[-0.05em] leading-none">
            SAFIKUL <span className="text-blue-600">ISLAM</span>
          </span>
          <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-white/40 mt-1 transition-colors group-hover:text-blue-500">
            FILM EDITOR
          </span>
        </div>
      </a>
      
      <div className="hidden md:flex items-center space-x-12 pointer-events-auto bg-black/50 backdrop-blur-xl border border-white/5 px-8 py-3 rounded-full">
        <a href="#portfolio" className="text-[10px] font-black uppercase tracking-widest hover:text-blue-500 transition-colors">Works</a>
        <a href="#about" className="text-[10px] font-black uppercase tracking-widest hover:text-blue-500 transition-colors">Info</a>
        <a 
          href="https://cal.com/safikulislam" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[10px] font-black uppercase tracking-widest text-blue-500 hover:text-white transition-colors"
        >
          Book a Meeting
        </a>
      </div>

      <div className="pointer-events-auto">
        <a href="#contact" className="text-[10px] font-black uppercase tracking-widest border-b border-white/20 pb-1 hover:border-blue-500 transition-all">
          Connect
        </a>
      </div>
    </nav>
  );
};

export default Navbar;