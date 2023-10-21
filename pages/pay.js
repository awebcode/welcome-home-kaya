import Pay from '@/components/SideComponents/Pay'
import Head from 'next/head';
import React from 'react'

const pay = () => {
  return (
    <div>
      {" "}
      <Head>
        <title>Pay -WelcomeHomes -Kaya</title>
        <meta name="description" content="Pay -WelcomeHomes -Kaya" />
      </Head>
      <Pay />
    </div>
  );
}

export default pay