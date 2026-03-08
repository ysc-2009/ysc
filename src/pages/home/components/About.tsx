import { Link } from "react-router-dom"; // ← 追加
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

export default function About() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-white">
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 translate-y-8 transition-all duration-700"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 bg-[#0ea5e9]/10 text-[#0ea5e9] text-xs font-bold rounded-full mb-6">
              ABOUT US
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
              安原スポーツクラブ
              <br />
              <span className="text-[#0ea5e9]">について</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              安原スポーツクラブは、
              <strong className="text-gray-900">
                2009年にTOTOの援助を受け、設立
              </strong>
              いたしました。
              地域の子どもたちの健全な成長とスポーツを通じた交流を目的に、和歌山市安原地区を中心に多彩なスポーツ教室を展開しています。
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-sky-50 rounded-xl">
                <div className="w-12 h-12 bg-[#0ea5e9] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="material-symbols-outlined text-white text-2xl">
                    groups
                  </span>
                </div>
                <p className="text-sm font-bold text-gray-900">
                  青少年の
                  <br />
                  健全育成
                </p>
              </div>
              <div className="text-center p-6 bg-sky-50 rounded-xl">
                <div className="w-12 h-12 bg-[#0ea5e9] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="material-symbols-outlined text-white text-2xl">
                    favorite
                  </span>
                </div>
                <p className="text-sm font-bold text-gray-900">
                  健康・体力
                  <br />
                  づくり
                </p>
              </div>
              <div className="text-center p-6 bg-sky-50 rounded-xl">
                <div className="w-12 h-12 bg-[#0ea5e9] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="material-symbols-outlined text-white text-2xl">
                    location_city
                  </span>
                </div>
                <p className="text-sm font-bold text-gray-900">
                  地域
                  <br />
                  コミュニティ
                </p>
              </div>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0ea5e9] text-white font-bold rounded-full hover:bg-[#0284c7] transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
            >
              {" "}
              {/* ← a→Link, href→to */}
              詳しく見る
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>{" "}
            {/* ← /a→/Link */}
          </div>

          <div className="relative">
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-[#0ea5e9]/10 rounded-full blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-sky-50 to-cyan-50 rounded-3xl p-8 shadow-xl">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://ysc-2009.github.io/ysc.github.io/images/top-slide1.jpg"
                  alt="安原スポーツクラブの活動風景"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
