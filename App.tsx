
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
      thumbnailUrl: 'https://images.unsplash.com/photo-1492691523567-6170f229c411?q=80&w=2070&auto=format&fit=crop',
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
      alert('Authentication failed.');
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-600/30">
      <ScrollToTop />
      <Navbar />
      
      <main className="min-h-screen">
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
              <div className="flex justify-center pb-32">
                 <a href="/work" className="text-[10px] font-black uppercase tracking-[0.5em] border border-white/10 px-12 py-5 hover:bg-white hover:text-black transition-all">Explore Full Gallery</a>
              </div>
              <Contact />
            </>
          } />
          
          <Route path="/about" element={<><AboutMe /><Contact /></>} />
          
          <Route path="/work" element={
            <div className="pt-20">
              <PortfolioGrid onItemSelect={handleOpenModal} items={siteData.portfolio} />
              <Contact />
            </div>
          } />
          
          <Route path="/services" element={
            <div className="pt-32">
              <Services />
              <Contact />
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
              <div className="min-h-screen bg-[#000] flex items-center justify-center px-6">
                <form onSubmit={handleLogin} className="relative z-10 max-w-md w-full bg-white/[0.02] border border-white/5 p-12 space-y-8 backdrop-blur-3xl">
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl font-black uppercase tracking-tighter">Studio Access</h2>
                    <p className="text-[9px] text-white/20 uppercase tracking-[0.4em]">Restricted Entry</p>
                  </div>
                  <div className="space-y-4">
                    <input id="admin_user" className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-4 text-white outline-none focus:border-blue-600 transition-colors text-sm" placeholder="Username" defaultValue="admin" />
                    <input id="admin_pass" type="password" className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-4 text-white outline-none focus:border-blue-600 transition-colors text-sm" placeholder="Security Key" />
                  </div>
                  <button type="submit" className="w-full py-5 bg-blue-600 text-white font-black uppercase tracking-[0.3em] text-[10px] hover:bg-blue-700 transition-all">Authenticate</button>
                  <a href="/" className="block text-center text-white/20 text-[9px] uppercase tracking-widest mt-4">Return</a>
                </form>
              </div>
            )
          } />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

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
