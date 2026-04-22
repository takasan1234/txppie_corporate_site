import ceoImage from '@/assets/723e337fc4a3b4fb4bc5c6c6ed5a0e2b55f76633.png';
import cooImage from '@/assets/204517a18a3320cd38bf27601f0deb5077de2196.png';
import advisorImage from '@/assets/cf74f57f0f14e2c48b927a28037ec5284b06294f.png';

export function CoreMembersEn() {
  const members = [
    {
      position: "Representative Director & CEO",
      name: "Seiya Hifumi",
      image: ceoImage,
      credentials: [
        "Master of Pharmaceutical Sciences",
        "Graduate School of Pharmaceutical Sciences, Osaka University",
        "Doctoral student",
      ],
    },
    {
      position: "Director, COO & CTO",
      name: "Osamu Noyori",
      image: cooImage,
      credentials: ["Ph.D. in Veterinary Medicine", "Pharmacist"],
    },
    {
      position: "Special Advisor",
      name: "Eisuke Mekada",
      image: advisorImage,
      credentials: [
        "Ph.D. in Medicine",
        "Professor Emeritus, Osaka University / Specially Appointed Professor, Institute for the Promotion of Degree Programs for Global Collaborations, Osaka University",
        "Director, Education and Research Development Center, Jikei University of Health Care Sciences Graduate School",
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00897B]/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="mb-12 sm:mb-16">
          <p className="text-sm text-[#00897B] mb-3 sm:mb-4 tracking-[0.2em] uppercase">
            Core Members
          </p>
          <h2 className="text-gray-900 mb-4 sm:mb-6">Core Members</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00897B] to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#00897B]/50 hover:shadow-xl transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00897B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative h-64 sm:h-80 bg-gray-100 flex items-center justify-center overflow-hidden">
                {member.image ? (
                    <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{
                      objectPosition: "center -20%",
                      transform: "scale(1.08)",
                    }}
                />
                ) : (
                  <span className="text-gray-400">Photo</span>
                )}
              </div>

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
