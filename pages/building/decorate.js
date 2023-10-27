import { Divider } from "antd";
import Head from "next/head";
import React from "react";

const Decorate = () => {
  return (
    <div className="py-8">
      <Head>
        <title>Decorate -WelcomeHomes</title>
        <meta name="description" content="Decorate -WelcomeHomes" />
      </Head>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Decorate</h2>
        <Divider className="bg-green-400" />
        <p className="text-lg mb-8">
          Elevate your living space with Welcome Homes&apos; expert decorating services.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Personalized Touch</h3>
            <p className="text-gray-700">
              Our decorators work closely with you to understand your style and
              preferences. We create spaces that reflect your personality and make you
              feel at home.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Functional Design</h3>
            <p className="text-gray-700">
              We believe in combining aesthetics with functionality. Our decorating
              solutions are designed to enhance the usability and comfort of your space.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Attention to Detail</h3>
            <p className="text-gray-700">
              From selecting furniture and accessories to arranging them in the perfect
              layout, we pay attention to every detail to create a cohesive and inviting
              atmosphere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Decorate;
