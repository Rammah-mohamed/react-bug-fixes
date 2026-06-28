import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">نور</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              شركة متخصصة في تطوير الحلول التقنية والبرمجيات للشركات والمتاجر
              الإلكترونية
            </p>
            {/* Social Media Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="px-3 py-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-300 text-sm"
              >
                Facebook
              </a>
              <a
                href="#"
                className="px-3 py-2 bg-gray-800 rounded-lg hover:bg-blue-400 transition-colors duration-300 text-sm"
              >
                Twitter
              </a>
              <a
                href="#"
                className="px-3 py-2 bg-gray-800 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="px-3 py-2 bg-gray-800 rounded-lg hover:bg-pink-600 transition-colors duration-300 text-sm"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">الروابط السريعة</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-300 inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  الرئيسية
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-blue-400 transition-colors duration-300 inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  الخدمات
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-400 transition-colors duration-300 inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">تواصل معنا</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                  <Phone size={18} />
                </div>
                <a
                  href="tel:+966501234567"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  +966 50 123 4567
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                  <Mail size={18} />
                </div>
                <a
                  href="mailto:info@noor.sa"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  info@noor.sa
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                  <MapPin size={18} />
                </div>
                <span className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                  الرياض، السعودية
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 نور للحلول التقنية. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
