
import React, { useState } from 'react';

interface AdminPanelProps {
  onLogout: () => void;
  onUpdateData: (newData: any) => void;
  currentData: any;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onLogout, onUpdateData, currentData }) => {
  const [activeTab, setActiveTab] = useState<'content' | 'security'>('content');
  const [localData, setLocalData] = useState(currentData);
  const [passwords, setPasswords] = useState({ old: '', new: '', confirm: '' });
  const [message, setMessage] = useState('');

  const handleSaveContent = () => {
    onUpdateData(localData);
    setMessage('Content saved successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  const handleChangePassword = () => {
    const storedPass = localStorage.getItem('safikul_admin_pass') || 'admin';
    if (passwords.old !== storedPass) {
      setMessage('Old password incorrect!');
    } else if (passwords.new !== passwords.confirm) {
      setMessage('Passwords do not match!');
    } else if (passwords.new.length < 4) {
      setMessage('Password too short (min 4 chars)');
    } else {
      localStorage.setItem('safikul_admin_pass', passwords.new);
      setMessage('Password updated successfully!');
      setPasswords({ old: '', new: '', confirm: '' });
    }
    setTimeout(() => setMessage(''), 3000);
  };

  const handleResetToDefault = () => {
    if (confirm("Reset all site content to factory defaults? This will erase all your custom images and text.")) {
      localStorage.removeItem('safikul_data');
      window.location.reload();
    }
  };

  const handleItemChange = (index: number, field: string, value: string) => {
    const newItems = [...localData.portfolio];
    newItems[index] = { ...newItems[index], [field]: value };
    setLocalData({ ...localData, portfolio: newItems });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] pt-24 pb-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
        <div className="flex flex-col sm:flex-row border-b border-white/5 bg-white/[0.02]">
          <div className="flex">
            <button 
              onClick={() => setActiveTab('content')}
              className={`flex-1 sm:flex-none px-6 md:px-8 py-5 font-bold text-xs uppercase tracking-widest ${activeTab === 'content' ? 'text-blue-500 border-b-2 border-blue-500 bg-white/5' : 'text-white/40'}`}
            >
              Site Content
            </button>
            <button 
              onClick={() => setActiveTab('security')}
              className={`flex-1 sm:flex-none px-6 md:px-8 py-5 font-bold text-xs uppercase tracking-widest ${activeTab === 'security' ? 'text-blue-500 border-b-2 border-blue-500 bg-white/5' : 'text-white/40'}`}
            >
              Security
            </button>
          </div>
          <button 
            onClick={onLogout}
            className="sm:ml-auto px-8 py-5 font-bold text-xs uppercase tracking-widest text-red-400 hover:bg-red-400/10 border-t sm:border-t-0 border-white/5"
          >
            Exit Admin
          </button>
        </div>

        <div className="p-4 md:p-10">
          {message && (
            <div className={`mb-6 p-4 rounded-xl text-center font-bold text-sm animate-fade-in ${message.includes('success') ? 'bg-green-600/20 text-green-400' : 'bg-red-600/20 text-red-400'}`}>
              {message}
            </div>
          )}

          {activeTab === 'content' ? (
            <div className="space-y-12">
              <section>
                <h3 className="text-xl font-serif font-bold mb-6 text-white/90 border-l-4 border-blue-500 pl-4">Hero Section (Main Banner)</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-white/30 ml-2">Main Title Text</label>
                    <input 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-blue-500 outline-none transition-all"
                      value={localData.heroTitle}
                      onChange={(e) => setLocalData({...localData, heroTitle: e.target.value})}
                      placeholder="e.g. TURNING RAW FOOTAGE INTO CINEMA"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-white/30 ml-2">Sub-description</label>
                    <textarea 
                      rows={3}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white resize-none focus:border-blue-500 outline-none transition-all"
                      value={localData.heroSubtitle}
                      onChange={(e) => setLocalData({...localData, heroSubtitle: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-white/30 ml-2">Hero Background Photo URL</label>
                    <input 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-blue-500 outline-none transition-all"
                      value={localData.heroBgUrl}
                      onChange={(e) => setLocalData({...localData, heroBgUrl: e.target.value})}
                      placeholder="https://images.unsplash.com/..."
                    />
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-center justify-between mb-8 border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-serif font-bold text-white/90">Portfolio Items</h3>
                  <span className="text-[10px] text-white/30 uppercase font-bold">{localData.portfolio.length} Projects</span>
                </div>
                <div className="grid grid-cols-1 gap-8">
                  {localData.portfolio.map((item: any, idx: number) => (
                    <div key={item.id} className="p-6 md:p-8 bg-white/[0.03] border border-white/10 rounded-3xl space-y-6 relative group hover:border-blue-500/30 transition-all">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-white/30">Project Title</label>
                            <input 
                              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white"
                              value={item.title}
                              onChange={(e) => handleItemChange(idx, 'title', e.target.value)}
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-white/30">Thumbnail Photo URL</label>
                            <input 
                              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white"
                              value={item.thumbnailUrl}
                              onChange={(e) => handleItemChange(idx, 'thumbnailUrl', e.target.value)}
                              placeholder="Image Link"
                            />
                          </div>
                        </div>
                        <div className="space-y-4">
                           <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-white/30">Category</label>
                            <select 
                              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white appearance-none"
                              value={item.category}
                              onChange={(e) => handleItemChange(idx, 'category', e.target.value)}
                            >
                              <option>Vlog</option>
                              <option>Commercial</option>
                              <option>Event</option>
                              <option>Highlight</option>
                            </select>
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold text-white/30">Video Embed URL (YouTube/Vimeo)</label>
                            <input 
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white"
                                value={item.videoUrl}
                                onChange={(e) => handleItemChange(idx, 'videoUrl', e.target.value)}
                                placeholder="https://www.youtube.com/embed/..."
                              />
                          </div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <div className="flex items-center space-x-4">
                           <img src={item.thumbnailUrl} alt="preview" className="w-16 h-12 object-cover rounded-lg border border-white/10" />
                           <span className="text-[10px] text-white/20 italic">Project Preview Active</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              
              <div className="sticky bottom-6">
                <button 
                  onClick={handleSaveContent}
                  className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl cinematic-glow shadow-[0_10px_40px_rgba(37,99,235,0.4)] transition-all active:scale-95"
                >
                  SAVE ALL CHANGES
                </button>
              </div>
            </div>
          ) : (
            <div className="max-w-md mx-auto space-y-10 py-10">
              <div className="space-y-6">
                <h3 className="text-xl font-serif font-bold text-white/90">Dashboard Security</h3>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-white/30 ml-2">Current Key</label>
                    <input 
                      type="password"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-blue-500"
                      value={passwords.old}
                      onChange={(e) => setPasswords({...passwords, old: e.target.value})}
                      placeholder="Old Password"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-white/30 ml-2">New Access Key</label>
                    <input 
                      type="password"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-blue-500"
                      value={passwords.new}
                      onChange={(e) => setPasswords({...passwords, new: e.target.value})}
                      placeholder="New Password"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-white/30 ml-2">Confirm New Key</label>
                    <input 
                      type="password"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-blue-500"
                      value={passwords.confirm}
                      onChange={(e) => setPasswords({...passwords, confirm: e.target.value})}
                      placeholder="Confirm New Password"
                    />
                  </div>
                </div>
                <button 
                  onClick={handleChangePassword}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all"
                >
                  UPDATE SECURITY KEY
                </button>
              </div>

              <div className="pt-10 border-t border-white/5 text-center">
                <h3 className="text-sm font-bold text-red-500/80 mb-2 uppercase tracking-widest">Danger Zone</h3>
                <p className="text-white/30 text-xs mb-6 px-4">Resetting will permanently delete all your uploaded photos and text changes.</p>
                <button 
                  onClick={handleResetToDefault}
                  className="px-8 py-3 border border-red-500/20 text-red-500/50 hover:bg-red-500 hover:text-white rounded-full text-[10px] font-bold transition-all uppercase tracking-widest"
                >
                  Reset Factory Defaults
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
