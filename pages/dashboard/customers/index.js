import DashboardLayout from '@/components/admin/dashboard/DashLayout';
import AllUsers from '@/components/user/AllUsers';
import Head from 'next/head';
import React from 'react'

const customers = () => {
  return (
    <DashboardLayout>
      
      <Head>
        <title>Customers -WelcomeHomes</title>
        <meta name="description" content="Customers -WelcomeHomes" />
      </Head>
      <AllUsers />
    </DashboardLayout>
  );
}

export default customers