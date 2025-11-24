import { Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00897B]/10 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="mb-12 sm:mb-16">
          <p className="text-sm text-[#00897B] mb-3 sm:mb-4 tracking-[0.2em] uppercase">
            Contact Us
          </p>
          <h2 className="text-gray-900 mb-4 sm:mb-6">お問い合わせ</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00897B] to-transparent" />
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-gray-900 mb-4 sm:mb-6 text-center">お気軽にご連絡ください</h3>
          <p className="text-gray-600 mb-8 sm:mb-12 text-lg text-center">
            サービスに関するご質問や、取材・パートナーシップ等のご相談など
          </p>
          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 sm:p-12">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="p-3 sm:p-4 bg-[#00897B]/10 rounded-xl">
                  <Mail className="text-[#00897B]" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Email</div>
                  <a href="mailto:info@txp.co.jp" className="text-gray-900 text-lg hover:text-[#00897B] transition-colors">
                    info@txp.co.jp
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="p-3 sm:p-4 bg-[#00897B]/10 rounded-xl">
                  <MapPin className="text-[#00897B]" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Address</div>
                  <div className="text-gray-900 text-lg">
                    〒532-0023<br />
                    大阪府大阪市淀川区東三国1丁目20-9 201号室
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}