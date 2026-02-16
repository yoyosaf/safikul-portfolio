
import React from 'react';

const SoftwareStack: React.FC = () => {
  const tools = [
    { 
      name: 'Premiere Pro', 
      color: '#9999FF',
      icon: <path d="M4 4h16v16H4V4zm4 4v8h2v-3h2v3h2V8H8zm2 2h2v1h-2v-1z" />
    },
    { 
      name: 'After Effects', 
      color: '#CF96FD',
      icon: <path d="M4 4h16v16H4V4zm4 4v8h2v-3h2v3h2V8H8zm2 2h2v1h-2v-1z" /> // Generic icon for aesthetic
    },
    { 
      name: 'Audacity', 
      color: '#00E5FF',
      icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    },
    { 
      name: 'CapCut', 
      color: '#FFFFFF',
      icon: <path d="M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 16l-5-5h10l-5 5z" />
    },
    { 
      name: 'Figma', 
      color: '#F24E1E',
      icon: <path d="M8.5 12a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z" />
    },
    { 
      name: 'Photoshop', 
      color: '#31A8FF',
      icon: <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-3h2v3zm0-4H7V8h2v5zm4 4h-2V8h2v9zm4 0h-2v-6h2v6zm0-7h-2V8h2v2z" />
    },
    { 
      name: 'Prompt Engineering', 
      color: '#4ade80',
      icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    }
  ];

  return (
    <div className="py-12 border-b border-white/5 bg-[#050505]/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-white/30 mb-10 font-bold">The Technical Arsenal</p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {tools.map((tool, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-3 group cursor-default">
              <svg 
                viewBox="0 0 24 24" 
                className="w-8 h-8 transition-all group-hover:scale-110" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ color: tool.color }}
              >
                {tool.icon}
              </svg>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftwareStack;
