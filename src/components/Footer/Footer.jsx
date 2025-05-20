import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import "./Footer.css";

const Footer = () => {
  const { language } = useLanguage();
  const isRTL = language.dir === "rtl";

  const footerLinks = [
    { id: "hero", label: isRTL ? "الرئيسية" : "Home" },
    { id: "about", label: isRTL ? "عن المدرب" : "About Trainer" },
    { id: "courses", label: isRTL ? "الدورات التدريبية" : "Training Courses" },
    { id: "blog", label: isRTL ? "المدونة" : "Blog" },
    { id: "newsletter", label: isRTL ? "اشترك" : "Subscribe" },
  ];

  return (
    <footer className="footer">
      <div className="footer-logo">
        <a
          href="#hero"
          className="text-2xl font-bold bg-gradient-to-r from-[#4f008c] to-[#9000ff] bg-clip-text"
        >
          {language.code === "ar" ? "كورسات زون" : "Courses Zone"}
        </a>
      </div>

      <div className="footer-nav">
        <ul className={isRTL ? "rtl" : ""}>
          {footerLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-white hover:text-yellow-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="social-links">
        <a href="#" className="social-link">
          <img src="/facebook.svg" alt="Facebook" />
        </a>
        <a href="#" className="social-link">
          <img src="/linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="#" className="social-link">
          <img src="/behance.svg" alt="Behance" />
        </a>
      </div>

      <div className="copyright">
        <p>
          {isRTL ? "جميع الحقوق محفوظة © 2025" : "© 2025 All Rights Reserved"}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
