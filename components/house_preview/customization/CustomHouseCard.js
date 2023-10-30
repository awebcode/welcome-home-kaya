import React from "react";
import Image from "next/image";
import { Divider } from "antd";
import { toast } from "react-toastify";

const CustomHouseCard = ({ data }) => {
  const cardClick = () => {
     toast.success("Item Added to cart!")
   }
  return (
    <div className="min-w-max rounded-s mx-auto bg-white shadow-lg rounded-md overflow-hidden my-2">
      <div className="relative h-32 rounded-md">
        <Image src={data?.images[0]} alt={data?.title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h2 className="text-gray-900 text-xs sm:text-lg font-bold">Light</h2>
        <div className="flex items-center mb-1">
          <p className="text-lg font-bold text-green-400">$70 </p>
          <p className="text-xs text-gray-600 mx-1">(10% off)</p>
          <span className="text-sm text-gray-500 ml-2 line-through">$75</span>
        </div>

        <h3 className="text-gray-800 text-xs md:text-sm font-semibold mb-1 border-t-2">
          By Kaya
        </h3>
        <p className="text-gray-600 mb-2">Minimum $100</p>
        <button
          onClick={cardClick}
          className="border border-gray-800 rounded-md mt-2 w-full h-full px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm text-gray-800 hover:bg-gray-800 hover:text-white transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CustomHouseCard;
