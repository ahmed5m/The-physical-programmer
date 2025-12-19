
import React, { useEffect, useState } from 'react';
import { 
  Atom, 
  ChevronLeft, 
  Target, 
  Activity,
  Infinity,
  Send,
} from 'lucide-react';

const PhysicsPage: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullQuote = "الفيزياء ليست مجرد مادة دراسية، هي الكود المصدري الذي كُتب به الكون، ونحن هنا لنعلمك كيف تقرأه بذكاء كطالب متميز.";

  useEffect(() => {
    let currentIdx = 0;
    const interval = setInterval(() => {
      setTypedText(fullQuote.slice(0, currentIdx));
      currentIdx++;
      if (currentIdx > fullQuote.length) clearInterval(interval);
    }, 40);
    
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, []);

  const scrollToBooking = () => {
    const bookingForm = document.getElementById('physics-booking');
    if (bookingForm) {
      bookingForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const grades = [
    {
      level: 'LEVEL 01',
      title: 'الصف الأول الثانوي',
      desc: 'تأسيس العقلية الفيزيائية: من فهم القياس والخطأ إلى إتقان قوانين الحركة والقوة والشغل.',
      topics: ['القياس الفيزيائي', 'الحركة الخطية', 'قوانين نيوتن', 'الشغل والطاقة'],
      icon: <Target className="w-8 h-8 text-cyan-400" />
    },
    {
      level: 'LEVEL 02',
      title: 'الصف الثاني الثانوي',
      desc: 'استكشاف المادة والطاقة: رحلة عميقة في خصائص الموائع، اهتزاز الأمواج، وعلم الضوء الحديث.',
      topics: ['ميكانيكا الموائع', 'الحركة الموجية', 'الضوء الهندسي', 'الديناميكا الحرارية'],
      icon: <Activity className="w-8 h-8 text-cyan-400" />
    },
    {
      level: 'LEVEL 03',
      title: 'الصف الثالث الثانوي',
      desc: 'بوابة كليات القمة: التمكن من الكهربية، المغناطيسية، والفيزياء الحديثة بأسلوب منطقي برمجي.',
      topics: ['التيار والكهربية', 'الحث المغناطيسي', 'فيزياء الكم', 'الإلكترونيات الحديثة'],
      icon: <Atom className="w-8 h-8 text-cyan-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-white pt-20">
      
      {/* Physics Hero */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-24 py-20 overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] rounded-full animate-pulse pointer-events-none"></div>
        
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            
            <div className="lg:w-1/2 text-right animate__animated animate__fadeInRight">
              <h3 className="text-cyan-400 font-black tracking-[0.5em] uppercase mb-4">Physics Logic</h3>
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
                نفكك <span className="text-outline-cyan">الكون</span> <br /> بعقلية <span className="text-cyan-400">العلماء</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-10 min-h-[3em]">
                {typedText}
                <span className={`inline-block w-1.5 h-6 bg-cyan-400 mr-2 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
              </p>
              
              <div className="flex gap-8 justify-end mb-12">
                 <div className="text-center">
                    <p className="text-4xl font-black font-space">100%</p>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">تركيز على الفهم</p>
                 </div>
                 <div className="w-px h-12 bg-white/10"></div>
                 <div className="text-center">
                    <p className="text-4xl font-black font-space">3</p>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">سنوات الثانوية</p>
                 </div>
              </div>

              <div className="flex justify-end gap-6">
                 <button 
                  onClick={scrollToBooking}
                  className="px-10 py-5 bg-cyan-500 text-black font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-white hover:scale-105 transition-all shadow-xl shadow-cyan-500/20"
                >
                    دخول بوابة الطلاب
                 </button>
              </div>
            </div>

            <div className="lg:w-1/2 relative animate__animated animate__fadeInLeft">
              <div className="bg-zinc-900/50 border border-white/10 rounded-[3.5rem] p-10 font-mono text-sm overflow-hidden relative group shadow-2xl">
                 <div className="flex gap-2 mb-8">
                    <div className="w-3 h-3 rounded-full bg-red-500/40"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/40"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/40"></div>
                 </div>
                 
                 <div className="space-y-4 opacity-80 group-hover:opacity-100 transition-opacity" dir="ltr">
                    <p className="text-cyan-400">// Universe Analysis Protocol</p>
                    <p className="text-white">class <span className="text-cyan-300">PhysicsMastery</span> {'{'}</p>
                    <p className="pl-6 text-zinc-400">public function <span className="text-green-300">solveProblem</span>($data) {'{'}</p>
                    <p className="pl-12 text-zinc-500">return $data-><span className="text-cyan-400">logicFirst</span>()</p>
                    <p className="pl-18 text-zinc-500">-><span className="text-cyan-400">mathApplied</span>();</p>
                    <p className="pl-6 text-zinc-400">{'}'}</p>
                    <p className="text-white">{'}'}</p>
                 </div>

                 <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <span className="text-[10px] text-gray-600 uppercase tracking-widest">Status: High School Hero</span>
                       <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-[10px] text-gray-700 font-bold uppercase tracking-[0.3em]">Ahmed El-Jaidi © 2024</p>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Grades Tracks Section */}
      <section className="py-40 bg-[#050505] relative overflow-hidden border-y border-white/5">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(6,182,212,0.05),transparent)] pointer-events-none"></div>
        <div className="container mx-auto px-6">
          <div className="mb-24 text-right" data-aos="fade-up">
            <h3 className="text-cyan-500 font-black tracking-[0.5em] uppercase mb-4">Academic Roadmap</h3>
            <h2 className="text-6xl md:text-8xl font-black">المسارات <br /> <span className="text-outline-cyan">الدراسية</span></h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {grades.map((grade, idx) => (
              <div 
                key={idx} 
                className="group relative p-1 rounded-[4rem] bg-gradient-to-b from-white/10 to-transparent hover:from-cyan-500/20 transition-all duration-700"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                <div className="bg-[#080808] p-12 rounded-[3.9rem] h-full flex flex-col justify-between border border-white/5 overflow-hidden">
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/5 blur-3xl group-hover:bg-cyan-500/10 transition-all"></div>
                  
                  <div>
                    <div className="flex justify-between items-start mb-12 flex-row-reverse">
                      <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition-all">
                        {grade.icon}
                      </div>
                      <span className="font-space text-xs text-gray-600 font-bold group-hover:text-cyan-500 transition-colors pt-2">{grade.level}</span>
                    </div>

                    <h3 className="text-3xl font-black mb-4 text-right">{grade.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed text-right mb-12 min-h-[4em]">
                      {grade.desc}
                    </p>

                    <div className="space-y-4 mb-16">
                      {grade.topics.map((topic, tIdx) => (
                        <div key={tIdx} className="flex items-center gap-4 justify-end text-zinc-400 group-hover:text-zinc-200 transition-colors">
                          <span className="text-sm font-medium">{topic}</span>
                          <div className="w-2 h-2 bg-cyan-500/30 rounded-full group-hover:scale-125 transition-all"></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={scrollToBooking}
                    className="w-full py-6 bg-white/5 border border-white/10 rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3"
                  >
                    بدء المسار التعليمي <ChevronLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Booking Section (Already exists but adding ID) */}
      <section id="physics-booking" className="py-40 bg-zinc-950 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24">
            <div className="text-right" data-aos="fade-right">
              <h2 className="text-6xl md:text-8xl font-black mb-12">احجز <br /> <span className="text-cyan-500 text-outline-cyan">مقعدك</span> الآن</h2>
              <p className="text-xl text-gray-500 mb-12 leading-relaxed">تواصل معنا الآن للاستفسار عن مواعيد المجموعات (الأونلاين أو السنتر) وبدء رحلة التميز.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6 group flex-row-reverse">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-cyan-500 transition-all text-white group-hover:text-black">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">مقر السنتر</p>
                    <p className="text-xl font-black">مدينة المنصورة، الدقهلية</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group flex-row-reverse">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-indigo-500 transition-all text-white group-hover:text-black">
                    <Infinity className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">الدعم الفني والطلاب</p>
                    <p className="text-xl font-black" dir="ltr">+20 106 035 7954</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-12 lg:p-16 rounded-[4rem] border-white/10 relative overflow-hidden" data-aos="fade-left">
              <form className="space-y-8 text-right" onSubmit={(e) => { e.preventDefault(); alert('تم استلام طلبك، سنتواصل معك قريباً!'); }}>
                <div className="space-y-3">
                  <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest px-1">اسم الطالب رباعي</label>
                  <input required type="text" placeholder="مثال: يوسف محمود محمد" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-cyan-500 transition-all text-sm text-right text-white" />
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest px-1">الصف الدراسي</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-cyan-500 transition-all text-sm text-right appearance-none text-white">
                      <option className="bg-zinc-900">الأول الثانوي</option>
                      <option className="bg-zinc-900">الثاني الثانوي</option>
                      <option className="bg-zinc-900">الثالث الثانوي</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest px-1">رقم ولي الأمر</label>
                    <input required type="tel" placeholder="010XXXXXXXX" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-cyan-500 transition-all text-sm text-left font-mono text-white" dir="ltr" />
                  </div>
                </div>
                <button type="submit" className="w-full py-7 bg-cyan-500 text-black font-black uppercase tracking-widest rounded-[2rem] hover:bg-white hover:scale-105 transition-all flex items-center justify-center gap-4 shadow-xl shadow-cyan-500/20">
                  إرسال طلب الحجز <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .text-outline-cyan {
          -webkit-text-stroke: 1px rgba(6, 182, 212, 0.4);
          color: transparent;
        }
        .text-outline-cyan:hover {
          color: #06b6d4;
          text-shadow: 0 0 30px rgba(6, 182, 212, 0.5);
        }
      `}</style>
    </div>
  );
};

export default PhysicsPage;
