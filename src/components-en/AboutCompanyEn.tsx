import txppieImage from '@/assets-en/about-company-en.png';

export function AboutCompanyEn() {
  return (
    <section className="py-20 sm:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#00897B]/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="mb-12 sm:mb-16">
          <p className="text-sm text-[#00897B] mb-3 sm:mb-4 tracking-[0.2em] uppercase">
            About TxPPIE
          </p>
          <h2 className="text-gray-900 mb-4 sm:mb-6">What is TxPPIE?</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00897B] to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-xl p-8 sm:p-12 lg:p-16 text-center shadow-sm">
            <p className="text-gray-900 text-lg leading-relaxed mb-6">
              <span className="text-3xl text-[#00897B]">TxPPIE</span> is the company name formed by combining
              the three “T”s
              <span className="inline-block mx-2 text-2xl text-[#00897B]">
                (Team, True, Trans)
              </span>
              with
              <span className="inline-block mx-2 text-2xl text-[#00897B]">
                PPIE
              </span>
              , which stands for Patient and Public Involvement and Engagement.
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-6" />
            <p className="text-gray-700 text-base leading-relaxed mb-8">
              Starting from <span className="text-[#00897B] text-lg">the patient voice</span>,
              we provide a platform where researchers, pharmaceutical companies,
              and citizens work together to create a new model of healthcare.
            </p>

            <div className="mt-8 sm:mt-10">
              <img
                src={txppieImage}
                alt="TxPPIE — a new model of research and healthcare co-created by patients and the public"
                className="w-full max-w-2xl mx-auto rounded-lg shadow-sm opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
