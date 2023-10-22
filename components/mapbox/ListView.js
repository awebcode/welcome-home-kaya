import React from "react";
import { preBuiltPlaces } from "./data";
import ListCard from "./ListCard";

const ListView = () => {
  return (
    <div className="container m-2 p-2 flex flex-wrap justify-between items-center gap-2">
      {preBuiltPlaces.map((v, i) => {
        return <ListCard key={v.name} {...v} />;
      })}
    </div>
  );
};

export default ListView;
