import BagComponent from '@/components/SideComponents/BagComponent'
import Head from 'next/head';
import React from 'react'

const my_bag = () => {
  return (
    <h1>
      {" "}
      <Head>
        <title>Cart | Bag -WelcomeHomes -Kaya</title>
        <meta name="description" content="Cart | Bag -WelcomeHomes -Kaya" />
      </Head>
      <BagComponent />
    </h1>
  );
}

export default my_bag