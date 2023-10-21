const SettingsComponent = dynamic(() => import("@/components/SideComponents/Settings"), {
  ssr:false
});
import dynamic from 'next/dynamic'
import Head from 'next/head';
import React from 'react'

const settings = () => {
  return (
    <div>
      {" "}
      <Head>
        <title>Settings -WelcomeHomes -Kaya</title>
        <meta name="description" content="Settings -WelcomeHomes -Kaya" />
      </Head>
      <SettingsComponent />
    </div>
  );
}

export default settings