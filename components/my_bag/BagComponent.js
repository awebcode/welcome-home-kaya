// // export default BagComponent;
// import { useState } from "react";
// import { useRouter } from "next/router";
// import { DeleteOutlined } from "@ant-design/icons";
// import { Divider, Select } from "antd";
// import { useDispatch, useSelector } from "react-redux";
// const { Option } = Select;
// const BagComponent = () => {
//   const dispatch = useDispatch();
//    const { cartItems } = useSelector((s) => s.cart);
//    const { wishlistItems } = useSelector((s) => s.wishlist);
//   const Router = useRouter();
//   const [selectedPhase, setSelectedPhase] = useState(null);

//   const [items, setItems] = useState(
//     cartItems.map((order) => ({ ...order, quantity: 1 }))
//   );

//   const handleQuantityChange = (id, change) => {
//     setItems((prevItems) =>
//       prevItems.map((item) =>
//         item._id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
//       )
//     );
//   };

// const handleRemoveItem = (id) => {
//   dispatch(removeCartItem(id)); // Dispatch removeCartItem action with the item id
// };

// const totalAmount = cartItems?.reduce(
//   (total, item) => total + parseFloat(item.totalAmount) * item.quantity,
//   0
// );

// const totalWishlistAmount = wishlistItems?.reduce(
//   (total, item) => total + parseFloat(item.totalAmount) * item.quantity,
//   0
// );
//   //filtered items

//   const filteredItems = selectedPhase
//     ? items.filter((item) => item.phase === selectedPhase)
//     : items;

//   return (
//     <div className="flex flex-col lg:flex-row p-4 min-h-screen">
//       {/* Left Side */}
//       <div className="w-full lg:w-1/2 lg:pr-4 flex flex-col flex-wrap">
//         <div className="flex justify-between items-center">
//           <h1 className="text-2xl md:text-5xl font-bold mx-2">My Cart</h1>
//           <h2 className="text-sm md:text-xl font-bold mx-2">
//             Project:<span className="text-gray-500 mx-2">Addriction</span>
//           </h2>
//         </div>
//         <Divider />
//         <div>
//           <Select
//             defaultValue={"Phase"}
//             className="w-full mb-3"
//             onChange={(value) => setSelectedPhase(value)}
//           >
//             <Option value="Phase 01: Foundation">Phase 01: Foundation</Option>
//             <Option value="Phase 02: Framing/Roofing">Phase 02: Framing/Roofing</Option>
//             <Option value="Phase 03: MEP Roughing and Systems">
//               Phase 03: MEP Roughing and Systems
//             </Option>
//             <Option value="Phase 04: Sheetrock/Insulation">
//               Phase 04: Sheetrock/Insulation
//             </Option>
//             <Option value="Phase 05: Finishes">Phase 05: Finishes</Option>
//           </Select>
//         </div>
//         <Divider />
//         {filteredItems.length > 0 ? (
//           filteredItems.map((item) => (
//             <div key={item._id} className="w-full p-2">
//               <div className="bg-white flex gap-2 rounded-lg p-4 shadow-md">
//                 <div className="flex justify-center items-center h-32">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full  object-center h-full   rounded-md mx-auto mb-2"
//                   />
//                 </div>

//                 <div className="w-full mx-1 md:mx-2 h-32">
//                   <div className="flex justify-between items-center">
//                     <div>
//                       <h3 className="text-lg font-bold mb-2">{item.title}</h3>
//                       <p className="text-xs">{item.description}</p>
//                     </div>
//                     <h2 className="text-lg font-bold text-center mb-2">
//                       ${item.totalAmount}
//                     </h2>
//                   </div>
//                   {/* <Divider /> */}
//                   <div className="flex justify-between my-2">
//                     <div>
//                       <div className="flex text-[8px] md:text-[10px] my-2">
//                         <b>Availability:</b>
//                         <span className="text-gray-500 mx-1 md:mx-2">In Stock</span>
//                       </div>
//                       <div className="flex text-[8px] md:text-[10px] my-2">
//                         <b>Lead Time:</b>
//                         <span className="text-gray-500 mx-1 md:mx-2 ">3 weeks</span>
//                       </div>
//                       <div className="flex my-2 text-[8px] md:text-[10px]">
//                         <b>Shipment:</b>
//                         <span className="text-gray-500 mx-1 md:mx-2">1/3 weeks</span>
//                       </div>
//                     </div>
//                     <div className="flex items-center  p-2 rounded">
//                       <button
//                         onClick={() => handleQuantityChange(item._id, -1)}
//                         className="text-blue-500 focus:outline-none text-[8px] md:text-[10px] border p-1"
//                       >
//                         -
//                       </button>
//                       <span className="mx-2 border p-1 text-[8px] md:text-[10px]">
//                         {item.quantity}
//                       </span>
//                       <button
//                         onClick={() => handleQuantityChange(item._id, 1)}
//                         className="text-blue-500 focus:outline-none border p-1 text-[8px] md:text-[10px]"
//                       >
//                         +
//                       </button>
//                       <button
//                         onClick={() => handleRemoveItem(item._id)}
//                         className="text-red-500 ml-2 text-[8px] md:text-[10px]"
//                       >
//                         <DeleteOutlined />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="text-center text-3xl text-gray-500">No items found</div>
//         )}
//       </div>
//       {/* Right Side */}
//       {filteredItems.length > 0 ? (
//         <div className="w-full lg:w-1/2 lg:pl-4 mt-4 lg:mt-0">
//           <div className="bg-white rounded-lg p-4 shadow-md">
//             <h2 className="text-xl font-bold mb-4">Order Summary</h2>

//             <div className="flex justify-between mb-2">
//               <span>Cart Subtotal</span>
//               <span>${totalAmount}</span>
//             </div>
//             <Divider />
//             <div className="flex justify-between mb-2">
//               <span>Shipping</span>
//               <span>$135</span>
//             </div>
//             <Divider />
//             <div className="flex justify-between mb-2">
//               <span>Tax</span>
//               <span>$2</span>
//             </div>
//             <Divider />
//             <div className="flex justify-between mb-2">
//               <span>Total Amount</span>
//               <span className="font-bold text-xl md:text-3xl">
//                 ${totalAmount + 135 + 2}
//               </span>
//             </div>
//             <div className="flex justify-between mb-2">
//               <span>Ship To</span>
//               <span className="text-[12px]">
//                 Edrington, 45 Wright Road, Rockville Centre, NY 11570
//               </span>
//             </div>
//             <Divider />
//             <button
//               onClick={() => Router.push("/projects")}
//               className="custom-btn h-full w-full"
//             >
//               View Projects
//             </button>
//           </div>
//         </div>
//       ) : (
//         ""
//       )}
//     </div>
//   );
// };

// export default BagComponent;

import React, { useState } from "react";
import { Tabs, Divider, Select } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { addToCart, addToWishlist, removeFromCart, removeFromWishlist, updateCartItem, updateWishlistItem } from "@/redux/actions/cartActions";
import Custom404 from "../CustomNotfound";
import { toast } from "react-toastify";
import { AddCardOutlined, AddShoppingCartOutlined } from "@mui/icons-material";

const { TabPane } = Tabs;
const { Option } = Select;

const BagComponent = () => {
  const dispatch = useDispatch();
  const Router = useRouter();
  const { cartItems } = useSelector((s) => s.cart);
  const { wishlistItems } = useSelector((s) => s.wishlist);

  const [selectedPhase, setSelectedPhase] = useState(null);
  const [quantity, setQuantity] = useState(1);



  const [activeTab, setActiveTab] = useState("cart"); // Initialize activeTab state with 'cart'

  const handleTabChange = (key) => {
    setActiveTab(key); // Update activeTab state when the tab changes
  };
  //cart quantity
  const increaseQuantity = (item, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      toast.warn("Cannot increase quantity beyond available stock");

      return;
    }
    dispatch(addToCart({ ...item, quantity: newQty }));
  };

  const decreaseQuantity = (item, quantity) => {
    const newQty = quantity - 1;
    if (quantity === 1) {
      toast.warn("Cannot decrease quantity below 1");

      return;
    }
    dispatch(addToCart({ ...item, quantity: newQty }));
  };

  //wishlist quantity start
  const addToCartHandler = (item) => {
    dispatch(addToCart(item))
    toast.success("Item Added to Cart!")
    dispatch(removeFromWishlist(item._id));
    setActiveTab("cart")
  
  }
  const increaseWishlistQuantity = (item, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addToWishlist({ ...item, quantity: newQty }));
  };

  const decreaseWishlistQuantity = (item, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addToWishlist({ ...item, quantity: newQty }));
  };
  //wishlist quantity start
  const handleRemoveItem = (id, activeTab) => {
    const items = activeTab === "cart" ? cartItems : wishlistItems;
    const updatedItems = items.filter((item) => item._id !== id);

    if (activeTab === "cart") {
      dispatch(removeFromCart(id));
    } else {
      // Dispatch removeWishlistItem action with the item id
      dispatch(removeFromWishlist(id));
    }
  };

  const totalAmount = cartItems?.reduce(
    (total, item) =>
      total + parseFloat(item?.price * (item.discount / 100)) * item.quantity,
    0
  );
  console.log("total", totalAmount);

  const totalWishlistAmount = wishlistItems?.reduce(
    (total, item) =>
      total + parseFloat(item.price - item.price * (item.discount / 100)) * item.quantity,
    0
  );
  console.log("quanttity", quantity);
  return (
    <div className="flex flex-col lg:flex-row p-4 min-h-screen">
      <div className="w-full lg:w-1/2 lg:pr-4 flex flex-col flex-wrap">
        <Tabs activeKey={activeTab} onChange={handleTabChange}>
          <TabPane tab="Cart" key="cart">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl md:text-5xl font-bold mx-2">My Cart</h1>
              <h2 className="text-sm md:text-xl font-bold mx-2">
                Project:
                <span className="text-gray-500 mx-2">{cartItems[0]?.project?.title}</span>
              </h2>
            </div>

            <div className="my-3">
              <Select
                defaultValue={"Phase"}
                className="w-full mb-3 border  "
                onChange={(value) => setSelectedPhase(value)}
                size="large"
              >
                <Option value="Clearing">Phase 01: Clearing</Option>
                <Option value="Foundation">Phase 02: Foundation</Option>
                <Option value="Framing/Roofing">Phase 03: Framing/Roofing</Option>
                <Option value="MEP Roughing and Systems">
                  Phase 04: MEP Roughing and Systems
                </Option>
                <Option value="Sheetrock/Insulation">
                  Phase 05: Sheetrock/Insulation
                </Option>
                <Option value="Finishes">Phase 06: Finishes</Option>
                <Option value="Punchlist">Phase 07: Punchlist</Option>
                <Option value="Completed">Phase 07: Completed</Option>
              </Select>
            </div>
            <Divider />
            {cartItems?.length > 0 ? (
              cartItems.map((item) => (
                <div key={item._id} className="w-full p-2">
                  <div className="bg-white flex gap-2 rounded-lg p-4 shadow-md">
                    {/* ...  ... */}
                    <div className="flex justify-center items-center h-32">
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="w-full   h-full   rounded-md mx-auto mb-2"
                      />
                    </div>
                    <div className="w-full mx-1 md:mx-2 h-32">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-lg font-bold mb-2">
                            {item.title?.slice(0, 30) + "..."}
                          </h3>
                          <p className="text-xs">
                            {item.description?.slice(0, 50) + "..."}
                          </p>
                        </div>
                        <h2 className="text-lg font-bold text-center mb-2">
                          ${(item.price - item.price * (item.discount / 100)).toFixed(2)}
                        </h2>
                      </div>
                      <div className="flex justify-between my-2">
                        <div>
                          <div className="flex text-[8px] md:text-[10px] my-2">
                            <b>Availability:</b>
                            <span className="text-gray-500 mx-1 md:mx-2">
                              {" "}
                              {item?.quantity > 0 ? (
                                <p className="text-green-500">In Stock</p>
                              ) : (
                                <p className="text-rose-500">Out of Stock</p>
                              )}
                            </span>
                          </div>
                          <div className="flex text-[8px] md:text-[10px] my-2">
                            <b>Lead Time:</b>
                            <span className="text-gray-500 mx-1 md:mx-2 ">3 weeks</span>
                          </div>
                          <div className="flex my-2 text-[8px] md:text-[10px]">
                            <b>Shipment:</b>
                            <span className="text-gray-500 mx-1 md:mx-2">1/3 weeks</span>
                          </div>
                        </div>
                        <div className="flex items-center p-2 rounded">
                          <button
                            onClick={() => decreaseQuantity(item, item?.quantity)}
                            className="text-blue-500 focus:outline-none text-[8px] md:text-[10px] border p-1"
                          >
                            -
                          </button>
                          <span className="mx-2 border p-1 text-[8px] md:text-[10px]">
                            {item?.quantity}
                          </span>
                          <button
                            onClick={() =>
                              increaseQuantity(item, item?.quantity, item?.stock)
                            }
                            className="text-blue-500 focus:outline-none border p-1 text-[8px] md:text-[10px]"
                          >
                            +
                          </button>

                          <button
                            onClick={() => handleRemoveItem(item._id, "cart")}
                            className="text-red-500 ml-2 text-[8px] md:text-[10px]"
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
              <Custom404
                title={"Empty Cart!"}
                desc={"No items found ! Add items to cart!"}
              />
            )}
          </TabPane>
          <TabPane tab="Wishlist" key="wishlist">
            <div>
              <Select
                defaultValue={"Phase"}
                className="w-full mb-3"
                onChange={(value) => setSelectedPhase(value)}
              >
                <Option value="Clearing">Phase 01: Clearing</Option>
                <Option value="Foundation">Phase 02: Foundation</Option>
                <Option value="Framing/Roofing">Phase 03: Framing/Roofing</Option>
                <Option value="MEP Roughing and Systems">
                  Phase 04: MEP Roughing and Systems
                </Option>
                <Option value="Sheetrock/Insulation">
                  Phase 05: Sheetrock/Insulation
                </Option>
                <Option value="Finishes">Phase 06: Finishes</Option>
                <Option value="Punchlist">Phase 07: Punchlist</Option>
                <Option value="Completed">Phase 07: Completed</Option>
              </Select>
            </div>
            {wishlistItems?.length > 0 ? (
              wishlistItems.map((item) => (
                <div key={item._id} className="w-full p-2">
                  <div className="bg-white flex gap-2 rounded-lg p-4 shadow-md">
                    {/* //  */}

                    <div className="w-full p-1 relative">
                      <button
                        onClick={() => addToCartHandler(item)}
                        className="block absolute top-1  right-2 m-1"
                      >
                        <AddShoppingCartOutlined className="text-rose-500" />
                      </button>

                      <div className="bg-white flex gap-2 rounded-lg p-4 shadow-md">
                        <div className="flex justify-center items-center h-32">
                          <img
                            src={item.images[0]}
                            alt={item.title}
                            className="w-full   h-full   rounded-md mx-auto mb-2"
                          />
                        </div>

                        <div className="w-full mx-1 md:mx-2 h-32">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="text-lg font-bold mb-2">
                                {item.title?.slice(0, 20) + "..."}
                              </h3>
                              <p className="text-xs">
                                {item.description?.slice(0, 50) + "..."}
                              </p>
                            </div>
                            <h2 className="text-lg font-bold text-center mb-2">
                              ${item.price}
                            </h2>
                          </div>
                          <div className="flex justify-between my-2">
                            <div>
                              <div className="flex text-[8px] md:text-[10px] my-2">
                                <b>Availability:</b>
                                <span className="text-gray-500 mx-1 md:mx-2">
                                  {item?.quantity > 0 ? (
                                    <p className="text-gray-900">In Stock</p>
                                  ) : (
                                    <p className="text-rose-500">Out of Stock</p>
                                  )}
                                </span>
                              </div>
                              <div className="flex text-[8px] md:text-[10px] my-2">
                                <b>Lead Time:</b>
                                <span className="text-gray-500 mx-1 md:mx-2 ">
                                  3 weeks
                                </span>
                              </div>
                              <div className="flex my-2 text-[8px] md:text-[10px]">
                                <b>Shipment:</b>
                                <span className="text-gray-500 mx-1 md:mx-2">
                                  1/3 weeks
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center  p-2 rounded">
                              <button
                                onClick={() =>
                                  decreaseWishlistQuantity(item, item?.quantity)
                                }
                                className="text-blue-500 focus:outline-none text-[8px] md:text-[10px] border p-1"
                              >
                                -
                              </button>
                              <span className="mx-2 border p-1 text-[8px] md:text-[10px]">
                                {item?.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  increaseWishlistQuantity(
                                    item,
                                    item?.quantity,
                                    item?.stock
                                  )
                                }
                                className="text-blue-500 focus:outline-none border p-1 text-[8px] md:text-[10px]"
                              >
                                +
                              </button>

                              <button
                                onClick={() => handleRemoveItem(item._id, "wishlist")}
                                className="text-red-500 ml-2 text-[8px] md:text-[10px]"
                              >
                                <DeleteOutlined />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <>
                {" "}
                <Custom404
                  title={"Empty Wishlist!"}
                  desc={"No items found ! Add items to Wishlist!"}
                />
              </>
            )}
          </TabPane>
        </Tabs>
      </div>
      {/* ... Right Side ... */}
      {activeTab === "cart" ? (
        <>
          <div className="w-full lg:w-1/2 lg:pl-4 mt-4 lg:mt-0">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-gray-700">Order Summary</h2>
              <Divider className="bg-gray-900" />
              <div className="flex justify-between mb-2">
                <span>Cart Subtotal</span>${totalAmount?.toFixed(2)}
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
                  ${(totalAmount + 135 + 2)?.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Ship To</span>
                <span className="text-[12px]">
                  {cartItems && cartItems[0]?.project?.address}
                </span>
              </div>
              <Divider />
              <button
                onClick={() => Router.push("/my_bag/shipping")}
                className="custom-btn h-full w-full"
              >
                Proceed to shipping
              </button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default BagComponent;
