import DashboardLayout from '@/components/admin/dashboard/DashLayout'
import CreateProjectForm from '@/components/projects/CreateNew'
import React from 'react'
import dynamic from "next/dynamic";

const BottomNav = dynamic(() => import("@/components/admin/BottomNav"), {
  ssr: false,
});
const NewProject = () => {
  return (
    <DashboardLayout>
      
        <BottomNav />
      
    </DashboardLayout>
  );
}

export default NewProject