const locations = [
  {
    icon: 'school',
    name: '和歌山市立安原小学校',
    address: '〒640-0343\n和歌山県和歌山市江南239',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.194084361833!2d135.22231057637538!3d34.19251717310455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60074b87f757cf47%3A0xf10e024a93a7161a!2z5ZKM5q2M5bGx5biC56uL5a6J5Y6f5bCP5a2m5qCh!5e0!3m2!1sja!2sjp!4v1768394918969!5m2!1sja!2sjp'
  },
  {
    icon: 'location_city',
    name: '東部コミュニティセンター',
    address: '〒640-8311\n和歌山県和歌山市寺内665',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3299.6659323977606!2d135.2244120263759!3d34.20601102309955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60074b7e81a8d047%3A0xfd603cde584f0805!2z57SA44Gu5Zu95L2P5a6F5p2x6YOo44Kz44Of44Ol44OL44OG44Kj44K744Oz44K_44O8!5e0!3m2!1sja!2sjp!4v1768395142181!5m2!1sja!2sjp'
  }
];

export default function Access() {
  return (
    <section id="access" className="py-24 bg-gradient-to-b from-[#0284c7] to-[#0ea5e9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-block px-4 py-1.5 bg-white/20 text-white text-xs font-bold rounded-full mb-6">
            ACCESS
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            主な<span className="text-[#bae6fd]">活動場所</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="w-16 h-16 bg-[#0ea5e9] rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-white text-3xl">{location.icon}</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4">{location.name}</h3>
              <p className="text-gray-600 text-sm mb-6 whitespace-pre-line">{location.address}</p>
              <div className="rounded-xl overflow-hidden shadow-lg h-64">
                <iframe
                  src={location.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={location.name}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}