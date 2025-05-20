import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import course1 from "../../assets/images/sara.png";
import styles from "./CoursesSection.module.css";
import AOS from "aos";
const coursesData = {
  ar: {
    title: "أحدث الدورات التدريبية",
    subtitle:
      "اكتشف أحدث الدورات التدريبية المتنوعة لتطوير مهاراتك وتحقيق أهدافك المهنية والشخصية",
    courseDetails: "تفاصيل الدورة",
    courses: [
      {
        id: 1,
        title: "دورة تعلم أساسيات ال UI/UX للمستوى المبتدئ",
        image: course1,
        rating: 4.5,
        price: "250 ر.س",
      },
      {
        id: 2,
        title: "دورة تعلم أساسيات ال UI/UX للمستوى المبتدئ",
        image: course1,
        rating: 4.5,
        price: "250 ر.س",
      },
      {
        id: 3,
        title: "دورة تعلم أساسيات ال UI/UX للمستوى المبتدئ",
        image: course1,
        rating: 4.5,
        price: "250 ر.س",
      },
      {
        id: 4,
        title: "دورة تعلم أساسيات ال UI/UX للمستوى المبتدئ",
        image: course1,
        rating: 4.5,
        price: "250 ر.س",
      },
      {
        id: 5,
        title: "دورة تعلم أساسيات ال UI/UX للمستوى المبتدئ",
        image: course1,
        rating: 4.5,
        price: "250 ر.س",
      },
      {
        id: 6,
        title: "دورة تعلم أساسيات ال UI/UX للمستوى المبتدئ",
        image: course1,
        rating: 4.5,
        price: "250 ر.س",
      },
      {
        id: 7,
        title: "دورة تعلم أساسيات ال UI/UX للمستوى المبتدئ",
        image: course1,
        rating: 4.5,
        price: "250 ر.س",
      },
      {
        id: 8,
        title: "دورة تعلم أساسيات ال UI/UX للمستوى المبتدئ",
        image: course1,
        rating: 4.5,
        price: "250 ر.س",
      },
    ],
  },
  en: {
    title: "Latest Training Courses",
    subtitle:
      "Discover our latest diverse training courses to develop your skills and achieve your professional and personal goals",
    courseDetails: "Course Details",
    courses: [
      {
        id: 1,
        title: "UI/UX Basics Course for Beginners",
        image: course1,
        rating: 4.5,
        price: "250 SAR",
      },
      {
        id: 2,
        title: "UI/UX Basics Course for Beginners",
        image: course1,
        rating: 4.5,
        price: "250 SAR",
      },
      {
        id: 3,
        title: "UI/UX Basics Course for Beginners",
        image: course1,
        rating: 4.5,
        price: "250 SAR",
      },
      {
        id: 4,
        title: "UI/UX Basics Course for Beginners",
        image: course1,
        rating: 4.5,
        price: "250 SAR",
      },
      {
        id: 5,
        title: "UI/UX Basics Course for Beginners",
        image: course1,
        rating: 4.5,
        price: "250 SAR",
      },
      {
        id: 6,
        title: "UI/UX Basics Course for Beginners",
        image: course1,
        rating: 4.5,
        price: "250 SAR",
      },
      {
        id: 7,
        title: "UI/UX Basics Course for Beginners",
        image: course1,
        rating: 4.5,
        price: "250 SAR",
      },
      {
        id: 8,
        title: "UI/UX Basics Course for Beginners",
        image: course1,
        rating: 4.5,
        price: "250 SAR",
      },
    ],
  },
};

const CoursesSection = () => {
  const { language } = useLanguage();
  const content = coursesData[language.code];
  const isRTL = language.dir === "rtl";

  return (
    <section
      id="courses"
      className="py-16 md:py-20 bg-gray-50 courses scroll-mt-20"
    >
      <div className="container" data-aos="fade-up">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {content.title}
          </h2>
          <p className="text-xl text-gray-500 max-w-sm mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.courses.map((course, index) => (
            <div
              key={course.id}
              className="bg-white font-semibold rounded-2xl overflow-hidden shadow-md hover:shadow-lg"
              data-aos={
                course.id === 1 ||
                course.id === 2 ||
                course.id === 5 ||
                course.id === 6
                  ? "fade-left"
                  : "fade-right"
              }
              data-aos-duration="1000"
            >
              <div className="relative">
                <div className="w-full h-48 px-4 py-4">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 rounded-sm object-cover"
                  />
                </div>
                <div className="absolute top-4 left-4 rounded-lg px-2 py-1 flex items-center gap-1">
                  <span className="text-sm font-medium">{course.rating}</span>
                  <span className="text-yellow-400">★</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-6 line-clamp-2 min-h-[3.5rem]">
                  {course.title}
                </h3>
                <div className="flex items-center justify-between">
                  <button className="bg-purple-100 text-purple-700 px-6 py-2.5 rounded-lg font-medium inline-flex items-center gap-2 hover-effect">
                    <svg
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
                    </svg>
                    {content.courseDetails}
                  </button>
                  <span className="text-lg font-bold text-brand-purple">
                    {course.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
