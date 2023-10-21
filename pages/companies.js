import CompaniesComponent from '@/components/SideComponents/Companies'
import Head from 'next/head';
import React from 'react'

const companies = () => {
  return (
    <div>
      {" "}
      <Head>
        <title>Companies -WelcomeHomes -Kaya</title>
        <meta name="description" content="Companies -WelcomeHomes -Kaya" />
      </Head>
      <CompaniesComponent />
    </div>
  );
}

export default companies