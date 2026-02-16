
import React from 'react';

interface HeroProps {
  onWatchShowreel: () => void;
  title?: string;
  subtitle?: string;
  // Added bgUrl to support dynamic background images passed from App.tsx
  bgUrl?: string;
}

const Hero: React.FC<HeroProps> = ({ onWatchShowreel, title, subtitle, bgUrl }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-end px-6 md:px-24 pb-24 overflow-hidden">
      {/* Background container for dynamic hero image */}
      {bgUrl && (
        <div className="absolute inset-0 z-0">
          <img 
            src={bgUrl} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-[0.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        </div>
      )}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl px-6 pointer-events-none z-[1]">
        <h1 className="text-[18vw] md:text-[15vw] font-black leading-[0.75] tracking-[-0.08em] uppercase opacity-[0.03] select-none">
          CREATIVE<br/>STORYTELLER
        </h1>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        <div className="reveal active transition-delay-100">
          <span className="text-[10px] font-black tracking-[0.6em] uppercase text-blue-600 mb-6 block">
            EST. 2022 / BGD
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <h2 className="text-6xl md:text-[8vw] font-black leading-[0.9] tracking-[-0.06em] uppercase reveal active transition-delay-200">
              {title || "Visual Poetry."}
            </h2>
            <p className="mt-12 text-xl md:text-2xl font-light text-white/40 max-w-2xl reveal active transition-delay-300">
              {subtitle || "Safikul Islam specializes in fluid cinematic cuts and rhythmic narratives that resonate globally."}
            </p>
          </div>
          
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end space-y-8 reveal active transition-delay-400">
            <button 
              onClick={onWatchShowreel}
              className="group relative overflow-hidden px-10 py-5 bg-white text-black text-[11px] font-black uppercase tracking-[0.3em] transition-all hover:bg-blue-600 hover:text-white"
            >
              <span className="relative z-10">Play Showreel</span>
            </button>
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
              Scroll to Explore Works
            </div>
          </div>
        </div>
      </div>

      {/* Side Label - Very Niki Sadeki */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden md:block rotate-90 origin-right">
        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white/10">
          Safikul Islam — Portfolio 2026
        </span>
      </div>
    </section>
  );
};

export default Hero;
