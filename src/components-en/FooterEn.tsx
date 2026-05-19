import logoImage from '@/assets/18a91d08cf9a9d8b2794072b0e03df58b07f146b.png';

interface FooterEnProps {
  onNavigate?: (page: string) => void;
}

export function FooterEn({ onNavigate: _onNavigate }: FooterEnProps) {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div>
            <div className="mb-4 sm:mb-6">
              <img src={logoImage} alt="TxPPIE Inc." className="h-8 sm:h-10 w-auto object-contain" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A DX platform that transforms<br />
              patient voices into scientific evidence
            </p>
          </div>

          <div>
            <h3 className="text-white mb-4 sm:mb-6 uppercase tracking-wide text-sm">Links</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm text-gray-400">
              <li><a href="/en/#mission" className="hover:text-[#00897B] transition-colors">Mission</a></li>
              <li><a href="/en/#solution" className="hover:text-[#00897B] transition-colors">Solution</a></li>
              <li><a href="/en/#news" className="hover:text-[#00897B] transition-colors">News</a></li>
              <li><a href="/en/#about" className="hover:text-[#00897B] transition-colors">About</a></li>
              <li><a href="/en/#contact" className="hover:text-[#00897B] transition-colors">Contact</a></li>
              <li><a href="/" className="hover:text-[#00897B] transition-colors">日本語</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4 sm:mb-6 uppercase tracking-wide text-sm">Contact</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm text-gray-400">
              <li>info@txp.co.jp</li>
              <li>
                Room 201, 1-20-9 Higashimikuni<br />
                Yodogawa-ku, Osaka 532-0023, Japan
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-sm text-gray-500">
          <p>&copy; 2025 TxPPIE Inc. All rights reserved.</p>
          <span>Privacy Policy (Coming Soon)</span>
        </div>
      </div>
    </footer>
  );
}
