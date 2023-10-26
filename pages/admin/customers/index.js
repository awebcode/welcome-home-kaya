import AllUsers from '@/components/user/AllUsers';
import Head from 'next/head';
import React from 'react'

const customers = () => {
  return (
    <div>
      
      <Head>
        <title>Customers -WelcomeHomes</title>
        <meta name="description" content="Customers -WelcomeHomes" />
      </Head>
      <AllUsers />
    </div>
  );
}

export default customers