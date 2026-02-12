import React, { useState, useEffect, useRef } from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [shouldLoadGif, setShouldLoadGif] = useState(false);
  const [isGifLoaded, setIsGifLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Determina qual imagem usar baseado no caminho do GIF
  const getPlaceholderImage = (gifPath: string): string => {
    if (gifPath.includes('v2card1.gif')) return '/project1.avif';
    if (gifPath.includes('v1card2.gif')) return '/project2.avif';
    return gifPath; // Fallback para a imagem original
  };

  const placeholderImage = getPlaceholderImage(project.image);

  useEffect(() => {
    // Detecta interação do usuário para carregar o GIF
    const handleUserInteraction = () => {
      if (!shouldLoadGif) {
        setShouldLoadGif(true);
      }
    };

    // Observa se o card entrou no viewport (Intersection Observer)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Card está visível, aguarda interação do usuário
            // Adiciona listeners de interação
            window.addEventListener('scroll', handleUserInteraction, { once: true });
            window.addEventListener('mousemove', handleUserInteraction, { once: true });
            window.addEventListener('touchstart', handleUserInteraction, { once: true });
            window.addEventListener('click', handleUserInteraction, { once: true });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleUserInteraction);
      window.removeEventListener('mousemove', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('click', handleUserInteraction);
    };
  }, [shouldLoadGif]);

  // Pré-carrega o GIF quando shouldLoadGif é true
  useEffect(() => {
    if (shouldLoadGif && project.image.endsWith('.gif')) {
      const img = new Image();
      img.onload = () => setIsGifLoaded(true);
      img.src = project.image;
    }
  }, [shouldLoadGif, project.image]);

  // Determina qual imagem mostrar
  const currentImage = shouldLoadGif && isGifLoaded ? project.image : placeholderImage;

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
      <div
        ref={cardRef}
        className="relative aspect-[4/3] md:aspect-video w-full overflow-hidden rounded-[1rem] shadow-sm transition-transform duration-500 group-hover:scale-[1.02]"
      >
        <img
          src={currentImage}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
    </a>
  );
};

export default ProjectCard;