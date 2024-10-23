import React, { useState, useEffect } from "react";

const images = [
  "/assets/Rectangle 11.png", // Replace with your actual image paths
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
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      {/* Green Top Towel */}
      <div className="w-full h-16 bg-gradient-to-r from-custom-dark-teal to-custom-teal"></div>

      {/* Main Content: Split into two sections */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Left Side: Login Form (Full height and width of left section) */}
        <div className="md:w-1/2 w-full bg-[#EEF9F3] flex flex-col justify-center p-10 relative">
          {/* Welcome Text */}
          <div className="max-w-md mx-auto w-full text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-2 font-lato">
              WELCOME
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 font-bold font-lato whitespace-nowrap">
              REINVENT YOUR SPACE WITH US
            </h2>
            {/* Centered Logo */}
            <div className="flex justify-center mb-8">
              <img
                src="/assets/logo.png" // Replace with your logo path
                alt="Logo"
                className="w-24" // Adjust the size of the logo as needed
              />
            </div>

            {/* Form */}
            <form>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium font-inter text-[#121C17] text-left"
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
                    className="bg-gray-200 text-[#121C17] font-inter py-2 pl-10 pr-4 mt-1 text-base block w-full border border-[#121C17] rounded-md shadow-md focus:outline-none focus:ring focus:border-green-500 hover:bg-gray-200 transition-all duration-500"
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium font-inter text-[#121C17] text-left"
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
                    className="bg-gray-200 text-[#121C17] font-inter py-2 pl-10 pr-4 mt-1 text-base block w-full border border-[#121C17] rounded-md shadow-md focus:outline-none focus:ring focus:border-green-500 hover:bg-gray-200 transition-all duration-500"
                    placeholder="********"
                  />
                </div>
              </div>
              {/* Links */}
              <div className="flex justify-center">
                <div className="text-sm text-left text-[#121C17] font-inter mb-4">
                  <p className="mb-1">
                    DON'T HAVE AN ACCOUNT?{" "}
                    <a
                      href="#"
                      className="text-custom-teal font-normal hover:underline"
                    >
                      SIGN UP
                    </a>
                  </p>
                  <p>
                    FORGOT PASSWORD?
                    <a
                      href="#"
                      className="text-custom-teal font-normal hover:underline"
                    >
                      CHANGE PASSWORD
                    </a>
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="w-44 h-12 border border-[#121C17] bg-[#2BE784] text-[#121C17] font-inter py-1 mt-2 rounded-md shadow-md hover:opacity-90 transition duration-200"
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>

        {/* Right Side: Background Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={images[currentImageIndex]} // Use the current image from state
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
