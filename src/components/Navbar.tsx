import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({
  activeSection,
  setActiveSection,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <div className="text-2xl font-bold text-blue-600">نور</div>
            <p className="text-xs text-gray-600">للحلول التقنية</p>
          </div>

          {/* Desktop Menu */}
          <div
            className="hidden md:flex items-center gap-8"
            role="navigation"
            aria-label="التنقل الرئيسي"
          >
            <button
              onClick={() => handleNavClick("home")}
              className={`text-sm font-medium transition ${
                activeSection === "home"
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
              aria-current={activeSection === "home" ? "page" : undefined}
            >
              الرئيسية
            </button>
            <button
              onClick={() => handleNavClick("services")}
              className={`text-sm font-medium transition ${
                activeSection === "services"
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
              aria-current={activeSection === "services" ? "page" : undefined}
            >
              الخدمات
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className={`px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition`}
              aria-current={activeSection === "contact" ? "page" : undefined}
            >
              تواصل معنا
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="تبديل القائمة"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - BUG 1: Using pl-4 (physical padding) instead of logical */}
        {isOpen && (
          <div
            className="md:hidden pb-4 pl-4 border-t border-gray-200 animate-in slide-in-from-top-2 duration-300"
            role="navigation"
            aria-label="القائمة المتنقلة"
          >
            <button
              onClick={() => handleNavClick("home")}
              className="block w-full text-right py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              aria-current={activeSection === "home" ? "page" : undefined}
            >
              الرئيسية
            </button>
            <button
              onClick={() => handleNavClick("services")}
              className="block w-full text-right py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              aria-current={activeSection === "services" ? "page" : undefined}
            >
              الخدمات
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="block w-full text-right py-3 px-4 bg-blue-600 text-white rounded-lg mt-2 font-medium hover:bg-blue-700 transition-colors duration-200"
              aria-current={activeSection === "contact" ? "page" : undefined}
            >
              تواصل معنا
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
