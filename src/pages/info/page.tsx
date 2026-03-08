import Header from "../home/components/Header";
import Footer from "../home/components/Footer";
import { useState, useEffect } from "react";
import {
  useScrollAnimation,
  useScrollAnimationList,
} from "../../hooks/useScrollAnimation";

export default function InfoPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const filterRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();
  const itemRef = useScrollAnimationList();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activities = [
    {
      id: 1,
      name: "フラダンス教室",
      category: "adult",
      color: "pink",
      icon: "spa",
      place: "東部コミュニティセンター・安原支所等",
      time: "第2・第4水曜 10:10〜11:40",
      target: "女性(経験者)",
      instructor: "山本小百合先生",
      description: "経験者を対象に少し高度なフラダンスを楽しみます。",
      fee: "4,800円",
      period: "3か月",
    },
    {
      id: 2,
      name: "初級フラダンス教室",
      category: "adult",
      color: "pink",
      icon: "self_improvement",
      place: "東部コミュニティセンター・安原支所等",
      time: "第2・第4水曜 9:05〜10:05",
      target: "女性(初心者・初級者)",
      instructor: "山本小百合先生",
      description: "フラダンスの基本を丁寧に練習します。",
      fee: "3,300円",
      period: "3か月",
    },
    {
      id: 3,
      name: "スポーツ鬼ごっこ教室",
      category: "kids",
      color: "lime",
      icon: "directions_run",
      place: "安原小学校体育館",
      time: "第1・第3土曜\nU9(3年生以下)9:00〜10:10\nU15(4年生以上)10:20〜11:30",
      target: "小学生",
      instructor: "坂口昌司先生",
      description: "正式なルールに基づくスポーツ鬼ごっこを楽しみます。",
      fee: "1,800円",
      period: "3か月",
    },
    {
      id: 4,
      name: "ファンクジャズダンス教室",
      category: "kids",
      color: "purple",
      icon: "music_note",
      place: "東部コミュニティセンター等",
      time: "第2・第4土曜\nキッズ(満4才〜小学低学年)9:20〜10:20\nジュニア(小学生)10:20〜11:20",
      target: "満4才〜小学生",
      instructor: "品川紀公子先生",
      description:
        "音楽のリズムに乗って踊る楽しさを味わいます。発表会前に別途参加費・衣装代あり。",
      fee: "3,000円",
      period: "3か月",
    },
    {
      id: 5,
      name: "ショートテニス教室",
      category: "kids",
      color: "sky",
      icon: "sports_tennis",
      place: "安原小学校体育館",
      time: "第2・第4土曜 9:30〜10:30",
      target: "子ども",
      instructor: "奥野美紀先生",
      description: "低学年・高学年にクラスを分け、テニスの基本を楽しみます。",
      fee: "1,800円",
      period: "3か月",
    },
    {
      id: 6,
      name: "日本拳法教室",
      category: "free",
      color: "red",
      icon: "sports_martial_arts",
      place: "旭学園",
      time: "毎週土曜 13:30〜15:00",
      target: "幼児・小学生",
      instructor: "前晴夫先生・佐々木俊行先生",
      description: "防具をつけて、安全に突いたり蹴ったりして楽しみます。",
      fee: "無料",
      period: "",
      isFree: true,
    },
    {
      id: 7,
      name: "整体ストレッチポール教室",
      category: "adult",
      color: "teal",
      icon: "fitness_center",
      place: "東部コミュニティセンター等",
      time: "第1火曜 10:45〜11:30",
      target: "女性",
      instructor: "辻須美代先生",
      description:
        "自然治癒力を高めるエクササイズで骨盤・姿勢を改善し、インナーマッスルを鍛えます。",
      fee: "1,800円",
      period: "3か月",
    },
    {
      id: 8,
      name: "楽しいエアロ教室",
      category: "adult",
      color: "orange",
      icon: "monitor_heart",
      place: "東部コミュニティセンター等",
      time: "第1火曜 9:45〜10:30",
      target: "女性",
      instructor: "辻須美代先生",
      description:
        "音楽に合わせたエアロビクスと筋力トレーニングで、脂肪燃焼・体力増進を目指します。",
      fee: "1,800円",
      period: "3か月",
    },
    {
      id: 9,
      name: "リズムエクササイズ教室",
      category: "adult",
      color: "yellow",
      icon: "equalizer",
      place: "東部コミュニティセンター",
      time: "第2・第4火曜 9:30〜10:00",
      target: "女性",
      instructor: "辻須美代先生",
      description:
        "30分間の簡単引き締めエクササイズ。運動不足解消・ストレス発散に。",
      fee: "2,400円",
      period: "3か月",
    },
    {
      id: 10,
      name: "リラックスアロマヨガ教室",
      category: "adult",
      color: "teal",
      icon: "self_improvement",
      place: "東部コミュニティセンター等",
      time: "第2・第4火曜 10:15〜11:30",
      target: "女性",
      instructor: "辻須美代先生",
      description:
        "アロマの香りの中で呼吸を意識し、自律神経に働きかけるヨガです。",
      fee: "6,000円",
      period: "3か月",
    },
    {
      id: 11,
      name: "河南ヨガ教室",
      category: "adult",
      color: "teal",
      icon: "self_improvement",
      place: "河南コミュニティセンター",
      time: "毎週火曜 14:15〜15:30",
      target: "女性",
      instructor: "辻須美代先生",
      description: "初めての方にもおすすめのリラックスアロマヨガです。",
      fee: "12,000円",
      period: "3か月",
    },
    {
      id: 12,
      name: "のびのびスッキリ健康体操教室",
      category: "both",
      color: "sky",
      icon: "accessibility_new",
      place: "安原支所2階",
      time: "第2・第4土曜 14:00〜15:00",
      target: "男性・女性",
      instructor: "三宅令子先生",
      description: "生涯を通じていきいきと動ける身体づくりを目指します。",
      fee: "4,800円",
      period: "3か月",
    },
    {
      id: 13,
      name: "アスレチック教室",
      category: "kids",
      color: "orange",
      icon: "sports",
      place: "安原小学校体育館",
      time: "第2・第4土曜 10:45〜11:45",
      target: "小学生",
      instructor:
        "坂口昌司先生（ブログ：http://kidslete.ikora.tv/e1133712.html）",
      description: "様々な運動を通じて、体を動かす楽しさを味わいます。",
      fee: "1,800円",
      period: "3か月",
    },
    {
      id: 14,
      name: "サッカー教室",
      category: "kids",
      color: "lime",
      icon: "sports_soccer",
      place: "安原小学校グラウンド",
      time: "毎週水曜 16:00〜17:00\n(原則第5水曜はお休み)",
      target: "年中〜小学生",
      instructor: "アルテリーヴォ和歌山の関係者",
      description: "芝生のグラウンドでサッカーを楽しみます。",
      fee: "2,000円",
      period: "1か月",
    },
  ];

  const colorClasses: Record<string, string> = {
    pink: "from-pink-100 to-rose-100 border-pink-200",
    lime: "from-lime-100 to-green-100 border-lime-200",
    purple: "from-purple-100 to-violet-100 border-purple-200",
    sky: "from-sky-100 to-blue-100 border-sky-200",
    red: "from-red-100 to-rose-100 border-red-200",
    teal: "from-teal-100 to-cyan-100 border-teal-200",
    orange: "from-orange-100 to-amber-100 border-orange-200",
    yellow: "from-yellow-100 to-amber-100 border-yellow-200",
  };

  const badgeClasses: Record<string, string> = {
    kids: "bg-[#0ea5e9] text-white",
    adult: "bg-purple-500 text-white",
    free: "bg-red-500 text-white",
    both: "bg-emerald-500 text-white",
  };

  const badgeLabel: Record<string, string> = {
    kids: "子ども向け",
    adult: "大人向け",
    free: "無料",
    both: "男女OK",
  };

  const filteredActivities = activities.filter((activity) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "free") return activity.isFree;
    if (activeFilter === "kids") return activity.category === "kids";
    if (activeFilter === "adult")
      return activity.category === "adult" || activity.category === "both";
    return false;
  });

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
            INFORMATION
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            活動<span className="text-[#fef08a]">内容</span>
          </h1>
          <p className="text-white/90 text-lg">
            全13種類の教室を展開中。お子さまにぴったりの教室を見つけてください!
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-12">
        <div
          ref={filterRef}
          className="bg-white rounded-2xl shadow-xl p-2 flex flex-wrap gap-2 justify-center opacity-0 translate-y-8 transition-all duration-700"
        >
          {["all", "kids", "adult", "free"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === filter
                  ? "bg-[#0ea5e9] text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {filter === "all"
                ? "すべて"
                : filter === "kids"
                  ? "子ども向け"
                  : filter === "adult"
                    ? "大人向け"
                    : "無料"}
            </button>
          ))}
        </div>
      </div>

      {/* Activities Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map((activity) => (
            <div
              key={activity.id}
              ref={itemRef}
              className={`bg-white rounded-2xl border-2 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 opacity-0 translate-y-8 ${colorClasses[activity.color].split(" ")[2]}`}
            >
              <div
                className={`bg-gradient-to-br ${colorClasses[activity.color].split(" ").slice(0, 2).join(" ")} p-6`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="material-symbols-rounded text-gray-900 text-3xl">
                      {activity.icon}
                    </span>
                  </div>
                  <span
                    className={`px-3 py-1 ${badgeClasses[activity.category]} text-xs font-bold rounded-full whitespace-nowrap`}
                  >
                    {badgeLabel[activity.category]}
                  </span>
                </div>
                <h3 className="text-xl font-black text-gray-900">
                  {activity.name}
                </h3>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-rounded text-[#0ea5e9] text-xl">
                      location_on
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-gray-500 block mb-1">
                      場所
                    </span>
                    <span className="text-sm text-gray-700">
                      {activity.place}
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-rounded text-[#0ea5e9] text-xl">
                      schedule
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-gray-500 block mb-1">
                      日時
                    </span>
                    <span className="text-sm text-gray-700 whitespace-pre-line">
                      {activity.time}
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-rounded text-[#0ea5e9] text-xl">
                      group
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-gray-500 block mb-1">
                      対象
                    </span>
                    <span className="text-sm text-gray-700">
                      {activity.target}
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-rounded text-[#0ea5e9] text-xl">
                      school
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-gray-500 block mb-1">
                      指導
                    </span>
                    <span className="text-sm text-gray-700">
                      {activity.instructor}
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-rounded text-[#0ea5e9] text-xl">
                      description
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-gray-500 block mb-1">
                      内容
                    </span>
                    <span className="text-sm text-gray-700">
                      {activity.description}
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6">
                <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl p-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-600">
                    参加費{activity.period && `(${activity.period})`}
                  </span>
                  <span
                    className={`text-xl font-black ${activity.isFree ? "text-red-500" : "text-[#0ea5e9]"}`}
                  >
                    {activity.fee}
                    {activity.isFree ? "!" : ""}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div
          ref={ctaRef}
          className="bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] rounded-3xl p-8 md:p-12 text-center opacity-0 translate-y-8 transition-all duration-700"
        >
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
            どの教室も無料体験できます!
          </h3>
          <p className="text-white/90 text-base mb-8">
            「まずは見学だけ…」という方も大歓迎。
            <br />
            保護者の方もお気軽にご参加ください。
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
