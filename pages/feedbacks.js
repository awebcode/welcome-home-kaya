import FeedbackComponent from '@/components/SideComponents/Feedbacks'
import Head from 'next/head';
import React from 'react'

const feedbacks = () => {
  return (
    <div>
      {" "}
      <Head>
        <title>Feedbacks -WelcomeHomes -Kaya</title>
        <meta name="description" content="Feedbacks -WelcomeHomes -Kaya" />
      </Head>
      <FeedbackComponent />
    </div>
  );
}

export default feedbacks