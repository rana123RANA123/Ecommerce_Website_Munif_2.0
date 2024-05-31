import React from "react";
import { FaBusinessTime } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { IoBagCheckSharp, IoSpeedometerOutline } from "react-icons/io5";
import { TbClick, TbEyeClosed } from "react-icons/tb";

export default function Services() {
  return (
    <div>
      <div className="my-12">
        <div>
          <div className="flex items-center justify-center">
            <p className="text-gray-400 text-[16px] md:ext-[20px]">
              OUR SERVICES
            </p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-black text-[24px] md:text-[46px] font-extrabold">
              We Offer Services
            </p>
          </div>
        </div>
        <div
          className="md:w-[80%] w-[100%] mx-auto flex mt-5 justify-center items-center flex-wrap"
          data-aos="fade-up"
        >
          <div className="lg:w-1/3 sm:w-1/2 px-4 mt-6">
            <div className="flex gap-4">
              <div>
                <FaBusinessTime size={55} color="red" />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[23px] ">Business Consulting</p>
                <p className="text-[18px] w-[100%] sm:w-[80%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis quis molestiae vitae eligendi at.
                </p>
                <p className="cursor-pointer transition-1s text-rose-500 hover:text-red-600">
                  Learn More
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 px-4 mt-6">
            <div className="flex gap-4">
              <div>
                <TbEyeClosed size={55} color="red" />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[23px] ">Business Consulting</p>
                <p className="text-[18px]  w-[100%] sm:w-[80%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis quis molestiae vitae eligendi at.
                </p>
                <p className="cursor-pointer transition-1s text-rose-500 hover:text-red-600">
                  Learn More
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 px-4 mt-6">
            <div className="flex gap-4">
              <div>
                <IoSpeedometerOutline size={55} color="red" />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[23px] ">Business Consulting</p>
                <p className="text-[18px] w-[100%] sm:w-[80%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis quis molestiae vitae eligendi at.
                </p>
                <p className="cursor-pointer transition-1s text-rose-500 hover:text-red-600">
                  Learn More
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 px-4 mt-6">
            <div className="flex gap-4">
              <div>
                <IoBagCheckSharp size={55} color="red" />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[23px] ">Business Consulting</p>
                <p className="text-[18px] w-[100%] sm:w-[80%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis quis molestiae vitae eligendi at.
                </p>
                <p className="cursor-pointer transition-1s text-rose-500 hover:text-red-600">
                  Learn More
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 px-4 mt-6">
            <div className="flex gap-4">
              <div>
                <GrNotes size={55} color="red" />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[23px] ">Business Consulting</p>
                <p className="text-[18px] w-[100%] sm:w-[80%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis quis molestiae vitae eligendi at.
                </p>
                <p className="cursor-pointer transition-1s text-rose-500 hover:text-red-600">
                  Learn More
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 px-4 mt-6">
            <div className="flex gap-4">
              <div>
                <TbClick size={55} color="red" />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[23px] ">Business Consulting</p>
                <p className="text-[18px] w-[100%] sm:w-[80%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis quis molestiae vitae eligendi at.
                </p>
                <p className="cursor-pointer transition-1s text-rose-500 hover:text-red-600">
                  Learn More
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
