import Head from "next/head";
import React from "react";

const WelcomeDifference = () => {
  return (
    <div className="py-8 bg-gray-100">
      <Head>
        <title>Welcome Difference -WelcomeHomes</title>
        <meta name="description" content="Welcome Difference -WelcomeHomes" />
      </Head>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome Difference</h2>
        <p className="text-lg mb-8">
          At Welcome Homes, we pride ourselves on delivering exceptional quality and
          craftsmanship in every project. Here&apos;s what sets us apart:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Expert Team</h3>
            <p className="text-gray-700">
              Our team of experienced architects, designers, and builders bring a wealth
              of expertise to every project, ensuring the highest quality workmanship.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Customization</h3>
            <p className="text-gray-700">
              We understand that your home should be a reflection of your unique style and
              needs. That&apos;s why we offer a high level of customization in every
              project.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Attention to Detail</h3>
            <p className="text-gray-700">
              From architectural details to interior finishes, we pay meticulous attention
              to every aspect of the project to ensure a seamless and beautiful result.
            </p>
          </div>
          {/* Add more points as needed */}
        </div>
      </div>
    </div>
  );
};

export default WelcomeDifference;
