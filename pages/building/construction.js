import { Divider } from "antd";
import Head from "next/head";
import React from "react";

const BuildingConstruction = () => {
  return (
    <div className="py-8">
      <Head>
        <title>Construction -WelcomeHomes</title>
        <meta name="description" content="Construction -WelcomeHomes" />
      </Head>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Building Construction</h2>
        <Divider className="bg-green-400" />
        <p className="text-lg mb-8">
          Welcome Homes is dedicated to delivering high-quality construction services with
          a focus on precision and attention to detail.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Expert Builders</h3>
            <p className="text-gray-700">
              Our team of experienced builders bring expertise and craftsmanship to every
              project. We take pride in delivering results that exceed expectations.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Timely Execution</h3>
            <p className="text-gray-700">
              We understand the importance of timelines. Our efficient project management
              ensures that your construction project is completed on schedule without
              compromising quality.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Quality Materials</h3>
            <p className="text-gray-700">
              We source the highest quality materials to ensure the longevity and
              durability of every construction project. Our commitment to quality extends
              from foundation to finish.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingConstruction;
