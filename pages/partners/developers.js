import { Divider } from "antd";
import Head from "next/head";
import React from "react";

const Developers = () => {
  return (
    <div className="py-8">
      <Head>
        <title>Developers -WelcomeHomes</title>
        <meta name="description" content="Developers -WelcomeHomes" />
      </Head>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Developers</h2>
        <Divider className="bg-green-400" />
        <p className="text-lg mb-8">
          Welcome Homes collaborates with talented developers to create innovative and
          sustainable housing solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Innovative Design</h3>
            <p className="text-gray-700">
              Our partner developers are known for their innovative and forward-thinking
              approach to design. They bring fresh ideas to every project.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Sustainable Solutions</h3>
            <p className="text-gray-700">
              We prioritize sustainability in all our projects. Our developers work with
              eco-friendly materials and practices to create homes that are good for the
              environment.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Collaborative Approach</h3>
            <p className="text-gray-700">
              We believe in teamwork and collaboration. Our partnerships with developers
              are built on a shared vision for creating homes that make a positive impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developers;
