import { Database, Rocket } from "lucide-react";
import businessFlowImage from '@/assets-en/solution-flow-en.png';
import voiceAtlasFeaturesImage from '@/assets-en/voiceatlas-overview-en.png';
import processFlowImage from '@/assets-en/mission-diagram-en.png';

export function SolutionEn() {
  return (
    <section id="solution" className="py-20 sm:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-gradient-to-r from-[#00897B]/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="mb-24 sm:mb-32">
          <div className="mb-12 sm:mb-16">
            <p className="text-sm text-[#00897B] mb-3 sm:mb-4 tracking-[0.2em] uppercase">
              Platform
            </p>
            <h2 className="text-gray-900 mb-4 sm:mb-6">What is VoiceAtlas?</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#00897B] to-transparent" />
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-sm">
            <p className="text-gray-700 text-center text-lg leading-relaxed mb-8 sm:mb-12 max-w-5xl mx-auto">
              VoiceAtlas is a DX platform that collects and analyzes clinical and genomic data
              from a <span className="text-[#00897B]">patient-driven</span> perspective
              to solve the <span className="text-2xl text-[#00897B] inline-block mx-1">medical information gap</span>
              in areas such as <span className="text-[#00897B]">adverse drug reactions</span>
              and <span className="text-[#00897B]">intractable and rare diseases</span>.
              Built on a proprietary database, it offers integrated support from
              <span className="text-[#00897B]"> research through drug discovery</span>.
            </p>
            <img
              src={voiceAtlasFeaturesImage}
              alt="VoiceAtlas — a DX platform that turns patient voices into scientific evidence"
              className="w-full max-w-3xl mx-auto rounded-xl"
            />
          </div>
        </div>

        <div className="mb-24 sm:mb-32">
          <div className="mb-12 sm:mb-16">
            <p className="text-sm text-[#00897B] mb-3 sm:mb-4 tracking-[0.2em] uppercase">
              How It Works
            </p>
            <h3 className="text-gray-900 mb-4 sm:mb-6">Data Collection & Analysis Process</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-[#00897B] to-transparent" />
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-sm">
            <p className="text-gray-700 text-center text-lg leading-relaxed mb-8 sm:mb-12 max-w-5xl mx-auto">
              By partnering with patient associations, we build and operate a platform that can rapidly collect
              medical records and biological samples from a <span className="text-[#00897B]">patient-driven</span> starting point across Japan.
              The accumulated data is integrated through <span className="text-[#00897B]">medical data analysis and genomic analysis</span>
              and provided to research institutions and pharmaceutical companies as a
              <span className="text-[#00897B]"> proprietary database</span>.
            </p>
            <img
              src={processFlowImage}
              alt="Data collection and analysis process"
              className="w-full max-w-3xl mx-auto rounded-xl"
            />
          </div>
        </div>

        <div>
          <div className="mb-12 sm:mb-16">
            <p className="text-sm text-[#00897B] mb-3 sm:mb-4 tracking-[0.2em] uppercase">
              Business Model
            </p>
            <h3 className="text-gray-900 mb-4 sm:mb-6">Services</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-[#00897B] to-transparent" />
          </div>

          <div className="mb-8 sm:mb-12">
            <img
              src={businessFlowImage}
              alt="Business flow diagram"
              className="w-full max-w-3xl mx-auto rounded-xl shadow-lg"
            />
          </div>

          <div className="bg-gradient-to-r from-[#00897B]/10 to-transparent border-l-4 border-[#00897B] rounded-lg p-6 sm:p-8 mb-8 sm:mb-12">
            <p className="text-gray-700 text-center text-lg">
              <strong className="text-gray-900">Core of the business model:</strong> data provision and joint research outcomes ▶ licensed to pharmaceutical companies
              <br />
              <span className="text-sm text-gray-600">A circular structure that advances personalized medicine and returns value to patients.</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                icon: Database,
                color: "blue",
                title: "For research institutions",
                items: [
                  "Provision of a proprietary database and opportunities for joint research",
                  "Support for acquiring research funding",
                  "Hands-on support through to social implementation of research outcomes",
                ],
              },
              {
                icon: Rocket,
                color: "green",
                title: "For pharmaceutical companies",
                items: [
                  "Innovative research outcomes originating in high-unmet-need areas",
                  "Licensing of drug discovery seeds",
                  "Support to accelerate new drug development",
                ],
              },
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
