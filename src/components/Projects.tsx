"use client";

import React from 'react';
import { useEffect, useState } from "react";
import ProjectCard from './ProjectCard';

export type Repo = {
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
                <ProjectCard key={repo.id} repo={repo}/>
            ))}
        </div>
    )
}

export default Projects;