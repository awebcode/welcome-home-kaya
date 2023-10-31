
import dynamic from 'next/dynamic'
import React from 'react'
const HomeProjects = dynamic(() => import("@/components/projects/home/HomeProjects"),{
  ssr:false
});
const ProjectsRoute = () => {
  return (
    <div><HomeProjects/></div>
  )
}

export default ProjectsRoute