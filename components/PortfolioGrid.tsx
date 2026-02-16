
import React, { useState } from 'react';
import { PortfolioItem } from '../types';

interface PortfolioGridProps {
  onItemSelect: (item: PortfolioItem) => void;
  items: PortfolioItem[];
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ onItemSelect, items }) => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Vlog', 'Commercial', 'Event', 'Highlight'];

  const filteredItems = filter === 'All' 
    ? items 
    : items.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-7xl font-serif font-bold mb-4">Selected Works</h2>
          <p className="text-white/50 max-w-md text-lg">A curated selection of my most impactful projects.</p>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-all border ${
                filter === cat 
                  ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                  : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10 hover:text-white hover:border-white/20'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div 
            key={item.id}
            onClick={() => onItemSelect(item)}
            className="group cursor-pointer relative overflow-hidden rounded-3xl bg-[#111112] border border-white/5 transition-all hover:border-blue-500/50"
          >
            <div className={`relative overflow-hidden bg-[#1a1a1b] ${item.aspectRatio === '9:16' ? 'aspect-[9/16]' : item.aspectRatio === '1:1' ? 'aspect-square' : 'aspect-video'}`}>
              <img 
                src={item.thumbnailUrl} 
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center scale-90 group-hover:scale-100 transition-all duration-500 shadow-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold text-blue-400 rounded-full tracking-widest uppercase">
                  {item.category}
                </span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-serif font-bold group-hover:text-blue-400 transition-colors leading-tight">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioGrid;
