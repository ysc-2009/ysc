import { Link } from "react-router-dom"; // ← 追加
import Header from "../home/components/Header";
import Footer from "../home/components/Footer";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function TrialPage() {
  const trialCardRef = useScrollAnimation();
  const step1Ref = useScrollAnimation();
  const step2Ref = useScrollAnimation();
  const step3Ref = useScrollAnimation();
  const step4Ref = useScrollAnimation();
  const paymentRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Header />

      <div className="relative bg-gradient-to-br from-[#0ea5e9] via-[#38bdf8] to-[#7dd3fc] text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold mb-4 tracking-wider">
            TRIAL & JOIN
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            体験・<span className="text-[#fef08a]">入会</span>
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            まずは気軽に無料体験から!随時受付中です。
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          ref={trialCardRef}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16 border-4 border-[#0ea5e9] opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0ea5e9] to-[#38bdf8] rounded-2xl flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-3xl">
                celebration
              </span>
            </div>
            <h2 className="text-3xl font-black text-gray-900">
              無料体験を
              <br className="md:hidden" />
              <span className="text-[#0ea5e9]">ご希望の方へ</span>
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6 text-base">
            「どんな雰囲気か知りたい」「続けられるか不安…」
            <br />
            そんな方こそ、まずは体験参加がおすすめです!
            <br />
            雰囲気を見てから決めていただいて大丈夫です。
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#0ea5e9] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-white text-sm">
                  check
                </span>
              </div>
              <span className="text-gray-700 text-base">
                無料体験は<strong className="text-[#0ea5e9]">随時受付中</strong>
                です
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#0ea5e9] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-white text-sm">
                  check
                </span>
              </div>
              <span className="text-gray-700 text-base">
                運動できる服装・飲み物をご持参ください
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#0ea5e9] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-white text-sm">
                  check
                </span>
              </div>
              <span className="text-gray-700 text-base">
                保護者の見学も大歓迎です
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#0ea5e9] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-white text-sm">
                  check
                </span>
              </div>
              <span className="text-gray-700 text-base">
                体験後に入会を強くすすめることは一切ありません。お気軽にどうぞ!
              </span>
            </li>
          </ul>
          <Link
            to="/contact"
            className="block w-full py-4 bg-gradient-to-r from-[#84cc16] to-[#65a30d] text-white text-center text-lg font-black rounded-full hover:shadow-xl transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            {" "}
            {/* ← a→Link, href→to */}
            まずはお問い合わせを
          </Link>{" "}
          {/* ← /a→/Link */}
        </div>

        <div className="text-center mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
            <span className="text-sm font-bold text-gray-500 tracking-wider">
              HOW TO JOIN
            </span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>
          <h2 className="text-4xl font-black text-gray-900">
            新規入会の<span className="text-[#0ea5e9]">流れ</span>
          </h2>
        </div>

        <div className="space-y-8 mb-16">
          <div
            ref={step1Ref}
            className="flex gap-6 opacity-0 translate-y-8 transition-all duration-700"
          >
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0ea5e9] to-[#38bdf8] rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg">
                1
              </div>
              <div className="w-1 flex-1 bg-gradient-to-b from-[#0ea5e9] to-transparent mt-4"></div>
            </div>
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-black text-gray-900 mb-4">
                入会申込書の記入
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-base">
                「入会申込書はこちら」をクリックし、申込書を印刷の上、必要事項をご記入ください。
              </p>
              <a
                href="/src/assets/入会申込書.xls"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0ea5e9] text-white font-bold rounded-full hover:bg-[#0284c7] transition-all cursor-pointer whitespace-nowrap"
              >
                {" "}
                {/* ← 外部リンクなのでそのまま */}
                <span className="material-symbols-outlined text-xl">
                  description
                </span>
                入会申込書をダウンロード
              </a>
            </div>
          </div>

          <div
            ref={step2Ref}
            className="flex gap-6 opacity-0 translate-y-8 transition-all duration-700"
          >
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0ea5e9] to-[#38bdf8] rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg">
                2
              </div>
              <div className="w-1 flex-1 bg-gradient-to-b from-[#0ea5e9] to-transparent mt-4"></div>
            </div>
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-black text-gray-900 mb-4">
                入会申込書の提出
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-base">
                必要事項をご記入いただいた申込書を、事務局までお電話のうえご持参いただくか、直接ご提出ください。
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-lg">
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-amber-600 flex-shrink-0">
                    warning
                  </span>
                  <div>
                    <p className="text-sm text-gray-700">
                      <strong className="text-amber-700">
                        ゆうちょ銀行の口座について:
                      </strong>
                      <br />
                      お持ちでない方は新規開設をお願いしております。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={step3Ref}
            className="flex gap-6 opacity-0 translate-y-8 transition-all duration-700"
          >
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0ea5e9] to-[#38bdf8] rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg">
                3
              </div>
              <div className="w-1 flex-1 bg-gradient-to-b from-[#0ea5e9] to-transparent mt-4"></div>
            </div>
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-black text-gray-900 mb-4">
                ゆうちょ銀行 自動振込申込書の提出
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-base">
                ゆうちょ銀行自動振込利用申込書の「お申込人」欄に必要事項を記入し、1枚目・3枚目にお届け印を押印のうえ、最寄りの郵便局へご提出ください。
              </p>
              <div className="bg-sky-50 border-l-4 border-[#0ea5e9] p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  提出時は<strong className="text-[#0ea5e9]">通帳と印鑑</strong>
                  をご持参いただくことをおすすめします。
                  <br />
                  ※提出から承認まで
                  <strong className="text-[#0ea5e9]">2〜3週間</strong>
                  ほどかかります。
                </p>
              </div>
            </div>
          </div>

          <div
            ref={step4Ref}
            className="flex gap-6 opacity-0 translate-y-8 transition-all duration-700"
          >
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0ea5e9] to-[#38bdf8] rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg">
                4
              </div>
            </div>
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#0ea5e9] text-3xl">
                  check_circle
                </span>
                <h3 className="text-2xl font-black text-gray-900">
                  入会受付確認書の受領
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                郵便局から事務局へ承認通知が届き次第(提出から2〜3週間後)、事務局より「入会受付確認書」を送付いたします。これで入会完了です!
              </p>
            </div>
          </div>
        </div>

        <div
          ref={paymentRef}
          className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 md:p-10 mb-12 border border-sky-200 opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[#0ea5e9] text-3xl">
                payments
              </span>
            </div>
            <h3 className="text-2xl font-black text-gray-900">
              お支払いについて
            </h3>
          </div>
          <p className="text-gray-700 leading-relaxed text-base">
            年会費・保険料・教室参加費は、
            <strong className="text-[#0ea5e9]">ゆうちょ銀行の自動振込</strong>
            にてお支払いいただきます。
            <br />
            詳細は入会申込書受理時にご説明いたします。
            <br />
            会費の詳細については
            <Link
              to="/members"
              className="text-[#0ea5e9] font-bold hover:underline cursor-pointer"
            >
              会員様向けページの「費用について」
            </Link>
            もご参照ください。 {/* ← a→Link, href→to */}
          </p>
        </div>

        <div
          ref={ctaRef}
          className="bg-gradient-to-br from-[#0ea5e9] to-[#38bdf8] rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl opacity-0 translate-y-8 transition-all duration-700"
        >
          <h3 className="text-3xl font-black mb-3">ご不明な点はお気軽に!</h3>
          <p className="text-white/90 mb-8 text-base">
            電話・メールどちらでもOKです。
            <br />
            担当スタッフが丁寧にご案内します。
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-white text-[#0ea5e9] text-lg font-black rounded-full hover:shadow-2xl transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            {" "}
            {/* ← a→Link, href→to */}
            お問い合わせはこちら →
          </Link>{" "}
          {/* ← /a→/Link */}
        </div>
      </div>

      <Footer />
    </div>
  );
}
