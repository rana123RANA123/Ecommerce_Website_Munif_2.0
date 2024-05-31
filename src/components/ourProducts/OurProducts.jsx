import React from "react";
import first from "../../assets/images/firstWoman.jpg";
import second from "../../assets/images/secondProduct.jpg";
import third from "../../assets/images/thirdProduct.jpg";
import four from "../../assets/images/fourProduct.jpg";
import five from "../../assets/images/thirdWoman.jpg";
import six from "../../assets/images/secondWoman.jpg";
import { IoStarOutline } from "react-icons/io5";
import { IoIosHeart, IoIosStar } from "react-icons/io";
export default function OurProducts() {
  return (
    <div>
      <div>
        <div className="md:max-w-[35%] w-[80%] mx-auto flex items-center justify-center py-14">
          <div className="md:ml-0">
            <p className="md:text-[19px] text-[15px] text-center text-gray-500 font-semibold">
              POPULAR PRODUCTS
            </p>
            <p className="font-extrabold text-[32px] md:text-[45px] text-center">
              Our Products
            </p>
            <p className="text-center text-[16px] md:text-[18px] text-gray-500 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut
              eveniet aut consequatur laboriosam ipsam.
            </p>
          </div>
        </div>
        <div>
          <div className="w-[80%] mx-auto ">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 flex-col p-5">
              <div className="flex flex-col items-center justify-center">
                <div className="px-7">
                  <img src={first} className="w-[100%] h-[100%]" alt="First" />
                </div>
                <div>
                  <p className="md:text-[23px] text-[18px] text-center  mt-4 font-normal">
                    Wild West Hoodie
                  </p>
                </div>
                <div>
                  <div className="flex gap-3">
                    <IoIosStar size={20} color="yellow" />
                    <span>5.0</span>
                    <IoIosHeart className="ml-3" size={20} color="gray" />
                    <span>29</span>
                  </div>
                </div>
                <div className="px-10">
                  <p className="text-[16px] text-center text-zinc-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                  </p>
                </div>
                <div className="flex gap-4 mt-4">
                  <div className="w-[90px] h-[37px] text-white cursor-pointer hover:bg-transparent hover:text-black bg-black flex items-center border-[2px] border-black justify-center">
                    <p className="p-2 font-semibold">Cart</p>
                  </div>
                  <div className="w-[90px] h-[37px] cursor-pointer hover:bg-black hover:text-white  flex items-center border-[2px] border-black justify-center">
                    <p className="p-2 font-semibold">View</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="px-7">
                  <img src={second} className="w-[100%] h-[100%]" alt="First" />
                </div>
                <div>
                  <p className="md:text-[23px] text-[18px] text-center  mt-4 font-normal">
                    Wild West Hoodie
                  </p>
                </div>
                <div>
                  <div className="flex gap-3">
                    <IoIosStar size={20} color="yellow" />
                    <span>5.0</span>
                    <IoIosHeart className="ml-3" size={20} color="gray" />
                    <span>29</span>
                  </div>
                </div>
                <div className="px-10">
                  <p className="text-[16px] text-center text-zinc-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                  </p>
                </div>
                <div className="flex gap-4 mt-4">
                  <div className="w-[90px] h-[37px] text-white cursor-pointer hover:bg-transparent hover:text-black bg-black flex items-center border-[2px] border-black justify-center">
                    <p className="p-2 font-semibold">Cart</p>
                  </div>
                  <div className="w-[90px] h-[37px] cursor-pointer hover:bg-black hover:text-white  flex items-center border-[2px] border-black justify-center">
                    <p className="p-2 font-semibold">View</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="px-7">
                  <img src={third} className="w-[100%] h-[100%]" alt="First" />
                </div>
                <div>
                  <p className="md:text-[23px] text-[18px] text-center  mt-4 font-normal">
                    Wild West Hoodie
                  </p>
                </div>
                <div>
                  <div className="flex gap-3">
                    <IoIosStar size={20} color="yellow" />
                    <span>5.0</span>
                    <IoIosHeart className="ml-3" size={20} color="gray" />
                    <span>29</span>
                  </div>
                </div>
                <div className="px-10">
                  <p className="text-[16px] text-center text-zinc-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                  </p>
                </div>
                <div className="flex gap-4 mt-4">
                  <div className="w-[90px] h-[37px] text-white cursor-pointer hover:bg-transparent hover:text-black bg-black flex items-center border-[2px] border-black justify-center">
                    <p className="p-2 font-semibold">Cart</p>
                  </div>
                  <div className="w-[90px] h-[37px] cursor-pointer hover:bg-black hover:text-white  flex items-center border-[2px] border-black justify-center">
                    <p className="p-2 font-semibold">View</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="px-7">
                  <img src={four} className="w-[100%] h-[100%]" alt="First" />
                </div>
                <div>
                  <p className="md:text-[23px] text-[18px] text-center  mt-4 font-normal">
                    Wild West Hoodie
                  </p>
                </div>
                <div>
                  <div className="flex gap-3">
                    <IoIosStar size={20} color="yellow" />
                    <span>5.0</span>
                    <IoIosHeart className="ml-3" size={20} color="gray" />
                    <span>29</span>
                  </div>
                </div>
                <div className="px-10">
                  <p className="text-[16px] text-center text-zinc-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                  </p>
                </div>
                <div className="flex gap-4 mt-4">
                  <div className="w-[90px] h-[37px] text-white cursor-pointer hover:bg-transparent hover:text-black bg-black flex items-center border-[2px] border-black justify-center">
                    <p className="p-2 font-semibold">Cart</p>
                  </div>
                  <div className="w-[90px] h-[37px] cursor-pointer hover:bg-black hover:text-white  flex items-center border-[2px] border-black justify-center">
                    <p className="p-2 font-semibold">View</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="px-7">
                  <img src={five} className="w-[100%] h-[100%]" alt="First" />
                </div>
                <div>
                  <p className="md:text-[23px] text-[18px] text-center  mt-4 font-normal">
                    Wild West Hoodie
                  </p>
                </div>
                <div>
                  <div className="flex gap-3">
                    <IoIosStar size={20} color="yellow" />
                    <span>5.0</span>
                    <IoIosHeart className="ml-3" size={20} color="gray" />
                    <span>29</span>
                  </div>
                </div>
                <div className="px-10">
                  <p className="text-[16px] text-center text-zinc-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                  </p>
                </div>
                <div className="flex gap-4 mt-4">
                  <div className="w-[90px] h-[37px] text-white cursor-pointer hover:bg-transparent hover:text-black bg-black flex items-center border-[2px] border-black justify-center">
                    <p className="p-2 font-semibold">Cart</p>
                  </div>
                  <div className="w-[90px] h-[37px] cursor-pointer hover:bg-black hover:text-white  flex items-center border-[2px] border-black justify-center">
                    <p className="p-2 font-semibold">View</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="px-7">
                  <img src={six} className="w-[100%] h-[100%]" alt="First" />
                </div>
                <div>
                  <p className="md:text-[23px] text-[18px] text-center  mt-4 font-normal">
                    Wild West Hoodie
                  </p>
                </div>
                <div>
                  <div className="flex gap-3">
                    <IoIosStar size={20} color="yellow" />
                    <span>5.0</span>
                    <IoIosHeart className="ml-3" size={20} color="gray" />
                    <span>29</span>
                  </div>
                </div>
                <div className="px-10">
                  <p className="text-[16px] text-center text-zinc-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                  </p>
                </div>
                <div className="flex gap-4 mt-4">
                  <div className="w-[90px] h-[37px] text-white cursor-pointer hover:bg-transparent hover:text-black bg-black flex items-center border-[2px] border-black justify-center">
                    <p className="p-2 font-semibold">Cart</p>
                  </div>
                  <div className="w-[90px] h-[37px] cursor-pointer hover:bg-black hover:text-white  flex items-center border-[2px] border-black justify-center">
                    <p className="p-2 font-semibold">View</p>
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
