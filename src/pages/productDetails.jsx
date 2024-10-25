import React from "react";

const ProductDetail = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Product Image Section */}
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src="path/to/your/image.jpg" // Replace with your image path
            alt="Kronostep Z209 SPC Flooring"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-6">
          <h2 className="text-xl font-bold mb-2">PRODUCT CODE: 11173102</h2>
          <h3 className="text-lg font-semibold mb-4">
            KRONOSTEP Z209 SPC FLOORING, 4 MM, LIGHT SHADE, BUTTERSCOTCH OAK,
            TRAFFIC CLASS AC4, 1280 X 192 MM
          </h3>
          <div className="flex flex-col mb-4">
            <p>
              <strong>PRODUCT TYPE:</strong> SPC FLOORING
            </p>
            <p>
              <strong>DECOR:</strong> BUTTERSCOTCH OAK
            </p>
            <p>
              <strong>SHADE:</strong> LIGHT
            </p>
            <p>
              <strong>BRAND:</strong> KRONOSPAN
            </p>
          </div>
        </div>
      </div>

      {/* Product Description Section */}
      <div className="mt-6">
        <h4 className="text-lg font-semibold mb-2">PRODUCT DESCRIPTION:</h4>
        <p>
          KRONOSTEP Z209 SPC FLOORING IS A PRACTICAL AND DECORATIVE FLOORING
          ALTERNATIVE. THE MODEL INTEGRATES EASILY INTO ANY TYPE OF ARRANGEMENT
          AND OFFERS AN ELEGANT AND WELCOMING APPEARANCE. BEING MADE OF QUALITY
          SPC, WITH TRAFFIC CLASS 32 AND AC4 WEAR, IT IS A DURABLE AND RESISTANT
          CHOICE, BOTH FOR HOMES AND COMMERCIAL SPACES WITH MEDIUM TRAFFIC. THE
          TILES ARE 4 MM THICK AND 1280 X 192 MM IN SIZE, AND THEIR JOINING
          CREATES A DURABLE FLOOR THAT CAN SUPPORT HEAVY FURNITURE, WITHOUT
          BEING DAMAGED OR DISCOLORED. THE PACKAGE CONTAINS 8 BOARDS WITH
          BUTTERSCOTCH OAK DECORATION, IN A LIGHT SHADE, COVERING AN AREA OF
          1.96 SQUARE METERS.
        </p>
      </div>

      {/* Advantages Section */}
      <div className="mt-6">
        <h4 className="text-lg font-semibold mb-2">ADVANTAGES:</h4>
        <ul className="list-disc list-inside">
          <li>RESISTANCE TO LONG-TERM USE</li>
          <li>DOES NOT REQUIRE SCRAPING OR VARNISHING</li>
          <li>EASY TO MAINTAIN</li>
          <li>FAST ASSEMBLY</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
