import { useState } from "react";
import { Form, Input, Button } from "antd";

const UpdateInfoForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);

    // Simulate API request
    setTimeout(() => {
      console.log("Received updated values:", values);
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
        <h2 className="text-2xl md:text-5xl text-center font-bold mb-4 my-4">
          Update Information
        </h2>
        <Form.Item
          label="New Username"
          name="username"
          rules={[{ required: true, message: "Please enter a new username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="New Password"
          name="password"
          rules={[{ required: true, message: "Please enter a new password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button
            className="custom-btn w-full h-full"
            type="primary"
            htmlType="submit"
            loading={loading}
          >
            Update Information
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateInfoForm;
