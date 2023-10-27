import Head from "next/head";
import React from "react";

const TermsOfService = () => {
  return (
    <div className="py-8">
      <Head>
        <title>Terms Of Service -WelcomeHomes</title>
        <meta name="description" content="Terms Of Service -WelcomeHomes" />
      </Head>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Terms of Service</h2>
        <p className="text-lg mb-8">
          Welcome Homes provides its services subject to the following terms and
          conditions.
        </p>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-bold mb-4">1. Acceptance of Terms</h3>
          <p className="text-gray-700">
            By accessing or using our services, you agree to be bound by these terms.
            Please read them carefully.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg mt-8">
          <h3 className="text-xl font-bold mb-4">2. Privacy Policy</h3>
          <p className="text-gray-700">
            Your use of our services is also subject to our Privacy Policy. Please review
            it for information on how we collect and use data.
          </p>
        </div>
        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default TermsOfService;
