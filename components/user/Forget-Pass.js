import { Form, Input, Button, Divider } from "antd";
import Link from "next/link";
import { forgetPassword, resetUserState } from "@/redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useEffect } from "react";

const ForgetPasswordForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [form] = Form.useForm();
  const { loading, isSentEmail, error } = useSelector((state) => state.user);

  const onFinish = (values) => {
    dispatch(forgetPassword(values.email))
  };
useEffect(() => {
  if (isSentEmail) {
    toast.success("Email  sent successfully! Plese check your email");

    
  }
  if (error) {
    toast.error(error);

    dispatch(resetUserState());
  }
}, [dispatch, router, error, isSentEmail]);
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
          Sent a email to reset
        </h2>
        <Divider/>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input placeholder="Enter your email address"/>
        </Form.Item>

        <Form.Item>
          <Button
            className="custom-btn w-full h-full"
            htmlType="submit"
            loading={loading}
          >
            Sent reset email
          </Button>
        </Form.Item>
        <Form.Item className="flex justify-between items-center m-2 p-2">
          <span>
            Remember password?{" "}
            <Link className="text-blue-500" href={"/user/login"}>
              Signin
            </Link>
          </span>
          <span className="mx-2">
            Don&apos;t have an account?{" "}
            <Link className="text-blue-500" href={"/user/register"}>
              Signup
            </Link>
          </span>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ForgetPasswordForm;
