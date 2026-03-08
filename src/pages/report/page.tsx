import { useState, useEffect } from "react";
import Header from "../home/components/Header";
import Footer from "../home/components/Footer";
import {
  useScrollAnimation,
  useScrollAnimationList,
} from "../../hooks/useScrollAnimation";

interface ReportItem {
  id: number;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
}

// 列順: A列=日付, B列=カテゴリ, C列=タイトル, D列=内容, E列=画像URL
const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQlOLKrKA6Sp84NbVY1NCfgoDyk0SR0uZm8qQCowEjF8VtvRi48mzeV5ADONuA4v3oupPZUqODFuHcO/pub?gid=684271530&single=true&output=csv";

// Googleドライブの画像URLを表示可能な形式に変換
function convertGoogleDriveUrl(url: string): string {
  if (!url) return "";
  const match = url.match(/\/file\/d\/([^/]+)/);
  if (match) {
    return `https://drive.google.com/uc?export=view&id=${match[1]}`;
  }
  return url;
}

function parseReportCSV(text: string): ReportItem[] {
  const lines = text.trim().split("\n");
  if (lines.length < 2) return [];
  return lines
    .slice(1)
    .map((line, idx) => {
      const cols = line.split(",").map((c) => c.trim().replace(/^"|"$/g, ""));
      return {
        id: idx + 1,
        date: cols[0] || "",
        category: cols[1] || "event",
        title: cols[2] || "",
        excerpt: cols[3] || "",
        image: convertGoogleDriveUrl(cols[4] || ""),
      };
    })
    .filter((item) => item.title);
}

const filters = [
  { id: "all", label: "すべて", icon: "grid_view" },
  { id: "soccer", label: "サッカー", icon: "sports_soccer" },
  { id: "onigokko", label: "鬼ごっこ", icon: "directions_run" },
  { id: "dance", label: "ダンス", icon: "music_note" },
  { id: "yoga", label: "ヨガ", icon: "self_improvement" },
  { id: "tennis", label: "テニス", icon: "sports_tennis" },
  { id: "athletic", label: "アスレチック", icon: "sports" },
  { id: "event", label: "イベント", icon: "celebration" },
];

const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    soccer: "bg-green-100 text-green-700",
    onigokko: "bg-red-100 text-red-700",
    dance: "bg-pink-100 text-pink-700",
    yoga: "bg-purple-100 text-purple-700",
    tennis: "bg-yellow-100 text-yellow-700",
    athletic: "bg-sky-100 text-sky-700",
    event: "bg-orange-100 text-orange-700",
  };
  return colors[category] || "bg-gray-100 text-gray-700";
};

const getCategoryLabel = (category: string) => {
  const labels: { [key: string]: string } = {
    soccer: "サッカー",
    onigokko: "鬼ごっこ",
    dance: "ダンス",
    yoga: "ヨガ",
    tennis: "テニス",
    athletic: "アスレチック",
    event: "イベント",
  };
  return labels[category] || category;
};

export default function ReportPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [reports, setReports] = useState<ReportItem[]>([]);
  const [loading, setLoading] = useState(true);
  const filterRef = useScrollAnimation();
  const itemRef = useScrollAnimationList();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(SHEET_URL)
      .then((res) => res.text())
      .then((text) => {
        const parsed = parseReportCSV(text);
        setReports(parsed);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const filteredReports =
    activeFilter === "all"
      ? reports
      : reports.filter((report) => report.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Header />

      {/* Page Hero */}
      <div className="relative bg-gradient-to-br from-[#0ea5e9] via-[#38bdf8] to-[#7dd3fc] text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold mb-4 tracking-wider">
            ACTIVITY REPORT
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            活動<span className="text-[#fef08a]">報告</span>
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            クラブのイベント・教室の様子をお届けします!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter Buttons */}
        <div
          ref={filterRef}
          className="flex flex-wrap gap-3 justify-center mb-12 opacity-0 translate-y-8 transition-all duration-700"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                activeFilter === filter.id
                  ? "bg-[#0ea5e9] text-white shadow-lg shadow-sky-200 scale-105"
                  : "bg-white text-gray-700 hover:bg-sky-50 hover:text-[#0ea5e9] border border-gray-200"
              }`}
            >
              <span className="material-symbols-rounded text-lg">
                {filter.icon}
              </span>
              {filter.label}
            </button>
          ))}
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-20">
            <div className="w-16 h-16 border-4 border-[#0ea5e9] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-500">読み込み中...</p>
          </div>
        )}

        {/* Reports Grid */}
        {!loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReports.map((report) => (
              <div
                key={report.id}
                ref={itemRef}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer opacity-0 translate-y-8"
              >
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-sky-100 to-blue-100">
                  {report.image && (
                    <img
                      src={report.image}
                      alt={report.title}
                      className="w-full h-full object-cover object-top"
                    />
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500 font-medium">
                      {report.date}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${getCategoryColor(report.category)}`}
                    >
                      {getCategoryLabel(report.category)}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3">
                    {report.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                    {report.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && filteredReports.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-rounded text-[#0ea5e9] text-4xl">
                search_off
              </span>
            </div>
            <p className="text-gray-500 text-lg">
              該当する活動報告がありません
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
