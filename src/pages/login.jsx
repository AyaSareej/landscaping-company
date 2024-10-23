// Login.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const images = [
  "/assets/Rectangle 11.png",
  "/assets/Rectangle 11 (4).png",
  "/assets/Rectangle 11 (2).png",
  "/assets/Rectangle 11 (3).png",
  "/assets/Rectangle 11 (1).png",
];

const Login = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <div className="w-full h-16 bg-gradient-to-r from-custom-dark-teal to-custom-teal"></div>
      <div className="flex flex-1 flex-col md:flex-row">
        <div className="md:w-1/2 w-full bg-[#EEF9F3] flex flex-col justify-center p-10 relative">
          <div className="max-w-md mx-auto w-full text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-2 font-lato">
              WELCOME
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 font-bold font-lato whitespace-nowrap">
              REINVENT YOUR SPACE WITH US
            </h2>
            <div className="flex justify-center mb-8">
              <img src="/assets/logo.png" alt="Logo" className="w-24" />
            </div>
            <form>
              <div className="mb-4">
                <label
                  className="block text-sm font-bold font-inten text-[#121C17] text-left"
                  htmlFor="email"
                >
                  EMAIL ADDRESS
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3">
                    <img
                      src="/assets/carbon_password.png"
                      alt="Key Icon"
                      className="w-5 h-5"
                    />
                  </span>
                  <input
                    type="email"
                    id="email"
                    required
                    className="bg-gray-200 text-[#121C17] font-inten py-2 pl-10 pr-4 mt-1 text-base block w-full border border-[#121C17] rounded-md shadow-md focus:outline-none focus:ring focus:border-green-500 hover:bg-gray-200 transition-all duration-500"
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-bold font-inten text-[#121C17] text-left"
                  htmlFor="password"
                >
                  PASSWORD
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3">
                    <img
                      src="/assets/carbon_password.png"
                      alt="Key Icon"
                      className="w-5 h-5"
                    />
                  </span>
                  <input
                    type="password"
                    id="password"
                    required
                    className="bg-gray-200 text-[#121C17] font-inten py-2 pl-10 pr-4 mt-1 text-base block w-full border border-[#121C17] rounded-md shadow-md focus:outline-none focus:ring focus:border-green-500 hover:bg-gray-200 transition-all duration-500"
                    placeholder="********"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="text-sm text-left font-bold text-[#121C17] font-inten mb-4">
                  <p className="mt-4">
                    DON'T HAVE AN ACCOUNT?{" "}
                    <Link
                      to="/signup"
                      className="text-custom-teal font-bold font-inten hover:underline"
                    >
                      SIGN UP
                    </Link>
                  </p>
                  <p className="mt-4">
                    FORGOT PASSWORD?{" "}
                    <Link
                      to="/change-password"
                      className="text-custom-teal ml-1 font-bold font-inten hover:underline"
                    >
                      CHANGE PASSWORD
                    </Link>
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="w-44 h-12 border border-[#121C17] bg-[#2BE784] text-[#121C17] font-bold font-inten py-1 mt-2 rounded-md shadow-md hover:opacity-90 transition duration-200"
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <img
            src={images[currentImageIndex]}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
