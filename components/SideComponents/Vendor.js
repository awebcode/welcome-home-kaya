import React from "react";
import { FaRegBuilding, FaStore, FaUniversity } from "react-icons/fa";

const VendorsComponent = () => {
  const vendors = [
    { name: "Vendor A", icon: <FaRegBuilding size={64} /> },
    { name: "Vendor B", icon: <FaStore size={64} /> },
    { name: "Vendor C", icon: <FaUniversity size={64} /> },
    // Add more vendors as needed
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 min-h-screen">
      {vendors.map((vendor, index) => (
        <div key={index} className="p-3 md:p-6 bg-gray-100 rounded-md shadow-md text-center h-48">
          <div className="flex justify-center items-center mb-4 w-full h-12">
            {vendor.icon}
          </div>

          <h2 className="text-xl font-bold mb-2">{vendor.name}</h2>
          <button className="custom-btn">Visit {vendor.name}</button>
        </div>
      ))}
    </div>
  );
};

export default VendorsComponent;
