import { Divider } from "antd";
import Head from "next/head";
import React from "react";

const PartnerAgents = () => {
  return (
    <div className="py-8">
      <Head>
        <title>Agents -WelcomeHomes</title>
        <meta name="description" content="Agents -WelcomeHomes" />
      </Head>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Partner Agents</h2>
        <Divider className="bg-gray-400" />
        <p className="text-lg mb-8">
          Welcome Homes collaborates with experienced real estate agents to provide
          exceptional services to our clients.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Expertise in Local Market</h3>
            <p className="text-gray-700">
              Our partner agents have in-depth knowledge of the local real estate market.
              They provide valuable insights to help you make informed decisions.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Personalized Guidance</h3>
            <p className="text-gray-700">
              Our agents work closely with you to understand your preferences and
              requirements. They guide you through the buying or selling process with
              personalized attention.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Negotiation Expertise</h3>
            <p className="text-gray-700">
              Our partner agents are skilled negotiators. They strive to get you the best
              deal, whether you're buying or selling a property.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerAgents;
