import React from "react";
import first from "../../assets/images/firstWoman.jpg";
import second from "../../assets/images/secondWoman.jpg";
import third from "../../assets/images/thirdWoman.jpg";
import { FaBeer, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { SlSocialFacebook, SlSocialLinkedin } from "react-icons/sl";

export default function BlogPosts() {
  return (
    <div>
      <div className="my-14">
        <div>
          <div className="flex items-center justify-center">
            <p className="text-gray-400 text-[20px]">Blog</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-black text-[46px] font-extrabold">Blog Posts</p>
          </div>
        </div>
        <div className="md:w-[80%] w-[100%] mx-auto">
          <div className="flex pl-3 md:pl-22 my-10 items-center justify-around flex-wrap">
            <div className="lg:w-1/3 md:w-1/2 my-6">
              <div className="w-[97%] flex items-center justify-center flex-col">
                <img
                  src={first}
                  className=" md:w-[80%] w-[80%] flex items-center justify-center h-[60%]  md:h-[80%]"
                  alt="First"
                />
                <div className=" ml-12  ">
                  <p className="py-3 font-medium text-[23px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <p className="pb-2 text-gray-400 text-[16px] mb-3">
                    Ham Brook • Jan 18, 2019•{" "}
                    <span className="text-red-500">News</span>
                  </p>
                  <p className=" md:w-[100%] text-gray-500 text-[19px] w-[70%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus eligendi nobis ea maiores sapiente veritatis
                    reprehenderit suscipit quaerat rerum voluptatibus a eius.
                  </p>
                </div>
                <div className="mt-3">
                  <p className="text-red-500 text-[18px] text-start cursor-pointer">
                    Continue Reading...
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 my-6">
              <div className="w-[97%] flex items-center justify-center flex-col">
                <img
                  src={second}
                  className=" md:w-[80%] w-[80%] flex items-center justify-center h-[60%]  md:h-[80%]"
                  alt="First"
                />
                <div className=" ml-12  ">
                  <p className="py-3 font-medium text-[23px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>

                  <p className="pb-2 text-gray-400 text-[16px] mb-3">
                    Ham Brook • Jan 18, 2019•{" "}
                    <span className="text-red-500">News</span>
                  </p>
                  <p className=" md:w-[100%] text-gray-500  text-[19px] w-[70%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus eligendi nobis ea maiores sapiente veritatis
                    reprehenderit suscipit quaerat rerum voluptatibus a eius.
                  </p>
                </div>
                <div className="mt-3">
                  <p className="text-red-500 text-[18px] text-start cursor-pointer">
                    Continue Reading...
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 my-6">
              <div className="w-[97%] flex items-center justify-center flex-col">
                <img
                  src={third}
                  className=" md:w-[80%] w-[80%] flex items-center justify-center h-[60%]  md:h-[80%]"
                  alt="First"
                />
                <div className=" ml-12  ">
                  <p className="py-3 font-medium text-[23px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <p className="pb-2 text-gray-400 text-[16px] mb-3">
                    Ham Brook • Jan 18, 2019•{" "}
                    <span className="text-red-500">News</span>
                  </p>
                  <p className=" md:w-[100%] text-gray-500  text-[19px] w-[70%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus eligendi nobis ea maiores sapiente veritatis
                    reprehenderit suscipit quaerat rerum voluptatibus a eius.
                  </p>
                </div>
                <div className="mt-3">
                  <p className="text-red-500 text-[18px] text-start cursor-pointer">
                    Continue Reading...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
