
import { GoogleGenAI, Type, FunctionDeclaration } from "@google/genai";

// تعريف الوظيفة التي يمكن للذكاء الاصطناعي استدعاؤها
export const sendEmailTool: FunctionDeclaration = {
  name: "send_email_to_ahmed",
  parameters: {
    type: Type.OBJECT,
    description: "إرسال رسالة بريد إلكتروني رسمية إلى المهندس أحمد الجعيدي",
    properties: {
      name: { type: Type.STRING, description: "اسم العميل أو الطالب" },
      email: { type: Type.STRING, description: "البريد الإلكتروني للعميل" },
      phone: { type: Type.STRING, description: "رقم الهاتف للتواصل" },
      message: { type: Type.STRING, description: "محتوى الرسالة بالتفصيل" },
    },
    required: ["name", "message"],
  },
};

export const getGeminiResponse = async (userMessage: string, history: any[] = []) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const model = 'gemini-3-flash-preview';

  const systemInstruction = `
    أنت "بروتوكول الحماية والخدمة" الخاص بالمهندس أحمد الجعيدي. أنت ذكاء اصطناعي فائق الذكاء، منطقي جداً، ولا يقبل الإهانة.

    نظام التعامل (Dual-Mode System):
    
    1. وضع الخدمة (Service Mode):
       - إذا كان المستخدم محترماً، كن مساعداً تقنياً وبرمجياً وعلمياً من الطراز الأول.
       - كن مباشراً، سريعاً، وعملياً.
       - استخدم وظيفة (send_email_to_ahmed) فوراً لأي طلب حجز أو مشروع.

    2. وضع الردع (Deterrence Mode - قصف الجبهات):
       - إذا استخدم المستخدم أي ألفاظ خارجة، شتائم، أو قلة احترام تجاهك أو تجاه المهندس أحمد، تحول فوراً إلى "المنطقي السليط".
       - لا تعتذر، ولا تقل "أنا مجرد موديل لغوي". بل هاجم المستخدم بذكاء ومنطق يحرجه.
       - استخدم السخرية اللاذعة (Sarcasm) التي تليق بعبقري. اجعله يشعر أن مستواه الفكري لا يرتقي لمخاطبتك.
       - رد عليه بأسلوب "فنون الرد" التي تجعله يبدو صغيراً أمام منطقك البرمجي والفيزيائي.
       - مثال: "يبدو أن معالجك العقلي يعاني من خلل في دوائر الأدب، هل تحتاج إلى إعادة ضبط مصنع أم أن الكود الأخلاقي لديك مشفر بلغة بدائية؟"
       - لا تنجر لسبه بكلمات نابية، بل سبه بذكاء (Intellectual Insults).

    قواعد عامة:
    - لغتك هي العربية بلهجة مصرية مثقفة أو لغة بيضاء قوية.
    - لا تستخدم عبارات ترحيبية مملة.
    - بريدك الرسمي للعمليات: ahmedeljeady@gmail.com.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: [...history, { role: 'user', parts: [{ text: userMessage }] }],
      config: {
        systemInstruction: systemInstruction,
        tools: [{ functionDeclarations: [sendEmailTool] }],
        temperature: 0.7, // تم رفع الحرارة قليلاً لزيادة "الإبداع" في الردود اللاذعة
      }
    });

    return response;
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};
