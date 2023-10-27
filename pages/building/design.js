import { Divider } from "antd";
import Head from "next/head";
import React from "react";

const BuildingDesign = () => {
  return (
    <div className="py-8">
      <Head>
        <title>Desining Building -WelcomeHomes</title>
        <meta name="description" content="Desining Building -WelcomeHomes" />
      </Head>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Building Design</h2>
        <Divider className="bg-green-400" />

        <p className="text-lg mb-8">
          At Welcome Homes, we believe in creating spaces that inspire and elevate the way
          you live.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Custom Designs</h3>
            <p className="text-gray-700">
              Our team of expert architects and designers collaborate with you to bring
              your unique vision to life. From contemporary to traditional, we create
              custom designs tailored to your preferences.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Innovative Solutions</h3>
            <p className="text-gray-700">
              We leverage cutting-edge technology and sustainable practices to design
              buildings that are not only aesthetically pleasing but also energy-efficient
              and environmentally conscious.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Quality Craftsmanship</h3>
            <p className="text-gray-700">
              Our commitment to excellence extends to every detail of the building
              process. We work with skilled craftsmen to ensure the highest quality
              construction and finishing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingDesign;
