import { Divider } from "antd";
import Head from "next/head";
import React from "react";

const Builders = () => {
  return (
    <div className="py-8">
      <Head>
        <title>Builders -WelcomeHomes</title>
        <meta name="description" content="Builders -WelcomeHomes" />
      </Head>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Builders</h2>
        <Divider className="bg-gray-400" />
        <p className="text-lg mb-8">
          Welcome Homes partners with skilled builders to bring your dream home to life.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Craftsmanship</h3>
            <p className="text-gray-700">
              Our builders are known for their exceptional craftsmanship. They pay
              attention to every detail to ensure the highest quality construction.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Innovative Designs</h3>
            <p className="text-gray-700">
              Our partner builders stay updated with the latest trends and technologies in
              home construction. They bring innovative designs to every project.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Timely Completion</h3>
            <p className="text-gray-700">
              We understand the importance of timely project completion. Our builders work
              efficiently to deliver your dream home on schedule.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builders;
