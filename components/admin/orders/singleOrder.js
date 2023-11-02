import React, { useEffect } from "react";
import { Divider, Tag } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getSingleOrder } from "@/redux/actions/ordersActions";
import { useRouter } from "next/router";

const SingleOrder = () => {
  const { id } = useRouter().query;
  const dispatch = useDispatch();
  const { order } = useSelector((s) => s.order);
  useEffect(() => {
    if (id) {
      dispatch(getSingleOrder(id));
    }
  }, [dispatch, id]);

  return (
    <div className="flex justify-center items-center w-full bg-white container mx-auto  p-8 m-12">
      <div className=" w-full p-5 rounded-lg shadow-lg mb-4">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          <b>Project:</b> {order?.projectName}
        </h2>
        <p className="mb-2 text-gray-900">
          <b>Address:</b> {order?.address}
        </p>
        <p className="mb-2 text-gray-900">
          <b>HomeType:</b> {order?.homeType}
        </p>

        <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">
          Shipping Information
        </h3>
        <p className="text-gray-900">{order?.shippingInfo.address}</p>
        <p className="text-gray-900">
          {order?.shippingInfo.city}, {order?.shippingInfo.state},{" "}
          {order?.shippingInfo.country} - {order?.shippingInfo.zipCode}
        </p>
        <p className="text-gray-900">
          <b>Phone:</b> {order?.shippingInfo.phoneNo}
        </p>

        <hr className="my-6 border-t border-gray-300" />

        <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Order Items</h3>
        {order?.orderItems.map((item, index) => (
          <div key={index} className="flex justify-between items-center mb-4">
            <div>
              <p className=" text-gray-900 text-xl md:text-3xl">
               
                {item.title}
              </p>
              <p className="text-gray-900">
                <b>Item Price:</b> ${item.price}
              </p>
              <p className="text-gray-900">
                <b>Item Quantity:</b> {item.quantity}
              </p>
            </div>
            <div className="w-32 h-32">
              {item.images && item.images.length > 0 && (
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-md"
                />
              )}
            </div>
          </div>
        ))}

        <hr className="my-6 border-t border-gray-300" />

        <div className="flex justify-between">
          <div>
            <p className="font-bold text-gray-900">Items Price:</p>
            <p className="font-bold text-gray-900">Tax Price:</p>
            <p className="font-bold text-gray-900">Shipping Price:</p>
            <p className="font-bold text-3xl text-gray-900">Total Price:</p>
          </div>
          <div>
            <p className="text-gray-900">${order?.itemsPrice}</p>
            <p className="text-gray-900">${order?.taxPrice}</p>
            <p className="text-gray-900">${order?.shippingPrice}</p>
            <p className="text-3xl text-gray-900">${order?.totalPrice}</p>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <div>
            <p className="font-bold text-gray-900">Paid At:</p>
            <p className="font-bold text-gray-900">Order Status:</p>
            {order?.deliveredAt && (
              <p className="font-bold text-gray-900">Delivered At:</p>
            )}
          </div>
          <div>
            <p className="text-gray-900">{moment(order?.paidAt).format("lll")}</p>
            <Tag
              size="large"
              className="text-xl m-2"
              color={
                order?.orderStatus === "In Progress"
                  ? "orange"
                  : order?.orderStatus === "Delivered"
                  ? "green"
                  : order?.orderStatus === "Cancelled"
                  ? "red"
                  : ""
              }
            >
              {order?.orderStatus}
            </Tag>

            {order?.deliveredAt && (
              <p className="text-gray-900">{moment(order?.deliveredAt).format("lll")}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;
