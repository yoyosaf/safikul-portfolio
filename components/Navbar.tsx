
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) => 
    `text-[10px] font-black uppercase tracking-widest transition-colors ${isActive ? 'text-blue-500' : 'text-white/40 hover:text-white'}`;

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-8 flex items-center justify-between pointer-events-none">
      <Link to="/" className="pointer-events-auto group">
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-[-0.05em] leading-none">
            SAFIKUL <span className="text-blue-600">ISLAM</span>
          </span>
          <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-white/40 mt-1 transition-colors group-hover:text-blue-500">
            FILM EDITOR
          </span>
        </div>
      </Link>
      
      <div className="hidden md:flex items-center space-x-12 pointer-events-auto bg-black/50 backdrop-blur-xl border border-white/5 px-8 py-3 rounded-full">
        <NavLink to="/work" className={linkClass}>Works</NavLink>
        <NavLink to="/about" className={linkClass}>Info</NavLink>
        <NavLink to="/services" className={linkClass}>Expertise</NavLink>
        <a 
          href="https://cal.com/safikulislam" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[10px] font-black uppercase tracking-widest text-blue-500 hover:text-white transition-colors"
        >
          Book Meeting
        </a>
      </div>

      <div className="pointer-events-auto">
        <NavLink to="/contact" className={linkClass}>
          Connect
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
