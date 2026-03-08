import Header from "../home/components/Header";
import Footer from "../home/components/Footer";
import { useEffect } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function AboutPage() {
  const profileRef = useScrollAnimation();
  const organizationRef = useScrollAnimation();
  const awardsRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Hero */}
      <div className="relative pt-32 pb-20 bg-gradient-to-br from-[#0ea5e9] via-[#38bdf8] to-[#7dd3fc] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full mb-4">
            ABOUT
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            クラブ<span className="text-yellow-300">紹介</span>
          </h1>
          <p className="text-white/90 text-lg">安原スポーツクラブについて</p>
        </div>
      </div>

      {/* Profile Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-20">
        <div
          ref={profileRef}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 opacity-0 translate-y-8 transition-all duration-700"
        >
          <span className="inline-block px-4 py-1 bg-sky-100 text-[#0ea5e9] text-xs font-bold rounded-full mb-4">
            PROFILE
          </span>
          <h2 className="text-3xl font-black text-gray-900 mb-8">
            プロフィール
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-base">
              安原スポーツクラブは、
              <strong className="text-gray-900">
                2009年にTOTOの援助を受け、設立
              </strong>
              いたしました。
              <br />
              地域の子どもたちの健全な成長とスポーツを通じた交流を目的に、
              和歌山市安原地区を中心に多彩なスポーツ教室を展開しています。
              青少年の健全育成・健康づくり・地域コミュニティの活性化を
              3つの柱として、日々活動しています。
            </p>
          </div>
        </div>
      </div>

      {/* Organization Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div
          ref={organizationRef}
          className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-8 md:p-12 opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-[#0ea5e9] rounded-2xl flex items-center justify-center">
              <span className="material-symbols-rounded text-white text-3xl">
                groups
              </span>
            </div>
            <h3 className="text-2xl font-black text-gray-900">組織・役員</h3>
          </div>

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <table className="w-full">
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-sky-50/50 transition-colors">
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 bg-gray-50 w-32">
                    会長
                  </th>
                  <td className="px-6 py-4 text-sm text-gray-700">橋本 徳夫</td>
                </tr>
                <tr className="hover:bg-sky-50/50 transition-colors">
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 bg-gray-50">
                    副会長
                  </th>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    寺下 俊人・沖 賢蔵
                  </td>
                </tr>
                <tr className="hover:bg-sky-50/50 transition-colors">
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 bg-gray-50">
                    顧問
                  </th>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    吉本 昌純・川端 康史・山田 好雄
                  </td>
                </tr>
                <tr className="hover:bg-sky-50/50 transition-colors">
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 bg-gray-50">
                    運営委員
                  </th>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    城野 淑・宮廻 英利美・中谷 千晶・前 晴夫・馬場 利幸
                  </td>
                </tr>
                <tr className="hover:bg-sky-50/50 transition-colors">
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 bg-gray-50">
                    監事
                  </th>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    宮崎 一良・西山 恵子
                  </td>
                </tr>
                <tr className="hover:bg-sky-50/50 transition-colors">
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 bg-gray-50">
                    事務局
                  </th>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    馬場 秀典・馬場 正人
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Awards Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div
          ref={awardsRef}
          className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12 opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center">
              <span className="material-symbols-rounded text-white text-3xl">
                workspace_premium
              </span>
            </div>
            <h3 className="text-2xl font-black text-gray-900">表彰・認定</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-lime-100 to-green-100 relative overflow-hidden">
                <img
                  src="https://static.readdy.ai/image/0c61843cac5595a4ea86012b4ca98e8d/d53c26c7b0cd242cdf5955e15be0fb8e.jpeg"
                  alt="表彰状2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                  <span className="material-symbols-rounded text-white text-xl">
                    emoji_events
                  </span>
                </div>
                <span className="text-sm font-bold text-gray-900">表彰状</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-sky-100 to-blue-100 relative overflow-hidden">
                <img
                  src="https://static.readdy.ai/image/0c61843cac5595a4ea86012b4ca98e8d/858432975057fd5bab9e499cda578a85.jpeg"
                  alt="スポーツ鬼ごっこ認定証"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#0ea5e9] rounded-full flex items-center justify-center">
                  <span className="material-symbols-rounded text-white text-xl">
                    verified
                  </span>
                </div>
                <span className="text-sm font-bold text-gray-900">
                  スポーツ鬼ごっこ認定証
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div
          ref={ctaRef}
          className="bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] rounded-3xl p-8 md:p-12 text-center opacity-0 translate-y-8 transition-all duration-700"
        >
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
            無料体験、随時受付中!
          </h3>
          <p className="text-white/90 text-base mb-8">
            「どんな雰囲気か知りたい」という方も大歓迎。
            <br />
            保護者の見学ももちろんOKです。
          </p>
          <a
            href="/trial"
            className="inline-block px-8 py-4 bg-white text-[#0ea5e9] text-base font-bold rounded-full hover:bg-sky-50 transition-all shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
          >
            体験・入会はこちら →
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
