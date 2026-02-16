
import React from 'react';
import { PortfolioItem } from '../types';

interface VideoModalProps {
  item: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ item, isOpen, onClose }) => {
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-xl animate-fade-in" 
        onClick={onClose} 
      />
      
      <div className="relative w-full max-w-6xl animate-scale-up">
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className={`w-full overflow-hidden rounded-2xl bg-black shadow-2xl ${item.aspectRatio === '9:16' ? 'max-w-[450px] mx-auto aspect-[9/16]' : 'aspect-video'}`}>
          <iframe 
            src={item.videoUrl} 
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>

        <div className="mt-6 text-center">
          <h3 className="text-2xl md:text-3xl font-serif font-bold">{item.title}</h3>
          <p className="text-blue-400 font-bold uppercase tracking-widest text-sm mt-2">{item.category}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
