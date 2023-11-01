import dynamic from 'next/dynamic';

const BagComponent = dynamic(() => import("@/components/SideComponents/BagComponent"), {
  ssr:false
});
import Head from 'next/head';
import React from 'react'

const my_bag = () => {
  return (
    <h1>
      {" "}
      <Head>
        <title>Cart | Wishlist Items -WelcomeHomes</title>
        <meta name="description" content="Cart | Wishlist Items -WelcomeHomes" />
      </Head>
      <BagComponent />
    </h1>
  );
}

export default my_bag