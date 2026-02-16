
import React from 'react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <footer className="bg-[#050505] pt-64 pb-12 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="reveal mb-48 text-center md:text-left">
          <h2 className="text-[15vw] font-black uppercase tracking-[-0.08em] leading-[0.75] mb-24">
            Let's<br/><span className="text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}>Create.</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-7">
              <p className="text-3xl md:text-5xl font-light text-white/40 leading-tight">
                Collaborating with forward-thinking creators and brands worldwide.
              </p>
              <div className="mt-16">
                <a href="mailto:realsafikul@gmail.com" className="text-2xl md:text-4xl font-black border-b-2 border-blue-600 pb-2 hover:text-blue-600 transition-colors">
                  realsafikul@gmail.com
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col space-y-12">
               <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 block mb-6">Directory</span>
                  <div className="flex flex-col space-y-4">
                    <Link to="/work" className="text-lg font-bold hover:text-blue-600 transition-colors">Portfolio</Link>
                    <Link to="/about" className="text-lg font-bold hover:text-blue-600 transition-colors">Information</Link>
                    <Link to="/services" className="text-lg font-bold hover:text-blue-600 transition-colors">Expertise</Link>
                  </div>
               </div>
               <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 block mb-6">Elsewhere</span>
                  <div className="flex flex-wrap gap-8">
                    <a href="https://www.youtube.com/@KhulnaVlogs" target="_blank" rel="noopener" className="text-lg font-bold hover:text-blue-600 transition-colors">YT</a>
                    <a href="https://www.linkedin.com/in/safikulislam1/" target="_blank" rel="noopener" className="text-lg font-bold hover:text-blue-600 transition-colors">LI</a>
                    <a href="https://www.facebook.com/Safikulislamsaf" target="_blank" rel="noopener" className="text-lg font-bold hover:text-blue-600 transition-colors">FB</a>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="pt-24 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-4 opacity-20 hover:opacity-100 transition-opacity">
            <span className="text-[10px] font-black uppercase tracking-[0.5em]">© 2026 Safikul Islam</span>
          </div>
          <Link to="/admin" className="text-[9px] font-black uppercase tracking-[0.5em] text-white/5 hover:text-blue-600 transition-colors">Control Center</Link>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
