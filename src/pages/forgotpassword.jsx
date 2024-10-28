import React, { useState } from "react";

const basePath =
  import.meta.env.MODE === "production" ? "/landscaping-company" : "";

const ChangePassword = () => {
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
            src={`${basePath}/assets/Rectangle%2011%20(5).png`}
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
              transform: "translate(-50%, -50%)",
              zIndex: 10,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              padding: "20px",
            }}
          >
            {/* Logo */}
            <img
              src={`${basePath}/assets/logo-2b.png`}
              alt="Logo"
              className="mb-4"
              style={{ width: "200px", height: "auto" }}
            />
            {/* Text */}
            <h2 className="text-center text-3xl font-inten">
              The Construction and Landscaping Company
            </h2>
          </div>
        </div>

        {/* Right Side: Change Password Form */}
        <div className="md:w-1/2 w-full bg-[#EEF9F3] flex flex-col justify-center p-10 relative">
          {/* Change Password Text */}
          <div className="max-w-md mx-auto w-full text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-14 font-lato whitespace-nowrap">
              CHANGE PASSWORD
            </h1>

            {/* Feedback Messages */}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {successMessage && (
              <p className="text-green-500">{successMessage}</p>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium font-inter text-[#121C17] text-left"
                  htmlFor="currentPassword"
                >
                  CURRENT PASSWORD
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3">
                    <img
                      src={`${basePath}/assets/ic_outline-email.png`}
                      alt="Email Icon"
                      className="w-5 h-5"
                    />
                  </span>
                  <input
                    type="password"
                    id="currentPassword"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                    className="bg-gray-200 text-[#121C17] font-inter py-2 pl-10 pr-4 mt-1 text-base block w-full border border-[#121C17] rounded-md shadow-md focus:outline-none focus:ring focus:border-green-500 hover:bg-gray-200 transition-all duration-500"
                    placeholder="*****************"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium font-inter text-[#121C17] text-left"
                  htmlFor="newPassword"
                >
                  NEW PASSWORD
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3">
                    <img
                      src={`${basePath}/assets/carbon_password.png`}
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
                      src={`${basePath}/assets/carbon_password.png`}
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
                <p className="mt-5 block text-sm font-medium font-inter text-[#121C17] text-left">
                  WE WILL SEND YOU A 6 DIGIT CODE TO VERIFY YOUR ACCOUNT
                </p>
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
};

export default ChangePassword;
