import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full group relative cursor-pointer"
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-[2rem] shadow-sm transition-transform duration-500 group-hover:scale-[1.02]">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </a>
  );
};

export default ProjectCard;