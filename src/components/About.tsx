export function About() {
  const companyInfo = [
    { label: "会社名", value: "TxPPIE株式会社 / ティッピー" },
    { label: "設立", value: "2025年10月23日" },
    {
      label: "所在地",
      value: "〒532-0023 大阪府大阪市淀川区東三国1丁目20-9-201",
    },
    { label: "事業内容", value: "医療情報プラットフォーム事業" },
    {
      label: "企業理念",
      value: "助けを求める人を決して見捨てない",
    },
    { label: "主要取引銀行", value: "三菱UFJ銀行 新大阪支店" },
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
          <h2 className="text-gray-900 mb-4 sm:mb-6">会社概要</h2>
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
