import dynamic from 'next/dynamic'
import React from 'react'
const Dashboard = dynamic(() => import("@/components/admin/dashboard/Dashboard"),{
    ssr:false
});
const index = () => {
  return (
    <div><Dashboard/></div>
  )
}

export default index