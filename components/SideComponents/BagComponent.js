import { useRouter } from "next/router";
import React, { useState } from "react";

const BagComponent = () => {
  const router = useRouter();
  const [bagItems, setBagItems] = useState([
    { id: 1, name: "Item 1", price: "$10.00", quantity: 1 },
    { id: 2, name: "Item 2", price: "$15.00", quantity: 1 },
    { id: 3, name: "Item 3", price: "$20.00", quantity: 1 },
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    setBagItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setBagItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalAmount = bagItems.reduce(
    (total, item) => total + parseInt(item.price.slice(1)) * item.quantity,
    0
  );

  return (
    <div className="m-3 md:m-8 p-6 bg-gray-100 rounded-md shadow-md container">
      <h1 className="text-2xl mb-4">My Bag</h1>

      {bagItems.map((item) => (
        <div key={item.id} className="flex justify-between mb-4 items-center">
          <div className="flex items-center">
            <span className="text-lg font-bold">{item.name}</span>
          </div>

          <div className="flex items-center">
            <button
              onClick={() =>
                handleQuantityChange(item.id, Math.max(1, item.quantity - 1))
              }
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-l"
            >
              -
            </button>
            <span className="mx-2 text-lg font-bold">{item.quantity}</span>
            <button
              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-r"
            >
              +
            </button>
          </div>
          <span className="text-lg font-bold">{item.price}</span>

          <button
            onClick={() => handleRemoveItem(item.id)}
            className="text-red-500 hover:text-red-700 font-bold"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="flex justify-between mt-4 border-t pt-4">
        <span className="font-bold text-lg">Total:</span>
        <span className="text-lg font-bold">${totalAmount.toFixed(2)}</span>
      </div>

      <div className="flex justify-between mt-6">
        <button
          className="custom-btn w-[25%] h-full"
          onClick={() => router.push("/checkout/checkout")}
        >
          Checkout
        </button>
        <button
          className="bg-gray-900 w-[25%] h-full hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
          onClick={() => router.push("/")}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default BagComponent;
