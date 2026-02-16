
import React from 'react';
import { PortfolioItem } from '../types';

interface PortfolioGridProps {
  onItemSelect: (item: PortfolioItem) => void;
  items: PortfolioItem[];
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ onItemSelect, items }) => {
  return (
    <section className="bg-[#050505] py-32 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-32 reveal">
          <h3 className="text-5xl md:text-[6vw] font-black uppercase tracking-tighter">Selected<br/><span className="text-blue-600">Works.</span></h3>
          <p className="text-[11px] font-black uppercase tracking-[0.4em] text-white/20 mt-8 md:mt-0">Filtered by Quality</p>
        </div>

        <div className="space-y-64">
          {items.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={item.id} 
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 reveal`}
              >
                <div 
                  className={`w-full group cursor-pointer ${isEven ? 'md:w-3/5' : 'md:w-3/5'}`}
                  onClick={() => onItemSelect(item)}
                >
                  <div className="image-reveal aspect-video md:aspect-[16/10] bg-neutral-900 overflow-hidden">
                    <img 
                      src={item.thumbnailUrl} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>
                  
                  <div className="mt-8 flex items-baseline space-x-6">
                    <span className="text-[11px] font-black text-white/20 uppercase tracking-widest">0{idx + 1}</span>
                    <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tighter group-hover:text-blue-500 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <div className="mt-2 ml-10">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">{item.category}</span>
                  </div>
                </div>

                <div className="hidden md:flex flex-col md:w-1/5 space-y-6">
                  <p className="text-[10px] leading-relaxed uppercase tracking-widest text-white/20 font-bold">
                    Professional Editing<br/>
                    Color Grading<br/>
                    Motion Graphics
                  </p>
                  <div className="h-[1px] w-12 bg-blue-600/30"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
