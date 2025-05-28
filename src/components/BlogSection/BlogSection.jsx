import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import sara from "../../assets/images/sara.png";
import styles from "./BlogSection.module.css";
import { ArrowRight01Icon } from "hugeicons-react";
const blogData = {
  ar: {
    title: "أحدث التدوينات",
    subtitle:
      "اطلع على أحدث التدوينات الملهمة التي تقدم نصائح وأفكار مبتكرة لتطوير حياتك ومهاراتك.",
    readMore: "تفاصيل التدوينة",
    posts: [
      {
        id: 1,
        title: "10 نصائح لتحسين تجربة المستخدم وزيادة التفاعل",
        excerpt:
          "اكتشف أفضل الممارسات لتحسين تجربة المستخدم في تصميماتك من تحسين تدفق التفاعل ...",
        image: sara,
        author: "احمد عطيه",
        date: "23 ديسمبر 2025",
      },
      {
        id: 2,
        title: "10 نصائح لتحسين تجربة المستخدم وزيادة التفاعل",
        excerpt:
          "اكتشف أفضل الممارسات لتحسين تجربة المستخدم في تصميماتك من تحسين تدفق التفاعل ...",
        image: sara,
        author: "احمد عطيه",
        date: "23 ديسمبر 2025",
      },
      {
        id: 3,
        title: "10 نصائح لتحسين تجربة المستخدم وزيادة التفاعل",
        excerpt:
          "اكتشف أفضل الممارسات لتحسين تجربة المستخدم في تصميماتك من تحسين تدفق التفاعل ...",
        image: sara,
        author: "احمد عطيه",
        date: "23 ديسمبر 2025",
      },
    ],
  },
  en: {
    title: "Latest Blog Posts",
    subtitle:
      "Discover our latest inspiring blog posts offering innovative tips and ideas to develop your life and skills.",
    readMore: "Read More",
    posts: [
      {
        id: 1,
        title: "10 Tips to Improve User Experience and Increase Engagement",
        excerpt:
          "Discover best practices for improving user experience in your designs by enhancing interaction flow...",
        image: sara,
        author: "Ahmed Attia",
        date: "December 23, 2025",
      },
      {
        id: 2,
        title: "10 Tips to Improve User Experience and Increase Engagement",
        excerpt:
          "Discover best practices for improving user experience in your designs by enhancing interaction flow...",
        image: sara,
        author: "Ahmed Attia",
        date: "December 23, 2025",
      },
      {
        id: 3,
        title: "10 Tips to Improve User Experience and Increase Engagement",
        excerpt:
          "Discover best practices for improving user experience in your designs by enhancing interaction flow...",
        image: sara,
        author: "Ahmed Attia",
        date: "December 23, 2025",
      },
    ],
  },
};

const BlogSection = () => {
  const { language } = useLanguage();
  const content = blogData[language.code];
  const isRTL = language.dir === "rtl";

  return (
    <section id="blog" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{content.title}</h2>
          <p className="text-gray-500 max-w-xs text-lg mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 BlogSection">
          {content.posts.map((post) => (
            <article
              key={post.id}
              className="bg-white shadow-xl border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="px-4 py-4  ">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full rounded-[10px]  aspect-[4/3] object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">{post.author}</span>
                  </div>
                </div>
                <h3
                  className={`text-xl font-bold mb-3 line-clamp-2 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {post.title}
                </h3>
                <p
                  className={`text-gray-500 mb-6 line-clamp-2 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {post.excerpt}
                </p>
                <div
                  className={`flex  ${isRTL ? "justify-start" : "justify-end"}`}
                >
                  <button className="hover-effect bg-purple-100 text-purple-700 px-6 py-2.5 rounded-[10px] font-medium inline-flex items-center gap-2">
                    {/* <svg
                      className="w-5 h-5 bg-slate-900 rounded-full p-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19l7-7-7-7"
                      />
                    </svg> */}
                    <ArrowRight01Icon size={20} />

                    {content.readMore}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
