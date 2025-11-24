import { AlertCircle, Users } from "lucide-react";

export function Mission() {
  const issues = [
    {
      icon: AlertCircle,
      title: "医薬品やワクチンの副作用",
      stat: "死亡者数 約7,000人/年",
      description: "死因の解明不能：70〜90%（情報不足による）",
    },
    {
      icon: Users,
      title: "指定難病・希少疾患",
      stat: "治療法不明の患者 100万人以上",
      description: "発症から診断に半年〜3年・90%（情報不足による）",
    },
  ];

  return (
    <section id="mission" className="py-20 sm:py-32 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00897B]/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="mb-12 sm:mb-20">
          <p className="text-sm text-[#00897B] mb-3 sm:mb-4 tracking-[0.2em] uppercase">
            Social Issue
          </p>
          <h2 className="text-gray-900 mb-4 sm:mb-6">
            着目した社会課題：<br className="sm:hidden" />医療情報不足
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00897B] to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {issues.map((issue, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-[#00897B]/50 hover:shadow-xl transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00897B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-[#00897B]/10 rounded-xl">
                    <issue.icon className="text-[#00897B]" size={28} />
                  </div>
                  <h3 className="text-gray-900">{issue.title}</h3>
                </div>
                <p className="text-3xl text-gray-900 mb-3 sm:mb-4">{issue.stat}</p>
                <p className="text-red-600 text-base">{issue.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#00897B] to-[#00695C] rounded-2xl p-6 sm:p-8 text-center mb-8 sm:mb-12">
          <p className="text-lg text-white">
            支援や補償を受けられず、今も多くの患者が苦しんでいる
          </p>
        </div>

        <div className="text-center max-w-5xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed">
            医薬品やワクチン副作用の<span className="text-[#00897B]">因果関係が評価不能</span>となることや、難病・希少疾患の<span className="text-[#00897B]">診断までに長い年月を要する</span>背景には、
            常に<span className="relative inline-block mx-2 px-4 py-1">
              <span className="absolute inset-0 bg-[#00897B]/10 rounded-lg transform -skew-x-3"></span>
              <span className="relative text-5xl text-[#00897B] font-bold">「情報不足」</span>
            </span>があります。
          </p>
        </div>
      </div>
    </section>
  );
}