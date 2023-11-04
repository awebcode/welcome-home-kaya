import { useEffect, useState } from "react";
import { Form, Input, Button, Divider } from "antd";
import Link from "next/link";
import { AvatarGenerator } from "random-avatar-generator";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearErrors, loadUser, register } from "@/redux/actions/userActions";
import { useRouter } from "next/router";
const RegisterForm = () => {
  const router=useRouter()
  const dispatch = useDispatch();
  const { user, loading, isAuthenticated, error, isRegistered } = useSelector((u) => u.user);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const generator = new AvatarGenerator();

    // Simply get a random avatar
    const randomAvatarUrl = generator.generateRandomAvatar();
    // Pass avatar URL in the values object
    const data = { ...values, avatar: randomAvatarUrl };
    // Dispatch registration action
    dispatch(register(data));
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/user/profile");
    }
    if (isRegistered) {
      toast.success("Yeah! Signup successfull!");
      dispatch(clearErrors());
    }

    if (error) {
      toast.warning(error);
      dispatch(clearErrors())
    }
  }, [dispatch, router, isAuthenticated, isRegistered, error]);
  return (
    <div className="container w-full min-h-[86vh] px-2  md:px-44 md:m-5 flex justify-center items-center">
      <Form
        form={form}
        layout="vertical"
        className="w-full md:w-[50%] shadow-2xl rounded-2xl p-3 md:p-6"
        onFinish={onFinish}
        size="large"
      >
        <h2 className="text-xl md:text-3xl text-center text-gray-700 mb-4 my-4">
          Greetings From WelcomeHomes👋
        </h2>
        <Divider className="bg-gray-300" />
        <h2 className="text-xl md:text-4xl text-center text-gray-900 mb-4 my-4">
          Signup | Create an account.
        </h2>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please enter  username!" }]}
        >
          <Input
            placeholder="Enter your username."
            className="w-full bg-white rounded border  border-gray-400 focus:border-green-400 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please enter your email!" }]}
        >
          <Input
            placeholder="Enter your email."
            className="w-full bg-white rounded border  border-gray-400 focus:border-green-400 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter  password!" }]}
        >
          <Input.Password
            placeholder="Enter  password"
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
            {loading ? "Account creating..." : "Signup"}
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
