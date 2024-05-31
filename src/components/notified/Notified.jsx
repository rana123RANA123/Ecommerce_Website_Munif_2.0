import React from "react";

export default function Notified() {
  return (
    <div className="mt-20 " data-aos="fade-up">
      <div>
        <div
          className="w-[100%] img h-[400px] gap-7 flex items-center
          justify-center flex-col bg-zinc-500"
        >
          <div>
            <p
              data-aos="fade-up"
              className="text-[25px] white text-white font-medium"
            >
              Get notified on each updates.
            </p>
          </div>
          <div data-aos="fade-up">
            <div className="flex ">
              <input
                className="md:w-[530px] w-[240px] border-[2px] text-[17px] italic px-4 text-white border-white bg-transparent h-12"
                type="text"
                placeholder="Enter your email address"
              />
              <div className="w-[120px] text-white flex items-center justify-center h-12  border-[2px] border-white">
                <p>SUBSCRIBE</p>
              </div>
            </div>
          </div>
          <div className=" text-white text-center w-[60%] md:w-[40%] text-[15px] md:text-[18px]">
            <p data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              commodi veniam doloremque ducimus tempora.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
