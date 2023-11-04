import Loader from '@/components/Loader';
import dynamic from 'next/dynamic'


const CustomizeHouse = dynamic(
  () => import("@/components/house_preview/customization/CustomizeHouse"),
  {
    ssr: false,
    loading: () => <Loader />,
  }
);
import React from 'react'

const index = () => {
  return (
    <div className='m-3'><CustomizeHouse/></div>
  )
}

export default index