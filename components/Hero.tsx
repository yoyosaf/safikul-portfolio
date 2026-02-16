
import React from 'react';

interface HeroProps {
  onWatchShowreel: () => void;
  title?: string;
  subtitle?: string;
  bgUrl?: string;
}

const Hero: React.FC<HeroProps> = ({ onWatchShowreel, title, subtitle }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-10 reveal active">
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-[11px] font-black tracking-[0.5em] uppercase text-white/40">
              Film Editor / Cinematic Strategist
            </span>
          </div>
        </div>
        
        <div className="relative mb-16">
          <h1 className="text-[16vw] md:text-[12vw] font-black leading-[0.8] tracking-[-0.07em] uppercase reveal active transition-delay-200">
            Visual<br/>
            <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>Poetry.</span>
          </h1>
          <div className="absolute top-0 right-0 hidden lg:block reveal active transition-delay-300">
             <div className="text-right">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-4">Experience</p>
                <span className="text-5xl font-serif italic text-blue-600">4+ Years</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-6 reveal active transition-delay-400">
            <p className="text-2xl md:text-3xl font-light text-white/70 leading-[1.3] tracking-tight max-w-xl mb-12">
              Crafting <span className="text-white font-normal underline decoration-blue-600/50 decoration-2 underline-offset-8">rhythmic experiences</span> that turn viewers into believers. Based in Khulna, serving the globe.
            </p>
            
            <div className="flex flex-wrap items-center gap-10">
              <button 
                onClick={onWatchShowreel}
                className="group flex items-center space-x-4 text-[11px] font-black uppercase tracking-widest"
              >
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
                <span>The Showreel</span>
              </button>
              
              <div className="flex items-center space-x-8">
                <a 
                  href="https://cal.com/safikulislam" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[11px] font-black uppercase tracking-widest border-b border-white/20 pb-1 hover:border-blue-500 transition-all"
                >
                  Book Meeting
                </a>
                <a 
                  href="tel:+8801568054539"
                  className="text-[11px] font-black uppercase tracking-widest text-white/30 hover:text-white transition-all flex items-center space-x-2"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 003.7 1 1 1 0 01.91 1v3.94a1 1 0 01-1 1A16 16 0 013 4a1 1 0 011-1h3.94a1 1 0 011 .91 11.72 11.72 0 001 3.7 1 1 0 01-.27 1.11l-2.2 2.2z"/></svg>
                  <span>Direct Call</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-6 flex justify-end reveal active transition-delay-600">
            <div className="relative group overflow-hidden rounded-sm w-full max-w-sm aspect-[4/5] bg-neutral-900 border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1492691523567-6170f229c411?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                alt="Studio"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/10 rotate-90">Studio View</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;