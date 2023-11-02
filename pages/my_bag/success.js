import React from "react";
import { Button, Result } from "antd";
import  Link  from "next/link";
import { useRouter } from "next/router";

const OrderSuccessPage = () => {
    const router=useRouter()
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Result
        status="success"
        title="Your order has been successfully placed!"
        extra={[
          <Button type="primary" key="go-to-orders">
            <span onClick={()=>router.back()}>Go Back</span>
          </Button>,
          <Button type="primary" key="go-to-orders">
            <Link href="/orders/myorders">Go to Orders</Link>
          </Button>,
        ]}
      />
    </div>
  );
};

export default OrderSuccessPage;
