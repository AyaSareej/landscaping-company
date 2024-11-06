import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const basePath =
  import.meta.env.MODE === "production" ? "/landscaping-company" : "";

const CategoryPage = ({ allItems }) => {
  const { category } = useParams();

  const getCategoryTitle = (category) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  const getCategoryItems = () => {
    switch (category) {
      case "floor":
        return allItems.floorItems;
      case "walls":
        return allItems.wallItems;
      case "sinks":
        return allItems.sinkItems;
      case "faucets":
        return allItems.facItems;
      case "kitchens":
        return allItems.kitchenItems;
      case "shrubs":
        return allItems.shrubItems;
      case "pavements":
        return allItems.pavementItems;
      default:
        return [];
    }
  };

  const items = getCategoryItems();

  return (
    <div className="min-h-screen bg-custom-light">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        {/* Header */}
        <div className="bg-custom-teal bg-opacity-30 p-8 mb-8">
          <h1 className="uppercase text-[#121C17] text-4xl md:text-6xl font-lato">
            {getCategoryTitle(category)}
          </h1>
        </div>

        {/* Grid of Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-[400px]">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-inten font-bold text-2xl">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
