import { useEffect, useState } from "react";
import { Form, Input,  Divider, Button } from "antd";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, loadUser, login } from "@/redux/actions/userActions";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const LoginForm = () => {
  const router=useRouter()
  const dispatch = useDispatch();
  const { user, loading, isAuthenticated, error, isRegistered } = useSelector(
    (u) => u.user
  );
  const [form] = Form.useForm();
  

  const onFinish = (values) => {
    dispatch(login(values));

    
  };
  
  

   useEffect(() => {
     const { shipping } = router.query;

     if (isAuthenticated) {
       if (shipping) {
         router.push("/my_bag");
       } else {
         router.push("/user/profile");
       }
     }

     if (isRegistered) {
       toast.success("Yea! Login successfull!");
       dispatch(clearErrors());
     }

     if (error) {
       toast.warning(error);
       dispatch(clearErrors());
     }
   }, [dispatch, router, isAuthenticated, isRegistered, error]);


  return (
    <div className="container min-h-[86vh] w-full px-2  md:px-44 md:m-5 flex justify-center items-center">
      <Form
        form={form}
        layout="vertical"
        className="w-full md:w-[50%] shadow-2xl rounded-2xl p-3 md:p-6"
        onFinish={onFinish}
        
        size="large"
      >
        <h2 className="text-2xl md:text-3xl text-center text-gray-700 mb-4 my-4">
          Welcome Back👋
        </h2>
        <Divider className="bg-gray-300" />
        <h2 className="text-2xl md:text-4xl text-center text-gray-900 mb-4 my-4">
          Signin to your account.
        </h2>

        <Form.Item
          label="Username || Email"
          name="email"
          rules={[{ required: true, message: "Please enter your username or email!" }]}
        >
          <Input
            placeholder="Enter your username or email"
            className="w-full bg-white rounded border  border-gray-400 focus:border-green-400 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password
            placeholder="Enter your password"
            className="w-full bg-white rounded border  border-gray-400 focus:border-green-400 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </Form.Item>

        <Form.Item>
          <Button
            className="custom-btn w-full h-full p-12 "
           
            loading={loading}
            htmlType="submit"
            style={{padding:"14px",height:"100%"}}
          >
            Login
          </Button>
        </Form.Item>
        <Form.Item className="flex justify-between items-center mx-2 p-2">
          <span>
            Don&apos;t have an account?{" "}
            <Link className="text-blue-500" href={"/user/register"}>
              Signup
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

export default LoginForm;
