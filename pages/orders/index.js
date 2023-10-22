const Orders = dynamic(() => import("@/components/orders/Orders"), {
    ssr:false
});
import dynamic from 'next/dynamic'
import React from 'react'

const App = () => {
  return (
    <div><Orders/></div>
  )
}

export default App