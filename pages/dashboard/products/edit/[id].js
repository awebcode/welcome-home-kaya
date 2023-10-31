import DashboardLayout from '@/components/admin/dashboard/DashLayout'
import dynamic from 'next/dynamic'


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