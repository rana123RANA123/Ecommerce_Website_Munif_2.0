import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import first from "../../assets/images/firstMan.jpg";
import second from "../../assets/images/secondMan.jpg";
import third from "../../assets/images/thirdMan.jpg";
import four from "../../assets/images/fourWoman.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";
import Testimonials from "../testimonials/Testimonials";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Testimonials image={first} ownerName={"Robert Aguilar"} />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonials image={second} ownerName={"John Smith"} />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonials image={third} ownerName={"Roger Spears"} />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonials image={four} ownerName={"Kyle McDonald"} />
        </SwiperSlide>
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: gray;
          margin-top: 100px;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background-color: red;
        }
      `}</style>
    </>
  );
}
