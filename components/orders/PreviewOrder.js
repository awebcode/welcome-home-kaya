import { Divider, Select } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";

const ordersData = [
  {
    id: 1,
    title: "Order 1",
    description: "Description for Order 1",
    image: "/house/7.jpg",
    totalAmount: "100",
    status: "Pending",
    phase: "Phase 01: Foundation", // Add phase property
  },
  {
    id: 2,
    title: "Order 2",
    description: "Description for Order 2",
    image: "/house/1.jpg",
    totalAmount: "150",
    status: "Delivered",
    phase: "Phase 02: Framing/Roofing", // Add phase property
  },
  // Add more orders as needed
];
const { Option } = Select;
const PreviewOrders = () => {
  const Router = useRouter();
  const [selectedPhase, setSelectedPhase] = useState(null);
  const filteredItems = selectedPhase
    ? ordersData.filter((item) => item.phase === selectedPhase)
    : ordersData;
  return (
    <div className="flex flex-col lg:flex-row p-4">
      {/* Left Side */}

      <div className="w-full  lg:pr-4 flex flex-col  flex-wrap">
        <div>
          <h1 className="text-xl md:text-3xl font-bold mx-2">Order #7646324</h1>
        </div>
        <Divider />
        <div>
          <Select
            defaultValue={"Phase"}
            className="w-full mb-3"
            onChange={(value) => setSelectedPhase(value)}
          >
            <Option value="Phase 01: Foundation">Phase 01: Foundation</Option>
            <Option value="Phase 02: Framing/Roofing">Phase 02: Framing/Roofing</Option>
            <Option value="Phase 03: MEP Roughing and Systems">
              Phase 03: MEP Roughing and Systems
            </Option>
            <Option value="Phase 04: Sheetrock/Insulation">
              Phase 04: Sheetrock/Insulation
            </Option>
            <Option value="Phase 05: Finishes">Phase 05: Finishes</Option>
          </Select>
        </div>
        <Divider />
        {filteredItems.length > 0 ? (
          filteredItems.map((order) => (
            <div key={order.id} className="w-full   p-2">
              <div className="bg-white flex gap-2 rounded-lg p-4 shadow-md">
                <div className="flex justify-center orders-center">
                  <img
                    src={order.image}
                    alt={order.title}
                    className="w-24    md:w-60 h-[60%] md:h-full rounded-md mx-auto mb-2"
                  />
                </div>

                <div className="w-full mx-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-bold  mb-2">{order.title}</h3>
                      <p className="">{order.description}</p>
                    </div>
                    <h2 className="text-xl font-bold text-center mb-2">
                      ${order.totalAmount}
                    </h2>
                  </div>
                  <Divider />
                  <div className="flex justify-between my-6">
                    <div>
                      <div className="flex text-[10px] md:text-sm  my-2">
                        <b>Availability:</b>
                        <span className="text-gray-500 mx-2">In Stock</span>
                      </div>

                      <div className="flex text-[10px] md:text-sm  my-2">
                        <b>Lead Time:</b>
                        <span className="text-gray-500 mx-2 ">3 weeks</span>
                      </div>

                      <div className="flex  my-2 text-[10px] md:text-sm">
                        <b>Shipment:</b>
                        <span className="text-gray-500 mx-2">1/3 weeks</span>
                      </div>
                    </div>
                    <span> Qty 1</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-3xl text-gray-500">No items found</div>
        )}
      </div>

      {/* Right Side */}
      {filteredItems.length > 0 ? (
        <div className="w-full lg:w-1/2 lg:pl-4 mt-4 lg:mt-0">
          <div className="bg-white rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Total Amount:</span>
              <span>$250</span>
            </div>
            <div className="flex justify-between mb-6">
              <span>Status:</span>
              <span className="text-rose-600">Pending</span>
            </div>
            <button
              onClick={() => Router.push("/projects")}
              className="custom-btn h-full w-full"
            >
              View Projects
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PreviewOrders;
