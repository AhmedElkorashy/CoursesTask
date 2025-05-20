import React, { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import "./NewsletterSection.css";

const NewsletterSection = () => {
  const { language } = useLanguage();
  const isRTL = language.dir === "rtl";

  return (
    <div className="newsletter-wrapper">
      <section id="newsletter" className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h2 className="newsletter-title">
              {isRTL
                ? "اشترك في النشرة الإخبارية لدينا"
                : "Subscribe to Our Newsletter"}
            </h2>
            <p className="newsletter-description">
              {isRTL
                ? "يمكن أن تساعدك النشرات الإخبارية على البقاء على اطلاع بأحدث الأخبار والأحداث في مجال اهتمامك."
                : "Newsletters can help you stay up to date with the latest news and events in your field of interest."}
            </p>
            <form className="newsletter-form">
              <div className="input-group">
                <div className="input-wrapper">
                  <input
                    type="email"
                    placeholder={
                      isRTL
                        ? "الرجاء إدخال بريدك الإلكتروني"
                        : "Please enter your email"
                    }
                    required
                    className="newsletter-input"
                  />
                  <span className="email-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                </div>
                <button type="button" className="newsletter-button">
                  {isRTL ? "اشترك" : "Subscribe"}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="decoration top-left"></div>
        <div className="decoration bottom-right"></div>
      </section>
    </div>
  );
};

export default NewsletterSection;
