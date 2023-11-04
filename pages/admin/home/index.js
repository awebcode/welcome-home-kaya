import Loader from '@/components/Loader';
import dynamic from 'next/dynamic'

const BottomNav = dynamic(() => import("@/components/admin/BottomNav"), {
  ssr: false,
  loading: () => <Loader />,
});
import React from 'react'

const Home = () => {
  return (
    <div><BottomNav/></div>
  )
}

export default Home