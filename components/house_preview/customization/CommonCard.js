import React, { useState } from "react";
import { Button, Select, Slider, Modal, Input } from "antd";
import CustomHouseCard from "./CustomHouseCard";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "react-js-pagination";
import { useMediaQuery } from "react-responsive";
import Custom404 from "@/components/CustomNotfound";
const { Option } = Select;
const CommonCard = ({ router, category,subCategory, project, products, setMinPrice, setMaxPrice, min, max, sortValue, setSearch, setSortValue }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const { cartItems, totalPrice } = useSelector((s) => s.cart);
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  //filtering
  const handleSliderChange = (values) => {
    setMinPrice(values[0]);
    setMaxPrice(values[1]);
  };

  const handleFilterClick = () => {
    setIsFilterModalVisible(true);
  };

  const handleFilterModalOk = () => {
    setIsFilterModalVisible(false);
  };

  const handleFilterModalCancel = () => {
    setIsFilterModalVisible(false);
  };
  //pagination
  const [activePage, setActivePage] = useState(1);
  const [recentOrdersActivePage, setRecentOrdersActivePage] = useState(1);
  const itemsPerPage = isMobile ? 4 : 3;
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedProducts = products?.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const recentOrdersStartIndex = (recentOrdersActivePage - 1) * itemsPerPage;
  const recentOrdersEndIndex = recentOrdersStartIndex + itemsPerPage;

  const displayedRecentOrders = shuffle(
    products.slice(recentOrdersStartIndex, recentOrdersEndIndex)
  );

  function shuffle(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }


  const handleRecentOrdersPageChange = (pageNumber) => {
    setRecentOrdersActivePage(pageNumber);
  };
  return (
    <>
      <div className="flex justify-between items-center p-4 rounded-md bg-gray-200">
        <div>
          <button
            onClick={() => router.push("/my_bag")}
            className="border border-gray-800 rounded-md mt-2 w-full h-full px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm text-gray-800 hover:bg-gray-800 hover:text-white transition duration-300"
          >
            View Cart
          </button>
        </div>
        <div>
          <p className="text-gray-600"> Total Cost</p>
          <h1 className="font-bold text-3xl text-gray-900">
            $ {totalPrice?.toFixed(2) || 0}
          </h1>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4 w-full">
        <div className="flex flex-col">
          <h1 className="text-gray-900 font-medium text-sm md:text-xl mb-2">{category!==subCategory?category+" / "+subCategory:category}</h1>
          <p>Best seller (Shipping / Tax included)</p>
        </div>
        <div className="w-36">
          {/* <Select onChange={(e)=>setPrice(e.target.value)} style={{ width: "100%" }} placeholder="Filter" h>
            <Option value="1">50-500</Option>
            <Option value="2">500-2000</Option>
            <Option value="3">2000-100000</Option>
          </Select> */}

          <div className="w-36">
            <Button
              type="primary"
              onClick={handleFilterClick}
              className="mb-4 my-2 py-1 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
            >
              Filter
            </Button>

            <Modal
              title="Filter Products By Price"
              visible={isFilterModalVisible}
              onOk={handleFilterModalOk}
              onCancel={handleFilterModalCancel}
              className="w-full"
            >
              <Input.Search
                placeholder="Search Products"
                className="mb-4 w-full"
                onChange={(e) => setSearch(e.target.value)}
                size="large"
              />

              <Select
                value={sortValue}
                className="w-full mb-4"
                onChange={(e) => setSortValue(e)}
                size="large"
              >
                <Option value="createdAt">Sort by Date</Option>
                <Option value="price">Sort by Price</Option>
                <Option value="category">Sort by Category</Option>
              </Select>

              <Slider
                range
                marks={{
                  0: "$0",
                  100000: "$100,000",
                }}
                step={10}
                min={0}
                max={100000}
                defaultValue={[min, max]}
                onChange={handleSliderChange}
                className="mb-6"
              />

              <div className="flex justify-between text-gray-700">
                <span>{`Min: $${min}`}</span>
                <span>{`Max: $${max}`}</span>
              </div>

              <Button
                type="primary"
                onClick={handleFilterModalOk}
                className="mt-6 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded"
              >
                Apply Filters
              </Button>
            </Modal>
          </div>
        </div>
      </div>
      <div
        style={{ overflowX: "scroll" }}
        className="flex justify-between items-center gap-1 flex-wrap md:flex-nowrap"
      >
        {displayedProducts &&
          displayedProducts.map((v, i) => {
            return <CustomHouseCard data={v} key={v._id} project={project} />;
          })}
      </div>
      {/* pagination */}
      {displayedProducts?.length > 0 ? (
        <div className="pagination-container">
          <Pagination
            activePage={activePage}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={products?.length}
            pageRangeDisplayed={3}
            onChange={handlePageChange}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      ) : (
        <>
          <h1 className="text-center text-3xl md:text-4xl p-4 text-gray-800 my-6">
            404! No Items Found!
          </h1>
        </>
      )}
      <div className="">
        <h1 className="font-bold text-3xl">Recent Orders</h1>
        <div
          style={{ overflowX: "scroll" }}
          className="flex justify-between items-center gap-1 flex-wrap md:flex-nowrap"
        >
          {displayedRecentOrders &&
            displayedRecentOrders.map((v, i) => {
              return <CustomHouseCard key={v._id} data={v} project={project} />;
            })}
        </div>
        {/* pagination */}
        {displayedRecentOrders?.length > 0 ? (
          <div className="pagination-container">
            <Pagination
              activePage={recentOrdersActivePage}
              itemsCountPerPage={itemsPerPage}
              totalItemsCount={products?.length}
              pageRangeDisplayed={3}
              onChange={handleRecentOrdersPageChange}
              itemClass="page-item"
              linkClass="page-link"
            />
          </div>
        ) : (
          <>
            <h1 className="text-center text-3xl md:text-4xl p-4 text-gray-800 my-6">
              404! No Recent Items Found!
            </h1>
          </>
        )}
      </div>
    </>
  );
};

export default CommonCard;
