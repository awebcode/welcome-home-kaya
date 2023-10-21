import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const CheckoutSuccessPage = () => {
     const router = useRouter();
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md text-center">
      <CheckCircleOutlined style={{ fontSize: "4rem", color: "#52c41a" }} />
      <h1 className="text-2xl font-bold mt-4 mb-2">Order Placed Successfully!</h1>
      <p className="text-gray-700 mb-4">
        Thank you for your purchase. You will receive an email confirmation shortly.
      </p>
      <button onClick={()=>router.push("/")}  className="custom-btn w-full h-full">Continue Shopping</button>
    </div>
  );
};

export default CheckoutSuccessPage;
