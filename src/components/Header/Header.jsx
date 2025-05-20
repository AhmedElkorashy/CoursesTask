import React, { useState } from "react";
import {
  useLanguage,
  translations,
  languages,
} from "../../contexts/LanguageContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language.code];
  const [isMenuOpen, 
    
  ] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMobileLangDropdownOpen, setIsMobileLangDropdownOpen] =
    useState(false);

  const navLinks = [
    {
      id: "hero",
      label: {
        en: "Home",
        ar: "الرئيسية",
      },
    },
    {
      id: "about",
      label: {
        en: "About",
        ar: "عن المنصة",
      },
    },
    {
      id: "courses",
      label: {
        en: "Courses",
        ar: "الدورات",
      },
    },
    {
      id: "newsletter",
      label: {
        en: "Subscribe",
        ar: "اشترك",
      },
    },
    {
      id: "blog",
      label: {
        en: "Blog",
        ar: "المدونة",
      },
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white shadow-sm py-3">
      <div className="container">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#hero" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#4f008c] to-[#9000ff] bg-clip-text text-transparent">
                {language.code === "ar" ? "كورسات زون" : "Courses Zone"}
              </span>
            </a>

            <div className="hidden lg:flex items-center">
              <ul className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.label[language.code]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#cart"
              className="p-2 text-gray-600 hover:text-brand-purple transition-colors"
            >
              <i className="fas fa-shopping-cart w-6 h-6"></i>
            </a>

            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center rounded-[10px] gap-2 px-3 py-1.5 hover:bg-gray-100 "
              >
                <span className="flex items-center gap-1">
                  {language.name}
                  <img
                    src={language.flag}
                    alt={language.name}
                    className="w-5 h-5 rounded-sm"
                  />
                </span>
                <i
                  className={`fas fa-chevron-down w-4 h-4 transition-transform duration-200 ${
                    isLangDropdownOpen ? "rotate-180" : ""
                  }`}
                ></i>
              </button>

              {isLangDropdownOpen && (
                <div className="absolute top-full right-0 mt-1 bg-white rounded-lg shadow-lg py-2 min-w-[160px]">
                  <button
                    onClick={() => {
                      toggleLanguage();
                      setIsLangDropdownOpen(false);
                    }}
                    className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <img
                      src={languages.ar.flag}
                      alt={languages.ar.name}
                      className="w-5 h-5 rounded-sm"
                    />
                    {languages.ar.name}
                  </button>
                  <button
                    onClick={() => {
                      toggleLanguage();
                      setIsLangDropdownOpen(false);
                    }}
                    className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <img
                      src={languages.en.flag}
                      alt={languages.en.name}
                      className="w-5 h-5 rounded-sm"
                    />
                    {languages.en.name}
                  </button>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button className="bg-[#F3F1F8] hover:bg-[#E9E6F3] text-brand-purple border-none rounded-full flex items-center gap-2 px-4 py-2">
                <i className="fas fa-user w-5 h-5"></i>
                {t.auth.login}
              </button>
              <button className="bg-[#F3F1F8] hover:bg-[#E9E6F3] text-brand-purple border-none rounded-full flex items-center gap-2 px-4 py-2">
                <i className="fas fa-user-plus w-5 h-5"></i>
                {t.auth.register}
              </button>
            </div>
          </div>

          <button
            className="lg:hidden p-2 text-gray-600 hover:text-brand-purple transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i
              className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} w-6 h-6`}
            ></i>
          </button>

          <div
            className={`lg:hidden fixed inset-0 bg-white z-[999] transition-all duration-300 ${
              isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <div className="container h-full py-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-8">
                <a
                  href="#hero"
                  className="flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-2xl font-bold bg-gradient-to-r from-[#4f008c] to-[#9000ff] bg-clip-text text-transparent">
                    {language.code === "ar" ? "كورسات زون" : "Courses Zone"}
                  </span>
                </a>
                <button
                  className="p-2 text-gray-600 hover:text-brand-purple transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="fas fa-times w-6 h-6"></i>
                </button>
              </div>

              <div className="flex flex-col h-[calc(100vh-100px)] justify-between">
                <ul className="space-y-6 mb-8">
                  {navLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        href={`#${link.id}`}
                        className="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label[language.code]}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="space-y-4 mt-auto">
                  <div className="relative">
                    <button
                      onClick={() =>
                        setIsMobileLangDropdownOpen(!isMobileLangDropdownOpen)
                      }
                      className="w-full justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 text-lg"
                    >
                      <span className="flex items-center gap-2">
                        <img
                          src={language.flag}
                          alt={language.name}
                          className="w-6 h-6 rounded-sm"
                        />
                        {language.name}
                      </span>
                      <i
                        className={`fas fa-chevron-down w-5 h-5 transition-transform duration-200 ${
                          isMobileLangDropdownOpen ? "rotate-180" : ""
                        }`}
                      ></i>
                    </button>

                    {isMobileLangDropdownOpen && (
                      <div className="absolute bottom-full left-0 right-0 mb-1 bg-white rounded-lg shadow-lg overflow-hidden">
                        {Object.values(languages).map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              toggleLanguage();
                              setIsMobileLangDropdownOpen(false);
                            }}
                            className="flex items-center gap-2 w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-100"
                          >
                            <img
                              src={lang.flag}
                              alt={lang.name}
                              className="w-6 h-6 rounded-sm"
                            />
                            {lang.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <button className="w-full justify-center bg-[#F3F1F8] hover:bg-[#E9E6F3] text-brand-purple rounded-full text-lg">
                    <i className="fas fa-user w-5 h-5 mr-2"></i>
                    {t.auth.login}
                  </button>
                  <button className="w-full justify-center bg-[#F3F1F8] hover:bg-[#E9E6F3] text-brand-purple rounded-full text-lg">
                    <i className="fas fa-user-plus w-5 h-5 mr-2"></i>
                    {t.auth.register}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
