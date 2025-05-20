import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AboutSection from "../AboutSection/AboutSection";
import CoursesSection from "../CoursesSection/CoursesSection";
import BlogSection from "../BlogSection/BlogSection";
import NewsletterSection from "../NewsletterSection/NewsletterSection";
import HeroSection from "../HeroSection/HeroSection";
import PartnersSection from "../PartnersSection/PartnersSection";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <CoursesSection />
        <BlogSection />
        <PartnersSection />
        <NewsletterSection />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
