import dynamic from "next/dynamic";

const ListView = dynamic(() => import("@/components/mapbox/ListView"), {
  ssr: false,
});
import MapTopbar from "@/components/mapbox/MapTopbar";
import React from "react";

const TiltViewRoute = () => {
  return (
    <div>
      <MapTopbar />
      <ListView />
    </div>
  );
};

export default TiltViewRoute;
