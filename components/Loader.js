import React from "react";
import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gradient-to-br from-yellow-300 to-green-400 bg-opacity-95 z-50">
      <PuffLoader size={200} color="#0f172a" />
    </div>
  );
};

export default Loader;
