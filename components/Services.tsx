
import React from 'react';

interface ServicesProps {
  onNavigate?: (page: 'home' | 'physics' | 'programming') => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const codeSkills = ['React', 'JavaScript', 'PHP/Laravel', 'WordPress', 'MySQL'];
  const physicsTopics = ['الميكانيكا الكلاسيكية', 'الكهرباء والمغناطيسية', 'الفيزياء الحديثة', 'الديناميكا الحرارية'];

  return (
    <section id="services-preview" className="py-32 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-1 px-1 bg-white/10 border border-white/10 rounded-[3rem] overflow-hidden">
          
          {/* Section: Code Terminal */}
          <div className="p-12 lg:p-20 bg-black hover:bg-zinc-900 transition-all group">
            <div className="flex justify-between items-start mb-12">
               <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-black font-black text-2xl group-hover:scale-125 transition-all">JS</div>
               <span className="font-mono text-xs opacity-30">SYSTEM.DEVELOPMENT.v2</span>
            </div>
            <h2 className="text-5xl font-black mb-6">أكاديمية البرمجة</h2>
            <p className="text-gray-500 mb-10 text-lg leading-relaxed text-right">
              بناء تطبيقات الويب المتكاملة (Full-Stack) من التصميم الجرافيكي حتى قواعد البيانات المعقدة باستخدام Laravel و React.
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              {codeSkills.map(s => (
                <span key={s} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest">{s}</span>
              ))}
            </div>
            <button 
              onClick={() => onNavigate?.('programming')}
              className="text-amber-500 font-black border-b-2 border-amber-500 pb-2 hover:tracking-widest transition-all"
            >
              استكشف الحلول البرمجية ←
            </button>
          </div>

          {/* Section: Physics Lab */}
          <div className="p-12 lg:p-20 bg-black hover:bg-zinc-900 transition-all group">
            <div className="flex justify-between items-start mb-12">
               <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center text-black font-black text-2xl group-hover:scale-125 transition-all">Φ</div>
               <span className="font-mono text-xs opacity-30">QUANTUM.EDUCATION.v1</span>
            </div>
            <h2 className="text-5xl font-black mb-6">مختبر الفيزياء</h2>
            <p className="text-gray-500 mb-10 text-lg leading-relaxed text-right">
              تبسيط المفاهيم الفيزيائية للمرحلة الثانوية بأسلوب منطقي يعتمد على الفهم العميق وليس الحفظ، مع ربطها بتطبيقات الحياة الواقعية.
            </p>
            <div className="flex flex-col gap-4 mb-12 items-end">
              {physicsTopics.map((t, idx) => (
                <div key={idx} className="flex items-center gap-4 group/item flex-row-reverse">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full group-hover/item:scale-150 transition-all"></div>
                  <span className="text-sm font-bold text-gray-300">{t}</span>
                </div>
              ))}
            </div>
            <button 
              onClick={() => onNavigate?.('physics')}
              className="text-cyan-500 font-black border-b-2 border-cyan-500 pb-2 hover:tracking-widest transition-all"
            >
              دخول بوابة الطلاب ←
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
