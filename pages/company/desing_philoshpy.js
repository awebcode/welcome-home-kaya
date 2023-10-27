import { Divider } from "antd";
import Head from "next/head";
import React from "react";

const DesignPhilosophy = () => {
  return (
    <div className="py-8">
      <Head>
        <title>Design And Philosophy -WelcomeHomes</title>
        <meta name="description" content="Design And Philosophy -WelcomeHomes" />
      </Head>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Design Philosophy</h2>
        <Divider className="bg-green-400" />
        <p className="text-lg mb-8">
          Welcome Homes follows a set of core design principles that guide every project
          we undertake.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Functionality</h3>
            <p className="text-gray-700">
              We believe that good design should not only be aesthetically pleasing, but
              also highly functional. Our spaces are designed with usability and
              efficiency in mind.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Harmony</h3>
            <p className="text-gray-700">
              Creating spaces that harmonize with their surroundings is essential. We pay
              attention to the natural environment, architectural style, and local culture
              in our designs.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Timelessness</h3>
            <p className="text-gray-700">
              We strive to create designs that stand the test of time. Our aim is to build
              spaces that remain relevant and appealing for generations to come.
            </p>
          </div>
          {/* Add more principles as needed */}
        </div>
      </div>
    </div>
  );
};

export default DesignPhilosophy;
