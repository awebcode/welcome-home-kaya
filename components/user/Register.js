import { useState } from "react";
import { Form, Input, Button, Divider } from "antd";
import Link from "next/link";

const RegisterForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);

    // Simulate API request
    setTimeout(() => {
      console.log("Received registration values:", values);
      setLoading(false);
      form.resetFields();
    }, 1000);
  };

  return (
    <div className="container w-full px-2 m-2 md:px-44 md:m-5 flex justify-center items-center">
      <Form
        form={form}
        layout="vertical"
        className="w-full md:w-[70%]"
        onFinish={onFinish}
        labelCol={{ span: 8 }}
        size="large"
      >
        <h2 className="text-xl md:text-3xl text-center font-bold mb-4 my-4">
          Greetings From WelcomeHomes👋
        </h2>
        <Divider className="bg-gray-300" />
        <h2 className="text-xl md:text-3xl text-center font-bold mb-4 my-4">
          Signup | Create your account.
        </h2>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please enter  username!" }]}
        >
          <Input placeholder="Enter your username." />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please enter your email!" }]}
        >
          <Input placeholder="Enter your email." />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter  password!" }]}
        >
          <Input.Password placeholder="Enter  password" />
        </Form.Item>

        <Form.Item>
          <Button
            className="custom-btn w-full h-full"
            htmlType="submit"
            loading={loading}
          >
            Register
          </Button>
        </Form.Item>
        <Form.Item className="flex justify-between items-center m-2 p-2">
          <span>
            Already have an account?{" "}
            <Link className="text-blue-500" href={"/user/login"}>
              Signin
            </Link>
          </span>
          <span className="mx-2">
            Forgot your password?{" "}
            <Link className="text-blue-500" href={"/user/forget-password"}>
              Reset-password
            </Link>
          </span>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterForm;
