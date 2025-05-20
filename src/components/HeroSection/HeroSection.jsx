import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const HeroSection = () => {
  const { language } = useLanguage();
  const isRTL = language.dir === "rtl";

  const texts = {
    ar: {
      designer: "مصمم",
      interface: "واجهة",
      experience: "تجربة",
      user: "مستخدم",
    },
    en: {
      designer: "UI/UX",
      interface: "Designer",
      experience: "Creating",
      user: "Experiences",
    },
  };

  const currentText = texts[language.code];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-purple-50 pt-20"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-full max-w-2xl mx-auto">
            <img
              src="/hero-instructor-removebg-preview.png"
              alt={
                language.code === "ar"
                  ? "مصمم واجهة وتجربة المستخدم"
                  : "UI/UX Designer"
              }
              className="w-full object-contain mix-blend-multiply hero-image"
            />

            <div className="absolute top-[50%] translate-y-[50%] text-center pb-4 w-full">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-[#4F008C] inline-block">
                  {currentText.designer}
                </span>{" "}
                <span className="text-[#4F008C] inline-block animate-pulse hero-text-stroke">
                  {currentText.interface}
                </span>{" "}
                <span className="text-[#4F008C] inline-block animate-pulse hero-text-stroke">
                  {currentText.experience}
                </span>{" "}
                <span className="text-[#4F008C] inline-block">
                  {currentText.user}
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
