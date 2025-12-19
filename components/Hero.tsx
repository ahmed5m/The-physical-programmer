
import React, { useEffect, useState, useRef } from 'react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);
  const fullText = "أطوع قوانين الفيزياء لشرح الكون، وأستخدم منطق البرمجيات لبناء المستقبل الرقمي.";
  const titleRef = useRef(null);
  const statsRef = useRef(null);

  // Typing Effect Fix
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + fullText[index]);
        setIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  // GSAP Animations
  useEffect(() => {
    // @ts-ignore
    const gsap = window.gsap;
    if (gsap) {
      const tl = gsap.timeline();
      tl.from(".hero-badge", { y: -50, opacity: 0, duration: 1, ease: "power4.out" })
        .from(".hero-title", { x: 100, opacity: 0, duration: 1.5, ease: "power4.out" }, "-=0.5")
        .from(".hero-stats", { y: 50, opacity: 0, stagger: 0.2, duration: 1, ease: "back.out(1.7)" }, "-=1")
        .from(".hero-image", { scale: 0.8, opacity: 0, duration: 2, ease: "power4.out" }, "-=1.5");
    }
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-24 pt-32 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 text-right">
        <div className="hero-badge inline-block px-6 py-2 border border-white/5 glass-card rounded-full mb-12">
          <span className="text-[11px] font-black tracking-[0.5em] text-cyan-400 uppercase">Ahmed Elgeady / System Architect</span>
        </div>

        <h1 className="hero-title text-[15vw] lg:text-[12vw] font-black leading-[0.7] tracking-tighter mb-16 flex flex-col items-end">
          <span>أحمد</span>
          <span className="text-outline hover:text-white transition-all duration-700 cursor-default">الجعيدي</span>
        </h1>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 text-right">
            <p className="text-2xl lg:text-4xl font-extralight text-gray-400 leading-[1.6] mb-12 min-h-[4em]">
              {/* Highlight logic in typed text isn't possible directly with string typing, 
                  but we can highlight specific words in the final rendering if we want.
                  For now, let's keep the typing clean and focus on the UI below. */}
              {typedText}
              <span className="inline-block w-1.5 h-10 bg-cyan-400 mr-2 animate-pulse align-middle"></span>
            </p>
            
            <div className="flex gap-8 justify-end hero-stats">
              <div className="p-8 glass-card rounded-[2.5rem] border-white/10 hover:border-cyan-500/30 transition-all duration-500">
                <p className="text-5xl font-black text-white font-space">16</p>
                <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-[0.3em] mt-3">العمر الزمني</p>
              </div>
              <div className="p-8 glass-card rounded-[2.5rem] border-white/10 hover:border-amber-500/30 transition-all duration-500">
                <p className="text-5xl font-black text-white font-space">+4</p>
                <p className="text-[10px] text-amber-400 font-bold uppercase tracking-[0.3em] mt-3">خبرة تقنية</p>
              </div>
            </div>

            <div className="mt-16 flex justify-end gap-10 opacity-30">
               <span className="font-space text-sm tracking-widest uppercase">Logic</span>
               <span className="font-space text-sm tracking-widest uppercase">Physics</span>
               <span className="font-space text-sm tracking-widest uppercase">Algorithm</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="hero-image w-full aspect-[4/5] bg-zinc-900 rounded-[4rem] overflow-hidden border border-white/5 relative group shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                 className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-110 group-hover:scale-100"
                 alt="Ahmed Elgeady"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-12 flex flex-col justify-end">
                  <h4 className="text-3xl font-black mb-4">
                    <span className="highlight-cyan">المنطق</span> أولاً، <br />
                    <span className="highlight-amber">الكود</span> دائماً.
                  </h4>
                  <p className="text-gray-400 text-sm font-light">مواليد مدينة المنصورة، 2008.</p>
               </div>
            </div>
            
            {/* Floating Formulas with GSAP potential */}
            <div className="absolute -top-10 -right-10 font-space text-7xl opacity-5 select-none -rotate-12">F=ma</div>
            <div className="absolute -bottom-10 -left-10 font-space text-7xl opacity-5 select-none rotate-12">{"<>"}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
