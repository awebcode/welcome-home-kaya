import { Divider } from "antd";
import Head from "next/head";
import React from "react";

const Accessibility = () => {
  return (
    <div className="py-8">
      <Head>
        <title>Accessibility -WelcomeHomes</title>
        <meta name="description" content="Accessibility -WelcomeHomes" />
      </Head>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Accessibility</h2>
        <Divider className="bg-green-400" />
        <p className="text-lg mb-8">
          Welcome Homes is committed to providing an inclusive and accessible experience
          for all users.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Accessible Design</h3>
            <p className="text-gray-700">
              Our homes are designed with accessibility in mind, ensuring that everyone
              can enjoy a comfortable living space.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Assistive Technologies</h3>
            <p className="text-gray-700">
              We leverage advanced technologies to enhance accessibility, including
              features for users with disabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
