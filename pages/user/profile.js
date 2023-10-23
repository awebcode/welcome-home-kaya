
import dynamic from 'next/dynamic';
import React from 'react'
const Profile = dynamic(() => import("@/components/user/ProfileCompoent"), {
  ssr:false
});
const profile = () => {
  return (
    <div><Profile/></div>
  )
}

export default profile