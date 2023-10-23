import dynamic from 'next/dynamic'

const UpdateInfoForm = dynamic(() => import("@/components/user/UpdateUser"), {
  ssr:false
});
import React from 'react'

const EditUserRoute = () => {
  return (
    <div><UpdateInfoForm/></div>
  )
}

export default EditUserRoute