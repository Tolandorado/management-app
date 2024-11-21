import { Project } from '@/src/state/api'
import React from 'react'

type Props = {
    project: Project
}

const ProjectCard = ({project}: Props) => {
  return (
    <div className='rounded border-none p-4 mb-3 shadow dark:bg-dark-secondary dark:text-white'>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <p>Start Date: {project.startDate}</p>
        <p>End Date: {project.endDate}</p>
    </div>
  )
}

export default ProjectCard