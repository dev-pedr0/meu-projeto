"use client";

import React from 'react';
import { useEffect, useState } from "react";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  owner: {
    avatar_url: string;
  };
};

const Projects = () => {
    const [repos, setRepos] = useState<Repo[]>([]);

    useEffect(() => {
        fetch("https://api.github.com/users/dev-pedr0/repos?sort=created&per_page=5")
            .then((res) => res.json())
            .then((data) => setRepos(data));
    }, []);

    return (
        <div className='flex flex-col justify-center items-center sm:flex-row sm:flex-wrap sm:gap-5'>
            {repos.map((repo) => (
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
            ))}
        </div>
    )
}

export default Projects;