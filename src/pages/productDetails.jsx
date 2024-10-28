import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const basePath =
  import.meta.env.MODE === "production" ? "/landscaping-company" : "";

  const images = [
    `${basePath}/assets/product-details/product-d-1.png`,
    `${basePath}/assets/product-details/product-d-3.png`,
    `${basePath}/assets/product-details/Rectangle 48.png`,
  ];

  return (
    <div className="min-h-screen w-full h-full pt-20 bg-custom-light shadow-lg relative">
      <Navbar />

      {/* Floating Image Gallery */}
      <div className="sm:absolute left-8 top-40 w-[679px] h-[730px] bg-transparent shadow-xl z-30">
        {/* Main large image */}
        <div className="w-full h-[505px]">
          <img
            src={images[selectedImage]}
            alt="Main product"
            className="w-full h-[505px] object-cover"
          />
          <Link to="">
            <button
              type="submit"
              className="absolute bottom-60 right-5 py-1 mt-2  hover:opacity-90 transition duration-200"
            >
              <img
                src={`${basePath}/assets/icons/fav.png`}
                alt="fav Icon"
                className="w-16 h-16"
              />
            </button>
          </Link>
        </div>
        {/* Thumbnail images */}
        <div className="flex flex-row w-full pt-5 gap-5 bg-transparent ">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-[214px] h-[214px] cursor-pointer border-4
                ${
                  selectedImage === index
                    ? "border-custom-green-dark"
                    : "border-gray-200"
                }`}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-[214px] h-[214px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/*  */}
      <div className="w-full">
        <img
          src={`${basePath}/assets/product-details/product-d-2.png`}
          alt="Kronostep Z209 SPC Flooring"
          className="w-full h-auto"
        />
      </div>
      <div className="bg-custom-teal content-center pl-96 p-10 h-20">
        <p className="uppercase text-custom-light text-3xl md:text-4xl text-center mb-2 font-lato">
          Product code: 11173102
        </p>
      </div>

      {/* Product Image Section */}
      <div className="flex flex-col md:flex-row justify-end py-5 gap-10">
        <div className="md:w-2/3 md:pl-32">
          <h3 className="md:text-4xl text-2xl font-bold font-inten mb-4">
            KRONOSTEP Z209 SPC FLOORING, 4 MM, LIGHT SHADE, BUTTERSCOTCH OAK,
            TRAFFIC CLASS AC4, 1280 X 192 MM
          </h3>
          <div className="flex mt-10 md:pl-20 gap-5 flex-col mb-4 uppercase font-inten text-xl md:text-[28px]">
            <p className="flex flex-row gap-6">
              <img
                src={`${basePath}/assets/icons/Vector.png`}
                alt=""
                className="h-8 w-8"
              />
              <strong>PRODUCT TYPE:</strong> SPC FLOORING
            </p>
            <p className="flex flex-row gap-6">
              <img
                src={`${basePath}/assets/icons/Vector (1).png`}
                alt=""
                className="h-8 w-6"
              />{" "}
              <strong>DECOR:</strong> BUTTERSCOTCH OAK
            </p>
            <p className="flex flex-row gap-6">
              <img
                src={`${basePath}/assets/icons/Vector (4).png`}
                alt=""
                className="h-8 w-8"
              />{" "}
              <strong>SHADE:</strong> LIGHT
            </p>
            <p className="flex flex-row gap-6">
              <img
                src={`${basePath}/assets/icons/Vector (3).png`}
                alt=""
                className="h-8 w-6"
              />{" "}
              <strong>BRAND:</strong> KRONOSPAN
            </p>
          </div>
        </div>
      </div>

      {/* Product Description Section */}
      <div className="bg-custom-light flex flex-col gap-10 w-[949px] mx-32 mt-32">
        <div className="mt-6">
          <h4 className="text-4xl font-inten font-bold mb-4">
            PRODUCT DESCRIPTION:
          </h4>
          <p className="font-inten text-[28px] ">
            KRONOSTEP Z209 SPC FLOORING IS A PRACTICAL AND DECORATIVE FLOORING
            ALTERNATIVE. THE MODEL INTEGRATES EASILY INTO ANY TYPE OF
            ARRANGEMENT AND OFFERS AN ELEGANT AND WELCOMING APPEARANCE. <br />{" "}
            BEING MADE OF QUALITY SPC, WITH TRAFFIC CLASS 32 AND AC4 WEAR, IT IS
            A DURABLE AND RESISTANT CHOICE, BOTH FOR HOMES AND COMMERCIAL SPACES
            WITH MEDIUM TRAFFIC. <br /> THE TILES ARE 4 MM THICK AND 1280 X 192
            MM IN SIZE, AND THEIR JOINING CREATES A DURABLE FLOOR THAT CAN
            SUPPORT HEAVY FURNITURE, WITHOUT BEING DAMAGED OR DISCOLORED. THE
            PACKAGE CONTAINS 8 BOARDS WITH BUTTERSCOTCH OAK DECORATION, IN A
            LIGHT SHADE, COVERING AN AREA OF 1.96 SQUARE METERS.
          </p>
        </div>
        {/* Advantages Section */}
        <div className="mb-10">
          <h4 className="text-4xl font-inten font-bold mb-4">ADVANTAGES:</h4>
          <ul className="font-inten text-[28px] list-disc list-inside">
            <li>RESISTANCE TO LONG-TERM USE</li>
            <li>DOES NOT REQUIRE SCRAPING OR VARNISHING</li>
            <li>EASY TO MAINTAIN</li>
            <li>FAST ASSEMBLY</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
