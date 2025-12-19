
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { X, Bot, Send, Cpu, Sparkles } from 'lucide-react';

interface Message {
  role: 'user' | 'ai';
  text: string;
}

interface AIConsultantProps {
  onClose: () => void;
}

const AIConsultant: React.FC<AIConsultantProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: 'أهلاً بك في وحدة المعالجة المركزية. أنا مساعد المهندس أحمد. هل لديك استفسار "منطقي" في الفيزياء أو البرمجة؟' }
  ]);
  const [history, setHistory] = useState<any[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    
    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setLoading(true);

    try {
      const result = await getGeminiResponse(userText, history);
      
      if (result.functionCalls && result.functionCalls.length > 0) {
        const call = result.functionCalls[0];
        if (call.name === "send_email_to_ahmed") {
          await new Promise(r => setTimeout(r, 1500));
          const confirmationText = `تمت معالجة طلبك وإرساله بنجاح لبريد المهندس أحمد. هل هناك عملية أخرى تريد تنفيذها؟`;
          setMessages(prev => [...prev, { role: 'ai', text: confirmationText }]);
          setHistory(prev => [
            ...prev, 
            { role: 'user', parts: [{ text: userText }] },
            { role: 'model', parts: [{ text: confirmationText }] }
          ]);
        }
      } else {
        const aiText = result.text || "حدث خطأ في استجابة الموديل.";
        setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
        setHistory(prev => [
          ...prev, 
          { role: 'user', parts: [{ text: userText }] },
          { role: 'model', parts: [{ text: aiText }] }
        ]);
      }
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', text: "عذراً، يبدو أن هناك تشويشاً في الإشارة. حاول مرة أخرى." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-2xl flex items-center justify-center p-4 animate__animated animate__fadeIn">
      <div className="bg-[#080808] w-full max-w-2xl rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,242,255,0.1)] flex flex-col h-[85vh] relative">
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[60px] pointer-events-none"></div>

        {/* Header */}
        <div className="p-8 bg-zinc-900/40 flex items-center justify-between border-b border-white/5 flex-row-reverse relative z-10">
          <div className="flex items-center gap-4 flex-row-reverse">
             <div className="w-14 h-14 bg-gradient-to-br from-white to-gray-400 text-black rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
                <Bot className="w-7 h-7" />
             </div>
             <div className="text-right">
                <p className="font-black text-xl tracking-tight">بروتوكول الجعيدي</p>
                <div className="flex items-center gap-2 justify-end">
                   <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-[0.2em]">Quantum Engine V3.1</p>
                   <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                   </span>
                </div>
             </div>
          </div>
          <button onClick={onClose} className="p-3 hover:bg-white/5 rounded-2xl transition-all text-white border border-transparent hover:border-white/10">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Chat Area */}
        <div ref={scrollRef} className="flex-grow overflow-y-auto p-10 space-y-8 scroll-smooth">
          {messages.map((m, idx) => (
            <div key={idx} className={`flex ${m.role === 'user' ? 'justify-start' : 'justify-end'} animate__animated animate__fadeInUp animate__faster`}>
              <div className={`max-w-[80%] px-7 py-5 rounded-[2.2rem] text-[15px] leading-relaxed text-right relative shadow-2xl ${
                m.role === 'user' 
                ? 'bg-white text-black rounded-tr-none font-bold' 
                : 'bg-zinc-900/80 text-gray-200 rounded-tl-none border border-white/5 glass-card'
              }`}>
                {m.text}
                {m.role === 'ai' && <Sparkles className="w-3 h-3 absolute -top-1 -left-1 text-cyan-400 opacity-50" />}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-end animate__animated animate__fadeIn">
              <div className="bg-zinc-900/50 px-8 py-5 rounded-[2.2rem] rounded-tl-none border border-white/5 flex gap-3 items-center">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mr-2">Thinking...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-8 bg-zinc-900/20 border-t border-white/5 backdrop-blur-xl">
          <div className="relative group">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="w-full bg-black/50 border border-white/10 rounded-[2rem] pl-24 pr-10 py-6 focus:border-cyan-400/50 outline-none transition-all text-[15px] text-right text-white shadow-inner"
              placeholder="اكتب أمراً برمجياً أو استفساراً علمياً..."
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim() || loading}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white text-black px-7 py-4 rounded-[1.5rem] text-xs font-black hover:bg-cyan-400 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-xl disabled:opacity-30"
            >
              إرسال <Send className="w-4 h-4" />
            </button>
          </div>
          <div className="flex justify-between items-center mt-5 px-4">
             <p className="text-[9px] text-gray-600 uppercase tracking-[0.2em] flex items-center gap-2">
                <Cpu className="w-3 h-3" /> Logic Protocol Enabled
             </p>
             <p className="text-[9px] text-gray-600 uppercase tracking-[0.2em]">
                Ahmed Elgeady © 2024
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIConsultant;
