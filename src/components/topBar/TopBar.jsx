import React from "react";
import { FaBeer, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { SlSocialFacebook, SlSocialLinkedin } from "react-icons/sl";

export default function TopBar() {
  return (
    <div>
      <div className="max-w-[100%] shadow-sm h-16 flex justify-between px-3 md:0 md:justify-around items-center">
        <div className="flex gap-1">
          <div className="w-9 h-9 bg-slate-400 border-[1px] flex items-center justify-center rounded-full ">
            <div className="">
              <SlSocialFacebook size={20} />
            </div>
          </div>
          <div className="w-9 h-9 bg-slate-400 border-[1px] flex items-center justify-center rounded-full ">
            <div className="">
              <LuTwitter size={20} />
            </div>
          </div>
          <div className="w-9 h-9 bg-slate-400 border-[1px] flex items-center justify-center rounded-full ">
            <div className="">
              <FaInstagram size={20} />
            </div>
          </div>
          <div className="w-9 h-9 bg-slate-400 border-[1px] flex items-center justify-center rounded-full ">
            <div className="">
              <SlSocialLinkedin size={20} />
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-5">
            <div className="flex gap-2 items-center">
              <FaPhoneAlt color="red" size={20} />
              <p className="md:flex hidden">(+1) 234 5678 9101</p>
            </div>
            <div className="flex gap-2 items-center">
              <MdOutlineEmail color="red" size={20} />
              <p className="md:flex hidden ">shop@yourdomain.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
