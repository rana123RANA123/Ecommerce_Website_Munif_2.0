import React from "react";
import TopBar from "../../../components/topBar/TopBar";
import Header from "../../../components/header/Header";
import TeamLeaderShip from "../../../components/teamLeadership/TeamLeaderShip";
import Services from "../../../components/services/Services";
import BlogPosts from "../../../components/blogPosts/BlogPosts";
import ContactForm from "../../../components/contactForm/ContactForm";
import Footer from "../../../components/footer/Footer";
import LastFooter from "../../../components/lastFooter/LastFooter";
import FeaturesProducts from "../../../components/featuresProducts/FeaturesProducts";
import AboutUs from "../../../components/aboutUs/AboutUs";
import Testimonials from "../../../components/testimonials/Testimonials";
import TestimonialsSwiper from "../../../components/swiper/TestimonialsSwiper";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <FeaturesProducts />
      <AboutUs />
      <TeamLeaderShip />
      <Services />
      <TestimonialsSwiper />
      <BlogPosts />
      <ContactForm />
      <Footer />
      <LastFooter />
    </>
  );
}
