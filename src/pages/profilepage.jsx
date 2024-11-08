import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

const basePath = import.meta.env.MODE === "production" ? "" : "";

const Profilepage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      navigate("/");
      console.log("no token");
    }
  }, [navigate]);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("access_token");
      console.log("Token:", token);
      if (!token) {
        console.error("No token found. Please log in again.");
        return;
      }

      const response = await axios.get(
        "https://backendsec3.trainees-mad-s.com/api/logout",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Logout response:", response.data);
      localStorage.removeItem("access_token");
      navigate("/");
    } catch (error) {
      console.error(
        "Logout error:",
        error.response ? error.response.data : error.message
      );
    }
  };
  return (
    <div className="bg-[#EEF9F3] min-h-screen">
      <Navbar />
      {/* Main Section */}
      <main className="relative bg-[#EEF9F3] w-full pt-20">
        {/* Profile Picture */}
        <div className="absolute left-10 md:top-96 top-24 ml-24 mb-4 md:mb-0 z-40">
          <img
            src={`${import.meta.env.BASE_URL}assets/profile-ing-ex.jpg`}
            alt="Profile"
            className="w-56 h-56 rounded-full border-8 border-[#14B05D] shadow-lg"
          />
          <span className="absolute bottom-0 left-1/2 transform border border-custom-dark font-inten font-medium shadow-md shadow-zinc-500 -translate-x-1/2 translate-y-1/2 bg-[#EEF9F3] px-2 py-1 rounded-lg text-lg">
            @JAMES_WILLIAMS
          </span>
        </div>
        <div>
          <img
            src={`${import.meta.env.BASE_URL}assets/Rectangle 30.png`}
            alt="Background"
            className="w-full"
          />
        </div>

        {/* Profile Information Section */}
        <div className="flex h-full w-full flex-row md:flex-row justify-between items-start md:items-center pl-4 md:pl-8 ">
          <div className="self-end absolute bottom-0 left-2">
            <img
              src={`${import.meta.env.BASE_URL}assets/pale-85 1.png`}
              alt=""
            />
          </div>
          <div className="md:w-1/3 flex flex-col items-center md:items-end">
            <div className="text-left  mr-10 flex flex-col gap-4 mt-10 mb-10 z-10">
              <p className="font-bold font-inten md:text-2xl text-md text-[#14B05D] uppercase">
                NAME
              </p>
              <p className="font-bold font-inten md:text-2xl text-md text-[#14B05D] uppercase">
                COUNTRY
              </p>
              <p className="font-bold font-inten md:text-2xl text-md text-[#14B05D] uppercase">
                EMAIL
              </p>
              <p className="font-bold font-inten md:text-2xl text-md text-[#14B05D] uppercase">
                PHONE
              </p>
            </div>
          </div>
          <div className="bg-[#031C1D] md:w-2/3 h-[420px] flex justify-start items-center">
            <div className="text-left ml-10 flex flex-col gap-4">
              <p className="font-inten md:text-2xl text-md text-white uppercase">
                James Williams
              </p>
              <p className="font-inten md:text-2xl text-md text-white uppercase">
                USA - Washington, D.C.
              </p>
              <p className="font-inten md:text-2xl text-md text-white uppercase">
                james96@gmail.com
              </p>
              <p className="font-inten md:text-2xl text-md text-white uppercase">
                +1 202 555 1234
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="absolute bottom-10 right-10 w-44 h-12 uppercase border-2 font-inten border-white bg-[#E55B5B] font-medium text-xl text-white py-1 mt-2 rounded-xl shadow-md hover:opacity-90 transition duration-200 flex items-center justify-center gap-2"
            >
              <img
                src={`${import.meta.env.BASE_URL}assets/logout.png`}
                alt="Logout Icon"
                className="w-6 h-6 mr-2"
              />
              Logout
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profilepage;
