import React from "react";
import HorizontalScrollSection from "../components/horizontalScroll";
import Navbar from "../components/Navbar";
import ItemListPage from "../components/ItemListPage";
import { Link } from "react-router-dom";
import VideoSection from "../components/VideoSection";

const basePath =
  import.meta.env.MODE === "production" ? "/landscaping-company" : "";

const LandingPage = () => {
  const floorItems = [
    {
      id: 1,
      title: "light shade butterscotch oak 1",
      imgSrc: `${basePath}/assets/landingpage/floors/bitcoin-icons_menu-filled.png`,
    },
    {
      id: 2,
      title: "shade butterscotch 2",
      imgSrc: `${basePath}/assets/landingpage/floors/dark-brown.png`,
    },
    {
      id: 3,
      title: "shade butterscotch 3",
      imgSrc: `${basePath}/assets/landingpage/floors/light-brown.png`,
    },
    {
      id: 4,
      title: "shade butterscotch 4",
      imgSrc: `${basePath}/assets/landingpage/floors/brown.png`,
    },
    {
      id: 5,
      title: "shade butterscotch 5",
      imgSrc: `${basePath}/assets/landingpage/floors/s-brown.png`,
    },
    {
      id: 6,
      title: "shade butterscotch 5",
      imgSrc: `${basePath}/assets/landingpage/floors/wgite.png`,
    },
  ];

  const wallItems = [
    {
      id: 1,
      title: "Brick Wall 1",
      imgSrc: `${basePath}/assets/landingpage/walls/Rectangle 39.png`,
    },
    {
      id: 2,
      title: "Wood Panel Wall 2",
      imgSrc: `${basePath}/assets/landingpage/walls/red.png`,
    },
    {
      id: 3,
      title: "Wood Panel Wall 2",
      imgSrc: `${basePath}/assets/landingpage/walls/blue.png`,
    },
    {
      id: 4,
      title: "Wood Panel Wall 2",
      imgSrc: `${basePath}/assets/landingpage/walls/Rectangle 39.png`,
    },
  ];

  const sinkItems = [
    {
      id: 1,
      title: "Brick Wall 1",
      imgSrc: `${basePath}/assets/landingpage/skins/skin.png`,
    },
    {
      id: 2,
      title: "Wood Panel Wall 2",
      imgSrc: `${basePath}/assets/landingpage/skins/ovel-sink.png`,
    },
    {
      id: 3,
      title: "Wood Panel Wall 2",
      imgSrc: `${basePath}/assets/landingpage/skins/black-sink.png`,
    },
    {
      id: 4,
      title: "Wood Panel Wall 2",
      imgSrc: `${basePath}/assets/landingpage/skins/skin.png`,
    },
  ];

  const facItems = [
    {
      id: 1,
      title: "Brick Wall 1",
      imgSrc: `${basePath}/assets/landingpage/faucets/faucet-1.png`,
    },
    {
      id: 2,
      title: "Wood Panel Wall 2",
      imgSrc: `${basePath}/assets/landingpage/faucets/faucet-2.png`,
    },
    {
      id: 3,
      title: "Wood Panel Wall 2",
      imgSrc: `${basePath}/assets/landingpage/faucets/faucet-3.png`,
    },
    {
      id: 4,
      title: "Wood Panel Wall 2",
      imgSrc: `${basePath}/assets/landingpage/faucets/faucet-1.png`,
    },
  ];

  const kitchenItems = [
    {
      id: 1,
      title: "",
      imgSrc: `${basePath}/assets/landingpage/kitchen/kitchen 1.png`,
    },
    {
      id: 2,
      title: "",
      imgSrc: `${basePath}/assets/landingpage/kitchen/kitchen-2.png`,
    },
    {
      id: 3,
      title: "",
      imgSrc: `${basePath}/assets/landingpage/kitchen/kitchen-3.png`,
    },
    {
      id: 4,
      title: "",
      imgSrc: `${basePath}/assets/landingpage/kitchen/kitchen 1.png`,
    },
  ];

  const shrubItems = [
    {
      id: 1,
      title: "",
      imgSrc: `${basePath}/assets/LANDSCAPING DEPARTMENT/shrubs/Rectangle 39.png`,
    },
    {
      id: 2,
      title: "",
      imgSrc: `${basePath}/assets/LANDSCAPING DEPARTMENT/shrubs/Rectangle 40.png`,
    },
    {
      id: 3,
      title: "",
      imgSrc: `${basePath}/assets/LANDSCAPING DEPARTMENT/shrubs/Rectangle-41.png`,
    },
    {
      id: 4,
      title: "",
      imgSrc: `${basePath}/assets/LANDSCAPING DEPARTMENT/shrubs/Rectangle 39.png`,
    },
  ];

  const pavementItems = [
    {
      id: 1,
      title: "",
      imgSrc: `${basePath}/assets/LANDSCAPING DEPARTMENT/pavements/Rectangle 39 (1).png`,
    },
    {
      id: 2,
      title: "",
      imgSrc: `${basePath}/assets/LANDSCAPING DEPARTMENT/pavements/Rectangle 40 (1).png`,
    },
    {
      id: 3,
      title: "",
      imgSrc: `${basePath}/assets/LANDSCAPING DEPARTMENT/pavements/Rectangle 41.png`,
    },
    {
      id: 4,
      title: "",
      imgSrc: `${basePath}/assets/LANDSCAPING DEPARTMENT/pavements/Rectangle 40 (1).png`,
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="mt-20 relative flex justify-center items-center flex-col">
        <img
          src={`${basePath}/assets/landingpage/landing-page.png`}
          alt="main-landing-page-picture"
        />
        <div className="absolute inset-0 bg-[#121C17] opacity-50"></div>
        <div
          className="absolute flex flex-col items-center justify-center top-1/2 left-1/2 right-1/2 "
          style={{
            width: "1300px",
            height: "174px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            padding: "20px",
          }}
        >
          <p className="uppercase text-center text-white text-sm md:text-5xl font-bold mb-2 font-lato flex-wrap">
            transform your vision into reality with our <br /> expert
            construction and landscaping services where quality meets
            creativity.
          </p>
          {/* search 2 */}
          <div className="relative mt-2 md:w-96 w-52 shadow-md">
            <span className="absolute left-3 top-3">
              <img
                src={`${basePath}/assets/Vector.png`}
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
        </div>
      </div>
      <div>
        <div className="bg-custom-teal bg-opacity-30 p-10">
          <p className="uppercase text-[#121C17] text-3xl md:text-6xl mb-2 font-lato">
            Interior cladding
          </p>
        </div>
        <HorizontalScrollSection titleId="Floor" items={floorItems} />
        <HorizontalScrollSection titleId="Walls" items={wallItems} />
        <HorizontalScrollSection titleId="Sinks" items={sinkItems} />
        <HorizontalScrollSection titleId="Faucets" items={facItems} />
        <HorizontalScrollSection titleId="Kitchens" items={kitchenItems} />

        <div className="bg-[#59ED9F] bg-opacity-50 p-10">
          <p className="uppercase text-[#121C17] text-3xl md:text-6xl mb-2 font-lato">
            landscaping Department
          </p>
        </div>
        <HorizontalScrollSection titleId="shrubs" items={shrubItems} />
        <HorizontalScrollSection titleId="pavements" items={pavementItems} />

        <div className="bg-custom-teal bg-opacity-50 p-10">
          <p className="uppercase text-[#121C17] text-3xl md:text-6xl mb-2 font-lato ">
            about us and our services
          </p>
        </div>
        <div className="bg-custom-light flex flex-col justify-around items-center p-10">
          <div className="flex flex-col md:flex-row ">
            {/* left */}
            <div className="md:w-1/2 w-full p-10">
              <div className="mb-8">
                <h3 className="font-inten font-bold text-3xl uppercase">
                  Welcome
                </h3>
                <p className="font-inten text text-xl uppercase">
                  to Z and N Construction and Landscaping, where quality meets
                  creativity. Founded with a passion for transforming outdoor
                  spaces and building lasting structures, we are dedicated to
                  providing exceptional services that enhance both the beauty
                  and functionality of your property.
                </p>
              </div>
              <div className="mb-8">
                <h4 className="font-inten font-bold text text-xl uppercase">
                  our mission
                </h4>
                <p className="font-inten text text-xl uppercase">
                  At Z and N, our mission is to deliver high-quality
                  construction and landscaping solutions tailored to meet the
                  unique needs of our clients. We believe in creating spaces
                  that reflect your vision while ensuring durability and
                  sustainability.
                </p>
              </div>
              <div className="mb-8">
                <h4 className="font-inten font-bold text text-xl uppercase">
                  our team
                </h4>
                <p className="font-inten  text text-xl uppercase">
                  Our experienced team of professionals brings a wealth of
                  knowledge and expertise to every project. From skilled
                  landscapers to expert builders, we work collaboratively to
                  ensure that each job is completed to the highest standards. We
                  pride ourselves on our attention to detail, commitment to
                  excellence, and passion for our craft.
                </p>
              </div>
            </div>
            {/* right */}
            <div className="md:w-1/2 w-full p-10">
              <div className="mb-8">
                <h4 className="font-inten font-bold text text-xl uppercase">
                  what we offer
                </h4>
                <p className="font-inten  text text-xl uppercase">
                  Construction Services: From residential projects to commercial
                  builds, we handle everything from design to execution,
                  ensuring a seamless construction process.
                </p>
                <p className="font-inten  text text-xl uppercase">
                  Landscaping Services: Our landscaping team specializes in
                  creating beautiful gardens, patios, and outdoor living spaces
                  that enhance your property’s appeal
                </p>
              </div>
              <div className="mb-8">
                <h4 className="font-inten font-bold text text-xl uppercase">
                  why choose us
                </h4>
                <p className="font-inten  text text-xl uppercase">
                  Quality Craftsmanship: We use only the best materials and
                  techniques to ensure lasting results.
                </p>
                <p className="font-inten  text text-xl uppercase">
                  Customer-Centric Approach: Your satisfaction is our priority.
                  We listen to your needs and work closely with you throughout
                  the project.
                </p>
                <p className="font-inten  text text-xl uppercase">
                  Sustainable Practices: We are committed to environmentally
                  friendly practices that benefit both our clients and the
                  planet.
                </p>
                <p className="font-inten  text text-xl uppercase">
                  Join us in creating beautiful, functional spaces that you can
                  cherish for years to come. At Z and N Construction and
                  Landscaping, we turn your dreams into reality.
                </p>
              </div>
            </div>
          </div>
          <VideoSection />
        </div>
        <div className="bg-custom-teal bg-opacity-50  flex flex-col p-10">
          <p className="uppercase text-[#121C17] text-3xl md:text-6xl mb-2 font-lato">
            Business exhibition
          </p>
          <div className="flex flex-col md:flex-row items-center p-10 gap-8">
            {/* Left Section */}
            <div className="md:w-1/2 w-full bg-custom-light p-10">
              {/* Top Section */}
              <div className="flex md:flex-row flex-col justify-between mr-4 my-8">
                <h2 className="text-5xl font-lato text-center mb-2 uppercase">
                  Interior
                </h2>
                <div>
                  <Link to={`/interior`}>
                    <button className="bg-[#074143] text-custom-light font-inten font-medium md:text-[28px] py-2 px-6 rounded hover:bg-green-600 transition duration-200 flex items-center justify-center space-x-4">
                      <span className="uppercase">View All</span>
                      <img
                        src={`${basePath}/assets/icons/Vector (2).png`}
                        alt="View All Icon"
                        className="w-7 h-7"
                      />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Grid Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className="w-full h-[297px] bg-gray-200" // Set width to full for responsiveness
                  >
                    <img
                      src={`${basePath}/assets/landingpage/int ${
                        index + 1
                      }.png`} // Replace with your image path
                      alt={`Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* right */}
            <div className="md:w-1/2 w-full bg-custom-light p-10">
              {/* Top Section */}
              <div className="flex md:flex-row flex-col justify-between mr-4 my-8">
                <h2 className="text-5xl font-lato text-center mb-2 uppercase">
                  exterior
                </h2>
                <div>
                  <Link to={`/interior`}>
                    <button className="bg-[#074143] text-custom-light font-inten font-medium md:text-[28px] py-2 px-6 rounded hover:bg-green-600 transition duration-200 flex items-center justify-center space-x-4">
                      <span className="uppercase">View All</span>
                      <img
                        src={`${basePath}/assets/icons/Vector (2).png`}
                        alt="View All Icon"
                        className="w-7 h-7"
                      />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Grid Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className="w-full h-[297px] bg-gray-200" // Set width to full for responsiveness
                  >
                    <img
                      src={`${basePath}/assets/landingpage/exterior/view-${
                        index + 1
                      }.png`} // Replace with your image path
                      alt={`Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-10  justify-center items-center max-w-full ">
            <p className="uppercase text-[#121C17] text-3xl md:text-5xl font-lato text-center">
              Contact Us
            </p>

            {/* Address Section */}
            <div className="flex flex-row items-center w-full md:w-[320px] text-center">
              <img
                src={`${basePath}/assets/icons/mdi_address-marker-outline.png`}
                alt="Address Icon"
                className="w-10 h-9 object-cover mr-2"
              />
              <p className="uppercase text-[#121C17] text-xl md:text-[28px] mb-2 font-inter break-words">
                1234 Greenway Drive Springfield, IL 62701
              </p>
            </div>

            {/* Phone Section */}
            <div className="flex flex-row items-center w-full md:w-[320px] text-center">
              <img
                src={`${basePath}/assets/icons/ic_outline-whatsapp.png`}
                alt="WhatsApp Icon"
                className="w-8 h-8 object-cover mr-2"
              />
              <p className="uppercase text-[#121C17] text-xl md:text-[28px] mb-2 font-inter break-words">
                (555) 123-4567
              </p>
            </div>

            {/* Email Section */}
            <div className="flex flex-row items-center w-full md:w-[320px] text-center">
              <img
                src={`${basePath}/assets/icons/ic_outline-email.png`}
                alt="Email Icon"
                className="w-8 h-8 object-cover mr-2"
              />
              <p className="uppercase text-[#121C17] text-xl md:text-[28px] mb-2 font-inter break-words">
                info@zandnconstruction.com
              </p>
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="h-[355px] bg-gradient-to-b from-custom-dark-teal to-[#031C1D] flex flex-row md:flex-col justify-between p-10 text-white">
          <div className="flex flex-col md:flex-row justify-between mt-4">
            {/* Company Name */}
            <div className="flex flex-row gap-2 items-center">
              <img
                src={`${basePath}/assets/logo.png`}
                alt="Logo"
                className="w-16"
              />
              <p className="font-lato text-white text-lg md:text-xl uppercase">
                The Construction and <br /> Landscaping Company
              </p>
            </div>

            {/* Business Hours */}
            <div className="flex flex-col">
              <h2 className="font-semibold mb-4">BUSINESS HOURS:</h2>
              <p>MONDAY - FRIDAY: 8 AM - 6 PM</p>
              <p>SATURDAY: 9 AM - 4 PM</p>
              <p>SUNDAY: CLOSED</p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col">
              <h2 className="font-semibold mb-4">QUICK LINKS:</h2>
              <ul>
                <li>• HOME</li>
                <li>• ABOUT US</li>
                <li>• SERVICES</li>
                <li>• PROJECTS</li>
                <li>• CONTACT</li>
              </ul>
            </div>

            {/* Awards and Certifications */}
            <div className="flex flex-col">
              <h2 className="font-semibold mb-4">AWARDS AND CERTIFICATIONS:</h2>
              <ul>
                <li className="w-[362px] break-words">
                  • "PROUD MEMBER OF THE NATIONAL ASSOCIATION OF LANDSCAPE
                  PROFESSIONALS"
                </li>
                <li>• "CERTIFIED GREEN BUILDER"</li>
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="text-center mt-2">
            <p>
              © 2024 Z AND N CONSTRUCTION AND LANDSCAPING. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
