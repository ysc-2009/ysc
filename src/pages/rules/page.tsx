import { useEffect } from 'react';
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function RulesPage() {
  const chapter1Ref = useScrollAnimation();
  const chapter2Ref = useScrollAnimation();
  const chapter3Ref = useScrollAnimation();
  const chapter4Ref = useScrollAnimation();
  const chapter5Ref = useScrollAnimation();
  const chapter6Ref = useScrollAnimation();
  const chapter7Ref = useScrollAnimation();
  const feeRef = useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Header />
      
      {/* Page Hero */}
      <div className="relative pt-32 pb-20 bg-gradient-to-br from-[#0ea5e9] via-[#38bdf8] to-[#7dd3fc] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <p className="text-sky-100 text-sm font-bold tracking-widest mb-4">CLUB RULES</p>
          <h1 className="text-5xl font-black mb-4 text-white" style={{ fontFamily: "'Rounded Mplus 1c', sans-serif" }}>
            安原スポーツクラブ<br />
            <span className="text-yellow-300">規約</span>
          </h1>
          <p className="text-lg text-white/90">本クラブの目的および運営に関する基本規約です。</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Chapter 1 総則 */}
        <div ref={chapter1Ref} className="bg-white rounded-2xl shadow-xl p-8 mb-8 opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-3xl font-black text-gray-800 mb-8 pb-4 border-b-4 border-sky-400" style={{ fontFamily: "'Rounded Mplus 1c', sans-serif" }}>
            第1章 総則
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-black text-sky-600 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-sky-100 rounded-lg text-sm">1</span>
                第1条(名称)
              </h3>
              <p className="text-gray-700 leading-relaxed pl-11">
                本クラブは、安原スポーツクラブ(以下「クラブ」という。)と称す。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black text-sky-600 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-sky-100 rounded-lg text-sm">2</span>
                第2条(目的)
              </h3>
              <p className="text-gray-700 leading-relaxed pl-11">
                本クラブは、安原地区におけるスポーツ活動の振興を図り、会員の健全な心身の育成に寄与するとともに、健やかに暮らせるための人づくりや地域づくりに貢献することを目的とする。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black text-sky-600 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-sky-100 rounded-lg text-sm">3</span>
                第3条(事業)
              </h3>
              <p className="text-gray-700 leading-relaxed pl-11 mb-3">
                クラブは、前項の目的を達成するために以下の事業を行う。
              </p>
              <ul className="space-y-3 pl-11">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-sky-600 font-bold">(1)</span>
                  <span>スポーツ教室、スポーツ研修会、スポーツ講習会の開催</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-sky-600 font-bold">(2)</span>
                  <span>スポーツクラブ活動への支援</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-sky-600 font-bold">(3)</span>
                  <span>各種スポーツイベントの開催</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-sky-600 font-bold">(4)</span>
                  <span>健康体力相談、健康と栄養等の事業の開催</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-sky-600 font-bold">(5)</span>
                  <span>スポーツに関する広報活動</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-sky-600 font-bold">(6)</span>
                  <span>スポーツに関する全般指導</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-sky-600 font-bold">(7)</span>
                  <span>その他、クラブの目的達成のために必要な事業</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Chapter 2 会員 */}
        <div ref={chapter2Ref} className="bg-white rounded-2xl shadow-xl p-8 mb-8 opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-3xl font-black text-gray-800 mb-8 pb-4 border-b-4 border-green-400" style={{ fontFamily: "'Rounded Mplus 1c', sans-serif" }}>
            第2章 会員
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-black text-green-600 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-lg text-sm">4</span>
                第4条(種別)
              </h3>
              <p className="text-gray-700 leading-relaxed pl-11 mb-3">
                クラブは、次に掲げる会員によって構成される。
              </p>
              <ul className="space-y-3 pl-11">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-600 font-bold">(1)</span>
                  <span>正会員　クラブの事業に参加する者</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-600 font-bold">(2)</span>
                  <span>賛助会員　クラブの趣旨に賛同し、事業を援助できる者または団体</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-600 font-bold">(3)</span>
                  <span>名誉会員　クラブに貢献し運営委員会の決議で推薦された者</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-black text-green-600 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-lg text-sm">5</span>
                第5条(資格)
              </h3>
              <p className="text-gray-700 leading-relaxed pl-11 mb-3">
                クラブに入会する者は、以下の要件を備えていなければならない。
              </p>
              <ul className="space-y-3 pl-11">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-600 font-bold">(1)</span>
                  <span>原則として安原地区に在住または在勤し、クラブの目的に賛同する者とする。ただし、クラブの目的に賛同する者であれば、地区外住民であっても運営委員会の承認を得て入会することができる。</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-600 font-bold">(2)</span>
                  <span>クラブの定める諸規定を遵守する者であること。</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-black text-green-600 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-lg text-sm">6</span>
                第6条(入会手続)
              </h3>
              <p className="text-gray-700 leading-relaxed pl-11">
                クラブに入会を希望する者は、所定の手続きに従い申し込むものとする。また、入会後、入会申し込時の記載事項に変更が生じた場合は、速やかに届け出なければならない。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black text-green-600 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-lg text-sm">7</span>
                第7条(資格の喪失)
              </h3>
              <p className="text-gray-700 leading-relaxed pl-11 mb-3">
                クラブの会員の資格は、退会、除名、死亡によって喪失する。
              </p>
              <p className="text-gray-700 leading-relaxed pl-11">
                2　会員がクラブを退会する場合は、書面をもって会長に届け出るものとする。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black text-green-600 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-lg text-sm">8</span>
                第8条(除名)
              </h3>
              <p className="text-gray-700 leading-relaxed pl-11 mb-3">
                クラブの会員が次の各項に該当する場合は、理事会の決議を経て除名する。
              </p>
              <ul className="space-y-3 pl-11">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-600 font-bold">(1)</span>
                  <span>クラブの会員が第5条の要件を満たさないとき。</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-600 font-bold">(2)</span>
                  <span>クラブの名誉を著しく毀損したとき。</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-black text-green-600 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-lg text-sm">9</span>
                第9条(会費の納入)
              </h3>
              <p className="text-gray-700 leading-relaxed pl-11">
                会員は、会費を納入するものとする。なお、会費の種類および金額または、納入方法については、クラブが別にこれを定める。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black text-green-600 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-lg text-sm">10</span>
                第10条(会費の返還)
              </h3>
              <p className="text-gray-700 leading-relaxed pl-11">
                既納の会費は、返還しない。
              </p>
            </div>
          </div>
        </div>

        {/* Chapter 3 組織 */}
        <div ref={chapter3Ref} className="bg-white rounded-2xl shadow-xl p-8 mb-8 opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-3xl font-black text-gray-800 mb-8 pb-4 border-b-4 border-purple-400" style={{ fontFamily: "'Rounded Mplus 1c', sans-serif" }}>
            第3章 組織
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-black text-purple-600 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-lg text-sm">11</span>
                第11条(役員等)
              </h3>
              <p className="text-gray-700 leading-relaxed pl-11 mb-3">
                このクラブに次の役員を置く。
              </p>
              <ul className="space-y-3 pl-11 mb-4">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-purple-600 font-bold">(1)</span>
                  <span>会長1名</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-purple-600 font-bold">(2)</span>
                  <span>副会長2名</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-purple-600 font-bold">(3)</span>
                  <span>運営委員若干名</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-purple-600 font-bold">(4)</span>
                  <span>監事2名</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed pl-11">
                2　クラブに顧問を置くことができる。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black text-purple-600 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-lg text-sm">12</span>
                第12条(役員の選出)
              </h3>
              <p className="text-gray-700 leading-relaxed pl-11 mb-3">
                会長及び副会長は運営委員会で推挙し、総会で選任する。
              </p>
              <p className="text-gray-700 leading-relaxed pl-11">
                4　顧問、監事は会長の推薦により運営委員会で選任する。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black text-purple-600 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-lg text-sm">13</span>
                第13条(役員等の職務)
              </h3>
              <p className="text-gray-700 leading-relaxed pl-11 mb-3">
                役員等の職務は次のとおりとする。
              </p>
              <ul className="space-y-3 pl-11">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-purple-600 font-bold">(1)</span>
                  <span>会長はクラブを代表し会務を統括する。</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-purple-600 font-bold">(2)</span>
                  <span>副会長は会長を補佐し、会長に事故ある時はその職務を代行する。</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-purple-600 font-bold">(3)</span>
                  <span>運営委員は、会長の命を受けてクラブの目的を達成するための重要事項を審議し、クラブの会務を分担する。</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-purple-600 font-bold">(4)</span>
                  <span>監事はクラブの会計事務及び財産を監査する。</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-purple-600 font-bold">(5)</span>
                  <span>顧問は重要な会務の諮問に応じる。</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-black text-purple-600 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-lg text-sm">14</span>
                第14条(役員の任期)
              </h3>
              <p className="text-gray-700 leading-relaxed pl-11">
                役員の任期は2年とする。ただし、再任は妨げないものとする。また、補充役員の任期は残任期間とする。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black text-purple-600 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-lg text-sm">15</span>
                第15条(事務局)
              </h3>
              <p className="text-gray-700 leading-relaxed pl-11 mb-3">
                このクラブに事務局を置く。
              </p>
              <p className="text-gray-700 leading-relaxed pl-11">
                2　事務局長、クラブマネジャー、会計は会長が委嘱し、クラブの企画運営、庶務及び会計事務を行う。
              </p>
            </div>
          </div>
        </div>

        {/* Chapter 4 会議 */}
        <div ref={chapter4Ref} className="bg-white rounded-2xl shadow-xl p-8 mb-8 opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-3xl font-black text-gray-800 mb-8 pb-4 border-b-4 border-pink-400" style={{ fontFamily: "'Rounded Mplus 1c', sans-serif" }}>
            第4章 会議
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-black text-pink-600 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-pink-100 rounded-lg text-sm">16</span>
                第16条
              </h3>
              <p className="text-gray-700 leading-relaxed pl-11 mb-3">
                クラブに次の会議を置く。
              </p>
              <ul className="space-y-3 pl-11">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-pink-600 font-bold">(1)</span>
                  <span>総会</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-pink-600 font-bold">(2)</span>
                  <span>臨時総会</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-pink-600 font-bold">(3)</span>
                  <span>運営委員会</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-pink-600 font-bold">(4)</span>
                  <span>各部会</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-black text-pink-600 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-pink-100 rounded-lg text-sm">17</span>
                第17条(総会)
              </h3>
              <div className="space-y-3 pl-11">
                <p className="text-gray-700 leading-relaxed">
                  総会は会員をもって構成し、クラブの最高議決機関とする。但し、議決権は20歳以上の会員とする。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  2　総会は、会長が招集する。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  3　総会の議長は、運営委員会の中から選出する。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  4　総会は、次に掲げる事項について議決する。
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-pink-600 font-bold">(1)</span>
                    <span>規約の制定及び改廃</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-pink-600 font-bold">(2)</span>
                    <span>事業計画及び報告の承認</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-pink-600 font-bold">(3)</span>
                    <span>収支決算及び予算の承認</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-pink-600 font-bold">(4)</span>
                    <span>役員の選任及び解任</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-pink-600 font-bold">(5)</span>
                    <span>その他、クラブの運営に重要な事項</span>
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  5　総会の定足数は、票決権を有する会員の5分の1とする。やむを得ない理由のため、役員総会に出席できない者は、あらかじめ、通知された会議の目的たる事項について、書面をもって表決し、または他の出席者を代理人として表決を委任することができる。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  (6)　議決は出席者の過半数をもって決し、可否同数の場合は議長の決するところによる。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  (7)　総会は、年1回とする。
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-black text-pink-600 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-pink-100 rounded-lg text-sm">18</span>
                第18条(臨時総会)
              </h3>
              <p className="text-gray-700 leading-relaxed pl-11">
                臨時総会は必要に応じ会長が招集する。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black text-pink-600 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-pink-100 rounded-lg text-sm">19</span>
                第19条(運営委員会)
              </h3>
              <div className="space-y-3 pl-11">
                <p className="text-gray-700 leading-relaxed">
                  運営委員会は、会長、副会長、運営委員を持って構成する。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  2　運営委員会は、会長が招集し、事業の計画及び運営に関する事項を協議決定する。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  3　運営委員会は前1項に規定する者の3分の1以上の出席により成立し、その議決により会長の承認を得て一切の会務を処理し統括する。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  4　運営委員会の議長は副会長が行う。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  5　運営委員会の議事は、出席者の過半数を持って決し、可否同数の場合は、議長が決する。
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-black text-pink-600 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-pink-100 rounded-lg text-sm">20</span>
                第20条(部会)
              </h3>
              <div className="space-y-3 pl-11">
                <p className="text-gray-700 leading-relaxed mb-2">
                  クラブには、次の部会を設置し、部長がそれぞれの部会を招集する。
                </p>
                <ul className="space-y-2 ml-4 mb-3">
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-pink-600 font-bold">(1)</span>
                    <span>総務部</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-pink-600 font-bold">(2)</span>
                    <span>事業企画部</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="text-pink-600 font-bold">(3)</span>
                    <span>広報部</span>
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  2　各部会は、それぞれの具体的な事業を計画し、その実施にあたる。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  3　各部会の委員は運営委員より選出する。また、それぞれの部会には部長1名、副部長1名及び部員若干名をもって構成する。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  4　各部会は、事業を計画し、運営委員会の承認を得てその実施にあたる。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter 5 会計 */}
        <div ref={chapter5Ref} className="bg-white rounded-2xl shadow-xl p-8 mb-8 opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-3xl font-black text-gray-800 mb-8 pb-4 border-b-4 border-indigo-400" style={{ fontFamily: "'Rounded Mplus 1c', sans-serif" }}>
            第5章 会計
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-black text-indigo-600 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-indigo-100 rounded-lg text-sm">21</span>
                第21条(資金)
              </h3>
              <p className="text-gray-700 leading-relaxed pl-11 mb-3">
                本クラブの資金は以下のものとする。
              </p>
              <ul className="space-y-3 pl-11">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-indigo-600 font-bold">(1)</span>
                  <span>会費</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-indigo-600 font-bold">(2)</span>
                  <span>事業収入</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-indigo-600 font-bold">(3)</span>
                  <span>補助金</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-indigo-600 font-bold">(4)</span>
                  <span>寄附金、協賛金</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-indigo-600 font-bold">(5)</span>
                  <span>その他</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-black text-indigo-600 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-indigo-100 rounded-lg text-sm">22</span>
                第22条(資金の管理)
              </h3>
              <p className="text-gray-700 leading-relaxed pl-11">
                クラブの資金は事務局が管理する。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black text-indigo-600 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-indigo-100 rounded-lg text-sm">23</span>
                第23条(予算及び決算)
              </h3>
              <p className="text-gray-700 leading-relaxed pl-11">
                クラブの収支予算については総会の議決により定め、収支決算については監事の監査を経て総会の承認、議決を得なければならない。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black text-indigo-600 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-indigo-100 rounded-lg text-sm">24</span>
                第24条(会計年度)
              </h3>
              <p className="text-gray-700 leading-relaxed pl-11">
                クラブの会計年度は毎年4月1日に始まり翌年3月31日に終了する。
              </p>
            </div>
          </div>
        </div>

        {/* Chapter 6 事故の責任 */}
        <div ref={chapter6Ref} className="bg-white rounded-2xl shadow-xl p-8 mb-8 opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-3xl font-black text-gray-800 mb-8 pb-4 border-b-4 border-red-400" style={{ fontFamily: "'Rounded Mplus 1c', sans-serif" }}>
            第6章 事故の責任
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-black text-red-600 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-red-100 rounded-lg text-sm">25</span>
                第25条(事故の責任)
              </h3>
              <p className="text-gray-700 leading-relaxed pl-11">
                会員は、クラブ活動に際しては、クラブの諸規定及び施設管理責任者並びに指導者の指示に従い、自己の責任において行動するものとする。これに違反して盗難・傷害等の事故が起こっても、本クラブ並びに指導者等に対し損害賠償を請求しないものとする。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black text-red-600 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-red-100 rounded-lg text-sm">26</span>
                第26条(保険の加入)
              </h3>
              <div className="space-y-3 pl-11">
                <p className="text-gray-700 leading-relaxed">
                  会員は、スポーツ安全保険に加入しなければならない。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  2　クラブは、その活動中の傷害については、スポーツ安全保険の対象範囲のみ対応するものとする。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter 7 細則 */}
        <div ref={chapter7Ref} className="bg-white rounded-2xl shadow-xl p-8 mb-8 opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-3xl font-black text-gray-800 mb-8 pb-4 border-b-4 border-teal-400" style={{ fontFamily: "'Rounded Mplus 1c', sans-serif" }}>
            第7章 細則
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-black text-teal-600 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-teal-100 rounded-lg text-sm">27</span>
                第27条(細則)
              </h3>
              <p className="text-gray-700 leading-relaxed pl-11">
                本規約に定めのない事項及び運営上必要な細則は役員総会の決議によって定める。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black text-teal-600 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-teal-100 rounded-lg text-sm">28</span>
                第28条(規約の改正)
              </h3>
              <p className="text-gray-700 leading-relaxed pl-11">
                本規約は総会の決議によって随時改正することができる。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black text-teal-600 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-teal-100 rounded-lg text-sm">29</span>
                第29条(設立年月日)
              </h3>
              <p className="text-gray-700 leading-relaxed pl-11">
                本クラブの設立年月日は平成21年2月21日とする。
              </p>
            </div>

            <div className="bg-teal-50 rounded-xl p-6 mt-8">
              <h4 className="text-lg font-black text-teal-800 mb-3">附則</h4>
              <p className="text-gray-700 leading-relaxed">
                この規約は、平成21年2月21日から施行する。
              </p>
            </div>
          </div>
        </div>

        {/* Fee Details */}
        <div ref={feeRef} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-xl p-8 opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-3xl font-black text-gray-800 mb-8 text-center" style={{ fontFamily: "'Rounded Mplus 1c', sans-serif" }}>
            入会会費細則
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-black text-orange-600 mb-4">第1　入会</h3>
              <p className="text-gray-700 leading-relaxed">
                規約第5条の入会申込書は別紙第1号様式とする
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black text-orange-600 mb-4">第2　会費</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                1　正会員の会費は次のとおりとする。
              </p>
              <p className="text-gray-700 font-bold mb-4">(年会費)</p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-base font-bold text-gray-700">幼児・小学生</span>
                    <span className="text-3xl font-black text-orange-600">1,000円</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-base font-bold text-gray-700">中学生・65歳以上</span>
                    <span className="text-3xl font-black text-orange-600">2,000円</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-base font-bold text-gray-700">高校生以上</span>
                    <span className="text-3xl font-black text-orange-600">3,000円</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-base font-bold text-gray-700">ファミリー</span>
                    <span className="text-3xl font-black text-orange-600">5,000円</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 mb-6">
                <p className="text-gray-700 leading-relaxed mb-2">
                  ※別途スポーツ保険料
                </p>
                <ul className="space-y-1 pl-4 text-gray-700">
                  <li>・中学生まで　年800円</li>
                  <li>・高校生以上　年1,850円</li>
                  <li>・65歳以上　年1,200円</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  ※年度途中の入会については、4月～9月の入会は上記通り、10月～3月の入会は半額とする。<br />
                  ※ファミリー会員・・家族何人でもOK
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 mb-6">
                <p className="text-gray-700 font-bold mb-2">(参加費)</p>
                <p className="text-gray-700 leading-relaxed">
                  参加費は各教室において別途設定する。
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed mb-3">
                  2　賛助会員の会費は次のとおりとする。
                </p>
                <ul className="space-y-2 pl-4 text-gray-700">
                  <li>・個人　1口　1,000円／年</li>
                  <li>・団体　1口　5,000円／年</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-black text-orange-600 mb-4">第3　退会</h3>
              <p className="text-gray-700 leading-relaxed">
                規約第7条の退会届けは別紙第2号様式とする
              </p>
            </div>

            <div>
              <h3 className="text-xl font-black text-orange-600 mb-4">第4　会費の納入方法</h3>
              <p className="text-gray-700 leading-relaxed">
                所定の用紙による郵便振り込みとする
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
