import ceoImage from 'figma:asset/723e337fc4a3b4fb4bc5c6c6ed5a0e2b55f76633.png';
import cooImage from 'figma:asset/204517a18a3320cd38bf27601f0deb5077de2196.png';
import advisorImage from 'figma:asset/cf74f57f0f14e2c48b927a28037ec5284b06294f.png';

export function CoreMembers() {
  const members = [
    {
      position: "代表取締役 CEO",
      name: "一二三 晴也",
      image: ceoImage,
      credentials: [
        "修士(薬科学)",
        "大阪大学大学院薬学研究科",
        "博士課程在学中",
      ],
    },
    {
      position: "取締役 COO兼CTO",
      name: "野依 修",
      image: cooImage,
      credentials: ["博士(獣医学)", "薬剤師"],
    },
    {
      position: "特別顧問",
      name: "目加田 英輔",
      image: advisorImage,
      credentials: [
        "博士(医学)",
        "大阪大学名誉教授、大阪大学国際共創大学院学位プログラム推進機構 特任教授",
        "滋慶医療科学大学・大学院 教育・研究開発センター 所長",
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00897B]/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="mb-12 sm:mb-16">
          <p className="text-sm text-[#00897B] mb-3 sm:mb-4 tracking-[0.2em] uppercase">
            Core Members
          </p>
          <h2 className="text-gray-900 mb-4 sm:mb-6">コアメンバー</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00897B] to-transparent" />
        </div>

        {/* メンバー一覧（カード形式） */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#00897B]/50 hover:shadow-xl transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00897B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* 写真 */}
              <div className="relative h-64 sm:h-80 bg-gray-100 flex items-center justify-center overflow-hidden">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <span className="text-gray-400">Photo</span>
                )}
              </div>
              
              {/* 情報 */}
              <div className="relative p-4 sm:p-6">
                <p className="text-sm text-[#00897B] mb-2 tracking-wide uppercase">{member.position}</p>
                <h3 className="text-gray-900 mb-3 sm:mb-4">{member.name}</h3>
                <div className="space-y-1 sm:space-y-2">
                  {member.credentials.map((cred, credIndex) => (
                    <p key={credIndex} className="text-sm text-gray-600 leading-relaxed">
                      {cred}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}