import React, { useState } from "react";

function Signup() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    // Basic validation
    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    if (newPassword.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }

    // Handle password change logic (e.g., API call)
    setSuccessMessage("Password changed successfully!");
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Green Top Towel */}
      <div className="w-full h-16 bg-gradient-to-r from-custom-dark-teal to-custom-teal"></div>

      {/* Main Content: Split into two sections */}
      <div className="flex flex-1 flex-col md:flex-row relative">
        {/* Left Side: Background Image */}
        <div className="md:w-1/2 w-full relative">
          <img
            src="/assets/Rectangle 11 (6) -sign.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* White Circle Overlay with RGBA for background */}
          <div
            className="absolute bg-white rounded-full flex flex-col items-center justify-center"
            style={{
              width: "470px",
              height: "470px",
              top: "50%", // Center vertically
              left: "50%", // Center horizontally
              transform: "translate(-50%, -50%)", // Adjust for centering
              zIndex: 10, // Ensure it's above the image
              backgroundColor: "rgba(255, 255, 255, 0.5)", // Semi-transparent white
              padding: "20px", // Add padding for content
            }}
          >
            {/* Logo */}
            <img
              src="/assets/logo-2b.png" // Replace with your logo path
              alt="Logo"
              className="mb-4" // Space between logo and text
              style={{ width: "200px", height: "auto" }} // Adjust logo size as needed
            />
            {/* Text */}
            <h2 className="text-center text-3xl  font-inten">
              The Construction and Landscaping Company
            </h2>
          </div>
        </div>

        {/* Right Side: Change Password Form */}
        <div className="md:w-1/2 w-full bg-[#EEF9F3] flex flex-col justify-center p-10 relative">
          {/*  Text */}
          <div className="max-w-md mx-auto w-full text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-7 font-lato whitespace-nowrap">
              SIGN UP
            </h1>

            {/* Feedback Messages */}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {successMessage && (
              <p className="text-green-500">{successMessage}</p>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Profile Photo Upload */}
              <span className="text-xl mb-4 font-inten">PROFILE PICTURE</span>

              <div className="mb-4 mt-4 flex flex-col items-center">

                <label
                  htmlFor="profilePhoto"
                  className="relative flex items-center justify-center mb-2"
                >
                  <input
                    type="file"
                    id="profilePhoto"
                    accept="image/*" // Accepts only image files
                    className="absolute inset-0 cursor-pointer opacity-0" // Hide the default input
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        console.log("File selected:", file); // For debugging, remove in production
                      }
                    }}
                  />
                  <div className="flex items-center justify-center w-44 h-44 border-2 border-dashed border-green-500 bg-gray-200 rounded-full relative">
                    <img
                      src="/assets/clarity_user-line-p.png" // Placeholder for profile picture icon
                      alt="Profile"
                      className="w-28 h-28 absolute"
                    />
                    <span className="bg-green-400 text-white text-3xl absolute bottom-2 right-2 w-7 h-7 flex items-center">
                      +
                    </span>
                  </div>
                </label>
              </div>
              {/* //// */}
              <div className="mb-4">
                <label
                  className="block text-sm font-medium font-inter text-[#121C17] text-left"
                  htmlFor="currentPassword"
                >
                  EMAIL ADDRESS
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3">
                    <img
                      src="/assets/ic_outline-email.png"
                      alt="Key Icon"
                      className="w-5 h-5"
                    />
                  </span>
                  <input
                    type="email"
                    id="currentPassword"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                    className="bg-gray-200 text-[#121C17] font-inter py-2 pl-10 pr-4 mt-1 text-base block w-full border border-[#121C17] rounded-md shadow-md focus:outline-none focus:ring focus:border-green-500 hover:bg-gray-200 transition-all duration-500"
                    placeholder="Example@gmail.com"
                  />
                </div>
              </div>
              {/* phone */}
              <div className="mb-4">
                <label
                  className="block text-sm font-medium font-inter text-[#121C17] text-left"
                  htmlFor="currentPassword"
                >
                  PHONE NUMBER
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3">
                    <img
                      src="/assets/ph_phone.png"
                      alt="Key Icon"
                      className="w-5 h-5"
                    />
                  </span>
                  <input
                    type="email"
                    id="currentPassword"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                    className="bg-gray-200 text-[#121C17] font-inter py-2 pl-10 pr-4 mt-1 text-base block w-full border border-[#121C17] rounded-md shadow-md focus:outline-none focus:ring focus:border-green-500 hover:bg-gray-200 transition-all duration-500"
                    placeholder="Example@gmail.com"
                  />
                </div>
              </div>
              {/* user name */}
              <div className="mb-4">
                <label
                  className="block text-sm font-medium font-inter text-[#121C17] text-left"
                  htmlFor="currentPassword"
                >
                  USERNAME
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3">
                    <img
                      src="/assets/clarity_user-line.png"
                      alt="Key Icon"
                      className="w-5 h-5"
                    />
                  </span>
                  <input
                    type="email"
                    id="currentPassword"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                    className="bg-gray-200 text-[#121C17] font-inter py-2 pl-10 pr-4 mt-1 text-base block w-full border border-[#121C17] rounded-md shadow-md focus:outline-none focus:ring focus:border-green-500 hover:bg-gray-200 transition-all duration-500"
                    placeholder="Example@gmail.com"
                  />
                </div>
              </div>
              {/* password */}
              <div className="mb-4">
                <label
                  className="block text-sm font-medium font-inter text-[#121C17] text-left"
                  htmlFor="newPassword"
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
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    className="bg-gray-200 text-[#121C17] font-inter py-2 pl-10 pr-4 mt-1 text-base block w-full border border-[#121C17] rounded-md shadow-md focus:outline-none focus:ring focus:border-green-500 hover:bg-gray-200 transition-all duration-500"
                    placeholder="*****************"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium font-inter text-[#121C17] text-left"
                  htmlFor="confirmPassword"
                >
                  RE-ENTER PASSWORD
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
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="bg-gray-200 text-[#121C17] font-inter py-2 pl-10 pr-4 mt-1 text-base block w-full border border-[#121C17] rounded-md shadow-md focus:outline-none focus:ring focus:border-green-500 hover:bg-gray-200 transition-all duration-500"
                    placeholder="*****************"
                  />
                </div>
                {/* country - city */}
                <div className="mt-4 mb-4 flex flex-col md:flex-row justify-between">
                  {/* Country Dropdown */}
                  <div className="md:w-1/2 mr-2">
                    <label
                      className="block text-sm font-medium font-inter text-[#121C17] text-left"
                      htmlFor="country"
                    >
                      COUNTRY
                    </label>
                    <div className="relative">
                      <select
                        id="country"
                        required
                        className="bg-gray-200 text-[#121C17] font-inter py-2 pl-10 pr-4 mt-1 text-base block w-full border border-[#121C17] rounded-md shadow-md focus:outline-none focus:ring focus:border-green-500 hover:bg-gray-200 transition-all duration-500"
                      >
                        <option value="">Select a country</option>
                        <option value="usa">United States</option>
                        <option value="canada">Canada</option>
                        <option value="uk">United Kingdom</option>
                        {/* Add more countries as needed */}
                      </select>
                    </div>
                  </div>

                  {/* City Dropdown */}
                  <div className="md:w-1/2 ml-2">
                    <label
                      className="block text-sm font-medium font-inter text-[#121C17] text-left"
                      htmlFor="city"
                    >
                      CITY
                    </label>
                    <div className="relative">
                      <select
                        id="city"
                        required
                        className="bg-gray-200 text-[#121C17] font-inter py-2 pl-10 pr-4 mt-1 text-base block w-full border border-[#121C17] rounded-md shadow-md focus:outline-none focus:ring focus:border-green-500 hover:bg-gray-200 transition-all duration-500"
                      >
                        <option value="">Select a city</option>
                        <option value="newyork">New York</option>
                        <option value="toronto">Toronto</option>
                        <option value="london">London</option>
                        {/* Add more cities as needed */}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-44 h-12 border border-[#121C17] bg-[#2BE784] text-[#121C17] font-medium font-inter py-1 mt-2 rounded-lg shadow-md hover:opacity-90 transition duration-200"
              >
                SEND CODE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
