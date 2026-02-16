
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) => 
    `text-[9px] font-black uppercase tracking-[0.4em] transition-all hover:tracking-[0.5em] ${isActive ? 'text-blue-600' : 'text-white/30 hover:text-white'}`;

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-10 flex items-center justify-between mix-blend-difference pointer-events-none">
      <Link to="/" className="pointer-events-auto group">
        <span className="text-lg font-black tracking-[-0.05em] uppercase">
          SF<span className="text-blue-600">KL</span>
        </span>
      </Link>
      
      <div className="hidden md:flex items-center space-x-12 pointer-events-auto">
        <NavLink to="/work" className={linkClass}>Work</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/services" className={linkClass}>Services</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
      </div>

      <div className="pointer-events-auto">
        <a 
          href="https://cal.com/safikulislam" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[9px] font-black uppercase tracking-[0.4em] bg-white text-black px-6 py-3 hover:bg-blue-600 hover:text-white transition-all"
        >
          Book
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
