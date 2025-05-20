import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const languages = {
  ar: {
    dir: "rtl",
    code: "ar",
    name: "العربية",
    flag: "/sa-flag.svg",
  },
  en: {
    dir: "ltr",
    code: "en",
    name: "English",
    flag: "/en-flag.svg",
  },
};

export const translations = {
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عن المدرب",
      courses: "الدورات التدريبية",
      blog: "المدونة",
      consultations: "اشترك",
      podcast: "بودكاست",
    },
    auth: {
      login: "الدخول",
      register: "إنشاء حساب",
    },
    hero: {
      title: {
        designer: "مصمم",
        interface: "واجهة وتجربة",
        user: "المستخدم",
      },
      description:
        "تعلم تصميم واجهات المستخدم وتجربة المستخدم مع أفضل المدربين",
      cta: {
        start: "ابدأ رحلة التعلم",
        browse: "تصفح الدورات",
      },
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      courses: "Courses",
      blog: "Blog",
      consultations: "Subscribe",
      podcast: "Podcast",
    },
    auth: {
      login: "Login",
      register: "Register",
    },
    hero: {
      title: {
        designer: "UI/UX",
        interface: "Designer &",
        user: "Developer",
      },
      description: "Learn UI/UX design with the best instructors",
      cta: {
        start: "Start Learning",
        browse: "Browse Courses",
      },
    },
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(languages.ar);

  const toggleLanguage = () => {
    setLanguage((prevLang) =>
      prevLang.code === "ar" ? languages.en : languages.ar
    );
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  
  return context;
}
