
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Services from './components/Services';
import VideoModal from './components/VideoModal';
import AssistantFab from './components/AssistantFab';
import AdminPanel from './components/AdminPanel';
import { PortfolioItem } from './types';
import { PORTFOLIO_ITEMS } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    // @ts-ignore
    if (window.refreshReveals) window.refreshReveals();
  }, [pathname]);
  return null;
};

const AppContent = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const initialData = JSON.parse(localStorage.getItem('safikul_data') || JSON.stringify({
    heroTitle: "TURNING RAW FOOTAGE INTO CINEMA",
    heroSubtitle: "Bringing professional rhythm to your vision.",
    heroBgUrl: "https://images.unsplash.com/photo-1492691523567-6170f229c411?q=80&w=2070&auto=format&fit=crop",
    portfolio: PORTFOLIO_ITEMS
  }));

  const [siteData, setSiteData] = useState(initialData);

  const handleUpdateData = (newData: any) => {
    setSiteData(newData);
    localStorage.setItem('safikul_data', JSON.stringify(newData));
  };

  const handleOpenModal = (item: PortfolioItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleWatchShowreel = () => {
    handleOpenModal({
      id: 'showreel',
      title: 'Official Showreel 2026',
      category: 'Highlight',
      thumbnailUrl: '',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      aspectRatio: '16:9'
    });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = (document.getElementById('admin_user') as HTMLInputElement).value;
    const pass = (document.getElementById('admin_pass') as HTMLInputElement).value;
    const storedPass = localStorage.getItem('safikul_admin_pass') || 'admin';
    
    if (user === 'admin' && pass === storedPass) {
      setIsAdmin(true);
    } else {
      alert('Authentication failed. Check your credentials.');
    }
  };

  return (
    <div className="min-h-screen bg-[#000] text-white selection:bg-blue-600/30 selection:text-white">
      <ScrollToTop />
      <Navbar />
      
      <main className="animate-page-transition">
        <Routes>
          <Route path="/" element={
            <>
              <Hero 
                onWatchShowreel={handleWatchShowreel} 
                title={siteData.heroTitle}
                subtitle={siteData.heroSubtitle}
                bgUrl={siteData.heroBgUrl}
              />
              <div className="reveal">
                <PortfolioGrid onItemSelect={handleOpenModal} items={siteData.portfolio.slice(0, 4)} />
              </div>
              <div className="flex justify-center pb-24">
                 <a href="/work" className="text-[11px] font-black uppercase tracking-[0.4em] border border-white/10 px-12 py-5 rounded-full hover:bg-white hover:text-black transition-all">View All Works</a>
              </div>
            </>
          } />
          
          <Route path="/about" element={<AboutMe />} />
          
          <Route path="/work" element={
            <div className="pt-20">
              <PortfolioGrid onItemSelect={handleOpenModal} items={siteData.portfolio} />
            </div>
          } />
          
          <Route path="/services" element={
            <div className="pt-32">
              <Services />
            </div>
          } />
          
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/admin" element={
            isAdmin ? (
              <AdminPanel 
                currentData={siteData} 
                onLogout={() => setIsAdmin(false)} 
                onUpdateData={handleUpdateData} 
              />
            ) : (
              <div className="min-h-screen bg-[#000] flex items-center justify-center px-6 pt-24">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-[20vw] font-black opacity-5 uppercase tracking-tighter">Secure</div>
                </div>
                <form onSubmit={handleLogin} className="relative z-10 max-w-md w-full bg-white/[0.02] border border-white/5 p-12 rounded-sm space-y-8 backdrop-blur-3xl">
                  <div className="text-center space-y-2">
                    <h2 className="text-3xl font-black uppercase tracking-tighter">Studio Access</h2>
                    <p className="text-[10px] text-white/30 uppercase tracking-[0.3em]">Restricted to Safikul Islam</p>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-1">
                        <label className="text-[9px] uppercase font-black text-white/20 tracking-widest ml-1">Username</label>
                        <input id="admin_user" className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-4 text-white outline-none focus:border-blue-600 transition-colors" placeholder="admin" defaultValue="admin" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-[9px] uppercase font-black text-white/20 tracking-widest ml-1">Security Key</label>
                        <input id="admin_pass" type="password" className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-4 text-white outline-none focus:border-blue-600 transition-colors" placeholder="••••••••" />
                    </div>
                  </div>
                  <button type="submit" className="w-full py-5 bg-blue-600 text-white font-black uppercase tracking-[0.3em] text-[10px] hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95">Authenticate</button>
                  <a href="/" className="block text-center text-white/20 text-[10px] uppercase tracking-widest mt-4 hover:text-white transition-colors">Return to Showcase</a>
                </form>
              </div>
            )
          } />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Contact />

      <VideoModal 
        item={selectedItem} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />

      <AssistantFab />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
