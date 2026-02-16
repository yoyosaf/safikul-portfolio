
import React from 'react';

const AboutMe: React.FC = () => {
  const tools = [
    { name: 'Premiere Pro', color: '#9999FF' },
    { name: 'After Effects', color: '#CF96FD' },
    { name: 'Audacity', color: '#00E5FF' },
    { name: 'Filmora', color: '#FFFFFF' },
    { name: 'Photoshop', color: '#31A8FF' },
    { name: 'DaVinci Resolve', color: '#FFB347' }
  ];

  return (
    <section className="py-64 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-12 reveal">
            <h2 className="text-[12vw] font-black uppercase tracking-[-0.08em] leading-[0.8] mb-32">
              Beyond<br/><span className="text-blue-600">The Frame.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 reveal transition-delay-200">
            <div className="aspect-[4/5] bg-neutral-900 grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1920&auto=format&fit=crop" 
                 className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
                 alt="Safikul"
               />
            </div>
            <p className="mt-8 text-[10px] font-black uppercase tracking-[0.5em] text-white/20">Safikul Islam — Lead Editor & Creative Director</p>
          </div>

          <div className="lg:col-span-7 reveal transition-delay-400 space-y-16">
            <h3 className="text-4xl md:text-5xl font-light leading-tight text-white/70">
              Editing is the <span className="text-white">final rewrite</span>. I transform raw vision into rhythmic cinematic experiences that capture the essence of the story.
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/5">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 block mb-6">Experience</span>
                <p className="text-white/40 leading-relaxed text-sm">
                  4 years of full-time professional experience. I specialize in high-engagement "fluid cuts" for global brands and leading creators.
                </p>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 block mb-6">Philosophy</span>
                <p className="text-white/40 leading-relaxed text-sm">
                  Rhythm over rules. Every transition is a heartbeat, every frame is an emotion. Narrative precision is non-negotiable.
                </p>
              </div>
            </div>

            <div className="pt-24">
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 block mb-10">Technical Arsenal</span>
               <div className="flex flex-wrap gap-x-10 gap-y-6">
                  {tools.map(tool => (
                    <div key={tool.name} className="group cursor-default">
                        <span className="text-[11px] font-black uppercase tracking-[0.3em] border-b border-white/10 pb-2 group-hover:border-blue-600 group-hover:text-blue-500 transition-all block">
                            {tool.name}
                        </span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-64 py-16 border-y border-white/5 flex overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex space-x-24">
          {['CINEMATIC', 'FLUID', 'NARRATIVE', 'RYTHMIC', 'CINEMATIC', 'FLUID', 'NARRATIVE', 'RYTHMIC'].map((text, i) => (
            <span key={i} className="text-[15vw] font-black uppercase tracking-tighter opacity-[0.03] italic">{text}.</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
