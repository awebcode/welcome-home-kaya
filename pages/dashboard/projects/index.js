import DashboardLayout from '@/components/admin/dashboard/DashLayout';
import MapTopbar from '@/components/mapbox/MapTopbar';
import dynamic from 'next/dynamic';
import React from 'react'

const Projects = dynamic(() => import("@/components/projects/Projects"), {
  ssr:false
})
const App = () => {
  return (
    <DashboardLayout>
      {/* <MapTopbar /> */}
      <Projects />
    </DashboardLayout>
  );
}

export default App