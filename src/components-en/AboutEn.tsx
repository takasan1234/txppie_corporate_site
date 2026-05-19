export function AboutEn() {
  const companyInfo = [
    { label: "Company Name", value: "TxPPIE Inc. / Tippy" },
    { label: "Established", value: "October 23, 2025" },
    {
      label: "Address",
      value:
        "Room 201, 1-20-9 Higashimikuni, Yodogawa-ku, Osaka 532-0023, Japan",
    },
    { label: "Business", value: "Medical information platform business" },
    {
      label: "Philosophy",
      value: "Always Help, Never Hurt",
    },
    { label: "Main Bank", value: "MUFG Bank, Shin-Osaka Branch" },
  ];

  return (
    <section
      id="about"
      className="py-20 sm:py-32 bg-[#eef8f5] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="mb-12 sm:mb-16">
          <p className="text-sm text-[#00897B] mb-3 sm:mb-4 tracking-[0.2em] uppercase">
            Company Information
          </p>
          <h2 className="text-gray-900 mb-4 sm:mb-6">Company Overview</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00897B] to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="divide-y divide-gray-200">
            {companyInfo.map((info, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 p-6 sm:p-8 hover:bg-gray-50 transition-colors"
              >
                <div className="text-[#00897B] tracking-wide uppercase text-sm">
                  {info.label}
                </div>
                <div className="sm:col-span-2 text-gray-900 text-base">
                  {info.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
