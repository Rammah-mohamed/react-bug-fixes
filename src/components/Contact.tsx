import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // BUG 2: Async submit without loading state and button disabled state
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // BUG 2: No prevention of double-click submissions - button stays enabled
    // This simulates an async API call but button is never disabled
    setIsSubmitting(true);

    // Simulate async submission with setTimeout
    setTimeout(() => {
      console.log("Form submitted:", formData);
      alert("شكراً لتواصلك معنا! سنرد عليك قريباً.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          تواصل معنا
        </h2>
        <p className="text-center text-gray-600 mb-12">
          هل لديك استفسار؟ نحن هنا لمساعدتك
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 rounded-xl p-8 shadow-lg border border-gray-100"
        >
          {/* BUG 1: Using pl-4 (physical padding-left) breaks RTL spacing */}
          <div className="mb-6 pl-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              الاسم
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="أدخل اسمك"
            />
          </div>

          <div className="mb-6 pl-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              البريد الإلكتروني
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="example@email.com"
            />
          </div>

          <div className="mb-6 pl-4">
            <label
              htmlFor="subject"
              className="block text-gray-700 font-bold mb-2"
            >
              الموضوع
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="موضوع الاستفسار"
            />
          </div>

          <div className="mb-8 pl-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              الرسالة
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200"
              placeholder="اكتب رسالتك هنا..."
            />
          </div>

          {/* BUG 2: Button doesn't have disabled state, allowing multiple submissions */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg active:scale-95"
            // Missing: disabled={isSubmitting}
            // Missing: loading state styling
          >
            {/* {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"} */}
            جاري الإرسال...
          </button>
        </form>
      </div>
    </section>
  );
}
