import { useEffect } from 'react';
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function ContactPage() {
  const staffRef = useScrollAnimation();
  const contactCardsRef = useScrollAnimation();
  const faxRef = useScrollAnimation();
  const locationRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

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
          <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full mb-4">
            CONTACT
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4" style={{ fontFamily: "'Rounded Mplus 1c', sans-serif" }}>
            お<span className="text-sky-100">問い合わせ</span>
          </h1>
          <p className="text-white/90 text-lg">気になることは何でもお気軽にご連絡ください!</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Staff Card */}
        <div ref={staffRef} className="bg-white rounded-2xl shadow-xl p-8 mb-12 flex flex-col md:flex-row items-center gap-6 opacity-0 translate-y-8 transition-all duration-700">
          <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex-shrink-0">
            <i className="ri-user-smile-line text-5xl text-white"></i>
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm text-gray-500 mb-2">担当</p>
            <h2 className="text-3xl font-black text-gray-800 mb-3" style={{ fontFamily: "'Rounded Mplus 1c', sans-serif" }}>馬場</h2>
            <p className="text-gray-600 leading-relaxed">
              体験参加・入会のご相談から、教室の内容・スケジュールのご質問まで、<br />
              どんな内容でもお気軽にどうぞ。丁寧にご案内いたします!
            </p>
          </div>
        </div>

        {/* Contact Cards */}
        <div ref={contactCardsRef} className="grid md:grid-cols-2 gap-6 mb-12 opacity-0 translate-y-8 transition-all duration-700">
          <a 
            href="tel:09050600115" 
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all group cursor-pointer"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-lime-400 to-green-500 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform">
              <i className="ri-phone-line text-3xl text-white"></i>
            </div>
            <p className="text-sm text-gray-500 text-center mb-2">電話</p>
            <p className="text-2xl font-black text-gray-800 text-center mb-4">090-5060-0115</p>
            <p className="text-sm text-gray-600 text-center mb-6">
              受付時間:<strong>18:00 〜 21:00</strong><br />
              (土日祝も対応)
            </p>
            <div className="flex items-center justify-center gap-2 text-lime-600 font-bold group-hover:text-lime-700">
              <i className="ri-phone-line text-xl"></i>
              <span className="whitespace-nowrap">電話をかける</span>
            </div>
          </a>

          <a 
            href="mailto:hidenoribaba@hotmail.com" 
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all group cursor-pointer"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform">
              <i className="ri-mail-line text-3xl text-white"></i>
            </div>
            <p className="text-sm text-gray-500 text-center mb-2">メール</p>
            <p className="text-xl font-black text-gray-800 text-center mb-4 break-all">hidenoribaba@hotmail.com</p>
            <p className="text-sm text-gray-600 text-center mb-6">
              24時間受付中。<br />
              返信は通常1〜2日以内。
            </p>
            <div className="flex items-center justify-center gap-2 text-sky-600 font-bold group-hover:text-sky-700">
              <i className="ri-mail-line text-xl"></i>
              <span className="whitespace-nowrap">メールを送る</span>
            </div>
          </a>
        </div>

        {/* FAX Note */}
        <div ref={faxRef} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg p-8 mb-12 flex items-start gap-6 opacity-0 translate-y-8 transition-all duration-700">
          <div className="w-14 h-14 flex items-center justify-center bg-gray-200 rounded-xl flex-shrink-0">
            <i className="ri-printer-line text-3xl text-gray-600"></i>
          </div>
          <div>
            <h3 className="text-xl font-black text-gray-800 mb-3">FAXについて</h3>
            <p className="text-gray-600 leading-relaxed">
              FAX番号については、お電話をいただいたときにご案内させていただきます。まずはお電話かメールにてご連絡ください。
            </p>
          </div>
        </div>

        {/* Location Section */}
        <div ref={locationRef} className="bg-white rounded-2xl shadow-xl p-8 mb-12 opacity-0 translate-y-8 transition-all duration-700">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-red-400 to-pink-500 rounded-xl">
              <i className="ri-map-pin-line text-3xl text-white"></i>
            </div>
            <h3 className="text-2xl font-black text-gray-800" style={{ fontFamily: "'Rounded Mplus 1c', sans-serif" }}>主な活動場所</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-6">
              <div className="w-12 h-12 flex items-center justify-center bg-sky-200 rounded-lg mb-4">
                <i className="ri-school-line text-2xl text-sky-700"></i>
              </div>
              <h4 className="text-lg font-black text-gray-800 mb-3">和歌山市立安原小学校</h4>
              <p className="text-sm text-gray-600">
                〒640-0343<br />
                和歌山県和歌山市江南239
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <div className="w-12 h-12 flex items-center justify-center bg-green-200 rounded-lg mb-4">
                <i className="ri-building-line text-2xl text-green-700"></i>
              </div>
              <h4 className="text-lg font-black text-gray-800 mb-3">東部コミュニティセンター</h4>
              <p className="text-sm text-gray-600">
                〒640-8311<br />
                和歌山県和歌山市寺内665
              </p>
            </div>
          </div>
        </div>

        {/* Trial CTA */}
        <div ref={ctaRef} className="bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] rounded-2xl shadow-xl p-10 text-center text-white opacity-0 translate-y-8 transition-all duration-700">
          <p className="text-lg mb-6 leading-relaxed">
            「まずは雰囲気を見てみたい」という方は、<br />
            <strong className="text-2xl">無料体験</strong>からスタートするのがおすすめです!
          </p>
          <a 
            href="/trial" 
            className="inline-flex items-center gap-3 bg-white text-[#0ea5e9] px-8 py-4 rounded-full font-black text-lg hover:bg-sky-50 transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
          >
            <i className="ri-flashlight-line text-2xl"></i>
            無料体験・入会の流れを見る
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}