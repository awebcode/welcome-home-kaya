import DashboardLayout from '@/components/admin/dashboard/DashLayout'
import CreateProjectForm from '@/components/projects/CreateNew'
import React from 'react'

const NewProject = () => {
  return (
    <DashboardLayout>
      <CreateProjectForm />
    </DashboardLayout>
  );
}

export default NewProject