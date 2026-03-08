import { Link } from "react-router-dom"; // ← 追加
import {
  useScrollAnimation,
  useScrollAnimationList,
} from "../../../hooks/useScrollAnimation";

const programs = [
  {
    icon: "sports_soccer",
    name: "サッカー教室",
    target: "年中〜小学生対象",
    schedule: "毎週水曜 16:00〜17:00",
    location: "安原小学校グラウンド",
    color: "bg-sky-50 border-sky-200",
  },
  {
    icon: "directions_run",
    name: "スポーツ鬼ごっこ",
    target: "小学生対象",
    schedule: "第1・第3土曜日",
    location: "安原小学校体育館",
    color: "bg-cyan-50 border-cyan-200",
  },
  {
    icon: "self_improvement",
    name: "ジャズダンス教室",
    target: "満4才〜小学生",
    schedule: "第2・第4土曜日",
    location: "東部コミュニティセンター",
    color: "bg-blue-50 border-blue-200",
  },
  {
    icon: "sports_tennis",
    name: "ショートテニス",
    target: "子ども対象",
    schedule: "第2・第4土曜日",
    location: "安原小学校体育館",
    color: "bg-sky-50 border-sky-200",
  },
];

export default function Programs() {
  const headerRef = useScrollAnimation();
  const itemRef = useScrollAnimationList();

  return (
    <section
      id="programs"
      className="py-24 bg-gradient-to-b from-sky-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6 opacity-0 translate-y-8 transition-all duration-700"
        >
          <div>
            <div className="inline-block px-4 py-1.5 bg-[#0ea5e9]/10 text-[#0ea5e9] text-xs font-bold rounded-full mb-6">
              PROGRAMS
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
              充実の<span className="text-[#0ea5e9]">教室</span>ラインナップ
            </h2>
          </div>
          <Link
            to="/info"
            className="flex items-center gap-2 text-[#0ea5e9] font-bold hover:gap-3 transition-all cursor-pointer whitespace-nowrap"
          >
            {" "}
            {/* ← a→Link, href→to */}
            すべての教室を見る
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>{" "}
          {/* ← /a→/Link */}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              ref={itemRef}
              className={`${program.color} border-2 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer opacity-0 translate-y-8`}
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md">
                <span className="material-symbols-outlined text-[#0ea5e9] text-3xl">
                  {program.icon}
                </span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4">
                {program.name}
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>{program.target}</p>
                <p>{program.schedule}</p>
                <p>{program.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
