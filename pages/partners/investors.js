import { Divider } from "antd";
import Head from "next/head";
import React from "react";

const Investors = () => {
  return (
    <div className="py-8">
      <Head>
        <title>Investors -WelcomeHomes</title>
        <meta name="description" content="Investors -WelcomeHomes" />
      </Head>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Investors</h2>
        <Divider className="bg-gray-400" />
        <p className="text-lg mb-8">
          Welcome Homes welcomes partnerships with investors who share our vision for
          innovative and sustainable housing solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Innovative Projects</h3>
            <p className="text-gray-700">
              We collaborate with investors on groundbreaking projects that redefine
              modern living. Join us in creating innovative and sustainable housing
              solutions.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Long-Term Vision</h3>
            <p className="text-gray-700">
              Our partnerships with investors are built on shared long-term goals.
              Together, we aim to revolutionize the way homes are designed, built, and
              lived in.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Financial Growth</h3>
            <p className="text-gray-700">
              Invest with Welcome Homes for the potential of significant financial growth.
              Our innovative projects have the potential to yield impressive returns on
              investment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investors;
