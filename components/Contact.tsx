
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
                Partnering with creators to define the next visual standard.
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
                    <Link to="/work" className="text-lg font-bold hover:text-blue-600 transition-colors">Works</Link>
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
          <div className="flex items-center space-x-6">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">© 2026 Safikul Islam</span>
            <div className="h-4 w-[1px] bg-white/10"></div>
            <Link to="/admin" className="group flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 hover:text-white transition-all">
               <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                 <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6z" />
               </svg>
               <span>Studio Access</span>
            </Link>
          </div>
          <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white/5">Handcrafted Excellence</span>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
