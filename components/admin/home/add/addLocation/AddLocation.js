import { Box } from "@mui/material";
import ReactMapGL, { GeolocateControl, Marker, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef } from "react";
import Geocoder from "./GeoCoder";
import { useValue } from "@/context/ContextProvider";

const AddLocation = () => {
  const {
    state: {
      location: { lng, lat },
    },
    dispatch,
  } = useValue();
  const mapRef = useRef();
  useEffect(() => {
    if (!lng && !lat) {
      fetch("https://ipapi.co/8.8.8.8/json", {
        type: "GET",
        crossDomain: true,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // Assuming mapRef and dispatch are properly set up
          mapRef.current.flyTo({
            center: [data.longitude, data.latitude],
          });
          dispatch({
            type: "UPDATE_LOCATION",
            payload: { lng: data.longitude, lat: data.latitude },
          });
        });
    }
  }, []);

  const handleMarkerDragEnd = async (e) => {
    const { lng, lat } = e.lngLat;

    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}`
      );
      const data = await response.json();
      const placeName = data.features[0].place_name;
      dispatch({
        type: "UPDATE_LOCATION",
        payload: { lng: lng, lat: lat, address: placeName },
      });
      console.log("Place Name:", placeName);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box
      sx={{
        height: 400,
        position: "relative",
      }}
    >
      <ReactMapGL
        ref={mapRef}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 12,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        <Marker
          latitude={lat}
          longitude={lng}
          draggable
          onDragEnd={handleMarkerDragEnd}
        />
        <NavigationControl position="bottom-right" />
        <GeolocateControl
          position="top-left"
          trackUserLocation
          onGeolocate={(e) => {
            console.log("addLocation", e.coords);
            dispatch({
              type: "UPDATE_LOCATION",
              payload: { lng: e.coords.longitude, lat: e.coords.latitude },
            });
          }}
        />
        <Geocoder />
      </ReactMapGL>
    </Box>
  );
};

export default AddLocation;
