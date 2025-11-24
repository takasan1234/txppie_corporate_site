import logoImage from '@/assets/18a91d08cf9a9d8b2794072b0e03df58b07f146b.png';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate("privacy");
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div>
            <div className="mb-4 sm:mb-6">
              <img src={logoImage} alt="TxPPIE Logo" className="h-8 sm:h-10 w-auto object-contain" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              患者の声を科学的根拠に変える
              <br />
              DXプラットフォーム
            </p>
          </div>

          <div>
            <h3 className="text-white mb-4 sm:mb-6 uppercase tracking-wide text-sm">Links</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm text-gray-400">
              <li>
                <a href="#mission" className="hover:text-[#00897B] transition-colors">
                  Mission
                </a>
              </li>
              <li>
                <a href="#solution" className="hover:text-[#00897B] transition-colors">
                  Solution
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#00897B] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#00897B] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4 sm:mb-6 uppercase tracking-wide text-sm">Contact</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm text-gray-400">
              <li>info@txp.co.jp</li>
              <li>
                〒532-0023<br />
                大阪府大阪市淀川区東三国1丁目20-9 201号室
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-sm text-gray-500">
          <p>&copy; 2025 TxPPIE株式会社. All rights reserved.</p>
          <span>プライバシーポリシー（近日公開）</span>
        </div>
      </div>
    </footer>
  );
}