
import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden cinematic-glow border border-blue-500/20">
            <img 
              src="https://picsum.photos/seed/safikul/800/800" 
              alt="Safikul Islam" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-blue-600 p-8 rounded-2xl hidden md:block">
            <span className="text-4xl font-bold block">4+</span>
            <span className="text-xs uppercase tracking-widest font-bold">Years Experience</span>
          </div>
        </div>

        <div>
          <span className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-4 block">Meet Your Editor</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Safikul Islam</h2>
          <div className="space-y-6 text-white/70 leading-relaxed text-lg">
            <p>
              With over 4 years of full-time professional experience, I have dedicated my career to mastering the art of visual storytelling. My journey began with a passion for gaming montages and evolved into high-end commercial work.
            </p>
            <p>
              I believe that every frame matters. My editing style is characterized by "fluid cuts"—a technique that ensures no viewer ever feels a jarring transition, keeping them locked in for the entire duration of the video.
            </p>
            <p>
              I don't just "edit" videos; I build experiences. Whether it's a 30-second brand intro or a 20-minute travel vlog, I treat every project with the same level of obsession for detail and engagement.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold mb-2">150+</h4>
              <p className="text-sm text-white/40 uppercase tracking-tighter">Projects Completed</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">50M+</h4>
              <p className="text-sm text-white/40 uppercase tracking-tighter">Combined Views</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
