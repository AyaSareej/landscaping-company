import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Verifyaccount = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const email = location.state?.email;
  const inputsRef = useRef([]);
  const [resendMessage, setResendMessage] = useState("");

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value !== "" && index < 5) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && code[index] === "" && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const verificationCode = code.join("");

    const data = {
      email: email,
      code: verificationCode,
    };

    try {
      const response = await fetch(
        "https://backendsec3.trainees-mad-s.com/api/verify-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Verification successful:", result);
      navigate("/profile");
    } catch (error) {
      console.error("Error verifying email:", error);
    }
  };

  const handleResendCode = async () => {
    setResendMessage("");
    try {
      const response = await fetch(
        "https://backendsec3.trainees-mad-s.com/api/resend-verification-code",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to resend code");
      }

      const result = await response.json();
      console.log("Resend successful:", result);
      setResendMessage("Verification code resent successfully!");
    } catch (error) {
      console.error("Error resending verification code:", error);
      setResendMessage("Failed to resend verification code. Please try again.");
    }
  };

  return (
    <div className="relative flex flex-col items-center h-screen bg-[#EEF9F3]">
      {/* Green Top Towel */}
      <div className="w-full h-16 bg-gradient-to-r from-custom-dark-teal to-custom-teal"></div>

      {/* Icons Section */}
      <div className="relative flex justify-center mt-10 mb-20">
        <img
          src="/assets/Ellipse 7.png"
          alt="Icon 1"
          className="w-32 h-32 relative transform translate-y-20 -translate-x-10"
        />
        <img
          src="/assets/Ellipse 8.png"
          alt="Icon 2"
          className="w-40 relative transform translate-x-10"
        />
        <img
          src="/assets/morphis-mail-with-a-frosted-glass-effect-1 1.png"
          alt="Mail Icon"
          className="w-48 absolute top-10"
        />
      </div>

      {/* Paragraphs Section */}
      <div className="text-center mb-6">
        <p className="font-inten font-bold text-xl md:text-2xl">
          PLEASE VERIFY YOUR ACCOUNT
        </p>
        <p className="font-inten md:text-xl text-md uppercase mt-2">
          Enter the 6-digit code (contains letters and numbers) that we sent to
          your email address to verify your new account.
        </p>
      </div>

      {/* Code Input Fields */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center space-x-2 rtl:space-x-reverse mb-4"
      >
        <div className="justify-center items-center space-x-2 rtl:space-x-reverse mb-4">
          {code.map((num, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              maxLength="1"
              value={num}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-14 h-[68px] text-center text-4xl rounded-3xl bg-black bg-opacity-10 hover:bg-opacity-15 focus:border-custom-green-dark focus:border-opacity-100"
            />
          ))}
        </div>
        <p className="font-inten md:text-xl text-md text-center uppercase mb-2">
          valid for 3 minutes
        </p>

        {/* Resend Code Link */}
        <button
          type="button"
          onClick={handleResendCode}
          className="mb-6 uppercase font-inten text-sm text-custom-teal hover:underline"
        >
          Resend Code
        </button>

        {resendMessage && (
          <p className="text-center text-green-500">{resendMessage}</p>
        )}

        <button
          type="submit"
          className="uppercase w-60 md:w-64 h-12 border border-[#121C17] bg-[#2BE784] text-[#121C17] font-medium text-md md:text-lg font-inter py-1 rounded-lg shadow-md hover:opacity-90 transition duration-200"
        >
          Verify and Continue
        </button>
      </form>
    </div>
  );
};

export default Verifyaccount;
