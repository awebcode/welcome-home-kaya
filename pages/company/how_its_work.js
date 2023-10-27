import { Divider } from "antd";
import Head from "next/head";
import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Step 1: Initial Consultation",
      description:
        "Schedule an initial consultation with our team to discuss your vision, budget, and timeline for your custom home.",
    },
    {
      title: "Step 2: Design & Planning",
      description:
        "Work closely with our architects and designers to create a detailed plan that includes architectural drawings, blueprints, and material selections.",
    },
    {
      title: "Step 3: Permitting & Approvals",
      description:
        "We handle the necessary permitting and regulatory approvals to ensure your project complies with local building codes and regulations.",
    },
    {
      title: "Step 4: Construction Phase",
      description:
        "Our experienced team of builders and contractors will bring your vision to life, ensuring high-quality craftsmanship and attention to detail.",
    },
    {
      title: "Step 5: Interior Finishes",
      description:
        "Collaborate with our interior designers to choose finishes, fixtures, and furnishings that reflect your style and preferences.",
    },
    {
      title: "Step 6: Final Inspections",
      description:
        "We conduct thorough inspections to ensure every aspect of your new home meets our high standards of quality and safety.",
    },
    {
      title: "Step 7: Handover & Celebration",
      description:
        "Receive the keys to your brand-new custom home and celebrate the successful completion of your dream project!",
    },
  ];

  return (
    <div className="py-8">
      <Head>
        <title>How its work -WelcomeHomes</title>
        <meta name="description" content="How its work -WelcomeHomes" />
      </Head>
      <Divider className="bg-green-400" />
      <h2 className="text-3xl font-bold mb-6">How It Works</h2>
      <Divider className="bg-green-400" />
      <div className="grid gap-8">
        {steps.map((step, index) => (
          <div key={index}>
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
