
import React from 'react';
import { Milestone, Zap, Globe } from 'lucide-react';

const About: React.FC = () => {
  const experiences = [
    {
      year: '2022 - الآن',
      title: 'Full-Stack Software Engineer',
      desc: 'بناء معمارية برمجية متكاملة لعملاء حول العالم، مع التركيز على الأداء والأمان.',
      icon: <Zap className="w-6 h-6" />
    },
    {
      year: '2020 - 2022',
      title: 'مرحلة التعلم العميق',
      desc: 'دراسة الخوارزميات وقواعد البيانات المتقدمة وإتقان Laravel و React.',
      icon: <Milestone className="w-6 h-6" />
    },
    {
      year: '2008',
      title: 'بداية الرحلة',
      desc: 'النشأة في مدينة المنصورة، وبداية الشغف بالمنطق والعلوم الفيزيائية.',
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-40 relative bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div data-aos="fade-right">
            <h3 className="text-amber-500 font-black tracking-[0.5em] uppercase mb-8">Timeline</h3>
            <h2 className="text-7xl lg:text-8xl font-black mb-12 leading-none">
              مسار <br /> <span className="text-outline">النمو</span> المذهل
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed max-w-xl text-right">
              بدأت رحلتي قبل سنوات من شغفي بفك الشفرات وفهم حركة الأجسام. اليوم، أدمج هذه العوالم لخلق تجارب رقمية لا تُنسى.
            </p>
          </div>

          <div className="space-y-12 relative">
            <div className="absolute top-0 bottom-0 right-10 w-px bg-white/5"></div>
            
            {experiences.map((exp, idx) => (
              <div 
                key={idx} 
                data-aos="fade-left" 
                data-aos-delay={idx * 200}
                className="relative pr-24 group"
              >
                <div className="absolute top-0 right-5 w-10 h-10 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-500 z-10">
                  {exp.icon}
                </div>
                <div className="glass-card p-10 rounded-[3rem] group-hover:border-white/20 transition-all">
                  <p className="text-cyan-400 font-space font-bold mb-3">{exp.year}</p>
                  <h4 className="text-3xl font-black mb-4 text-white">{exp.title}</h4>
                  <p className="text-gray-500 leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
