import ceoImage from '@/assets/723e337fc4a3b4fb4bc5c6c6ed5a0e2b55f76633.png';
import cooImage from '@/assets/204517a18a3320cd38bf27601f0deb5077de2196.png';
import advisorImage from '@/assets/cf74f57f0f14e2c48b927a28037ec5284b06294f.png';

export function CoreMembersEn() {
  const members = [
    {
      position: "CEO / Co-founder",
      name: "Seiya Hifumi",
      image: ceoImage,
      credentials: [
        "Ph.D. student in Pharmaceutical Sciences Laboratory of Vaccine Materials\nGraduate School of Pharmaceutical Sciences\nOsaka University",
      ],
      objectPosition: "center 8%",
    },
    {
      position: "COO & CTO / Co-founder",
      name: "Osamu Noyori",
      image: cooImage,
      credentials: [
      "Ph.D. in Veterinary Medicine\nInternational Institute for Zoonosis Control\nFaculty of Veterinary Medicine\nHokkaido University",
      "Visiting Researcher\nNational Research Center for the Control and Prevention of Infectious Diseases\nNagasaki University",
      "Pharmacist"
    ],
      objectPosition: "center 0%",
    },
    {
      position: "Special Advisor",
      name: "Eisuke Mekada",
      image: advisorImage,
      credentials: [
        "Ph.D. in Medicine\nResearch Institute for Microbial Diseases (RIMD)\nOsaka University",
        "Professor Emeritus\nOsaka University",
        // "Former Director\n Research Institute for Microbial Diseases (RIMD)\n Osaka University",
        "Specially Appointed Professor\n Institute for Transdisciplinary Graduate Degree Programs\n Osaka University",
        "Director and Visiting Professor\nEducation and Research Development Center\nJikei University of Health Care Sciences Graduate School",
      ],
      objectPosition: "center 25%",
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-gray-50 relative overflow-hidden">
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
              className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-[#00897B]/40 hover:shadow-xl transition-all"
            >
              <div className="relative h-64 sm:h-80 bg-gray-100 flex items-center justify-center overflow-hidden">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: member.objectPosition ?? "center center",
                    }}
                  />
                ) : (
                  <span className="text-gray-400">Photo</span>
                )}
              </div>

              <div className="relative p-4 sm:p-6">
                <p className="text-sm text-[#00897B] mb-2 tracking-wide uppercase">{member.position}</p>
                <h3 className="text-gray-900 mb-3 sm:mb-4">{member.name}</h3>
                <div className="space-y-2 sm:space-y-3">
                  {member.credentials.map((cred, credIndex) => (
                    <p
                      key={credIndex}
                      className="text-sm text-gray-600 whitespace-pre-line"
                      style={{ lineHeight: 1.25 }}
                    >
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
