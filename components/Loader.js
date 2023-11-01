import React from "react";
import { PuffLoader, PulseLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gradient-to-br from-yellow-300 to-green-400 bg-opacity-95 z-50">
      <PulseLoader size={30} color="black" />
    </div>
  );
};

export default Loader;
