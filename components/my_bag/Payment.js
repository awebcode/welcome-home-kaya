import React, { Fragment, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Form, Input, Button, Divider } from "antd";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { createNewOrder } from "@/redux/actions/ordersActions";
import CheckoutSteps from "./CheackOutSteps";

const Payment = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const payBtn = useRef(null);

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.order);

  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };

  const onFinish = async (values) => {
    // Handle form submission here
    // You can access form values via `values`
    // e.g., values.cardNumber, values.expiryDate, values.cvc

    try {
      // Handle submission logic here

      // Create a new order
      dispatch(createNewOrder(order));

      router.push("/my_bag/success");
      localStorage.removeItem("cartItems");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <Fragment>
      <CheckoutSteps activeStep={2} />
      <div className="max-w-md mx-auto p-6 min-h-screen">
        <Form
          layout="vertical"
          size="large"
          onFinish={onFinish}
          className="shadow-lg rounded-md p-6"
        >
          <Typography className="mb-4 text-3xl text-gray-900 text-center">
            Card Info
          </Typography>
          <Divider className="bg-gray-300" />
          <Form.Item
            name="cardNumber"
            rules={[
              {
                required: true,
                message: "Please enter your card number",
              },
            ]}
          >
            <Input
              placeholder="Card Number"
              className="w-full py-2 px-3 border border-green-400 text-gray-700"
            />
          </Form.Item>
          <Form.Item
            name="expiryDate"
            rules={[
              {
                required: true,
                message: "Please enter the expiry date",
              },
            ]}
          >
            <Input
              placeholder="Expiry Date"
              className="w-full py-2 px-3 border border-green-400 text-gray-700"
            />
          </Form.Item>
          <Form.Item
            name="cvv"
            rules={[
              {
                required: true,
                message: "Please enter the CVV",
              },
            ]}
          >
            <Input
              placeholder="CVV"
              className="w-full py-2 px-3 border border-green-400 text-gray-700"
            />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full py-2 font-semibold bg-green-500 hover:bg-green-600"
          >
            {`Pay - $${orderInfo && orderInfo.totalPrice}`}
          </Button>

          <Button
            type="primary"
             onClick={()=>router.back()}
            className="w-full my-2 font-semibold bg-green-500 hover:bg-green-600"
          >
            Back
          </Button>
        </Form>
      </div>
    </Fragment>
  );
};

export default Payment;
