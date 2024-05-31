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
import OurProducts from "../../../components/ourProducts/OurProducts";
import Notified from "../../../components/notified/Notified";
import SummerSale from "../../../components/summerSale/SummerSale";
import ShopWithUs from "../../../components/shopWithUs/ShopWithUs";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <div id="home">
        <ShopWithUs />
      </div>
      <div id="products">
        <OurProducts />
      </div>
      <div id="notified">
        <Notified />
      </div>
      <div id="features-products">
        <FeaturesProducts />
      </div>
      <div id="about-us">
        <AboutUs />
      </div>
      <div id="team-leadership">
        <TeamLeaderShip />
      </div>
      <div id="summer-sale">
        <SummerSale />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="testimonials">
        <TestimonialsSwiper />
      </div>
      <div id="blog">
        <BlogPosts />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
      <LastFooter />
    </>
  );
}
