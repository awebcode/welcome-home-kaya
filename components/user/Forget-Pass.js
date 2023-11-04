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
    <div className="container min-h-[86vh] w-full px-2  md:px-44 md:m-5 flex justify-center items-center">
      <Form
        form={form}
        layout="vertical"
        className="w-full md:w-[50%] shadow-2xl rounded-2xl p-3 md:p-6"
        onFinish={onFinish}
        size="large"
      >
        <h2 className="text-2xl md:text-4xl text-center text-gray-900 mb-4 my-4">
          Sent a email to reset.
        </h2>
        <Divider />
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input
            placeholder="Enter your email address"
            className="w-full bg-white rounded border  border-gray-400 focus:border-green-400 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </Form.Item>

        <Form.Item>
          <Button
            className="custom-btn w-full h-full"
            htmlType="submit"
            loading={loading}
            style={{ padding: "14px", height: "100%" }}
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
