import { useEffect, useState } from 'react';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

interface NewsItem {
  date: string;
  category: string;
  title: string;
  link: string;
}

const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSample/pub?gid=0&single=true&output=csv';

function parseCSV(text: string): NewsItem[] {
  const lines = text.trim().split('\n');
  if (lines.length < 2) return [];
  return lines.slice(1).map((line) => {
    const cols = line.split(',').map((c) => c.trim().replace(/^"|"$/g, ''));
    return {
      date: cols[0] || '',
      category: cols[1] || 'お知らせ',
      title: cols[2] || '',
      link: cols[3] || '#',
    };
  }).filter((item) => item.title);
}

const fallbackNews: NewsItem[] = [
  { date: '2026/2/22', category: 'お知らせ', title: 'oshirase', link: '#' },
  { date: '2026/2/22', category: 'お知らせ', title: 'test', link: '#' },
];

export default function News() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>(fallbackNews);
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
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 translate-y-8 transition-all duration-700">
        <div className="mb-16">
          <div className="inline-block px-4 py-1.5 bg-[#0ea5e9]/10 text-[#0ea5e9] text-xs font-bold rounded-full mb-6">
            INFORMATION
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
            お知らせ・<span className="text-[#0ea5e9]">更新情報</span>
          </h2>
        </div>

        <div className="space-y-4">
          {newsItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 bg-sky-50 rounded-xl hover:bg-sky-100 transition-colors cursor-pointer"
            >
              <span className="text-sm font-medium text-gray-500 whitespace-nowrap">{item.date}</span>
              <span className="inline-block px-4 py-1 text-xs font-bold rounded-full whitespace-nowrap bg-[#0ea5e9] text-white">
                {item.category}
              </span>
              <span className="text-gray-900 font-medium">{item.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
