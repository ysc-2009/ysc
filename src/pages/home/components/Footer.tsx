export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-sky-400 via-sky-500 to-blue-500 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full">
                <i className="ri-trophy-line text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-black" style={{ fontFamily: "'Rounded Mplus 1c', sans-serif" }}>安原スポーツクラブ</h3>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              地域の子どもたちの健全な成長と、スポーツを通じた交流を目的に活動しています。
            </p>
          </div>

          {/* Menu Links */}
          <div>
            <h4 className="text-lg font-black mb-4" style={{ fontFamily: "'Rounded Mplus 1c', sans-serif" }}>MENU</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-sm text-white/80 hover:text-white transition-colors whitespace-nowrap cursor-pointer">
                  クラブ紹介
                </a>
              </li>
              <li>
                <a href="/info" className="text-sm text-white/80 hover:text-white transition-colors whitespace-nowrap cursor-pointer">
                  活動内容
                </a>
              </li>
              <li>
                <a href="/report" className="text-sm text-white/80 hover:text-white transition-colors whitespace-nowrap cursor-pointer">
                  活動報告
                </a>
              </li>
              <li>
                <a href="/trial" className="text-sm text-white/80 hover:text-white transition-colors whitespace-nowrap cursor-pointer">
                  体験・入会
                </a>
              </li>
              <li>
                <a href="/rules" className="text-sm text-white/80 hover:text-white transition-colors whitespace-nowrap cursor-pointer">
                  会則
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-black mb-4" style={{ fontFamily: "'Rounded Mplus 1c', sans-serif" }}>SUPPORT</h4>
            <ul className="space-y-2">
              <li>
                <a href="/members" className="text-sm text-white/80 hover:text-white transition-colors whitespace-nowrap cursor-pointer">
                  会員様向け
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-white/80 hover:text-white transition-colors whitespace-nowrap cursor-pointer">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-black mb-4" style={{ fontFamily: "'Rounded Mplus 1c', sans-serif" }}>CONTACT</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <i className="ri-phone-line text-lg mt-0.5"></i>
                <div>
                  <p className="text-sm text-white/80">090-5060-0115</p>
                  <p className="text-xs text-white/60">18:00〜21:00</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-mail-line text-lg mt-0.5"></i>
                <p className="text-sm text-white/80 break-all">hidenoribaba@hotmail.com</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white/70">
            Copyright © 安原スポーツクラブ All Rights Reserved.
          </p>
          <p className="text-xs text-white/50 mt-2">
            Web Design: YasuharaSportsClub
          </p>
        </div>
      </div>
    </footer>
  );
}