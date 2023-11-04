import React, { Fragment, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Form, Input, Button, Divider } from "antd";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { clearOrderClearError, createNewOrder, resetOrderState } from "@/redux/actions/ordersActions";
import CheckoutSteps from "./CheackOutSteps";

const Payment = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const payBtn = useRef(null);

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { error, createLoading,isCreated } = useSelector((state) => state.order);

  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const projectDetails = JSON.parse(localStorage.getItem("projectDetails"));
  const order = {
    projectName: projectDetails?.projectName,
    address: projectDetails?.address,
    homeType: projectDetails?.homeType,
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo?.subtotal,
    taxPrice: orderInfo?.tax,
    shippingPrice: orderInfo?.shippingCharges,
    totalPrice: orderInfo?.totalPrice,
  };

  const onFinish = async (values) => {
    // Handle form submission here
    // You can access form values via `values`
    // e.g., values.cardNumber, values.expiryDate, values.cvc

    try {
      // Handle submission logic here

      // Create a new order
      dispatch(createNewOrder(order));

     
      
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
useEffect(() => {
  if (isCreated) {
     toast.success("Order Submitted Success!")
    router.push("/my_bag/success");
    if (typeof window !== "undefined") {
      localStorage.removeItem("cartItems");
      localStorage.removeItem("totalPrice");
      localStorage.removeItem("shippingInfo");
      localStorage.removeItem("projectDetails");
      window.location.reload()
     }
     dispatch(resetOrderState())
    
  }
   if (error) {
     toast.error(error);
     dispatch(clearOrderClearError());
   }
}, [isCreated,error,router])

  return (
    <Fragment>
      <CheckoutSteps activeStep={2} />
      <div className="max-w-md mx-auto p-2 md:p-8 min-h-screen ">
        <Form
          layout="vertical"
          size="large"
          onFinish={onFinish}
          className=" p-2 md:p-9 rounded-lg shadow-sm md:shadow-2xl"
        >
          <Typography className="mb-4 text-3xl text-gray-900 text-center">
            Card Info
          </Typography>
          <Divider className="bg-gray-300" />
          <Form.Item
            label="Cart Number"
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
            label="Expiry Date"
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
            label="CVV"
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
            loading={createLoading}
            type="primary"
            htmlType="submit"
            className="w-full py-2 font-semibold bg-green-500 hover:bg-green-600"
          >
            {createLoading
              ? "Order Submitting..."
              : `Pay - $${orderInfo && orderInfo.totalPrice}`}
          </Button>

          <Button
            type="primary"
            onClick={() => router.back()}
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
