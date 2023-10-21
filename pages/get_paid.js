import GetPaidComponent from '@/components/SideComponents/GetPaid'
import Head from 'next/head';
import React from 'react'

const get_paid = () => {
  return (
    <div>
      {" "}
      <Head>
        <title>Payment Success -WelcomeHomes -Kaya</title>
        <meta name="description" content="Payment Success -WelcomeHomes -Kaya" />
      </Head>
      <GetPaidComponent />
    </div>
  );
}

export default get_paid