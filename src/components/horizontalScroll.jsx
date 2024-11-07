import React from "react";
import { Link } from "react-router-dom";

const HorizontalScrollSection = ({ titleId, items }) => {
  const basePath =
    import.meta.env.MODE === "production" ? "/landscaping-company" : "";
    
  const getTitleById = (id) => {
    switch (id) {
      case "Floor":
        return "Floors";
      case "Walls":
        return "Walls";
      case "Sinks":
        return "Sinks";
      case "Faucets":
        return "Faucets";
      case "Kitchens":
        return "Kitchens";
      case "shrubs":
        return "Shrubs";
      case "pavements":
        return "Pavements";
      // Add more cases as needed
      default:
        return "default"; // Fallback title
    }
  };

  return (
    <div className="py-8">
      <div className="flex flex-row justify-between mr-10 my-8">
        <div className="flex flex-row">
          <div className="h-[33px] w-[54px] bg-custom-dark mr-4"></div>
          <h2
            className="md:text-5xl text-2xl  font-lato text-center mb-4"
            id={titleId}
          >
            {getTitleById(titleId)}
          </h2>
        </div>

        <div className="">
          <Link to={`/${titleId.toLowerCase()}`}>
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
      <div className="overflow-x-auto whitespace-nowrap ml-10 scrollbar-hidden">
        <div className="flex space-x-14">
          {items.map((item) => (
            <Link
              to={`/product/${item.id}`}
              key={item.id}
              className="min-w-[471px] relative"
            >
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-[471px] h-[427px] object-cover"
              />
              <h3 className="w-[300px] absolute bottom-2 left-2 font-inten font-bold text-xl md:text-3xl text-[#121C17] p-2 whitespace-normal break-words">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollSection;
