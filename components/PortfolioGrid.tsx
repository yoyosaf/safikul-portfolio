
import React, { useState } from 'react';
import { PortfolioItem } from '../types';

interface PortfolioGridProps {
  onItemSelect: (item: PortfolioItem) => void;
  items: PortfolioItem[];
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ onItemSelect, items }) => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Vlog', 'Commercial', 'Event'];

  const filteredItems = filter === 'All' 
    ? items 
    : items.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-48 px-6 md:px-12 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-32 gap-6 reveal">
          <div className="flex items-center space-x-6">
            <div className="h-[1px] w-24 bg-white/10"></div>
            <span className="text-[11px] font-black tracking-[0.4em] uppercase text-white/30">Archive 2023—2026</span>
          </div>
          <h2 className="text-7xl md:text-[10vw] font-black uppercase tracking-[-0.07em] leading-[0.85] mt-4">
            Creative<br/><span className="text-blue-600">Manifesto.</span>
          </h2>
          
          <div className="flex flex-wrap gap-8 mt-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[11px] font-black uppercase tracking-[0.3em] transition-all relative pb-2 group ${
                  filter === cat ? 'text-white' : 'text-white/20 hover:text-white'
                }`}
              >
                {cat}
                <span className={`absolute bottom-0 left-0 h-[1px] bg-blue-600 transition-all duration-500 ${filter === cat ? 'w-full' : 'w-0 group-hover:w-1/2'}`}></span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
          {filteredItems.map((item, idx) => (
            <div 
              key={item.id}
              onClick={() => onItemSelect(item)}
              className={`group cursor-pointer reveal`}
            >
              <div className={`img-container rounded-sm ${item.aspectRatio === '9:16' ? 'aspect-[3/4] max-w-[85%] mx-auto' : 'aspect-video'}`}>
                <img 
                  src={item.thumbnailUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 duration-700"
                />
                <div className="absolute top-6 left-6 flex items-center space-x-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span className="text-[9px] font-black uppercase tracking-widest bg-black/50 px-2 py-1 backdrop-blur-md rounded-full">{item.category}</span>
                </div>
              </div>
              <div className="mt-10 flex flex-col">
                <div className="flex items-end justify-between">
                  <h3 className="text-3xl font-black uppercase tracking-tighter transition-colors group-hover:text-blue-500">
                    {item.title}
                  </h3>
                  <span className="text-[11px] font-black text-white/10 uppercase tracking-widest mb-1 group-hover:text-blue-600 transition-colors">
                    {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                </div>
                <div className="h-[1px] w-0 group-hover:w-full bg-blue-600/30 mt-4 transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;