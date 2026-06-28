interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  return (
    <section className="bg-linear-to-b from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8 mb-8">
      <div className="max-w-7xl mx-auto">
        {/* BUG 1: Using text-left and ml-8 (physical properties) breaks RTL spacing */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance text-left ml-8">
          نور للحلول التقنية
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-balance text-left ml-8">
          شركة متخصصة في تطوير المواقع والتطبيقات والحلول التقنية المبتكرة
          لأعمالك
        </p>
        <button
          onClick={() => setActiveSection("contact")}
          className="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 ml-8"
        >
          ابدأ الآن
        </button>
      </div>

      {/* Decorative Element */}
      <div className="mt-16 max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600 hover:shadow-xl transition-shadow duration-300">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="group">
              <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <p className="text-gray-600">مشروع منجز</p>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                30+
              </div>
              <p className="text-gray-600">عميل سعيد</p>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                5+
              </div>
              <p className="text-gray-600">سنوات خبرة</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
