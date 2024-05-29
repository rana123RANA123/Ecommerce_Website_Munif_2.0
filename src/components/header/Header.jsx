import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="max-w-[100%] shadow-md h-24 flex justify-between px-3 md:justify-evenly items-center">
        <div className="flex gap-1">
          <p className="md:text-[49px] text-[35px] font-bold tracking-tighter">
            SELLING <span className="text-red-600">.</span>
          </p>
        </div>
        <div className="hidden md:flex gap-12 items-center">
          <p className="text-[20px] cursor-pointer hover:text-red-500 transition duration-500 text-red-500 font-normal">
            Home
          </p>
          <p className="text-[20px] cursor-pointer hover:text-red-500 transition duration-500 font-normal">
            Products
          </p>
          <p className="text-[20px] cursor-pointer hover:text-red-500 transition duration-500 font-normal">
            About Us
          </p>
          <p className="text-[20px] cursor-pointer hover:text-red-500 transition duration-500 font-normal">
            Special
          </p>
          <p className="text-[20px] cursor-pointer hover:text-red-500 transition duration-500 font-normal">
            Testimonials
          </p>
          <p className="text-[20px] cursor-pointer hover:text-red-500 transition duration-500 font-normal">
            Blog
          </p>
          <p className="text-[20px] cursor-pointer hover:text-red-500 transition duration-500 font-normal">
            Contact
          </p>
        </div>
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-[30px]">
            <FaBars />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button onClick={toggleSidebar} className="p-4 text-2xl">
          &times;
        </button>
        <div className="flex flex-col gap-5 p-5">
          <p className="text-[20px] cursor-pointer hover:text-red-500 transition duration-500 font-normal">
            Home
          </p>
          <p className="text-[20px] cursor-pointer hover:text-red-500 transition duration-500 font-normal">
            Products
          </p>
          <p className="text-[20px] cursor-pointer hover:text-red-500 transition duration-500 font-normal">
            About Us
          </p>
          <p className="text-[20px] cursor-pointer hover:text-red-500 transition duration-500 font-normal">
            Special
          </p>
          <p className="text-[20px] cursor-pointer hover:text-red-500 transition duration-500 font-normal">
            Testimonials
          </p>
          <p className="text-[20px] cursor-pointer hover:text-red-500 transition duration-500 font-normal">
            Blog
          </p>
          <p className="text-[20px] cursor-pointer hover:text-red-500 transition duration-500 font-normal">
            Contact
          </p>
        </div>
      </div>
    </div>
  );
}
