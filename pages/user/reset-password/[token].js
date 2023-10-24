import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

import Head from "next/head";
// import ResetPasswordVerify from "./Verify";

import dynamic from "next/dynamic";
// import ReferralComponent from '@/components/me/invite/MyTeam'
const ResetPasswordVerify = dynamic(() => import("./Reset"), {
  // loading: () => <Loader />,
  ssr: false,
});
const ResetPassword = () => {
  const router = useRouter();
  const {  token } = router.query;

  return (
    <>
      <Head>
        <title>Set New Password - WelcomeHomes</title>
        <meta
          name="description"
          content="Set New Password - WelcomeHomes! Follow the steps to securely regain access to your account. Ensure a hassle-free password reset process with WelcomeHomes's user-friendly system."
        />
        <meta
          name="og:description"
          content="Set New Password - WelcomeHomes! Follow the steps to securely regain access to your account. Ensure a hassle-free password reset process with WelcomeHomes's user-friendly system."
        />
      </Head>
      <div>
        <ResetPasswordVerify token={token} />
      </div>
    </>
  );
};

export default ResetPassword;
