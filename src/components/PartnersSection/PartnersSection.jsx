import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PartnersSection.css";
import sara from "../../assets/images/sara.png";
import ahmed from "../../assets/images/sara.png";
import mohamed from "../../assets/images/sara.png";

const testimonials = {
  ar: {
    title: "شهادات عملائنا",
    items: [
      {
        id: 1,
        name: "أحمد عطية",
        text: "أحمد عطية يتمتع بمهارات استثنائية في تصميم واجهة وتجربة المستخدم، يجمع بين الإبداع والدقة في عمله.",
        rating: 5,
        image: ahmed,
        alt: "Ahmed Attia",
      },
      {
        id: 2,
        name: "محمد سعيد",
        text: "تجربة رائعة في التعلم مع منصة متميزة. المحتوى عالي الجودة والدعم الفني ممتاز.",
        rating: 5,
        image: mohamed,
        alt: "Mohamed Saeed",
      },
      {
        id: 3,
        name: "سارة أحمد",
        text: "المنصة ساعدتني في تطوير مهاراتي بشكل احترافي. أنصح بها بشدة لكل من يريد التطور في مجال التقنية.",
        rating: 5,
        image: sara,
        alt: "Sara Ahmed",
      },
    ],
  },
  en: {
    title: "Our Testimonials",
    items: [
      {
        id: 1,
        name: "Ahmed Attia",
        text: "Ahmed Attia has exceptional skills in UI/UX design, combining creativity and precision in his work.",
        rating: 5,
        image: ahmed,
        alt: "Ahmed Attia",
      },
      {
        id: 2,
        name: "Mohammed Saeed",
        text: "Great learning experience with an excellent platform. High-quality content and excellent technical support.",
        rating: 5,
        image: mohamed,
        alt: "Mohammed Saeed",
      },
      {
        id: 3,
        name: "Sara Ahmed",
        text: "The platform helped me develop my skills professionally. I highly recommend it to anyone who wants to advance in technology.",
        rating: 5,
        image: sara,
        alt: "Sara Ahmed",
      },
    ],
  },
};

const PartnersSection = () => {
  const { language } = useLanguage();
  const content = testimonials[language.code];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: language.dir === "rtl",
    arrows: true,
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {content.title}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {content.items.map((testimonial) => (
              <div key={testimonial.id} className="px-6">
                <div className="bg-white rounded-lg p-8 text-center">
                  <div className="flex items-center justify-center mb-6 min-h-[40px]">
                    <i className="fas fa-star w-6 h-6 text-[#FFD700] mx-1"></i>
                    <i className="fas fa-star w-6 h-6 text-[#FFD700] mx-1"></i>
                    <i className="fas fa-star w-6 h-6 text-[#FFD700] mx-1"></i>
                    <i className="fas fa-star w-6 h-6 text-[#FFD700] mx-1"></i>
                    <i className="fas fa-star w-6 h-6 text-[#FFD700] mx-1"></i>
                  </div>

                  <p className="text-xl text-gray-800 mb-6 leading-relaxed">
                    {testimonial.text}
                  </p>

                  <img
                    src={testimonial.image}
                    alt={testimonial.alt}
                    className="w-16 h-16 rounded-full mx-auto mb-4"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
