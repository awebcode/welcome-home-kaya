import Link from "next/link";
import React from "react";
import {
  FaTesla,
  FaAmazon,
  FaGoogle,
  FaMicrosoft,
  FaApple,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const CompaniesComponent = () => {
  const companies = [
    { name: "Twitter", logo: <FaTwitter size={100} />, url: "https://www.twitter.com/" },
    { name: "Amazon", logo: <FaAmazon size={100} />, url: "https://www.amazon.com/" },
    { name: "Google", logo: <FaGoogle size={100} />, url: "https://www.google.com/" },
    {
      name: "Microsoft",
      logo: <FaMicrosoft size={100} />,
      url: "https://www.microsoft.com/",
    },
    { name: "Apple", logo: <FaApple size={100} />, url: "https://www.apple.com/" },
    {
      name: "Facebook",
      logo: <FaFacebook size={100} />,
      url: "https://www.facebook.com/",
    },
    // Add more companies as needed
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {companies.map((company, index) => (
        <div key={index} className="p-4 bg-gray-100 rounded-md shadow-md text-center">
          <div className="mx-auto mb-4" style={{ maxWidth: "40%" }}>
            {company.logo}
          </div>
          <h2 className="text-xl font-bold mb-2">{company.name}</h2>
          <a href={company.url} target="_blank" rel="noopener noreferrer">
            <button className="custom-btn">Visit {company.name}</button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default CompaniesComponent;
