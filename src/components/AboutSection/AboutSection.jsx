import React, { useEffect } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import sara from "./../../../public/hero-instructor-removebg-preview.png";
import AOS from "aos";

const AboutSection = () => {
  const { language } = useLanguage();
  const isRTL = language.dir === "rtl";

  const texts = {
    ar: {
      welcome: "مرحباً",
      name: "أنا أحمد عطيه",
      title: "مصمم واجهة وتجربة مستخدم (UI/UX Designer)",
      description:
        "متخصص في تصميم تجارب مبتكرة وواجهات سهلة الاستخدام. ماهر في أدوات التصميم مثل Figma و Adobe XD، مع خبرة في تحقيق أهداف المستخدمين والشركات.",
      stats: [
        { value: "+6", label: "سنين من الخبرة" },
        { value: "+150", label: "مشروع مكتمل" },
        { value: "+130", label: "عملاء سعداء" },
      ],
    },
    en: {
      welcome: "Welcome",
      name: "I'm Ahmed Attia",
      title: "UI/UX Designer",
      description:
        "Specialized in designing innovative experiences and user-friendly interfaces. Skilled in design tools like Figma and Adobe XD, with experience in achieving user and company goals.",
      stats: [
        { value: "+6", label: "Years of Experience" },
        { value: "+150", label: "Completed Projects" },
        { value: "+130", label: "Happy Clients" },
      ],
    },
  };

  const currentText = texts[language.code];

  useEffect(() => {
    // Refresh AOS when language changes
    AOS.refresh();
  }, [language]);

  return (
    <section
      id="about"
      className="relative bg-[#4F008C] py-16 md:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`relative ${isRTL ? "lg:order-2" : "lg:order-1"}`}
            data-aos={isRTL ? "fade-right" : "fade-left"}
            data-aos-duration="1000"
          >
            <img
              src={sara}
              alt={currentText.name}
              className="w-full max-w-lg mx-auto"
            />
          </div>

          <div
            className={`text-white ${isRTL ? "text-right" : "text-left"} ${
              isRTL ? "lg:order-1" : "lg:order-2"
            }`}
            data-aos={isRTL ? "fade-left" : "fade-right"}
            data-aos-duration="1000"
          >
            <h3 className="text-[#FFD700] text-2xl font-bold mb-2">
              {currentText.welcome}
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {currentText.name}
            </h2>
            <p className="text-lg opacity-90 mb-12 leading-relaxed max-w-2xl">
              {currentText.description}
            </p>

            <div className="space-y-6">
              {currentText.stats.map((stat, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 ${
                    isRTL ? "" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full bg-[#FFD700] flex items-center justify-center ${
                      isRTL ? "" : "order-1"
                    }`}
                  >
                    <i className={`fas fa-check w-5 h-5`}></i>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold lg:font-extrabold">
                      {stat.value}
                    </span>
                    <span className="text-lg opacity-90 font-bold lg:font-extrabold">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
