// import SingleHouse from '@/components/house_preview/SingleHouse'
import Loader from "@/components/Loader";
import dynamic from "next/dynamic";
const SingleHouse = dynamic(() => import("@/components/house_preview/SingleHouse"), {
  ssr: false,

  loading: () => <Loader />,
});
import React from "react";

const Home = () => {
  return (
    <div>
      <SingleHouse />
    </div>
  );
};

export default Home;
