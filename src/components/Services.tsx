import { Globe, Smartphone, Zap } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: Globe,
      title: "تطوير المواقع",
      description: "مواقع احترافية وسريعة مصممة بأحدث التقنيات لزيادة مبيعاتك",
      features: ["متجاوب", "محسّن للبحث", "آمن تماماً"],
    },
    {
      id: 2,
      icon: Smartphone,
      title: "تطبيقات الجوال",
      description: "تطبيقات iOS و Android عالية الأداء تلبي احتياجات عملائك",
      features: ["سريع", "سهل الاستخدام", "دعم فني"],
    },
    {
      id: 3,
      icon: Zap,
      title: "حلول مخصصة",
      description: "برامج مخصصة تحل مشاكلك التقنية وتزيد كفاءة عملك",
      features: ["مخصص", "قابل للتطور", "دعم كامل"],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 mb-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          خدماتنا
        </h2>
        <p className="text-center text-gray-600 mb-12">
          نقدم حلول متكاملة لجميع احتياجاتك التقنية
        </p>

        {/* BUG 3: Fixed width cards with grid-cols-3 causes horizontal overflow on mobile */}
        <div className="grid grid-cols-3 gap-6 overflow-x-auto pb-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 min-w-100 hover:-translate-y-1 border border-gray-100"
              >
                <div className="mb-4 p-4 bg-linear-to-br from-blue-100 to-blue-50 rounded-xl w-fit group-hover:from-blue-200 group-hover:to-blue-100 transition-colors duration-300">
                  <Icon size={32} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
