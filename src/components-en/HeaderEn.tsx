import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImage from "@/assets/18a91d08cf9a9d8b2794072b0e03df58b07f146b.png";

interface HeaderEnProps {
  onNavigate?: (page: string) => void;
  logoHref?: string;
}

export function HeaderEn({ onNavigate, logoHref = "/en/" }: HeaderEnProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Mission", href: "/en/#mission" },
    { label: "Solution", href: "/en/#solution" },
    { label: "News", href: "/en/#news" },
    { label: "About", href: "/en/#about" },
    { label: "Contact", href: "/en/#contact" },
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

  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) onNavigate("privacy");
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
              <img
                src={logoImage}
                alt="TxPPIE Inc."
                className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </a>
          </div>

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
            {/* <button
              type="button"
              onClick={handlePrivacyClick}
              className="text-sm text-gray-600 hover:text-[#00897B] transition-colors tracking-wide uppercase"
            >
              Privacy
            </button> */}
            <a
              href="/"
              className="text-sm text-gray-600 hover:text-[#00897B] transition-colors tracking-wide uppercase"
            >
              日本語
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Open menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

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
            {/* <button
              type="button"
              className="block py-3 text-gray-600 hover:text-[#00897B] transition-colors uppercase tracking-wide"
              onClick={(e) => {
                handlePrivacyClick(e);
                setIsMenuOpen(false);
              }}
            >
              Privacy
            </button> */}
            <a
              href="/"
              className="block py-3 text-gray-600 hover:text-[#00897B] transition-colors uppercase tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              日本語
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
