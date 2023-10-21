import React from "react";
import { Form, Input, Button, Select } from "antd";
import { useRouter } from "next/router";

const { Option } = Select;

const CheckoutPage = () => {
  const router = useRouter();

  const onFinish = (values) => {
    // Add your checkout logic here
    console.log(values);
    router.push("/checkout/checkoutSuccess");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Checkout</h1>

      <Form
        name="checkoutForm"
        initialValues={{
          paymentMethod: "creditCard",
        }}
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please enter your first name",
            },
          ]}
        >
          <Input placeholder="First Name" />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[
            {
              required: true,
              message: "Please enter your last name",
            },
          ]}
        >
          <Input placeholder="Last Name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              message: "Please enter a valid email",
            },
            {
              required: true,
              message: "Please enter your email",
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: "Please enter your address",
            },
          ]}
        >
          <Input placeholder="Address" />
        </Form.Item>

        <Form.Item
          label="City"
          name="city"
          rules={[
            {
              required: true,
              message: "Please enter your city",
            },
          ]}
        >
          <Input placeholder="City" />
        </Form.Item>

        <Form.Item
          label="ZIP Code"
          name="zip"
          rules={[
            {
              required: true,
              message: "Please enter your ZIP code",
            },
          ]}
        >
          <Input placeholder="ZIP Code" />
        </Form.Item>

        <Form.Item
          label="Payment Method"
          name="paymentMethod"
          rules={[
            {
              required: true,
              message: "Please select a payment method",
            },
          ]}
        >
          <Select>
            <Option value="creditCard">Credit Card</Option>
            <Option value="paypal">PayPal</Option>
            <Option value="applePay">Apple Pay</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="custom-btn w-full h-full">
            Place Order
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CheckoutPage;
