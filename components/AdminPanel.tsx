
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
    setMessage('Content successfully published to live site.');
    setTimeout(() => setMessage(''), 3000);
  };

  const handleChangePassword = () => {
    const storedPass = localStorage.getItem('safikul_admin_pass') || 'admin';
    if (passwords.old !== storedPass) {
      setMessage('Existing key is incorrect.');
    } else if (passwords.new !== passwords.confirm) {
      setMessage('New keys do not match.');
    } else if (passwords.new.length < 4) {
      setMessage('Key must be at least 4 characters.');
    } else {
      localStorage.setItem('safikul_admin_pass', passwords.new);
      setMessage('Security key updated.');
      setPasswords({ old: '', new: '', confirm: '' });
    }
    setTimeout(() => setMessage(''), 3000);
  };

  const handleItemChange = (index: number, field: string, value: string) => {
    const newItems = [...localData.portfolio];
    newItems[index] = { ...newItems[index], [field]: value };
    setLocalData({ ...localData, portfolio: newItems });
  };

  const InputField = ({ label, value, onChange, placeholder, type = "text" }: any) => (
    <div className="space-y-2">
      <label className="text-[10px] uppercase font-black tracking-[0.2em] text-white/30 ml-1">{label}</label>
      <input 
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-6 py-4 text-white focus:outline-none focus:border-blue-600 transition-all font-light"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#000] text-white pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">Studio<br/><span className="text-blue-600">Control.</span></h2>
            <p className="text-white/30 text-lg">Managing the digital presence of Safikul Islam.</p>
          </div>
          
          <div className="flex space-x-4">
            <button 
              onClick={() => setActiveTab('content')}
              className={`text-[11px] font-black uppercase tracking-[0.3em] pb-2 transition-all border-b-2 ${activeTab === 'content' ? 'border-blue-600 text-white' : 'border-transparent text-white/20'}`}
            >
              Content
            </button>
            <button 
              onClick={() => setActiveTab('security')}
              className={`text-[11px] font-black uppercase tracking-[0.3em] pb-2 transition-all border-b-2 ${activeTab === 'security' ? 'border-blue-600 text-white' : 'border-transparent text-white/20'}`}
            >
              Security
            </button>
            <button 
              onClick={onLogout}
              className="text-[11px] font-black uppercase tracking-[0.3em] text-red-500 hover:text-red-400 transition-colors pl-8"
            >
              Exit
            </button>
          </div>
        </div>

        {message && (
          <div className="fixed top-32 right-12 z-[200] bg-blue-600 text-white px-8 py-4 rounded-sm font-black text-[10px] uppercase tracking-widest shadow-2xl animate-fade-in">
            {message}
          </div>
        )}

        {activeTab === 'content' ? (
          <div className="space-y-24">
            {/* Hero Configuration */}
            <section className="reveal active">
              <div className="flex items-center space-x-6 mb-12">
                <div className="h-[1px] w-12 bg-blue-600"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500">Hero Section</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <InputField 
                  label="Hero Title" 
                  value={localData.heroTitle} 
                  onChange={(e: any) => setLocalData({...localData, heroTitle: e.target.value})}
                />
                <InputField 
                  label="Background Image URL" 
                  value={localData.heroBgUrl} 
                  onChange={(e: any) => setLocalData({...localData, heroBgUrl: e.target.value})}
                />
                <div className="md:col-span-2">
                  <InputField 
                    label="Hero Subtitle" 
                    value={localData.heroSubtitle} 
                    onChange={(e: any) => setLocalData({...localData, heroSubtitle: e.target.value})}
                  />
                </div>
              </div>
            </section>

            {/* Portfolio Configuration */}
            <section className="reveal active">
              <div className="flex items-center space-x-6 mb-12">
                <div className="h-[1px] w-12 bg-blue-600"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500">Portfolio Items</span>
              </div>
              <div className="grid grid-cols-1 gap-16">
                {localData.portfolio.map((item: any, idx: number) => (
                  <div key={item.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 p-8 border border-white/5 bg-white/[0.01] rounded-sm group hover:border-blue-600/30 transition-all">
                    <div className="lg:col-span-4">
                      <div className="aspect-video bg-neutral-900 rounded-sm overflow-hidden mb-4 relative">
                        <img src={item.thumbnailUrl} alt="Preview" className="w-full h-full object-cover opacity-60" />
                        <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black uppercase tracking-widest text-white/20">
                          Live Preview
                        </div>
                      </div>
                      <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Project ID: {item.id}</span>
                    </div>
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField label="Project Title" value={item.title} onChange={(e: any) => handleItemChange(idx, 'title', e.target.value)} />
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black tracking-[0.2em] text-white/30 ml-1">Category</label>
                        <select 
                          value={item.category}
                          onChange={(e: any) => handleItemChange(idx, 'category', e.target.value)}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-6 py-4 text-white focus:outline-none focus:border-blue-600 transition-all appearance-none cursor-pointer"
                        >
                          <option>Vlog</option>
                          <option>Commercial</option>
                          <option>Event</option>
                          <option>Highlight</option>
                        </select>
                      </div>
                      <InputField label="Thumbnail URL" value={item.thumbnailUrl} onChange={(e: any) => handleItemChange(idx, 'thumbnailUrl', e.target.value)} />
                      <InputField label="Video Embed URL" value={item.videoUrl} onChange={(e: any) => handleItemChange(idx, 'videoUrl', e.target.value)} />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="pt-12 border-t border-white/5">
              <button 
                onClick={handleSaveContent}
                className="w-full py-8 bg-blue-600 text-white font-black uppercase tracking-[0.4em] text-[12px] hover:bg-blue-700 transition-all active:scale-[0.98] shadow-2xl shadow-blue-600/20"
              >
                Publish Changes to Production
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-md mx-auto space-y-12 py-12 reveal active">
            <div className="space-y-8">
              <InputField label="Current Key" type="password" value={passwords.old} onChange={(e: any) => setPasswords({...passwords, old: e.target.value})} />
              <InputField label="New Access Key" type="password" value={passwords.new} onChange={(e: any) => setPasswords({...passwords, new: e.target.value})} />
              <InputField label="Confirm Key" type="password" value={passwords.confirm} onChange={(e: any) => setPasswords({...passwords, confirm: e.target.value})} />
              <button 
                onClick={handleChangePassword}
                className="w-full py-6 border border-white/20 text-white font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-black transition-all"
              >
                Update Access Key
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
