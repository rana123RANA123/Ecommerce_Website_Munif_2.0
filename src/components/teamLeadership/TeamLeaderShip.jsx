import React from "react";
import first from "../../assets/images/firstMan.jpg";
import second from "../../assets/images/secondMan.jpg";
import third from "../../assets/images/thirdMan.jpg";
import { FaBeer, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { SlSocialFacebook, SlSocialLinkedin } from "react-icons/sl";

export default function TeamLeaderShip() {
  return (
    <div>
      <div className="my-14">
        <div>
          <div className="flex items-center justify-center">
            <p className="text-gray-400 text-[20px]">TEAM</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-black text-[46px] font-extrabold">Leadership</p>
          </div>
        </div>
        <div data-aos="fade-up" className="md:w-[80%] w-[100%] mx-auto">
          <div className="flex pl-3 md:pl-22 my-10 items-center justify-around flex-wrap">
            <div className="lg:w-1/3 md:w-1/2 my-6">
              <div className="w-[97%] flex items-center justify-center flex-col">
                <img
                  src={first}
                  className=" md:w-[80%] w-[80%] flex items-center justify-center h-[60%]  md:h-[80%]"
                  alt="First"
                />
                <p className="py-3 text-center text-[18px]">John Rooster</p>
                <p className="pb-2 text-center text-gray-400 text-[16px]">
                  CO-FOUNDER, PRESIDENT
                </p>
                <p className="text-center md:w-[100%] w-[70%]">
                  Nisi at consequatur unde molestiae quidem provident voluptatum
                  deleniti quo iste error eos est praesentium distinctio
                  cupiditate tempore suscipit inventore deserunt tenetur.
                </p>
                <div className="mt-3">
                  <div className="flex gap-1">
                    <div className="w-9 h-9 bg-gray-400 border-[1px] flex items-center justify-center rounded-full ">
                      <div className="">
                        <SlSocialFacebook size={20} />
                      </div>
                    </div>
                    <div className="w-9 h-9 bg-gray-400 border-[1px] flex items-center justify-center rounded-full ">
                      <div className="">
                        <LuTwitter size={20} />
                      </div>
                    </div>
                    <div className="w-9 h-9 bg-gray-400 border-[1px] flex items-center justify-center rounded-full ">
                      <div className="">
                        <FaInstagram size={20} />
                      </div>
                    </div>
                    <div className="w-9 h-9 bg-gray-400 border-[1px] flex items-center justify-center rounded-full ">
                      <div className="">
                        <SlSocialLinkedin size={20} />
                      </div>
                    </div>
                  </div>
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
                <p className="py-3 text-center text-[18px]">Tom Sharp</p>
                <p className="pb-2 text-center text-gray-400 text-[16px]">
                  CO-FOUNDER, COO
                </p>
                <p className="text-center md:w-[100%] w-[70%]">
                  Nisi at consequatur unde molestiae quidem provident voluptatum
                  deleniti quo iste error eos est praesentium distinctio
                  cupiditate tempore suscipit inventore deserunt tenetur.
                </p>
                <div className="mt-3">
                  <div className="flex gap-1">
                    <div className="w-9 h-9 bg-gray-400 border-[1px] flex items-center justify-center rounded-full ">
                      <div className="">
                        <SlSocialFacebook size={20} />
                      </div>
                    </div>
                    <div className="w-9 h-9 bg-gray-400 border-[1px] flex items-center justify-center rounded-full ">
                      <div className="">
                        <LuTwitter size={20} />
                      </div>
                    </div>
                    <div className="w-9 h-9 bg-gray-400 border-[1px] flex items-center justify-center rounded-full ">
                      <div className="">
                        <FaInstagram size={20} />
                      </div>
                    </div>
                    <div className="w-9 h-9 bg-gray-400 border-[1px] flex items-center justify-center rounded-full ">
                      <div className="">
                        <SlSocialLinkedin size={20} />
                      </div>
                    </div>
                  </div>
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
                <p className="py-3 text-center text-[18px]">Winston Hodson</p>
                <p className="pb-2 text-center text-gray-400 text-[16px]">
                  MARKETING
                </p>
                <p className="text-center md:w-[100%] w-[70%]">
                  Nisi at consequatur unde molestiae quidem provident voluptatum
                  deleniti quo iste error eos est praesentium distinctio
                  cupiditate tempore suscipit inventore deserunt tenetur.
                </p>
                <div className="mt-3">
                  <div className="flex gap-1">
                    <div className="w-9 h-9 bg-gray-400 border-[1px] flex items-center justify-center rounded-full ">
                      <div className="">
                        <SlSocialFacebook size={20} />
                      </div>
                    </div>
                    <div className="w-9 h-9 bg-gray-400 border-[1px] flex items-center justify-center rounded-full ">
                      <div className="">
                        <LuTwitter size={20} />
                      </div>
                    </div>
                    <div className="w-9 h-9 bg-gray-400 border-[1px] flex items-center justify-center rounded-full ">
                      <div className="">
                        <FaInstagram size={20} />
                      </div>
                    </div>
                    <div className="w-9 h-9 bg-gray-400 border-[1px] flex items-center justify-center rounded-full ">
                      <div className="">
                        <SlSocialLinkedin size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
