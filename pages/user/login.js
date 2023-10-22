import LoginForm from "@/components/user/Login";
import Head from "next/head";
import React from "react";

const LoginRoute = () => {
  return (
    <div>
      <Head>
        <title>Login | Signin -Welcome Homes</title>
        <meta name="description" content="Login | Signin -Welcome Homes" />
      </Head>
      <LoginForm />
    </div>
  );
};

export default LoginRoute;
