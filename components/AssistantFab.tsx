
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Message } from '../types';

const AssistantFab: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi there! I am Safikul\'s AI assistant. How can I help you today?' }
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
      // Create instance right before call as per guidelines for best results with environment keys
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [{ parts: [{ text: userMessage }] }],
        config: {
          systemInstruction: `You are Safikul Islam's personal AI Assistant. 
          Safikul is a professional Film Editor with 4 years of experience.
          Key strengths: Fluid Storytelling, Color Grading, Motion Graphics (After Effects), Brand Intros/Outros.
          Software stack: Adobe Premiere Pro, After Effects, Audacity, CapCut, Figma, Photoshop, Illustrator, and Prompt Engineering.
          Style: Cinematic, high-engagement, "Netflix-style".
          Social Links: 
          - YouTube: https://www.youtube.com/@KhulnaVlogs
          - Facebook: https://www.facebook.com/Safikulislamsaf
          - WhatsApp: +8801568054539
          - LinkedIn: https://www.linkedin.com/in/safikulislam1/
          
          Guidelines:
          - Be professional, concise, and cinematic in tone.
          - For contact, point users to the WhatsApp (+8801568054539) or the contact form at the bottom of the page.
          - If asked about specific tools, explain how Safikul uses them to enhance the video quality.
          - If a connection error occurs, apologize and point them to the manual contact section.`,
          temperature: 0.7,
        }
      });

      const aiText = response.text || "I'm here to help, but I'm having trouble connecting to my brain right now! Please try again or message Safikul directly.";
      setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);
    } catch (error: any) {
      console.error('AI Error:', error);
      let errorMsg = "I encountered a connection issue. This can happen if the network is unstable or if there's a temporary service interruption.";
      
      if (error?.message?.includes('API_KEY')) {
        errorMsg = "There is a configuration issue with the API service. Please try contacting Safikul through the WhatsApp or contact form below.";
      }
      
      setMessages(prev => [...prev, { role: 'assistant', content: errorMsg }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[80]">
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[320px] md:w-[400px] h-[500px] bg-[#161617] border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-scale-up">
          <div className="p-4 bg-blue-600 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg">🤖</div>
              <span className="font-bold text-sm">Safikul's Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-white/5 text-white/80 rounded-bl-none border border-white/5'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-3 rounded-2xl rounded-bl-none animate-pulse">
                  <span className="text-white/40">Analyzing...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/5 bg-[#0A0A0B]">
            <div className="flex items-center space-x-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about my experience..."
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-blue-500 text-white"
              />
              <button 
                onClick={handleSend}
                disabled={isTyping}
                className={`w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors ${isTyping ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-90" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl cinematic-glow hover:scale-110 transition-transform z-[80]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
    </div>
  );
};

export default AssistantFab;
