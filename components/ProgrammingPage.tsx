
import React from 'react';
import { Code2, Layout, Palette, Database, Cpu, Terminal, Layers, Rocket } from 'lucide-react';

const ProgrammingPage: React.FC = () => {
  const specialties = [
    { title: 'Full-Stack Apps', desc: 'بناء تطبيقات ويب قوية باستخدام Laravel للباك-إند و React للفرونت-إند.', icon: <Layers className="w-8 h-8" /> },
    { title: 'Custom Dashboards', desc: 'لوحات تحكم متطورة لإدارة البيانات والعمليات بدقة وسهولة متناهية.', icon: <Layout className="w-8 h-8" /> },
    { title: 'UI/UX Design', desc: 'تصميم واجهات مستخدم عصرية تركز على تجربة العميل والجمالية التقنية.', icon: <Palette className="w-8 h-8" /> },
    { title: 'Database Architect', desc: 'تصميم وبناء قواعد بيانات MySQL معقدة ومحسنة للأداء العالي.', icon: <Database className="w-8 h-8" /> },
  ];

  const stack = [
    { name: 'Laravel', level: '95%', color: 'bg-red-500' },
    { name: 'React.js', level: '90%', color: 'bg-cyan-400' },
    { name: 'TypeScript', level: '85%', color: 'bg-blue-600' },
    { name: 'Tailwind CSS', level: '98%', color: 'bg-teal-400' },
    { name: 'Node.js', level: '80%', color: 'bg-green-500' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 animate__animated animate__fadeIn">
      <div className="container mx-auto px-6">
        
        {/* Programming Header */}
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
          <div className="lg:w-1/2 text-right">
            <h3 className="text-amber-500 font-black tracking-[0.5em] uppercase mb-4">Software Engineering</h3>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              نبني <span className="text-outline text-amber-500/50">الكود</span> <br /> بعقلية <span className="text-amber-500">الفيزيائي</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-10">
              في عالم البرمجة، المنطق هو القانون. نحن لا نكتب مجرد أسطر برمجية، بل نصمم أنظمة رقمية تتسم بالدقة، الكفاءة، والجمال.
            </p>
            <div className="flex gap-6 justify-end">
               <div className="text-center">
                  <p className="text-4xl font-black font-space">15+</p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">مشروع ناجح</p>
               </div>
               <div className="w-px h-12 bg-white/10"></div>
               <div className="text-center">
                  <p className="text-4xl font-black font-space">100%</p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">رضا العملاء</p>
               </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="bg-zinc-900/50 border border-white/10 rounded-[3rem] p-8 font-mono text-sm overflow-hidden relative group">
               <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
               </div>
               <div className="space-y-2 opacity-80 group-hover:opacity-100 transition-opacity">
                  <p className="text-purple-400">class <span className="text-amber-500">AhmedElgeady</span> {'{'}</p>
                  <p className="pl-6 text-blue-400">public function <span className="text-green-400">buildFuture</span>(Idea $idea) {'{'}</p>
                  <p className="pl-12 text-gray-400">return $idea-><span className="text-cyan-400">analyze</span>()</p>
                  <p className="pl-18 text-gray-400">-><span className="text-cyan-400">code</span>()</p>
                  <p className="pl-18 text-gray-400">-><span className="text-cyan-400">optimize</span>();</p>
                  <p className="pl-6 text-blue-400">{'}'}</p>
                  <p className="text-purple-400">{'}'}</p>
               </div>
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-500/10 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Specialization Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {specialties.map((s, idx) => (
            <div key={idx} className="p-10 bg-white/5 border border-white/5 rounded-[2.5rem] hover:border-amber-500/30 transition-all hover:-translate-y-2 group">
              <div className="text-amber-500 mb-6 group-hover:scale-110 transition-transform inline-block">{s.icon}</div>
              <h3 className="text-xl font-black mb-4">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center bg-zinc-950 rounded-[4rem] p-12 lg:p-24 border border-white/5">
          <div>
            <h2 className="text-5xl font-black mb-12">صندوق <span className="text-amber-500">الأدوات</span> التقني</h2>
            <div className="space-y-8">
              {stack.map((item, i) => (
                <div key={i} className="space-y-3 text-right">
                  <div className="flex justify-between items-center flex-row-reverse">
                    <span className="font-bold text-lg">{item.name}</span>
                    <span className="font-mono text-xs text-gray-500">{item.level}</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full ${item.color} rounded-full transition-all duration-1000`} style={{ width: item.level }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-right">
            <h3 className="text-3xl font-black mb-6 flex items-center justify-end gap-3">
               نهج "الكود النظيف" <Terminal className="text-amber-500" />
            </h3>
            <p className="text-gray-400 leading-loose text-lg mb-8">
              نؤمن أن البرمجة ليست مجرد جعل الشيء "يعمل"، بل جعله يعمل بكفاءة قصوى، ويكون قابلاً للتوسع (Scalable)، وسهل الصيانة (Maintainable). نتبع معايير الصناعة العالمية في كل سطر نكتبه.
            </p>
            <div className="p-8 border-r-4 border-amber-500 bg-amber-500/5 rounded-l-3xl">
              <p className="italic text-amber-200">
                "أي أحمق يمكنه كتابة كود يفهمه الكمبيوتر، لكن المبرمج الجيد يكتب كوداً يفهمه البشر."
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-32 text-center py-20 bg-gradient-to-b from-transparent to-amber-500/5 rounded-[4rem]">
          <h2 className="text-5xl font-black mb-8 flex items-center justify-center gap-4">
             <Rocket className="text-amber-500 w-12 h-12" /> هل لديك فكرة مشروع؟
          </h2>
          <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
            دعنا نحول رؤيتك إلى واقع رقمي ملموس باستخدام أحدث التقنيات والحلول المبتكرة.
          </p>
          <button className="px-12 py-6 bg-amber-500 text-black font-black uppercase tracking-widest rounded-2xl hover:bg-white hover:scale-105 transition-all shadow-2xl shadow-amber-500/20 flex items-center gap-4 mx-auto">
            ابدأ رحلة تطوير مشروعك <Cpu className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProgrammingPage;
