
import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-48 bg-[#030303] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          
          <div className="lg:col-span-4 reveal">
            <div className="sticky top-32">
              <span className="text-blue-600 font-black tracking-[0.4em] text-[10px] uppercase mb-8 block">Information</span>
              <h2 className="text-6xl font-black uppercase tracking-tighter mb-12 leading-[0.9]">
                Safikul<br/>Islam.
              </h2>
              <p className="text-white/40 text-lg leading-relaxed mb-12">
                A storyteller by nature, an editor by choice. Four years of pushing pixels to perfection.
              </p>
              
              <div className="space-y-4">
                 <div className="flex justify-between items-end border-b border-white/5 pb-4">
                    <span className="text-[10px] uppercase tracking-widest text-white/20 font-black">Experience</span>
                    <span className="text-sm font-bold">4+ Years Full-Time</span>
                 </div>
                 <div className="flex justify-between items-end border-b border-white/5 pb-4">
                    <span className="text-[10px] uppercase tracking-widest text-white/20 font-black">Current Status</span>
                    <span className="text-sm font-bold text-green-500">Open for Bookings</span>
                 </div>
                 <div className="flex justify-between items-end border-b border-white/5 pb-4">
                    <span className="text-[10px] uppercase tracking-widest text-white/20 font-black">Reach</span>
                    <span className="text-sm font-bold">+8801568054539</span>
                 </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 reveal">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="space-y-12">
                  <div className="aspect-[3/4] bg-neutral-900 border border-white/5 rounded-sm overflow-hidden group">
                     <img 
                       src="https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1920&auto=format&fit=crop" 
                       className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 transition-all duration-700"
                       alt="Safikul"
                     />
                  </div>
                  <div className="p-8 border border-white/5 bg-white/[0.02]">
                     <h3 className="text-xl font-black uppercase tracking-tight mb-4">Philosophy</h3>
                     <p className="text-white/40 text-base leading-relaxed">
                       Editing isn't just about software—it's about understanding the heartbeat of the narrative. I treat every frame as a crucial beat in a larger rhythm.
                     </p>
                  </div>
               </div>
               
               <div className="space-y-12 md:pt-24">
                  <div className="p-8 border border-white/5 bg-white/[0.02]">
                     <h3 className="text-xl font-black uppercase tracking-tight mb-4">The Stack</h3>
                     <p className="text-white/40 text-base leading-relaxed mb-8">
                       Leveraging industry-standard tools to deliver cinematic excellence. Adobe Suite expert.
                     </p>
                     <div className="flex flex-wrap gap-4">
                        <span className="text-[10px] font-black uppercase tracking-widest border border-blue-500/30 px-3 py-1.5 rounded-full">Premiere Pro</span>
                        <span className="text-[10px] font-black uppercase tracking-widest border border-blue-500/30 px-3 py-1.5 rounded-full">After Effects</span>
                        <span className="text-[10px] font-black uppercase tracking-widest border border-blue-500/30 px-3 py-1.5 rounded-full">Audacity</span>
                        <span className="text-[10px] font-black uppercase tracking-widest border border-blue-500/30 px-3 py-1.5 rounded-full">Filmora</span>
                     </div>
                  </div>
                  <div className="aspect-square bg-neutral-900 border border-white/5 rounded-sm flex items-center justify-center p-12">
                     <div className="text-center">
                        <span className="text-6xl font-black text-white/5 leading-none">SFKL</span>
                        <span className="block text-[10px] uppercase tracking-[0.4em] text-blue-600 mt-4">Legacy in Motion</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>

      {/* Marquee to fill space at bottom of section */}
      <div className="mt-48 py-12 border-y border-white/5 bg-white/[0.01]">
         <div className="flex overflow-hidden whitespace-nowrap">
            <div className="animate-marquee flex items-center space-x-24">
               <span className="text-8xl md:text-[12vw] font-black uppercase tracking-tighter opacity-5 select-none italic">Cinematic.</span>
               <span className="text-8xl md:text-[12vw] font-black uppercase tracking-tighter opacity-5 select-none italic">Fluid.</span>
               <span className="text-8xl md:text-[12vw] font-black uppercase tracking-tighter opacity-5 select-none italic">Impactful.</span>
               <span className="text-8xl md:text-[12vw] font-black uppercase tracking-tighter opacity-5 select-none italic">Cinematic.</span>
               <span className="text-8xl md:text-[12vw] font-black uppercase tracking-tighter opacity-5 select-none italic">Fluid.</span>
               <span className="text-8xl md:text-[12vw] font-black uppercase tracking-tighter opacity-5 select-none italic">Impactful.</span>
            </div>
         </div>
      </div>
    </section>
  );
};

export default AboutMe;