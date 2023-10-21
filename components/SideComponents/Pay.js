import React from "react";
import { Form, Input, Button } from "antd";

const Pay = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  return (
    <div className="flex justify-center items-center h-screen w-[100vw]">
      <Form
        layout="vertical"
        name="payForm"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        className="bg-white p-8 border rounded-lg md:w-1/2 lg:w-1/3 shadow-md w-full"
      >
        <Form.Item
          label="Card Number"
          name="cardNumber"
          rules={[{ required: true, message: "Please input your card number!" }]}
        >
          <Input
            placeholder="1234 5678 9012 3456"
            style={{ border: "1px solid green" }}
          />
        </Form.Item>

        <Form.Item
          label="Name on Card"
          name="nameOnCard"
          rules={[{ required: true, message: "Please input the name on your card!" }]}
        >
          <Input placeholder="John Doe" style={{ border: "1px solid green" }} />
        </Form.Item>

        <Form.Item
          label="CVV"
          name="cvv"
          rules={[{ required: true, message: "Please input your CVV!" }]}
        >
          <Input placeholder="123" style={{ border: "1px solid green" }} />
        </Form.Item>

        <Form.Item
          label="Expiration Date"
          name="expirationDate"
          rules={[{ required: true, message: "Please input the expiration date!" }]}
        >
          <Input placeholder="MM/YYYY" style={{ border: "1px solid green" }} />
        </Form.Item>

        <Form.Item>
          <Button  htmlType="submit" className="custom-btn w-full h-full">
            Pay
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Pay;
