import React from "react";
import { Form, Input, Button } from "antd";

const Pay = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8  min-h-screen border-gray-300 rounded-lg ">
      <div className="shadow-lg p-7">
        <h2 className="text-3xl mb-4 font-bold text-gray-900">Bank Card</h2>
        <Form
          layout="vertical"
          size="large"
          name="bankCardForm"
          initialValues={{ remember: true }}
          cl
          onFinish={onFinish}
        >
          <Form.Item
            name="cardNumber"
            label="Card Number"
            rules={[{ required: true, message: "Please enter your card number!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="expiryDate"
            label="Expiry Date"
            rules={[{ required: true, message: "Please enter the expiry date!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="cvv"
            label="CVV"
            rules={[{ required: true, message: "Please enter the CVV!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>

        <div className="my-4 border-t border-gray-300"></div>

        {/* Additional Card Content */}
      </div>
    </div>
  );
};

export default Pay;
