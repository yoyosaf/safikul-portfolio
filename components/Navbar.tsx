
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0B]/90 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-2xl font-serif font-bold tracking-tighter text-white z-50">
          SAFIKUL <span className="text-blue-500">ISLAM</span>
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-white/70">
          <a href="#portfolio" className="hover:text-blue-500 transition-colors">PORTFOLIO</a>
          <a href="#services" className="hover:text-blue-500 transition-colors">SERVICES</a>
          <a href="#about" className="hover:text-blue-500 transition-colors">ABOUT</a>
          <a href="#contact" className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all cinematic-glow">
            LET'S WORK
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          type="button"
          className="md:hidden text-white z-50 p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#0A0A0B] transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col items-center justify-center space-y-8 text-2xl font-serif`}>
          <a href="#portfolio" onClick={closeMenu} className="hover:text-blue-500 transition-colors">PORTFOLIO</a>
          <a href="#services" onClick={closeMenu} className="hover:text-blue-500 transition-colors">SERVICES</a>
          <a href="#about" onClick={closeMenu} className="hover:text-blue-500 transition-colors">ABOUT</a>
          <a href="#contact" onClick={closeMenu} className="px-8 py-3 bg-blue-600 text-white rounded-full cinematic-glow">
            LET'S WORK
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
