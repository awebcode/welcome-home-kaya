import { Divider } from "antd";
import Head from "next/head";
import React from "react";

const Careers = () => {
  return (
    <div className="py-8">
      <Head>
        <title>Careers -WelcomeHomes</title>
        <meta name="description" content="Careers -WelcomeHomes" />
      </Head>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Careers</h2>
        <Divider className="bg-green-400" />
        <p className="text-lg mb-8">
          Join our team of passionate professionals dedicated to shaping the future of
          home building.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Open Positions</h3>
            <p className="text-gray-700">
              Explore our current job openings and discover opportunities to be part of a
              dynamic and innovative team.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Why Join Us</h3>
            <p className="text-gray-700">
              Learn about the benefits and advantages of being a part of the Welcome Homes
              family.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">How to Apply</h3>
            <p className="text-gray-700">
              Find out the steps to apply for a position and what to expect during the
              application process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
