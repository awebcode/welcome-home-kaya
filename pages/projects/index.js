import MapTopbar from '@/components/mapbox/MapTopbar';
import dynamic from 'next/dynamic';
import React from 'react'

const Projects = dynamic(() => import("@/components/projects/Projects"), {
  ssr:false
})
const App = () => {
  return (
    <div>
      {/* <MapTopbar /> */}
      <Projects />
    </div>
  );
}

export default App