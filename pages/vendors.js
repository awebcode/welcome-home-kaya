import VendorsComponent from '@/components/SideComponents/Vendor'
import Head from 'next/head'
import React from 'react'

const vendors = () => {
  return (
    <div>
      <Head>
        <title>Vendors -WelcomeHomes -Kaya</title>
        <meta name="description" content="Vendors -WelcomeHomes -Kaya" />
      </Head>
      <VendorsComponent />
    </div>
  );
}

export default vendors