import React from 'react'

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ project }) => {
  return (
    <div className='mb-8 flex flex-wrap lg:justify-center'>
      <div className='w-full lg:w-1/4'>
        <img
          src={project.image}
          width={150}
          height={150}
          alt={project.title}
          className='mb-6 rounded'
        />
      </div>
      <div className='w-full max-w-xl lg:w-3/4'>
        <h6 className='mb-2 font-semibold'>{project.title}</h6>
        <p className='mb-4 text-neutral-400'>{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className='rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
