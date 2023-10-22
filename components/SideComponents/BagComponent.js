
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
// export default BagComponent;
import { useState } from "react";
import { useRouter } from "next/router";
import { DeleteOutlined } from "@ant-design/icons";
import { Divider, Select } from "antd";
const { Option } = Select;
const BagComponent = () => {
  const Router = useRouter();
  const [selectedPhase, setSelectedPhase] = useState(null);

  const [items, setItems] = useState(
    ordersData.map((order) => ({ ...order, quantity: 1 }))
  );

  const handleQuantityChange = (id, change) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalAmount = items.reduce(
    (total, item) => total + parseFloat(item.totalAmount) * item.quantity,
    0
  );

  //filtered items

  const filteredItems = selectedPhase
    ? items.filter((item) => item.phase === selectedPhase)
    : items;


  return (
    <div className="flex flex-col lg:flex-row p-4">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 lg:pr-4 flex flex-col flex-wrap">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-5xl font-bold mx-2">My Cart</h1>
          <h2 className="text-sm md:text-xl font-bold mx-2">
            Project:<span className="text-gray-500 mx-2">Addriction</span>
          </h2>
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
          filteredItems.map((item) => (
            <div key={item.id} className="w-full p-2">
              <div className="bg-white flex gap-2 rounded-lg p-4 shadow-md">
                <div className="flex justify-center items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24  object-center md:w-60 h-[60%] md:h-full rounded-md mx-auto mb-2"
                  />
                </div>

                <div className="w-full mx-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                    <h2 className="text-xl font-bold text-center mb-2">
                      ${item.totalAmount}
                    </h2>
                  </div>
                  <Divider />
                  <div className="flex justify-between my-6">
                    <div>
                      <div className="flex text-[10px] md:text-sm my-2">
                        <b>Availability:</b>
                        <span className="text-gray-500 mx-2">In Stock</span>
                      </div>
                      <div className="flex text-[10px] md:text-sm my-2">
                        <b>Lead Time:</b>
                        <span className="text-gray-500 mx-2 ">3 weeks</span>
                      </div>
                      <div className="flex my-2 text-[10px] md:text-sm">
                        <b>Shipment:</b>
                        <span className="text-gray-500 mx-2">1/3 weeks</span>
                      </div>
                    </div>
                    <div className="flex items-center  p-2 rounded">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="text-blue-500 focus:outline-none border p-1"
                      >
                        -
                      </button>
                      <span className="mx-2 border p-1">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="text-blue-500 focus:outline-none border p-1"
                      >
                        +
                      </button>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-500 ml-2"
                      >
                        <DeleteOutlined />
                      </button>
                    </div>
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
              <span>Cart Subtotal</span>
              <span>${totalAmount}</span>
            </div>
            <Divider />
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>$135</span>
            </div>
            <Divider />
            <div className="flex justify-between mb-2">
              <span>Tax</span>
              <span>$2</span>
            </div>
            <Divider />
            <div className="flex justify-between mb-2">
              <span>Total Amount</span>
              <span className="font-bold text-xl md:text-3xl">
                ${totalAmount + 135 + 2}
              </span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Ship To</span>
              <span className="text-[12px]">
                Edrington, 45 Wright Road, Rockville Centre, NY 11570
              </span>
            </div>
            <Divider />
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

export default BagComponent;
