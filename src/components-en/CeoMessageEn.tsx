import ceoImage from '@/assets/723e337fc4a3b4fb4bc5c6c6ed5a0e2b55f76633.png';

export function CeoMessageEn() {
  const messages = [
    'Having experienced bullying and the loss of someone close to me at a young age, I came to understand deeply the pain that people carry. At the same time, I developed a strong desire to <span class="text-[#00897B]">be someone who supports those who are suffering</span>.',
    'After watching a pandemic film at the age of twelve, I became interested in <span class="text-[#00897B]">vaccines as a tool to help people</span>, and that interest led me to study pharmaceutical sciences. From 2022, I worked on vaccine development at a national research institute and was steadily building my path as a researcher.',
    'However, after the COVID-19 pandemic, I learned that there were people who reported vaccine side effects yet still suffered without diagnosis or compensation because of <span class="text-[16px] text-[#00897B] inline-block mx-1">“insufficient information”</span>. Once I had heard so many <span class="text-[#00897B]">voices asking for help</span>, I could no longer remain passive.',
    'As a researcher, I believe that responding to <span class="text-[#00897B]">the voices of patients should be treated legitimately as part of research and development</span>. I also came to realize that this social issue is deeply rooted not only in vaccines, but also in <span class="text-[#00897B]">adverse reactions to other medicines and in the fields of intractable and rare diseases</span>.',
    'For me, <span class="text-[#00897B]">helping people is the purpose of my life</span>, and vaccine research was only one means to that end. Through entrepreneurship as my next means, I will work to achieve <span class="text-[#00897B]">healthcare that leaves no one behind</span>.',
  ];

  return (
    <section className="py-20 sm:py-32 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00897B]/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="mb-12 sm:mb-16">
          <p className="text-sm text-[#00897B] mb-3 sm:mb-4 tracking-[0.2em] uppercase">Message From CEO</p>
          <h2 className="text-gray-900 mb-4 sm:mb-6">Message from the CEO</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00897B] to-transparent" />
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-12 max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-8 sm:mb-12">
            <div className="relative group mb-6">
              <div className="absolute inset-0 bg-[#00897B]/20 rounded-2xl blur-xl group-hover:bg-[#00897B]/30 transition-all" />
              <img
                src={ceoImage}
                alt="Seiya Hifumi, Representative Director and CEO"
                className="relative w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-2xl"
              />
            </div>
            <div className="text-center">
              <p className="text-sm text-[#00897B] mb-2 tracking-wide uppercase">Representative Director & CEO</p>
              <p className="text-2xl text-gray-900 mb-4 sm:mb-6">Seiya Hifumi</p>
            </div>
          </div>

          <h3 className="text-center mb-8 sm:mb-12 text-[#00897B]">
            Toward healthcare that leaves no one behind
          </h3>

          <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed">
            {messages.map((message, index) => (
              <p key={index} className="text-base text-[16px]" dangerouslySetInnerHTML={{ __html: message }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
