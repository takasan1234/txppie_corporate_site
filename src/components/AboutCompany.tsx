import txppieImage from '@/assets/d1e0fbf0ae66cf922d2f729ec222f4313efbcb87.png';

export function AboutCompany() {
  return (
    <section className="py-20 sm:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#00897B]/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="mb-12 sm:mb-16">
          <p className="text-sm text-[#00897B] mb-3 sm:mb-4 tracking-[0.2em] uppercase">
            About TxPPIE
          </p>
          <h2 className="text-gray-900 mb-4 sm:mb-6">TxPPIE株式会社 / ティッピーとは</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00897B] to-transparent" />
        </div>

        {/* メイン説明 */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-xl p-8 sm:p-12 lg:p-16 text-center shadow-sm">
            <p className="text-gray-900 text-lg leading-relaxed mb-6">
              <span className="text-3xl text-[#00897B]">TxPPIE</span>は<br />
              3つの"T"
              <span className="inline-block mx-2 text-2xl text-[#00897B]">
                （Team・True・Trans）
              </span>
              と、<br className="hidden sm:block" />
              患者・市民参画を意味する
              <span className="inline-block mx-2 text-2xl text-[#00897B]">
                「PPIE」
              </span>
              を組み合わせた社名です。
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-6" />
            <p className="text-gray-700 text-base leading-relaxed mb-8">
              <span className="text-[#00897B] text-lg">患者の声を起点に、</span><br className="sm:hidden" />
              研究者・製薬会社・市民が一体となって<br className="hidden sm:block" />
              新しい医療を創り出すプラットフォームを提供します。
            </p>
            
            {/* 画像 */}
            <div className="mt-8 sm:mt-10">
              <img 
                src={txppieImage} 
                alt="TxPPIE - 患者と市民がみんなで創る新しい研究・医療のかたち" 
                className="w-full max-w-2xl mx-auto rounded-lg shadow-sm opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}