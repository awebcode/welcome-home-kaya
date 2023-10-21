import React,{useState} from "react";
import { Select, Button, Input, Slider, Modal } from "antd";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { BsChevronBarDown, BsChevronDown, BsSearch } from "react-icons/bs";

const { Option } = Select;

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiYXNpa3VyIiwiYSI6ImNsbzBnODZrdTE5dXkya3BicjE2dXdpNG8ifQ.3OoBJGLIdEpS8kCHGS8FEA",
});

const MapComponent = () => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
    // Function to handle opening the modal
    const [isPriceModalVisible, setIsPriceModalVisible] = useState(false);
  const handleOpenPriceModal = () => {
    setIsPriceModalVisible(true);
  };

  // Function to handle closing the modal
  const handleClosePriceModal = () => {
    setIsPriceModalVisible(false);
  };
  const [viewport, setViewport] = React.useState({
    width: "100vw",
    height: "100vh",
    latitude: 40.7128,
    longitude: -74.006,
    zoom: 12,
  });

  const handleFilterChange = (value) => {
    console.log(value);
  };

  const handleMinMaxFilter = (min, max) => {
    console.log(min, max);
  };

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

  const handleSliderChange = (values) => {
    // Use the values array to handle the selected range
    const [min, max] = values;
    console.log(`Selected range: ${min} - ${max}`);
  };

  return (
    <>
      {" "}
      <div className="flex justify-between flex-wrap  items-center p-2 my-2 mx-2 md:mx-4 rounded-md">
        <div className="mr-4 flex my-2 flex-wrap justify-between items-center">
          <div className="mx-2 my-1">
            <Select
              defaultValue="Home Type"
              style={{ width: 120 }}
              onChange={handleFilterChange}
            >
              <Option value="apartment">Apartment</Option>
              <Option value="apartment">Duplex</Option>
              <Option value="house">House</Option>
              <Option value="condo">Condo</Option>
              <Option value="townhouse">Townhouse</Option>
              <Option value="villa">Villa</Option>
              <Option value="cottage">Cottage</Option>
            </Select>
          </div>
          <div className="mx-2 my-1">
            <Select
              defaultValue="Phase"
              style={{ width: 120 }}
              onChange={handleFilterChange}
            >
              <Option value="pre-construction">Pre-Construction</Option>
              <Option value="construction">Construction</Option>
              <Option value="post-construction">Post-Construction</Option>
              <Option value="completed">Completed</Option>
              <Option value="planning">Planning</Option>
            </Select>
          </div>
          <div className="mx-2 my-1">
            <Select
              defaultValue="Builder Type"
              style={{ width: 120 }}
              onChange={handleFilterChange}
            >
              <Option value="individual">Individual</Option>
              <Option value="company">Company</Option>
              <Option value="contractor">Contractor</Option>
              <Option value="developer">Developer</Option>
              <Option value="architect">Architect</Option>
            </Select>
          </div>
          <div className="mx-2 my-1">
            <Select
              defaultValue="Status"
              style={{ width: 120 }}
              onChange={handleFilterChange}
            >
              <Option value="available">Available</Option>
              <Option value="booked">Booked</Option>
              <Option value="sold">Sold</Option>
              <Option value="underConstruction">Under Construction</Option>
              <Option value="completed">Completed</Option>
            </Select>
          </div>

          <div className="flex items-center mx-2 my-2">
            <Button
              showSearch={false} // Set showSearch to false
              onClick={handleOpenPriceModal}
              value={"Select Price Range"}
            >Select Price Range<BsChevronDown className="inline mx-2"/></Button>
          </div>
          <Modal
            title="Set Price Range"
            visible={isPriceModalVisible}
            onOk={handleClosePriceModal}
            onCancel={handleClosePriceModal}
            okButtonProps={{ style: { backgroundColor: "black", color: "white" } }}
          >
            <div className="flex justify-between items-center mb-4 ">
              <Input
                type="number"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="border p-2 w-1/2 mx-2"
              />
              <Input
                type="number"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="border p-2 w-1/2"
              />
            </div>
            <Slider
              range
              defaultValue={[0, 1000]}
              min={0}
              max={1000}
              step={10}
              onChange={handleSliderChange}
            />
          </Modal>
        </div>
        <div className="mx-2">
          <Input.Search
            icon={<BsSearch />}
            onSearch={handleSearch} // Use the handleSearch function here
            placeholder="Search Place"
          />
        </div>
      </div>
      <div className="flex flex-wrap p-4 my-2 mx-2 md:mx-4 rounded-md">
        <div className="flex-grow">
          <Map
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
              height: "100vh",
              width: "100vw",
            }}
            center={[viewport.longitude, viewport.latitude]}
            zoom={[viewport.zoom]}
          >
            <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
              <Feature coordinates={[-74.006, 40.7128]} />
            </Layer>
          </Map>
        </div>
      </div>
    </>
  );
};

export default MapComponent;
