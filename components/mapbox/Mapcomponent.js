import React, { useEffect, useState } from "react";
import { Select, Button, Input, Slider, Modal } from "antd";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import MapTopbar from "./MapTopbar";
import PlaceCard from "./PlaceCard";
import { preBuiltPlaces } from "./data";

const { Option } = Select;

const Map = ReactMapboxGl({
  accessToken: process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN,
});

const MapComponent = () => {
  const [isCardModalVisible, setCardIsModalVisible] = useState(false);

  const [viewport, setViewport] = React.useState({
    width: "100vw",
    height: "100vh",

    latitude: 40.7128,
    longitude: -74.006,
    zoom: 12,
  });
  const [hoveredPlace, setHoveredPlace] = useState(null);

  const handleSearch = async (value) => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}`
      );
      const data = await response.json();
      const [longitude, latitude] = data.features[0].geometry.coordinates;

      setViewport({
        ...viewport,
        latitude,
        longitude,
        zoom: 12,
      });
    } catch (error) {
      console.error("Error fetching geocoding data:", error);
    }
  };

  //ismobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
  }, []);

  return (
    <>
      <MapTopbar handleSearch={handleSearch} />
      {hoveredPlace && (
        <PlaceCard
          placeName={hoveredPlace.name}
          price={hoveredPlace.price}
          location={hoveredPlace.location}
          isVisible={isCardModalVisible}
          onClose={() => setCardIsModalVisible(false)}
          coordinates={hoveredPlace?.coordinates}
          images={hoveredPlace.images}
          name={hoveredPlace.name}
        />
      )}
      <div className="flex flex-wrap  my-2  rounded-md">
        <div className="flex-grow">
          <Map
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
              height: "100vh",
              width: "100vw",
            }}
            center={[viewport.longitude, viewport.latitude]}
            zoom={[viewport.zoom]}
            onMouseMove={(map, event) => {
              const features = map.queryRenderedFeatures(event.point);

              const matchingPlace = preBuiltPlaces.find((place) => {
                return features.some(
                  (feature) =>
                    feature.properties.name?.toLowerCase() === place.name?.toLowerCase()
                );
              });

              setHoveredPlace(matchingPlace || null);

              if (matchingPlace) {
                setCardIsModalVisible(true);
              } else {
                setCardIsModalVisible(false);
              }
            }}
            onMouseLeave={() => setIsModalVisible(false)}
          >
            {preBuiltPlaces.map((place, index) => (
              <Layer
                key={index}
                type="symbol"
                id={`marker-${index}`}
                layout={{ "icon-image": `marker-${index}` }}
              >
                <Feature coordinates={place.coordinates} />
              </Layer>
            ))}
          </Map>
        </div>
      </div>
    </>
  );
};

export default MapComponent;
