
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
  subtitle = "4+ Years of crafting high-engagement edits with fluid transitions and professional color grading.",
  bgUrl = "https://images.unsplash.com/photo-1492691523567-6170f229c411?q=80&w=2070&auto=format&fit=crop"
}) => {
  // Split title into parts to maintain the cinematic style
  const words = title.split(' ');
  const firstHalf = words.slice(0, Math.ceil(words.length / 2)).join(' ');
  const secondHalf = words.slice(Math.ceil(words.length / 2)).join(' ');

  return (
    <section className="relative min-h-[95vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B]/40 via-[#0A0A0B]/80 to-[#0A0A0B] z-10" />
        <div className="absolute inset-0 overflow-hidden opacity-40">
           <div className="absolute top-[-5%] left-[-5%] w-[110%] h-[110%] bg-cover bg-center animate-slow-pan" 
                style={{ backgroundImage: `url('${bgUrl}')` }} />
        </div>
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-20 text-center px-6 w-full max-w-7xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-full mb-8 animate-fade-in backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-blue-400 font-bold tracking-[0.3em] text-[10px] uppercase">
            Available for Projects 2026
          </span>
        </div>

        <h1 className="flex flex-col items-center justify-center font-serif font-black leading-[0.95] tracking-tighter mb-10">
          <span className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl opacity-90 animate-slide-up uppercase">{firstHalf}</span>
          <span className="text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-600 drop-shadow-2xl animate-slide-up delay-100 uppercase">{secondHalf}</span>
        </h1>
        
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-base sm:text-lg md:text-xl text-white/50 leading-relaxed font-light animate-fade-in delay-500">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in delay-700">
          <button 
            type="button"
            onClick={onWatchShowreel}
            className="w-full sm:w-auto group relative px-10 py-5 bg-white text-black font-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 z-30 shadow-[0_15px_35px_rgba(255,255,255,0.1)]"
          >
            <span className="relative z-10 flex items-center justify-center uppercase tracking-tight text-base">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Showreel
            </span>
            <div className="absolute inset-0 bg-blue-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
          
          <a 
            href="#portfolio"
            className="w-full sm:w-auto px-10 py-5 border-2 border-white/10 rounded-full font-black text-white uppercase tracking-tight text-base hover:bg-white/10 hover:border-white/40 transition-all z-30 text-center"
          >
            View Portfolio
          </a>
        </div>
      </div>

      <style>{`
        @keyframes slowPan {
          0% { transform: scale(1.1) translate(0, 0); }
          50% { transform: scale(1.15) translate(-1%, -1%); }
          100% { transform: scale(1.1) translate(0, 0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slow-pan { animation: slowPan 25s infinite ease-in-out; }
        .animate-slide-up { animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .delay-100 { animation-delay: 0.15s; }
      `}</style>
    </section>
  );
};

export default Hero;
