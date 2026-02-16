
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Message } from '../types';

const AssistantFab: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi! I am Safikul\'s AI assistant. I can tell you about his 4 years of experience or help you book a meeting to discuss your next cinematic project!' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    try {
      // Correctly initializing GoogleGenAI using direct access to process.env.API_KEY as per coding guidelines
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are Safikul Islam's Personal AI Concierge.
          Safikul is a Professional Film Editor with 4 years of full-time experience.
          Goal: Encourage the user to book a meeting at https://cal.com/safikulislam.
          Do NOT provide a phone number or WhatsApp link anymore.
          Key Expertise: YouTube Vlogs, Commercial Ads, Event Highlights, Color Grading, and Motion Graphics.
          Tools: Premiere Pro, After Effects, Filmora.
          Tone: Professional, cinematic, and business-focused.
          Always mention that Safikul provides high-engagement "fluid cuts" that keep viewers locked in.`,
          temperature: 0.8,
        }
      });

      // Extracting generated text directly from the response object property as per guidelines
      const aiText = response.text || "Please book a meeting with Safikul at https://cal.com/safikulislam for immediate help!";
      setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);
    } catch (error) {
      console.error('Assistant Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I encountered an error. Please book a meeting at https://cal.com/safikulislam." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[90]">
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[420px] h-[550px] bg-[#121214] border border-white/10 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden animate-scale-up">
          {/* Header */}
          <div className="p-6 bg-blue-600 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-xl">🎬</div>
              <div>
                <h4 className="font-black text-sm uppercase tracking-tighter text-white">Safikul's Concierge</h4>
                <div className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="text-[10px] text-white/70 uppercase font-bold tracking-widest">Available for Session</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white p-2 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#0A0A0B] scroll-smooth">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none shadow-lg' 
                    : 'bg-white/5 text-white/90 rounded-bl-none border border-white/10'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 px-4 py-2 rounded-2xl rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-white/30 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-white/30 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-white/30 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Action */}
          <div className="px-6 py-2 bg-[#0A0A0B]">
            <a 
              href="https://cal.com/safikulislam" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full py-3 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400 text-[10px] font-bold uppercase tracking-widest hover:bg-blue-500/20 transition-all"
            >
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
              </svg>
              <span>Book a Meeting</span>
            </a>
          </div>

          {/* Input Area */}
          <div className="p-6 border-t border-white/5 bg-[#0A0A0B]">
            <div className="flex items-center space-x-3">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about my editing rates..."
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-blue-500 text-white placeholder:text-white/20"
              />
              <button 
                onClick={handleSend}
                disabled={isTyping}
                className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all disabled:opacity-50 active:scale-90 shadow-lg shadow-blue-600/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(37,99,235,0.4)] hover:scale-110 transition-transform active:scale-95 group"
      >
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white transition-transform group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-200 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
        </div>
      </button>
    </div>
  );
};

export default AssistantFab;
