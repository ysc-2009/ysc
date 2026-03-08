import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'ホーム' },
    { href: '/about', label: 'クラブ紹介' },
    { href: '/info', label: '活動内容' },
    { href: '/report', label: '活動報告' },
    { href: '/trial', label: '体験・入会' },
    { href: '/members', label: '会員様向け' },
    { href: '/contact', label: 'お問い合わせ' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="flex items-center gap-3 cursor-pointer">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                isScrolled ? 'bg-[#0ea5e9]' : 'bg-white/20 backdrop-blur-sm'
              }`}>
                <i className="ri-trophy-line text-2xl text-white"></i>
              </div>
              <div className="flex flex-col">
                <span className={`text-lg font-black ${isScrolled ? 'text-gray-900' : 'text-white'}`} style={{ fontFamily: "'Rounded Mplus 1c', sans-serif" }}>
                  安原スポーツクラブ
                </span>
                <span className={`text-xs ${isScrolled ? 'text-gray-500' : 'text-white/80'}`}>
                  総合型地域スポーツクラブ・和歌山
                </span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                    location.pathname === link.href
                      ? isScrolled
                        ? 'text-[#0ea5e9] bg-sky-50'
                        : 'text-white bg-white/20'
                      : isScrolled
                      ? 'text-gray-700 hover:text-[#0ea5e9] hover:bg-sky-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/trial"
                className="ml-2 px-6 py-2 bg-[#0ea5e9] text-white text-sm font-bold rounded-full hover:bg-[#0284c7] transition-all duration-300 flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-flashlight-line text-base"></i>
                無料体験
              </a>
            </nav>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
              aria-label="メニュー"
            >
              <span className={`w-6 h-0.5 transition-all ${isScrolled ? 'bg-gray-900' : 'bg-white'}`}></span>
              <span className={`w-6 h-0.5 transition-all ${isScrolled ? 'bg-gray-900' : 'bg-white'}`}></span>
              <span className={`w-6 h-0.5 transition-all ${isScrolled ? 'bg-gray-900' : 'bg-white'}`}></span>
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="absolute top-0 right-0 w-80 h-full bg-white shadow-2xl">
            <div className="p-6">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-900 cursor-pointer"
                aria-label="閉じる"
              >
                <i className="ri-close-line text-3xl"></i>
              </button>

              <div className="mt-16 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 text-base font-bold rounded-lg transition-colors cursor-pointer ${
                      location.pathname === link.href
                        ? 'text-[#0ea5e9] bg-sky-50'
                        : 'text-gray-700 hover:text-[#0ea5e9] hover:bg-sky-50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="/trial"
                  className="block mt-6 px-6 py-3 bg-[#0ea5e9] text-white text-center font-bold rounded-full hover:bg-[#0284c7] transition-all cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <i className="ri-flashlight-line text-base align-middle mr-2"></i>
                  無料体験はこちら
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}