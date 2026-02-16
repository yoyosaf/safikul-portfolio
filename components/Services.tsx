
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">Core Expertise</h2>
          <p className="text-white/50 max-w-xl mx-auto">Beyond just cutting clips, I offer a comprehensive suite of editing services to elevate your brand.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-[#0A0A0B] border border-white/5 hover:border-blue-500/30 transition-all hover:-translate-y-2 group">
              <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{service.title}</h3>
              <p className="text-white/40 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
