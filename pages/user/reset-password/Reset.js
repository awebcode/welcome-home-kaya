import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { resetPassword, resetUserState } from "@/redux/actions/userActions";
import Head from "next/head";

const ResetPasswordVerify = ({ token }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  
  const [form] = Form.useForm();
  const { loading, isResetPassword, error } = useSelector((state) => state.user);

  const onFinish = async (values) => {
    dispatch(resetPassword(values, token));
  };

  useEffect(() => {
    if (isResetPassword) {
      toast.success("Password reset successfully!");

      router.push("/user/login");
    }
    if (error) {
      toast.error(error);

      dispatch(resetUserState());
    }
  }, [dispatch, router, error, isResetPassword]);

  return (
    <>
      <Head>
<title>Set a new password</title>

      </Head>

      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
          <h2 className="text-xl md:text-3xl font-semibold mb-4 text-center">
            Set New Password
          </h2>
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="New Password"
              name="newPassword"
              rules={[
                { required: true, message: "Please enter a password." },
                { min: 6, message: "Password must be at least 6 characters." },
              ]}
            >
              <Input.Password placeholder="Plese enter newpassword" />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              dependencies={["newPassword"]}
              rules={[
                { required: true, message: "Please confirm your new password" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject("The two passwords do not match");
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Please confirm your new password" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                className="w-full bg-blue-500 hover:bg-blue-600"
              >
                Reset Password
              </Button>
            </Form.Item>
            <Form.Item className="text-center">
              Sent a new reset token? 
              <Link className="text-blue-500 mx-2" href="/user/forget-password">
                 sent new token
              </Link>
            </Form.Item>
            <Form.Item className="text-center">
              Remembered your password?{" "}
              <Link className="text-blue-500" href="/user/login">
                login
              </Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordVerify;
