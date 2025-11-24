import { Database, Rocket } from "lucide-react";
import businessFlowImage from '@/assets/65f23dc7b3251d3fe7ee176ea7d373999660f8c7.png';
import voiceAtlasFeaturesImage from '@/assets/281bb3982641e056aa08f60f38a73009cc20fc00.png';
import processFlowImage from '@/assets/26e635c9fd4dcec3cd3005781af01c292f934752.png';

export function Solution() {
  return (
    <section id="solution" className="py-20 sm:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-gradient-to-r from-[#00897B]/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* 1. VoiceAtlasとは */}
        <div className="mb-24 sm:mb-32">
          <div className="mb-12 sm:mb-16">
            <p className="text-sm text-[#00897B] mb-3 sm:mb-4 tracking-[0.2em] uppercase">
              Platform
            </p>
            <h2 className="text-gray-900 mb-4 sm:mb-6">VoiceAtlasとは</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#00897B] to-transparent" />
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-sm">
            <p className="text-gray-700 text-center text-lg leading-relaxed mb-8 sm:mb-12 max-w-5xl mx-auto">
              <span className="text-[#00897B]">医薬品副作用</span>や<span className="text-[#00897B]">難病・希少疾患</span>領域の<span className="text-2xl text-[#00897B] inline-block mx-1">「医療情報不足」</span>を解決するため、<span className="text-[#00897B]">患者起点</span>で臨床情報・ゲノム情報を集積・解析するDXプラットフォーム。
              独自のデータベースを基盤とした事業展開により、<span className="text-[#00897B]">研究から創薬まで一貫して支援</span>します。
            </p>
            <img 
              src={voiceAtlasFeaturesImage} 
              alt="VoiceAtlas - 患者の声を科学的根拠に変えるDXプラットフォーム" 
              className="w-full max-w-3xl mx-auto rounded-xl"
            />
          </div>
        </div>

        {/* 2. 仕組み */}
        <div className="mb-24 sm:mb-32">
          <div className="mb-12 sm:mb-16">
            <p className="text-sm text-[#00897B] mb-3 sm:mb-4 tracking-[0.2em] uppercase">
              How It Works
            </p>
            <h3 className="text-gray-900 mb-4 sm:mb-6">情報収集 & 解析プロセス</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-[#00897B] to-transparent" />
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-sm">
            <p className="text-gray-700 text-center text-lg leading-relaxed mb-8 sm:mb-12 max-w-5xl mx-auto">
              患者会と連携し、全国の<span className="text-[#00897B]">患者起点でカルテや検体を迅速に集積</span>できるプラットフォームを構築・運用します。集積されたデータは、<span className="text-[#00897B]">医療データ解析とゲノム情報解析</span>によって統合され、<span className="text-[#00897B]">独自のデータベース</span>として研究機関や製薬企業に提供されます。
            </p>
            <img 
              src={processFlowImage} 
              alt="情報収集 & 解析プロセス" 
              className="w-full max-w-3xl mx-auto rounded-xl"
            />
          </div>
        </div>

        {/* 3. ビジネスモデル */}
        <div>
          <div className="mb-12 sm:mb-16">
            <p className="text-sm text-[#00897B] mb-3 sm:mb-4 tracking-[0.2em] uppercase">
              Business Model
            </p>
            <h3 className="text-gray-900 mb-4 sm:mb-6">サービス内容</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-[#00897B] to-transparent" />
          </div>

          {/* ビジネスフロー図 */}
          <div className="mb-8 sm:mb-12">
            <img 
              src={businessFlowImage} 
              alt="ビジネスフロー図" 
              className="w-full max-w-3xl mx-auto rounded-xl shadow-lg"
            />
          </div>

          {/* 図の説明 */}
          <div className="bg-gradient-to-r from-[#00897B]/10 to-transparent border-l-4 border-[#00897B] rounded-lg p-6 sm:p-8 mb-8 sm:mb-12">
            <p className="text-gray-700 text-center text-lg">
              <strong className="text-gray-900">ビジネスモデルの核：</strong>データ提供＆共同研究成果 ▶ 製薬会社にライセンス提供
              <br />
              <span className="text-sm text-gray-600">個別化医療の発展と患者への成果還元を実現する循環構造</span>
            </p>
          </div>

          {/* 提供価値 */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                icon: Database,
                color: "blue",
                title: "研究機関向け",
                items: [
                  "独自データベースの提供と共同研究",
                  "研究費獲得支援",
                  "研究成果の社会実装まで伴走"
                ]
              },
              {
                icon: Rocket,
                color: "green",
                title: "製薬会社向け",
                items: [
                  "未充足ニーズ領域からの革新的な研究成果",
                  "創薬シーズのライセンス提供",
                  "新薬開発の加速支援"
                ]
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-[#00897B]/50 hover:shadow-xl transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00897B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className={`${service.color === 'blue' ? 'bg-blue-600' : 'bg-[#00897B]'} text-white p-2 sm:p-3 rounded-xl`}>
                      <service.icon size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <h4 className="text-gray-900">{service.title}</h4>
                  </div>
                  <ul className="space-y-2 sm:space-y-3 text-gray-700 text-base">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#00897B] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}