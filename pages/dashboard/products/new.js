import DashboardLayout from '@/components/admin/dashboard/DashLayout'
import NewProduct from '@/components/admin/dashboard/product/NewProduct'
import React from 'react'

const AddProductRoute = () => {
  return (
      <DashboardLayout>
          
          <NewProduct/>
    </DashboardLayout>
  )
}

export default AddProductRoute