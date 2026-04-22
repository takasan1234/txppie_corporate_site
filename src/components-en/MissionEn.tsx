import { AlertCircle, Users } from "lucide-react";

export function MissionEn() {
  const issues = [
    {
      icon: AlertCircle,
      title: "Adverse drug reactions and vaccine side effects",
      stat: "Approx. 7,000 deaths per year",
      description: "Cause of death cannot be determined in 70–90% of cases due to insufficient information.",
    },
    {
      icon: Users,
      title: "Intractable and rare diseases",
      stat: "More than 1 million patients lack a known treatment",
      description: "Diagnosis can take from six months to three years, with information shortages contributing to about 90% of cases.",
    },
  ];

  return (
    <section id="mission" className="py-20 sm:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00897B]/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="mb-12 sm:mb-20">
          <p className="text-sm text-[#00897B] mb-3 sm:mb-4 tracking-[0.2em] uppercase">
            Social Issue
          </p>
          <h2 className="text-gray-900 mb-4 sm:mb-6">
            The challenge we focus on:<br className="sm:hidden" /> lack of medical information
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
            Many patients still suffer today without access to adequate support or compensation.
          </p>
        </div>

        <div className="text-center max-w-5xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed">
            Behind the inability to assess causality in adverse drug reactions and vaccine side effects,
            and the long years often required to diagnose intractable and rare diseases,
            there is always
            <span className="relative inline-block mx-2 px-4 py-1">
              <span className="absolute inset-0 bg-[#00897B]/10 rounded-lg transform -skew-x-3"></span>
              <span className="relative text-2xl text-[#00897B] font-bold">“insufficient information”</span>
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
