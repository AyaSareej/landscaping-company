import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const basePath =
  import.meta.env.MODE === "production" ? "/landscaping-company" : "";

function Signup() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [governorate, setGovernorate] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    // Basic validation
    if (fullName.trim() === "") {
      setErrorMessage("Full name is required.");
      return;
    }
    if (phone.trim() === "") {
      setErrorMessage("Phone number is required.");
      return;
    }
    if (email.trim() === "" || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage("A valid email is required.");
      return;
    }
    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    const formData = new FormData();
    formData.append("full_name", fullName);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("governorate", governorate);
    formData.append("city", city);
    formData.append("email", email);
    formData.append("password", password);
    if (profilePhoto) {
      formData.append("photo", profilePhoto);
    }

    try {
      const response = await axios.post(
        "https://backendsec3.trainees-mad-s.com/api/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        setSuccessMessage("Signup successful!");
        // Pass the email to the verification page
        navigate("/verifyAccount", { state: { email: email } });
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        setErrorMessage(error.response.data.message || "An error occurred.");
      } else {
        setErrorMessage("Network error. Please try again.");
      }
    }
  };

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePhoto(file);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Green Top Towel */}
      <div className="w-full h-16 bg-gradient-to-r from-custom-dark-teal to-custom-teal z-10"></div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col md:flex-row relative">
        <div className="md:w-1/2 w-full relative">
          <img
            src={`${basePath}/assets/Rectangle%2011%20(6)%20-sign.png`}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute bg-white rounded-full flex flex-col items-center justify-center"
            style={{
              width: "470px",
              height: "470px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              padding: "20px",
            }}
          >
            <img
              src={`${basePath}/assets/logo-2b.png`}
              alt="Logo"
              className="mb-4"
              style={{ width: "200px", height: "auto" }}
            />
            <h2 className="text-center text-3xl font-inten">
              The Construction and Landscaping Company
            </h2>
          </div>
        </div>

        <div className="md:w-1/2 w-full bg-[#EEF9F3] flex flex-col justify-center p-10 relative">
          <div className="max-w-md mx-auto w-full text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-7 font-lato">
              SIGN UP
            </h1>

            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {successMessage && (
              <p className="text-green-500">{successMessage}</p>
            )}

            <form onSubmit={handleSubmit}>
              {/* Profile Photo Upload */}
              <span className="text-xl mb-4 font-inten">PROFILE PICTURE</span>
              <div className="mb-4 mt-4 flex-col items-center">
                <label
                  htmlFor="profilePhoto"
                  className="relative flex items-center justify-center mb-2"
                >
                  <input
                    type="file"
                    id="profilePhoto"
                    accept="image/*"
                    className="absolute inset-0 cursor-pointer opacity-0"
                    onChange={handleProfilePhotoChange}
                  />
                  <div className="flex items-center justify-center w-44 h-44 bg-gray-200 rounded-full relative">
                    {profilePhoto ? (
                      <img
                        src={URL.createObjectURL(profilePhoto)}
                        alt="Profile"
                        className="w-28 h-28 rounded-full absolute"
                      />
                    ) : (
                      <img
                        src={`${basePath}/assets/clarity_user-line-p.png`}
                        alt="Profile"
                        className="w-28 h-28 absolute"
                      />
                    )}
                    <div className="absolute bottom-2 right-2 flex items-center justify-center rounded-md border-[1px] border-dashed border-[#121C17] w-10 h-10">
                      <span className="bg-green-400 rounded-md flex items-center justify-center text-white text-3xl w-7 h-7">
                        +
                      </span>
                    </div>
                  </div>
                </label>
              </div>

              {/* Email Address */}
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
                      src={`${basePath}/assets/ic_outline-email.png`}
                      alt="Email Icon"
                      className="w-5 h-5"
                    />
                  </span>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-gray-200 text-[#121C17] font-inter py-2 pl-10 pr-4 mt-1 text-base block w-full border border-[#121C17] rounded-md shadow-md focus:outline-none focus:ring focus:border-green-500 hover:bg-gray-200 transition-all duration-500"
                    placeholder="Example@gmail.com"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="mb-4">
                <label
                  className="block text-sm font-medium font-inter text-[#121C17] text-left"
                  htmlFor="phone"
                >
                  PHONE NUMBER
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3">
                    <img
                      src={`${basePath}/assets/ph_phone.png`}
                      alt="Phone Icon"
                      className="w-5 h-5"
                    />
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="bg-gray-200 text-[#121C17] font-inter py-2 pl-10 pr-4 mt-1 text-base block w-full border border-[#121C17] rounded-md shadow-md focus:outline-none focus:ring focus:border-green-500 hover:bg-gray-200 transition-all duration-500"
                    placeholder="123-456-7890"
                  />
                </div>
              </div>

              {/* Username */}
              <div className="mb-4">
                <label
                  className="block text-sm font-medium font-inter text-[#121C17] text-left"
                  htmlFor="fullName"
                >
                  USERNAME
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3">
                    <img
                      src={`${basePath}/assets/clarity_user-line.png`}
                      alt="User Icon"
                      className="w-5 h-5"
                    />
                  </span>
                  <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="bg-gray-200 text-[#121C17] font-inter py-2 pl-10 pr-4 mt-1 text-base block w-full border border-[#121C17] rounded-md shadow-md focus:outline-none focus:ring focus:border-green-500 hover:bg-gray-200 transition-all duration-500"
                    placeholder="@USER_NAME"
                  />
                </div>
              </div>

              {/* Password */}
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
                      src={`${basePath}/assets/carbon_password.png`}
                      alt="Password Icon"
                      className="w-5 h-5"
                    />
                  </span>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-gray-200 text-[#121C17] font-inter py-2 pl-10 pr-4 mt-1 text-base block w-full border border-[#121C17] rounded-md shadow-md focus:outline-none focus:ring focus:border-green-500 hover:bg-gray-200 transition-all duration-500"
                    placeholder="*****************"
                  />
                </div>
              </div>

              {/* Confirm Password */}
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
                      alt="Password Icon"
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
              </div>

              {/* Country and City Dropdowns */}
              <div className="mt-4 mb-4 flex flex-col md:flex-row justify-between">
                {/* Country Dropdown */}
                <div className="md:w-1/2 w-full">
                  <label
                    className="block text-sm font-medium font-inter text-[#121C17] text-left"
                    htmlFor="country"
                  >
                    COUNTRY
                  </label>
                  <div className="relative">
                    <select
                      id="country"
                      onChange={(e) => setGovernorate(e.target.value)}
                      required
                      className="bg-gray-200 text-[#121C17] font-inter py-2 pl-10 pr-4 mt-1 text-base block w-full border border-[#121C17] rounded-md shadow-md focus:outline-none focus:ring focus:border-green-500 hover:bg-gray-200 transition-all duration-500"
                    >
                      <option value="">Select a country</option>
                      <option value="usa">United States</option>
                      <option value="canada">Canada</option>
                      <option value="uk">United Kingdom</option>
                    </select>
                  </div>
                </div>

                {/* City Dropdown */}
                <div className="md:w-1/2 w-full md:mt-0 mt-4 md:ml-4 ">
                  <label
                    className="block text-sm font-medium font-inter text-[#121C17] text-left"
                    htmlFor="city"
                  >
                    CITY
                  </label>
                  <div className="relative">
                    <select
                      id="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                      className="bg-gray-200 text-[#121C17] font-inter py-2 pl-10 pr-4 mt-1 text-base block w-full border border-[#121C17] rounded-md shadow-md focus:outline-none focus:ring focus:border-green-500 hover:bg-gray-200 transition-all duration-500"
                    >
                      <option value="">Select a city</option>
                      <option value="newyork">New York</option>
                      <option value="toronto">Toronto</option>
                      <option value="london">London</option>
                    </select>
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
