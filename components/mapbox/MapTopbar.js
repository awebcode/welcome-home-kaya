import React, { useState } from "react";
import { Select, Button, Input, Slider, Modal } from "antd";
import { CSSTransition } from "react-transition-group";
import { BsChevronBarDown, BsChevronDown, BsSearch } from "react-icons/bs";
import { useRouter } from "next/router";
import { useValue } from "@/context/ContextProvider";
const { Option } = Select;

const MapTopbar = ({ handleSearch }) => {
  const { state, dispatch } = useValue();
  const [isPriceModalVisible, setIsPriceModalVisible] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(3000000);
  const Router = useRouter();
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const formattedMinPrice =
    minPrice < 1000000
      ? `$${(minPrice / 1000).toFixed(0)}k`
      : `$${(minPrice / 1000000).toFixed(1)}m`;

  const formattedMaxPrice =
    maxPrice < 1000000
      ? `$${(maxPrice / 1000).toFixed(0)}k`
      : `$${(maxPrice / 1000000).toFixed(1)}m`;

  const handleOpenPriceModal = () => {
    setIsPriceModalVisible(true);
  };

  const handleClosePriceModal = () => {
    setIsPriceModalVisible(false);
  };

  const handleFilterChange = (value, filterType) => {
    dispatch({
      type: "UPDATE_FILTER",
      payload: {
        filterType,
        value,
      },
    });
  };

  
  return (
    <>
      <div className="flex justify-between flex-wrap items-center p-2 my-2 mx-2 md:mx-4 rounded-md">
        <div className="mb-1 md:hidden m-[8px] p-2 w-full h-full">
          <Input.Search
            icon={<BsSearch className="p-3 w-full h-full" />}
            onSearch={(value) => handleFilterChange(value, "search")}
            onChange={(e) => handleFilterChange(e.target.value, "search")}
            placeholder="Search: (Address,Builder,Package)"
            size="large"
            allowClear
          />
        </div>

        <div className="flex justify-between items-center flex-wrap md:flex-nowrap md:hidden m-2 p-2 w-full md:w-[40vw]">
          <div className="flex justify-between w-full my-2">
            <Button
              type="button"
              onClick={() => Router.push("/")}
              className="bg-white text-gray-950 ml-[8px] p-2  w-full h-full  border-2 border-gray-950 rounded-md"
            >
              Map View
            </Button>
            <Button
              type="button"
              onClick={() => Router.push("/home/tilt_view")}
              className="custom-btn mx-2   h-full w-full"
            >
              Tile View
            </Button>
          </div>

          <Button
            type="button"
            onClick={toggleFilters}
            className="bg-white w-full flex justify-between items-center text-gray-950 m-2 p-2 h-full border-2 border-gray-950 rounded-md"
          >
            Filter
            <BsChevronDown className="inline mx-2" />
          </Button>
        </div>

        <div className="w-full flex my-2 flex-wrap justify-between items-center hidden md:flex md:items-start">
          <div className="mx-2 my-1">
            <Select
              defaultValue="Home Type"
              className="w-full md:w-32"
              onChange={(value) => handleFilterChange(value, "homeType")}
              size="large"
            >
              <Option value="apartment">Apartment</Option>
              <Option value="duplex">Duplex</Option>
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
              className="w-full md:w-32"
              onChange={(value) => handleFilterChange(value, "phase")}
              size="large"
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
              defaultValue="Builder"
              className="w-full md:w-32"
              onChange={(value) => handleFilterChange(value, "builder")}
              size="large"
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
              className="w-full md:w-32"
              onChange={(value) => handleFilterChange(value, "status")}
              size="large"
            >
              <Option value="available">Available</Option>
              <Option value="booked">Booked</Option>
              <Option value="sold">Sold</Option>
              <Option value="underConstruction">Under Construction</Option>
              <Option value="completed">Completed</Option>
            </Select>
          </div>

          <div className="flex justify-center items-center mx-1 my-2 mt-[3px]">
            <Button
              onClick={handleOpenPriceModal}
              value={"Select Price Range"}
              size="large"
            >
              Select Price Range
              <BsChevronDown className="inline mx-2" />
            </Button>
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
                value={formattedMinPrice}
                className="border rounded-sm border-gray-900 p-4 w-1/2 mx-2"
              />
              <Input
                value={formattedMaxPrice}
                className="border rounded-sm border-gray-900 p-4 w-1/2 mx-2"
              />
            </div>
            <Slider
              range
              value={[minPrice, maxPrice]}
              min={0}
              max={3000000}
              step={500}
              onChange={(values) => {
                setMinPrice(values[0]);
                setMaxPrice(values[1]);
                handleFilterChange(values, "price");
              }}
            />
            <div className="flex justify-between">
              <span>{formattedMinPrice}</span>
              <span>{formattedMaxPrice}</span>
            </div>
          </Modal>
          <div className="mx-0 mt-[2px] flex items-center flex-col md:flex-row">
            <Button
              type="button"
              onClick={() => Router.push("/")}
              className="bg-white text-gray-950 p-2 h-full  border-2 border-gray-950 rounded-md"
            >
              Map View
            </Button>
            <Button
              type="button"
              onClick={() => Router.push("/home/tilt_view")}
              className="custom-btn mx-2 my-2 md:my-0 h-full"
            >
              Tile View
            </Button>
            <Input.Search
              icon={<BsSearch className="p-4 w-full h-full" />}
              onSearch={(value) => handleFilterChange(value, "search")}
              onChange={(e) => handleFilterChange(e.target.value, "search")}
              placeholder="Search: (Address,Builder,Package)"
              size="large"
            />
          </div>
        </div>

        <CSSTransition in={showFilters} timeout={300} classNames="filters" unmountOnExit>
          <div className="w-full flex my-2 flex-wrap mx-1 justify-between items-center md:hidden">
            <div className="mx-1 my-1">
              <Select
                defaultValue="Home Type"
                className="w-[80vw] md:w-32  m-2"
                onChange={(value) => handleFilterChange(value, "homeType")}
                size="middle"
              >
                <Option value="apartment">Apartment</Option>
                <Option value="duplex">Duplex</Option>
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
                className="w-[80vw] md:w-32  m-2"
                onChange={(value) => handleFilterChange(value, "phase")}
                size="middle"
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
                defaultValue="Builder"
                className="w-[80vw] md:w-32  m-2"
                onChange={(value) => handleFilterChange(value, "builder")}
                size="middle"
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
                className="w-[80vw] md:w-32  m-2"
                onChange={(value) => handleFilterChange(value, "status")}
                size="middle"
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
                onClick={handleOpenPriceModal}
                value={"Select Price Range"}
                size="middle"
              >
                Select Price Range
                <BsChevronDown className="inline mx-2" />
              </Button>
            </div>
            <Modal
              title="Set Price Range"
              visible={isPriceModalVisible}
              onOk={handleClosePriceModal}
              onCancel={handleClosePriceModal}
              okButtonProps={{
                style: { backgroundColor: "black", color: "white" },
              }}
            >
              <div className="flex justify-between items-center mb-4 ">
                <Input
                  value={formattedMinPrice}
                  className="border rounded-sm border-gray-900 p-4 w-1/2 mx-2"
                />
                <Input
                  value={formattedMaxPrice}
                  className="border rounded-sm border-gray-900 p-4 w-1/2 mx-2"
                />
              </div>
              <Slider
                range
                value={[minPrice, maxPrice]}
                min={0}
                max={3000000}
                step={500}
                onChange={(values) => {
                  setMinPrice(values[0]);
                  setMaxPrice(values[1]);
                  handleFilterChange(values, "price");
                }}
              />
              <div className="flex justify-between">
                <span>{formattedMinPrice}</span>
                <span>{formattedMaxPrice}</span>
              </div>
            </Modal>
          </div>
        </CSSTransition>
      </div>
    </>
  );
};

export default MapTopbar;
