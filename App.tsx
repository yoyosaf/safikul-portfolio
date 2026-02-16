
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import Services from './components/Services';
import SoftwareStack from './components/SoftwareStack';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import VideoModal from './components/VideoModal';
import AssistantFab from './components/AssistantFab';
import AdminPanel from './components/AdminPanel';
import { PortfolioItem } from './types';
import { PORTFOLIO_ITEMS } from './constants';

const App: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminView, setIsAdminView] = useState(false);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Data Persistence Logic
  const initialData = JSON.parse(localStorage.getItem('safikul_data') || JSON.stringify({
    heroTitle: "TURNING RAW FOOTAGE INTO CINEMA",
    heroSubtitle: "4+ Years of crafting high-engagement edits with fluid transitions and professional color grading for creators who demand excellence.",
    heroBgUrl: "https://images.unsplash.com/photo-1492691523567-6170f229c411?q=80&w=2070&auto=format&fit=crop",
    portfolio: PORTFOLIO_ITEMS
  }));

  const [siteData, setSiteData] = useState(initialData);

  // Sync hash changes for routing to Admin
  useEffect(() => {
    const handleHashChange = () => {
      setIsAdminView(window.location.hash === '#admin');
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check initial hash
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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
      alert('Invalid Credentials. Use user: admin, pass: admin (if default).');
    }
  };

  const handleResetPassword = () => {
    if (confirm("Reset password to 'admin'? You will be logged out.")) {
      localStorage.setItem('safikul_admin_pass', 'admin');
      setIsAdmin(false);
    }
  };

  if (isAdminView) {
    if (!isAdmin) {
      return (
        <div className="min-h-screen bg-[#0A0A0B] flex items-center justify-center px-6">
          <form onSubmit={handleLogin} className="max-w-md w-full bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-3xl space-y-6 animate-scale-up">
            <div className="text-center mb-8">
               <h2 className="text-3xl font-serif font-bold mb-2">Editor Login</h2>
               <p className="text-white/40 text-sm italic">Access restricted to Safikul Islam</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold ml-1">Username</label>
                <input id="admin_user" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none transition-all" placeholder="admin" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold ml-1">Password</label>
                <input id="admin_pass" type="password" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none transition-all" placeholder="••••••••" />
              </div>
            </div>
            <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xl transition-all active:scale-95">LOGIN TO DASHBOARD</button>
            <div className="pt-4 flex items-center justify-between">
               <a href="/" className="text-white/40 text-xs hover:text-white transition-colors">← Back to Site</a>
               <button type="button" onClick={() => alert("Contact site developer or clear local storage to reset password manually.")} className="text-white/20 text-[10px] hover:text-white">Forgot Password?</button>
            </div>
          </form>
        </div>
      );
    }
    return (
      <AdminPanel 
        currentData={siteData} 
        onLogout={() => {
          setIsAdmin(false);
          window.location.hash = '';
        }} 
        onUpdateData={handleUpdateData} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white selection:bg-blue-500/30">
      <Navbar />
      
      <main>
        <Hero 
          onWatchShowreel={handleWatchShowreel} 
          title={siteData.heroTitle}
          subtitle={siteData.heroSubtitle}
          bgUrl={siteData.heroBgUrl}
        />
        <SoftwareStack />
        <PortfolioGrid onItemSelect={handleOpenModal} items={siteData.portfolio} />
        <Services />
        <AboutMe />
        <Contact />
      </main>

      <VideoModal 
        item={selectedItem} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />

      <AssistantFab />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-scale-up {
          animation: scaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
