import DashboardLayout from '@/components/admin/dashboard/DashLayout'
import dynamic from 'next/dynamic'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// Import Swiper styles

// import required modules


const UpdateProduct = dynamic(() =>
  import("@/components/admin/dashboard/product/UpdateProduct",{ssr:false})
);
import React from 'react'

const EditProduct = () => {
  return (
    <DashboardLayout><UpdateProduct/></DashboardLayout>
  )
}

export default EditProduct