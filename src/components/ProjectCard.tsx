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
      {/* 
          Para ajustar a altura do card:
          - No mobile: altere 'aspect-[4/3]' (4:3 é mais alto que o padrão 16:9 vídeo)
          - No desktop: altere 'md:aspect-video' (padrão 16:9)
          Você também pode usar valores fixos como 'h-[300px]' se preferir.
      */}
      <div className="relative aspect-[4/3] md:aspect-video w-full overflow-hidden rounded-[2rem] shadow-sm transition-transform duration-500 group-hover:scale-[1.02]">
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