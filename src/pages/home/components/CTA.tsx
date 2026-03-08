import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

export default function CTA() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="trial" className="py-24 bg-gradient-to-b from-white to-sky-50">
      <div ref={sectionRef} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center opacity-0 translate-y-8 transition-all duration-700">
        <div className="inline-block px-6 py-2 bg-[#0ea5e9] text-white text-sm font-bold rounded-full mb-8">
          無料体験 随時受付中
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
          一緒に<span className="text-[#0ea5e9]">スポーツ</span>を<br />
          楽しもう！
        </h2>

        <p className="text-gray-600 text-lg mb-12 leading-relaxed">
          「どんな雰囲気か知りたい」という方も大歓迎。<br />
          まずは気軽に無料体験からはじめてみませんか？
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/trial" className="px-8 py-4 bg-[#0ea5e9] text-white font-bold rounded-full hover:bg-[#0284c7] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap">
            <span className="material-symbols-outlined">bolt</span>
            無料体験・入会はこちら
          </a>
          <a href="/members" className="px-8 py-4 bg-white border-2 border-[#0ea5e9] text-[#0ea5e9] font-bold rounded-full hover:bg-[#0ea5e9] hover:text-white transition-all duration-300 cursor-pointer whitespace-nowrap">
            会員様向けページ
          </a>
        </div>
      </div>
    </section>
  );
}