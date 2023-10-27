import React from "react";
import Image from "next/image";

const CustomHouseCard = ({ data }) => {
  

  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="relative h-32">
        <Image src={data?.images[0]} alt={data?.title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h2 className="text-gray-600 text-sm font-bold">{data?.title}</h2>
        <div className="mt-2 text-gray-600">$ {data?.price}</div>
        <button className="border border-gray-800 rounded-md mt-2 w-full h-full px-4 py-2 text-gray-800 hover:bg-gray-800 hover:text-white transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CustomHouseCard;
