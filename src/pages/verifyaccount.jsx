import React, { useState, useRef } from "react";

const Verifyaccount = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!isNaN(value) && value.length <= 1) {
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

  return (
    <div className="relative flex items-center flex-col  h-screen bg-[#EEF9F3]">
      {/* Green Top Towel */}
      <div className="w-full h-16 bg-gradient-to-r from-custom-dark-teal to-custom-teal"></div>
      {/* icons */}
      <div className="flex justify-center top-20 ">
        <div className="absolute translate-y-3/4  -translate-x-28">
          <img src="/assets/Ellipse 7.png" alt="Logo" className="w-32" />
        </div>

        <div className="absolute translate-x-28">
          <img src="/assets/Ellipse 8.png" alt="Logo" className="w-40" />
        </div>
        <div className="absolute translate-y-10  ">
          <img
            src="/assets/morphis-mail-with-a-frosted-glass-effect-1 1.png"
            alt="Logo"
            className="w-48"
          />
        </div>
      </div>
      {/* paragraphs */}
      <div>
        <p className="font-inten font-bold text-xl md:text-2xl text-center mb-4">
          PLEASE VERIFY YOUR ACCOUNT
        </p>
      </div>
      <div>
        <p className="font-inten md:text-xl text-md text-center uppercase">
          enter the 6 digit code (contains letters and numbers) that we sent to
          your email address to verify your new account
        </p>
      </div>
      {/* code fields */}
      <div className=" flex justify-center items-center space-x-2 rtl:space-x-reverse">
        {code.map((num, index) => (
          <input
            key={index}
            ref={(el) => (inputsRef.current[index] = el)}
            type="text"
            maxLength="1"
            value={num}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="mt-5 mb-5 w-14 h-[68px] text-center text-4xl rounded-3xl font-noor-regular leading-10 bg-black opacity-15 hover:opacity-10  focus:ring focus:border-custom-green-dark focus:border-opacity-100 focus:opacity-10 "
          />
        ))}
      </div>{" "}
      {/*  */}
      <p className="font-inten md:text-xl text-md text-center uppercase">
        valid for 3 minutes
      </p>
      <a
        href="#"
        className="mt-2 mb-2 uppercase font-inten text-sm text-custom-teal hover:underline"
      >
        resend code
      </a>
      {/* button */}
      <button
        type="submit"
        className="uppercase w-60 md:w-64 h-12 border border-[#121C17] bg-[#2BE784] text-[#121C17] font-medium text-md md:text-lg font-inter py-1 mt-2 rounded-lg shadow-md hover:opacity-90 transition duration-200"
      >
        verify and continue
      </button>
    </div>
  );
};

export default Verifyaccount;
