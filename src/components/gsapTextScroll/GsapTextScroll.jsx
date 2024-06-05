import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function GsapTextScroll() {
  useGSAP(() => {
    gsap.to(".text", {
      x: "-90%",
      scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        start: "top 40%",
        end: "top -100%",
        scrub: 6,
        pin: true,
      },
    });
  }, []);

  return (
    <div className="page3 bg-white px-36 flex items-center">
      <div className="text">
        Selling an ecommerce website requires careful planning and execution,
        but with the right approach.
      </div>
    </div>
  );
}
