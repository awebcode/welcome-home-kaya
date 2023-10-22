import ForgetPasswordForm from '@/components/user/Forget-Pass'
import Head from 'next/head';
import React from 'react'

const ForgetPassRoute = () => {
  return (
    <div>
      <Head>
        <title>Reset-Password  -Welcome Homes</title>
        <meta name="description" content="Reset-Password -Welcome Homes" />
      </Head>
      <ForgetPasswordForm />
    </div>
  );
}

export default ForgetPassRoute