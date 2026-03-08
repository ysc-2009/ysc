import { useState, useEffect } from 'react';

const slides = [
  'https://ysc-2009.github.io/ysc.github.io/images/top-slide1.jpg',
  'https://ysc-2009.github.io/ysc.github.io/images/top-slide2.jpg',
  'https://ysc-2009.github.io/ysc.github.io/images/top-slide3.jpg'
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            opacity: currentSlide === index ? 1 : 0,
            backgroundImage: `url(${slide})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>

      <div className="absolute top-24 right-8 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
        <span className="material-symbols-outlined text-white text-3xl">sports_soccer</span>
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-[#38bdf8] rounded-full"></div>
            <span className="text-white/90 text-sm font-medium">総合型地域スポーツクラブ・和歌山</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            スポーツで<br />
            <span className="text-[#38bdf8]">子どもの</span><br />
            未来をひらく
          </h1>

          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            青少年の健全育成、健康・体力づくり、<br />
            地域コミュニティの活性化を目指して。
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="/trial" className="px-8 py-4 bg-[#0ea5e9] text-white font-bold rounded-full hover:bg-[#0284c7] transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap">
              <span className="material-symbols-outlined">bolt</span>
              無料体験・入会はこちら
            </a>
            <a href="/about" className="px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 backdrop-blur-sm cursor-pointer whitespace-nowrap">
              クラブについて
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all cursor-pointer ${
              currentSlide === index ? 'bg-white w-8' : 'bg-white/50 w-3'
            }`}
            aria-label={`スライド${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-12 right-8 flex flex-col items-center gap-2 text-white/70">
        <span className="text-xs font-medium tracking-wider">SCROLL</span>
        <div className="w-px h-16 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 w-full h-8 bg-gradient-to-b from-white/70 to-transparent animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}