
import React from 'react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#000] pt-64 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="reveal mb-48">
          <div className="flex items-center space-x-6 mb-12">
             <div className="h-[1px] w-24 bg-blue-600"></div>
             <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-500">Connect Now</span>
          </div>
          <h2 className="text-[12vw] font-black uppercase tracking-[-0.07em] leading-[0.8] mb-16">
            Make it<br/>
            <span className="text-white italic font-serif lowercase tracking-[-0.03em] opacity-20">memorable.</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
               <p className="text-3xl md:text-4xl font-light text-white/40 leading-tight">
                 Currently accepting new projects for <span className="text-white">Q3—Q4 2026.</span> Let's define the next visual standard together.
               </p>
               <div className="flex flex-col sm:flex-row gap-8">
                  <a 
                    href="https://cal.com/safikulislam" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-12 py-7 bg-white text-black text-[12px] font-black uppercase tracking-[0.3em] rounded-sm hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-2xl inline-block text-center"
                  >
                    Book Meeting
                  </a>
                  <a 
                    href="tel:+8801568054539" 
                    className="px-12 py-7 border border-white/20 text-white text-[12px] font-black uppercase tracking-[0.3em] rounded-sm hover:bg-white hover:text-black transition-all duration-500 inline-block text-center"
                  >
                    Call Safikul
                  </a>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-x-12 gap-y-16">
               <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/20 block mb-6">Contact</span>
                  <a href="mailto:safikul.editors@gmail.com" className="text-lg font-bold border-b border-white/10 pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">
                    Email
                  </a>
               </div>
               <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/20 block mb-6">Social</span>
                  <div className="flex flex-col space-y-3">
                    <a href="https://www.youtube.com/@KhulnaVlogs" className="text-lg font-bold hover:text-blue-600 transition-colors">YouTube</a>
                    <a href="https://www.facebook.com/Safikulislamsaf" className="text-lg font-bold hover:text-blue-600 transition-colors">Facebook</a>
                    <a href="https://www.linkedin.com/in/safikulislam1/" className="text-lg font-bold hover:text-blue-600 transition-colors">LinkedIn</a>
                  </div>
               </div>
               <div className="col-span-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/20 block mb-6">Location</span>
                  <p className="text-lg font-bold">Khulna, BD / Remote Global</p>
               </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 pt-12 border-t border-white/5 opacity-40">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-[10px] font-black">SF</div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Safikul Islam — © 2026</span>
          </div>
          
          <div className="text-[10px] font-black uppercase tracking-[0.4em]">
            Curated with Precision
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;