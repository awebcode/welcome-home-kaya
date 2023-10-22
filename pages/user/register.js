import RegisterForm from '@/components/user/Register'
import Head from 'next/head';
import React from 'react'

const RegisterRoute = () => {
  return (
    <div>
      {" "}
      <Head>
        <title>Register | Signup -Welcome Homes</title>
        <meta name="description" content="Register | Signup -Welcome Homes" />
      </Head>
      <RegisterForm />
    </div>
  );
}

export default RegisterRoute