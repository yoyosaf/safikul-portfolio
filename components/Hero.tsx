
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] will-change-transform">
      {/* Background Layer: Floating Orbs for Modern Depth */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-[40vw] h-[40vw] bg-blue-600/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-indigo-600/10 rounded-full blur-[100px] animate-float-delayed" />
      </div>

      {/* Modern Split Backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] ease-linear scale-110 animate-ken-burns"
          style={{ backgroundImage: `url('${bgUrl}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          
          {/* Top Badge */}
          <div className="mb-10 opacity-0 animate-fade-in-up">
            <div className="inline-flex items-center space-x-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-black tracking-[0.4em] text-white/70 uppercase">Available Now</span>
            </div>
          </div>

          {/* Massive Kinetic Typography */}
          <h1 className="flex flex-col mb-10 select-none">
            <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[11rem] font-black leading-[0.8] tracking-tighter text-white animate-reveal-top uppercase">
              {firstLine}
            </span>
            <span className="text-6xl sm:text-8xl md:text-9xl lg:text-[13rem] font-serif italic leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-white to-blue-400 animate-reveal-bottom uppercase">
              {secondLine}
            </span>
          </h1>

          {/* Refined Description */}
          <p className="max-w-2xl text-base sm:text-lg md:text-xl text-white/40 leading-relaxed font-light mb-14 opacity-0 animate-fade-in delay-700">
            {subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-6 opacity-0 animate-fade-in delay-1000">
            <button 
              onClick={onWatchShowreel}
              className="group relative w-full sm:w-auto px-12 py-5 bg-white text-black font-black rounded-full transition-transform hover:scale-105 active:scale-95 cinematic-glow overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center uppercase tracking-tighter text-base">
                <svg className="w-5 h-5 mr-3 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                Watch Showreel
              </span>
              <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            
            <a 
              href="#portfolio"
              className="w-full sm:w-auto px-12 py-5 border border-white/20 rounded-full font-black text-white uppercase tracking-tighter text-base hover:bg-white/10 hover:border-white/40 transition-all text-center"
            >
              Browse Works
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes kenBurns {
          0% { transform: scale(1.1) translate(0, 0); }
          50% { transform: scale(1.15) translate(-1%, 1%); }
          100% { transform: scale(1.1) translate(0, 0); }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(2%, 4%) scale(1.05); }
        }
        @keyframes reveal {
          from { opacity: 0; transform: translateY(60px) rotateX(-20deg); }
          to { opacity: 1; transform: translateY(0) rotateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-ken-burns { animation: kenBurns 30s linear infinite; }
        .animate-float { animation: float 15s ease-in-out infinite; }
        .animate-float-delayed { animation: float 18s ease-in-out infinite reverse; }
        .animate-reveal-top { animation: reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-reveal-bottom { animation: reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards; opacity: 0; }
        .animate-fade-in-up { animation: fadeIn 0.8s ease-out forwards; }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </section>
  );
};

export default Hero;
