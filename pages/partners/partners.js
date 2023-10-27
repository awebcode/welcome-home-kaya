import { Divider } from "antd";
import React from "react";

const Partners = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Partners</h2>
        <Divider className="bg-gray-400" />
        <p className="text-lg mb-8">
          Welcome Homes collaborates with a diverse range of partners to create
          exceptional living spaces.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Agents</h3>
            <p className="text-gray-700">
              Our network of agents play a crucial role in connecting homebuyers with
              their dream homes. Join us in transforming the home-buying experience.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Builders</h3>
            <p className="text-gray-700">
              We partner with skilled builders who bring exceptional craftsmanship and
              innovative designs to every project. Join us in creating homes that stand
              out.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Investors</h3>
            <p className="text-gray-700">
              We welcome partnerships with investors who share our vision for innovative
              and sustainable housing solutions. Join us in revolutionizing modern living.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
