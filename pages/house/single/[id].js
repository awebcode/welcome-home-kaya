
// import SingleHouse from '@/components/house_preview/SingleHouse'

import dynamic from 'next/dynamic'
const SingleMain = dynamic(() => import("@/components/house_preview/Single_main"), {
   ssr:false
 });
import React from 'react'


const Home = () => {
  return (
    <div><SingleMain/></div>
  )
}

export default Home