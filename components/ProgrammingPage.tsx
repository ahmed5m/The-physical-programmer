
import React from 'react';
import { Layout, Palette, Database, Terminal, Layers, Rocket, ExternalLink, Cpu } from 'lucide-react';

const ProgrammingPage: React.FC = () => {
  const projects = [
    { title: 'Saeed Al-Dahmani', type: 'Law Firm Website', url: 'https://saeedaldahmanii.com/', desc: 'نظام متكامل لمكتب محاماة يركز على إدارة المحتوى والتواصل.' },
    { title: 'Salah Al-Mubashri', type: 'Legal Consultancy', url: 'https://mublegal.com/', desc: 'منصة استشارات قانونية مبنية بمعايير تقنية عالية.' },
    { title: 'Student Management', type: 'Internal System', url: '#', desc: 'نظام Laravel متطور لإدارة الكورسات، الطلاب، والحضور.' },
    { title: 'Sanay3y Marketplace', type: 'Service Platform', url: '#', desc: 'منصة لربط العملاء بالعمال المهرة مع نظام تقييم وإدارة.' },
  ];

  const stack = [
    { name: 'Laravel (PHP)', level: '95%', color: 'bg-red-500' },
    { name: 'MySQL Database', level: '90%', color: 'bg-blue-500' },
    { name: 'JavaScript / jQuery', level: '85%', color: 'bg-amber-400' },
    { name: 'RESTful APIs', level: '92%', color: 'bg-green-400' },
    { name: 'WordPress', level: '75%', color: 'bg-blue-600' },
  ];

  const scrollToContact = () => {
    // Since ProgrammingPage is a separate view, we might need a way to tell App to go home and scroll
    // For now, if we are on this page, we suggest using the contact info or navigating home
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Logic handled in App.tsx or just redirect home with hash
      window.location.href = "/#contact";
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 animate__animated animate__fadeIn bg-[#030303] text-white">
      <div className="container mx-auto px-6">
        
        {/* Programming Header */}
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
          <div className="lg:w-1/2 text-right">
            <h3 className="text-amber-500 font-black tracking-[0.5em] uppercase mb-4">Backend Specialist</h3>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              هندسة <span className="text-outline text-amber-500/50">البيانات</span> <br /> بمعايير <span className="text-amber-500">عالمية</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-10">
              متخصص في بناء الأنظمة الخلفية (Backend) وتصميم قواعد البيانات القابلة للتوسع باستخدام Laravel. أحول الأفكار المعقدة إلى أكواد نظيفة وفعالة.
            </p>
            <div className="flex gap-6 justify-end">
               <div className="text-center">
                  <p className="text-4xl font-black font-space">5+</p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">مشاريع عملاء</p>
               </div>
               <div className="w-px h-12 bg-white/10"></div>
               <div className="text-center">
                  <p className="text-4xl font-black font-space">2019</p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">بداية الكود</p>
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
               <div className="space-y-2 opacity-80 group-hover:opacity-100 transition-opacity" dir="ltr">
                  <p className="text-purple-400">class <span className="text-amber-500">BackendArchitect</span> {'{'}</p>
                  <p className="pl-6 text-blue-400">public function <span className="text-green-400">deliverProject</span>(Requirements $req) {'{'}</p>
                  <p className="pl-12 text-gray-400">return $req-><span className="text-cyan-400">laravelOptimized</span>()</p>
                  <p className="pl-18 text-gray-400">-><span className="text-cyan-400">secureAuth</span>()</p>
                  <p className="pl-18 text-gray-400">-><span className="text-cyan-400">deploy</span>();</p>
                  <p className="pl-6 text-blue-400">{'}'}</p>
                  <p className="text-purple-400">{'}'}</p>
               </div>
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-500/10 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Real Projects Grid */}
        <div className="mb-32">
          <h2 className="text-4xl font-black mb-12 text-right">أعمال <span className="text-amber-500">حقيقية</span></h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p, idx) => (
              <div key={idx} className="p-10 bg-white/5 border border-white/5 rounded-[2.5rem] hover:border-amber-500/30 transition-all group text-right">
                <div className="flex justify-between items-start mb-6 flex-row-reverse">
                  <h3 className="text-2xl font-black">{p.title}</h3>
                  {p.url !== '#' && (
                    <a href={p.url} target="_blank" rel="noreferrer" className="text-amber-500 hover:text-white transition-colors">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  )}
                </div>
                <p className="text-amber-500/70 text-xs font-bold uppercase tracking-widest mb-4">{p.type}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center bg-zinc-950 rounded-[4rem] p-12 lg:p-24 border border-white/5">
          <div>
            <h2 className="text-5xl font-black mb-12">المهارات <span className="text-amber-500">التقنية</span></h2>
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
               تطوير الـ Backend <Terminal className="text-amber-500" />
            </h3>
            <p className="text-gray-400 leading-loose text-lg mb-8">
              أركز على بناء APIs قوية، أنظمة مصادقة آمنة، وهياكل قواعد بيانات محسنة. خبرتي في Laravel تتيح لي تقديم حلول سريعة وآمنة وقابلة للتوسع لتناسب احتياجات الشركات الناشئة والمكاتب المهنية.
            </p>
            <div className="p-8 border-r-4 border-amber-500 bg-amber-500/5 rounded-l-3xl">
              <p className="italic text-amber-200">
                "متاح للعمل الحر (Freelance)، الأدوار عن بعد، وفرص مطور Backend Junior."
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
          <button 
            onClick={scrollToContact}
            className="px-12 py-6 bg-amber-500 text-black font-black uppercase tracking-widest rounded-2xl hover:bg-white hover:scale-105 transition-all shadow-2xl shadow-amber-500/20 flex items-center gap-4 mx-auto"
          >
            ابدأ رحلة تطوير مشروعك <Cpu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgrammingPage;
