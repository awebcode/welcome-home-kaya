import React from "react";
import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-50 bg-opacity-75 z-50">
      <PuffLoader size={80} color="green"/>
    </div>
  );
};

export default Loader;
