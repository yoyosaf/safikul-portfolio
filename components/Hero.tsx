
import React from 'react';

interface HeroProps {
  onWatchShowreel: () => void;
  title?: string;
  subtitle?: string;
  bgUrl?: string;
}

const Hero: React.FC<HeroProps> = ({ 
  onWatchShowreel, 
  title = "TURNING RAW FOOTAGE INTO CINEMA",
  subtitle = "Professional Film Editor with 4+ years of experience in crafting high-engagement stories for the digital age.",
  bgUrl = "https://images.unsplash.com/photo-1492691523567-6170f229c411?q=80&w=2070&auto=format&fit=crop"
}) => {
  const words = title.split(' ');
  const firstLine = words.slice(0, Math.ceil(words.length / 2)).join(' ');
  const secondLine = words.slice(Math.ceil(words.length / 2)).join(' ');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Watermark Text - Super Modern Aesthetic */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden z-0">
        <h2 className="text-[25vw] font-black text-white/[0.02] leading-none whitespace-nowrap animate-watermark">
          SAFIKUL ISLAM • EDITOR • SAFIKUL ISLAM • EDITOR
        </h2>
      </div>

      {/* Hero Background Image with Optimized Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-[#0A0A0B]/50 z-10" />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center scale-110 animate-subtle-zoom opacity-40"
          style={{ backgroundImage: `url('${bgUrl}')` }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="inline-block mb-6 animate-fade-in-up">
          <div className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.3em] text-blue-400 uppercase">Available for Hire • 2026</span>
          </div>
        </div>

        <h1 className="flex flex-col items-center justify-center font-serif font-black leading-[0.85] tracking-tighter mb-8 sm:mb-12">
          <span className="text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] text-white animate-reveal-text">
            {firstLine}
          </span>
          <span className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-600 animate-reveal-text delay-200">
            {secondLine}
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/50 leading-relaxed font-light mb-12 animate-fade-in delay-500">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in delay-700">
          <button 
            onClick={onWatchShowreel}
            className="group relative w-full sm:w-auto px-10 py-5 bg-white text-black font-black rounded-full overflow-hidden transition-all hover:scale-110 active:scale-95 cinematic-glow"
          >
            <span className="relative z-10 flex items-center justify-center uppercase tracking-tight">
              <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              Watch Showreel
            </span>
            <div className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
          </button>
          
          <a 
            href="#portfolio"
            className="w-full sm:w-auto px-10 py-5 border border-white/10 rounded-full font-black text-white uppercase tracking-tight hover:bg-white/5 hover:border-white/40 transition-all text-center"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Decorative Scanlines for Cinematic Texture */}
      <div className="absolute inset-0 pointer-events-none z-30 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-[length:100%_4px,3px_100%]" />

      <style>{`
        @keyframes subtleZoom {
          from { transform: scale(1.1); }
          to { transform: scale(1); }
        }
        @keyframes watermark {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes revealText {
          from { opacity: 0; transform: translateY(40px) skewY(2deg); }
          to { opacity: 1; transform: translateY(0) skewY(0deg); }
        }
        .animate-subtle-zoom { animation: subtleZoom 15s ease-out forwards; }
        .animate-watermark { animation: watermark 40s linear infinite; }
        .animate-reveal-text { animation: revealText 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .animate-fade-in-up { animation: revealText 0.8s ease-out forwards; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
      `}</style>
    </section>
  );
};

export default Hero;
