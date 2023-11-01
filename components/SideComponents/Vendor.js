import { Divider } from "antd";
import React from "react";

const VendorPage = () => {
  const vendors = [
    {
      name: "Vendor 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/800/600?random=1",
    },
    {
      name: "Vendor 2",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://picsum.photos/800/600?random=2",
    },
    {
      name: "Vendor 3",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://picsum.photos/800/600?random=4",
    },
    {
      name: "Vendor 4",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "https://picsum.photos/800/600?random=28",
    },
    {
      name: "Vendor 5",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "https://picsum.photos/800/600?random=252",
    },
    {
      name: "Vendor 6",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/800/600?random=22",
    },
    {
      name: "Vendor 7",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://picsum.photos/800/600?random=25",
    },
    {
      name: "Vendor 8",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://picsum.photos/800/600?random=10",
    },
    {
      name: "Vendor 9",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "https://picsum.photos/800/600?random=8",
    },
    {
      name: "Vendor 10",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "https://picsum.photos/800/600?random=5",
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="md:text-5xl text-3xl font-bold mb-6 text-gray-700">Vendors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {vendors.map((vendor, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <img
              src={vendor.image}
              alt={vendor.name}
              className="mb-4 w-full h-40 object-cover rounded"
            />
            <Divider className="bg-gray-300"/>
            <h2 className="text-xl font-bold mb-2">{vendor.name}</h2>
            <p className="text-gray-700">{vendor.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorPage;
