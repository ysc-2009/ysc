import { useEffect, useState } from "react";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

interface NewsItem {
  date: string;
  category: string;
  title: string;
}

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQlOLKrKA6Sp84NbVY1NCfgoDyk0SR0uZm8qQCowEjF8VtvRi48mzeV5ADONuA4v3oupPZUqODFuHcO/pub?gid=0&single=true&output=csv";

function parseCSV(text: string): NewsItem[] {
  const lines = text.trim().split("\n");
  if (lines.length < 2) return [];
  return lines
    .slice(1)
    .map((line) => {
      const cols = line.split(",").map((c) => c.trim().replace(/^"|"$/g, ""));
      return {
        date: cols[0] || "",
        category: cols[1] || "お知らせ",
        title: cols[2] || "",
      };
    })
    .filter((item) => item.title);
}

export default function News() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const sectionRef = useScrollAnimation();

  useEffect(() => {
    fetch(SHEET_URL)
      .then((res) => res.text())
      .then((text) => {
        const parsed = parseCSV(text);
        if (parsed.length > 0) setNewsItems(parsed);
      })
      .catch(() => {});
  }, []);

  return (
    <section id="news" className="py-24 bg-sky-50">
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 translate-y-8 transition-all duration-700"
      >
        <div className="mb-16">
          <div className="inline-block px-4 py-1.5 bg-[#0ea5e9]/10 text-[#0ea5e9] text-xs font-bold rounded-full mb-6">
            INFORMATION
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
            お知らせ・<span className="text-[#0ea5e9]">更新情報</span>
          </h2>
        </div>

        <div className="space-y-4">
          {newsItems.length === 0 && (
            <p className="text-gray-500 text-center py-8">
              お知らせはありません
            </p>
          )}
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 bg-white rounded-xl shadow-sm"
            >
              <span className="text-sm font-medium text-gray-500 whitespace-nowrap">
                {item.date}
              </span>
              <span className="inline-block px-4 py-1 text-xs font-bold rounded-full whitespace-nowrap bg-[#0ea5e9] text-white">
                {item.category}
              </span>
              <span className="text-gray-900 font-medium">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
