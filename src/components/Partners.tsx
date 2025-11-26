import innovatorsClubImage from '@/assets/0d03dbbc4d108679ab134f4f21435023b2792b46.png';
import boomingImage from '@/assets/c6710.jpg';
import soilImage from '@/assets/5825deb48bca712e5a90a4440ee62cfb6d5edab6.png';

export function Partners() {
  const programs = [
    {
      name: "Innovators'Club Osaka Univ.",
      description: "大阪大学の専門家による\n経営・法務等のサポートの提供",
      image: innovatorsClubImage,
    },
    {
      name: "Booming!",
      description: "5年以内にIPO達成を\n目指すためのアクセラプログラム",
      image: boomingImage,
    },
    {
      name: "Soil",
      description: "社会的意義のある事業を支援する助成プログラム",
      image: soilImage,
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/3 left-0 w-1/3 h-1/3 bg-gradient-to-r from-[#00897B]/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="mb-12 sm:mb-16">
          <p className="text-sm text-[#00897B] mb-3 sm:mb-4 tracking-[0.2em] uppercase">
            Partners & Programs
          </p>
          <h2 className="text-gray-900 mb-4 sm:mb-6">協力組織・採択プログラム</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00897B] to-transparent" />
        </div>

        <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 hover:border-[#00897B]/50 hover:shadow-xl transition-all"
            >
              {/* ロゴ */}
              <div className="flex-shrink-0 w-48 h-32 sm:w-40 sm:h-24 flex items-center justify-center bg-white rounded-xl overflow-hidden group-hover:bg-gray-50 transition-colors">
                <img 
                  src={program.image} 
                  alt={program.name} 
                  className="max-w-full max-h-full object-contain p-3 sm:p-4"
                />
              </div>
              {/* 説明文 */}
              <div className="flex-1 text-center sm:text-left">
                <p className="text-gray-700 whitespace-pre-line text-base">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}