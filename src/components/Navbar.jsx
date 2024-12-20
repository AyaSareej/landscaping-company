import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const basePath = import.meta.env.MODE === "production" ? "" : "";

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-custom-teal h-20 flex items-center justify-between z-50 px-4 md:px-10">
      <div className="flex flex-row gap-2 items-center">
        <img
          src={`${import.meta.env.BASE_URL}assets/logo.png`}
          alt="Logo"
          className="w-16"
        />
        <p className="font-lato text-white text-sm  md:text-xl uppercase">
          The Construction and <br /> Landscaping Company
        </p>
      </div>
      {/* White Line */}
      <div className="bg-white w-1 h-20 hidden md:block"></div>
      <nav className="font-lato uppercase text-xl font-bold text-white links hidden md:flex md:gap-14 gap-10 ">
        <Link className="relative inline-block group" to="/home">
          <span className="hover:underline">Home</span>
          <span className="absolute left-0 bottom-0 w-full h-1 bg-custom-teal transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>{" "}
        <a href="#about" className="relative inline-block group">
          <span className="hover:underline">About Us</span>
          <span className="absolute left-0 bottom-0 w-full h-1 bg-custom-teal transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </a>
        <a href="#projects" className="relative inline-block group">
          <span className="hover:underline">Projects</span>
          <span className="absolute left-0 bottom-0 w-full h-1 bg-custom-teal transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </a>
      </nav>
      {/* Search */}
      <div className="relative md:w-96 w-52 hidden md:block">
        <span className="absolute left-3 top-3">
          <img
            src={`${import.meta.env.BASE_URL}assets/Vector.png`}
            alt="Search Icon"
            className="w-5 h-5"
          />
        </span>
        <input
          type="search"
          id="search"
          required
          className="bg-[#EEF9F3E5] text-[#121C17] font-inter py-2 pl-10 pr-4 mt-1 text-base block w-full border border-[#121C17] placeholder:text-black placeholder:text-opacity-50 placeholder:font-inten placeholder:font-bold placeholder:text-sm rounded-lg shadow-md focus:outline-none focus:ring focus:border-green-500 hover:bg-gray-200 transition-all duration-500"
          placeholder="SEARCH..."
        />
      </div>
      {/* Mobile Menu Toggle */}
      <div
        className="flex flex-row  items-center  cursor-pointer"
        onClick={toggleSidebar}
      >
        <img
          src={`${
            import.meta.env.BASE_URL
          }assets/bitcoin-icons_menu-filled.png`}
          alt="Menu Icon"
        />
        <div className="font-inten font-bold md:block p-1 items-center hidden md:text-2xl text-white">
          MENU
        </div>
      </div>

      {/* Book Now Button */}
      <button
        type="submit"
        className="uppercase w-24 md:w-32 font-bold h-12 border-2 border-white bg-[#2BE784] text-[#121C17] text-sm md:text-lg font-inter py-1 mt-2 rounded-lg shadow-md hover:opacity-90 transition duration-200"
      >
        Book Now
      </button>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed top-0 right-0 w-2/3 md:w-[724px] h-full bg-[#EEF9F3] shadow-lg z-50 transition-transform transform translate-x-0">
          <div className="flex justify-end p-1">
            <button onClick={toggleSidebar}>
              <img
                src={`${import.meta.env.BASE_URL}assets/ph_x-fill.png`}
                alt="Close Menu"
              />
            </button>
          </div>
          <nav className="flex items-center gap-4 font-inten uppercase text-3xl flex-col p-2 drop-shadow-md">
            <a href="#home" className="py-2">
              Landscaping
            </a>
            <a href="#about" className="py-2">
              Decking
            </a>
            <a href="#projects" className="py-2">
              Gardening
            </a>
            <a href="#contact" className="py-2">
              Interlocking
            </a>
            <a href="#contact" className="py-2">
              Floral Design
            </a>
            <a href="#contact" className="py-2">
              Pools
            </a>
            <a href="#contact" className="py-2">
              Railings
            </a>
            <a href="#contact" className="py-2">
              Woodworking
            </a>
            <a href="#contact" className="py-2">
              Showroom
            </a>
            <Link to="/profile" className="py-2">
              Profile
            </Link>
            <a href="#contact" className="py-2">
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
