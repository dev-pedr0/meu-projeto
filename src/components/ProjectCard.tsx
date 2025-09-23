import React from 'react'
import { Repo } from './Projects';

type Props = {
    repo: Repo;
}

const ProjectCard = ({repo}: Props) => {
  return (
    <div key={repo.id} className='mb-5 flex flex-col items-center layout !rounded-4xl max-w-2xs'>
        <p className='text-center text-sm mb-2'>{repo.name.toUpperCase()}</p>
        <img src={repo.owner.avatar_url} alt="" className='max-w-3xs rounded-4xl'/>
        <a href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-semibold hover:underlines"
        >
            Acessar
        </a>
    </div>
  )
}

export default ProjectCard;