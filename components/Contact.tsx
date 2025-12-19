
import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormState('success');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setFormState('idle'), 5000);
    } catch (err) {
      setFormState('error');
    }
  };

  const email = "ahmedelgeady@hotmail.com";
  const phone = "+201060357954";

  return (
    <section id="contact" className="py-32 bg-zinc-950 border-t border-white/5 text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="text-right">
            <h2 className="text-6xl font-black mb-12">دعنا نصنع <br /> <span className="text-cyan-500">تفاعلاً</span> جديداً</h2>
            <div className="space-y-8">
              <a href={`mailto:${email}`} className="flex items-center gap-6 group flex-row-reverse">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-cyan-500 transition-all text-white group-hover:text-black">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">البريد الإلكتروني</p>
                  <p className="text-xl font-black">{email}</p>
                </div>
              </a>
              <a href={`https://wa.me/${phone.replace('+', '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-6 group flex-row-reverse">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-amber-500 transition-all text-white group-hover:text-black">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">واتساب</p>
                  <p className="text-xl font-black" dir="ltr">{phone.replace('20', '+20 ')}</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10 relative overflow-hidden">
            {formState === 'success' && (
              <div className="absolute inset-0 bg-black/90 backdrop-blur-md z-10 flex flex-col items-center justify-center animate__animated animate__fadeIn">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 text-black">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-black mb-2">تم الإرسال بنجاح!</h3>
                <p className="text-gray-400">سوف يتواصل معك المهندس أحمد قريباً.</p>
              </div>
            )}

            <form className="space-y-6 text-right" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest px-1">الاسم الكامل</label>
                  <input required name="name" type="text" placeholder="مثال: محمد علي" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-cyan-500 transition-all text-sm text-right text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest px-1">رقم الهاتف</label>
                  <input required name="phone" type="tel" placeholder="مثال: 010XXXXXXXX" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-cyan-500 transition-all text-sm text-left text-white" dir="ltr" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest px-1">البريد الإلكتروني</label>
                <input required name="email" type="email" placeholder="example@mail.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-cyan-500 transition-all text-sm text-left text-white" dir="ltr" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest px-1">تفاصيل الرسالة</label>
                <textarea required name="message" placeholder="كيف يمكن للمهندس أحمد مساعدتك؟" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-cyan-500 transition-all text-sm text-right text-white"></textarea>
              </div>
              <button 
                type="submit" 
                disabled={formState === 'submitting'}
                className="w-full py-6 bg-white text-black font-black uppercase tracking-widest rounded-2xl hover:bg-cyan-400 disabled:opacity-50 transition-all flex items-center justify-center gap-3 shadow-xl shadow-white/5"
              >
                {formState === 'submitting' ? (
                  <>
                    <div className="w-5 h-5 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                    جاري الإرسال...
                  </>
                ) : (
                  <>
                    إرسال الرسالة للمهندس أحمد <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
