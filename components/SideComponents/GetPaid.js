import React from "react";
import {  CheckCircleOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";
import { BsArrowRight } from "react-icons/bs";

const GetPaidComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Result
        icon={<CheckCircleOutlined style={{ color: "#52c41a", fontSize: "48px" }} />}
        title="Payment Received"
        subTitle="You have successfully received the payment."
        extra={
          <Button className="custom-btn w-full h-full" type="primary">
            Continue <BsArrowRight style={{ color: "white",display:"inline",margin:"0px 4px" }} />
          </Button>
        }
      />
      
      
    </div>
  );
};

export default GetPaidComponent;
