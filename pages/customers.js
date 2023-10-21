import CustomersTable from '@/components/SideComponents/Customers'
import Head from 'next/head';
import React from 'react'

const customers = () => {
  return (
    <div>
      {" "}
      <Head>
        <title>Customers -WelcomeHomes -Kaya</title>
        <meta name="description" content="Customers -WelcomeHomes -Kaya" />
      </Head>
      <CustomersTable />
    </div>
  );
}

export default customers