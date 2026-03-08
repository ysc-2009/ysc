import { useEffect } from 'react';
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function MembersPage() {
  const jumpNavRef = useScrollAnimation();
  const scheduleRef = useScrollAnimation();
  const renewalRef = useScrollAnimation();
  const feeRef = useScrollAnimation();
  const insuranceRef = useScrollAnimation();
  const linksRef = useScrollAnimation();

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
            MEMBERS
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            会員様<span className="text-yellow-300">向け</span>
          </h1>
          <p className="text-white/90 text-lg">会員の皆様へのお知らせ・スケジュール</p>
        </div>
      </div>

      {/* Jump Navigation */}
      <div className="container mx-auto px-6 mt-8 relative z-20">
        <div ref={jumpNavRef} className="bg-white rounded-2xl shadow-xl p-6 opacity-0 translate-y-8 transition-all duration-700">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <a href="#schedule" className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-sky-50 transition-all group">
              <div className="w-12 h-12 flex items-center justify-center bg-sky-100 rounded-full group-hover:bg-sky-200 transition-colors">
                <i className="ri-calendar-line text-2xl text-sky-600"></i>
              </div>
              <span className="text-sm font-bold text-gray-700 text-center whitespace-nowrap">スケジュール</span>
            </a>
            <a href="#renewal" className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-orange-50 transition-all group">
              <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-full group-hover:bg-orange-200 transition-colors">
                <i className="ri-file-list-3-line text-2xl text-orange-600"></i>
              </div>
              <span className="text-sm font-bold text-gray-700 text-center whitespace-nowrap">更新手続き</span>
            </a>
            <a href="#fee" className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-green-50 transition-all group">
              <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full group-hover:bg-green-200 transition-colors">
                <i className="ri-money-dollar-circle-line text-2xl text-green-600"></i>
              </div>
              <span className="text-sm font-bold text-gray-700 text-center whitespace-nowrap">費用について</span>
            </a>
            <a href="#insurance" className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-sky-50 transition-all group">
              <div className="w-12 h-12 flex items-center justify-center bg-sky-100 rounded-full group-hover:bg-sky-200 transition-colors">
                <i className="ri-shield-check-line text-2xl text-sky-600"></i>
              </div>
              <span className="text-sm font-bold text-gray-700 text-center whitespace-nowrap">保険について</span>
            </a>
            <a href="#links" className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-pink-50 transition-all group">
              <div className="w-12 h-12 flex items-center justify-center bg-pink-100 rounded-full group-hover:bg-pink-200 transition-colors">
                <i className="ri-links-line text-2xl text-pink-600"></i>
              </div>
              <span className="text-sm font-bold text-gray-700 text-center whitespace-nowrap">リンク集</span>
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Schedule Section */}
        <section id="schedule" className="mb-20">
          <div ref={scheduleRef} className="opacity-0 translate-y-8 transition-all duration-700">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-lime-400 to-green-500 rounded-2xl shadow-lg">
                <i className="ri-calendar-event-line text-3xl text-white"></i>
              </div>
              <h2 className="text-4xl font-black text-gray-800" style={{ fontFamily: "'Rounded Mplus 1c', sans-serif" }}>スケジュール</h2>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <iframe 
                src="https://calendar.google.com/calendar/embed?src=yasuhara.sports.club%40gmail.com&ctz=Asia%2FTokyo&mode=MONTH&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0&hl=ja" 
                className="w-full h-[600px]"
                title="安原スポーツクラブ スケジュール"
              ></iframe>
              <div className="p-4 bg-gray-50 text-center text-sm text-gray-600">
                ※表示されない場合は
                <a href="https://calendar.google.com" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700 font-bold ml-1">
                  Googleカレンダーで開く
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Renewal Section */}
        <section id="renewal" className="mb-20">
          <div ref={renewalRef} className="opacity-0 translate-y-8 transition-all duration-700">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl shadow-lg">
                <i className="ri-file-check-line text-3xl text-white"></i>
              </div>
              <h2 className="text-4xl font-black text-gray-800" style={{ fontFamily: "'Rounded Mplus 1c', sans-serif" }}>新年度更新手続きについて</h2>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-6 flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <i className="ri-error-warning-line text-2xl text-yellow-600"></i>
                </div>
                <p className="text-gray-700 font-bold">参加教室が変わらない方も、必ず次年度の参加教室名のご連絡をお願いします</p>
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  毎年<strong className="text-orange-600 text-lg">2月〜3月</strong>に実施する、参加教室の継続手続きについてご案内します。
                </p>
                <p>
                  毎年2月〜3月上旬に運営委員から配布される<strong className="text-gray-900">「次年度の会員継続確認書」</strong>を記入の上、
                  <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full font-bold mx-1">3月26日頃まで</span>
                  に各教室に付き添っている運営委員へご提出ください。もしくは、事務局までFAXにてご提出ください。
                </p>
                <p>
                  新年度は <strong className="text-sky-600 text-lg">4月1日</strong> 開始となります。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fee Section */}
        <section id="fee" className="mb-20">
          <div ref={feeRef} className="opacity-0 translate-y-8 transition-all duration-700">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl shadow-lg">
                <i className="ri-wallet-3-line text-3xl text-white"></i>
              </div>
              <h2 className="text-4xl font-black text-gray-800" style={{ fontFamily: "'Rounded Mplus 1c', sans-serif" }}>活動に必要な費用</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 flex items-center justify-center bg-red-100 rounded-xl mb-4 mx-auto">
                  <i className="ri-shield-cross-line text-3xl text-red-600"></i>
                </div>
                <h3 className="text-xl font-black text-center mb-6 text-gray-800">スポーツ保険料</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">中学生以下</span>
                    <span className="text-2xl font-black text-red-600">800円</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">高校生〜64歳</span>
                    <span className="text-2xl font-black text-red-600">1,850円</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600">65歳以上</span>
                    <span className="text-2xl font-black text-red-600">1,200円</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 flex items-center justify-center bg-sky-100 rounded-xl mb-4 mx-auto">
                  <i className="ri-vip-crown-line text-3xl text-sky-600"></i>
                </div>
                <h3 className="text-xl font-black text-center mb-6 text-gray-800">年会費</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">子ども</span>
                    <span className="text-2xl font-black text-sky-600">1,000円</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">大人</span>
                    <span className="text-2xl font-black text-sky-600">3,000円</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600">ファミリー</span>
                    <span className="text-2xl font-black text-sky-600">5,000円</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4 text-center">登録のゆうちょ銀行口座から毎年<strong>4月</strong>に引き落とし</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 flex items-center justify-center bg-green-100 rounded-xl mb-4 mx-auto">
                  <i className="ri-calendar-check-line text-3xl text-green-600"></i>
                </div>
                <h3 className="text-xl font-black text-center mb-6 text-gray-800">教室参加料</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">金額</span>
                    <span className="text-lg font-black text-green-600">教室により異なります</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  詳細は<a href="/info" className="text-sky-600 hover:text-sky-700 font-bold">活動内容ページ</a>をご参照ください
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-black text-gray-800 mb-6 text-center">引き落とし日程</h3>
              <div className="space-y-4 max-w-2xl mx-auto">
                <div className="flex justify-between items-center bg-white rounded-xl p-4 shadow-sm">
                  <span className="font-bold text-gray-700">サッカー教室</span>
                  <span className="text-sky-600 font-black">毎月 20日</span>
                </div>
                <div className="flex justify-between items-center bg-white rounded-xl p-4 shadow-sm">
                  <span className="font-bold text-gray-700">その他の教室</span>
                  <span className="text-sky-600 font-black">4月・7月・10月・1月 各20日(3か月分)</span>
                </div>
                <div className="flex justify-between items-center bg-white rounded-xl p-4 shadow-sm">
                  <span className="font-bold text-gray-700">年度途中入会の場合</span>
                  <span className="text-sky-600 font-black">入会月または翌月20日に引き落とし</span>
                </div>
                <div className="flex justify-between items-center bg-white rounded-xl p-4 shadow-sm">
                  <span className="font-bold text-gray-700">引落日が休日の場合</span>
                  <span className="text-sky-600 font-black">翌営業日</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Section */}
        <section id="insurance" className="mb-20">
          <div ref={insuranceRef} className="opacity-0 translate-y-8 transition-all duration-700">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl shadow-lg">
                <i className="ri-shield-check-line text-3xl text-white"></i>
              </div>
              <h2 className="text-4xl font-black text-gray-800" style={{ fontFamily: "'Rounded Mplus 1c', sans-serif" }}>保険について</h2>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-sky-400 to-blue-500 text-white">
                    <th className="py-4 px-6 text-left text-lg font-black">補償内容</th>
                    <th className="py-4 px-6 text-right text-lg font-black">金額</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-sky-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-gray-700">通院</td>
                    <td className="py-4 px-6 text-right">
                      <span className="text-2xl font-black text-sky-600">1,500円</span>
                      <span className="text-gray-500 ml-1">/日</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-sky-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-gray-700">入院</td>
                    <td className="py-4 px-6 text-right">
                      <span className="text-2xl font-black text-sky-600">4,000円</span>
                      <span className="text-gray-500 ml-1">/日</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-sky-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-gray-700">死亡</td>
                    <td className="py-4 px-6 text-right">
                      <span className="text-2xl font-black text-sky-600">2,000万円</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="bg-sky-50 p-6 text-center">
                <p className="text-gray-700">
                  ※ 1日の通院から適用されます。万一けがをされた場合は、<strong className="text-red-600">速やかに事務局までご連絡ください。</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Links Section */}
        <section id="links" className="mb-20">
          <div ref={linksRef} className="opacity-0 translate-y-8 transition-all duration-700">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl shadow-lg">
                <i className="ri-global-line text-3xl text-white"></i>
              </div>
              <h2 className="text-4xl font-black text-gray-800" style={{ fontFamily: "'Rounded Mplus 1c', sans-serif" }}>リンク集</h2>
            </div>
            <div className="space-y-4">
              <a 
                href="https://m.facebook.com/%E3%82%8F%E3%81%8B%E3%82%84%E3%81%BE%E3%82%B9%E3%83%9D%E3%83%BC%E3%83%84%E9%AC%BC%E3%81%94%E3%81%A3%E3%81%93%E3%82%B5%E3%83%BC%E3%82%AF%E3%83%AB-424943247884776/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-xl flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <i className="ri-facebook-fill text-3xl text-blue-600"></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-gray-800 mb-1">スポーツ鬼ごっこ協会</h3>
                  <p className="text-sm text-gray-500">m.facebook.com/onigokko</p>
                </div>
                <i className="ri-arrow-right-line text-2xl text-gray-400 group-hover:text-sky-600 transition-colors"></i>
              </a>

              <a 
                href="http://www.onigokko.or.jp/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-orange-100 rounded-xl flex-shrink-0 group-hover:bg-orange-200 transition-colors">
                  <i className="ri-run-line text-3xl text-orange-600"></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-gray-800 mb-1">一般社団法人 鬼ごっこ協会(公式ホームページ)</h3>
                  <p className="text-sm text-gray-500">onigokko.or.jp</p>
                </div>
                <i className="ri-arrow-right-line text-2xl text-gray-400 group-hover:text-sky-600 transition-colors"></i>
              </a>

              <a 
                href="http://kidslete.ikora.tv/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-green-100 rounded-xl flex-shrink-0 group-hover:bg-green-200 transition-colors">
                  <i className="ri-global-line text-3xl text-green-600"></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-gray-800 mb-1">アスレチック教室 ブログ公開中</h3>
                  <p className="text-sm text-gray-500">kidslete.ikora.tv</p>
                </div>
                <i className="ri-arrow-right-line text-2xl text-gray-400 group-hover:text-sky-600 transition-colors"></i>
              </a>

              <a 
                href="http://onigokkoyasuharasc.ikora.tv/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-red-100 rounded-xl flex-shrink-0 group-hover:bg-red-200 transition-colors">
                  <i className="ri-basketball-line text-3xl text-red-600"></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-gray-800 mb-1">スポーツ鬼ごっこ ブログ公開中</h3>
                  <p className="text-sm text-gray-500">onigokkoyasuharasc.ikora.tv</p>
                </div>
                <i className="ri-arrow-right-line text-2xl text-gray-400 group-hover:text-sky-600 transition-colors"></i>
              </a>

              <a 
                href="https://www.instagram.com/yasuhara_sports_club/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-pink-100 rounded-xl flex-shrink-0 group-hover:bg-pink-200 transition-colors">
                  <i className="ri-instagram-line text-3xl text-pink-600"></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-gray-800 mb-1">安原スポーツクラブ 公式Instagram</h3>
                  <p className="text-sm text-gray-500">@yasuhara_sports_club</p>
                </div>
                <i className="ri-arrow-right-line text-2xl text-gray-400 group-hover:text-sky-600 transition-colors"></i>
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
