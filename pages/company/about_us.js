import { Divider } from "antd";
import Head from "next/head";
import React from "react";

const AboutUs = () => {
  return (
    <div className="py-8">
      <Head>
        <title>About | Us -WelcomeHomes</title>
        <meta name="description" content="About | Us -WelcomeHomes" />
      </Head>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <Divider className="bg-green-400" />
        <p className="text-lg mb-8">
          Welcome Homes is a passionate team of architects, designers, and builders
          dedicated to creating exceptional living spaces.
        </p>
        <p className="text-gray-700 mb-8">
          Our journey began with a vision to redefine the way homes are built. With a
          focus on innovation, quality, and customer satisfaction, we have successfully
          delivered numerous projects that stand as a testament to our commitment to
          excellence.
        </p>
        <p className="text-gray-700 mb-8">
          We believe in creating homes that not only meet the functional needs of our
          clients but also inspire a sense of belonging and comfort. Every project is a
          unique collaboration, and we take pride in bringing our client's visions to
          life.
        </p>
        <p className="text-gray-700">
          Explore our portfolio to see the transformative power of thoughtful design and
          expert craftsmanship.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
