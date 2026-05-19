import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImage from "@/assets/18a91d08cf9a9d8b2794072b0e03df58b07f146b.png";

interface HeaderProps {
  onNavigate?: (page: string) => void;
  logoHref?: string;
}

export function Header({ onNavigate, logoHref = "/" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Mission", href: "/#mission" },
    { label: "Solution", href: "/#solution" },
    { label: "News", href: "/#news" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate("home");
    }
  };

  const handleSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!onNavigate) return;

    e.preventDefault();
    setIsMenuOpen(false);
    onNavigate("home");
    window.history.pushState(null, "", href);

    const id = href.split("#")[1];
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a
              href={logoHref}
              onClick={handleLogoClick}
              className="flex items-center gap-3 group"
            >
              {/* ロゴ画像 */}
              <img
                src={logoImage}
                alt="TxPPIE株式会社"
                className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => handleSectionClick(event, item.href)}
                className="text-sm text-gray-600 hover:text-[#00897B] transition-colors tracking-wide uppercase"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/en/"
              className="text-sm text-gray-600 hover:text-[#00897B] transition-colors tracking-wide uppercase"
            >
              English
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-gray-200">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 text-gray-600 hover:text-[#00897B] transition-colors uppercase tracking-wide"
                onClick={(event) => handleSectionClick(event, item.href)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/en/"
              className="block py-3 text-gray-600 hover:text-[#00897B] transition-colors uppercase tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              English
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
