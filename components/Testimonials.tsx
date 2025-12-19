
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'أ/ محمود الهواري',
      role: 'ولي أمر طالب - الثانوية العامة',
      text: 'الأستاذ أحمد الجعيدي يمتلك أسلوباً فريداً في التدريس. ابني كان يعاني من عقدة في الفيزياء، ولكن بفضل الله ثم شرح الأستاذ أحمد المنطقي، أصبح من المتفوقين في المادة. كل الاحترام لشخصه الكريم.',
      image: 'https://i.pravatar.cc/100?u=parent1',
    },
    {
      name: 'المهندس خالد صالح',
      role: 'مؤسس شركة BrandX التقنية',
      text: 'تعاملت مع المهندس أحمد في تطوير نظام مبيعات معقد، وذهلت من احترافيته رغم صغر سنه. الكود الذي كتبه نظيف ومنظم جداً، وهو مثال للالتزام بالأمانة والدقة في المواعيد. تشرفت بالعمل معه.',
      image: 'https://i.pravatar.cc/100?u=client2',
    },
    {
      name: 'د/ ياسمين محمود',
      role: 'باحثة في الفيزياء الحيوية',
      text: 'أعجبت جداً بقدرة الأستاذ أحمد على ربط النظريات الفيزيائية القديمة بالواقع البرمجي الحديث. هو لا يعلم الطلاب حل المسائل فقط، بل يعلمهم كيف يفكرون بعقلية العلماء. ممتنة جداً لمجهوده.',
      image: 'https://i.pravatar.cc/100?u=student3',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-zinc-950/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl text-right">
            <h3 className="text-cyan-400 font-bold mb-4 uppercase tracking-[0.3em]">ماذا يقول شركاء النجاح</h3>
            <h2 className="text-4xl md:text-5xl font-black">شهادات نعتز بها <span className="text-outline">للجعيدي</span></h2>
          </div>
          <div className="bg-white/5 border border-white/10 px-8 py-4 rounded-2xl backdrop-blur-xl">
             <span className="text-3xl font-black text-cyan-400 font-space">5.0/5</span>
             <span className="mr-3 text-gray-500 text-sm font-bold">تقييم الطلاب والعملاء</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white/5 border border-white/5 p-10 rounded-[2.5rem] hover:border-cyan-500/20 transition-all group relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex text-amber-500 mb-8">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-10 italic leading-relaxed text-lg text-right">
                  "{t.text}"
                </p>
              </div>
              <div className="flex items-center gap-4 flex-row-reverse">
                <img src={t.image} className="w-14 h-14 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all border border-white/10" alt={t.name} />
                <div className="text-right">
                  <p className="font-black text-white">{t.name}</p>
                  <p className="text-xs text-cyan-500 font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
